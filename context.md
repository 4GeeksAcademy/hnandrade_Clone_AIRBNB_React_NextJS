# Contexto del proyecto: Clon de Airbnb

## 1. Descripción de las tres páginas

### Home (`/`)
Muestra la barra de navegación con logo, buscador e iconos de usuario, una fila desplazable de filtros por categoría y tarjetas con placeholder de foto, título, precio por noche y valoración con estrellas, sin fechas. El buscador filtra las tarjetas en tiempo real mediante `useState`. Incluye un estado de carga simulado y un enlace `<Link>` con el texto "Ver todos los alojamientos" hacia `/catalog`. Al hacer clic en una tarjeta, el usuario navega a `/rooms/[id]`.

### Catálogo (`/catalog`)
Muestra una cabecera con el número de resultados y un control para ordenar por precio ascendente o descendente, además de tarjetas de alojamiento y un área de mapa representada como placeholder. En escritorio (`md`, 768px o más), el mapa aparece a la derecha de la lista; en móvil, debajo de las tarjetas. El usuario puede cambiar el orden y abrir una tarjeta para navegar a `/rooms/[id]`.

### Detalle de habitación (`/rooms/[id]`)
Muestra una galería de imágenes con navegación; una cabecera con título, estrellas, número de reseñas y ubicación; información del anfitrión, amenities y una tarjeta de reserva con contador de huéspedes. Incluye un estado de carga simulado. Un botón para volver o breadcrumb con `<Link>` permite regresar a `/catalog`. El usuario puede recorrer las fotos y ajustar huéspedes antes de iniciar la reserva.

## 2. Componentes principales por vista

### Compartidos
- `Navbar` (compartido): agrupa `Logo`, `SearchBar` y `UserMenu`, y recibe `query` y `onQueryChange` como props opcionales.
- `Logo` (compartido): muestra la marca y enlaza a Home.
- `SearchBar` (compartido): permite introducir una búsqueda y comunicar cambios de query.
- `UserMenu` (compartido): presenta los iconos y accesos del usuario.
- `PropertyCard` (compartido): muestra el resumen visual de un alojamiento y enlaza a `/rooms/[id]`.
- `PropertyGrid` (compartido): organiza `properties: Property[]` en una cuadrícula reutilizable en Home y Catálogo.
- `StarRating` (compartido): representa una valoración mediante estrellas.
- `LoadingSpinner` (compartido): indica visualmente un estado de carga.

### Home (`/`)
- `CategoryFilters`: agrupa los filtros disponibles por categoría.
- `CategoryChip`: muestra y permite seleccionar una categoría.
- `EmptyState`: informa cuando la búsqueda o los filtros no devuelven alojamientos.

### Catálogo (`/catalog`)
- `CatalogHeader`: muestra el total de resultados y permite ordenar por precio ascendente o descendente.
- `MapPlaceholder`: reserva el área del mapa, a la derecha de las tarjetas en escritorio y debajo en móvil.

### Detalle de habitación (`/rooms/[id]`)
- `BackLink`: ofrece un botón o breadcrumb con `<Link>` para volver a `/catalog`.
- `RoomGallery`: presenta las imágenes del alojamiento y sus controles de navegación.
- `RoomHeader`: muestra el título, la valoración con `StarRating`, el número de reseñas y la ubicación.
- `HostInfo`: presenta la información del anfitrión.
- `AmenitiesList`: agrupa los servicios disponibles.
- `AmenityItem`: muestra un servicio individual.
- `BookingCard`: presenta el precio por noche, incluye el contador de huéspedes (`GuestCounter`) y un botón CTA para reservar.
- `GuestCounter`: permite ajustar el número de huéspedes.

## 3. El usuario
El usuario es un viajero de entre 25 y 40 años que planea una escapada de fin de semana y busca alojamiento sobre todo desde el móvil, en ratos libres. Necesita encontrar un lugar con buen precio por noche, en una ubicación cómoda y con buenas valoraciones, y le frustra abrir muchas fichas para comparar o perder tiempo con resultados que no encajan. En Home explora por categorías (playa, mansiones, tendencias) y escribe en el buscador para reducir la lista al instante. En el catálogo ordena los resultados por precio y usa el mapa para ubicarlos. En el detalle revisa las fotos, al anfitrión y los servicios, y ajusta el número de huéspedes antes de reservar.

