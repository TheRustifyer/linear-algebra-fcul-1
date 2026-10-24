<!-- Generated from Álgebra Lineal y Geometría Analítica — índice de contenidos.md. Edit the original; run npm run readme. -->

# Álgebra Lineal y Geometría Analítica

**Faculdade de Ciências · Universidade de Lisboa**

[Índice para Obsidian](<%C3%81lgebra%20Lineal%20y%20Geometr%C3%ADa%20Anal%C3%ADtica%20%E2%80%94%20%C3%ADndice%20de%20contenidos.md>)

## Contenidos

- [Prerrequisitos operativos](#contenido-1)
- [Unidad 1. Matrices y sistemas de ecuaciones lineales reales y complejos](#contenido-2)
- [Unidad 2. Determinantes](#contenido-3)
- [Unidad 3. Espacios vectoriales](#contenido-4)
- [Unidad 4. Transformaciones lineales](#contenido-5)
- [Unidad 5. Valores propios, vectores propios y diagonalización](#contenido-6)
- [Unidad 6. Espacios euclídeos](#contenido-7)
- [Unidad 7. Formas cuadráticas](#contenido-8)
- [Bibliografía recomendada para matrícula de honor](#contenido-9)
- [Fuentes y recursos](#contenido-10)

> [!IMPORTANT]
> **Alcance curricular y criterio de excelencia**
>
> El recorrido sigue las **siete unidades** de *Álgebra Linear e Geometria Analítica* de la Licenciatura en Física de FCUL. El programa de 2025/2026 detalla los contenidos; el de 2026/2027 conserva las siete unidades con una redacción más breve.[^1][^2] Las ampliaciones de Khan Academy y Krista King están señaladas en su lugar correspondiente.[^10][^14]

Los títulos enlazados conducen a desarrollos existentes en el vault. Los títulos sin enlace señalan desarrollos pendientes; el contenido curricular ya figura en la lista.

<a id="contenido-1"></a>

## Prerrequisitos operativos

* [ ] Redactar una argumentación matemática distinguiendo implicación, equivalencia y contraejemplo.
* [ ] Manejar [pertenencia, inclusión, igualdad, conjunto vacío, conjunto de partes y producto cartesiano](<00%20Fundamentos/01%20Teor%C3%ADa%20elemental%20de%20conjuntos.md>).
* [ ] Operar con unión, intersección, diferencia y complemento, traduciendo cada operación a conectivos lógicos.
* [ ] Demostrar una igualdad de conjuntos mediante doble inclusión o equivalencias de pertenencia elemento a elemento.
* [ ] Probar las leyes conmutativas, asociativas, distributivas, de absorción y de De Morgan; usar diagramas de Venn sólo como apoyo intuitivo.
* [ ] Operar con números complejos en forma algebraica.
* [ ] Resolver sistemas de ecuaciones lineales elementales.
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

<a id="contenido-2"></a>

## Unidad 1. Matrices y sistemas de ecuaciones lineales reales y complejos

Alcance oficial: matrices, operaciones, transformaciones elementales, rango, eliminación de Gauss–Jordan, inversión y resolución de sistemas [^1] [^2]. Síntesis de las aulas 1–10: [resumen del capítulo](<Resumen%20-%20S%C3%ADntesis%20de%20contenidos.md>).

### [Matrices y operaciones](<01%20Matrices%20y%20sistemas/01%20Matrices%20y%20operaciones.md>)

Presentaciones de FCUL: Aula 2 — vectores y matrices, Aula 3 — operaciones matriciales y Aula 4 — transpuesta, conjugada y traza, pp. 2–12. Desarrollo: [nota curricular](<01%20Matrices%20y%20sistemas/01%20Matrices%20y%20operaciones.md>).

* [ ] Construir y operar vectores coordenados de $\mathbb R^n$ y $\mathbb C^n$; distinguir escalar, vector, matriz fila y columna; usar el paralelogramo y las propiedades de las operaciones.
* [ ] Definir matrices, dimensiones, entradas y tipos notables sobre $\mathbb R$ y $\mathbb C$.
* [ ] Dominar suma, opuesto, producto por escalar, producto matricial, potencias, transposición, conjugación, adjunción y traza; reconocer matrices simétricas y hermíticas y justificar sus propiedades.

### [Eliminación y matrices elementales](<01%20Matrices%20y%20sistemas/02%20Eliminaci%C3%B3n%20y%20matrices%20elementales.md>)

Presentaciones de FCUL: Aula 4 — pivotes y forma escalonada, pp. 13–17, Aula 5 — transformaciones elementales y Aula 6 — rango y reducción, pp. 2–10. Desarrollo: [nota curricular](<01%20Matrices%20y%20sistemas/02%20Eliminaci%C3%B3n%20y%20matrices%20elementales.md>).

* [ ] Ejecutar operaciones elementales y reconocer sus matrices elementales.
* [ ] Obtener formas escalonada y escalonada reducida mediante Gauss y Gauss–Jordan.
* [ ] Justificar que las operaciones elementales conservan el conjunto de soluciones.
* [ ] Relacionar una secuencia de operaciones con multiplicación por matrices elementales.

### [Compatibilidad, rango e inversa](<01%20Matrices%20y%20sistemas/03%20Compatibilidad,%20rango%20e%20inversa.md>)

Presentaciones de FCUL: Aula 6 — invertibilidad, pp. 11–14, Aula 7 — matrices invertibles, Aula 9 — discusión por rango, pp. 2–11 y Aula 10 — inversa aplicada a sistemas, pp. 8–10. Desarrollo: [nota curricular](<01%20Matrices%20y%20sistemas/03%20Compatibilidad,%20rango%20e%20inversa.md>).

* [ ] Clasificar sistemas compatibles determinados, compatibles indeterminados e incompatibles.
* [ ] Interpretar pivotes, variables libres y parámetros; calcular el rango.
* [ ] Calcular una inversa por Gauss–Jordan y justificar su unicidad.
* [ ] Establecer equivalencias básicas entre invertibilidad, pivotes, rango y solución única.
* [ ] Resolver $AX=B$ como $X=A^{-1}B$ cuando $A$ es invertible y justificar las consecuencias de $AB=I_n$ o de que $AB$ sea invertible.

### [Sistemas de ecuaciones lineales](<01%20Matrices%20y%20sistemas/05%20Sistemas%20de%20ecuaciones%20lineales.md>)

Presentaciones de FCUL: Aula 8 — sistemas lineales y Aula 10 — homogéneos y solución general, pp. 2–7 y 11. Desarrollo: [nota curricular](<01%20Matrices%20y%20sistemas/05%20Sistemas%20de%20ecuaciones%20lineales.md>).

* [ ] Reconocer ecuaciones lineales, sistemas, soluciones, equivalencia y cuerpo de resolución; interpretar rectas y planos como conjuntos de soluciones.
* [ ] Escribir $AX=B$, construir $[A\mid B]$ y verificar soluciones mediante producto matricial.
* [ ] Resolver por Gauss y Gauss–Jordan sistemas con solución única o variables libres, incluidos los dos ejemplos completos del aula 8.
* [ ] Construir el homogéneo asociado y expresar toda solución compatible como una solución particular más una combinación de soluciones homogéneas; verificar el caso incompatible y la convención de vectores columna.

### [Ampliación de contraste — factorización LU](<01%20Matrices%20y%20sistemas/04%20Factorizaci%C3%B3n%20LU.md>)

Ampliación del curso de Krista King, fuera del núcleo explícito de FCUL [^14].

* [ ] Construir una factorización $A=LU$ a partir de las operaciones y matrices de eliminación cuando no se requieren permutaciones de filas.
* [ ] Identificar $L$ como triangular inferior con diagonal unitaria y $U$ como triangular superior, y comprobar la factorización reconstruyendo $A$.

### Problemas y criterio de dominio

* [ ] Resolver y clasificar sistemas reales y complejos, incluidos sistemas con parámetros.
* [ ] Modelar una situación mediante un sistema y detectar operaciones inválidas.
* [ ] Explicar la relación entre pivotes, rango, grados de libertad e invertibilidad.

<a id="contenido-3"></a>

## Unidad 2. Determinantes

Alcance oficial: definición, órdenes 2 y 3, Laplace, propiedades, regla de Cramer e inversión por cofactores [^1].

### [Definición y cálculo](<02%20Determinantes/01%20Definici%C3%B3n%20y%20c%C3%A1lculo%20de%20determinantes.md>)

* [ ] Definir el determinante y calcularlo en órdenes 2 y 3.
* [ ] Utilizar menores, cofactores y desarrollo de Laplace.
* [ ] Elegir entre reducción y expansión según la estructura de la matriz.

### [Propiedades y aplicaciones](<02%20Determinantes/02%20Propiedades%20y%20aplicaciones.md>)

* [ ] Dominar el efecto de las operaciones elementales, la transposición y el producto.
* [ ] Justificar la relación entre determinante no nulo e invertibilidad.
* [ ] Aplicar la regla de Cramer y la fórmula de la inversa mediante la adjunta.
* [ ] Demostrar, al nivel del curso, las propiedades usadas en los cálculos.

### [Ampliación de contraste — interpretación geométrica del determinante](<02%20Determinantes/03%20Interpretaci%C3%B3n%20geom%C3%A9trica%20del%20determinante.md>)

Ampliación de Khan Academy, fuera del núcleo explícito de FCUL [^12].

* [ ] Interpretar $|\det A|$ como factor de escala de áreas o volúmenes y el signo como orientación.
* [ ] Relacionar determinante nulo, colapso de dimensión y no invertibilidad de la transformación.

### Problemas y criterio de dominio

* [ ] Calcular determinantes eficientemente y estudiar parámetros.
* [ ] Decidir invertibilidad sin calcular una inversa completa cuando sea posible.
* [ ] Usar Cramer o cofactores sólo cuando sean métodos pertinentes y justificar la elección.

<a id="contenido-4"></a>

## Unidad 3. Espacios vectoriales

Alcance oficial: espacios y subespacios, independencia, bases, dimensión, coordenadas, espacios fila y columna, sumas y cambio de base [^1] [^2].

### [Espacios vectoriales y axiomas](<03%20Espacios%20vectoriales/01%20Espacios%20vectoriales%20y%20axiomas.md>)

* [ ] Definir espacio vectorial sobre un cuerpo $K$ distinguiendo suma interna, producto por escalares, vector cero y opuesto.
* [ ] Enunciar y comprender los axiomas de grupo abeliano para la suma y los axiomas de la acción de los escalares.
* [ ] Verificar todos los axiomas cuando se proponen operaciones no habituales.
* [ ] Refutar una estructura candidata identificando exactamente un axioma incumplido.
* [ ] Comparar $\mathbb C$ como espacio vectorial sobre $\mathbb R$ y sobre $\mathbb C$.

### [Propiedades derivadas de los axiomas](<03%20Espacios%20vectoriales/02%20Propiedades%20derivadas%20de%20los%20axiomas.md>)

Este bloque se estudia **después** de conocer la definición y los axiomas. Reproduce el tipo de demostración exigido en los apuntes y boletines de MMII de la USC.[^21]

* [ ] Distinguir axioma, definición, propiedad derivada y teorema; citar en cada paso la propiedad utilizada.
* [ ] Demostrar la unicidad del vector cero y del inverso aditivo.
* [ ] Demostrar la ley de cancelación para la suma de vectores.
* [ ] Demostrar $0\mathbf v=\mathbf 0_V$ y $\lambda\mathbf 0_V=\mathbf 0_V$ usando distributividad y cancelación.
* [ ] Demostrar $(-\lambda)\mathbf v=-(\lambda\mathbf v)$ y, como caso particular, $(-1)\mathbf v=-\mathbf v$.
* [ ] Demostrar que $\lambda\mathbf v=\mathbf 0_V$ implica $\lambda=0$ o $\mathbf v=\mathbf 0_V$.
* [ ] Reconocer y reutilizar el patrón «crear dos copias mediante distributividad, cancelar y concluir» sin razonamiento circular.

#### Infografía de recursos — axiomas y propiedades

La ficha de la UPV orienta el aprendizaje de la definición; el vídeo de Archimedes Tube trata las propiedades derivadas y el recurso de la UNAM permite reconstruirlas por escrito.[^15][^16][^17]

```mermaid
flowchart LR
    A["1 · Definición y axiomas<br/>UPV"] --> B["2 · Propiedades demostradas<br/>Archimedes Tube"] --> C["3 · Reconstrucción escrita<br/>UNAM"]
    click A "https://www.upv.es/visor/media/8f4af840-84f1-11e8-bed3-8f377bbbf659/v" "Abrir vídeo de la UPV"
    click B "https://www.youtube.com/watch?v=1jrxXirw45M" "Abrir vídeo en YouTube"
    click C "https://prometeo.matem.unam.mx/recursos/VariosNiveles/iCartesiLibri/recursos/Algebra_Lineal_Interactiva/index.html" "Abrir recurso de la UNAM"
```

### [Subespacios y espacio generado](<03%20Espacios%20vectoriales/03%20Subespacios%20y%20espacio%20generado.md>)

* [ ] Definir subespacio después de establecer la estructura de espacio vectorial ambiente.
* [ ] Verificar o refutar que un subconjunto es subespacio usando el criterio de cierre.
* [ ] Trabajar con combinaciones lineales, conjuntos generadores y espacio generado.
* [ ] Demostrar que el espacio generado por $S$ es el menor subespacio que contiene a $S$.
* [ ] Relacionar intersecciones de subespacios con intersecciones de conjuntos y explicar por qué una unión no suele ser subespacio.

### [Independencia, bases y coordenadas](<03%20Espacios%20vectoriales/04%20Independencia,%20bases%20y%20coordenadas.md>)

* [ ] Decidir dependencia e independencia lineal.
* [ ] Extraer una base de un conjunto generador y completar un conjunto independiente.
* [ ] Calcular dimensión y demostrar la unicidad de las coordenadas en una base.
* [ ] Hallar matrices de cambio de base y transformar coordenadas.

### [Sumas y espacios asociados a una matriz](<03%20Espacios%20vectoriales/05%20Sumas%20y%20espacios%20asociados%20a%20una%20matriz.md>)

* [ ] Determinar espacios de filas y de columnas y relacionarlos con el rango.
* [ ] Calcular suma e intersección de subespacios.
* [ ] Reconocer una suma directa y justificar el criterio de intersección trivial.
* [ ] Demostrar y aplicar la fórmula de Grassmann.

### [Ampliación de contraste — cuatro subespacios fundamentales](<03%20Espacios%20vectoriales/06%20Cuatro%20subespacios%20fundamentales.md>)

Ampliación de Khan Academy, fuera del núcleo explícito de FCUL [^11] [^12].

* [ ] Identificar los espacios columna, fila, nulo y nulo izquierdo de una matriz.
* [ ] Relacionar $\ker A$ con $(\operatorname{im}A^*)^\perp$ y $\ker A^*$ con $(\operatorname{im}A)^\perp$, donde $A^*$ es la traspuesta conjugada ($A^T$ en el caso real).
* [ ] Justificar la igualdad de rango fila y rango columna, y reconocer cuándo $A^*A$ es invertible (en matrices reales, $A^*A=A^TA$).
* [ ] Obtener, cuando $A\mathbf x=\mathbf b$ es compatible, la solución particular única situada en el espacio fila.

### Problemas y criterio de dominio

* [ ] Alternar entre descripciones por ecuaciones, generadores, bases y coordenadas.
* [ ] Construir ejemplos y contraejemplos de afirmaciones sobre subespacios e independencia.
* [ ] Justificar cada afirmación de dimensión, no sólo obtener un número.
* [ ] Verificar o refutar estructuras vectoriales con operaciones no habituales, indicando explícitamente cada axioma usado o incumplido.
* [ ] Trabajar con espacios de matrices, polinomios y funciones, y comparar $\mathbb C$ como espacio sobre $\mathbb R$ y sobre $\mathbb C$.

<a id="contenido-5"></a>

## Unidad 4. Transformaciones lineales

Alcance oficial: definición, representación matricial, núcleo, imagen, inyectividad, sobreyectividad, isomorfismos y cambio de base [^1].

### [Aplicaciones entre conjuntos](<04%20Transformaciones%20lineales/01%20Aplicaciones%20entre%20conjuntos.md>)

Preliminar conceptual: primero se estudian las aplicaciones generales; después se impone la condición de linealidad. Este orden coincide con el material de MMII de la USC.[^21]

* [ ] Definir aplicación distinguiendo dominio, codominio e imagen.
* [ ] Calcular imágenes y preimágenes de subconjuntos.
* [ ] Demostrar que la preimagen conserva uniones, intersecciones y complementos.
* [ ] Demostrar $f(A\cup B)=f(A)\cup f(B)$ y $f(A\cap B)\subseteq f(A)\cap f(B)$; determinar cuándo la segunda inclusión es igualdad.
* [ ] Definir y caracterizar inyectividad, sobreyectividad y biyectividad.
* [ ] Manejar identidad, restricción, composición e inversa; demostrar que una aplicación es invertible si y sólo si es biyectiva.
* [ ] Probar qué propiedades de inyectividad y sobreyectividad se conservan o se deducen de una composición.

### [Transformaciones, núcleo e imagen](<04%20Transformaciones%20lineales/02%20Transformaciones,%20n%C3%BAcleo%20e%20imagen.md>)

* [ ] Definir transformaciones lineales y comprobar linealidad.
* [ ] Construir una transformación a partir de su acción sobre una base.
* [ ] Demostrar que núcleo e imagen son subespacios y calcular bases para ambos.
* [ ] Aplicar el teorema rango–nulidad.

### [Representación matricial e isomorfismos](<04%20Transformaciones%20lineales/03%20Representaci%C3%B3n%20matricial%20e%20isomorfismos.md>)

* [ ] Obtener la matriz de una transformación respecto de bases dadas.
* [ ] Caracterizar inyectividad mediante $\ker T=\{0\}$ y sobreyectividad mediante la imagen.
* [ ] Reconocer isomorfismos, justificar la linealidad de la inversa y cambiar de base.
* [ ] Distinguir propiedades intrínsecas de datos dependientes de la base.

### [Ampliación de contraste — transformaciones geométricas y composición](<04%20Transformaciones%20lineales/04%20Transformaciones%20geom%C3%A9tricas%20y%20composici%C3%B3n.md>)

Ampliación de Khan Academy, fuera del núcleo explícito de FCUL [^12].

* [ ] Modelar escalados, reflexiones, rotaciones y proyecciones mediante matrices.
* [ ] Calcular imágenes y preimágenes de conjuntos bajo una transformación lineal.
* [ ] Sumar y multiplicar por escalares transformaciones lineales y obtener sus matrices.
* [ ] Componer transformaciones, respetar el orden del producto matricial e interpretar geométricamente el resultado.

### Problemas y criterio de dominio

* [ ] Pasar con soltura entre descripción abstracta, fórmula, matriz, núcleo e imagen.
* [ ] Determinar inyectividad, sobreyectividad o isomorfía por más de un criterio.
* [ ] Justificar las fórmulas de cambio de base sin memorizar productos de matrices aislados.

<a id="contenido-6"></a>

## Unidad 5. Valores propios, vectores propios y diagonalización

Alcance oficial: subespacios propios, polinomio característico, multiplicidades, diagonalización y matrices simétricas [^1].

### [Espectro y subespacios propios](<05%20Valores%20propios%20y%20diagonalizaci%C3%B3n/01%20Espectro%20y%20subespacios%20propios.md>)

* [ ] Definir valor propio, vector propio, subespacio propio y polinomio característico.
* [ ] Calcular espectro, bases de subespacios propios y multiplicidades algebraica y geométrica.
* [ ] Demostrar que vectores propios asociados a valores propios distintos son independientes.
* [ ] Justificar que la multiplicidad geométrica no excede la algebraica.

### Diagonalización y matrices simétricas

* [ ] Caracterizar la diagonalización mediante una base de vectores propios.
* [ ] Construir y comprobar $A=PDP^{-1}$.
* [ ] Comparar matrices con igual polinomio característico y distinto comportamiento de diagonalización.
* [ ] Estudiar matrices simétricas reales, ortogonalidad de subespacios propios y diagonalización ortogonal.

### Problemas y criterio de dominio

* [ ] Resolver problemas con parámetros que alteran espectro o diagonalizabilidad.
* [ ] Distinguir con precisión multiplicidad algebraica, multiplicidad geométrica y dimensión del subespacio propio.
* [ ] Justificar una diagonalización ordinaria u ortogonal y verificar el resultado por reconstrucción.

<a id="contenido-7"></a>

## Unidad 6. Espacios euclídeos

Alcance oficial: producto interno, norma, ángulo, proyecciones, Cauchy–Schwarz, Gram–Schmidt, complementos ortogonales y producto externo en $\mathbb R^3$ [^1].

### Producto interno, norma y ángulo

* [ ] Definir producto interno real, norma, distancia, ángulo y ortogonalidad.
* [ ] Demostrar y aplicar Cauchy–Schwarz y la desigualdad triangular.
* [ ] Calcular proyecciones ortogonales e interpretar su propiedad de mejor aproximación.
* [ ] Normalizar vectores no nulos y trabajar con vectores unitarios.

### Bases ortogonales y Gram–Schmidt

* [ ] Construir bases ortogonales y ortonormales mediante Gram–Schmidt.
* [ ] Justificar cada paso del algoritmo y comprobar la ortonormalidad final.
* [ ] Calcular complementos ortogonales y descomponer $V=U\oplus U^\perp$ en dimensión finita.

### Producto externo en $\mathbb R^3$

* [ ] Definir y calcular el producto vectorial.
* [ ] Justificar sus propiedades y aplicarlo a áreas, orientación y ortogonalidad.
* [ ] Desarrollar $\mathbf a\times(\mathbf b\times\mathbf c)$ mediante la identidad del producto triple vectorial como ampliación opcional de Khan Academy.[^11]

### Ampliación de contraste — proyecciones matriciales y mínimos cuadrados

Ampliación de Khan Academy, fuera del núcleo explícito de FCUL [^13].

* [ ] Construir la matriz de proyección ortogonal sobre una recta o un subespacio.
* [ ] Interpretar la proyección como el vector del subespacio más próximo al vector dado.
* [ ] Formular y resolver problemas elementales de mínimos cuadrados mediante proyección ortogonal.
* [ ] Reconocer matrices ortogonales y demostrar que conservan normas, distancias y ángulos.

### Ampliación de contraste — rectas, planos y distancias

Ampliación de geometría vectorial de Khan Academy, fuera del núcleo explícito de FCUL [^11].

* [ ] Representar rectas en forma vectorial y paramétrica.
* [ ] Obtener la ecuación de un plano a partir de un punto y un vector normal, y recuperar un normal desde su ecuación.
* [ ] Calcular distancias de un punto a un plano y entre planos paralelos.

### Problemas y criterio de dominio

* [ ] Resolver normas, ángulos, proyecciones, complementos y descomposiciones ortogonales.
* [ ] Conectar coordenadas algebraicas con interpretación geométrica y comprobar ortogonalidad y norma.

<a id="contenido-8"></a>

## Unidad 7. Formas cuadráticas

Alcance oficial: definición y clasificación por valores propios y menores principales [^1] [^2].

### Formas cuadráticas y matrices simétricas

* [ ] Pasar de una forma cuadrática a su matriz simétrica y de la matriz a la forma.
* [ ] Justificar que sólo interviene la parte simétrica de una matriz.
* [ ] Transformar la matriz bajo un cambio de coordenadas y eliminar términos cruzados mediante diagonalización ortogonal.

### Clasificación de formas cuadráticas

* [ ] Distinguir formas reales definidas positivas, definidas negativas e indefinidas; reconocer las semidefinidas como caso de frontera.
* [ ] Clasificar mediante el signo de los valores propios.
* [ ] Aplicar el criterio de Sylvester con los menores principales iniciales para decidir si una forma es definida positiva o definida negativa.
* [ ] Relacionar ese criterio con la clasificación espectral y no extenderlo sin más a las formas semidefinidas.

### Problemas y criterio de dominio

* [ ] Clasificar formas con y sin parámetros por dos métodos cuando resulte útil.
* [ ] Elegir entre espectro y menores principales, explicar la elección y comprobar el signo con vectores de prueba.

<a id="contenido-9"></a>

## Bibliografía recomendada para matrícula de honor

La bibliografía oficial de FCUL se recoge en las fichas de 2025/2026 y 2026/2027.[^3][^4] Los textos siguientes son apoyos en español o inglés para estudiar el recorrido.

* **Texto guía en español:** Lay, Lay y McDonald, *Álgebra lineal y sus aplicaciones*, 5.ª ed.; sigue casi todo el recorrido oficial y combina conceptos, cálculo y aplicaciones [^5].
* **Intuición estructural y problemas:** Strang, *Introduction to Linear Algebra*, 6.ª ed.; aporta ejemplos, secciones abiertas y exámenes de práctica [^6].
* **Autoestudio abierto con soluciones:** Hefferon, *Linear Algebra*, 4.ª ed.; desarrolla pruebas gradualmente y ofrece ejercicios extensos con soluciones [^7].
* **Rigor principal de consulta:** Friedberg, Insel y Spence, *Linear Algebra*, 5.ª ed.; apropiado para profundizar en espacios, transformaciones, diagonalización y producto interno [^8].
* **Complemento selectivo de demostraciones:** Axler, *Linear Algebra Done Right*, 4.ª ed., abierto; útil para madurez teórica, pero no como base única porque su secuencia no coincide con la del curso y desplaza los determinantes al final [^9].

<a id="contenido-10"></a>

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
[^21]: **USC — archivo de *Métodos Matemáticos II* de la Facultad de Física.** Fuente local del usuario: `Métodos Matematicos II.zip`. Se contrastaron especialmente *01 Conxuntos e Aplicacions-MM II*, *03 Espazos vectoriais-MM II* y los boletines de conjuntos y espacios vectoriales.
