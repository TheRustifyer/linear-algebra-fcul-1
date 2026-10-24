# Publicación e idiomas

La carpeta original de la asignatura sigue siendo el repositorio. Se edita el índice curricular y los apuntes en sus ubicaciones habituales. El README público presenta el proyecto por separado.

## Publicación automática

Cada subida a `main` ejecuta tres trabajos:

1. **Translate:** prepara las notas fuera del checkout, recupera la memoria de traducción y utiliza exclusivamente Argos para traducir la prosa que aún no conoce.
2. **Build:** construye tres sitios completos con Quartz, con búsquedas e índices propios.
3. **Deploy:** publica el conjunto en GitHub Pages después de que terminen correctamente las tres ediciones.

La edición inglesa ocupa la raíz; la española, `/es/`; la portuguesa, `/pt/`. La interfaz de Quartz usa inglés y cada documento declara el idioma de su contenido. Las rutas de las notas permanecen estables entre idiomas. El selector lleva a la versión de la misma nota y los ejercicios están enlazados en todas las páginas.

No se necesita ninguna clave de una API de traducción. Los modelos se descargan de Argos, se comprueban mediante SHA-256 y se ejecutan con CPU en GitHub. Se usan modelos directos ES→EN y ES→PT, sin idioma intermedio.

## Dónde se guardan las traducciones

| Ubicación | Contenido | Conservación |
| --- | --- | --- |
| Rama `main` y vault | Originales, configuración y glosario | Historial normal |
| Rama técnica `translation-memory` | Fragmentos traducidos en JSON comprimido y manifiesto de procedencia | Historial Git, independiente de la caché |
| Caché de Actions | Modelos instalados y archivos descargados | Puede caducar; se reconstruye |
| Artefacto `argos-translations-…` | Ediciones Markdown preparadas, memoria e informe de traducción | 90 días, sujeto a la retención del repositorio |
| GitHub Pages | HTML, búsqueda y archivos de lectura | Última publicación correcta |

La rama técnica pertenece al mismo repositorio público: es pública y no constituye almacenamiento privado. No se descarga dentro del vault ni se mezcla con las notas de `main`. El trabajo de traducción la actualiza con permisos limitados a ese trabajo. Su actualización no vuelve a disparar Pages, que escucha únicamente `main`.

La memoria guarda cada fragmento por contenido y por versión del procedimiento, modelos y glosario. Si cambia un párrafo, se traduce ese párrafo. Si cambian los modelos o las reglas de traducción, se invalida la memoria correspondiente. Durante una ejecución larga se guardan avances; los fragmentos terminados se conservan incluso si después falla la construcción de Quartz.

El archivo descargable permite recuperar los documentos concretos de una publicación. La rama técnica permite reconstruirlos aunque hayan caducado tanto el artefacto como las cachés. Si no existe memoria, se vuelve a traducir desde los originales.

## Protección del contenido

La extracción utiliza un parser Markdown con soporte para tablas, referencias, metadatos y matemáticas. Se traducen textos, títulos y etiquetas visibles. Se conservan las fórmulas, el código, los identificadores de referencias y los destinos de los enlaces. Una comprobación de integridad detiene la publicación si cambia contenido protegido.

Las versiones publicadas incluyen anclas de los encabezados originales para que sigan funcionando los enlaces a apartados después de traducir sus títulos. PDF, TeX y otros adjuntos conservan su idioma y contenido originales.

## Configuración

- `languages.json`: idioma de origen, idioma principal y rutas de las ediciones.
- `i18n/argos-models.lock.json`: versión del motor y huellas de los modelos.
- `i18n/glossary.json`: traducciones exactas preferidas para títulos y términos.
- `i18n/requirements.txt`: dependencia de Argos utilizada por Actions.
- `quartz.config.yaml`: aspecto, interfaz y funciones de Quartz.
- `quartz-revision.txt`: revisión fija del motor.

Para solicitar una reconstrucción completa, ejecuta el flujo desde Actions y activa **Rebuild all translations**. Esto vuelve a traducir con los modelos fijados y conserva el historial anterior en la rama técnica.

## Vista previa local

```sh
npm run preview
```

Abre http://localhost:8080. Esta vista muestra los originales españoles, instala Quartz si hace falta y se actualiza al editar. No ejecuta Argos ni escribe traducciones en el vault.

```sh
npm run build
```

Genera una web local de los originales en `.site/public/`, ignorada por Git. El motor y los archivos de preparación se guardan en la carpeta temporal del sistema.

Argos está restringido a GitHub Actions. Las órdenes internas de extracción y montaje de idiomas forman parte del flujo de publicación, no del trabajo normal sobre los apuntes.
