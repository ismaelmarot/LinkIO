import { Request, Response, NextFunction } from "express";
import prisma from "../lib/prisma";

export interface AuthRequest extends Request {
  userId?: string;
}

export const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  console.log("[Auth Middleware] Headers:", JSON.stringify(req.headers, null, 2));
  console.log("[Auth Middleware] Authorization header:", req.headers.authorization);
  
  // Check if clerkMiddleware has run and attached auth object
  const auth = (req as any).auth;
  console.log("[Auth Middleware] Auth object from clerkMiddleware:", auth ? "Present" : "Missing");
  if (auth) {
    console.log("[Auth Middleware] Auth object details:", JSON.stringify(auth, null, 2));
  }

  let userId = auth?.userId;
  const sessionClaims = auth?.sessionClaims;

  console.log("[Auth Middleware] userId from clerk:", userId);
  console.log("[Auth Middleware] sessionClaims from clerk:", sessionClaims);

  // If clerkMiddleware didn't find a userId, try to extract token from Authorization header
  if (!userId && req.headers.authorization) {
    console.log("[Auth Middleware] No userId from clerkMiddleware, trying Authorization header");
    const tokenMatch = req.headers.authorization.match(/^Bearer\s+(.+)$/i);
    if (tokenMatch) {
      const token = tokenMatch[1];
      // Log only the first 10 characters of the token for security
      console.log("[Auth Middleware] Found token in Authorization header (first 10 chars):", token.substring(0, 10) + "...", "attempting to verify...");
      
      try {
        // Verify the token by decoding the JWT payload (not secure but works for dev)
        // In production, you should use proper JWT verification with Clerk's JWKS
        const tokenParts = token.split('.');
        if (tokenParts.length === 3) {
          // Decode the payload (second part of JWT)
          const payloadBase64 = tokenParts[1];
          // Add padding if needed
          const paddedPayload = payloadBase64.endsWith('=') ? payloadBase64 : 
                              payloadBase64.length % 4 === 0 ? payloadBase64 : 
                              payloadBase64 + '='.repeat(4 - payloadBase64.length % 4);
                              
          try {
            const payloadJson = Buffer.from(paddedPayload, 'base64').toString('utf-8');
            const payload = JSON.parse(payloadJson);
            console.log("[Auth Middleware] Decoded token payload:", JSON.stringify(payload, null, 2));
            
            // Extract user ID from payload
            if (payload.sub) {
              userId = payload.sub;
              console.log("[Auth Middleware] Extracted userId from token payload:", userId);
              
              // Update auth object with data from token
              (req as any).auth = {
                userId: userId,
                sessionId: payload.sid || null,
                sessionClaims: payload // Use the whole payload as session claims for now
              };
            } else {
              console.log("[Auth Middleware] No subject (userId) found in token payload");
            }
          } catch (decodeError) {
            console.error("[Auth Middleware] Error decoding token payload:", decodeError);
          }
        } else {
          console.log("[Auth Middleware] Invalid token format - not a JWT");
        }
      } catch (error) {
        console.error("[Auth Middleware] Error verifying token:", error);
        // If token verification fails, we'll continue and let the auth check fail below
      }
    }
  }

  // Re-check userId after attempting to extract from token
  const updatedAuth = (req as any).auth;
  userId = updatedAuth?.userId;
   
  console.log("[Auth Middleware] Final userId:", userId);
   
  if (!userId) {
    console.log("[Auth Middleware] No userId available, returning 401");
    return res.status(401).json({ error: "No authenticated" });
  }

  const finalSessionClaims = updatedAuth?.sessionClaims || {};
  const email = finalSessionClaims?.email || finalSessionClaims?.primaryEmail;

  try {
    await prisma.user.upsert({
      where: { id: userId },
      update: {},
      create: {
        id: userId,
        email: email || `${userId}@clerk.dev`,
        name: finalSessionClaims?.name || "User",
        password: "",
      },
    });
  } catch (err) {
    console.error("[Auth Middleware] Failed to sync user:", err);
    return res.status(500).json({ error: "Failed to sync user" });
  }

  console.log("[Auth Middleware] User authenticated successfully, calling next()");
  req.userId = userId;
  next();
};