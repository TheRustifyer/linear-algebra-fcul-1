---
title: Ejercicios 49–54 — productos, invertibilidad y parámetros
asignatura: Álgebra Lineal y Geometría Analítica
capa: curricular
tipo:
  - ejercicios
  - preparatoria
nivel: universitario-introductorio
estado: revisado
fsrs_goal: Calcula determinantes de productos, potencias e inversas, clasifica matrices con parámetros y distingue lo que un determinante nulo permite afirmar sobre sistemas homogéneos y no homogéneos.
tags:
  - matematicas
  - algebra-lineal
  - determinantes
  - ejercicios
  - fcul
---

# Productos, invertibilidad y parámetros · ejercicios 49–54

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

La propiedad $\det(AB)=\det A\det B$ evita calcular productos completos cuando sólo interesa su determinante. Su hipótesis es concreta: $A$ y $B$ deben ser matrices cuadradas del mismo orden. Junto con el criterio $\det A\ne0$, permite estudiar [[Matemáticas/Álgebra lineal/Matriz inversa|inversas]] y [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales|sistemas lineales]].[^teoria]

> [!tip] Procedencia
> Las resoluciones y comprobaciones están añadidas por IA (🤖). Se conserva la numeración original; los ejercicios 49–54 pertenecen a determinantes por el procedimiento que evalúan.[^base]

## Productos y cambios de escala

### Ejercicio 49 · Productos sin multiplicar las matrices 🤖

#### Enunciado

Considera[^49]

$$
A=\begin{pmatrix}1&2&-1&2\\2&0&2&1\\-1&1&0&0\\0&1&-1&0\end{pmatrix},
\qquad
B=\begin{pmatrix}1&-1&1&-3\\2&1&0&-2\\-1&1&2&-2\\-2&-1&3&0\end{pmatrix}.
$$

**a)** Calcula los determinantes de $A,B,AB,A^2,AB^T,A+B$. **b)** Decide cuáles de $A,B,AB,A+B$ son invertibles e indica los determinantes de sus inversas cuando existan.

> [!resolucion]- Resolución
> **a) Primero, los determinantes de los factores.** En $A$, hacemos $R_2\leftarrow R_2-2R_1$ y $R_3\leftarrow R_3+R_1$, sin cambiar el determinante. La primera columna queda $(1,0,0,0)^T$, luego
>
> $$
> \det A=\begin{vmatrix}-4&4&-3\\3&-1&2\\1&-1&0\end{vmatrix}.
> $$
>
> Intercambiando la primera y la tercera fila de este menor y eliminando por debajo del pivote $1$, se obtiene
>
> $$
> \begin{pmatrix}1&-1&0\\0&2&2\\0&0&-3\end{pmatrix}.
> $$
>
> Su determinante es $-6$; como hubo un intercambio, $\boxed{\det A=6}$.
>
> En $B$, hacemos $R_2\leftarrow R_2-2R_1$, $R_3\leftarrow R_3+R_1$ y $R_4\leftarrow R_4+2R_1$. Después, $R_4\leftarrow R_4+R_2$ y $R_4\leftarrow R_4-R_3$, utilizando las filas ya modificadas. Resulta
>
> $$
> \begin{pmatrix}1&-1&1&-3\\0&3&-2&4\\0&0&3&-5\\0&0&0&3\end{pmatrix}.
> $$
>
> Todas las operaciones conservan el determinante, así que $\boxed{\det B=1\cdot3\cdot3\cdot3=27}$.
>
> Como $A,B\in M_4(\mathbb R)$, se puede aplicar la multiplicatividad. Además, transponer no cambia un determinante:
>
> $$
> \boxed{\det(AB)=6\cdot27=162},\qquad
> \boxed{\det(A^2)=6^2=36},\qquad
> \boxed{\det(AB^T)=6\cdot27=162}.
> $$
>
> La suma necesita estudiarse por separado:
>
> $$
> A+B=\begin{pmatrix}2&1&0&-1\\4&1&2&-1\\-2&2&2&-2\\-2&0&2&0\end{pmatrix}.
> $$
>
> Su cuarta columna es la opuesta de la segunda. Al sumar la segunda a la cuarta aparece una columna nula, conservando el determinante. Por tanto, $\boxed{\det(A+B)=0}$.
>
> **b)** Las matrices $A,B,AB$ son invertibles porque sus determinantes son distintos de cero; $A+B$ no lo es. De $MM^{-1}=I$ se deduce $\det M\det(M^{-1})=1$, por lo que
>
> $$
> \boxed{\det(A^{-1})=\frac16,\quad
> \det(B^{-1})=\frac1{27},\quad
> \det((AB)^{-1})=\frac1{162}.}
> $$
>
> No existe $(A+B)^{-1}$.

