---
title: Álgebra Lineal y Geometría Analítica — índice de contenidos
aliases:
  - Álgebra Lineal y Geometría Analítica — índice de contenidos
  - Álgebra Linear e Geometria Analítica FCUL
  - Índice ALGA FCUL
asignatura: Álgebra Lineal y Geometría Analítica
institución: Faculdade de Ciências da Universidade de Lisboa
nivel: universitario-introductorio
capa: curricular
tipo: índice
tags:
  - matematicas
  - algebra-lineal
  - geometria-analitica
  - fcul
  - grado-fisica
  - indice-curricular
---

# Álgebra Lineal y Geometría Analítica

> [!important] Alcance curricular y criterio de excelencia
> El recorrido sigue las **siete unidades** de *Álgebra Linear e Geometria Analítica* de la Licenciatura en Física de FCUL. El programa de 2025/2026 detalla los contenidos; el de 2026/2027 conserva las siete unidades con una redacción más breve.[^1][^2] Las ampliaciones de Khan Academy y Krista King están señaladas en su lugar correspondiente.[^10][^14]

Los títulos enlazados conducen a notas existentes en el Vault. Los títulos sin enlace señalan desarrollos pendientes; el contenido curricular ya figura en la lista.

> [!note] Ampliación del currículo del MIT
> Las incorporaciones de *18.06SC Linear Algebra*, de Gilbert Strang, complementan las siete unidades oficiales de FCUL y se identifican mediante referencias al MIT junto a cada bloque. Las unidades 8 y 9 son ampliaciones externas completas.[^mit-curso]
>
> Los títulos marcados **pendiente** enlazan a notas sin desarrollar: contienen únicamente su lista de completitud y la sesión del MIT correspondiente. Los apartados ya desarrollados se reutilizan sin duplicarlos.

## Prerrequisitos operativos

* [ ] Redactar una [[Matemáticas/Preuniversitario/1 Bachillerato/00 Razonamiento, lenguaje y resolución de problemas/02 Argumentación matemática y comunicación|argumentación matemática]] distinguiendo implicación, equivalencia y contraejemplo.
* [ ] Manejar [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/00 Fundamentos/01 Teoría elemental de conjuntos|pertenencia, inclusión, igualdad, conjunto vacío, conjunto de partes y producto cartesiano]].
* [ ] Operar con unión, intersección, diferencia y complemento, traduciendo cada operación a conectivos lógicos.
* [ ] Demostrar una igualdad de conjuntos mediante doble inclusión o equivalencias de pertenencia elemento a elemento.
* [ ] Probar las leyes conmutativas, asociativas, distributivas, de absorción y de De Morgan; usar diagramas de Venn sólo como apoyo intuitivo.
* [ ] Operar con [[Matemáticas/Sistemas numéricos/Números complejos|números complejos]] en forma algebraica.
* [ ] Resolver [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales|sistemas de ecuaciones lineales]] elementales.
* [ ] Interpretar vectores mediante componentes y combinaciones lineales.

### Infografía de recursos — conjuntos y demostración

Recursos de lógica y conjuntos, propiedades booleanas y demostración elemento a elemento.[^18][^19][^20]

```mermaid
flowchart LR
    A["1 · Lógica, cuantificadores y conjuntos<br/>UNAM"] --> B["2 · Propiedades booleanas<br/>UPV"] --> C["3 · Demostración elemento a elemento<br/>UPV"]
    click A "https://amyd.quimica.unam.mx/course/view.php?id=229" "Abrir curso de la UNAM"
    click B "https://www.upv.es/visor/media/0a434a70-1e83-11e6-9e98-d90fe8da13de/v" "Abrir vídeo de la UPV"
    click C "https://riunet.upv.es/handle/10251/64151" "Abrir vídeo de la UPV"
```

## Unidad 1. Matrices y sistemas de ecuaciones lineales reales y complejos

Alcance oficial: matrices, operaciones, transformaciones elementales, rango, eliminación de Gauss–Jordan, inversión y resolución de sistemas [^1] [^2]. Síntesis de las aulas 1–10: [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/Resumen - Síntesis de contenidos|resumen del capítulo]].

### Matrices y operaciones — orden de lectura

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices|01 · Matrices]] reúne vectores coordenados y sus operaciones, definición y formas de matrices, matriz opuesta, traspuesta, conjugada, adjunta, simetría, hermiticidad y traza. [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones|02 · Operaciones]] desarrolla suma, resta, producto por escalar, producto matricial, potencias y sus propiedades, con la representación matricial de sistemas como aplicación. Las referencias a las aulas 2–4 se conservan en cada nota.

Antes de las primeras pruebas por entradas, consulta [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/00 Prefacio#^2bd3aa|00 · Demostración por componentes]].

* [x] Construir y operar vectores coordenados de $\mathbb R^n$ y $\mathbb C^n$; distinguir escalar, vector, matriz fila y columna; usar el paralelogramo y las propiedades de las operaciones. ✅ 2026-11-04
* [x] Definir [[Matemáticas/Álgebra lineal/Matrices|matrices]], dimensiones, entradas y tipos notables sobre $\mathbb R$ y $\mathbb C$. ✅ 2026-11-04
* [x] Dominar suma, opuesto, producto por escalar, producto matricial, potencias, transposición, conjugación, adjunción y traza; reconocer matrices simétricas y hermíticas y justificar sus propiedades. ✅ 2026-11-04

Los epígrafes de esas casillas se localizan en:

- **Matrices:** [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#De los pares ordenados a los vectores coordenados|vectores coordenados]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Operaciones con vectores coordenados|operaciones vectoriales]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Leyes de las operaciones vectoriales|leyes vectoriales]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Matrices: filas, columnas y entradas|entradas y dimensiones]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Matrices por su forma|formas]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Matrices nulas, identidad, diagonales y triangulares|clases básicas]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Matriz opuesta|matriz opuesta]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Transpuesta|traspuesta]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Conjugada de una matriz|conjugada]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Conjugada transpuesta|adjunta]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Matrices simétricas, antisimétricas, hermíticas y antihermíticas|simetría y hermiticidad]] y [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Traza de una matriz|traza]].
- **Operaciones:** [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Suma, opuesto y resta|suma, opuesto y resta de matrices]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Producto por escalares|producto por escalar]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Producto matricial|producto matricial]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Potencias de una matriz cuadrada|potencias]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Propiedades de la transpuesta|leyes de la traspuesta]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Propiedades de la conjugada y de la adjunta|leyes de conjugación y adjunción]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Propiedades de la traza|propiedades de la traza]] y [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Sistemas lineales en forma matricial|sistemas en forma matricial]].

> [!note] Ampliación del currículo del MIT — producto matricial
> [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Combinaciones lineales de vectores|Combinaciones lineales de vectores]] e [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Lectura por columnas y filas|interpretación del producto mediante combinaciones de columnas y filas]]. Desarrollo adicional al material de las aulas 2–4.[^mit-producto]

> [!opcional] Ampliaciones de la clasificación de matrices
> [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Matriz antisimétrica|Matrices antisimétricas]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Matriz antihermítica|antihermíticas]] y la prueba de la diagonal real de una hermítica complementan las aulas 2–4 cotejadas. Las pruebas escalares de conjugación amplían los prerrequisitos de números complejos. Esta marca describe la procedencia del desarrollo, sin afirmar que esos conocimientos estén excluidos del programa o de la evaluación.

