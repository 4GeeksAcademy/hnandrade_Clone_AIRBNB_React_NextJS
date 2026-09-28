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

La página cliente de `app/page.tsx` coordina los cuatro estados y filtra los alojamientos; el estado de búsqueda pertenece a la página y se pasa a `Navbar` y `SearchBar` por props. `activeCategory` comienza como `"all"`, `properties` como `[]` e `isLoading` como `true`. Un `useEffect` de montaje inicia un `setTimeout` de 1 segundo, asigna los datos mock y cambia `isLoading` a `false`; el efecto limpia el temporizador al desmontarse. Mientras carga se muestra `LoadingSpinner`; al terminar se muestra `PropertyGrid` si hay resultados, o `EmptyState` si los filtros dejan la lista vacía. El filtrado se deriva sin un quinto estado: una propiedad pasa si `(activeCategory === "all" || property.category === activeCategory)` y el texto normalizado `query.trim().toLowerCase()` aparece en `property.title.toLowerCase()` o `property.location.toLowerCase()`; la query normalizada vacía coincide con todos los textos.

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
- **Estado:** no mantiene estado propio; recibe `query` y `onQueryChange` desde la página y los pasa a `SearchBar`. Si `query` es `undefined`, el input usa `query ?? ""` y `readOnly={!onQueryChange}` para mantenerse controlado y de solo lectura. En Catálogo y Detalle se usa sin `onQueryChange`.
- **Layout:** padre de `Logo`, `SearchBar` y `UserMenu`; en 375px es una columna compacta, con la búsqueda ocupando el ancho disponible y logo/menú alineados en la cabecera; desde `md`, fila con logo a la izquierda, búsqueda centrada y menú a la derecha. Gap de 12–16px.
- **Tailwind:** fondo blanco, `px-4 py-3`, borde inferior gris muy claro; búsqueda con mayor espacio disponible en desktop.

##### Logo
- **Archivo:** `components/Logo.tsx`.
- **Responsabilidad:** muestra la marca y enlaza a la Home.
- **Props:** sin props.
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
- **Estado:** no usa estado local; es un campo controlado por `query` de la página y llama `onQueryChange` en cada cambio. Si `query` es `undefined`, usa `query ?? ""`; el input usa `readOnly={!onQueryChange}` para seguir controlado y quedar de solo lectura cuando no hay callback. En Catálogo y Detalle se usa sin `onQueryChange`.
- **Layout:** hijo de `Navbar`; ancho completo en móvil y ancho limitado/centrado en escritorio. Contiene el texto de búsqueda y un icono de búsqueda inline, alineados en fila.
- **Tailwind:** `flex`, `items-center`, `gap-3`, `rounded-full`, `border border-neutral-300`, fondo blanco, `px-5 py-3`; sombra ligera (`shadow-sm`), texto 14px y placeholder gris medio.

##### UserMenu
- **Archivo:** `components/UserMenu.tsx`.
- **Responsabilidad:** presenta los iconos y accesos visuales del menú de usuario.
- **Props:** sin props.
- **Estado:** ninguno para el alcance de la Home; no se implementan menús desplegables ni flujo de autenticación.
- **Layout:** hijo derecho de `Navbar`, alineado al centro verticalmente; iconos en fila con gap de 8–12px tanto en móvil como en escritorio.
- **Tailwind:** controles compactos de 36–40px, fondo blanco, borde neutral tenue, radios completos, iconos de 16–20px y foco visible.

##### CategoryFilters
- **Archivo:** `components/CategoryFilters.tsx`.
- **Responsabilidad:** permite elegir una categoría y marca visualmente la selección activa.
- **Props:**
	```ts
	interface CategoryFiltersProps {
		categories: CategoryOption[];
		activeCategory: string;
		onCategoryChange: (category: string) => void;
	}
	```
- `CategoryOption` se importa desde `types/`.
- **Estado:** no tiene estado local; `activeCategory` y `onCategoryChange` se conectan al estado de la página.
- **Layout:** sección debajo de `Navbar`, hija directa de la página; contiene `CategoryChip` en fila horizontal, `overflow-x-auto`, `flex-nowrap` y gap de 20–28px en 375px. En escritorio mantiene la fila sin salto y reparte/agrupa los chips según el ancho disponible.
- **Tailwind:** `border-b`, fondo blanco, `px-4`, `gap-6`, chips con padding vertical de 8–12px; texto 12–14px. Activa con texto/icono oscuro y borde inferior marcado; inactivas en gris.
- **Categorías mock:**
	```ts
	[
		{ id: "all", label: "Todos", icon: "🏠" },
		{ id: "playa", label: "Playa", icon: "🏖️" },
		{ id: "mansiones", label: "Mansiones", icon: "🏰" },
		{ id: "tendencias", label: "Tendencias", icon: "🔥" },
		{ id: "cabanas", label: "Cabañas", icon: "🛖" },
		{ id: "vistas", label: "Vistas increíbles", icon: "🌅" },
		{ id: "unicos", label: "Espacios únicos", icon: "✨" },
	]
	```
	`Property.category` usa los mismos slugs: `playa`, `mansiones`, `tendencias`, `cabanas`, `vistas` y `unicos`; `all` es solo la opción que representa todas las categorías.

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
- `CategoryOption` se importa desde `types/`.
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
- **Responsabilidad:** representa la valoración numérica con una estrella y, cuando se proporciona, el recuento de reseñas.
- **Props:**
	```ts
	interface StarRatingProps {
		rating: number;
		reviewCount?: number;
	}
	```