> [!recuerda]- Comprobación
> La columna $v=(0,1,0,1)^T$ es no nula y $(A+B)v=0$, porque suma las columnas segunda y cuarta. Confirma que la suma no es invertible. Para las otras tres, multiplica cada determinante por el de su inversa: los productos deben ser $1$.

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
---
> [!note] Pregunta
> ¿Qué hipótesis permite usar $\det(AB)=\det A\det B$?
===
> [!important] Respuesta
> Que $A$ y $B$ sean cuadradas del mismo orden sobre el mismo cuerpo. No hace falta que conmuten ni que sean invertibles.
```

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - invertibilidad
---
> [!note] Pregunta
> ¿Cómo se obtiene el determinante de la inversa de una matriz invertible $A$?
===
> [!important] Respuesta
> $\det(A^{-1})=1/\det A$, aplicando la multiplicatividad a $AA^{-1}=I$.
```

### Ejercicio 50 · El tamaño cambia la potencia del escalar 🤖

#### Enunciado

Sean $A\in M_3(K)$ y $B\in M_4(K)$ tales que $\det A=\det B=5$.[^50]

**a)** Calcula $\det(2A)$, $\det(2B)$, $\det(-2A)$ y $\det(-2B)$. **b)** Calcula $\det(-A)$ y $\det(-B)$. **c)** Calcula

$$
\det(A^T),\quad\det(A^{-1}),\quad\det((2A)^T),\quad
\det(2A^{-1}),\quad\det((2A)^{-1}),\quad\det(B^TB^{-1}).
$$

Trabajamos con $K=\mathbb R$ o $\mathbb C$, como en estos cálculos del curso. Para un cuerpo arbitrario habría que exigir además $5\ne0_K$ y $2\ne0_K$ para garantizar todas las inversas que aparecen.

> [!resolucion]- Resolución
> Para una matriz $M$ de orden $n$, $\det(cM)=c^n\det M$: el factor $c$ se extrae de cada una de las $n$ filas.
>
> **a)** Los órdenes son distintos, de modo que también lo son los exponentes:
>
> $$
> \boxed{\det(2A)=2^3\cdot5=40},\qquad
> \boxed{\det(2B)=2^4\cdot5=80},
> $$
>
> $$
> \boxed{\det(-2A)=(-2)^3\cdot5=-40},\qquad
> \boxed{\det(-2B)=(-2)^4\cdot5=80}.
> $$
>
> **b)** Con $c=-1$, el signo cambia en orden impar y se conserva en orden par:
>
> $$
> \boxed{\det(-A)=-5},\qquad\boxed{\det(-B)=5}.
> $$
>
> **c)** Como $\det A=\det B=5\ne0$, ambas matrices son invertibles. La transposición conserva el determinante y la inversión lo reemplaza por su recíproco:
>
> $$
> \boxed{\det(A^T)=5},\quad
> \boxed{\det(A^{-1})=\frac15},\quad
> \boxed{\det((2A)^T)=40}.
> $$
>
> Las dos expresiones siguientes tienen paréntesis distintos. En $2A^{-1}$ se multiplica por $2$ la inversa de $A$; en $(2A)^{-1}$ se invierte la matriz $2A$:
>
> $$
> \boxed{\det(2A^{-1})=2^3\frac15=\frac85},\qquad
> \boxed{\det((2A)^{-1})=\frac1{40}}.
> $$
>
> Finalmente, $B^T$ y $B^{-1}$ son cuadradas de orden $4$, por lo que
>
> $$
> \boxed{\det(B^TB^{-1})=\det(B^T)\det(B^{-1})=5\cdot\frac15=1}.
> $$

