---
title: Definición y cálculo de determinantes
aliases:
  - Definición del determinante
  - Cálculo de determinantes
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
  - Determinantes
tipo:
  - teoría
  - definición
  - procedimiento
nivel: universitario-introductorio
estado: borrador
capa: curricular
requiere:
  - "[[Matemáticas/Álgebra lineal/Matrices|Matrices]]"
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa|Rango e inversa]]"
desbloquea:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/02 Propiedades y aplicaciones|Propiedades y aplicaciones de determinantes]]"
relacionado:
  - "[[Matemáticas/Álgebra lineal/Determinantes|Determinantes]]"
fsrs_goal: Definir recursivamente el determinante, calcular órdenes dos y tres, construir A(i|j) y \widehat A_{ij}, desarrollar por Laplace, justificar el recuento de n! términos y elegir un método según la estructura de la matriz.
simbolos:
  - \det(A)
  - A(i|j)
  - M_{ij}
  - \widehat A_{ij}
  - C_{ij}
  - \operatorname{sgn}(\sigma)
tags:
  - matemáticas
  - álgebra-lineal
  - determinantes
  - curricular
---

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

# Definición y cálculo de determinantes

El [[Matemáticas/Álgebra lineal/Determinantes|determinante]] asigna un escalar a una matriz cuadrada y permite reconocer, entre otras cosas, cuándo un sistema cuadrado tiene solución única. Aquí se construye por recurrencia, se calculan los órdenes dos y tres y se desarrolla por menores y cofactores. La interpretación geométrica se reserva para la [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/03 Interpretación geométrica del determinante|ampliación geométrica]].

## Motivación: unicidad en un sistema de dos ecuaciones

Considérese, sobre un cuerpo $\mathbb K$, el sistema

$$
\begin{cases}
ax+by=\alpha,\\
cx+dy=\beta.
\end{cases}
$$

Si $a\ne0$, la operación $L_2\leftarrow L_2-\frac caL_1$ deja como segundo pivote $d-\frac{bc}{a}$. Hay solución única exactamente cuando ese pivote no es cero, esto es, cuando $ad-bc\ne0$. Si $a=0$ y $c\ne0$, se intercambian las ecuaciones y se obtiene el mismo criterio. Si $a=c=0$, el sistema no puede determinar de manera única ambas incógnitas y $ad-bc=0$. Por tanto:

### Criterio de unicidad para dos incógnitas

> [!teorema] Solución única de un sistema $2\times2$
> El sistema tiene solución única si y sólo si $ad-bc\ne0$.

La reducción prueba ambas direcciones: un segundo pivote no nulo produce rango dos y unicidad; si el criterio falla, el rango es menor que dos y cualquier sistema compatible tiene más de una solución. La expresión será el determinante de la matriz de coeficientes. (Aula 13, pp. 2–3)[^a13]

## Definición recursiva

El determinante se define para matrices cuadradas, reduciendo el orden hasta llegar al caso escalar.

> [!definicion] Determinante
> Para $A=[a]\in M_1(\mathbb K)$, se define $\det(A)=a$. Si $A=[a_{ij}]\in M_n(\mathbb K)$, con $n\ge2$, se define
> $$
> \det(A)=\sum_{j=1}^{n}a_{1j}(-1)^{1+j}\det\bigl(A(1|j)\bigr),
> $$
> donde $A(1|j)$ se obtiene al suprimir la primera fila y la columna $j$.