- **Estado:** ninguno.
- **Layout:** se usa en `PropertyCard` y `RoomHeader`, junto a sus datos; estrella y valoración alineadas en una fila con gap pequeño en todos los tamaños. `PropertyCard` no pasa `reviewCount`; `RoomHeader` sí lo pasa.
- **Contenido:** si `reviewCount` está definido, muestra `★ {rating} · {reviewCount} reseñas`; si no, muestra solo `★ {rating}`.
- **Tailwind:** `inline-flex items-center gap-1`, texto de 13–14px en `#222`; estrella oscura o negra, tamaño 12–14px.

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
- **Responsabilidad:** informa que no hay alojamientos que coincidan con la búsqueda o categoría seleccionada; si `query` está vacío porque solo la categoría no tiene coincidencias, muestra un mensaje genérico.
- **Props:**
	```ts
	interface EmptyStateProps {
		query: string;
	}
	```
- **Estado:** ninguno; se muestra cuando terminó la carga y el filtrado produce cero resultados.
- **Layout:** reemplaza a `PropertyGrid` en la misma región de contenido; bloque centrado en móvil y escritorio, de ancho legible y sin anidarse en una tarjeta.
- **Tailwind:** `mx-auto flex max-w-md flex-col items-center gap-2 py-16 text-center`; título 18px semibold, detalle 14px neutral, fondo blanco y sin sombra.

#### Tipos compartidos

`CategoryOption` y `Property` viven en `types/`; los componentes que los necesitan importan los tipos desde ahí.

```ts
interface CategoryOption {
	id: string;
	label: string;
	icon: string;
}

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

`Property.category` utiliza los slugs de categoría `playa`, `mansiones`, `tendencias`, `cabanas`, `vistas` y `unicos`.

Campos que presenta la tarjeta en Home: placeholder de imagen, título, precio por noche y valoración con estrellas. No se presentan fechas ni precio total. Ubicación, categoría, recuento de reseñas e imágenes también forman parte del modelo para filtrar y reutilizar los datos en las demás vistas; las imágenes no se descargan ni se muestran en esta Home.

#### Fuera de alcance

- Fotografías reales o imágenes externas en las tarjetas; se usa únicamente el placeholder gris.
- Fechas, disponibilidad, precio total, selector de huéspedes en la búsqueda y calendario.
- Mapa interactivo, filtros avanzados, paginación y ordenación de resultados en Home.
- Favoritos persistentes, reseñas detalladas, autenticación y acciones reales del menú de usuario.
- Animaciones o carrusel de fotos dentro de las tarjetas.
- Componentes de librerías externas y estilos inline.

#### Revisión de la especificación

- `CategoryOption` comparte carpeta `types/` con `Property` y se importa desde los componentes.
- La categoría inicial es `all`; las opciones y `Property.category` usan los slugs acordados.
- El filtrado derivado combina categoría y query normalizada contra título o ubicación.
- `Logo` y `UserMenu` no reciben props.
- `Navbar` y `SearchBar` mantienen el input controlado con `query ?? ""` y `readOnly={!onQueryChange}`; en Catálogo y Detalle no se pasa `onQueryChange`.
- `EmptyState` usa un mensaje genérico si `query` está vacía y no hay resultados por categoría.

### 4.2 Catálogo
Capturas usadas: `catalog-375.png` (375px) y `catalog-desktop.png` (escritorio).

La medición visual de `catalog-desktop.png` (3168 × 1788 px) muestra que la lista y el mapa ocupan anchos aproximadamente iguales, cerca de la mitad del área de contenido cada uno; por eso el layout de escritorio usa `grid md:grid-cols-2`. El comportamiento sticky se mantiene como requisito funcional.

<details>
<summary>Prompt usado</summary>

```text
Te adjunto dos capturas de Airbnb: catalog-375.png (móvil, 375px de ancho) y catalog-desktop.png (escritorio, donde se ve el mapa a la derecha de la lista). Ambas están en docs/screenshots/. Es la vista CATÁLOGO, que será la ruta "/catalog".

Antes de empezar, lee la subsección "4.1 Home" de context.md. Debes REUTILIZAR sin cambios las props de Navbar, PropertyGrid, PropertyCard, StarRating y la interface Property. No las redefinas: refiérete a ellas. Si necesitas una prop nueva en alguno de esos componentes, propónla al final como cambio, sin modificar la spec de la 4.1.

