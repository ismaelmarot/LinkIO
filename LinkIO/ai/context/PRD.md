# Linkio – PRD

## 1. Descripción
Linkio es una aplicación para guardar, organizar y gestionar links de forma simple, visual y rápida.

Permite almacenar enlaces con metadata (título, imagen, icono), agregar notas y clasificarlos con tags.

---

## 2. Objetivo
Centralizar todos los links del usuario en un solo lugar, accesible desde web y escritorio, con sincronización automática.

---

## 3. Usuario objetivo
- Personas que guardan muchos links (trabajo, estudio, interés personal)
- Desarrolladores, creadores, estudiantes
- Usuarios que hoy usan bookmarks desordenados

---

## 4. MVP (Funcionalidades principales)

### Links
- Crear link
- Editar link
- Eliminar link
- Listar links

### Datos del link
- URL
- Título (manual o automático)
- Subtítulo / descripción
- Imagen (automática o subida)
- Favicon
- Nota
- Tags (custom)

### Acciones
- Abrir link
- Copiar link
- Compartir link

### Organización
- Búsqueda por texto
- Filtrado por tags

---

## 5. Funcionalidades automáticas (MVP+)
- Obtener metadata desde la URL:
  - título (og:title)
  - imagen (og:image)
  - descripción (og:description)
- Obtener favicon del sitio

---

## 6. Plataformas
- Web (principal)
- Desktop (Electron)

Ambas consumen el mismo backend.

---

## 7. Arquitectura

### Frontend
- React + TypeScript

### Backend
- Node.js + Express

### Base de datos
- SQLite (inicio)

### Desktop
- Electron

---

## 8. Modelo de datos

```ts
Link {
  id: string
  url: string
  title: string
  subtitle?: string
  image?: string
  favicon?: string
  note?: string
  tags: string[]
  createdAt: Date
}