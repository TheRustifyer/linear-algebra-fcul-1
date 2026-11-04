---
title: Factorización LU
aliases:
  - Descomposición LU
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
tipo:
  - ampliación
  - definición
  - procedimiento
nivel: universitario-introductorio
estado: borrador
capa: curricular
alcance: ampliación-curricular-externa
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Eliminación y matrices elementales|Eliminación y matrices elementales]]"
  - "[[Matemáticas/Álgebra lineal/Matrices|Matrices]]"
relacionado:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa|Compatibilidad, rango e inversa]]"
fsrs_goal: Para una matriz cuadrada que admite eliminación sin permutaciones, calcula L triangular inferior unitaria y U triangular superior, reconstruye y comprueba A=LU, resuelve Ax=b mediante sustitución hacia delante y hacia atrás, e identifica cuándo se requiere pivoteo.
simbolos:
  - A=LU
  - L
  - U
  - m_{ik}
  - PA=LU
tags:
  - matemáticas
  - álgebra-lineal
  - matrices
  - ampliación
  - curricular
---

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

# Factorización LU

Al resolver un sistema por [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales#Procedimiento de Gauss|eliminación de Gauss]], se transforma la matriz de coeficientes en una matriz triangular superior. Si después cambia el segundo miembro, sería útil aprovechar los cálculos ya hechos. La factorización $LU$ permite conservarlos y resolver cada nuevo sistema mediante dos sustituciones.[^nicholson]

## Definición y estructura de los factores

### Factorización LU

> [!definicion] Factorización LU con diagonal unitaria
> Para $A\in M_n(K)$, una [[Matemáticas/Álgebra lineal/Factorización LU|factorización LU]] es una igualdad
>
> $$
> \boxed{A=LU},
> $$
>
> donde $L$ es triangular inferior e invertible y $U$ es triangular superior. Se usará la convención en la que todos los elementos de la diagonal de $L$ valen $1$.[^mit]

Aquí $K$ es $\mathbb R$ o $\mathbb C$. En orden tres, los factores tienen la forma

$$
L=\begin{pmatrix}
1&0&0\\
\ell_{21}&1&0\\
\ell_{31}&\ell_{32}&1
\end{pmatrix},
$$

$$
U=\begin{pmatrix}
u_{11}&u_{12}&u_{13}\\
0&u_{22}&u_{23}\\
0&0&u_{33}
\end{pmatrix}.
$$

La diagonal de unos fija la convención para $L$. Los pivotes de la eliminación quedan en $U$; no se divide cada fila de $U$ para convertirlos en unos. La igualdad $A=LU$ es exacta.

```anki
deck: Matemáticas::Álgebra lineal::Factorización LU
tags:
  - matemáticas
  - matrices
  - factorización-lu
---
> [!note] Pregunta
> ¿Qué exige una factorización $A=LU$ con diagonal unitaria en $L$?
===
> [!important] Respuesta
> $L$ es triangular inferior con todos sus elementos diagonales iguales a $1$; $U$ es triangular superior, y su producto debe ser exactamente $A$.
```

### Multiplicadores de eliminación

En la etapa $k$, se usa la fila del pivote para anular las entradas que tiene debajo. Sea $a_{ik}^{(k)}$ la entrada de la fila $i$, columna $k$, **después de las etapas anteriores**, y sea $u_{kk}\ne0$ el pivote actual.

> [!definicion] Multiplicador de eliminación
> El multiplicador para anular esa entrada es
>
> $$
> \boxed{m_{ik}=\frac{a_{ik}^{(k)}}{u_{kk}}},
> \qquad i\in\{k+1,\ldots,n\}.
> $$
>
> Se aplica la operación $R_i\leftarrow R_i-m_{ik}R_k$.[^mit]

La entrada de la columna $k$ pasa a ser

$$
a_{ik}^{(k)}-\frac{a_{ik}^{(k)}}{u_{kk}}u_{kk}=0.
$$

Sin intercambios de filas, el multiplicador $m_{ik}$ se conserva en la posición $(i,k)$ de $L$. ==El signo se interpreta según la operación==: para $R_i\leftarrow R_i-2R_k$, se guarda $2$; para $R_i\leftarrow R_i+2R_k$, se guarda $-2$.

```anki
deck: Matemáticas::Álgebra lineal::Factorización LU
tags:
  - matemáticas
  - matrices
  - factorización-lu
---
> [!note] Pregunta
> ¿Cómo se calcula el multiplicador que anula una entrada $a_{ik}^{(k)}$ bajo el pivote $u_{kk}\ne0$?
===
> [!important] Respuesta
> $m_{ik}=a_{ik}^{(k)}/u_{kk}$, usando la entrada actual de la matriz de trabajo. Se aplica $R_i\leftarrow R_i-m_{ik}R_k$.
```

```anki
deck: Matemáticas::Álgebra lineal::Factorización LU
tags:
  - matemáticas
  - matrices
  - factorización-lu
---
> [!note] Pregunta
> ¿Qué representan las entradas de $L$ situadas debajo de su diagonal en la convención $A=LU$ con diagonal de unos en $L$?
===
> [!important] Respuesta
> Los multiplicadores usados para eliminar las entradas debajo de los pivotes durante la reducción de $A$ a $U$.
```

## Construcción sin permutaciones

### Ejemplo trabajado: construir y comprobar $A=LU$

Factoricemos

$$
A=\begin{pmatrix}2&1\\4&3\end{pmatrix}.
$$

Para anular el $4$ situado bajo el primer pivote, el multiplicador es $m_{21}=4/2=2$. La operación $R_2\leftarrow R_2-2R_1$ transforma la segunda fila en

$$
(4,3)-2(2,1)=(0,1).
$$

Por tanto,

$$
U=\begin{pmatrix}2&1\\0&1\end{pmatrix}.
$$

El multiplicador se coloca debajo de la diagonal de $L$:

$$
L=\begin{pmatrix}1&0\\2&1\end{pmatrix}.
$$

La comprobación reconstruye la matriz inicial:

$$
LU=
\begin{pmatrix}1&0\\2&1\end{pmatrix}
\begin{pmatrix}2&1\\0&1\end{pmatrix}
=
\begin{pmatrix}2&1\\4&3\end{pmatrix}=A.
$$

En particular, la segunda fila del producto es dos veces la primera fila de $U$ más la segunda: $2(2,1)+(0,1)=(4,3)$.

### Por qué en $L$ aparece el multiplicador con ese signo

La matriz que **elimina** el $4$ del ejemplo es

$$
E=\begin{pmatrix}1&0\\-2&1\end{pmatrix},
\qquad EA=U.
$$

Para recuperar la segunda fila original hay que sumar lo que se restó. La operación inversa se representa mediante

$$
E^{-1}=\begin{pmatrix}1&0\\2&1\end{pmatrix}=L.
$$

Al multiplicar $EA=U$ por $E^{-1}$ a la izquierda, resulta $A=E^{-1}U=LU$. Por eso el $-2$ de la matriz de eliminación corresponde al $+2$ de $L$.[^mit]

### Justificación de la factorización

#### Propiedad

> [!teorema] De la eliminación a los factores
> Si una matriz cuadrada $A$ se transforma en una triangular superior $U$ mediante eliminación bajo los pivotes, sin intercambiar ni escalar filas, entonces admite una factorización
>
> $$
> \boxed{A=LU},
> $$
>
> con $L$ triangular inferior y diagonal de unos.[^mit][^nicholson]

#### Demostración

> [!demostracion] Demostración
> Sean $E_1,\ldots,E_p$ las matrices de las operaciones, en el orden en que se aplican. Cada operación suma a una fila un múltiplo de una fila anterior. La eliminación completa se escribe
>
> $$
> E_p\cdots E_2E_1A=U.
> $$
>
> Cada $E_i$ es invertible: su inversa resta el múltiplo que antes se sumó. Al invertir el producto se invierte también el orden de los factores, por lo que
>
> $$
> A=E_1^{-1}E_2^{-1}\cdots E_p^{-1}U.
> $$
>
> Definimos $L=E_1^{-1}\cdots E_p^{-1}$. Cada factor es triangular inferior con diagonal de unos, pues sólo modifica una entrada situada bajo la diagonal.
>
> **El producto sigue siendo triangular inferior.** Sean $P,Q$ dos matrices triangulares inferiores de orden $n$. Por definición del producto,
>
> $$
> (PQ)_{ij}=\sum_{k=1}^{n}p_{ik}q_{kj}.
> $$
>
> Si $i<j$, un sumando no nulo exigiría $k\leq i$ —para que $p_{ik}\ne0$— y $k\geq j$ —para que $q_{kj}\ne0$—. Es imposible cumplir ambas condiciones. Por eso todas las entradas por encima de la diagonal son cero.
>
> **La diagonal sigue siendo unitaria.** En la entrada $(i,i)$, sólo puede contribuir el índice $k=i$. Si las diagonales de $P$ y $Q$ son de unos,
>
> $$
> (PQ)_{ii}=p_{ii}q_{ii}=1\cdot1=1.
> $$
>
> Aplicando este argumento a los factores de $L$, resulta que $L$ es triangular inferior con diagonal de unos y $A=LU$. $\blacksquare$

```anki
deck: Matemáticas::Álgebra lineal::Factorización LU
tags:
  - matemáticas
  - matrices
  - factorización-lu
---
> [!note] Pregunta
> Si la eliminación sin intercambios ni escalados da $E_p\cdots E_1A=U$, ¿qué producto constituye $L$?
===
> [!important] Respuesta
> $L=E_1^{-1}\cdots E_p^{-1}$, pues al deshacer la eliminación resulta $A=LU$.
```

```anki
deck: Matemáticas::Álgebra lineal::Factorización LU
tags:
  - matemáticas
  - factorización-lu
---
> [!note] Pregunta
> ¿Qué forma tiene el producto de dos matrices triangulares inferiores con diagonal de unos?
===
> [!important] Respuesta
> Es triangular inferior y su diagonal también es de unos: por encima de la diagonal todos los sumandos se anulan; en cada entrada diagonal sólo contribuye el producto de los dos unos.
```

### Procedimiento y condiciones de validez

> [!procedimiento] Construir los factores
> 1. Se comienza con una copia de $A$ como matriz de trabajo y con $L=I_n$.
> 2. En la columna $k$, se calcula cada $m_{ik}$ usando el pivote y las entradas actuales.
> 3. Se hace $R_i\leftarrow R_i-m_{ik}R_k$ y se guarda $m_{ik}$ en $L_{ik}$.
> 4. Tras eliminar por debajo de la diagonal, la matriz de trabajo es $U$. Se comprueba $LU=A$.

Este procedimiento, aplicado sin saltar etapas ni intercambiar filas, puede ejecutarse si los pivotes usados como divisores son no nulos:

$$
u_{kk}\ne0,
\qquad k\in\{1,\ldots,n-1\}.
$$

La última entrada $u_{nn}$ no se usa para eliminar otra fila. Puede ser cero aunque la factorización ya esté construida. Para resolver cualquier segundo miembro con solución única sí se necesita que **toda la diagonal de $U$ sea no nula**.[^nicholson]

```anki
deck: Matemáticas::Álgebra lineal::Factorización LU
tags:
  - matemáticas
  - matrices
  - factorización-lu
---
> [!note] Pregunta
> ¿Qué condición permite calcular todos los multiplicadores del algoritmo LU sin intercambios, para una matriz de orden $n$?
===
> [!important] Respuesta
> Que los pivotes usados como divisores, $u_{11},\ldots,u_{n-1,n-1}$, sean no nulos. Para tener solución única en la sustitución final también se requiere $u_{nn}\ne0$.
```

## Resolver sistemas con los factores

Si $A=LU$, la ecuación $A\mathbf x=\mathbf b$ se escribe $L(U\mathbf x)=\mathbf b$. Introducimos la columna auxiliar $\mathbf y=U\mathbf x$ y resolvemos en este orden:[^nicholson]

$$
L\mathbf y=\mathbf b,
$$

$$
U\mathbf x=\mathbf y.
$$

### Sustitución hacia delante

> [!definicion] Sustitución hacia delante
> Resuelve un sistema triangular inferior comenzando por la primera ecuación. Cada nueva incógnita se calcula con los valores obtenidos en las filas anteriores.

Como la diagonal de $L$ vale $1$, la primera ecuación determina $y_1$ directamente; la segunda determina $y_2$ a partir de $y_1$, y así sucesivamente.

### Ejemplo: calcular la columna auxiliar

Con los factores del ejemplo y

$$
\mathbf b=\begin{pmatrix}5\\11\end{pmatrix},
$$

el sistema $L\mathbf y=\mathbf b$ es

$$
\begin{pmatrix}1&0\\2&1\end{pmatrix}
\begin{pmatrix}y_1\\y_2\end{pmatrix}
=\begin{pmatrix}5\\11\end{pmatrix}.
$$

La primera fila da $y_1=5$. La segunda exige $2y_1+y_2=11$, de donde

$$
y_2=11-2(5)=1.
$$

Por tanto,

$$
\mathbf y=\begin{pmatrix}5\\1\end{pmatrix}.
$$

```anki
deck: Matemáticas::Álgebra lineal::Factorización LU
tags:
  - matemáticas
  - matrices
  - factorización-lu
---
> [!note] Pregunta
> ¿En qué orden se resuelve $L\mathbf y=\mathbf b$ cuando $L$ es triangular inferior con diagonal de unos?
===
> [!important] Respuesta
> Desde la primera fila hacia la última: se calcula $y_1$, luego $y_2$ usando $y_1$, y se continúa por sustitución hacia delante.
```

### Sustitución hacia atrás

> [!definicion] Sustitución hacia atrás
> Resuelve un sistema triangular superior comenzando por la última ecuación. Cada incógnita se calcula con los valores ya obtenidos en las filas inferiores. La sustitución que determina una solución única requiere entradas diagonales no nulas.

### Ejemplo: obtener la solución del sistema original

Ahora resolvemos $U\mathbf x=\mathbf y$:

$$
\begin{pmatrix}2&1\\0&1\end{pmatrix}
\begin{pmatrix}x_1\\x_2\end{pmatrix}
=\begin{pmatrix}5\\1\end{pmatrix}.
$$

La última fila da $x_2=1$. Al sustituirlo en la primera,

$$
2x_1+1=5
\quad\Longrightarrow\quad
x_1=2.
$$

Así,

$$
\boxed{\mathbf x=\begin{pmatrix}2\\1\end{pmatrix}}.
$$

Comprobamos con la matriz original:

$$
A\mathbf x=
\begin{pmatrix}2&1\\4&3\end{pmatrix}
\begin{pmatrix}2\\1\end{pmatrix}
=
\begin{pmatrix}5\\11\end{pmatrix}=\mathbf b.
$$

```anki
deck: Matemáticas::Álgebra lineal::Factorización LU
tags:
  - matemáticas
  - matrices
  - factorización-lu
---
> [!note] Pregunta
> ¿En qué orden se resuelve $U\mathbf x=\mathbf y$ cuando $U$ es triangular superior con diagonal no nula?
===
> [!important] Respuesta
> Desde la última fila hacia la primera, calculando cada incógnita a partir de las que ya se conocen: sustitución hacia atrás.
```

### Reutilizar la factorización

Si cambia $\mathbf b$ pero se mantiene $A$, los factores $L$ y $U$ siguen siendo los mismos. Sólo se repiten las dos sustituciones. La eliminación, que depende de los coeficientes de $A$, se hace una sola vez.[^nicholson]

```anki
deck: Matemáticas::Álgebra lineal::Factorización LU
tags:
  - matemáticas
  - matrices
  - factorización-lu
---
> [!note] Pregunta
> Conocidos $L$ y $U$, ¿qué hay que repetir para resolver otro sistema con la misma matriz $A$ y un segundo miembro distinto?
===
> [!important] Respuesta
> Sólo las sustituciones $L\mathbf y=\mathbf b$ y $U\mathbf x=\mathbf y$, en ese orden; no se repite la eliminación de $A$.
```

## Pivoteo y límites de la factorización

### Qué significa encontrar un pivote nulo

Si el divisor $u_{kk}$ es cero, la fórmula del multiplicador no puede aplicarse. Un intercambio con una fila inferior que tenga una entrada no nula en esa columna permite continuar la eliminación.

> [!advertencia] Un pivote nulo no decide por sí solo la invertibilidad
> Que el procedimiento sin intercambios se detenga no prueba que $A$ sea singular. Tampoco excluye por sí solo cualquier igualdad $A=LU$: hay que examinar la matriz y la etapa que se intenta realizar.

#### Ejemplo: una matriz invertible que exige intercambio

$$
A=\begin{pmatrix}0&1\\1&0\end{pmatrix}.
$$

Es invertible, porque $A^2=I_2$. Sin embargo, la entrada inicial $a_{11}=0$ impide eliminar el $1$ que tiene debajo mediante la división habitual.

En este caso tampoco puede existir $A=LU$ con $L$ inferior de diagonal unitaria: la entrada $(1,1)$ del producto sería $u_{11}=0$, y entonces la entrada $(2,1)$ sería $\ell_{21}u_{11}=0$, en contradicción con $a_{21}=1$.

#### Ejemplo: una diagonal nula que no impide factorizar

Para la matriz ya triangular

$$
T=\begin{pmatrix}0&1\\0&0\end{pmatrix},
$$

existe la factorización $T=I_2T$. No hace falta dividir por el cero de la primera posición para anular la entrada inferior, porque ésta ya es cero. La factorización existe aunque $T$ sea singular. Estos dos ejemplos separan la existencia de factores triangulares, la posibilidad de usar una división concreta y la invertibilidad.[^nicholson]

```anki
deck: Matemáticas::Álgebra lineal::Factorización LU
tags:
  - matemáticas
  - matrices
  - factorización-lu
---
> [!note] Pregunta
> ¿Encontrar un pivote nulo en el algoritmo LU sin intercambios demuestra que la matriz es singular?
===
> [!important] Respuesta
> No. Impide esa división, pero una matriz invertible puede necesitar un intercambio. Hay que distinguir el fallo de ese paso del algoritmo de la invertibilidad de la matriz.
```

### Factorización con permutación

> [!definicion] Factorización con permutación de filas
> Los intercambios de filas se reúnen en una matriz de permutación $P$. Con la convención de actuar sobre $A$ por la izquierda, la factorización se escribe
>
> $$
> \boxed{PA=LU}.
> $$
>
> Es $PA$, la matriz con las filas permutadas, la que se descompone en los factores triangulares.[^nicholson]

Para la matriz de intercambio del ejemplo, tomar $P=A$ da $PA=I_2$; basta elegir $L=U=I_2$.

Al resolver un sistema, la misma permutación debe aplicarse al segundo miembro:

$$
A\mathbf x=\mathbf b
\quad\Longleftrightarrow\quad
PA\mathbf x=P\mathbf b.
$$

Por tanto, los dos sistemas triangulares pasan a ser

$$
L\mathbf y=P\mathbf b,
\qquad U\mathbf x=\mathbf y.
$$

```anki
deck: Matemáticas::Álgebra lineal::Factorización LU
tags:
  - matemáticas
  - matrices
  - factorización-lu
---
> [!note] Pregunta
> ¿Qué representa $P$ en la factorización $PA=LU$?
===
> [!important] Respuesta
> La permutación de filas necesaria para factorizar: $PA$ es la matriz original con las filas en el nuevo orden.
```

```anki
deck: Matemáticas::Álgebra lineal::Factorización LU
tags:
  - matemáticas
  - matrices
  - factorización-lu
---
> [!note] Pregunta
> Si se conoce $PA=LU$, ¿qué dos sistemas se resuelven para encontrar la solución de $A\mathbf x=\mathbf b$?
===
> [!important] Respuesta
> Primero $L\mathbf y=P\mathbf b$ y después $U\mathbf x=\mathbf y$. La permutación también afecta al segundo miembro.
```

## Conexión con la resolución de sistemas

Con $L$ invertible, $A=LU$ tiene el mismo rango que $U$. Si todas las entradas diagonales de la triangular $U$ son no nulas, hay un pivote en cada columna y las dos sustituciones determinan una única solución para cualquier segundo miembro. Si alguna es cero, hay que estudiar la compatibilidad y las posibles variables libres mediante los criterios de [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa|rango e invertibilidad]].[^nicholson]

