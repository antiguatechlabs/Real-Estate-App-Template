# Tracker de migración de paleta - Starter Landing

## Mini tracker
- Hero [x]
- Navbar [x]
- Stats [x]
- Featured Properties [x]
- How It Works [x]
- Property Categories [x]
- Testimonials [x]
- Featured Agents [x]
- CTA Banner [x]
- Footer [x]

## Objetivo
Centralizar el seguimiento de la migración visual de la landing pública de `(marketing)` hacia la nueva paleta definida en [docs/real-estate-palette-implementation-guide.md](/Users/ign/Desktop/Projects/Antigua Tech Labs/real-estate-app-template/docs/real-estate-palette-implementation-guide.md).

Este tracker debe servir como guía de implementación y control de avance para:
- la base visual compartida de marketing
- cada sección renderizada por [LandingPage.tsx](/Users/ign/Desktop/Projects/Antigua Tech Labs/real-estate-app-template/features/marketing/starter-landing/LandingPage.tsx)

Alcance confirmado:
- base visual compartida
- 10 secciones de la landing

Dirección confirmada para el hero:
- variante `imagen + overlay`

## Dirección visual aprobada
La dirección visual aprobada para esta migración es:
- premium
- confiable
- cálida
- editorial
- photography-first

Reglas globales de aplicación:
- `#12344D` funciona como color estructural principal y CTA primario.
- `#2C7DA0` queda reservado para interacción, apoyo visual y focus.
- `#D4A373` se usa solo como acento de alto valor visual.
- `#F7F3EC` y `#FFFFFF` dominan fondos, superficies y respiración visual.
- La landing de marketing debe abandonar la dependencia actual del tema oscuro basado en `slate` y acentos fríos tipo `sky/blue`.
- Navbar, footer y un bloque CTA final pueden conservar una presencia más oscura o más densa solo si usan la nueva jerarquía cromática.
- La fotografía inmobiliaria debe recuperar protagonismo frente a gradientes abstractos y fondos oscuros pesados.

## Tokens objetivo
| Token | Valor | Uso principal |
| --- | --- | --- |
| `primary` | `#12344D` | Estructura, headings clave, navbar, footer, CTA principal |
| `secondary` | `#2C7DA0` | Hover, focus, interacción secundaria, íconos de apoyo |
| `accent` | `#D4A373` | Precios, badges premium, highlights puntuales |
| `background` | `#F7F3EC` | Fondo general de marketing |
| `surface` | `#FFFFFF` | Cards, formularios, bloques elevados |
| `mutedBackground` | `#EFE8DD` | Franjas alternas, bloques suaves, separación visual |
| `textPrimary` | `#1F2937` | Texto principal, headings sobre fondo claro |
| `textSecondary` | `#4B5563` | Descripciones, metadata, supporting copy |
| `textOnDark` | `#FFFFFF` | Texto sobre `primary` o superficies oscuras intencionales |
| `border` | `#E5E7EB` | Bordes base, divisores, contornos suaves |
| `borderStrong` | `#D1D5DB` | Inputs, estados visibles, separación reforzada |
| `focus` | `#2C7DA0` | Outline y focus ring accesible |
| `success` | `#4D7C5A` | Estados positivos |
| `warning` | `#B7791F` | Alertas suaves |
| `error` | `#B91C1C` | Error y validaciones |

Reglas de implementación:
- La futura implementación debe migrar de colores hardcodeados a tokens semánticos de marketing.
- No deben introducirse nuevas referencias visuales basadas en `slate`, `sky`, `blue`, `indigo` o `violet` dentro de `starter-landing`.
- El acento `accent` no debe usarse como color dominante de sección completa.
- Todo color interactivo debe validar contraste y estados `hover`, `focus` y `disabled`.