Analiza las imágenes y genera una ESPECIFICACIÓN DE COMPONENTES en Markdown. No escribas la implementación, solo la especificación.

Componentes de esta vista: Navbar (compartido), CatalogHeader, PropertyGrid (compartido), PropertyCard (compartido), MapPlaceholder. Para los compartidos, indica solo cómo se usan aquí (props que se pasan y diferencias de layout). Para CatalogHeader y MapPlaceholder, indica:
1. Nombre (PascalCase) y archivo (components/Nombre.tsx).
2. Responsabilidad en una frase.
3. Props como interface de TypeScript.
4. Estado local, y si vive en el componente o en la página y llega por props.
5. Relación de layout: padre, hijos y disposición (flex/grid, dirección, gap, alineación) en móvil (375px) y en escritorio (md: 768px+).
6. Pistas de Tailwind: espaciados, radios, sombras, colores aproximados, tamaños de texto, tomados de las capturas.

Además incluye:
- Un árbol jerárquico de componentes de la página en ASCII.
- Los campos de datos visibles en pantalla, indicando cuáles ya existen en Property.
- Una lista de elementos de las capturas que NO vamos a implementar (chips de filtro, calendario, mapa real, fotos con carrusel, etiquetas como "Superanfitrión", precios tachados, etc.).

ALCANCE de esta vista:
- La página es cliente ("use client"). Ahí vive el estado sortOrder ("asc" | "desc"), inicializado en "asc". La lista mostrada se DERIVA de los datos mock ordenados por pricePerNight según sortOrder; no se guarda como estado aparte.
- CatalogHeader: muestra "N alojamientos" (N = cantidad de resultados) y un control para ordenar con las opciones Ascendente / Descendente por precio (botones, un select nativo o un toggle: elige el más adecuado en móvil y justifícalo en una línea). Recibe total, sortOrder y onSortChange por props.
- PropertyGrid reutilizado: en móvil 1 columna. Dentro de la columna de la lista en escritorio, define cuántas columnas usa (en la captura de escritorio se ven 2). Si eso exige una prop nueva en PropertyGrid (por ejemplo columns), propónla como cambio.
- MapPlaceholder: recuadro gris con el texto "Mapa". En móvil va DEBAJO de las tarjetas, con altura fija (por ejemplo h-64). En escritorio va a la DERECHA de la lista, ocupando toda la altura visible y fijo al hacer scroll (sticky).
- Layout de la página: en móvil, una sola columna (header, tarjetas, mapa). Desde md, dos columnas: lista a la izquierda y mapa a la derecha (por ejemplo grid con proporción 3/2 o 1/1; justifícalo según la captura).
- Cada PropertyCard navega a /rooms/[id] con <Link>.
- Esta vista no requiere carga simulada.

REGLAS: mobile-first, solo Tailwind (sin style inline), sin librerías de componentes, un componente por archivo, máximo ~80 líneas por componente, componentes const.

FORMATO DE SALIDA: escribe la especificación en context.md, en la subsección "4.2 Catálogo", reemplazando "(pendiente)". Al inicio de la subsección incluye:
- Los nombres de las capturas usadas (catalog-375.png y catalog-desktop.png).
- Este mismo prompt dentro de un bloque <details><summary>Prompt usado</summary> ... </details>.
No toques ninguna otra parte de context.md ni ningún otro archivo.
```
</details>

#### Estructura de página

La página cliente de `app/catalog/page.tsx` posee el único estado de esta vista, creado con `useState`: `sortOrder`, inicializado en `"asc"`. En `types/` se define `type SortOrder = "asc" | "desc";`, usado tanto por la página del catálogo como por `CatalogHeader`. Los datos mock usan el tipo `Property` ya definido en 4.1. La lista visible se deriva ordenando una copia del arreglo con `[...properties].sort` por `pricePerNight` en cada dirección, sin mutar los datos mock ni guardar un arreglo ordenado en estado; no hay carga simulada. `CatalogHeader` recibe el total de resultados, `sortOrder` y el callback de orden. En el catálogo, `Navbar` reutiliza exactamente sus props de 4.1 y se renderiza sin `query` ni `onQueryChange`, pues no se solicita un filtro de texto aquí.

En móvil, la página apila cabecera, resultados y mapa en una columna. Desde `md`, `grid md:grid-cols-2` coloca el panel de resultados a la izquierda y el mapa a la derecha, a partes iguales según la medición de `catalog-desktop.png`.

```text
Página cliente: app/catalog/page.tsx
├── Navbar (contrato de props de 4.1, sin query/onQueryChange)
└── Layout principal
		├── Panel de resultados
		│   ├── CatalogHeader
		│   └── PropertyGrid (properties = resultados ordenados; columns = 2 propuesto)
		│       └── PropertyCard (una por Property; enlace a /rooms/[id])
		│           └── StarRating (se mantiene dentro de PropertyCard como en 4.1)
		└── MapPlaceholder
