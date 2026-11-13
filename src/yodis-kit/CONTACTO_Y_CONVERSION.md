# Política de contacto y conversión — V4 (aprobada)

**Objetivo:** solo 3 canales finales; ninguna reserva.

| Canal | Dato | Visibilidad | Contexto |
|---|---|---|---|
| Formulario | Formulario real de la web, por resolver en repositorio | Siempre en menú de contacto | Principal para briefs y propuestas; precargar recap si existe |
| Email | `hola@tomfabre.com` | Siempre en menú de contacto | Consultas, empleo, colaboraciones y proyectos |
| WhatsApp | `+33 7 83 83 56 54`, `https://wa.me/33783835654` | Solo tras cualificación | Contacto ágil ante oportunidad concreta |

## Regla exacta para WhatsApp
Requiere **TODAS**: (1) intención explícita de contratar o colaboración profesional; (2) necesidad definida; (3) comienzo pronto o en los próximos 1–3 meses. El presupuesto no es obligatorio. No basta con abrir la ruta de proyectos, pulsar «contactar» o explorar «Sorpréndeme».

**Fallo cerrado:** sin datos suficientes, ocultar; si se navega a un nodo protegido o se invoca la acción directamente, bloquearla y llevar a formulario/email. Dejar reconstruir la cualificación con el historial al ir atrás o reiniciar.

## Conversación sugerida
- No cualificado: «Si quieres contarle algo a Tom, te ayudo a enviarle un mensaje.» → formulario / email.
- Cualificado: «¡Esto ya suena a algo concreto! Podemos dejarle los detalles a Tom o, si prefieres, escribirle directamente.» → formulario / email / WhatsApp.

## Mensajes sugeridos de WhatsApp
- ES: «Hola, Tom. Vengo de tu portfolio, estuve hablando con Yodis y me gustaría conversar sobre [servicio/necesidad] para [plazo].»
- EN: «Hi Tom! I found you through your portfolio and spoke with Yodis. I'd like to discuss [service/need] for [timeline].»
- FR: «Salut Tom ! Je viens de ton portfolio, j’ai discuté avec Yodis et j’aimerais te parler de [service/besoin] pour [échéance].»
Usar únicamente datos efectivamente aportados, omitir segmentos desconocidos; codificar querystring. El visitante decide si envía el mensaje.

## Protección real del número
Ocultar el botón no oculta técnicamente el número si se distribuye en JS público. Si realmente se desea reservar el número, se requerirá un servicio del lado del servidor con controles apropiados; este paquete NO ofrece tal protección.