## Tracker general
| Bloque | Archivo | Estado | Prioridad | Owner | Última revisión | Notas |
| --- | --- | --- | --- | --- | --- | --- |
| Base visual compartida | `features/marketing/starter-landing/LandingPage.tsx` / `app/globals.css` / `features/marketing/starter-landing/data/properties.ts` | Pendiente | Alta | Por asignar | Sin revisar | Definir base cálida y capa semántica antes de tocar secciones |
| Navbar | `features/marketing/starter-landing/sections/navbar.tsx` | Hecho | Alta | Por asignar | 2026-04-23 | Reemplazado esquema `slate + sky` por `primary + accent` |
| Hero | `features/marketing/starter-landing/sections/hero.tsx` | Hecho | Alta | Por asignar | 2026-04-18 | Migrado a hero con fotografía + overlay |
| Stats | `features/marketing/starter-landing/sections/stats.tsx` | Hecho | Media | Por asignar | 2026-04-23 | Convertida banda oscura a franja clara y premium |
| Featured Properties | `features/marketing/starter-landing/sections/featured-properties.tsx` | Hecho | Alta | Por asignar | 2026-04-23 | Cards, precios y metadata migrados al sistema cálido |
| How It Works | `features/marketing/starter-landing/sections/how-it-works.tsx` | Hecho | Media | Por asignar | 2026-04-23 | Señalética azul eliminada y pasos rehechos |
| Property Categories | `features/marketing/starter-landing/sections/property-categories.tsx` | Hecho | Media | Por asignar | 2026-04-23 | Mosaico frío reemplazado por cards claras |
| Testimonials | `features/marketing/starter-landing/sections/testimonials.tsx` | Hecho | Media | Por asignar | 2026-04-18 | Rehechas cards y rating en sistema cálido |
| Featured Agents | `features/marketing/starter-landing/sections/featured-agents.tsx` | Hecho | Media | Por asignar | 2026-04-18 | Rehecho para evitar look SaaS oscuro |
| CTA Banner | `features/marketing/starter-landing/sections/cta-banner.tsx` | Hecho | Alta | Por asignar | 2026-04-18 | Bloque final reforzado con paleta premium |
| Footer | `features/marketing/starter-landing/sections/footer.tsx` | Hecho | Media | Por asignar | 2026-04-18 | Base `primary` y contraste refinado |

## Detalle por bloque
### Base visual compartida
Archivo:
- [LandingPage.tsx](/Users/ign/Desktop/Projects/Antigua Tech Labs/real-estate-app-template/features/marketing/starter-landing/LandingPage.tsx)
- [globals.css](/Users/ign/Desktop/Projects/Antigua Tech Labs/real-estate-app-template/app/globals.css)
- [properties.ts](/Users/ign/Desktop/Projects/Antigua Tech Labs/real-estate-app-template/features/marketing/starter-landing/data/properties.ts)

Estado: Pendiente

Objetivo visual:
- Cambiar la base oscura global por una base clara cálida y editorial.
- Separar claramente la estética de marketing del esquema oscuro heredado.
- Preparar una capa semántica de color que reduzca reemplazos arbitrarios por clase.

Cambios de paleta requeridos:
- Sustituir el fondo global oscuro de la landing por `background`.
- Ajustar el color de texto base hacia `textPrimary` y `textSecondary`.
- Revisar `:root` y `body` en `globals.css` para que marketing no dependa visualmente de `color-scheme: dark`.
- Retirar gradientes oscuros de placeholder en propiedades si compiten con la nueva paleta.
- Documentar que futuras secciones deben consumir tokens semánticos en lugar de hex o utilidades frías hardcodeadas.

Checklist de implementación:
- Crear o documentar una capa de tokens semánticos para marketing.
- Revisar `LandingPage.tsx` para que `main` parta de un fondo cálido y texto oscuro.
- Revisar `globals.css` para minimizar la dominancia del degradado oscuro global sobre marketing.
- Revisar `properties.ts` y definir si los gradientes de placeholder deben suavizarse o sustituirse.
- Confirmar que la base visual permita convivir con navbar/footer oscuros sin romper jerarquía.

Criterios de validación:
- La primera impresión de la landing ya no debe sentirse dark-first.
- No deben existir nuevos usos de `slate`, `sky`, `blue`, `indigo` o `violet` como colores base.
- El texto principal sobre fondos claros debe mantener contraste AA.
- Las cards de propiedades no deben heredar placeholders oscuros agresivos sin intención explícita.

Notas:
- Esta capa debe resolverse antes de ejecutar cambios finos por sección.
- Si no se resuelve primero, la migración tenderá a quedar inconsistente entre bloques.

### Navbar
Archivo:
- [navbar.tsx](/Users/ign/Desktop/Projects/Antigua Tech Labs/real-estate-app-template/features/marketing/starter-landing/sections/navbar.tsx)

