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
(pendiente)

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
