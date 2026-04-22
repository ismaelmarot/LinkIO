# 🧠 Development Rules – Linkio

## 🎯 Objetivo
Definir la estructura estándar para componentes en el frontend.

---

## 🧱 Estructura de componentes

Cada componente debe seguir esta estructura:

/Componente
- Componente.tsx
- Componente.styles.ts
- useComponente.ts
- index.ts

---

## 📌 Reglas

### 1. Componente.tsx
- Solo UI
- Sin lógica compleja
- Usa hooks externos

---

### 2. Componente.styles.ts
- Styled Components
- Sin lógica
- Solo estilos

---

### 3. useComponente.ts
- Toda la lógica del componente
- Manejo de estado
- Llamadas a API
- Funciones auxiliares

---

### 4. index.ts
- Exporta el componente

```ts
export * from "./Componente"