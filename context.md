# Contexto del proyecto: Clon de Airbnb

## 1. Descripción de las tres páginas

### Home (`/`)
Muestra la barra de navegación con logo, buscador e iconos de usuario, una fila desplazable de filtros por categoría y una cuadrícula de alojamientos con imagen, ubicación, fechas, precio y valoración. Incluye un estado de carga simulado para las tarjetas. El usuario puede buscar o filtrar alojamientos y abrir una tarjeta para ir a `/rooms/[id]`; desde el buscador puede acceder al catálogo en `/catalog`.

### Catálogo (`/catalog`)
Muestra una cabecera con el número de resultados y controles para ordenar por precio ascendente o descendente, una lista de tarjetas de alojamiento y un área de mapa representada como placeholder. El usuario puede cambiar el orden, explorar resultados y abrir una tarjeta para consultar `/rooms/[id]`. Puede volver a Home desde el logo o la navegación.

### Detalle de habitación (`/rooms/[id]`)
Muestra una galería de imágenes con navegación, la cabecera y descripción del alojamiento, información del anfitrión, amenities y una tarjeta de reserva con contador de huéspedes. El usuario puede recorrer las fotos y ajustar huéspedes antes de iniciar la reserva; puede volver al catálogo o a Home mediante la navegación.

## 2. Componentes principales por vista

### Home (`/`)
- `Navbar` (compartido): presenta el logo, el buscador y los accesos de usuario.
- `CategoryFilters`: muestra los filtros de alojamiento por categoría.
- `PropertyGrid`: organiza las tarjetas y el estado de carga simulado.
- `PropertyCard` (compartido): resume un alojamiento y enlaza a su detalle.

### Catálogo (`/catalog`)
- `Navbar` (compartido): mantiene la navegación y el acceso al buscador.
- `CatalogHeader`: muestra el total de resultados y permite ordenar por precio.
- `PropertyList`: presenta la lista de tarjetas reutilizadas.
- `PropertyCard` (compartido): muestra un resultado y enlaza a `/rooms/[id]`.
- `MapPlaceholder`: reserva el área destinada al mapa.

### Detalle de habitación (`/rooms/[id]`)
- `Navbar` (compartido): ofrece navegación común entre vistas.
- `RoomGallery`: presenta las imágenes y sus controles de navegación.
- `RoomHeader`: muestra el nombre y los datos principales del alojamiento.
- `HostInfo`: presenta la información del anfitrión.
- `AmenitiesList`: enumera los servicios disponibles.
- `BookingCard`: muestra los datos de reserva y el contador de huéspedes.

## 3. El usuario
El usuario busca un alojamiento que se ajuste a sus preferencias antes de reservar. Desde Home puede descubrir opciones mediante categorías y búsqueda. En el catálogo compara resultados y los ordena por precio, con el mapa como referencia visual. En el detalle revisa fotos, anfitrión y amenities, y ajusta el número de huéspedes. Las tres vistas acompañan su recorrido desde el descubrimiento hasta la preparación de una reserva.

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
- Componentes declarados como `const`, de máximo aproximado 80 líneas.
- Navegación entre vistas con `<Link>`.
