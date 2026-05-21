# PRD — Sports Tracking Platform
## Version 1.0
## MVP Product Requirements Document

---

# 1. Product Overview

## Product Name

GoTrack (temporary name)

---

## Product Vision

Create a modern sports tracking platform focused on outdoor activities such as:
- Running
- Cycling
- Rollers / Inline Skating
- Walking
- Trekking

The application should provide:
- Real-time GPS tracking
- Route management
- Activity analytics
- Event creation
- Route reuse
- Future social and live features

The MVP must prioritize:
- simplicity
- performance
- maintainability
- scalability
- clean UX

---

# 2. Product Goals

## Primary Goals
- Track sports activities in real time
- Store and visualize GPS routes
- Allow route reuse
- Allow event creation using saved routes
- Deliver a modern mobile-first experience

---

## Secondary Goals
- Prepare architecture for live tracking
- Prepare architecture for social features
- Prepare architecture for offline-first support
- Prepare architecture for GPX import/export

---

# 3. Target Users

## Primary Users
Outdoor sports enthusiasts:
- runners
- cyclists
- skaters
- hikers

---

## User Characteristics
- mobile-first users
- need simple UX
- want fast activity tracking
- value route history and stats
- may participate in group events

---

# 4. MVP Scope

---

# Included in MVP

## Authentication
- Register
- Login
- JWT authentication
- Refresh token support

---

## Activity Tracking
- Start activity
- Pause activity
- Resume activity
- Finish activity
- Save activity
- Discard activity

---

## GPS Tracking
- Real-time GPS tracking
- Live route drawing
- Distance calculation
- Duration calculation
- Speed calculation
- Elevation support (basic)

---

## Maps
- OpenStreetMap
- Leaflet integration
- Live route rendering
- Route visualization

---

## Activity History
- List previous activities
- View activity details
- View route map
- View statistics

---

## Dashboard
- Weekly statistics
- Total distance
- Total duration
- Recent activities

---

## Routes
- Save routes
- Reuse routes
- Duplicate routes

---

## Events
- Create event
- Assign saved route
- Event details
- Public/private event visibility

---

# Excluded from MVP

## NOT included initially
- live shared tracking
- followers/social feed
- chat
- rankings
- AI recommendations
- advanced analytics
- wearable integrations
- Apple Watch / Garmin support
- push notifications
- offline sync engine
- GPX import/export UI

---

# 5. Technical Stack

---

# Frontend

## Technologies
- React
- TypeScript
- Vite
- Styled Components
- React Router
- Zustand
- TanStack Query
- Axios

---

# Backend

## Technologies
- Node.js
- Express

---

# Database

## Database
- PostgreSQL

## Provider
- Neon

## ORM
- Prisma

---

# Hosting

## Platform
- Vercel

---

# Maps

## Libraries
- Leaflet
- OpenStreetMap

---

# Logging

## Logging Library
- Pino

---

# 6. Core Features

---

# 6.1 Authentication

## Requirements
Users must be able to:
- register account
- login
- logout
- maintain session

---

## Validation Rules
- email validation
- password minimum length
- secure token storage

---

# 6.2 Real-Time Tracking

## Requirements
The app must:
- access device GPS
- update coordinates continuously
- calculate live metrics
- handle GPS interruptions

---

## Metrics
- current speed
- average speed
- distance
- elapsed time
- calories estimate
- elevation estimate

---

# 6.3 Route System

## Requirements
Users must be able to:
- save routes
- reuse routes
- duplicate routes
- associate routes with events

---

# 6.4 Event System

## Event Fields
- title
- description
- date
- start location
- route
- difficulty
- max participants
- privacy

---

# 6.5 Dashboard

## Dashboard Data
- total activities
- weekly distance
- total duration
- recent sessions

---

# 7. User Experience

---

# Design Principles

## UI Style
- modern
- minimalist
- premium
- mobile-first
- dark mode ready

---

## UX Priorities
- fast interaction
- low friction
- large touch controls
- clear hierarchy
- simple navigation

---

# 8. Functional Requirements

---

# Activity Tracking

## FR-001
User can start activity tracking.

## FR-002
User can pause activity tracking.

## FR-003
User can resume activity tracking.

## FR-004
User can stop and save activity.

---

# GPS

## FR-005
App must collect GPS points continuously.

## FR-006
App must draw route on map in real time.

## FR-007
App must calculate distance dynamically.

---

# Routes

## FR-008
User can save a route.

## FR-009
User can reuse saved routes.

---

# Events

## FR-010
User can create an event.

## FR-011
User can associate a route with an event.

---

# 9. Non-Functional Requirements

---

# Performance
- fast initial load
- responsive UI
- optimized map rendering

---

# Scalability
Architecture must support:
- future live tracking
- social systems
- offline-first sync
- GPX support

---

# Security
- JWT authentication
- password hashing
- request validation
- rate limiting

---

# Maintainability
- modular architecture
- reusable components
- typed APIs
- feature-based structure

---

# 10. Database Models

---

# User
Stores user profile and authentication data.

---

# Activity
Stores completed sport sessions.

---

# GPSPoint
Stores route coordinates.

---

# Route
Stores reusable routes.

---

# Event
Stores sport events.

---

# EventParticipant
Stores event participation relationships.

---

# 11. API Overview

---

# Auth
- POST /auth/register
- POST /auth/login
- POST /auth/refresh

---

# Activities
- GET /activities
- POST /activities
- GET /activities/:id

---

# Routes
- GET /routes
- POST /routes

---

# Events
- GET /events
- POST /events
- GET /events/:id

---

# 12. Folder Architecture

```txt
src/
  app/
  features/
  shared/
  components/
  hooks/
  services/
  routes/
  store/
  styles/
  types/
  utils/