> [!opcional] Otras ampliaciones de operaciones
> [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Adjunta de un producto|Adjunta de un producto]] y [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Adjunta de un múltiplo escalar|adjunta de un múltiplo escalar]]: consecuencias añadidas de las leyes de transposición y conjugación, sin atribución TPC a las aulas 2–4.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Matrices elementales y operaciones elementales|Matrices elementales y operaciones elementales]]

Presentaciones de FCUL: Aula 5 — transformaciones elementales y sus matrices (`ALGA-2026-27-AulasTeo-slides-aula5-TransfElem-impressao.pdf`). Desarrollo: [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Matrices elementales y operaciones elementales|nota curricular]].

* [ ] Ejecutar operaciones elementales con la notación $L_i$, representar su secuencia mediante $t_1,\ldots,t_p$ y reconocer sus matrices elementales.
* [ ] Justificar que las operaciones elementales conservan el conjunto de soluciones y mostrar la cadena inversa que deshace sus efectos.
* [ ] Relacionar una [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Matrices elementales y operaciones elementales#Composición de operaciones elementales|secuencia de operaciones con multiplicación por matrices elementales]]; obtener $[B\mid Q]$ al operar sobre $[A\mid I_m]$ y justificar $B=QA$, con $Q=E_p\cdots E_1$.

> [!note] Una proposición TPC, tres casos
> La prueba de [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Matrices elementales y operaciones elementales#Multiplicación por la izquierda y operaciones elementales|$EA=t(A)$]] comprende intercambio, escalado y reemplazo; no son tres TPC independientes. La verificación de las [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/05 Matrices invertibles y matriz inversa#Inversas de los tres tipos|inversas elementales]] es otro encargo, desarrollado en 05.[^alcance-elementales]

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan|Eliminación de Gauss y Gauss–Jordan]]

Presentaciones de FCUL: Aula 4 — pivotes y formas escalonadas, pp. 13–17, Aula 5 — ejemplo rectangular, y Aula 6 — estrategia de los métodos, rango y reducción, pp. 2–10. Desarrollo: [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan|nota curricular]].

* [ ] Obtener formas escalonada y escalonada reducida mediante Gauss y Gauss–Jordan.
* [ ] Interpretar [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#Variables pivote y variables libres|pivotes, variables libres y parámetros]]; calcular el [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#Rango de una matriz|rango]] y justificar sus [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#Cotas del rango|cotas]].

Los [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#Método de Gauss|pasos de Gauss]] y [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#Método de Gauss–Jordan|Gauss–Jordan]] preceden a los ejemplos completos. Las demostraciones de [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#Existencia de forma escalonada reducida|existencia]] e [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#El rango no depende de la forma escalonada elegida|invariancia del número de pivotes]] y sus tarjetas están plegadas junto a cada propiedad. El [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#Unicidad de forma escalonada reducida|resultado de unicidad]] se enuncia sin demostración.

> [!opcional] Ampliaciones del desarrollo de eliminación
> La [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Matrices elementales y operaciones elementales#Lectura de una fila del producto|lectura de $EA$ como combinación de filas]] añade una interpretación del MIT. Las pruebas de [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#Existencia de forma escalonada reducida|existencia]] e [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#El rango no depende de la forma escalonada elegida|invariancia del rango]] amplían resultados enunciados, pero no demostrados ni asignados como TPC en las diapositivas correspondientes.[^alcance-elementales]

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/05 Matrices invertibles y matriz inversa|Matrices invertibles y matriz inversa]]

Presentaciones de FCUL: Aula 6 — invertibilidad, pp. 11–14, Aula 7 — matrices invertibles, y Aula 10 — inversa aplicada a sistemas, pp. 8–10. Desarrollo: [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/05 Matrices invertibles y matriz inversa|nota curricular]]. El cálculo por Gauss–Jordan se apoya en la [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/05 Matrices invertibles y matriz inversa#Por qué el bloque derecho contiene la inversa|reducción simultánea de $[A\mid I_n]$]].

* [ ] Definir la [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/05 Matrices invertibles y matriz inversa#Matriz inversa e invertibilidad|inversa de una matriz cuadrada]], justificar su unicidad y calcularla por Gauss–Jordan.
* [ ] Demostrar la [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/05 Matrices invertibles y matriz inversa#Invertibilidad de las matrices elementales|invertibilidad de las matrices elementales]] y verificar sus tres tipos de inversas como partes de un único TPC.
* [ ] Establecer las [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/05 Matrices invertibles y matriz inversa#Matrices invertibles como productos de elementales|equivalencias entre invertibilidad, rango completo, forma reducida identidad y producto de elementales]], y su relación con la [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/05 Matrices invertibles y matriz inversa#Relación entre invertibilidad, rango y solución única|solución única]].
* [ ] Resolver [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/05 Matrices invertibles y matriz inversa#Despejar una matriz multiplicada por la izquierda|$AX=C$]] y [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/05 Matrices invertibles y matriz inversa#Despejar una matriz multiplicada por la derecha|$XA=C$]] multiplicando por la inversa en el lado correspondiente; justificar las consecuencias de $AB=I_n$ o de que $AB$ sea invertible.

Las cuatro caracterizaciones corresponden al Aula 7, diapositiva 7. Sus pruebas separan [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/05 Matrices invertibles y matriz inversa#Invertibilidad y forma reducida (1 ⇔ 3)|invertibilidad y forma reducida]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/05 Matrices invertibles y matriz inversa#Rango y forma reducida (2 ⇔ 3)|rango y forma reducida]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/05 Matrices invertibles y matriz inversa#De invertibilidad a producto de elementales (1 ⇒ 4)|factorización en elementales]] y [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/05 Matrices invertibles y matriz inversa#De producto de elementales a invertibilidad (4 ⇒ 1)|su recíproco]]. La conexión con la solución única pertenece al Aula 10, diapositivas 8–9. Las pruebas de [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/05 Matrices invertibles y matriz inversa#Existencia de solución|existencia]] y [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/05 Matrices invertibles y matriz inversa#Unicidad de solución|unicidad]] desarrollan la equivalencia de la diapositiva 9. Sólo la prueba recíproca, [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/05 Matrices invertibles y matriz inversa#De la solución única al rango completo|de la solución única al rango completo]], está plegada como ampliación.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/06 Compatibilidad y clasificación de sistemas|Compatibilidad y clasificación de sistemas]]

Presentaciones de FCUL: Aula 9 — discusión de sistemas y criterio por rangos, pp. 2–11. Desarrollo: [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/06 Compatibilidad y clasificación de sistemas|nota curricular]], con el [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/06 Compatibilidad y clasificación de sistemas#Teorema de Rouché–Capelli|criterio de Rouché–Capelli]], las tres clases de sistemas y su grado de indeterminación.

* [ ] Clasificar sistemas compatibles determinados, compatibles indeterminados e incompatibles.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/07 Factorización LU|Ampliación de contraste — factorización LU]]

Ampliación del curso de Krista King, fuera del núcleo explícito de FCUL [^14].

* [ ] Construir una factorización $A=LU$ a partir de las operaciones y matrices de eliminación cuando no se requieren permutaciones de filas.
* [ ] Identificar $L$ como triangular inferior con diagonal unitaria y $U$ como triangular superior, y comprobar la factorización reconstruyendo $A$.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/08 Sistemas de ecuaciones lineales|Sistemas de ecuaciones lineales]]

Presentaciones de FCUL: Aula 8 — sistemas lineales y Aula 10 — homogéneos y solución general, pp. 2–7 y 11. Desarrollo: [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/08 Sistemas de ecuaciones lineales|nota curricular]].

* [ ] Reconocer ecuaciones lineales, sistemas, soluciones, equivalencia y cuerpo de resolución; interpretar rectas y planos como conjuntos de soluciones.
* [ ] Escribir $AX=B$, construir $[A\mid B]$ y verificar soluciones mediante producto matricial.
* [ ] Resolver por Gauss y Gauss–Jordan sistemas con solución única o variables libres, incluidos los dos ejemplos completos del aula 8.
* [ ] Construir el homogéneo asociado y expresar toda solución compatible como una solución particular más una combinación de soluciones homogéneas; verificar el caso incompatible y la convención de vectores columna.

### Problemas y criterio de dominio

* [ ] Resolver y clasificar sistemas reales y complejos, incluidos sistemas con parámetros.
* [ ] Modelar una situación mediante un sistema y detectar operaciones inválidas.
* [ ] Explicar la relación entre pivotes, rango, grados de libertad e invertibilidad.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/09 Interpretaciones de Ax=b|Interpretaciones de $Ax=b$]] · pendiente

