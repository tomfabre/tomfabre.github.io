# Yodis Brownie Jr. — Especificación de integración V4

## Objetivo
Reemplaza el **chat IA existente** por un asistente determinista sin llamadas a modelos. **No añadas un segundo chat**. Reutiliza interfaz, tokens, animaciones, modo light/dark y ES/EN/FR del portfolio. La asistente **Yodis Brownie Jr. es mujer**. El diseñador se llama **Álvaro Fabre** y casi todo el mundo lo conoce como **Tom**.

## Fuente de verdad
- `DATOS_CANONICOS_YODIS.md`: identidad, trayectoria y hechos. Tom NO es DJ.
- `conversations.json` schemaVersion 3: mensajes y opciones ES/EN/FR, seis sorpresas, rutas profesionales, perfil, coro en Aix y música de una miniserie francesa: https://www.youtube.com/watch?v=6GeaUr-J4co (no atribuir título ni créditos sin comprobar).
- `CONTACTO_Y_CONVERSION.md`: **reglas obligatorias** de contacto; reemplaza la política de llamadas/agendas de versiones anteriores.

## Máquina de estados
- Renderizar `nodes[id].copy[locale]` y sus opciones, conservar identificadores en historial para cambiar idioma sin perder estado.
- Si una opción tiene `sets`, actualizar estado de cualificación **solo al pulsarla**. Guardar `intent`, `need`, `timeline`, y respuestas `service`, `stage`, `budget` del funnel.
- Calcular `whatsappEligible = ['hire_project','professional_collaboration'].includes(intent) && need === 'defined' && ['soon','quarter'].includes(timeline)`.
- `requires.qualification === 'whatsappEligible'`: ocultar opción cuando es falso. Además bloquear navegación directa a `whatsapp_info` y ejecución `@whatsapp` si es falso. En caso de duda, falso.
- Al volver atrás o reiniciar, reconstruir estado a partir de opciones elegidas, sin conservar cualificaciones obsoletas. No considerar ver About, Sorpréndeme o Contacto como intención profesional.
- Desde cualquier zona, `professional_intent → professional_need → professional_timing → contact_choice` permite explicar una propuesta concreta sin pasar por presupuesto.
- `@whatsapp` debe abrir con clic explícito `https://wa.me/33783835654?text=...` usando un resumen breve y localizado, codificado con `encodeURIComponent`. Nunca mostrar a visitantes exploratorios ni afirmar mensaje enviado.
- `@email` abrir `mailto:hey@tomfabre.com` con asunto/contexto cuando exista; nunca afirmar correo enviado.
- `@contact_form` abrir formulario **real** del sitio; precargar respuestas conocidas; recopilar nombre/email solo al momento de enviar. No inventar endpoint de envío. Si no existe formulario, documentar bloqueo y ofrecer email de fallback.
- `@copy_summary`: opcional cuando hay resumen; no convertirlo en CTA principal.
- `@series_music`: abrir URL de YouTube proporcionada (sin autoplay); `@random_fact`: rotar sin repetir inmediatamente.
- `@projects_*` y `@cv`: solo links reales comprobados en el repositorio. No inventar enlaces.

## CTA finales
Mostrar **Formulario** y **Email** en todos los contextos de contacto. Mostrar **WhatsApp** como tercera opción exclusivamente si `whatsappEligible` es verdadero. La opción para cualificar «Tengo una propuesta profesional» es un paso conversacional, no un CTA directo de contacto. **No reservar reuniones, no añadir Calendly ni booking**.

## UX y contenido
- Panel editorial minimalista, grises, hover discreto, 150–220 ms máximo de entrada; no usar indicador de persona "Online", ni «Powered by AI». Informar que es una guía interactiva.
- Conversaciones ligeras, accesibilidad teclado, foco, Escape, `aria-live`, `prefers-reduced-motion`, responsive y `sessionStorage` con versión.
- La sección Sorpréndeme tiene seis ramas: música (no DJ), lugares, observación/UX, pequeñas cosas, curiosidades y secreto; mantener la voz de una asistente curiosa, cercana y con humor.
- Respetar los datos reales: nacido en Cúcuta, estudios en San Cristóbal y Mérida, trayectoria Chile/Francia/Madrid. No inventar fechas específicas para etapas que no están datadas.
- En la revelación final, aclarar que el chat es una experiencia conversacional diseñada, no IA generativa.

## Privacidad y analítica
- No enviar PII, mensajes ni el resumen individual a GA4; solo eventos de uso sin PII, sujetos al consentimiento del sitio.
- `contact_clicked` significa clic, no contacto completado. `lead_submitted` solo con confirmación REAL de formulario.
- El número aparece en la config del frontend: esta lógica **no protege realmente el número** de lectores del código fuente. La condición solo evita su exposición normal en la interfaz.

## Pruebas obligatorias
1. Los destinos de todas las opciones existen (nodo o acción), sin nodos imposibles de alcanzar.
2. Cada nodo/opción tiene ES, EN, FR.
3. Entrada Sorpréndeme → contacto: NO WhatsApp.
4. Proyecto concreto + etapa definida + pronto/1–3 meses: SÍ WhatsApp.
5. Proyecto exploratorio o sin fecha: NO WhatsApp. Presupuesto no es requisito.
6. Propuesta profesional → necesidad concreta → fecha próxima: SÍ WhatsApp.
7. Cambio de idioma, back, restart y refresh no heredan elegibilidad errónea.
8. No hay CTA de agendar reunión; no hay API IA.
9. Email exacto y WhatsApp exacto; textos y resúmenes codificados al abrir enlaces.
10. Formulario solo cuenta como conversión tras envío confirmado; respetar consentimiento y accesibilidad.

## Entrega
Inspecciona el código de la web antes de modificarlo; implementa de forma integrada, ejecuta lint/build/tests. Deja resumen de archivos cambiados, URLs faltantes y limitaciones sin decir que integraciones inexistentes funcionan.