Estado: Hecho

Objetivo visual:
- Mantener una navegación sólida, confiable y premium con presencia institucional.
- Servir como ancla cromática superior sin recurrir a azules brillantes.

Cambios de paleta requeridos:
- Fondo en `primary`.
- Texto principal en `textOnDark`.
- Estado activo y acentos puntuales en `accent`.
- Hover de links claro pero sobrio, sin efecto neon.
- Revisar pills de idioma y CTA principal para que respondan al nuevo sistema.

Checklist de implementación:
- Reemplazar el fondo translúcido `slate` por una variante de `primary`.
- Ajustar logo/badge para evitar gradientes fríos.
- Cambiar links secundarios a texto claro con hover suave.
- Redefinir el estado activo del selector de idioma usando `accent` o una superficie clara con texto `primary`.
- Alinear el CTA principal con el botón `primary`.

Criterios de validación:
- Navbar legible sobre todo el scroll inicial.
- Links, selector de idioma y CTA tienen jerarquía clara.
- El color activo no parece un azul digital heredado.

Notas:
- Aunque siga siendo oscuro, debe sentirse parte de la nueva marca y no del esquema anterior.

### Hero
Archivo:
- [hero.tsx](/Users/ign/Desktop/Projects/Antigua Tech Labs/real-estate-app-template/features/marketing/starter-landing/sections/hero.tsx)

Estado: Hecho

Objetivo visual:
- Convertir el hero en una pieza editorial centrada en fotografía inmobiliaria.
- Mantener una lectura premium, cálida y confiable con protagonismo claro para la búsqueda.

Cambios de paleta requeridos:
- Fijar variante `imagen + overlay`.
- Sustituir el fondo abstracto oscuro por fotografía de propiedad.
- Aplicar overlay `rgba(18,52,77,0.55)` para asegurar contraste.
- Mantener heading en blanco y supporting text en un tono cálido claro.
- Replantear el panel de búsqueda sobre `surface` translúcida o marfil elevada.
- CTA principal en `primary`; secundarios o controles en tonos sobrios.

Checklist de implementación:
- Eliminar gradientes fríos de fondo y mallas visuales innecesarias.
- Seleccionar tratamiento fotográfico coherente con una inmobiliaria premium.
- Ajustar eyebrow, título y highlight para no depender del gradiente `sky -> blue`.
- Revisar inputs, selects y botón de búsqueda para que se sientan parte del mismo sistema.
- Mantener legibilidad del texto sobre la foto en móvil y desktop.

Criterios de validación:
- La foto es el protagonista del hero.
- El overlay permite leer título, supporting text y buscador sin esfuerzo.
- El botón de búsqueda no usa un azul brillante heredado.
- El bloque sigue funcionando en responsive sin perder contraste.

Notas:
- Este bloque define el tono del resto de la landing. Si falla, el resto de la migración pierde coherencia.

### Stats
Archivo:
- [stats.tsx](/Users/ign/Desktop/Projects/Antigua Tech Labs/real-estate-app-template/features/marketing/starter-landing/sections/stats.tsx)

Estado: Hecho

Objetivo visual:
- Transformar la franja estadística en una pausa editorial clara y limpia.

Cambios de paleta requeridos:
- Pasar de banda oscura a `surface` o `mutedBackground`.
- Números en `primary`.
- Labels en `textSecondary`.
- Divisores en `border`.

Checklist de implementación:
- Reemplazar fondo oscuro heredado.
- Ajustar bordes laterales y superior/inferior a la escala de bordes nueva.
- Reforzar el peso visual de los números sin recurrir a blanco sobre oscuro.

Criterios de validación:
- La franja se lee rápido y ordena el contenido.
- Los números destacan por jerarquía, no por contraste extremo.

Notas:
- Debe sentirse más editorial que dashboard.

### Featured Properties
Archivo:
- [featured-properties.tsx](/Users/ign/Desktop/Projects/Antigua Tech Labs/real-estate-app-template/features/marketing/starter-landing/sections/featured-properties.tsx)

Estado: Hecho

Objetivo visual:
- Llevar el grid principal a una estética premium basada en superficies claras y detalles controlados.

