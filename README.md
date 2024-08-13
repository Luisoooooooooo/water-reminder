# Water Reminder

## Descripción

Water Reminder Extension es una extensión de Chrome que te recuerda beber agua cada 2 horas mediante una notificación en tu escritorio. También muestra un temporizador en el popup que indica cuánto tiempo falta para el próximo recordatorio.

## Características

- Notificaciones automáticas cada 2 horas para recordarte beber agua.
- Temporizador visible en el popup que muestra el tiempo restante hasta el próximo recordatorio.
- Persistencia del temporizador incluso si el navegador Chrome se cierra y se vuelve a abrir.

## Instalación y Configuración

### 1. Clonar el repositorio

Primero, clona este repositorio en tu máquina local:

```bash
git clone https://github.com/Luisoooooooooo/water-reminder.git
cd water-reminder
```

### 2. Cargar la extensión en Chrome

Sigue estos pasos para cargar la extensión en tu navegador Chrome:

1. Abre Chrome y dirígete a `chrome://extensions/`.
2. Activa el Modo desarrollador usando el interruptor en la parte superior derecha.
3. Haz clic en el botón "Cargar descomprimida".
4. Navega hasta la carpeta donde clonaste el repositorio `water-reminder` y selecciónala.
5. La extensión se cargará y aparecerá en la barra de herramientas de Chrome.

### 3. Uso de la extensión

- **Iniciar el temporizador**: Una vez cargada la extensión, el temporizador comenzará a contar automáticamente.
- **Ver el temporizador**: Haz clic en el ícono de la extensión en la barra de herramientas para abrir el popup y ver el tiempo restante hasta el próximo recordatorio.
- **Recibir notificaciones**: Cada 2 horas recibirás una notificación que te recordará beber agua.

## Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos:

- **`manifest.json`**: Define la configuración y los permisos de la extensión.
- **`background.js`**: Contiene la lógica del temporizador y las notificaciones en segundo plano.
- **`popup.html`**: Estructura HTML del popup que se muestra al hacer clic en el ícono de la extensión.
- **`popup.js`**: Maneja la actualización del temporizador en el popup.
- **`styles.css`**: Contiene los estilos para el popup.
- **`icon.png`**: Ícono de la extensión, mostrado en la barra de herramientas de Chrome.

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am Añadir nueva funcionalidad`).
4. Empuja la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request en GitHub.

## Problemas conocidos

- **Sincronización del temporizador**: Si el temporizador parece no estar sincronizado, asegúrate de que Chrome tenga permisos para usar notificaciones y almacenamiento local.
- **Icono no visible**: Asegúrate de que el archivo `icon.png` esté en la ruta correcta y tenga el tamaño adecuado (48x48 píxeles).

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Créditos

- Desarrollado por [Luiso Vázquez](https://github.com/Luisoooooooooo).