```

#### Componentes compartidos

- **`Navbar`**: usar el componente y la interfaz de props definidos en 4.1, sin cambios. En esta página se renderiza sin pasar `query` ni `onQueryChange`; conserva su disposición compartida de cabecera.
- **`PropertyGrid`**: usar `PropertyGridProps` y `Property[]` de 4.1; pasar la lista ordenada derivada como `properties`. A 375px se dispone en una columna; en el panel de escritorio se requieren dos columnas. Esto necesita la prop nueva `columns`, registrada como propuesta al final, y no altera la especificación de 4.1.
- **`PropertyCard`**: usar `PropertyCardProps` de 4.1 y pasar `property` de tipo `Property` por cada resultado. Conservar el `<Link>` de toda la tarjeta hacia `/rooms/[id]` y su contenido/placeholder sin cambios.
- **`StarRating`**: permanece dentro de `PropertyCard` con sus props y presentación definidos en 4.1; catálogo no le pasa props directamente.

#### CatalogHeader

- **Archivo:** `components/CatalogHeader.tsx`.
- **Responsabilidad:** muestra el total de alojamientos y permite elegir el sentido de ordenación por precio.
- **Props:**
	```ts
	interface CatalogHeaderProps {
		total: number;
		sortOrder: SortOrder;
		onSortChange: (sortOrder: SortOrder) => void;
	}
	```
- **Estado:** no mantiene estado local; el `sortOrder` controlado vive en `app/catalog/page.tsx` y se actualiza mediante `onSortChange`.
- **Layout:** hijo del panel de resultados, encima de `PropertyGrid`; en móvil muestra el total y el control en una fila, alineados y con espacio entre ellos; en escritorio conserva la fila y ocupa el ancho del panel. Gap de 12–16px.
- **Tailwind:** `flex items-center justify-between gap-3`, márgenes inferiores de 16–20px; total de 18–20px semibold y control de 14px. Fondo blanco, texto `#222` y borde neutral fino en el selector.
- **Control elegido:** `<select>` nativo y compacto, con “Ascendente” y “Descendente”; resulta fácil de tocar en 375px y ofrece las dos opciones sin ocupar el ancho de dos botones.

#### MapPlaceholder

- **Archivo:** `components/MapPlaceholder.tsx`.
- **Responsabilidad:** reserva el espacio visual del mapa y muestra la etiqueta “Mapa”, sin cargar un mapa real.
- **Props:** sin props.
- **Estado:** ninguno; no hay interacción ni carga de mapas.
- **Layout:** hijo directo del layout principal. En móvil queda debajo de las tarjetas, a ancho completo y con altura fija aproximada de `h-64`. Desde `md` queda a la derecha del panel, en la segunda columna de un `grid md:grid-cols-2` de anchos iguales; usa `md:sticky md:self-start md:top-24` para permanecer fijo durante el scroll. `md:self-start` evita que el elemento se estire para llenar la altura de la fila del grid, permitiendo el movimiento sticky.
- **Tailwind:** fondo gris neutro claro (`bg-neutral-200` o próximo), texto centrado `#717171` de 14–16px, radio de 8–12px; `h-64` en móvil y `md:rounded-2xl md:sticky md:self-start md:top-24 md:h-[calc(100vh-6rem)]` en escritorio. Sin tiles, controles ni sombra decorativa.

#### Datos visibles

| Dato | Origen | Existe en `Property` |
|---|---|---|
| Título del alojamiento | Tarjeta | Sí: `title` |
| Ubicación | Tarjeta | Sí: `location` |
| Precio por noche | Tarjeta y ordenación | Sí: `pricePerNight` |
| Valoración con estrellas | Tarjeta | Sí: `rating` |
| Número de reseñas, si lo presenta el `StarRating` reutilizado | Tarjeta | Sí: `reviewCount` |
| Categoría, usada como dato del alojamiento | Datos mock | Sí: `category` |
| Imágenes | Datos asociados, no se descargan ni se muestran como fotos en la tarjeta reutilizada | Sí: `images` |
| Total de alojamientos | Cabecera; total de resultados visibles | No, se deriva de la cantidad de resultados de los datos mock |
| Sentido de orden actual | Selector de catálogo | No, estado `sortOrder` de la página |

La forma de `Property` es exactamente la definida en 4.1 y no se vuelve a declarar aquí. `PropertyGrid`, `PropertyCard` y `StarRating` conservan también sus interfaces de 4.1.

#### Fuera de alcance

- Chips o controles de filtros por categoría en esta vista.
- Calendario, fechas, disponibilidad y selección de huéspedes.
- Mapa real, marcadores, zoom, gestos y proveedor de mapas.
- Fotografías externas y carrusel/navegación de imágenes; se conserva el placeholder de `PropertyCard` según 4.1.
- Etiquetas “Superanfitrión” y otros distintivos visuales del anuncio.
- Precios tachados, descuentos, desglose de precio y precio total.
- Carga simulada, paginación, favoritos y acciones de reserva.