## 4. Especificaciones generadas con prompts de visión

### 4.1 Home
Captura usada: `home-375.png` (375px).

<details>
<summary>Prompt usado</summary>

```text
Te adjunto una captura de Airbnb a 375px de ancho: home-375.png (también está en docs/screenshots/). Es la vista HOME, que será la ruta "/".

Analiza la imagen y genera una ESPECIFICACIÓN DE COMPONENTES en Markdown. No escribas la implementación, solo la especificación.

Usa EXACTAMENTE estos nombres de componente, que ya están definidos en la sección 2 de context.md: Navbar, Logo, SearchBar, UserMenu, CategoryFilters, CategoryChip, PropertyGrid, PropertyCard, StarRating, LoadingSpinner y EmptyState. No inventes componentes nuevos; si crees que falta uno, indícalo al final como propuesta.

Para CADA componente indica:
1. Nombre (PascalCase) y archivo (components/Nombre.tsx).
2. Responsabilidad en una frase.
3. Props como interface de TypeScript.
4. Estado local (useState/useEffect) si lo necesita, y para qué. Aclara si el estado vive en el componente o en la página y llega por props.
5. Relación de layout: padre, hijos, y disposición (flex/grid, dirección, gap, alineación) en móvil (375px) y en escritorio (md: 768px+).
6. Pistas de Tailwind: espaciados, radios, sombras, colores aproximados, tamaños de texto, tomados de la captura.

Además incluye:
- Un árbol jerárquico de componentes de la página en ASCII.
- Los campos de datos visibles en pantalla, y la interface Property propuesta con estos campos como mínimo: id (string), title (string), location (string), pricePerNight (number), rating (number), reviewCount (number), category (string), images (string[]), y cualquier otro que veas necesario.
- Una lista de elementos de la captura que NO vamos a implementar.

ALCANCE de esta vista:
- La Home es una página cliente ("use client"). Ahí viven cuatro estados: query (texto del buscador), activeCategory (categoría activa), properties (lista) e isLoading (carga).
- Navbar: logo, campo de búsqueda con useState que filtra las tarjetas en tiempo real, e iconos del menú de usuario. Recibe query y onQueryChange por props.
- CategoryFilters: fila horizontal con desplazamiento, cada CategoryChip con icono (emoji o SVG inline) + etiqueta (Playa, Mansiones, Tendencias, etc.) y la activa resaltada. Si la captura no muestra categorías, defínelas según este alcance.
- PropertyGrid: 1 columna en móvil (375px) y varias columnas desde md. Cada PropertyCard muestra placeholder de foto (un div con fondo gris, sin imágenes externas), título, PRECIO POR NOCHE (no "en total") y valoración con estrellas. Sin fechas. Toda la tarjeta es un <Link> a /rooms/[id].
- Carga simulada: useEffect al montar, properties empieza vacío, isLoading en true, y tras un setTimeout de 1 segundo se asignan los datos y isLoading pasa a false. Mientras tanto se muestra LoadingSpinner.
- EmptyState cuando el filtro no devuelve resultados.
- Un <Link> con el texto "Ver todos los alojamientos" hacia /catalog.

REGLAS: mobile-first, solo Tailwind (sin style inline), sin librerías de componentes, un componente por archivo, máximo ~80 líneas por componente, componentes const.

FORMATO DE SALIDA: escribe la especificación en context.md, en la subsección "4.1 Home", reemplazando "(pendiente)". Al inicio de la subsección incluye:
- El nombre de la captura usada (home-375.png).
- Este mismo prompt dentro de un bloque <details><summary>Prompt usado</summary> ... </details>, para que quede documentado el flujo de visión.
No toques ninguna otra parte de context.md ni ningún otro archivo.
```
</details>

#### Estructura de página