Cambios de paleta requeridos:
- Fondo de sección en `background`.
- Eyebrow y títulos dentro del sistema cálido.
- Cards en `surface`.
- Precios en `accent`.
- Metadata e íconos en `secondary`.
- Bordes, hover y badges alineados con el nuevo lenguaje.

Checklist de implementación:
- Cambiar el contenedor de cards de oscuro translúcido a superficie clara.
- Redefinir el badge de precio y el badge de tipo.
- Revisar los gradientes de imagen placeholder para que no dominen visualmente.
- Ajustar botones secundarios y estados hover.
- Revisar texto de dirección y ciudad según `textPrimary` y `textSecondary`.

Criterios de validación:
- Las cards se sienten más inmobiliarias y menos SaaS.
- El precio recibe énfasis con `accent` sin invadir el resto de la card.
- La metadata es visible pero secundaria.

Notas:
- Este bloque es uno de los más sensibles porque la card actual depende mucho del modo oscuro.

### How It Works
Archivo:
- [how-it-works.tsx](/Users/ign/Desktop/Projects/Antigua Tech Labs/real-estate-app-template/features/marketing/starter-landing/sections/how-it-works.tsx)

Estado: Hecho

Objetivo visual:
- Mantener claridad secuencial sin apoyarse en señalética azul brillante.

Cambios de paleta requeridos:
- Quitar línea y nodos azul eléctrico.
- Usar `primary` como soporte estructural.
- Reservar `secondary` o `accent` para detalles puntuales.
- Ajustar fondo hacia claro o muted.

Checklist de implementación:
- Revisar la línea conectora entre pasos.
- Rehacer círculos numerados y sombras.
- Actualizar títulos y descripciones al nuevo sistema tipográfico y cromático.

Criterios de validación:
- Los pasos siguen siendo secuenciales y claros sobre fondo claro.
- El bloque ya no depende de gradientes `sky/blue` para explicar el flujo.

Notas:
- Debe priorizar claridad y jerarquía sobre decoración.

### Property Categories
Archivo:
- [property-categories.tsx](/Users/ign/Desktop/Projects/Antigua Tech Labs/real-estate-app-template/features/marketing/starter-landing/sections/property-categories.tsx)

Estado: Hecho

Objetivo visual:
- Convertir el mosaico de categorías en un conjunto de tarjetas claras, ordenadas y sobrias.

Cambios de paleta requeridos:
- Eliminar gradientes fríos por categoría.
- Pasar a tarjetas claras con acentos controlados.
- Usar `secondary` o `primary` para iconografía.
- Permitir `accent` en `luxury` solo como detalle premium, no como fondo dominante.

Checklist de implementación:
- Redefinir fondos, bordes y hover de cada tarjeta.
- Revisar iconos y labels para asegurar contraste sobre fondo claro.
- Eliminar overlays azules reactivos heredados.

Criterios de validación:
- La grilla se percibe consistente, no como cuatro variantes de azul.
- `Luxury` se diferencia con elegancia, no con exceso.

Notas:
- Este bloque necesita disciplina para no caer en “una card de cada color”.

### Testimonials
Archivo:
- [testimonials.tsx](/Users/ign/Desktop/Projects/Antigua Tech Labs/real-estate-app-template/features/marketing/starter-landing/sections/testimonials.tsx)

Estado: Hecho

Objetivo visual:
- Hacer que los testimonios se vean editoriales, cálidos y creíbles.

Cambios de paleta requeridos:
- Cards en `surface`.
- Rating stars evaluadas en `accent`.
- Quote text en `textPrimary` o `textSecondary`.
- Avatares y chips sin azules saturados.

Checklist de implementación:
- Ajustar fondo de sección a claro o muted.
- Rehacer cards y divisor superior/inferior.
- Revisar estrellas, quote y metadata del autor.
- Redefinir avatares para que usen una combinación sobria de `primary`, `secondary` y `accent`.

Criterios de validación:
- La lectura del testimonio es cómoda sobre fondo claro.
- Las estrellas y avatares apoyan la jerarquía sin saturar la vista.

Notas:
- Evitar que el bloque parezca widget SaaS en modo oscuro.

### Featured Agents
Archivo:
- [featured-agents.tsx](/Users/ign/Desktop/Projects/Antigua Tech Labs/real-estate-app-template/features/marketing/starter-landing/sections/featured-agents.tsx)