Ampliación del currículo del MIT.[^mit-geometria]

* [ ] Distinguir las interpretaciones de $Ax=b$ como ecuaciones por filas, combinación de columnas y transformación matricial; relacionarlas entre sí.

### Ampliación — permutaciones y factorización $PA=LU$

Ampliación del currículo del MIT, recogida en la nota de LU ya existente.[^mit-permutaciones]

* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/07 Factorización LU#Factorización con permutación|Construir matrices de permutación y una factorización $PA=LU$ cuando se intercambian filas; resolver los dos sistemas triangulares.]]

## Unidad 2. Determinantes

Alcance oficial: definición, órdenes dos y tres, desarrollo de Laplace, propiedades, regla de Cramer e inversión por cofactores.[^2] Las aulas 13–16 precisan el recorrido y los encargos de demostración.[^det-slides]

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/01 Definición y cálculo de determinantes|Definición y cálculo]]

* [ ] Justificar en todos los casos el criterio $ad-bc\ne0$ para la unicidad de un sistema de dos ecuaciones.
* [ ] Construir $A(i|j)$ y distinguir submatriz, [[Matemáticas/Álgebra lineal/Menor de una matriz|menor]] y [[Matemáticas/Álgebra lineal/Cofactor de una matriz|cofactor]].
* [ ] Definir recursivamente el [[Matemáticas/Álgebra lineal/Determinantes|determinante]], incluido el caso de orden uno.
* [ ] Calcular órdenes dos y tres; aplicar [[Matemáticas/Álgebra lineal/Regla de Sarrus|Sarrus]] únicamente en orden tres.
* [ ] Desarrollar por cualquier fila o columna mediante [[Matemáticas/Álgebra lineal/Desarrollo de Laplace|Laplace]] y aprovechar los ceros.
* [ ] Demostrar por inducción el recuento de $n!$ términos y reconocer una entrada de cada fila y columna en cada producto.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/02 Propiedades y aplicaciones|Propiedades y aplicaciones]]

* [ ] Demostrar aditividad y homogeneidad por separado en una fila y en una columna.
* [ ] Justificar el efecto de intercambiar, escalar o reemplazar filas o columnas y llevar cuenta de los factores al triangularizar.
* [ ] Demostrar la anulación para filas y columnas repetidas o proporcionales, incluido el múltiplo cero.
* [ ] Calcular el determinante triangular como producto de la diagonal y justificar $\det(I_n)=1$.
* [ ] Demostrar las propiedades de transposición, conjugación y escala global $\det(\lambda A)=\lambda^n\det(A)$.
* [ ] Justificar $\det(AB)=\det(A)\det(B)$ y obtener el determinante de la inversa; refutar la falsa aditividad global.
* [ ] Relacionar determinante no nulo, rango completo, invertibilidad y solución única de un sistema cuadrado.
* [ ] Construir la matriz de cofactores y la [[Matemáticas/Álgebra lineal/Matriz adjunta clásica|adjunta clásica]], distinguiéndola de la conjugada transpuesta.
* [ ] Demostrar la identidad de la adjunta en ambos órdenes y calcular una inversa completa o una entrada aislada.
* [ ] Reconocer un sistema de Cramer, demostrar la [[Matemáticas/Álgebra lineal/Regla de Cramer|regla]] y calcular una coordenada aislada o toda la solución.
* [ ] Cuando $\det(A)=0$, clasificar el sistema mediante Gauss o rangos, sin dividir por cero.

> [!note] Alcance de los encargos TPC
> La [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/02 Propiedades y aplicaciones#Homogeneidad respecto de una fila|homogeneidad]] por filas y columnas forma un único encargo con dos casos. La anulación por [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/02 Propiedades y aplicaciones#Filas proporcionales|filas y columnas proporcionales]] es otro encargo con dos casos. Las aditividades por fila y por columna sí se asignan por separado.[^alcance-determinantes]

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/03 Interpretación geométrica del determinante|Ampliación — interpretación geométrica]]

Complemento geométrico externo; no se atribuye a las aulas de determinantes.[^12]

* [ ] Obtener la imagen del cuadrado o cubo unidad a partir de las columnas de una matriz real.
* [ ] Interpretar $|\det(A)|$ como factor de área o volumen y el signo como orientación.
* [ ] Relacionar determinante nulo, dependencia de las columnas y pérdida de dimensión, sin inferir el rango exacto solo del determinante.
* [ ] Interpretar la multiplicatividad mediante la composición y distinguir escala global de estiramientos por dirección.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/ejercicios/00 Índice de ejercicios|Práctica existente — ejercicios 41–58]]

* [ ] Elegir el método de cálculo según los ceros y la estructura de la matriz.
* [ ] Discutir valores de parámetros que anulan el determinante.
* [ ] Aplicar y comprobar cofactores, adjunta, inversa y Cramer en los problemas del boletín.

## Unidad 3. Espacios vectoriales

Alcance oficial: espacios vectoriales abstractos, subespacios, bases y dimensión, coordenadas, espacios fila y columna, suma y suma directa y cambio de base.[^1] Las aulas 17–20 disponibles desarrollan axiomas, consecuencias, subespacios, generadores y espacios asociados a matrices. Las bases y el cambio de base se completan con apuntes académicos de ULisboa; la síntesis ortogonal de la nota 06 queda como ampliación.[^ev3]

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/01 Espacios vectoriales y axiomas|Espacios vectoriales y axiomas]]

* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/01 Espacios vectoriales y axiomas#Conjunto, escalares y operaciones|Distinguir el cuerpo, el conjunto de vectores y los dominios de las dos operaciones.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/01 Espacios vectoriales y axiomas#Los ocho axiomas|Enunciar A1–A4 y E1–E4 y distinguir los dos ceros y las dos distributividades.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/01 Espacios vectoriales y axiomas#Polinomios y funciones|Reconocer espacios de matrices, polinomios y funciones con sus operaciones.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/01 Espacios vectoriales y axiomas#El cuerpo forma parte de la estructura|Comparar las estructuras real y compleja y localizar un fallo de cierre.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/01 Espacios vectoriales y axiomas#Comprobar y descartar una estructura|Comprobar axiomas o exhibir un contraejemplo concreto.]]

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/02 Propiedades derivadas de los axiomas|Propiedades derivadas de los axiomas]]

* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/02 Propiedades derivadas de los axiomas#Axiomas, definiciones y resultados|Distinguir axioma, definición y resultado demostrado.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/02 Propiedades derivadas de los axiomas#Unicidad y cancelación|Demostrar unicidad del cero y del opuesto y cancelación aditiva.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/02 Propiedades derivadas de los axiomas#El escalar cero y el vector cero|Demostrar ambas reglas del cero; resolver el TPC del escalar cero.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/02 Propiedades derivadas de los axiomas#Opuestos y reglas de signo|Justificar los signos y resolver el TPC sobre el opuesto del vector.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/02 Propiedades derivadas de los axiomas#Distributividad sobre diferencias|Resolver los dos TPC de diferencias, indicando las leyes usadas.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/02 Propiedades derivadas de los axiomas#Producto nulo|Probar la equivalencia y utilizar el inverso sólo para un escalar no nulo.]]

#### Infografía de recursos — axiomas y propiedades

La ficha de la UPV orienta el aprendizaje de la definición; el vídeo de Archimedes Tube trata las propiedades derivadas y el recurso de la UNAM permite reconstruirlas por escrito.[^15][^16][^17]

```mermaid
flowchart LR
    A["1 · Definición y axiomas<br/>UPV"] --> B["2 · Propiedades demostradas<br/>Archimedes Tube"] --> C["3 · Reconstrucción escrita<br/>UNAM"]
    click A "https://www.upv.es/visor/media/8f4af840-84f1-11e8-bed3-8f377bbbf659/v" "Abrir vídeo de la UPV"
    click B "https://www.youtube.com/watch?v=1jrxXirw45M" "Abrir vídeo en YouTube"
    click C "https://prometeo.matem.unam.mx/recursos/VariosNiveles/iCartesiLibri/recursos/Algebra_Lineal_Interactiva/index.html" "Abrir recurso de la UNAM"
```

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/03 Subespacios y espacio generado|Subespacios y espacio generado]]

* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/03 Subespacios y espacio generado#Subespacios: operaciones heredadas|Definir subespacio y demostrar sus criterios equivalentes.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/03 Subespacios y espacio generado#Comprobar condiciones y encontrar un fallo|Verificar cierres con vectores arbitrarios y refutar mediante un testigo.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/03 Subespacios y espacio generado#Combinaciones lineales|Distinguir sistema ordenado, coeficientes y combinación lineal; reconocer su posible falta de unicidad.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/03 Subespacios y espacio generado#Espacio generado|Probar la propiedad mínima y justificar por qué los polinomios sin cota no son finitamente generados.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/03 Subespacios y espacio generado#Comparar y simplificar generadores|Demostrar los criterios de inclusión e igualdad; resolver los TPC de eliminación y transformaciones de generadores.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/03 Subespacios y espacio generado#Pertenencia: convertir la pregunta en un sistema|Relacionar pertenencia, compatibilidad e igualdad de rangos y resolver el TPC de las aulas 19–20.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/03 Subespacios y espacio generado#Intersecciones y uniones|Resolver el TPC de intersección y explicar cuándo una unión es subespacio.]]

> [!note] Criterios y tareas de generadores
> Los criterios de [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/03 Subespacios y espacio generado#Inclusión de espacios generados|inclusión]] e [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/03 Subespacios y espacio generado#Igualdad de espacios generados|igualdad]] son consecuencias del curso, no TPC asignados. La [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/03 Subespacios y espacio generado#Eliminar un generador redundante|eliminación de un generador]] sí lleva ese encargo. Para los polinomios sin cota de grado se pide una justificación, sin el rótulo TPC.[^alcance-generadores]

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/04 Independencia, bases y coordenadas|Independencia, bases y coordenadas]]

* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/04 Independencia, bases y coordenadas#Dependencia e independencia lineal|Decidir independencia y dependencia mediante relaciones no triviales o sistemas homogéneos.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/04 Independencia, bases y coordenadas#Bases y construcción|Extraer bases y completar listas independientes justificando cada incorporación.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/04 Independencia, bases y coordenadas#Dimensión|Demostrar la cota de intercambio y la igualdad de longitudes de las bases; calcular dimensiones.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/04 Independencia, bases y coordenadas#Coordenadas en una base|Demostrar existencia y unicidad y calcular columnas de coordenadas.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/04 Independencia, bases y coordenadas#Matrices de cambio de base|Construir las columnas, fijar el sentido del cambio y demostrar composición e inversa.]]

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/05 Sumas y espacios asociados a una matriz|Sumas y espacios asociados a una matriz]]

* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/05 Sumas y espacios asociados a una matriz#Suma e intersección|Calcular sumas reuniendo generadores e intersecciones mediante condiciones simultáneas.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/05 Sumas y espacios asociados a una matriz#Suma directa|Demostrar la equivalencia entre unicidad e intersección trivial y distinguir suplementariedad.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/05 Sumas y espacios asociados a una matriz#Fórmula de Grassmann|Demostrar Grassmann por extensión de bases y aplicarla con dimensiones finitas.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/05 Sumas y espacios asociados a una matriz#Espacios asociados a una matriz|Calcular núcleo, fila, columna y rango; distinguir ambientes, notaciones e invariancias.]]

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/06 Cuatro subespacios fundamentales|Ampliación — Cuatro subespacios fundamentales]]

* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/06 Cuatro subespacios fundamentales#Los cuatro subespacios y sus ambientes|Identificar columna, núcleo, fila y núcleo izquierdo en sus espacios respectivos.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/06 Cuatro subespacios fundamentales#Dimensiones y rango|Demostrar rango–nulidad y obtener las cuatro dimensiones.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/06 Cuatro subespacios fundamentales#Ortogonalidad|Justificar las relaciones ortogonales por productos con filas o columnas.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/06 Cuatro subespacios fundamentales#Soluciones de un sistema compatible|Obtener la solución única del espacio fila y demostrar que tiene norma mínima.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/06 Cuatro subespacios fundamentales#Invertibilidad de $A^TA$|Justificar la igualdad de núcleos y el criterio de rango completo por columnas.]]
* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/06 Cuatro subespacios fundamentales#Alcance real y caso complejo|Usar el adjunto y el producto hermítico para matrices complejas.]]

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/07 Matrices de rango uno|Matrices de rango uno]] · pendiente

Ampliación del currículo del MIT.[^mit-rango-uno]

* [ ] Representar matrices de rango uno mediante productos exteriores.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/08 Grafos, redes y matrices de incidencia|Grafos, redes y matrices de incidencia]] · pendiente

Ampliación del currículo del MIT.[^mit-grafos]

* [ ] Introducir grafos y redes y construir sus matrices de incidencia.
* [ ] Interpretar rango y núcleos mediante conectividad, ciclos y corrientes.
* [ ] Expresar matricialmente las leyes de Kirchhoff y relacionar nodos, aristas y ciclos independientes.