El resultado es un escalar de $\mathbb K$. La definición usa la primera fila; el teorema de Laplace permitirá elegir cualquier fila o columna. La notación del curso para la submatriz obtenida al suprimir fila $i$ y columna $j$ es $A(i|j)$. (Aula 13, pp. 4–5)[^a13]

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - definición
---
> [!note] Pregunta
> ¿A qué tipo de matriz se le asigna un determinante y en qué conjunto está su valor?
===
> [!important] Respuesta
> A una matriz cuadrada; su determinante es un escalar del cuerpo de sus entradas.
```

## Cálculo en órdenes dos y tres

### Orden dos

Para $A=\begin{pmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{pmatrix}$, la definición da

$$
\det(A)=a_{11}a_{22}-a_{12}a_{21}.
$$

Se multiplica la diagonal principal y se resta el producto de la otra diagonal. Por ejemplo,

$$
\det\begin{pmatrix}3&2\\4&5\end{pmatrix}=3\cdot5-2\cdot4=7.
$$

(Aula 13, pp. 6–7)[^a13]

### Orden tres: regla de Sarrus

Para $A=[a_{ij}]\in M_3(\mathbb K)$,

$$
\begin{aligned}
\det(A)={}&a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}\\
&-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}.
\end{aligned}
$$

Sarrus organiza tres productos de signo positivo y tres de signo negativo. Sólo es una regla directa para orden tres; el mismo patrón no define el determinante de orden cuatro o mayor.

Como ejemplo de la diapositiva, para

$$
A=\begin{pmatrix}2&-1&3\\1&-1&4\\-5&2&1\end{pmatrix},
$$

los productos positivos suman $-2+20+6=24$ y los que se restan suman $15-1+16=30$. Así, $\det(A)=-6$. (Aula 13, pp. 8–10)[^a13]

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - cálculo
---
> [!note] Pregunta
> ¿Cuándo puede aplicarse directamente la regla de Sarrus y qué método general permite calcular órdenes mayores?
===
> [!important] Respuesta
> Sarrus sólo calcula determinantes de orden tres. Para órdenes mayores puede usarse Laplace, eligiendo una fila o columna conveniente, o las propiedades de las transformaciones elementales.
```

## Menores, cofactores y desarrollo de Laplace

Suprimir una fila y una columna de $A\in M_n(\mathbb K)$, $n\ge2$, produce una matriz cuadrada de orden $n-1$.

> [!definicion] Menor $M_{ij}$
> $$
> M_{ij}=\det\bigl(A(i|j)\bigr).
> $$

El menor es el determinante de la submatriz; el cofactor incluye además un signo.

> [!definicion] Cofactor $\widehat A_{ij}$
> $$
> \widehat A_{ij}=(-1)^{i+j}\det\bigl(A(i|j)\bigr)=(-1)^{i+j}M_{ij}.
> $$
> El signo alterna como un tablero, empezando por $+$ en $(1,1)$. Son habituales también las notaciones $C_{ij}$ para el cofactor y $M_{ij}$ para el menor.

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - cofactores
---
> [!note] Pregunta
> ¿Qué diferencia hay entre el menor $M_{ij}$ y el cofactor $\widehat A_{ij}$?
===
> [!important] Respuesta
> $M_{ij}$ es $\det(A(i|j))$; el cofactor incluye además el signo $(-1)^{i+j}$.
```

Para orden tres, el patrón es

$$
\begin{pmatrix}+&-&+\\-&+&-\\+&-&+\end{pmatrix}.
$$

### Teorema de Laplace

Para $A=[a_{ij}]\in M_n(\mathbb K)$ y cualquier $k\in\{1,\ldots,n\}$,

$$
\det(A)=\sum_{j=1}^{n}a_{kj}\widehat A_{kj}
\quad\text{(fila $k$)},\qquad
\det(A)=\sum_{i=1}^{n}a_{ik}\widehat A_{ik}
\quad\text{(columna $k$)}.
$$

Cada sumando multiplica una entrada por su cofactor. Una fila o columna nula da determinante cero; para ahorrar cálculo, conviene desarrollar por la que tenga más ceros. (Aula 14, pp. 2–4)[^a14]

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - definición
  - laplace
---
> [!note] Pregunta
> ¿Cuál es el caso base y la recurrencia del determinante, y cómo se expresa el desarrollo de Laplace por una fila o una columna?
===
> [!important] Respuesta
> $\det([a])=a$. Para $A\in M_n(\mathbb K)$, $n\ge2$, $\det(A)=\sum_{j=1}^n a_{1j}(-1)^{1+j}\det(A(1|j))$. En general, por la fila $k$: $\det(A)=\sum_j a_{kj}\widehat A_{kj}$; por la columna $k$: $\det(A)=\sum_i a_{ik}\widehat A_{ik}$.
```

### Ejemplo trabajado: desarrollo por una fila con cero

Sea

$$
A=\begin{pmatrix}1&2&0\\0&3&1\\2&1&4\end{pmatrix}.
$$

Por la primera fila:

