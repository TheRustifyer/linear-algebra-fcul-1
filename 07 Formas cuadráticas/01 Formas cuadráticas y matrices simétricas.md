---
schema: nabla-phi-note/v1
title: Formas cuadráticas y matrices simétricas
aliases:
  - Matriz de una forma cuadrática
  - Diagonalización de formas cuadráticas
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
tipo:
  - lección
  - definición
  - procedimiento
nivel: universitario-introductorio
estado: borrador
capa: curricular
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/05 Valores propios y diagonalización/02 Diagonalización y matrices simétricas|Diagonalización y matrices simétricas]]"
desbloquea:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/07 Formas cuadráticas/02 Clasificación de formas cuadráticas|Clasificación de formas cuadráticas]]"
relacionado:
  - "[[Matemáticas/Álgebra lineal/Diagonalización|Valores propios y diagonalización]]"
fsrs_goal: Convierte expresiones cuadráticas en matrices simétricas y viceversa, obtiene la transformación por congruencia bajo un cambio de coordenadas y elimina términos cruzados mediante diagonalización ortogonal.
tags:
  - matematicas
  - algebra-lineal
  - formas-cuadraticas
  - matrices-simetricas
  - congruencia
  - fcul
---
```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```
# Formas cuadráticas y matrices simétricas
Una forma cuadrática asigna un número a cada vector mediante términos de grado dos. Su matriz simétrica reúne en un solo objeto los cuadrados y los productos cruzados, y permite usar la diagonalización ortogonal para encontrar coordenadas en las que esos productos desaparecen.[^1]

Se trabaja sobre $\mathbb R^n$. Los vectores se representan como columnas.

## Definición de forma cuadrática
> [!definicion] Forma cuadrática real
> Una **forma cuadrática** en $\mathbb R^n$ es una función $q:\mathbb R^n\to\mathbb R$ que puede escribirse
> $$
> q(x)=x^TAx,
> $$
> donde $A\in M_n(\mathbb R)$ es simétrica.[^1]

Si $x=(x_1,\ldots,x_n)^T$, al desarrollar aparecen términos $x_i^2$ y términos cruzados $x_ix_j$. No aparecen términos lineales ni constantes; una expresión que los contenga es un polinomio cuadrático, pero su parte homogénea de grado dos es la forma cuadrática.

Para $A=(a_{ij})$ simétrica,
$$
x^TAx
=\sum_{i=1}^{n}a_{ii}x_i^2
+2\sum_{1\leq i<j\leq n}a_{ij}x_ix_j.
$$
El factor $2$ procede de sumar los términos simétricos $a_{ij}x_ix_j$ y $a_{ji}x_jx_i$.

```anki
deck: Física::Álgebra Lineal::Formas cuadráticas
tags:
  - matematicas
  - algebra-lineal
  - formas-cuadraticas
---
> [!note] Pregunta
> Si el término cruzado de una forma es $c_{ij}x_ix_j$, ¿qué entradas ocupa en su matriz simétrica?
===
> [!important] Respuesta
> $a_{ij}=a_{ji}=c_{ij}/2$.
```

## De la expresión a la matriz simétrica
Para construir $A$ a partir de $q$:

1. el coeficiente de $x_i^2$ se coloca en $a_{ii}$;
2. el coeficiente de $x_ix_j$ se divide entre dos y se coloca en $a_{ij}$ y $a_{ji}$;
3. las entradas ausentes se completan con cero.

### Ejemplo trabajado
Sea
$$
q(x,y,z)=2x^2+6xy-4xz+3y^2+8yz+5z^2.
$$
Su matriz simétrica es
$$
A=
\begin{pmatrix}
2&3&-2\\
3&3&4\\
-2&4&5
\end{pmatrix}.
$$
Los coeficientes cruzados se recuperan duplicando las entradas fuera de la diagonal: $2a_{12}=6$, $2a_{13}=-4$ y $2a_{23}=8$.

## De la matriz a la expresión
El recorrido inverso consiste en desarrollar $x^TAx$. Para
$$
A=\begin{pmatrix}
a&b\\
b&c
\end{pmatrix},
\qquad
x=\begin{pmatrix}x_1\\x_2\end{pmatrix},
$$
se obtiene
$$
q(x_1,x_2)=ax_1^2+2bx_1x_2+cx_2^2.
$$
Leer $b$ directamente como coeficiente del término cruzado produciría una forma distinta.

### Ejemplo trabajado
Si
$$
A=\begin{pmatrix}2&2\\2&5\end{pmatrix},
$$
entonces
$$
q(x,y)=2x^2+4xy+5y^2.
$$

## Sólo interviene la parte simétrica
Una matriz no simétrica $B$ también produce la expresión $x^TBx$, pero esa representación no es única. Descompóngase
$$
B=S+K,
\qquad
S=\frac{B+B^T}{2},
\qquad
K=\frac{B-B^T}{2}.
$$
La matriz $S$ es simétrica y $K$ antisimétrica, es decir, $K^T=-K$.