La página cliente de `app/page.tsx` coordina los cuatro estados y filtra los alojamientos; el estado de búsqueda pertenece a la página y se pasa a `Navbar` y `SearchBar` por props. `properties` comienza como `[]` e `isLoading` como `true`. Un `useEffect` de montaje inicia un `setTimeout` de 1 segundo, asigna los datos mock y cambia `isLoading` a `false`; el efecto limpia el temporizador al desmontarse. Mientras carga se muestra `LoadingSpinner`; al terminar se muestra `PropertyGrid` si hay resultados, o `EmptyState` si los filtros dejan la lista vacía. La búsqueda y la categoría se combinan en un filtrado derivado, sin un quinto estado.

```text
Página cliente: app/page.tsx
├── Navbar
│   ├── Logo
│   ├── SearchBar
│   └── UserMenu
├── CategoryFilters
│   └── CategoryChip (uno por categoría)
├── [si isLoading] LoadingSpinner
├── [si terminó la carga y hay coincidencias] PropertyGrid
│   └── PropertyCard (una por alojamiento)
│       └── StarRating
├── [si terminó la carga y no hay coincidencias] EmptyState
└── <Link> Ver todos los alojamientos → /catalog
```

En móvil, el contenido se apila en una columna con márgenes laterales de 16px. En `md` y superiores, `PropertyGrid` usa varias columnas; Navbar distribuye marca, búsqueda y menú en una fila. El enlace al catálogo permanece después del listado.

#### Componentes

##### Navbar
- **Archivo:** `components/Navbar.tsx`.
- **Responsabilidad:** reúne la marca, la búsqueda controlada y los accesos del usuario en la cabecera.
- **Props:**
	```ts
	interface NavbarProps {
		query?: string;
		onQueryChange?: (query: string) => void;
	}
	```
- **Estado:** no mantiene estado propio; recibe `query` y `onQueryChange` desde la página y los pasa a `SearchBar`.
- **Layout:** padre de `Logo`, `SearchBar` y `UserMenu`; en 375px es una columna compacta, con la búsqueda ocupando el ancho disponible y logo/menú alineados en la cabecera; desde `md`, fila con logo a la izquierda, búsqueda centrada y menú a la derecha. Gap de 12–16px.
- **Tailwind:** fondo blanco, `px-4 py-3`, borde inferior gris muy claro; búsqueda con mayor espacio disponible en desktop.

##### Logo
- **Archivo:** `components/Logo.tsx`.
- **Responsabilidad:** muestra la marca y enlaza a la Home.
- **Props:**
	```ts
	interface LogoProps {}
	```
- **Estado:** ninguno.
- **Layout:** hijo izquierdo de `Navbar`; ancho intrínseco, alineado al centro verticalmente en móvil y escritorio.
- **Tailwind:** texto o marca en tono coral/rojo Airbnb aproximado (`#FF385C`), tamaño 22–26px y peso semibold/bold; evitar caja o sombra propia.

##### SearchBar
- **Archivo:** `components/SearchBar.tsx`.
- **Responsabilidad:** captura el texto de búsqueda y notifica cada cambio para filtrar las tarjetas en tiempo real.
- **Props:**
	```ts
	interface SearchBarProps {
		query?: string;
		onQueryChange?: (query: string) => void;
	}
	```
- **Estado:** no usa estado local; es un campo controlado por `query` de la página y llama `onQueryChange` en cada cambio.
- **Layout:** hijo de `Navbar`; ancho completo en móvil y ancho limitado/centrado en escritorio. Contiene el texto de búsqueda y un icono de búsqueda inline, alineados en fila.
- **Tailwind:** `flex`, `items-center`, `gap-3`, `rounded-full`, `border border-neutral-300`, fondo blanco, `px-5 py-3`; sombra ligera (`shadow-sm`), texto 14px y placeholder gris medio.

##### UserMenu
- **Archivo:** `components/UserMenu.tsx`.
- **Responsabilidad:** presenta los iconos y accesos visuales del menú de usuario.
- **Props:**
	```ts
	interface UserMenuProps {}
	```