Estado: Hecho

Objetivo visual:
- Presentar a los agentes como perfiles confiables y premium dentro de tarjetas claras.

Cambios de paleta requeridos:
- Cards claras en `surface`.
- Avatar, ring y badges alineados con `primary`, `secondary` y `accent`.
- CTA secundario consistente con el sistema de botones nuevo.

Checklist de implementación:
- Rehacer fondo y borde de cards.
- Ajustar avatar inicial, aro y badge de listings.
- Replantear el botón de contacto para evitar el esquema oscuro translúcido actual.
- Revisar textos secundarios y separación visual.

Criterios de validación:
- El bloque ya no parece un grid SaaS oscuro.
- Los agentes mantienen presencia y confianza con una jerarquía cromática limpia.

Notas:
- El badge de listings es un candidato natural para `accent` o una variante suave del sistema.

### CTA Banner
Archivo:
- [cta-banner.tsx](/Users/ign/Desktop/Projects/Antigua Tech Labs/real-estate-app-template/features/marketing/starter-landing/sections/cta-banner.tsx)

Estado: Hecho

Objetivo visual:
- Cerrar la landing con un bloque de conversión fuerte pero coherente con la nueva marca.

Cambios de paleta requeridos:
- Permitir fondo `primary` o gradiente `primary -> secondary`.
- Input claro y elevado.
- CTA principal con contraste fuerte.
- `accent` solo como subrayado, highlight o detalle puntual.

Checklist de implementación:
- Eliminar el resplandor frío actual si compite con el nuevo tono.
- Rehacer el highlight del título.
- Revisar input, placeholder, borde y estado focus.
- Asegurar que el botón y el campo compartan la misma familia visual.

Criterios de validación:
- El CTA final se siente intencional y premium.
- El formulario conserva contraste, foco visible y claridad de acción.

Notas:
- Este es el único bloque, junto con navbar/footer, donde una mayor densidad cromática sigue siendo válida.

### Footer
Archivo:
- [footer.tsx](/Users/ign/Desktop/Projects/Antigua Tech Labs/real-estate-app-template/features/marketing/starter-landing/sections/footer.tsx)

Estado: Hecho

Objetivo visual:
- Cerrar la experiencia con una base institucional sólida y elegante.

Cambios de paleta requeridos:
- Mantener fondo `primary`.
- Texto principal en `textOnDark`.
- Texto secundario en una variante clara moderada.
- Links hover en `accent`.
- Icon buttons con contraste correcto y menor ruido visual.

Checklist de implementación:
- Sustituir logo y badges con gradientes fríos.
- Ajustar texto descriptivo, headings de grupo y links.
- Rehacer botones sociales para que no dependan de `bg-white/[0.06]` sobre `slate`.
- Revisar divisores y legal links.

Criterios de validación:
- El footer se siente conectado con la navbar y no con el tema oscuro anterior.
- El hover de links y botones sociales es visible, sobrio y consistente.

Notas:
- Debe conservar profundidad sin volver al estilo tecnológico frío actual.

## Validación final
Checklist de aceptación para cerrar la migración visual:
- [ ] Ejecutar `rg "slate|sky|blue|indigo|violet" features/marketing/starter-landing` para detectar restos cromáticos heredados.
- [ ] Validar contraste AA en texto, botones, badges e inputs.
- [ ] Confirmar focus visible con `2px solid #2C7DA0` y `outline-offset` coherente.
- [ ] Verificar que el hero use fotografía protagonista con overlay legible.
- [ ] Confirmar que `accent` se use de forma limitada en precios, badges y detalles.
- [ ] Confirmar que ninguna sección principal mantenga un fondo oscuro heredado salvo navbar, footer o un CTA final intencional.
- [ ] Revisar la landing en móvil y desktop para asegurar jerarquía y legibilidad.
- [ ] Validar estados `hover`, `focus` y `disabled` en CTAs, links, inputs y selects.
- [ ] Confirmar que las cards y bloques principales se sientan premium inmobiliarios y no SaaS oscuros.

Notas finales:
- No hay cambios de API pública ni de tipos TypeScript en esta fase.
- Este documento define seguimiento y criterio de implementación; la siguiente fase debe aplicar la migración real en código.
