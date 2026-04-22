# 🔗 API – Linkio

## 🎯 Objetivo
Definir endpoints simples para:

- gestión de links
- obtención de metadata
- organización (tags, búsqueda)

---

## 📌 Endpoints

### POST /links
Crear link

**Body**
{
  "url": "https://example.com",
  "title": "Opcional",
  "note": "Opcional",
  "tags": ["dev", "tools"]
}

**Notas**
- `url` obligatorio
- metadata (title, image, favicon, description) se completa automáticamente si falta

---

### GET /links
Listado de links

**Query params**
- `search` → busca en título y nota
- `tag` → filtra por tag

**Ejemplo**
GET /links?search=react&tag=dev

---

### GET /links/:id
Obtener link

---

### PUT /links/:id
Actualizar link

**Body**
{
  "title": "Nuevo título",
  "subtitle": "Nuevo subtítulo",
  "image": "Nueva imagen",
  "note": "Nueva nota",
  "tags": ["nuevo"]
}

---

### DELETE /links/:id
Eliminar link

---

### POST /metadata
Obtener metadata de una URL

**Body**
{
  "url": "https://example.com"
}

**Response**
{
  "title": "Example",
  "description": "Descripción",
  "image": "https://...",
  "favicon": "https://..."
}

---

## 📦 Formato de respuesta

**Éxito**
{
  "success": true,
  "data": {}
}

**Error**
{
  "success": false,
  "error": "mensaje"
}

---

## 🧱 Modelo

Link {
  id: string
  url: string
  title: string
  subtitle?: string
  image?: string
  favicon?: string
  note?: string
  tags: string[]
  createdAt: string
}

---

## 🚀 Principio clave

Endpoints simples, rápidos y predecibles.