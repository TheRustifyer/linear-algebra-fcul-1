# Publicar la asignatura

La carpeta original es el repositorio. El índice completo se edita en README.md y los apuntes permanecen en sus carpetas actuales.

Para ver la web, ejecuta desde esta carpeta, con Node.js 22 o posterior:

```sh
npm run preview
```

La primera vez se instala Quartz automáticamente. Abre http://localhost:8080. Editar un apunte actualiza la vista previa.

Para generar la web sin servidor:

```sh
npm run build
```

El resultado queda en .site/public/, ignorado por Git. El motor y las copias temporales se generan en la carpeta temporal del sistema. No se editan ni se mantienen como otro repositorio.

## Organización

- README.md: el índice curricular completo.
- Carpetas 00–07: los apuntes originales.
- .site/quartz.config.yaml: presentación y funciones de la web.
- .site/languages.json: idiomas y portadas.
- .site/translations/: portadas inglesa y portuguesa, todavía resumidas.

Durante la publicación se adaptan los enlaces del vault. Los destinos ajenos a esta carpeta se muestran como texto cuando no están disponibles. Los bloques ejecutables Dataview y Anki se ocultan en la web, conservándolos en los originales. El informe de enlaces externos se guarda en la caché de publicación.

## Traducciones

El original actual está en español. Para traducir un apunte, crea su versión junto a él con el sufijo .en.md o .pt.md:

- 01 Matrices y operaciones.md
- 01 Matrices y operaciones.en.md
- 01 Matrices y operaciones.pt.md

El selector enlaza las versiones existentes. Si usas otros nombres, comparte el campo translationKey en el frontmatter y declara language: es-ES, en-US o pt-PT.

Las portadas actuales en inglés y portugués son resúmenes; los apuntes completos siguen en español. La interfaz general de Quartz usa español.

## Git y GitHub

El Git independiente está en esta carpeta. El vault puede seguir guardando sus archivos existentes: son los mismos archivos físicos, con historias Git independientes, sin submódulo.

Configura origin aquí cuando tengas la URL pública. En GitHub activa Settings → Pages → GitHub Actions. El flujo prepara y publica los apuntes automáticamente desde los originales.

La URL base se obtiene del repositorio de GitHub; también puede establecerse mediante QUARTZ_BASE_URL.

La versión de Quartz está fijada en quartz-revision.txt. Su licencia MIT corresponde al motor; no se asigna por ello una licencia a los apuntes.