#### Propuesta de cambio a componente compartido

Proponer que `PropertyGrid` acepte `columns?: 2`. Sin `columns`, usa `md:grid-cols-2 lg:grid-cols-3`; con `columns={2}`, usa solo `md:grid-cols-2` y conserva una columna en móvil. Seleccionar las clases Tailwind literales completas mediante un objeto (por ejemplo, `{ default: "md:grid-cols-2 lg:grid-cols-3", 2: "md:grid-cols-2" }`), sin construir clases dinámicamente. Catálogo pasaría `columns={2}` para mantener dos tarjetas por fila en el panel de resultados de escritorio.

### 4.3 Detalle de habitación
Capturas usadas: `room-375.png`, `room-375-details.png` y `room-desktop.png` (adjunto, también en `docs/screenshots/`).

<details><summary>Prompt usado</summary>

```text
Te adjunto tres capturas de Airbnb: room-375.png y room-375-details.png (móvil, 375px de ancho) y room-desktop.png (escritorio). Están en docs/screenshots/. Es la vista DETALLE DE HABITACIÓN, ruta "/rooms/[id]".

IMPORTANTE: si alguna de las tres capturas no se puede leer, DETENTE y dímelo antes de escribir nada. No especules sobre lo que no ves.

Antes de empezar, lee las subsecciones 4.1 y 4.2 de context.md. REUTILIZA sin cambios Navbar, StarRating, LoadingSpinner y la interface Property. No las redefinas: refiérete a ellas. Si necesitas cambios en ellas, propónlos al final.

Analiza las imágenes y genera una ESPECIFICACIÓN DE COMPONENTES en Markdown. No escribas la implementación, solo la especificación.

Usa EXACTAMENTE estos nombres, definidos en la sección 2: Navbar (compartido), BackLink, RoomGallery, RoomHeader, HostInfo, AmenitiesList, AmenityItem, BookingCard, GuestCounter, StarRating (compartido) y LoadingSpinner (compartido). No inventes componentes; si falta alguno, propónlo al final.

Para cada componente NUEVO indica:
1. Nombre y archivo (components/Nombre.tsx).
2. Responsabilidad en una frase.
3. Props como interface de TypeScript (si no tiene props, escribe "sin props" y no declares una interface vacía).
4. Estado local (useState/useEffect) y si vive en el componente o en la página.
5. Relación de layout: padre, hijos y disposición (flex/grid, dirección, gap, alineación) en móvil (375px) y en escritorio (md: 768px+).
6. Pistas de Tailwind tomadas de las capturas.
Para los compartidos, indica solo cómo se usan aquí.

Además incluye:
- Árbol jerárquico ASCII de la página.
- Interface Room (extiende Property, sin redeclarar sus campos) con al menos: host (name, yearsHosting), amenities (lista con id, label e icono emoji), maxGuests, bedrooms, beds y bathrooms. Define Host y Amenity como tipos separados en types/. Propón dónde viven los datos mock: un único arreglo Room[] en data/ cuyos ids coincidan con los de Home y Catálogo, para que todos los enlaces a /rooms/[id] funcionen.
- Una lista de elementos de las capturas que NO vamos a implementar (banner de descarga de la app, compartir, guardar, "Mostrar todas las fotos", calendario, precios tachados, descuentos, desglose de precio, reseñas detalladas, etc.).

ALCANCE de esta vista:
- La página app/rooms/[id]/page.tsx es cliente ("use client") y obtiene el id con useParams de next/navigation. Estados en la página: room (Room | null, inicia en null) e isLoading (inicia en true). Un useEffect al montar (dependiente del id) hace setTimeout de 1 segundo, busca la habitación en los datos mock por id, asigna room, pone isLoading en false y limpia el temporizador al desmontar.
- Tres estados de la página: cargando (LoadingSpinner), no encontrada (mensaje "Habitación no encontrada" con BackLink) y contenido.
- BackLink: <Link> a /catalog con texto "← Volver al catálogo", en la parte superior. Nunca <a>.
- RoomGallery: recibe images (string[]) como placeholders (divs grises con el texto "Foto N", sin imágenes externas). El índice actual vive en RoomGallery con useState, inicia en 0. Botones Anterior y Siguiente con navegación circular (del último vuelve al primero) y contador "1 / N". Botones con aria-label. En móvil ocupa todo el ancho con aspect-[4/3]; en escritorio, ancho contenido con esquinas redondeadas.
- RoomHeader: título, StarRating, número de reseñas y ubicación.
- HostInfo: avatar placeholder (círculo gris con la inicial), "Anfitrión: {nombre}" y "{n} años como anfitrión".
- AmenitiesList: título de sección y cuadrícula de AmenityItem (icono emoji + etiqueta), 1 o 2 columnas en móvil y 2 desde md.
- BookingCard: precio POR NOCHE (no "en total"), GuestCounter y botón CTA "Reservar". El estado guests vive en BookingCard con useState, inicia en 1. GuestCounter es controlado: recibe value, min (1), max (room.maxGuests) y onChange; los botones − y + se deshabilitan en los límites y muestran el número entre ellos. El botón CTA no navega a ningún sitio.
- Layout de la página: en móvil, una columna (BackLink, RoomGallery, RoomHeader, HostInfo, AmenitiesList, BookingCard al final). Desde md, dos columnas bajo la galería: contenido a la izquierda (RoomHeader, HostInfo, AmenitiesList) y BookingCard a la derecha, con sticky. Justifica la proporción con room-desktop.png. Para BookingCard, indica que en móvil va como tarjeta al final del contenido y no como barra fija, para no tapar contenido.
- El Navbar se usa sin query ni onQueryChange (input de solo lectura).

REGLAS: mobile-first, solo Tailwind (sin style inline), sin librerías de componentes, un componente por archivo, máximo ~80 líneas por componente (si alguno puede pasarse, propón dividirlo), componentes const, sin interfaces vacías.

FORMATO DE SALIDA: escribe la especificación en context.md, en la subsección "4.3 Detalle de habitación", reemplazando "(pendiente)". Al inicio incluye los nombres de las tres capturas usadas y este mismo prompt dentro de <details><summary>Prompt usado</summary> ... </details>. No toques ninguna otra parte de context.md ni ningún otro archivo.
```
</details>