### Boletín de ejercicios

Se conserva el [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/ejercicios/00 Índice de ejercicios|boletín existente de ejercicios 59–90]], organizado en axiomas y subespacios, combinaciones, bases y coordenadas, y sumas y dimensión.

## Unidad 4. Transformaciones lineales

Alcance oficial: definición, representación matricial, núcleo, imagen, inyectividad, sobreyectividad, isomorfismos y cambio de base [^1].

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/04 Transformaciones lineales/01 Aplicaciones entre conjuntos|Aplicaciones entre conjuntos]]

Preliminar conceptual: primero se estudian las aplicaciones generales; después se impone la condición de linealidad. Este orden coincide con el material de MMII de la USC.[^21]

* [ ] Definir aplicación distinguiendo dominio, codominio e imagen.
* [ ] Calcular imágenes y preimágenes de subconjuntos.
* [ ] Demostrar que la preimagen conserva uniones, intersecciones y complementos.
* [ ] Demostrar $f(A\cup B)=f(A)\cup f(B)$ y $f(A\cap B)\subseteq f(A)\cap f(B)$; determinar cuándo la segunda inclusión es igualdad.
* [ ] Definir y caracterizar inyectividad, sobreyectividad y biyectividad.
* [ ] Manejar identidad, restricción, composición e inversa; demostrar que una aplicación es invertible si y sólo si es biyectiva.
* [ ] Probar qué propiedades de inyectividad y sobreyectividad se conservan o se deducen de una composición.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/04 Transformaciones lineales/02 Transformaciones, núcleo e imagen|Transformaciones, núcleo e imagen]]

* [ ] Definir [[Matemáticas/Álgebra lineal/Aplicaciones lineales|transformaciones lineales]] y comprobar linealidad.
* [ ] Construir una transformación a partir de su acción sobre una base.
* [ ] Demostrar que núcleo e imagen son subespacios y calcular bases para ambos.
* [ ] Aplicar el teorema rango–nulidad.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/04 Transformaciones lineales/03 Representación matricial e isomorfismos|Representación matricial e isomorfismos]]

* [ ] Obtener la matriz de una transformación respecto de bases dadas.
* [ ] Caracterizar inyectividad mediante $\ker T=\{0\}$ y sobreyectividad mediante la imagen.
* [ ] Reconocer isomorfismos, justificar la linealidad de la inversa y cambiar de base.
* [ ] Distinguir propiedades intrínsecas de datos dependientes de la base.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/04 Transformaciones lineales/04 Transformaciones geométricas y composición|Ampliación de contraste — transformaciones geométricas y composición]]

Ampliación de Khan Academy, fuera del núcleo explícito de FCUL [^12].

* [ ] Modelar escalados, reflexiones, rotaciones y proyecciones mediante matrices.
* [ ] Calcular imágenes y preimágenes de conjuntos bajo una transformación lineal.
* [ ] Sumar y multiplicar por escalares transformaciones lineales y obtener sus matrices.
* [ ] Componer transformaciones, respetar el orden del producto matricial e interpretar geométricamente el resultado.

### Problemas y criterio de dominio

* [ ] Pasar con soltura entre descripción abstracta, fórmula, matriz, núcleo e imagen.
* [ ] Determinar inyectividad, sobreyectividad o isomorfía por más de un criterio.
* [ ] Justificar las fórmulas de cambio de base sin memorizar productos de matrices aislados.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/04 Transformaciones lineales/05 Semejanza de matrices|Semejanza de matrices]] · pendiente

Ampliación del currículo del MIT.[^mit-jordan]

* [ ] Interpretar matrices semejantes como representaciones de un mismo endomorfismo en bases distintas; conectar con la diagonalización y, después, con Jordan.

## Unidad 5. Valores propios, vectores propios y diagonalización

Alcance oficial: subespacios propios, polinomio característico, multiplicidades, diagonalización y matrices simétricas [^1].

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/05 Valores propios y diagonalización/01 Espectro y subespacios propios|Espectro y subespacios propios]]

* [ ] Definir valor propio, vector propio, subespacio propio y polinomio característico.
* [ ] Calcular espectro, bases de subespacios propios y multiplicidades algebraica y geométrica.
* [ ] Demostrar que vectores propios asociados a valores propios distintos son independientes.
* [ ] Justificar que la multiplicidad geométrica no excede la algebraica.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/05 Valores propios y diagonalización/02 Diagonalización y matrices simétricas|Diagonalización y matrices simétricas]]

* [ ] Caracterizar la [[Matemáticas/Álgebra lineal/Diagonalización|diagonalización]] mediante una base de vectores propios.
* [ ] Construir y comprobar $A=PDP^{-1}$.
* [ ] Comparar matrices con igual polinomio característico y distinto comportamiento de diagonalización.
* [ ] Estudiar matrices simétricas reales, ortogonalidad de subespacios propios y diagonalización ortogonal.

### Problemas y criterio de dominio

* [ ] Resolver problemas con parámetros que alteran espectro o diagonalizabilidad.
* [ ] Distinguir con precisión multiplicidad algebraica, multiplicidad geométrica y dimensión del subespacio propio.
* [ ] Justificar una diagonalización ordinaria u ortogonal y verificar el resultado por reconstrucción.

### Ampliación — potencias y sistemas dinámicos

Ampliación del currículo del MIT. El cálculo de potencias ya está desarrollado; las aplicaciones dinámicas quedan pendientes.[^mit-potencias]

* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/05 Valores propios y diagonalización/02 Diagonalización y matrices simétricas#Potencias|Calcular potencias mediante diagonalización.]]

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/05 Valores propios y diagonalización/03 Sistemas dinámicos discretos|Sistemas dinámicos discretos]] · pendiente

Ampliación del currículo del MIT.[^mit-potencias]

* [ ] Estudiar $u_{k+1}=Au_k$ y su comportamiento a largo plazo.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/05 Valores propios y diagonalización/04 Matrices de Markov|Matrices de Markov]] · pendiente

Ampliación del currículo del MIT.[^mit-markov]

* [ ] Estudiar matrices de Markov, distribuciones estacionarias y condiciones de convergencia.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/05 Valores propios y diagonalización/05 Sistemas diferenciales y exponencial matricial|Sistemas diferenciales y exponencial matricial]] · pendiente

Ampliación del currículo del MIT.[^mit-diferenciales]

* [ ] Resolver sistemas $u'(t)=Au(t)$ mediante la exponencial matricial y estudiar su estabilidad.

Prerrequisitos adicionales: derivación, ecuaciones diferenciales elementales y series de potencias.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/05 Valores propios y diagonalización/06 Forma de Jordan|Forma de Jordan]] · pendiente

Ampliación del currículo del MIT.[^mit-jordan]

* [ ] Introducir la forma de Jordan para matrices no diagonalizables.

## Unidad 6. Espacios euclídeos

Alcance oficial: producto interno, norma, ángulo, proyecciones, Cauchy–Schwarz, Gram–Schmidt, complementos ortogonales y producto externo en $\mathbb R^3$ [^1].

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/06 Espacios euclídeos/01 Producto interno, norma y ángulo|Producto interno, norma y ángulo]]