## 📚 Fuentes

### Material base aportado

No se ha aportado material específico de FCUL sobre factorización LU. Este desarrollo corresponde a una ampliación académica externa.

### Ampliación académica

[^mit]: Gilbert Strang, MIT OpenCourseWare, [*Factorization into A = LU*, resumen de la sesión 1.4, pp. 1–3](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/c5961452fbb31f8a0b34ecd0ffc5cdc4_MIT18_06SCF11_Ses1.4sum.pdf). Construcción de $L$ mediante las inversas de las matrices de eliminación, diagonal unitaria y conservación de multiplicadores. El ejemplo numérico se desarrolla con los datos propios de esta nota.
[^nicholson]: W. Keith Nicholson, [*Linear Algebra with Applications*, §2.7, “LU-Factorization”](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_%28Nicholson%29/02%3A_Matrix_Algebra/2.07%3A_LU-Factorization). Dos sustituciones, argumento mediante matrices elementales y factorización con permutación. El libro admite otra normalización de los factores; aquí se mantiene la convención de diagonal unitaria en $L$ descrita por Strang.

## 🧑‍🏫 Prompt para tutor conversacional

Usa los ejemplos de esta nota, sin generar ejercicios nuevos. Pide factorizar la matriz $2\times2$ y justificar el signo del multiplicador en $L$ mediante la operación inversa. Antes de resolver el sistema, comprueba que el estudiante sabe qué representa $\mathbf y$ y por qué se resuelve primero $L\mathbf y=\mathbf b$.

Pide verificar $LU=A$ y la solución en $A\mathbf x=\mathbf b$. Contrasta los dos ejemplos con diagonal nula: el estudiante debe distinguir una división no permitida, la existencia de LU y la invertibilidad. Para $PA=LU$, exige explicar por qué el segundo miembro también se permuta. Ofrece pistas graduales y detente en el primer paso que no pueda justificar.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