> [!recuerda]- Comprobación
> Toma $A=\operatorname{diag}(5,1,1)$ y $B=\operatorname{diag}(5,1,1,1)$. Todas las cantidades se verifican multiplicando diagonales. En particular, $2A^{-1}$ tiene diagonal $(2/5,2,2)$, mientras que $(2A)^{-1}$ tiene diagonal $(1/10,1/2,1/2)$.

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
---
> [!note] Pregunta
> Si $A$ es invertible de orden $n$ y $c\ne0$, ¿en qué se distinguen $\det(cA^{-1})$ y $\det((cA)^{-1})$?
===
> [!important] Respuesta
> El primero es $c^n/\det A$; el segundo, $1/(c^n\det A)$. En efecto, $(cA)^{-1}=c^{-1}A^{-1}$.
```

## Parámetros y límites de las propiedades

### Ejercicio 51 · Raíces del determinante y sistemas homogéneos 🤖

#### Enunciado

Para cada $k\in\mathbb R$, sean[^51]

$$
A_k=\begin{pmatrix}0&k&2\\k-4&0&0\\0&3&k-1\end{pmatrix},\qquad
B_k=\begin{pmatrix}1&k&-1\\2&4&-2\\3&-7&k+3\end{pmatrix},
$$

$$
C_k=\begin{pmatrix}1&k&k&-2\\0&1&3&1\\1&k&1&-2k\\0&0&k&0\end{pmatrix}.
$$

**a)** Calcula sus determinantes. **b)** Determina cuándo es invertible cada matriz. **c)** Indica para qué $k$: **i)** $A_kX=0$ tiene solución única; **ii)** $B_kX=0$ tiene una solución no nula. **d)** Determina cuándo es invertible $A_k^TB_{2k}$.

> [!resolucion]- Resolución
> **a)** En $A_k$, la segunda fila tiene un solo elemento potencialmente no nulo. Laplace por ella da
>
> $$
> \det A_k=-(k-4)\begin{vmatrix}k&2\\3&k-1\end{vmatrix}
> =-(k-4)(k^2-k-6)
> =\boxed{-(k-4)(k-3)(k+2)}.
> $$
>
> En $B_k$, hacemos $R_2\leftarrow R_2-2R_1$ y $R_3\leftarrow R_3-3R_1$:
>
> $$
> B_k\longrightarrow\begin{pmatrix}1&k&-1\\0&4-2k&0\\0&-7-3k&k+6\end{pmatrix}.
> $$
>
> Desarrollar por la primera columna deja un determinante $2\times2$ con un cero:
>
> $$
> \det B_k=(4-2k)(k+6)=\boxed{-2(k-2)(k+6)}.
> $$
>
> En $C_k$, hacemos $R_3\leftarrow R_3-R_1$, con lo que la tercera fila pasa a $(0,0,1-k,2-2k)$. Laplace por la cuarta fila, cuyo único término está en $(4,3)$, da
>
> $$
> \det C_k=-k\begin{vmatrix}1&k&-2\\0&1&1\\0&0&2-2k\end{vmatrix}
> =-2k(1-k)=\boxed{2k(k-1)}.
> $$
>
> **b)** Una matriz cuadrada es invertible si y sólo si su determinante no es cero. Las factorizaciones permiten leer todos los valores excluidos:
>
> $$
> A_k\text{ invertible}\iff k\notin\{-2,3,4\},
> $$
>
> $$
> B_k\text{ invertible}\iff k\notin\{-6,2\},\qquad
> C_k\text{ invertible}\iff k\notin\{0,1\}.
> $$
>
> **c-i)** Todo sistema homogéneo tiene la solución cero. Es única si y sólo si la matriz es invertible. Por tanto, $A_kX=0$ es compatible determinado exactamente para $\boxed{k\notin\{-2,3,4\}}$.
>
> **c-ii)** Una solución homogénea no nula existe exactamente cuando la matriz es singular. Así, $B_kX=0$ la tiene para $\boxed{k=-6\text{ o }k=2}$.
>
> **d)** Los factores son cuadrados de orden $3$, y
>
> $$
> \det(A_k^TB_{2k})=\det A_k\,\det B_{2k}.
> $$
>
> Al sustituir $2k$ en la fórmula de $B_k$, se obtiene
>
> $$
> \det B_{2k}=-2(2k-2)(2k+6)=-8(k-1)(k+3).
> $$
>
> Por tanto,
>
> $$
> \det(A_k^TB_{2k})=8(k-4)(k-3)(k+2)(k-1)(k+3).
> $$
>
> La matriz es invertible exactamente cuando
>
> $$
> \boxed{k\notin\{-3,-2,1,3,4\}.}
> $$

> [!recuerda]- Comprobación
> En $k=0$, los tres determinantes son $-24,24,0$ y el producto de d) tiene determinante $-576$. En $k=1$, $A_1$ es invertible, pero $B_{2}$ no lo es; por eso el producto de d) falla aunque el primer factor tenga inversa. Cada raíz de las fórmulas de a) anula una fila, columna o dependencia de la matriz correspondiente.

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - invertibilidad
---
> [!note] Pregunta
> ¿Cómo se decide la invertibilidad de una matriz cuadrada con un parámetro a partir de su determinante factorizado?
===
> [!important] Respuesta
> Se excluyen exactamente los valores que anulan algún factor: la matriz es invertible si y sólo si el determinante es distinto de cero.
```

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - sistemas-lineales
---
> [!note] Pregunta
> Para una matriz cuadrada real o compleja $A$, ¿cómo distingue $\det A$ las soluciones de $AX=0$?
===
> [!important] Respuesta
> Si $\det A\ne0$, sólo existe $X=0$. Si $\det A=0$, el rango es menor que el número de incógnitas y existen soluciones no nulas con al menos un parámetro libre.
```

### Ejercicio 52 · Cambiar el orden de dos factores cuadrados 🤖

#### Enunciado

Demuestra que, para cualesquiera $A,B\in M_n(K)$, se cumple $\det(AB)=\det(BA)$.[^52]

> [!demostracion]- Demostración
> Las hipótesis aseguran que los dos productos y los determinantes de ambos factores están definidos en el mismo orden $n$. Aplicamos la multiplicatividad a cada producto:
>
> $$
> \det(AB)=\det A\det B,\qquad
> \det(BA)=\det B\det A.
> $$
>
> Los determinantes son escalares del cuerpo $K$, cuya multiplicación es conmutativa. Por ello, los miembros derechos son iguales y $\boxed{\det(AB)=\det(BA)}$. No se ha supuesto $AB=BA$.

> [!recuerda]- Comprobación
> Con $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$ y $B=\begin{pmatrix}1&0\\1&1\end{pmatrix}$, se tiene $AB=\begin{pmatrix}2&1\\1&1\end{pmatrix}$ y $BA=\begin{pmatrix}1&1\\1&2\end{pmatrix}$. Son matrices distintas, pero ambos determinantes valen $1$.

### Ejercicio 53 · Productos de factores rectangulares 🤖

#### Enunciado

Sean[^53]

$$
A=\begin{pmatrix}1&-1\\-1&0\\0&-1\end{pmatrix}\in M_{3\times2}(\mathbb R),
\qquad
B=\begin{pmatrix}-1&0&2\\-3&1&3\end{pmatrix}\in M_{2\times3}(\mathbb R).
$$

Calcula $\det(AB)$ y $\det(BA)$.

> [!resolucion]- Resolución
> Los productos están definidos: las dimensiones interiores son $2$ en $AB$ y $3$ en $BA$. Sus tamaños son distintos, $3\times3$ y $2\times2$. Calculándolos por fila y columna,
>
> $$
> AB=\begin{pmatrix}2&-1&-1\\1&0&-2\\3&-1&-3\end{pmatrix},
> \qquad
> BA=\begin{pmatrix}-1&-1\\-4&0\end{pmatrix}.
> $$
>
> En $AB$, la tercera fila es la suma de las dos primeras. La operación $R_3\leftarrow R_3-R_1-R_2$ produce una fila nula sin cambiar el determinante, luego $\boxed{\det(AB)=0}$.
>
> Para $BA$, la fórmula de orden dos da $(-1)0-(-1)(-4)=\boxed{-4}$.
>
> El ejercicio 52 no se aplica: $A$ y $B$ son rectangulares y no tienen determinantes propios. Aunque ambos productos sean cuadrados, eso no cumple la hipótesis de dos factores cuadrados del mismo orden.

> [!recuerda]- Comprobación
> Sarrus en $AB$ da $(0+6+1)-(0+3+4)=7-7=0$. En $BA$, cambiar el signo de la primera fila y desarrollar por la segunda permite comprobar el signo negativo del resultado.

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
---
> [!note] Pregunta
> Si $A$ es $m\times n$ y $B$ es $n\times m$ con $m\ne n$, ¿se puede deducir $\det(AB)=\det(BA)$ usando multiplicatividad?
===
> [!important] Respuesta
> No: los factores son rectangulares y sus determinantes no están definidos. Los productos son cuadrados de órdenes distintos y sus determinantes pueden diferir.
```