- **Estado:** ninguno para el alcance de la Home; no se implementan menús desplegables ni flujo de autenticación.
- **Layout:** hijo derecho de `Navbar`, alineado al centro verticalmente; iconos en fila con gap de 8–12px tanto en móvil como en escritorio.
- **Tailwind:** controles compactos de 36–40px, fondo blanco, borde neutral tenue, radios completos, iconos de 16–20px y foco visible.

##### CategoryFilters
- **Archivo:** `components/CategoryFilters.tsx`.
- **Responsabilidad:** permite elegir una categoría y marca visualmente la selección activa.
- **Props:**
	```ts
	interface CategoryOption {
		id: string;
		label: string;
		icon: string;
	}

	interface CategoryFiltersProps {
		categories: CategoryOption[];
		activeCategory: string;
		onCategoryChange: (category: string) => void;
	}
	```
- **Estado:** no tiene estado local; `activeCategory` y `onCategoryChange` se conectan al estado de la página.
- **Layout:** sección debajo de `Navbar`, hija directa de la página; contiene `CategoryChip` en fila horizontal, `overflow-x-auto`, `flex-nowrap` y gap de 20–28px en 375px. En escritorio mantiene la fila sin salto y reparte/agrupa los chips según el ancho disponible.
- **Tailwind:** `border-b`, fondo blanco, `px-4`, `gap-6`, chips con padding vertical de 8–12px; texto 12–14px. Activa con texto/icono oscuro y borde inferior marcado; inactivas en gris.
- **Categorías mock:** Playa, Mansiones, Tendencias, Cabañas, Vistas increíbles y Espacios únicos; iconos emoji o SVG inline.

##### CategoryChip
- **Archivo:** `components/CategoryChip.tsx`.
- **Responsabilidad:** representa una categoría con icono y etiqueta, y comunica su selección.
- **Props:**
	```ts
	interface CategoryChipProps {
		category: CategoryOption;
		active: boolean;
		onSelect: (category: string) => void;
	}
	```
- **Estado:** ninguno; recibe `active` y notifica la selección al padre.
- **Layout:** hijo de `CategoryFilters`; icono arriba y etiqueta debajo, centrados en una columna; mantiene ancho intrínseco y no se encoge dentro del carrusel horizontal, en móvil y escritorio.
- **Tailwind:** `flex flex-col items-center gap-2`, `shrink-0`, padding horizontal compacto; icono de 22–26px y etiqueta de 12px. Seleccionado con texto oscuro y borde inferior neutral; no seleccionado gris.

##### PropertyGrid
- **Archivo:** `components/PropertyGrid.tsx`.
- **Responsabilidad:** organiza la lista ya filtrada de alojamientos en una cuadrícula adaptable.
- **Props:**
	```ts
	interface PropertyGridProps {
		properties: Property[];
	}
	```
- **Estado:** ninguno; recibe las propiedades filtradas de la página.
- **Layout:** hijo de la página; contiene un `PropertyCard` por propiedad. Una columna a 375px; desde `md`, varias columnas (dos o más según el ancho), alineadas al inicio. Gap aproximado de 20–24px.
- **Tailwind:** `grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3`; sin panel o fondo envolvente.

##### PropertyCard
- **Archivo:** `components/PropertyCard.tsx`.
- **Responsabilidad:** enlaza a la habitación y muestra su placeholder de foto, título, precio por noche y valoración.
- **Props:**
	```ts
	interface PropertyCardProps {
		property: Property;
	}
	```
- **Estado:** ninguno.
- **Layout:** hijo de `PropertyGrid`; toda la tarjeta es un `<Link>` a `/rooms/[id]`. Contenido en columna: placeholder arriba y detalles debajo; ocupa toda la columna en 375px y el ancho de una celda de grid en escritorio.
- **Tailwind:** placeholder `aspect-[4/3] w-full rounded-xl bg-neutral-200`; sin imagen externa. Detalles con `mt-3`, título 14px semibold, precio 14px con importe destacado y “por noche”, y valoración alineada a la derecha en una fila compacta; texto principal `#222`, secundario `#717171`. Sin fechas, sombra ni borde exterior de tarjeta.

