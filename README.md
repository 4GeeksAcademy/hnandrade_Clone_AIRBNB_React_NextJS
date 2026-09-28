# Clon de Airbnb

Aplicación de alojamiento con páginas de exploración, catálogo y detalle de habitaciones. Incluye búsqueda por texto y categoría, ordenación por precio, navegación de galería y selección local de huéspedes.

## Stack

- Next.js 16
- TypeScript
- Tailwind CSS v4
- App Router

## Ejecución local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

- `app/`: rutas Home, Catálogo y Detalle de habitación.
- `components/`: componentes compartidos y componentes de cada vista.
- `types/`: tipos de propiedades, habitaciones, categorías, anfitriones y amenities.
- `data/`: categorías y habitaciones mock compartidas por las páginas.
- `docs/`: capturas de referencia y documentación.

`context.md` contiene las especificaciones y decisiones de diseño del proyecto.