* [ ] Definir producto interno real, norma, distancia, ángulo y ortogonalidad.
* [ ] Demostrar y aplicar Cauchy–Schwarz y la desigualdad triangular.
* [ ] Calcular proyecciones ortogonales e interpretar su propiedad de mejor aproximación.
* [ ] Normalizar vectores no nulos y trabajar con vectores unitarios.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/06 Espacios euclídeos/02 Bases ortogonales y Gram-Schmidt|Bases ortogonales y Gram–Schmidt]]

* [ ] Construir bases ortogonales y ortonormales mediante [[Matemáticas/Álgebra lineal/Espacios vectoriales/11 Producto escalar y Gram–Schmidt|Gram–Schmidt]].
* [ ] Justificar cada paso del algoritmo y comprobar la ortonormalidad final.
* [ ] Calcular complementos ortogonales y descomponer $V=U\oplus U^\perp$ en dimensión finita.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/06 Espacios euclídeos/03 Producto externo en R3|Producto externo en $\mathbb R^3$]]

* [ ] Definir y calcular el [[Matemáticas/Geometría/Vectores/Producto vectorial|producto vectorial]].
* [ ] Justificar sus propiedades y aplicarlo a áreas, orientación y ortogonalidad.
* [ ] Desarrollar $\mathbf a\times(\mathbf b\times\mathbf c)$ mediante la identidad del producto triple vectorial como ampliación opcional de Khan Academy.[^11]

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/06 Espacios euclídeos/04 Proyecciones matriciales y mínimos cuadrados|Ampliación de contraste — proyecciones matriciales y mínimos cuadrados]]

Ampliación de Khan Academy, fuera del núcleo explícito de FCUL [^13].

* [ ] Construir la matriz de proyección ortogonal sobre una recta o un subespacio.
* [ ] Interpretar la proyección como el vector del subespacio más próximo al vector dado.
* [ ] Formular y resolver problemas elementales de mínimos cuadrados mediante proyección ortogonal.
* [ ] Reconocer matrices ortogonales y demostrar que conservan normas, distancias y ángulos.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/06 Espacios euclídeos/05 Rectas, planos y distancias|Ampliación de contraste — rectas, planos y distancias]]

Ampliación de geometría vectorial de Khan Academy, fuera del núcleo explícito de FCUL [^11].

* [ ] Representar rectas en forma vectorial y paramétrica.
* [ ] Obtener la ecuación de un plano a partir de un punto y un vector normal, y recuperar un normal desde su ecuación.
* [ ] Calcular distancias de un punto a un plano y entre planos paralelos.

### Problemas y criterio de dominio

* [ ] Resolver normas, ángulos, proyecciones, complementos y descomposiciones ortogonales.
* [ ] Conectar coordenadas algebraicas con interpretación geométrica y comprobar ortogonalidad y norma.

### Ampliación — ecuaciones normales

Ampliación del currículo del MIT, ya recogida en el desarrollo de mínimos cuadrados.[^mit-normales]

* [ ] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/06 Espacios euclídeos/04 Proyecciones matriciales y mínimos cuadrados#Mínimos cuadrados y ecuaciones normales|Relacionar la ortogonalidad del residuo con las ecuaciones normales y justificar las condiciones de unicidad de la solución.]]

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/06 Espacios euclídeos/06 Factorización QR|Factorización QR]] · pendiente

Ampliación del currículo del MIT.[^mit-qr]

* [ ] Construir $A=QR$ como formulación matricial de Gram–Schmidt y aplicarla a mínimos cuadrados.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/06 Espacios euclídeos/07 Producto interno hermítico y matrices unitarias|Producto interno hermítico y matrices unitarias]] · pendiente

Ampliación del currículo del MIT.[^mit-complejas]

* [ ] Desarrollar producto interno hermítico, norma y ortogonalidad en $\mathbb C^n$.
* [ ] Estudiar matrices unitarias y su relación con las matrices ortogonales.

## Unidad 7. Formas cuadráticas

Alcance oficial: definición y clasificación por valores propios y menores principales [^1] [^2].

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/07 Formas cuadráticas/01 Formas cuadráticas y matrices simétricas|Formas cuadráticas y matrices simétricas]]

* [ ] Pasar de una forma cuadrática a su matriz simétrica y de la matriz a la forma.
* [ ] Justificar que sólo interviene la parte simétrica de una matriz.
* [ ] Transformar la matriz bajo un cambio de coordenadas y eliminar términos cruzados mediante diagonalización ortogonal.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/07 Formas cuadráticas/02 Clasificación de formas cuadráticas|Clasificación de formas cuadráticas]]

* [ ] Distinguir formas reales definidas positivas, definidas negativas e indefinidas; reconocer las semidefinidas como caso de frontera.
* [ ] Clasificar mediante el signo de los valores propios.
* [ ] Aplicar el criterio de Sylvester con los menores principales iniciales para decidir si una forma es definida positiva o definida negativa.
* [ ] Relacionar ese criterio con la clasificación espectral y no extenderlo sin más a las formas semidefinidas.

### Problemas y criterio de dominio

* [ ] Clasificar formas con y sin parámetros por dos métodos cuando resulte útil.
* [ ] Elegir entre espectro y menores principales, explicar la elección y comprobar el signo con vectores de prueba.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/07 Formas cuadráticas/03 Positividad, pivotes y sumas de cuadrados|Positividad, pivotes y sumas de cuadrados]] · pendiente

Ampliación del currículo del MIT.[^mit-minimos]

* [ ] Relacionar positividad, pivotes y descomposición en sumas de cuadrados.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/07 Formas cuadráticas/04 Elipses, elipsoides y ejes principales|Elipses, elipsoides y ejes principales]] · pendiente

Ampliación del currículo del MIT.[^mit-minimos]

* [ ] Interpretar formas cuadráticas mediante elipses, elipsoides y ejes principales.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/07 Formas cuadráticas/05 Hessiana y mínimos locales|Hessiana y mínimos locales]] · pendiente

Ampliación del currículo del MIT.[^mit-minimos]

* [ ] Aplicar la matriz hessiana al criterio de mínimo local en un punto crítico, declarando sus hipótesis.

Prerrequisitos adicionales para la hessiana: cálculo multivariable, derivadas parciales de segundo orden y puntos críticos.

## Unidad 8. Ampliación — descomposición en valores singulares

Ampliación del currículo del MIT. Se estudia después de diagonalización y ortogonalidad.[^mit-svd]

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/08 Descomposición en valores singulares/01 Descomposición en valores singulares|Descomposición en valores singulares]] · pendiente

Ampliación del currículo del MIT.[^mit-svd]

* [ ] Definir valores y vectores singulares y construir $A=U\Sigma V^T$.
* [ ] Relacionar la SVD con $A^TA$, $AA^T$ y los cuatro subespacios fundamentales.
* [ ] Descomponer una matriz en sumandos de rango uno.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/08 Descomposición en valores singulares/02 Aproximación de rango reducido y compresión de imágenes|Aproximación de rango reducido y compresión de imágenes]] · pendiente

Ampliación del currículo del MIT.[^mit-compresion]

* [ ] Construir aproximaciones de rango reducido y aplicarlas a la compresión de imágenes.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/08 Descomposición en valores singulares/03 Inversas laterales y pseudoinversa|Inversas laterales y pseudoinversa]] · pendiente

Ampliación del currículo del MIT.[^mit-pseudoinversa]