#### Estructura de página

`app/rooms/[id]/page.tsx` es una página cliente y obtiene `id` con `useParams` de `next/navigation`. Mantiene `room: Room | null` (inicialmente `null`) e `isLoading` (inicialmente `true`). Un `useEffect` dependiente de `id` programa un `setTimeout` de 1 segundo, busca el alojamiento en el arreglo mock, asigna `room` y pone `isLoading` en `false`; la limpieza del efecto cancela el temporizador. La página conserva `Navbar` en la parte superior y presenta uno de estos estados: carga con `LoadingSpinner`, habitación inexistente con el mensaje “Habitación no encontrada” y `BackLink`, o contenido del alojamiento.

**Para la implementación:** usar `useParams<{ id: string }>()`; no llamar a `setState` de forma síncrona en el cuerpo del efecto, solo dentro del callback del `setTimeout`.

```text
Página cliente: app/rooms/[id]/page.tsx
├── Navbar (compartido; sin query ni onQueryChange)
├── [si isLoading] LoadingSpinner (compartido)
├── [si room no existe] BackLink
│   └── Mensaje “Habitación no encontrada”
└── [si existe room]
		├── BackLink
		├── RoomGallery
		└── Layout de contenido
				├── Contenido principal
				│   ├── RoomHeader
				│   │   └── StarRating (compartido)
				│   ├── HostInfo
				│   └── AmenitiesList
				│       └── AmenityItem (uno por amenity)
				└── BookingCard
						└── GuestCounter
```

En móvil (375px), una sola columna: `BackLink`, galería, cabecera, anfitrión, amenities y tarjeta de reserva al final del contenido. La `BookingCard` no es una barra fija. Desde `md` (768px), la galería va a ancho completo y debajo el contenido usa `grid md:grid-cols-3`: datos a la izquierda con `md:col-span-2` y `BookingCard` en la tercera columna. La proporción 2:1 refleja `room-desktop.png`, donde el contenido ocupa el espacio mayor y la reserva una columna más estrecha. `md:self-start` evita que la celda de grid estire la tarjeta a la altura de la columna, dejando espacio para que `sticky` funcione.

#### Componentes compartidos

- **`Navbar`**: reutilizar exactamente el componente y sus props de 4.1; aquí no se pasan `query` ni `onQueryChange`, por lo que el input queda de solo lectura.
- **`StarRating`**: reutilizar exactamente el componente y sus props de 4.1; `RoomHeader` le pasa `room.rating` y `room.reviewCount`.
- **`LoadingSpinner`**: reutilizar exactamente el componente de 4.1 durante el estado de carga de la página.

#### Componentes nuevos

##### BackLink

- **Archivo:** `components/BackLink.tsx`.
- **Responsabilidad:** ofrece navegación de regreso al catálogo con un enlace de Next.js.
- **Props:** sin props.
- **Estado:** ninguno.
- **Layout:** hijo de la página, al comienzo del contenido tanto en móvil como en escritorio; una fila alineada al inicio, antes de la galería. En el estado no encontrado aparece encima del mensaje.
- **Tailwind:** `inline-flex items-center`, gap pequeño, `py-3`, texto 14px y neutral oscuro; foco visible. El texto es “← Volver al catálogo” y el destino es `/catalog`; usar `<Link>`, nunca `<a>`.

##### RoomGallery

- **Archivo:** `components/RoomGallery.tsx`.
- **Responsabilidad:** muestra placeholders de las fotos y controles accesibles para recorrerlos circularmente.
- **Props:**
	```ts
	interface RoomGalleryProps {
		images: string[];
	}
	```
