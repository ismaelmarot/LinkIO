# 🗄️ Database – Linkio

## 🎯 Objetivo
Base de datos simple para:

- almacenar links
- guardar metadata (imagen, favicon, etc)
- organizar con tags

---

## 📊 Tabla principal

### link

- id (PK)
- url
- title
- subtitle (opcional)
- image (opcional)
- favicon (opcional)
- note (opcional)
- tags (string JSON o texto separado por comas)
- created_at

---

## 🧱 Reglas

- usar SQLite
- una sola tabla (MVP)
- no normalizar de más
- priorizar simplicidad

---

## 🔑 Claves

- primary key en `link.id`

---

## ⚡ Lógica de datos

- cada registro representa un link único
- `url` puede repetirse (no forzar unique en MVP)
- metadata puede venir:
  - automática (scraping)
  - manual (usuario)

- `tags`:
  - array simple (JSON) o string
  - sin tabla separada (MVP)

---

## 🖼️ Imágenes

- `image`:
  - puede ser URL externa (og:image)
  - o subida por usuario (guardar path)

- `favicon`:
  - URL generada desde el dominio

---

## 📅 Fechas

- `created_at` → ISO string

---

## ⚠️ Reglas

- no requerir todos los campos (flexible)
- permitir edición manual de todos los datos
- no validaciones complejas en MVP

---

## 🚫 Evitar

- tabla de tags separada
- relaciones innecesarias
- joins complejos
- optimización prematura

---

## 🚀 Principio clave

Un link = un registro simple, editable y completo.