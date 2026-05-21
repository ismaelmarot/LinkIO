# 🧠 Frontend Development Rules

# 🎯 Objective

Define the standard architecture and structure for frontend components in the project.

The goal is to maintain:
- scalability
- maintainability
- readability
- separation of concerns
- consistent project organization

This structure is mandatory for all frontend components.

---

# 🧱 Component Structure

Each component must follow this structure:

```txt
/ComponentName

  ComponentName.tsx
  ComponentName.styles.ts
  useComponentName.ts
  index.ts
```

---

# 📌 Rules

# 1. ComponentName.tsx

## Responsibility
UI only.

## Rules
- No complex business logic
- No API calls
- No heavy state management
- Keep components declarative and clean
- Use external hooks for logic
- Receive processed data from hooks

## Allowed
- rendering
- conditional rendering
- props
- event bindings
- composition

## Example
```tsx
export const TrackingCard = () => {
  const {
    distance,
    duration,
    handleStartTracking,
  } = useTrackingCard();

  return (
    <Container>
      <Title>Tracking</Title>

      <Metric>{distance}</Metric>

      <Button onClick={handleStartTracking}>
        Start
      </Button>
    </Container>
  );
};
```

---

# 2. ComponentName.styles.ts

## Responsibility
Styled Components only.

## Rules
- No business logic
- No API calls
- No state management
- No calculations
- Only styles

## Use
- styled-components
- theme variables
- responsive styles
- animations
- reusable UI patterns

## Example
```tsx
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const Title = styled.h2`
  font-size: 20px;
`;
```

---

# 3. useComponentName.ts

## Responsibility
All component logic.

## Rules
- State management
- API calls
- handlers
- calculations
- derived state
- business logic
- side effects
- hooks composition

## Use
- Zustand
- TanStack Query
- custom hooks
- services
- utils

## Example
```tsx
export const useTrackingCard = () => {
  const [distance, setDistance] = useState(0);

  const handleStartTracking = () => {
    console.log("Tracking started");
  };

  return {
    distance,
    handleStartTracking,
  };
};
```

---

# 4. index.ts

## Responsibility
Component export only.

## Rules
- Export the main component
- Keep imports clean
- Simplify module access

## Example
```tsx
export * from "./TrackingCard";
```

---

# 🧩 Additional Rules

# Component Naming
- Use PascalCase
- One component per folder
- Folder name must match component name

✅ Correct
```txt
/TrackingCard
```

❌ Incorrect
```txt
/tracking-card
/tracking
/card
```

---

# Hooks Naming

Custom hooks must:
- start with "use"
- use PascalCase after "use"

✅ Correct
```txt
useTrackingCard.ts
useDashboard.ts
```

---

# Styling Rules

## Mandatory
- Use Styled Components only
- No inline styles
- No CSS files
- No Tailwind
- No mixed styling systems

---

# Component Philosophy

## Components must be:
- small
- reusable
- composable
- easy to test
- easy to read

---

# Separation of Concerns

## UI Layer
Responsible for:
- rendering
- layout
- visuals

## Hook Layer
Responsible for:
- logic
- state
- side effects
- API integration

## Service Layer
Responsible for:
- HTTP requests
- external integrations

---

# Recommended Structure Example

```txt
/features

  /tracking

    /components

      /TrackingCard
        TrackingCard.tsx
        TrackingCard.styles.ts
        useTrackingCard.ts
        index.ts
```

---

# API Calls

## Rules
- Never call APIs directly inside components
- Use services
- Use TanStack Query when possible

✅ Correct
```tsx
const { data } = useActivitiesQuery();
```

❌ Incorrect
```tsx
useEffect(() => {
  fetch("/api/activities");
}, []);
```

---

# State Management

## Local State
Use:
- useState
- useReducer

## Global State
Use:
- Zustand

---

# Performance Rules

## Avoid
- unnecessary re-renders
- massive components
- duplicated logic

## Prefer
- memoization when necessary
- derived state
- reusable hooks

---

# Project Philosophy

This project prioritizes:
1. simplicity
2. maintainability
3. scalability
4. clean architecture
5. developer experience

Avoid:
- overengineering
- unnecessary abstractions
- giant components
- mixed responsibilities