- **Estado:** `currentIndex` vive en `RoomGallery`, con `useState(0)`; Anterior y Siguiente actualizan el índice circularmente y el contador muestra el índice visible y el total (`1 / N`).
- **Layout:** hijo de la página, después de `BackLink` y antes del contenido. En todos los tamaños muestra una sola foto placeholder con proporción 4:3; incluye los botones Anterior/Siguiente y el contador `1 / N`, que operan sobre el índice actual.
- **Tailwind:** `relative w-full aspect-[4/3] overflow-hidden`; placeholder `bg-neutral-200` con “Foto N” centrado en gris. En escritorio, `md:max-w-3xl md:rounded-xl md:mx-auto`. Botones compactos con contraste suficiente y `aria-label` (“Anterior” y “Siguiente”); contador discreto. Sin imágenes externas. El mosaico de Airbnb queda fuera de alcance porque el ejercicio pide navegación por índice.

##### RoomHeader

- **Archivo:** `components/RoomHeader.tsx`.
- **Responsabilidad:** resume el título, la ubicación y los datos de valoración de la habitación.
- **Props:**
	```ts
	interface RoomHeaderProps {
		room: Room;
	}
	```
- **Estado:** ninguno; recibe la habitación desde la página.
- **Layout:** hijo del contenido principal y primero en orden, encima de `HostInfo` y `AmenitiesList`. En móvil, columna con título, ubicación y valoración; desde `md` mantiene la columna izquierda y permite que el título ocupe el ancho disponible.
- **Tailwind:** `flex flex-col gap-2`, título de 20–24px semibold, ubicación en 14px neutral. Usa `StarRating` compartido con `room.rating` y `room.reviewCount`, que muestra la valoración y el recuento de reseñas; no los duplica en texto separado.

##### HostInfo

- **Archivo:** `components/HostInfo.tsx`.
- **Responsabilidad:** presenta el nombre del anfitrión y sus años de experiencia en la plataforma.
- **Props:**
	```ts
	interface HostInfoProps {
		host: Host;
	}
	```
- **Estado:** ninguno.
- **Layout:** hijo del contenido principal, debajo de `RoomHeader`; avatar y textos en una fila con alineación vertical centrada en móvil y escritorio.
- **Tailwind:** `flex items-center gap-3 border-b border-neutral-200 py-5`; avatar placeholder `size-10 rounded-full bg-neutral-200`, inicial centrada; nombre 14–16px y antigüedad 12–14px en gris.

##### AmenitiesList

- **Archivo:** `components/AmenitiesList.tsx`.
- **Responsabilidad:** agrupa los servicios de la habitación en una cuadrícula legible.
- **Props:**
	```ts
	interface AmenitiesListProps {
		amenities: Amenity[];
	}
	```
- **Estado:** ninguno; recibe los datos desde la página.
- **Layout:** hijo del contenido principal, después de `HostInfo`; incluye el título de sección y un `AmenityItem` por elemento. En móvil usa una o dos columnas según el ancho disponible; desde `md` usa dos columnas.
- **Tailwind:** título 18–20px semibold, `grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2`, sin tarjeta envolvente ni sombra.

##### AmenityItem

- **Archivo:** `components/AmenityItem.tsx`.
- **Responsabilidad:** muestra el icono emoji y la etiqueta de un servicio.
- **Props:**
	```ts
	interface AmenityItemProps {
		amenity: Amenity;
	}
	```
- **Estado:** ninguno.
- **Layout:** hijo de `AmenitiesList`; icono y texto en una fila, alineados al centro, con separación corta en móvil y escritorio.
- **Tailwind:** `flex items-center gap-3 py-2`; emoji de 20–24px, etiqueta de 14–16px y texto neutral oscuro.

##### BookingCard

- **Archivo:** `components/BookingCard.tsx`.
- **Responsabilidad:** presenta el precio por noche, permite elegir huéspedes y ofrece el CTA de reserva sin navegar.
- **Props:**
	```ts
	interface BookingCardProps {
		pricePerNight: number;
		maxGuests: number;
	}
	```
- **Estado:** `guests` vive en `BookingCard` con `useState(1)` y se pasa como valor controlado a `GuestCounter`; su cambio actualiza ese estado. El botón “Reservar” no navega ni inicia otro flujo.
- **Layout:** hija de la tercera columna del grid `md:grid-cols-3`, después de la galería y junto al contenido principal desde `md`; la columna de contenido ocupa `md:col-span-2`. En escritorio usa `md:sticky md:top-24 md:self-start`; `self-start` evita que la celda de grid estire la tarjeta e impida su desplazamiento sticky. En móvil aparece como tarjeta normal al final de la columna, nunca fija ni superpuesta al contenido. Incluye precio, contador y CTA en disposición vertical.
- **Tailwind:** `rounded-xl border border-neutral-200 bg-white p-5 shadow-md`; precio destacado de 20–24px semibold seguido de “por noche”; contador y CTA con separación vertical. Botón ancho completo, fondo oscuro y texto blanco, altura táctil cómoda.

