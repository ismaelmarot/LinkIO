# 📄 Linkio

## 🎯 Objetivo
Aplicación web responsive para guardar, organizar y gestionar links de forma simple, visual y rápida.

Permite almacenar enlaces con metadata automática, agregar notas y clasificarlos con tags.

---

## 💡 Propuesta de valor
Un lugar centralizado, limpio y rápido para guardar links importantes, evitando bookmarks desordenados.

Sin fricción, sin ruido, sin complejidad innecesaria.

---

## 👤 Usuario objetivo
Personas que guardan muchos links:

- Desarrolladores
- Estudiantes
- Creadores de contenido
- Usuarios que investigan o guardan recursos

---

## 🧠 Filosofía del proyecto

- Simplicidad > complejidad
- MVP primero
- UX/UI limpio (estilo Apple)
- Velocidad de uso
- Código mantenible

---

## 🧱 Stack

- Frontend: React + TypeScript + Styled Components
- Backend: Node + Express
- Database: SQLite
- Desktop (opcional): Electron

---

## ⚙️ Arquitectura

- Frontend separado del backend
- Backend maneja lógica, metadata y base de datos
- API simple (REST)
- Aplicación 100% online (MVP)

---

## 🧩 Modelo conceptual

🔗 Link

- URL
- Título
- Subtítulo / descripción
- Imagen (preview)
- Favicon
- Nota
- Tags
- Fecha de creación

---

## 🔥 MVP (alcance inicial)

### 🔗 Gestión de links
- Crear link
- Editar link
- Eliminar link
- Listar links

---

### 🤖 Metadata automática
Al pegar un link:

- Obtener título (og:title)
- Obtener imagen (og:image)
- Obtener descripción (og:description)
- Obtener favicon

---

### 🏷️ Organización
- Tags personalizados
- Búsqueda por texto
- Filtro por tags

---

### ⚡ Acciones
- Abrir link
- Copiar link
- Compartir link

---

## 📱 UI

- Responsive (mobile-first)
- Diseño minimalista
- Cards visuales con imagen
- Feedback inmediato

---

## 🤖 Comportamiento del sistema

- Detecta metadata automáticamente
- Permite edición manual
- No bloquea si falta información
- Respuesta rápida al guardar

---

## 🌍 Idiomas

- Español (MVP)
- Inglés (futuro)

---

## ⚖️ Reglas de uso (MVP)

- Sin autenticación (fase inicial)
- Cada link es independiente
- No validaciones complejas
- Flujo rápido: pegar → guardar

---

## 🎨 UX/UI (clave del producto)

Diseño tipo Apple:

- Espacios amplios
- Tipografía limpia
- Cards con bordes redondeados
- Jerarquía clara

Acción principal:

👉 “Agregar link”

---

## 🚫 Evitar (muy importante)

- Sistemas complejos de usuarios
- IA innecesaria al inicio
- Extensiones desde el día 1
- Normalización excesiva en DB
- Sobreingeniería

---

## 🔮 Futuro (NO MVP)

- Resumen automático con IA
- Sugerencia de tags
- Extensión de navegador
- Favoritos / ranking
- Sincronización offline
- Importación de bookmarks

---

## 💰 Monetización (opcional futuro)

- Plan gratuito limitado
- Suscripción mensual
- Features premium (IA, sync avanzado)

---

## 🎯 Definición de MVP terminado

El proyecto está terminado cuando:

- Se puede guardar un link
- Se obtiene metadata automáticamente
- Se pueden editar datos
- Se pueden agregar tags
- Se puede buscar y filtrar
- Las acciones (abrir/copiar) funcionan
- La UI es rápida y clara en mobile

---

## 🚀 Principio clave del proyecto

Si guardar un link no es inmediato, simple y confiable → el producto falla.