$$
M_{11}=\begin{vmatrix}3&1\\1&4\end{vmatrix}=11,\qquad
M_{12}=\begin{vmatrix}0&1\\2&4\end{vmatrix}=-2.
$$

Así, $\widehat A_{11}=11$ y $\widehat A_{12}=2$. Entonces

$$
\det(A)=1\cdot11+2\cdot2+0\cdot\widehat A_{13}=15.
$$

El signo del cofactor en $(1,2)$ cambia el menor $-2$ a $2$; el último término desaparece porque la entrada es cero. El resultado coincide con Sarrus. (Aula 14, pp. 2–4)[^a14]

## Fórmula general y número de términos

Si $S_n$ es el conjunto de permutaciones de $\{1,\ldots,n\}$ y $\operatorname{sgn}(\sigma)$ es el signo de la permutación,

$$
\det(A)=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)
\prod_{i=1}^{n}a_{i,\sigma(i)}.
$$

Cada producto selecciona exactamente una entrada de cada fila y de cada columna.

### Número de términos de la fórmula del determinante

> [!teorema] Expansión con $n!$ términos
> El determinante de una matriz de orden $n$ es una suma de $n!$ términos. Cada uno multiplica $n$ entradas —una de cada fila y una de cada columna— por una potencia de $-1$.

