# 🧪 Testing – Linkio

## 🎯 Objetivo
Validar funcionamiento crítico del sistema

---

## ✅ Casos principales

### Links
- crear link correcto
- editar link
- eliminar link
- obtener listado

### Metadata
- obtención automática correcta
- fallback si no hay metadata
- favicon generado correctamente

### Búsqueda y organización
- búsqueda por texto
- filtro por tag
- combinación de filtros

### Acciones
- copiar link
- abrir link
- compartir link

---

## ⚠️ Casos edge

- URL inválida
- metadata inexistente
- links duplicados
- tags vacíos o repetidos
- imágenes rotas
- respuesta lenta del scraping

---

## 🧱 Datos

- link sin título (autogenerado)
- link sin imagen
- link con datos manuales sobreescritos
- tags en distintos formatos

---

## 🚀 Principio

Testear lo crítico, no todo.