### Ejercicio 54 · Afirmaciones sobre determinantes y compatibilidad 🤖

#### Enunciado

Decide, justificando, si las siguientes afirmaciones son verdaderas o falsas para toda matriz cuadrada $A$ de orden $3$:[^54]

**a)** $\det(I_3+A)=1+\det A$.

**b)** $\det(A^4)=(\det A)^4$.

**c)** Si $\det A=0$, entonces $AX=0$ es compatible indeterminado.

**d)** Si $\det A=0$, entonces $AX=(5,-2,1)^T$ es compatible indeterminado.

**e)** Si una forma escalonada reducida equivalente a $A$ tiene una fila nula, entonces $\det A=0$.

> [!resolucion]- Resolución
> **a) Falsa.** Tomamos $A=I_3$. Entonces $I_3+A=2I_3$ y
>
> $$
> \det(2I_3)=2^3=8,\qquad1+\det I_3=2.
> $$
>
> Un solo contraejemplo basta para refutar una afirmación universal. El determinante es lineal en una fila cuando las demás se mantienen fijas; eso no lo convierte en lineal respecto de una matriz completa.
>
> **b) Verdadera.** La potencia significa $A^4=AAAA$. Aplicar tres veces la multiplicatividad produce $\det(A^4)=\det A\det A\det A\det A=(\det A)^4$, también si $A$ es singular.
>
> **c) Verdadera sobre $\mathbb R$ o $\mathbb C$.** El vector cero siempre es solución, por lo que el sistema es compatible. Como $\det A=0$, el rango es menor que $3$. Hay al menos una variable libre y, por tanto, infinitas soluciones.
>
> **d) Falsa.** El determinante nulo no garantiza compatibilidad con un término independiente no nulo. Con $A=0_{3\times3}$, la primera ecuación sería $0=5$. El sistema es incompatible, aunque $\det A=0$.
>
> **e) Verdadera.** Una matriz reducida $3\times3$ con una fila nula tiene a lo sumo dos pivotes. Las operaciones elementales preservan el rango, así que $\operatorname{rg}A<3$. Por el criterio de invertibilidad, $A$ es singular y $\det A=0$.

