# Guía de implementación de la nueva paleta para la landing de bienes raíces

## Objetivo
Implementar una paleta visual con enfoque **premium, confiable y elegante** para una landing de bienes raíces.  
La meta es transmitir seguridad, valor percibido alto y una experiencia visual limpia que permita que las fotografías de propiedades sean protagonistas.

---

## Paleta final

### Colores principales
- **Primary:** `#12344D`
- **Secondary:** `#2C7DA0`
- **Accent:** `#D4A373`
- **Background:** `#F7F3EC`
- **Text Primary:** `#1F2937`

### Colores de apoyo sugeridos
- **Surface / Cards:** `#FFFFFF`
- **Border:** `#E5E7EB`
- **Text Secondary:** `#4B5563`
- **Muted Background:** `#EFE8DD`
- **Success:** `#4D7C5A`
- **Warning:** `#B7791F`
- **Error:** `#B91C1C`

---

## Intención visual de cada color

### `#12344D` — Primary
Usar para elementos estructurales y de alta confianza:
- Navbar
- Footer
- Botones principales
- Títulos clave
- Overlays oscuros sobre imágenes hero

### `#2C7DA0` — Secondary
Usar para reforzar interacción y modernidad:
- Links
- Botones secundarios
- Hover states
- Íconos decorativos
- Elementos de apoyo en secciones informativas

### `#D4A373` — Accent
Usar con moderación para transmitir exclusividad:
- Badges como “Featured”, “New Listing”, “Luxury”
- Precios destacados
- Líneas decorativas
- Íconos pequeños
- CTA secundarios muy puntuales

### `#F7F3EC` — Background
Usar como fondo base del sitio:
- Fondo general
- Secciones amplias
- Bloques de contenido editorial
- Áreas donde se quiera una sensación cálida y limpia

### `#1F2937` — Text Primary
Usar para la mayoría del texto:
- Párrafos
- Headings
- Labels
- Formularios
- Navegación sobre fondos claros

---

## Reglas de uso

### Distribución recomendada
- **60%** fondos y neutros
- **25%** primary
- **10%** secondary
- **5%** accent

### Reglas importantes
- No usar el accent como color dominante del sitio.
- No saturar cards o secciones completas con dorado.
- Dejar que las imágenes de propiedades sigan siendo el foco principal.
- Mantener suficiente aire visual, padding y espacios en blanco.
- Priorizar contraste fuerte en botones, texto y formularios.

---

## Aplicación por componente

## 1. Navbar
- Fondo: `#12344D`
- Texto: `#FFFFFF`
- Link activo: `#D4A373`
- Hover de links: `#E6EEF3`

## 2. Hero section
### Opción A
- Imagen de propiedad como fondo
- Overlay: `rgba(18, 52, 77, 0.55)`
- Heading: `#FFFFFF`
- Subheading: `#F7F3EC`
- CTA principal: `#12344D`
- CTA secundario: borde `#FFFFFF`, texto `#FFFFFF`

### Opción B
- Fondo sólido: `#F7F3EC`
- Heading: `#12344D`
- Texto: `#4B5563`
- Highlight pequeño en accent: `#D4A373`

## 3. Botones
### Primary button
- Background: `#12344D`
- Text: `#FFFFFF`
- Hover: `#0F2A3D`

### Secondary button
- Background: `#2C7DA0`
- Text: `#FFFFFF`
- Hover: `#256B89`

### Accent button
Usar solo en casos especiales.
- Background: `#D4A373`
- Text: `#12344D`
- Hover: `#C6925E`

## 4. Cards de propiedades
- Fondo: `#FFFFFF`
- Border: `#E5E7EB`
- Título: `#12344D`
- Descripción: `#4B5563`
- Precio: `#D4A373`
- Metadata e íconos: `#2C7DA0`
- Shadow: muy suave, sin exagerar

## 5. Sección de propiedades destacadas
- Fondo sección: `#F7F3EC`
- Título: `#12344D`
- Subtítulo: `#4B5563`
- Badge “Featured”: fondo `#D4A373`, texto `#12344D`

## 6. Formularios de contacto o lead capture
- Fondo del bloque: `#FFFFFF`
- Labels: `#1F2937`
- Input border: `#D1D5DB`
- Input focus border: `#2C7DA0`
- Botón submit: `#12344D`
- Placeholder: `#9CA3AF`

## 7. Footer
- Fondo: `#12344D`
- Texto principal: `#FFFFFF`
- Texto secundario: `#D1D5DB`
- Links hover: `#D4A373`

---

## Estados interactivos

### Hover
- Primary: oscurecer 8% a 12%
- Secondary: oscurecer 8% a 12%
- Accent: oscurecer ligeramente sin perder calidez

### Focus
Usar outline visible:
- `2px solid #2C7DA0`
- `outline-offset: 2px`

### Disabled
- Fondo: `#CBD5E1`
- Texto: `#6B7280`

---

## Accesibilidad
- Mantener contraste suficiente entre texto y fondo.
- Usar texto blanco sobre `#12344D` y `#2C7DA0`.
- Evitar texto pequeño sobre `#D4A373` si no se valida el contraste.
- Los estados de focus deben ser visibles.
- No depender solo del color para comunicar estado.

---

## Tokens sugeridos

```ts
export const colors = {
  primary: '#12344D',
  primaryHover: '#0F2A3D',
  secondary: '#2C7DA0',
  secondaryHover: '#256B89',
  accent: '#D4A373',
  accentHover: '#C6925E',

  background: '#F7F3EC',
  surface: '#FFFFFF',
  mutedBackground: '#EFE8DD',

  textPrimary: '#1F2937',
  textSecondary: '#4B5563',
  textOnDark: '#FFFFFF',

  border: '#E5E7EB',
  borderStrong: '#D1D5DB',

  success: '#4D7C5A',
  warning: '#B7791F',
  error: '#B91C1C',

  focus: '#2C7DA0',
}
```

---

## Gradientes sugeridos

### Gradiente principal
```css
linear-gradient(90deg, #12344D 0%, #2C7DA0 100%)
```

### Gradiente cálido decorativo
Usar solo en detalles, nunca como fondo dominante.
```css
linear-gradient(90deg, #D4A373 0%, #E7C9A9 100%)
```

---

## Buenas prácticas visuales
- Usar fotografías grandes y limpias de propiedades.
- Evitar demasiados colores en una sola vista.
- Dar protagonismo al contenido visual y a los CTAs.
- Mantener consistencia en badges, botones e íconos.
- El accent debe sentirse exclusivo, no masivo.

---

## Qué evitar
- No usar fondos oscuros en todas las secciones.
- No usar dorado en exceso.
- No mezclar esta paleta con colores demasiado brillantes o neón.
- No usar demasiados tonos adicionales fuera del sistema.
- No hacer hover states demasiado agresivos.

---

## Resumen
Esta paleta está pensada para una marca inmobiliaria que quiera verse:
- confiable
- moderna
- premium
- sobria
- visualmente cálida

El azul oscuro construye credibilidad, el azul medio mantiene frescura digital, el dorado suave aporta exclusividad y el fondo cálido ayuda a que el sitio se sienta más elegante y menos frío.