##### GuestCounter

- **Archivo:** `components/GuestCounter.tsx`.
- **Responsabilidad:** permite incrementar o reducir huéspedes dentro de los límites recibidos.
- **Props:**
	```ts
	interface GuestCounterProps {
		value: number;
		min: number;
		max: number;
		onChange: (value: number) => void;
	}
	```
- **Estado:** ninguno; es controlado por `BookingCard`.
- **Layout:** hijo de `BookingCard`; etiqueta “Huéspedes” arriba y controles −, valor, + alineados en fila, con separación equilibrada en móvil y escritorio.
- **Tailwind:** `flex items-center justify-between`; botones cuadrados de 36–40px, redondos, borde neutral y foco visible. Deshabilitar − si `value === min` y + si `value === max`; mostrar el número entre ambos. Botones con nombres accesibles.

#### Tipos y datos

`Property` se importa desde `types/` y se reutiliza sin volver a declarar sus campos. `Host`, `Amenity` y `Room` viven como tipos en `types/` (por ejemplo, `types/host.ts`, `types/amenity.ts` y `types/room.ts`):

```ts
interface Host {
	name: string;
	yearsHosting: number;
}

interface Amenity {
	id: string;
	label: string;
	icon: string;
}

interface Room extends Property {
	host: Host;
	amenities: Amenity[];
	maxGuests: number;
	bedrooms: number;
	beds: number;
	bathrooms: number;
}
```

El arreglo canónico de datos mock será `Room[]` en `data/rooms.ts`. Home y Catálogo consumirán esos mismos registros como `Property` (ya que `Room` extiende `Property`), y sus ids serán idénticos a los usados en los enlaces `/rooms/[id]`; así no se duplican listados con identificadores divergentes.

#### Fuera de alcance

- Banner de descarga de la aplicación.
- Acciones de compartir y guardar/favoritos.
- Acción “Mostrar todas las fotos” y visor de fotos; se muestran placeholders grises, no imágenes externas.
- Calendario, fechas, disponibilidad y cobro real de la reserva.
- Precio total, precio tachado, descuentos, cuotas y desglose de precio; se presenta únicamente el precio por noche.
- Reseñas detalladas, texto de reseñas, insignias promocionales y bloques de popularidad ajenos a la valoración resumida.
- Navegación desde “Reservar”, autenticación y persistencia de huéspedes.

#### Propuestas

- Si `RoomGallery` supera ~80 líneas, dividir sus botones en un componente aparte.

## 5. Decisiones técnicas
- Diseño mobile-first, tomando 375px como referencia y usando `md` (768px) como breakpoint para desktop.
- Solo Tailwind, sin librerías de componentes.
- Iconos con emojis o SVG inline.
- Datos mock en `/data` y tipos en `/types`.
- Tipos `Property` y `Room` en `/types`; `Room` extiende `Property`.
- Componentes declarados como `const`, de máximo aproximado 80 líneas.
- Navegación entre vistas con `<Link>`.
- Sin `style={{}}` en línea.

## 6. Retos opcionales

### 6.1 Mapa interactivo

- **Librerías:** `leaflet` y `react-leaflet` v5; `@types/leaflet` como dependencia de desarrollo.
- **Componentes nuevos:** `PriceMarker` presenta el precio y el popup de cada alojamiento; `PropertyMap` monta el mapa de OpenStreetMap y ajusta sus bounds a las coordenadas disponibles; `CatalogMap` carga `PropertyMap` en cliente con `next/dynamic` y `ssr: false`, usando `MapPlaceholder` como fallback.
- **Coordenadas:** `Property` incluye `coordinates: { lat: number; lng: number }`; cada alojamiento mock guarda coordenadas aproximadas de su ciudad o zona para posicionar el marcador.
- **Iconos de precio:** se usa `L.divIcon` con una píldora HTML estilizada con clases Tailwind, evitando los iconos de imagen predeterminados de Leaflet, cuyas rutas de assets no se resuelven correctamente en Next.js.

### 6.2 Fechas y precio total

- **Librería:** `react-day-picker` v9, con modo de rango y locale española.
- **Componentes nuevos:** `DateRangePicker` permite seleccionar llegada y salida; `PriceSummary` calcula y muestra el precio por noche multiplicado por las noches seleccionadas. `BookingCard` coordina el rango, el contador de huéspedes, el CTA y el resumen.
- **Cálculo:** las noches representan días calendario y se calculan normalizando ambas fechas con `Date.UTC`, para evitar diferencias de zona horaria o cambios de horario. Si falta una fecha o la salida no es posterior a la llegada, el resultado es cero.
- **CTA:** “Reservar” permanece sin navegación y deshabilitado hasta que haya un rango completo con al menos una noche.