> [!recuerda]- Comprobación
> En d), contrasta el contraejemplo con $A=\operatorname{diag}(1,1,0)$. Sigue siendo singular y la tercera ecuación ahora sería $0=1$, también imposible. Para ver un singular compatible con ese mismo término independiente, toma $A$ con primera columna $(5,-2,1)^T$ y las otras dos nulas: cualquier $X=(1,s,t)^T$ lo resuelve. El determinante nulo permite ambos comportamientos.

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
---
> [!note] Pregunta
> ¿Es cierta en general la igualdad $\det(A+B)=\det A+\det B$?
===
> [!important] Respuesta
> No. Por ejemplo, con $A=B=I_3$, el miembro izquierdo vale $8$ y el derecho $2$. La linealidad del determinante corresponde a una fila o columna con las demás fijas.
```

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
---
> [!note] Pregunta
> ¿Qué relación hay entre el determinante de una potencia $A^m$ y $\det A$, para $m\ge1$ entero?
===
> [!important] Respuesta
> $\det(A^m)=(\det A)^m$, por multiplicatividad repetida. No exige que $A$ sea invertible.
```

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - sistemas-lineales
---
> [!note] Pregunta
> Si $A$ es cuadrada real o compleja y $\det A=0$, ¿qué puede afirmarse sobre $AX=B$ con $B\ne0$?
===
> [!important] Respuesta
> Puede ser incompatible o compatible indeterminado; no puede tener solución única. Para decidir compatibilidad se comparan los rangos de $A$ y $[A\mid B]$.
```

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
---
> [!note] Pregunta
> Si la forma escalonada reducida de una matriz cuadrada tiene una fila nula, ¿qué ocurre con su determinante?
===
> [!important] Respuesta
> Es cero: la forma reducida tiene rango menor que el orden, las operaciones elementales preservan el rango y la matriz original no es invertible.
```