**Demostración.** Inducimos en $n$. Para $n=1$ hay un término, y $1!=1$. Supongamos que una matriz de orden $n-1$ produce $(n-1)!$ términos. Al desarrollar una matriz de orden $n$ por la primera fila hay $n$ elecciones $a_{1j}$; cada menor de orden $n-1$ aporta $(n-1)!$ términos. Cada término de ese menor usa una vez cada fila restante y cada columna salvo $j$; al multiplicarlo por $a_{1j}$ queda una entrada de cada fila y columna original. El recuento total es $n(n-1)!=n!$. Los factores de signo se multiplican y siguen siendo potencias de $-1$. (Aula 13, p. 11)[^a13]

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - permutaciones
---
> [!note] Pregunta
> ¿Por qué la expansión recursiva de un determinante de orden $n$ contiene $n!$ términos?
===
> [!important] Respuesta
> La expansión por la primera fila tiene $n$ elecciones; cada menor de orden $n-1$ aporta $(n-1)!$ términos. Por inducción, el total es $n(n-1)!=n!$, con una entrada de cada fila y columna en cada producto.
```

## Elección del método y condiciones de validez

- En orden dos se aplica $a_{11}a_{22}-a_{12}a_{21}$.
- En orden tres se puede usar Sarrus o Laplace; Laplace suele ser breve si una fila o columna tiene ceros.
- En orden mayor, Laplace resulta útil si los menores son sencillos. La expansión completa tiene $n!$ términos, por lo que conviene aprovechar la estructura o usar las propiedades de [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/02 Propiedades y aplicaciones|Propiedades y aplicaciones de determinantes]].

**Condiciones de validez.** El determinante solo se define para matrices cuadradas y la regla de Sarrus solo se aplica a matrices de orden tres. Para órdenes mayores, usa Laplace u otras propiedades generales; la estructura de la matriz ayuda a elegir el método. La prueba de invertibilidad y las aplicaciones a sistemas se desarrollan en la nota siguiente.

## Práctica graduada

### Ejercicio 1 — construir un menor y un cofactor

Para

$$
A=\begin{pmatrix}2&1&0\\-1&3&4\\2&0&1\end{pmatrix},
$$

calcula $M_{23}$ y $\widehat A_{23}$.

> [!resolucion]- Resolución
> Al suprimir la fila 2 y la columna 3 queda
> $$
> A(2|3)=\begin{pmatrix}2&1\\2&0\end{pmatrix},
> \qquad M_{23}=2\cdot0-1\cdot2=-2.
> $$
> Como $(-1)^{2+3}=-1$, el cofactor es $\widehat A_{23}=(-1)^5M_{23}=2$. El signo del cofactor cambia el valor del menor.

### Ejercicio 2 — elegir una columna y desarrollar por Laplace

Calcula el determinante de

$$
B=\begin{pmatrix}
2&-1&0&3\\
1&-1&-3&4\\
1&0&2&1\\
-5&2&0&1
\end{pmatrix}
$$

usando la columna más conveniente.

> [!resolucion]- Resolución
> La tercera columna contiene dos ceros. Su desarrollo sólo tiene dos términos:
> $$
> \det(B)=b_{23}\widehat B_{23}+b_{33}\widehat B_{33}
> =(-3)(-1)(8)+2(1)(-6)=12.
> $$
> Los menores se calculan con Sarrus:
> $$
> M_{23}=0+5+6-(0-1+4)=8,\qquad
> M_{33}=-2+20+6-(15-1+16)=-6.
> $$
> Los cofactores correspondientes son $\widehat B_{23}=(-1)^{2+3}M_{23}=-8$ y $\widehat B_{33}=(-1)^{3+3}M_{33}=-6$. Así, los dos términos son $(-3)(-8)=24$ y $2(-6)=-12$. La elección de la columna reduce cuatro posibles términos a dos. (Aula 14, p. 4; Aula 13, pp. 8–10)[^a14][^a13]

### Ejercicio 3 — transferir el criterio de elección

Una matriz cuadrada de orden cuatro no es triangular y tiene tres ceros en una columna. Decide entre Sarrus y Laplace, e indica cuántos términos no nulos como máximo aporta ese desarrollo y cuántos términos tendría la fórmula general completa.

> [!resolucion]- Resolución
> Se elige Laplace por esa columna: sólo queda un término potencialmente no nulo. Sarrus no es aplicable porque la matriz tiene orden cuatro. La fórmula general completa tiene $4!=24$ términos, aunque en este desarrollo concreto sólo haya uno potencialmente distinto de cero. (Aula 13, p. 11; Aula 14, p. 3)[^a13][^a14]

El recorrido parte de [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa|rango, compatibilidad e inversa]]: al estudiar una matriz de coeficientes surge la pregunta de cuándo un sistema cuadrado tiene solución única. El determinante convierte esa pregunta en un criterio escalar; la nota [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/02 Propiedades y aplicaciones|siguiente]] desarrolla cómo las operaciones elementales permiten calcularlo y cómo se aplica a la inversa y a Cramer.

## 📚 Fuentes

### Material base aportado

- FCUL, *ALGA-2026-27-AulasTeo-slides-aula13-Determinantes-impressao.pdf*, Aula 13, 16/10/2026, pp. 2–11. Fuente local: /Users/therustifyer/Seafile/Física (Completo)/Carrera/1º/ULisboa/ALGA/02 - Determinantes/.
- FCUL, *ALGA-2026-27-AulasTeo-slides-Aula14-Determinantes-impressao.pdf*, Aula 14, 19/10/2026, pp. 2–4. Fuente local: /Users/therustifyer/Seafile/Física (Completo)/Carrera/1º/ULisboa/ALGA/02 - Determinantes/.

[^a13]: FCUL, *ALGA-2026-27-AulasTeo-slides-aula13-Determinantes-impressao.pdf*, Aula 13, 16/10/2026.

[^a14]: FCUL, *ALGA-2026-27-AulasTeo-slides-Aula14-Determinantes-impressao.pdf*, Aula 14, 19/10/2026.

### Lecturas académicas opcionales

- MIT OpenCourseWare, [*Determinant Formulas and Cofactors*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/cc79f04d92ee282758780bac2ec5e403_MIT18_06SCF11_Ses2.6sum.pdf). Resumen de clase complementario sobre fórmulas del determinante y cofactores.
- Jim Hefferon, [*Linear Algebra*](https://hefferon.net/linearalgebra/). Texto abierto de primer curso, con demostraciones, ejemplos y ejercicios; incluye determinantes.

## 🧑‍🏫 Prompt para tutor conversacional

Comprueba que el estudiante distingue el determinante —un escalar— de la matriz, justifica el criterio de unicidad en orden dos, aplica las fórmulas de órdenes dos y tres, construye $A(i|j)$ y $\widehat A_{ij}$ sin perder signos, y desarrolla por Laplace eligiendo una fila o columna conveniente. Pídele demostrar por inducción el recuento de $n!$ términos y explicar por qué Sarrus no se extiende a orden cuatro. No generes ejercicios nuevos; usa ejemplos funcionales breves y solicita comprobaciones.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
