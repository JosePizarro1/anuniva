# Anuniva

Sitio estático en español para servicios de inteligencia artificial y desarrollo de software. No requiere compilación ni dependencias.

## Vista local

Desde esta carpeta, ejecutar `python3 -m http.server 4322 --bind 127.0.0.1` y visitar http://127.0.0.1:4322.

## Archivos

- `index.html`: presentación, seis servicios, enfoque, proceso, ubicación y formulario.
- `styles.css`: sistema visual adaptable, fuentes del sistema, estados de foco y preferencia de movimiento reducido.
- `script.js`: navegación móvil, selección de servicio y simulación del formulario.
- `terminos.html` y `privacidad.html`: condiciones y privacidad de la demostración.
- `logo.svg`: reconstrucción vectorial del símbolo proporcionado, con infinito, dos puntos y signo más, en azul, turquesa y verde.
- `favicon.svg`: versión del símbolo para la pestaña del navegador.

## Formulario de demostración

No tiene endpoint, almacenamiento, analítica ni integración con CRM. Valida campos obligatorios y consentimiento desmarcado por defecto, muestra un estado de progreso durante 1,2 segundos y una confirmación que explica que no se enviaron los datos. Luego limpia los campos. No envía correos ni promete una respuesta.

Antes de habilitar la recepción real, definir el responsable legal, un contacto verificado, el proveedor y destino de los datos, los plazos de conservación y el canal para ejercer derechos. Actualizar la política y el consentimiento según ese tratamiento, e implementar la validación del servidor y las medidas de protección correspondientes. Los documentos actuales describen únicamente la demo.

## Referencias de diseño

- Fuente oficial: https://developer.apple.com/design/human-interface-guidelines/
- Introducción oficial: https://developer.apple.com/design/get-started/
- Repositorio comunitario localizado como posible referencia solicitada: https://github.com/tzzs/apple-design-skill
- Otra recopilación comunitaria: https://github.com/realmaitreal/Human-Interface-Guidelines

Se adaptaron principios generales de claridad, jerarquía, consistencia y respuesta a las acciones a una web. No se instaló ningún skill externo ni se presenta el sitio como una interfaz oficial de Apple.

## Verificación realizada

Revisión visual en escritorio (1440 px) y móvil (390 px); sin desbordamiento horizontal a 320, 390, 768, 1024 y 1440 px. Comprobados: enlaces internos y legales, menú móvil, preselección de servicio, consentimiento obligatorio, simulación, limpieza del formulario, ausencia de solicitudes de red durante el envío y ausencia de almacenamiento local/de sesión. Sintaxis JavaScript correcta y sin errores de ejecución durante la prueba.

## Identidad blanca

Fondo principal blanco y acentos derivados del símbolo de la marca. La portada conecta visualmente personas y tecnología mediante el infinito. El logo se reconstruyó como SVG escalable; no depende de la imagen de baja resolución.

Movimiento CSS: trazado inicial del infinito, flotación suave de los puntos y órbita de fondo. El control de pausa detiene las animaciones del logo. Las secciones aparecen al entrar en pantalla mediante IntersectionObserver. `prefers-reduced-motion` desactiva las animaciones y muestra el contenido directamente. Se verificaron pausa, reanudación y preferencia de movimiento reducido además de las comprobaciones anteriores.