El determinante no nulo asegura la existencia de una inversa y de una solución única para cada término independiente. Los [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/ejercicios/03 Cofactores, adjunta y Cramer — ejercicios 55–58|ejercicios 55–58]] calculan esas respuestas mediante cofactores, adjunta y regla de Cramer.

## 📚 Fuentes

- FCUL, *ALGA 2026/2027 — Exercícios: Enunciados para as aulas teórico-práticas*, fascículo 1–90, pp. 12–14, ejercicios 49–54; cotejado con el fascículo 1–60 para esos mismos ejercicios.
- [[Matemáticas/Álgebra lineal/Determinantes|Determinantes]], §§2–4, y [[Matemáticas/Álgebra lineal/Teorema de Rouché-Capelli|Teorema de Rouché-Capelli]]: propiedades y criterios consultados. Resoluciones y comprobaciones propias.

[^base]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, pp. 12–14, ejercicios 49–54.
[^49]: Misma fuente, p. 12, ejercicio 49, apartados a–b.
[^50]: Misma fuente, p. 13, ejercicio 50, apartados a–c.
[^51]: Misma fuente, p. 13, ejercicio 51, apartados a–d.
[^52]: Misma fuente, p. 13, ejercicio 52.
[^53]: Misma fuente, p. 13, ejercicio 53.
[^54]: Misma fuente, pp. 13–14, ejercicio 54, apartados a–e.
[^teoria]: Premisas consultadas en *Determinantes*, §§2–4: multiplicatividad, transposición, escala, inversión, criterio de invertibilidad y sistema homogéneo. *Teorema de Rouché-Capelli* respalda la distinción entre compatibilidad y unicidad. Los contraejemplos y cálculos de la ficha son propios.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como profesor de Álgebra Lineal de primer curso. Escoge un ejercicio entre 49 y 54 y pide que declare tamaños e hipótesis antes de aplicar una propiedad. Comprueba que distingo $2A^{-1}$ de $(2A)^{-1}$ y que sustituyo $2k$ en toda la fórmula de $\det B_k$. En las preguntas de verdadero o falso, exige una prueba o un contraejemplo concreto. Para sistemas singulares, pregunta por separado compatibilidad y número de soluciones. Deja que compruebe mis resultados antes de mostrarlos. Trabaja sobre $\mathbb R$ o $\mathbb C$ con $\det(AB)=\det A\det B$ para factores cuadrados del mismo orden, $\det(cA)=c^n\det A$ y $\det(A^{-1})=1/\det A$. Si $\det A=0$, el homogéneo tiene soluciones no nulas; para $AX=B$ hay que comprobar además compatibilidad. Como ejemplo, con $A\in M_3$ y $\det A=5$, $\det(2A^{-1})=8/5$ y $\det((2A)^{-1})=1/40$. Haz una pregunta cada vez, espera mi respuesta y recupera los errores en preguntas posteriores.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