> [!teorema] La parte antisimétrica no contribuye
> Para todo $x\in\mathbb R^n$,
> $$
> x^TKx=0.
> $$
> Por tanto,
> $$
> x^TBx=x^TSx.
> $$

El escalar $x^TKx$ coincide con su transpuesto:
$$
x^TKx=(x^TKx)^T=x^TK^Tx=-x^TKx.
$$
Así, debe ser cero. Toda forma cuadrática posee por ello una única matriz simétrica representante, aunque admita matrices no simétricas que produzcan el mismo valor.[^2]

## Cambio de coordenadas y congruencia
Sea $x=Py$, donde $P$ es invertible. Entonces
$$
q(x)=x^TAx
=(Py)^TA(Py)
=y^T(P^TAP)y.
$$

> [!definicion] Transformación por congruencia
> Bajo el cambio de coordenadas $x=Py$, la matriz de la forma cambia según
> $$
> A\longmapsto P^TAP.
> $$
> Dos matrices relacionadas así se llaman **congruentes**.

La congruencia difiere de la semejanza $P^{-1}AP$ usada para cambiar la matriz de un operador. Una forma recibe el cambio de coordenadas en sus dos argumentos, por eso aparece $P^T$ a la izquierda.

### Ejemplo de congruencia
Para
$$
A=\begin{pmatrix}1&1\\1&2\end{pmatrix},
\qquad
P=\begin{pmatrix}1&-1\\0&1\end{pmatrix},
$$
se obtiene
$$
P^TAP=\begin{pmatrix}1&0\\0&1\end{pmatrix}.
$$
El cambio $x=Py$ transforma la forma $x_1^2+2x_1x_2+2x_2^2$ en $y_1^2+y_2^2$.

## Eliminación ortogonal de términos cruzados
Como $A$ es simétrica real, el teorema espectral proporciona una matriz ortogonal $Q$ y una diagonal $D$ tales que
$$
A=QDQ^T.
$$
Con el cambio ortogonal $x=Qy$,
$$
q(x)=y^TQ^TAQy=y^TDy
=\lambda_1y_1^2+\cdots+\lambda_ny_n^2.
$$
Los términos cruzados desaparecen y los coeficientes diagonales son los valores propios de $A$. La base nueva está formada por vectores propios ortonormales.[^1]

### Ejemplo trabajado completo
Para
$$
q(x,y)=2x^2+4xy+5y^2,
\qquad
A=\begin{pmatrix}2&2\\2&5\end{pmatrix},
$$
el polinomio característico es
$$
\lambda^2-7\lambda+6=(\lambda-1)(\lambda-6).
$$
Una base propia ortonormal es
$$
e_1=\frac1{\sqrt5}(-2,1),
\qquad
e_2=\frac1{\sqrt5}(1,2).
$$
Tomando $Q=(e_1\ e_2)$ y $x=Qy$,
$$
Q^TAQ=\begin{pmatrix}1&0\\0&6\end{pmatrix},
$$
de modo que
$$
q=y_1^2+6y_2^2.
$$
La forma no ha cambiado; se ha expresado en ejes propios donde cada variable contribuye por separado.

## Condiciones de validez y errores frecuentes
La matriz representante se considera simétrica. Si se parte de una matriz cualquiera, debe sustituirse por su parte simétrica antes de leer coeficientes o aplicar criterios espectrales.

En los términos cruzados, la entrada matricial es la mitad del coeficiente visible. Bajo un cambio de coordenadas se usa congruencia $P^TAP$, no semejanza. La diagonalización ortogonal requiere que la matriz sea real y simétrica; una matriz general no posee necesariamente una base propia ortonormal.

## 📚 Fuentes
### Material base
- Faculdade de Ciências da Universidade de Lisboa, [*Álgebra Linear e Geometria Analítica — programa 2026/27*](https://fenix.ciencias.ulisboa.pt/courses/algana-2817829258658182/programa), alcance curricular de formas cuadráticas y matrices simétricas.

### Ampliación académica
[^1]: MIT OpenCourseWare, [*Positive Definite Matrices and Minima*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/positive-definite-matrices-and-minima/), formas cuadráticas, ejes principales y diagonalización ortogonal.
[^2]: Jim Hefferon, [*Linear Algebra*](https://hefferon.net/linearalgebra/), texto universitario abierto; representación matricial y congruencia de formas cuadráticas.

## 🧑‍🏫 Prompt para tutor conversacional
Actúa como tutor universitario de Álgebra Lineal. Da primero una expresión cuadrática y pide construir su matriz simétrica justificando cada coeficiente cruzado. Después entrega una matriz no simétrica para que el estudiante extraiga su parte simétrica. Termina con un cambio de coordenadas y una diagonalización ortogonal, exigiendo distinguir congruencia de semejanza y comprobar la expresión final.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