* [ ] Estudiar inversas izquierdas y derechas de matrices rectangulares y sus condiciones de existencia.
* [ ] Construir la pseudoinversa y resolver problemas de mínimos cuadrados con norma mínima.

## Unidad 9. Ampliación — Fourier

Ampliación del currículo del MIT. Requiere ortogonalidad; las series de Fourier requieren además integración. La transformada discreta puede estudiarse independientemente de las series, después de números complejos y matrices unitarias.[^mit-markov][^mit-complejas]

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/09 Fourier/01 Series de Fourier|Series de Fourier]] · pendiente

Ampliación del currículo del MIT.[^mit-markov]

* [ ] Introducir el producto interno entre funciones y la ortogonalidad de senos y cosenos.
* [ ] Introducir las series de Fourier y calcular coeficientes mediante proyecciones.

### [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/09 Fourier/02 Transformada discreta de Fourier y FFT|Transformada discreta de Fourier y FFT]] · pendiente

Ampliación del currículo del MIT.[^mit-complejas]

* [ ] Construir la matriz de Fourier y la transformada discreta.
* [ ] Estudiar normalización unitaria e inversión.
* [ ] Factorizar la matriz de Fourier y desarrollar el fundamento de la FFT.

## Bibliografía recomendada para matrícula de honor

La bibliografía oficial de FCUL se recoge en las fichas de 2025/2026 y 2026/2027.[^3][^4] Los textos siguientes son apoyos en español o inglés para estudiar el recorrido.

* **Texto guía en español:** Lay, Lay y McDonald, *Álgebra lineal y sus aplicaciones*, 5.ª ed.; sigue casi todo el recorrido oficial y combina conceptos, cálculo y aplicaciones [^5].
* **Intuición estructural y problemas:** Strang, *Introduction to Linear Algebra*, 6.ª ed.; aporta ejemplos, secciones abiertas y exámenes de práctica [^6].
* **Autoestudio abierto con soluciones:** Hefferon, *Linear Algebra*, 4.ª ed.; desarrolla pruebas gradualmente y ofrece ejercicios extensos con soluciones [^7].
* **Rigor principal de consulta:** Friedberg, Insel y Spence, *Linear Algebra*, 5.ª ed.; apropiado para profundizar en espacios, transformaciones, diagonalización y producto interno [^8].
* **Complemento selectivo de demostraciones:** Axler, *Linear Algebra Done Right*, 4.ª ed., abierto; útil para madurez teórica, pero no como base única porque su secuencia no coincide con la del curso y desplaza los determinantes al final [^9].

## Fuentes y recursos