##### StarRating
- **Archivo:** `components/StarRating.tsx`.
- **Responsabilidad:** representa la valoración numérica con una estrella y texto legible.
- **Props:**
	```ts
	interface StarRatingProps {
		rating: number;
		reviewCount?: number;
	}
	```
- **Estado:** ninguno.
- **Layout:** hijo de `PropertyCard`, junto a los datos del alojamiento; estrella y valoración alineadas en una fila con gap pequeño en todos los tamaños.
- **Tailwind:** `inline-flex items-center gap-1`, texto de 13–14px en `#222`; estrella oscura o negra, tamaño 12–14px. `reviewCount` solo se presenta si se decide mostrarlo en la tarjeta.

##### LoadingSpinner
- **Archivo:** `components/LoadingSpinner.tsx`.
- **Responsabilidad:** comunica que los alojamientos aún están cargando.
- **Props:**
	```ts
	interface LoadingSpinnerProps {
		label?: string;
	}
	```
- **Estado:** ninguno; su visibilidad depende de `isLoading` en la página.
- **Layout:** se muestra en lugar del grid, centrado horizontalmente y con espacio vertical amplio; ocupa el ancho disponible tanto en móvil como en escritorio.
- **Tailwind:** `flex flex-col items-center justify-center gap-3 py-16`; indicador circular de 28–32px con borde gris claro y segmento coral; texto auxiliar 14px gris. Accesible con `role="status"`.

##### EmptyState
- **Archivo:** `components/EmptyState.tsx`.
- **Responsabilidad:** informa que no hay alojamientos que coincidan con la búsqueda o categoría seleccionada.
- **Props:**
	```ts
	interface EmptyStateProps {
		query: string;
	}
	```
- **Estado:** ninguno; se muestra cuando terminó la carga y el filtrado produce cero resultados.
- **Layout:** reemplaza a `PropertyGrid` en la misma región de contenido; bloque centrado en móvil y escritorio, de ancho legible y sin anidarse en una tarjeta.
- **Tailwind:** `mx-auto flex max-w-md flex-col items-center gap-2 py-16 text-center`; título 18px semibold, detalle 14px neutral, fondo blanco y sin sombra.

#### Datos

Campos que presenta la tarjeta en Home: placeholder de imagen, título, precio por noche y valoración con estrellas. No se presentan fechas ni precio total. Ubicación, categoría, recuento de reseñas e imágenes también forman parte del modelo para filtrar y reutilizar los datos en las demás vistas; las imágenes no se descargan ni se muestran en esta Home.

```ts
interface Property {
	id: string;
	title: string;
	location: string;
	pricePerNight: number;
	rating: number;
	reviewCount: number;
	category: string;
	images: string[];
}
```

La lista de categorías se define como datos, no como componentes adicionales. El conjunto inicial puede incluir Playa, Mansiones, Tendencias, Cabañas, Vistas increíbles y Espacios únicos.

#### Fuera de alcance

- Fotografías reales o imágenes externas en las tarjetas; se usa únicamente el placeholder gris.
- Fechas, disponibilidad, precio total, selector de huéspedes en la búsqueda y calendario.
- Mapa interactivo, filtros avanzados, paginación y ordenación de resultados en Home.
- Favoritos persistentes, reseñas detalladas, autenticación y acciones reales del menú de usuario.
- Animaciones o carrusel de fotos dentro de las tarjetas.
- Componentes de librerías externas y estilos inline.

### 4.2 Catálogo
(pendiente)

### 4.3 Detalle de habitación
(pendiente)

## 5. Decisiones técnicas
- Diseño mobile-first, tomando 375px como referencia y usando `md` (768px) como breakpoint para desktop.
- Solo Tailwind, sin librerías de componentes.
- Iconos con emojis o SVG inline.
- Datos mock en `/data` y tipos en `/types`.
- Tipos `Property` y `Room` en `/types`; `Room` extiende `Property`.
- Componentes declarados como `const`, de máximo aproximado 80 líneas.
- Navegación entre vistas con `<Link>`.
- Sin `style={{}}` en línea.
