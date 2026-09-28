# Reglas del proyecto (Next.js 16, TypeScript, Tailwind v4, App Router, sin src/)

Fuente de verdad: `context.md` (secciones 4.1, 4.2 y 4.3). Léelo antes de escribir código y no lo modifiques.

## Reglas obligatorias
- Solo Tailwind. Nada de `style={{}}` ni librerías de componentes (shadcn, MUI, Ant, Chakra).
- Componentes `const` con `export default`, un componente por archivo en `/components`, máximo ~80 líneas cada uno. Si uno se pasa, divídelo.
- Tipos en `/types`, datos mock en `/data`. Sin `any`, sin interfaces vacías (sin props = sin interface).
- Navegación interna solo con `<Link>` de `next/link`, nunca `<a href>`.
- Mobile-first: se diseña para 375px y se adapta con `md:` (768px).
- Clases de Tailwind siempre literales completas; nunca `md:grid-cols-${n}`.
- No llamar a `setState` de forma síncrona dentro de `useEffect`; solo dentro del callback del `setTimeout`, que se limpia al desmontar.

## Decisiones ya tomadas
- Precio siempre `pricePerNight` (number) mostrado "por noche", con formato es-MX. Sin fechas ni "en total".
- Placeholders de foto: divs `bg-neutral-200`, sin imágenes externas.
- `SearchBar`: `value={query ?? ""}` y `readOnly={!onQueryChange}`.
- `StarRating`: con `reviewCount` muestra "★ 4.8 · 12 reseñas"; sin él, "★ 4.8". `PropertyCard` no lo pasa.
- Un único `rooms: Room[]` en `data/rooms.ts` alimenta Home, Catálogo y Detalle; los ids coinciden con `/rooms/[id]`.
- Catálogo en escritorio: grid `md:grid-cols-2` (lista y mapa a partes iguales); el mapa es sticky con `md:self-start`.
- Al terminar cada tarea ejecuta `npx tsc --noEmit`, `npm run lint` y `npm run build`, y corrige hasta que pasen.