[^1]: [FCUL — Programa 2025/2026](https://fenix.ciencias.ulisboa.pt/courses/algana-2817829258658182/programa) — programa detallado que fija las siete unidades y su alcance.
[^2]: [FCUL — Programa 2026/2027](https://fenix.ciencias.ulisboa.pt/courses/algana-847504421686879/programa) — programa vigente, contrastado con el anterior.
[^3]: [FCUL — Bibliografía 2025/2026](https://fenix.ciencias.ulisboa.pt/courses/algana-2817829258658182/bibliografia) — Cabral–Perdigão–Saiago, Anton–Rorres y Santana–Queiró como bibliografía principal; Monteiro, Barreira–Valls, Hefferon, Lang, Lipschutz, Magalhães y Strang como secundaria.
[^4]: [FCUL — Bibliografía 2026/2027](https://fenix.ciencias.ulisboa.pt/courses/algana-847504421686879/bibliografia) — bibliografía vigente, coincidente con la de 2025/2026.

[^5]: [Lay, Lay y McDonald — *Álgebra lineal y sus aplicaciones*, 5.ª ed.](https://www.pearsonenespanol.com/mexico/educacion-superior/lay/lay_algebra_lineal_y_sus_aplicaciones_5e_contenido) — texto guía en español.
[^6]: [Gilbert Strang — *Introduction to Linear Algebra*, 6.ª ed.](https://math.mit.edu/~gs/linearalgebra/ila6/indexila6.html) — intuición, práctica y recursos de examen.
[^7]: [Jim Hefferon — *Linear Algebra*, 4.ª ed.](https://hefferon.net/linearalgebra/) — manual abierto con demostraciones y soluciones.
[^8]: [Friedberg, Insel y Spence — *Linear Algebra*, 5.ª ed.](https://www.pearson.com/en-us/subject-catalog/p/linear-algebra/P200000006185/9780134876979) — contraste de rigor teórico.
[^9]: [Sheldon Axler — *Linear Algebra Done Right*, 4.ª ed.](https://link.springer.com/book/10.1007/978-3-031-41026-0) — demostraciones selectivas y profundización abierta.
[^10]: [Khan Academy — *Linear Algebra*](https://www.khanacademy.org/math/linear-algebra) — índice general usado para el contraste de cobertura.
[^11]: [Khan Academy — *Vectors and spaces*](https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces) — geometría vectorial y espacios asociados a matrices.
[^12]: [Khan Academy — *Matrix transformations*](https://www.khanacademy.org/math/linear-algebra/matrix-transformations) — interpretación geométrica del determinante, transformaciones y subespacios fundamentales.
[^13]: [Khan Academy — *Alternate coordinate systems (bases)*](https://www.khanacademy.org/math/linear-algebra/alternate-bases) — proyecciones, mínimos cuadrados, bases ortonormales y matrices ortogonales.
[^14]: [Krista King — *Become a Linear Algebra Master*](https://www.udemy.com/course/linear-algebra-course/) — curso práctico contrastado con el índice; aporta como contenido diferencial la factorización $A=LU$.
[^15]: [UPV — ficha docente de espacios vectoriales](https://matematicasupv.blogs.upv.es/files/2019/09/03_FICHA_ESPACIO_VECTORIAL.pdf) — prescribe recursos audiovisuales en castellano para definición y propiedades de espacios vectoriales.
[^16]: [Archimedes Tube — *Espacios Vectoriales | Propiedades*](https://www.youtube.com/watch?v=1jrxXirw45M) — demostración breve y estructurada de las propiedades derivadas de los axiomas, incluidos los productos por cero, la cancelación y el comportamiento del signo menos.
[^17]: [UNAM — *Álgebra Lineal Interactiva*](https://prometeo.matem.unam.mx/recursos/VariosNiveles/iCartesiLibri/recursos/Algebra_Lineal_Interactiva/index.html) — apoyo escrito con propiedades deducidas de los axiomas.
[^18]: [Cristina Jordan Lluch, UPV — *Simplificación de expresiones en teoría de conjuntos*](https://riunet.upv.es/entities/publication/84479c44-a248-4c9c-a51d-36ea2f16facf) — demostración elemento a elemento y simplificación de expresiones.
[^19]: [Cristina Jordan Lluch, UPV — *Propiedades booleanas de la teoría de conjuntos*](https://riunet.upv.es/handle/10251/81120) — propiedades y errores frecuentes del álgebra de conjuntos.
[^20]: [UNAM — *Álgebra Superior, Unidad 1: Lógica y conjuntos*](https://amyd.quimica.unam.mx/course/view.php?id=229) — vídeos de lógica, métodos de demostración y álgebra de conjuntos.
[^21]: **USC — archivo de *Métodos Matemáticos II* de la Facultad de Física.** Fuente local del usuario: `/Users/therustifyer/Seafile/Física (Completo)/Carrera/1º/USC/Métodos Matematicos II.zip`. Se contrastaron especialmente *01 Conxuntos e Aplicacions-MM II*, *03 Espazos vectoriais-MM II* y los boletines de conjuntos y espacios vectoriales.

[^det-slides]: FCUL, *ALGA 2026/2027*, aulas 13–16: `ALGA-2026-27-AulasTeo-slides-aula13-Determinantes-impressao.pdf` (16/10/2026), `ALGA-2026-27-AulasTeo-slides-Aula14-Determinantes-impressao.pdf` (19/10/2026), `ALGA-2026-27-AulasTeo-slides-Aula15-Determinantes-impressao.pdf` (21/10/2026) y `ALGA-2026-27-AulasTeo-slides-Aula16-SistemasCramer-impressao.pdf` (23/10/2026). Los PDF privados se identifican sin enlaces.

[^ev3]: FCUL, *ALGA 2026/27*: Aula 17 «Espaços vetoriais» (26/10/2026), Aula 18 «Subespaços vetoriais» (28/10/2026), Aula 19 «Combinações lineares» (30/10/2026) y Aula 20 «Subespaços de $K^n$» (02/11/2026). Contraste y desarrollo posterior: Instituto Superior Técnico, ULisboa, [*Álgebra Linear*, capítulo 3](https://fenix.tecnico.ulisboa.pt/downloadFile/563568428979297/ApontamentosInteg.pdf). Los localizadores de propiedades y TPC figuran en las notas de contenido.

[^mit-curso]: [MIT Open Learning Library — 18.06SC Linear Algebra](https://openlearninglibrary.mit.edu/courses/course-v1:OCW%2B18.06SC%2B2T2019/course/). Índice del curso solicitado, edición de Open Learning Library de 2019; las sesiones enlazadas a continuación corresponden a su material base de MIT OpenCourseWare de 2011.

[^mit-geometria]: MIT, Gilbert Strang, *18.06SC Linear Algebra*, [The Geometry of Linear Equations](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/the-geometry-of-linear-equations/). Interpretaciones por filas, columnas y matrices.

[^mit-permutaciones]: MIT, Gilbert Strang, *18.06SC Linear Algebra*, [Transposes, Permutations, Vector Spaces](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/transposes-permutations-vector-spaces/). Permutaciones y factorización con intercambio de filas.

[^mit-rango-uno]: MIT, Gilbert Strang, *18.06SC Linear Algebra*, [Matrix Spaces; Rank 1; Small World Graphs](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/matrix-spaces-rank-1-small-world-graphs/). Matrices de rango uno y productos exteriores.

[^mit-grafos]: MIT, Gilbert Strang, *18.06SC Linear Algebra*, [Graphs, Networks, Incidence Matrices](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/graphs-networks-incidence-matrices/). Matrices de incidencia, rango, ciclos y leyes de Kirchhoff.

[^mit-potencias]: MIT, Gilbert Strang, *18.06SC Linear Algebra*, [Diagonalization and Powers of A](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/least-squares-determinants-and-eigenvalues/diagonalization-and-powers-of-a/). Potencias y evolución discreta.

[^mit-diferenciales]: MIT, Gilbert Strang, *18.06SC Linear Algebra*, [Differential Equations and exp(At)](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/least-squares-determinants-and-eigenvalues/differential-equations-and-exp-at/). Sistemas diferenciales, exponencial y estabilidad.

[^mit-markov]: MIT, Gilbert Strang, *18.06SC Linear Algebra*, [Markov Matrices; Fourier Series](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/least-squares-determinants-and-eigenvalues/markov-matrices-fourier-series/). Distribuciones estacionarias y series de Fourier.

[^mit-normales]: MIT, Gilbert Strang, *18.06SC Linear Algebra*, [Projection Matrices and Least Squares](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/least-squares-determinants-and-eigenvalues/projection-matrices-and-least-squares/). Proyección, residuo y ecuaciones normales.

[^mit-qr]: MIT, Gilbert Strang, *18.06SC Linear Algebra*, [Orthogonal Matrices and Gram-Schmidt](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/least-squares-determinants-and-eigenvalues/orthogonal-matrices-and-gram-schmidt/). Gram–Schmidt y factorización QR.

[^mit-jordan]: MIT, Gilbert Strang, *18.06SC Linear Algebra*, [Similar Matrices and Jordan Form](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/similar-matrices-and-jordan-form/). Semejanza y forma de Jordan.

[^mit-complejas]: MIT, Gilbert Strang, *18.06SC Linear Algebra*, [Complex Matrices; Fast Fourier Transform (FFT)](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/complex-matrices-fast-fourier-transform-fft/). Producto interno complejo, matrices unitarias y transformada de Fourier.

[^mit-minimos]: MIT, Gilbert Strang, *18.06SC Linear Algebra*, [Positive Definite Matrices and Minima](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/positive-definite-matrices-and-minima/). Positividad, sumas de cuadrados, elipsoides y criterio de mínimo mediante la hessiana.

[^mit-svd]: MIT, Gilbert Strang, *18.06SC Linear Algebra*, [Singular Value Decomposition](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/singular-value-decomposition/). Valores singulares y cuatro subespacios.

[^mit-compresion]: MIT, Gilbert Strang, *18.06SC Linear Algebra*, [Change of Basis; Image Compression](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/change-of-basis-image-compression/). Aproximación de rango reducido y compresión de imágenes.

[^mit-pseudoinversa]: MIT, Gilbert Strang, *18.06SC Linear Algebra*, [Left and Right Inverses; Pseudoinverse](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/left-and-right-inverses-pseudoinverse/). Inversas laterales, pseudoinversa y norma mínima.

[^mit-producto]: MIT OpenCourseWare, Gilbert Strang, *18.06SC Linear Algebra*, [«Multiplication and Inverse Matrices», resumen de la lección 3](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/1963da71c4d96e5d14e7939780f79bcc_MIT18_06SCF11_Ses1.3sum.pdf), p. 1, «Columns» y «Rows». Las columnas del producto son combinaciones de las columnas del primer factor y las filas son combinaciones de las filas del segundo.

[^alcance-elementales]: FCUL, aula 5, diapositiva 8: único TPC para la acción por la izquierda de una matriz elemental. Aula 6, diapositiva 14: verificación de las tres inversas. Aula 6, diapositiva 2: existencia/unicidad de la reducida e invariancia de filas no nulas, con indicación explícita de que no se demostrarán. Archivos privados identificados en las fuentes de las notas 03, 04 y 05. La proposición de composición y reducción simultánea de $[A\mid I_m]$ corresponde al aula 5, diapositiva 11. Se han cotejado estas páginas.

[^alcance-determinantes]: FCUL, aula 14, diapositivas 12 y 13: aditividad por filas y columnas, por separado; diapositiva 14: homogeneidad en filas y columnas en una sola proposición TPC. Aula 15, diapositiva 9: un único TPC para filas y columnas proporcionales.

[^alcance-generadores]: FCUL, aula 20, diapositiva 2: criterios de inclusión/igualdad como consecuencias inmediatas, seguidos de una proposición TPC de eliminación de generador redundante. Aula 19, diapositiva 14: encargo «justifique» sobre $\mathbb R[x]$, sin rótulo TPC.
