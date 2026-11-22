---
title: Matrices elementales y operaciones elementales
aliases:
  - Transformaciones elementales por filas
  - Matrices elementales
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
  - Sistemas de ecuaciones lineales
tipo:
  - teoría
  - definición
  - procedimiento
nivel: universitario-introductorio
estado: borrador
capa: curricular
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices|Matrices]]"
  - "[[Matemáticas/Álgebra lineal/Matrices|Matrices]]"
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones]]"
desbloquea:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan|Eliminación de Gauss y Gauss-Jordan]]"
fsrs_goal: Ejecutar y deshacer los tres tipos de operaciones por filas, justificar que conservan soluciones, construir su matriz elemental y demostrar que actúa por la izquierda, y representar una secuencia mediante B=QA y el producto ordenado de sus matrices elementales.
simbolos:
  - L_i\leftrightarrow L_j
  - L_i\leftarrow cL_i
  - L_i\leftarrow L_i+cL_j
  - E_{ij}
  - "[A\\mid\\mathbf b]"
tags:
  - matemáticas
  - álgebra-lineal
  - sistemas-lineales
  - operaciones-elementales
  - curricular
---

# Matrices elementales y operaciones elementales

## Operaciones sobre las ecuaciones

En el sistema

$$
\begin{cases}
2x+y=5,\\
x-y=1,
\end{cases}
$$

podemos eliminar $x$ de la primera ecuación restándole dos veces la segunda:

$$
(2x+y)-2(x-y)=5-2\cdot1.
$$

Los términos $2x$ y $-2x$ se anulan. Queda $3y=3$, de donde $y=1$. La ecuación que hemos conservado, $x-y=1$, da entonces $x=2$.

El sistema transformado contiene las ecuaciones
$$
	\begin{aligned}
	 3y & =3  \\
	 x-y & =1
	\end{aligned}
$$

>[!intuicion] Cambios siempre equivalentes
>Podemos recuperar la primera ecuación original sumando a $3y=3$ dos veces la segunda ecuación. Es simplemente, usar la operación inversa a la aplicada inicialmente.
>Por eso la transformación conserva las soluciones en ambos sentidos.


Para escribir las operaciones sobre los coeficientes y los términos independientes utilizaremos la [[Matemáticas/Álgebra lineal/Matriz ampliada|matriz ampliada]].

### La matriz ampliada

Para seguir esas transformaciones sin reescribir las letras en cada línea, transformaremos nuestro sistema de ecuaciones en una [[Matriz ampliada|matriz ampliada]]. Escribimos los coeficientes que acompañan a las incógnitas $x,y$ en el estricto orden que aparecen en el sistema original y términos independientes en la ampliación:

$$
\left[\begin{array}{cc|c}
2&1&5\\
1&-1&1
\end{array}\right].
$$

Entonces así, cada fila representa una ecuación. Las columnas, en orden, representan los coeficientes de $x$, de $y$ y el término independiente.

Llamemos $L_1$ y $L_2$ a la primera y la segunda fila. Intercambiamos las filas en el paso $t_1$; en el paso $t_2$, restamos dos veces la primera a la segunda:

$$
\left[\begin{array}{cc|c}2&1&5\\1&-1&1\end{array}\right]
\xrightarrow[t_1:\,L_1\leftrightarrow L_2]{}
\left[\begin{array}{cc|c}1&-1&1\\2&1&5\end{array}\right]
\xrightarrow[t_2:\,L_2\leftarrow L_2-2L_1]{}
\left[\begin{array}{cc|c}1&-1&1\\0&3&3\end{array}\right].
$$

La resta afecta a la fila completa, incluido el término independiente:

$$
(2,1\mid5)-2(1,-1\mid1)=(0,3\mid3).
$$

La segunda fila expresa ahora $3y=3$.[^a5]

![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/02-operaciones-fila-completa.svg|*La operación actúa sobre los coeficientes y el término independiente de la ecuación.*]]

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/02-operaciones-fila-completa.excalidraw|Abrir figura editable]]

Entonces, concluímos:

> [!definicion] Matriz ampliada
> Si el sistema es $A\mathbf x=\mathbf b$, su [[Matemáticas/Álgebra lineal/Matriz ampliada|matriz ampliada]] es
>
> $$
> [A\mid\mathbf b].
> $$
>
> Se obtiene añadiendo la columna de términos independientes $\mathbf b$ a la matriz de coeficientes $A$, sin cambiar el orden de ecuaciones ni de incógnitas.[^a4]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - matriz-ampliada
---
> [!note] Pregunta
> ¿Cómo se construye la matriz ampliada de un sistema lineal?
===
> [!important] Respuesta
> Se añade la columna de términos independientes a la matriz de coeficientes: $[A\mid\mathbf b]$, manteniendo el orden de ecuaciones e incógnitas.
```

Usaremos coeficientes en un [[Matemáticas/Estructuras algebraicas/Cuerpos|cuerpo]] $K=\mathbb R$ o $K=\mathbb C$. Si el sistema tiene $m$ ecuaciones y $n$ incógnitas, entonces

$$
A\in M_{m\times n}(K),\qquad \mathbf x\in K^n,\qquad \mathbf b\in K^m.
$$

La matriz ampliada tiene $m$ filas y $n+1$ columnas. La columna independiente se opera junto con las columnas de coeficientes, pues cada fila debe seguir representando una ecuación equivalente.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - matriz-ampliada
---
> [!note] Pregunta
> ¿Qué tamaño tiene la matriz ampliada de un sistema de $m$ ecuaciones con $n$ incógnitas?
===
> [!important] Respuesta
> Tiene $m$ filas y $n+1$ columnas: $n$ de coeficientes y una de términos independientes.
```

## Operaciones elementales por filas

Sea $A\in M_{m\times n}(K)$. Escribimos $L_i$ para su fila $i$, con $1\le i\le m$.

Sobre ellas podemos realizar tres [[Matemáticas/Álgebra lineal/Operaciones elementales por filas|operaciones elementales]]:

- [[#Intercambio de filas|intercambiar dos filas]]
- [[#Multiplicar por un escalar no nulo|multiplicar una por un escalar no nulo]]
- [[#Reemplazo de una fila|sumarle a una fila un múltiplo de otra]]

En una [[Matemáticas/Álgebra lineal/Matriz ampliada|matriz ampliada]] cada una transforma una ecuación del sistema.

Una flecha indica qué operación transforma una matriz en otra. Si llamamos $t$ a esa operación, escribimos

$$
A\xrightarrow[t]{}B.
$$

Por ejemplo, $t:L_1\leftrightarrow L_2$ significa intercambiar las dos primeras filas. En una cadena, $t_1,t_2,\ldots$ nombrarán las operaciones en el orden en que se aplican.[^a5]

### Intercambio de filas

> [!definicion] Intercambio
> Para $i\ne j$, la operación
>
> $$
> L_i\longleftrightarrow L_j
> $$
>
> intercambia las filas $i$ y $j$.[^a5]

El coeficiente de $x$ en la segunda ecuación es $1$. Llevamos esa ecuación a la primera fila para utilizarlo como [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#Pivote|pivote]]:

$$
\left[\begin{array}{cc|c}2&1&5\\1&-1&1\end{array}\right]
\xrightarrow{L_1\leftrightarrow L_2}
\left[\begin{array}{cc|c}1&-1&1\\2&1&5\end{array}\right].
$$

La fila $(1,-1\mid1)$ pasa a la primera posición y $(2,1\mid5)$, a la segunda. Cualquier pareja $(x,y)$ que satisfacía ambas ecuaciones sigue satisfaciéndolas en este orden.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - operaciones-fila
---
> [!note] Pregunta
> ¿Qué hace la operación elemental $L_i\leftrightarrow L_j$?
===
> [!important] Respuesta
> Intercambia las filas $i$ y $j$; en el sistema, reordena esas ecuaciones.
```

### Multiplicar por un escalar no nulo

> [!definicion] Escalado
> Para $c\in K\setminus\{0\}$, la operación
>
> $$
> L_i\longleftarrow cL_i
> $$
>
> multiplica todas las entradas de la fila $i$ por $c$.[^a5]

Para convertir el coeficiente $2$ de $x$ en un $1$, multiplicamos la primera fila por $1/2$:

$$
\left[\begin{array}{cc|c}2&1&5\\1&-1&1\end{array}\right]
\xrightarrow{L_1\leftarrow\frac12L_1}
\left[\begin{array}{cc|c}1&1/2&5/2\\1&-1&1\end{array}\right].
$$

El cálculo afecta a las tres entradas: $2/2=1$, $1/2$ y $5/2$. Multiplicar de nuevo la fila por $2$ devuelve la ecuación inicial.

> [!danger] El factor cero no permite volver atrás
> Si multiplicásemos $2x+y=5$ por cero, obtendríamos $0=0$, que cumple cualquier pareja $(x,y)$. Habríamos eliminado una condición del sistema; no podríamos recuperarla dividiendo por cero.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - operaciones-fila
---
> [!note] Pregunta
> ¿Qué hace el escalado elemental $L_i\leftarrow cL_i$ y qué condición debe cumplir $c$?
===
> [!important] Respuesta
> Multiplica la fila $i$ por $c$, con $c\in K\setminus\{0\}$.
```

### Reemplazo de una fila

> [!definicion] Reemplazo
> Para $\lambda\in K$ e $i\ne j$, la operación
>
> $$
> L_i\leftarrow L_i+\lambda L_j
> $$
>
> sustituye la fila $i$ por su suma con $\lambda$ veces la fila $j$. La fila $j$ permanece intacta.[^a5]

Tras intercambiar las ecuaciones del ejemplo, restamos dos veces la primera a la segunda para eliminar $x$ de esta última:

$$
\left[\begin{array}{cc|c}1&-1&1\\2&1&5\end{array}\right]
\xrightarrow{L_2\leftarrow L_2-2L_1}
\left[\begin{array}{cc|c}1&-1&1\\0&3&3\end{array}\right].
$$

Las tres entradas de la nueva fila se obtienen con la misma operación:

$$
(2,1\mid5)-2(1,-1\mid1)=(0,3\mid3).
$$

Así desaparece $x$ de la segunda ecuación. La primera fila no se ha modificado; si ahora sumamos dos veces esa fila a la segunda, recuperamos $(2,1\mid5)$.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - operaciones-fila
---
> [!note] Pregunta
> ¿Qué hace el reemplazo elemental $L_i\leftarrow L_i+\lambda L_j$?
===
> [!important] Respuesta
> Suma $\lambda$ veces la fila $j$ a la fila $i$, con $i\ne j$ y $\lambda \in K$.
```

### Reversibilidad de las operaciones

#### Propiedad

> [!teorema] Cada operación elemental se puede deshacer
> Si una operación elemental $t$ transforma $A$ en $B$, existe una operación elemental $t'$ que devuelve $B$ a $A$:
>
> $$
> A\xrightarrow[t]{}B,
> \qquad B\xrightarrow[t']{}A.
> $$
>
> El símbolo $t'$ nombra la operación inversa.[^a5]

#### Demostración

> [!demostracion] Las tres operaciones inversas
> **Intercambio.** Repetir el intercambio devuelve cada fila a su posición:
>
> $$
> A\xrightarrow[L_i\leftrightarrow L_j]{}B
> \xrightarrow[L_i\leftrightarrow L_j]{}A.
> $$
>
> **Escalado.** Si $\lambda\ne0$, el segundo factor puede ser $1/\lambda$:
>
> $$
> A\xrightarrow[L_i\leftarrow\lambda L_i]{}B
> \xrightarrow[L_i\leftarrow\frac1\lambda L_i]{}A.
> $$
>
> La fila original se recupera porque $(1/\lambda)(\lambda L_i)=L_i$.
>
> **Reemplazo.** La fila $L_j$ no cambia cuando modificamos $L_i$, con $i\ne j$. Podemos restar después el mismo múltiplo:
>
> $$
> A\xrightarrow[L_i\leftarrow L_i+\lambda L_j]{}B
> \xrightarrow[L_i\leftarrow L_i-\lambda L_j]{}A.
> $$
>
> En efecto, $(L_i+\lambda L_j)-\lambda L_j=L_i$; las demás filas permanecen iguales. Los tres tipos de operación tienen, por tanto, una operación inversa. $\blacksquare$[^a5]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - operaciones-fila
  - reversibilidad
---
> [!note] Pregunta
> ¿Qué significa que una operación elemental por filas sea reversible?
===
> [!important] Respuesta
> Que existe otra operación elemental que la deshace: si $A\xrightarrow[t]{}B$, entonces $B\xrightarrow[t']{}A$.
```

### Equivalencia por filas

Partimos de $A$ y aplicamos una operación elemental por filas, $t_1$, para obtener $A_1$. Sobre $A_1$ aplicamos la siguiente, $t_2$, y seguimos hasta llegar a $B$. Si realizamos $p\ge1$ operaciones, la cadena completa es:

$$
A=A_0\xrightarrow[t_1]{}A_1
\xrightarrow[t_2]{}\cdots
\xrightarrow[t_p]{}A_p=B.
$$

Para volver a $A$, empezamos por deshacer la última operación. Después deshacemos la penúltima y continuamos en ese orden:

$$
B=A_p\xrightarrow[t'_p]{}A_{p-1}
\xrightarrow[t'_{p-1}]{}\cdots
\xrightarrow[t'_1]{}A_0=A.
$$

Cada $t'_k$ deshace $t_k$. Esta reversibilidad permite definir la equivalencia por filas sin distinguir cuál de las dos matrices fue el punto de partida.[^a5]

> [!definicion] Matrices equivalentes por filas
> Dos matrices del mismo tamaño son **equivalentes por filas** si una se obtiene de la otra mediante una secuencia finita de [[#Operaciones elementales por filas|operaciones elementales]]. Escribimos $A\longrightarrow B$.[^pres]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - equivalencia-por-filas
---
> [!note] Pregunta
> ¿Qué significa que dos matrices sean equivalentes por filas?
===
> [!important] Respuesta
> Una se obtiene de la otra mediante una secuencia finita de operaciones elementales por filas; la secuencia inversa permite recuperar la matriz inicial.
```

> [!consecuencia] El recorrido inverso
> Si $A\longrightarrow B$, también $B\longrightarrow A$. Una matriz es equivalente a sí misma mediante la secuencia vacía, sin aplicar ninguna operación.[^a5]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - operaciones-fila
  - reversibilidad
---
> [!note] Pregunta
> Si se aplican sucesivamente $t_1,t_2,\ldots,t_p$ a una matriz, ¿en qué orden se deshace la cadena?
===
> [!important] Respuesta
> Se aplican las operaciones inversas en orden contrario: primero $t'_p$, después $t'_{p-1}$ y finalmente $t'_1$.
```

### Sistemas equivalentes

> [!consecuencia] Sistemas equivalentes
> Dos sistemas son [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales|equivalentes]] si tienen ==exactamente el mismo conjunto de soluciones==.[^pres]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - sistemas-equivalentes
---
> [!note] Pregunta
> ¿Cuándo se dice que dos sistemas de ecuaciones son equivalentes?
===
> [!important] Respuesta
> Cuando tienen exactamente el mismo conjunto de soluciones.
```

### Conservación de las soluciones

#### Propiedad

> [!teorema] Conservación de las soluciones
> Las [[#Operaciones elementales por filas|operaciones elementales]] sobre la **[[#La matriz ampliada|matriz ampliada]] completa** producen [[#Sistemas equivalentes|sistemas equivalentes]] al original.[^pres]

#### Demostración

> [!intuicion] Explicación
> Consideremos el sistema $A\mathbf x=\mathbf b$ y apliquemos una operación a sus ecuaciones. Para comparar los conjuntos de soluciones, comprobamos que cada operación se puede deshacer.
>
> **[[#Intercambio de filas|Intercambio]].** Reordenar dos ecuaciones no cambia cuáles deben cumplirse: si se satisfacen todas antes del intercambio, se satisfacen todas después, y el intercambio inverso las devuelve a su orden inicial.
>
> **[[#Multiplicar por un escalar no nulo|Escalado]].** Multiplicar una ecuación por $c\ne0$ conserva sus soluciones, porque podemos dividir por $c$ para recuperar la ecuación original. La condición $c\ne0$ es esencial para que esa [[#Reversibilidad de las operaciones|operación inversa]] exista.
>
> **[[#Reemplazo de una fila|Reemplazo]].** Sustituimos la ecuación $i$ por ella misma más $c$ veces la ecuación $j$, sin alterar la ecuación $j$. Si ambas ecuaciones originales se cumplen, la nueva también. Recíprocamente, de la nueva ecuación podemos restar $c$ veces la ecuación $j$ y recuperar la ecuación $i$ original.
>
> Por tanto, cada transformación tiene el mismo [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales|conjunto de soluciones]] que el sistema inicial; una cadena finita también lo conserva, pues cada paso es reversible.[^pres]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - definición
---
> [!note] Pregunta
> ¿Por qué las operaciones elementales por filas conservan las soluciones de un sistema?
===
> [!important] Respuesta
> Cada operación se puede deshacer y conserva exactamente el conjunto de soluciones del sistema.
```

## Matrices elementales

> [!definicion] Matriz elemental
> Se llama [[Matemáticas/Álgebra lineal/Matriz elemental|matriz elemental]] de **orden n** a cualquier matriz que se obtenga aplicando ==una única operación elemental== por filas a una [[Matemáticas/Álgebra lineal/Matriz identidad|matriz identidad]] $I_n$.[^a5]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - matrices-elementales
  - definición
---
> [!note] Pregunta
> ¿Cómo se define una matriz elemental de orden $m$?
===
> [!important] Respuesta
> Es la matriz que se obtiene al aplicar una única operación elemental por filas a $I_m$.
```

#### Ejemplo — El mismo intercambio sobre la identidad y sobre $A$

Llamemos $t_1$ al intercambio $L_1\leftrightarrow L_3$. Aplicado a la identidad, construye la matriz elemental $P_{13}$:

$$
I_3=
\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}
\xrightarrow[t_1:\,L_1\leftrightarrow L_3]{}
P_{13}=
\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}.
$$

Sobre una matriz $A$ con tres filas, multiplicar por $P_{13}$ produce ese mismo intercambio:

$$
\underbrace{\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}}_{P_{13}}
\underbrace{\begin{pmatrix}1&2&0\\3&-1&4\\5&0&2\end{pmatrix}}_{A}
=
\underbrace{\begin{pmatrix}5&0&2\\3&-1&4\\1&2&0\end{pmatrix}}_{P_{13}A}.
$$

La primera y la tercera fila han intercambiado sus posiciones; la segunda no cambia. Podemos representar el cálculo sin volver a escribir el producto:

$$
\begin{pmatrix}1&2&0\\3&-1&4\\5&0&2\end{pmatrix}
\xrightarrow[t_1:\,L_1\leftrightarrow L_3]{}
\begin{pmatrix}5&0&2\\3&-1&4\\1&2&0\end{pmatrix}.
$$

> [!idea] El intercambio de filas mediante $P_{13}$
> **Multiplicar por $P_{13}$ a la izquierda equivale a aplicar $t_1$**, es decir, a intercambiar las filas primera y tercera:
>
> $$
> \boxed{t_1(A)=P_{13}A}.
> $$
>
> La matriz elemental $P_{13}=t_1(I_3)$ se construye haciendo ese intercambio en la identidad. Una vez construida, permite efectuarlo sobre cualquier $A\in M_{3\times n}(K)$: basta que $A$ tenga tres filas; no tiene que ser cuadrada.[^a5][^emdr]


### Multiplicación por la izquierda y operaciones elementales

#### Propiedad

> [!teorema] Una matriz elemental efectúa una operación por filas
> Sea $B$ el resultado de una [[#Operaciones elementales por filas|operación elemental]] sobre $A\in M_{m\times n}(K)$. Si $E$ se obtiene efectuando esa misma operación sobre $I_m$, entonces
>
> $$
> \boxed{B=EA}.
> $$
>
> El producto se realiza **por la izquierda**.[^a5][^emdr]

Llamemos $t$ a la operación elegida. La aplicamos a la identidad para construir $E$ y a la matriz $A$ para obtener $B$:

$$
\begin{aligned}
I_m&\xrightarrow[t]{}E=t(I_m),\\[4pt]
A&\xrightarrow[t]{}B=t(A).
\end{aligned}
$$

La propiedad afirma que **multiplicar por $E$ a la izquierda realiza la operación $t$ sobre $A$**:

$$
\boxed{t(A)=t(I_m)A=EA}.
$$

Así, $E$ se construye a partir de la identidad, pero su efecto al multiplicar es modificar las filas de $A$. En el ejemplo anterior, $t$ era el intercambio de las filas primera y tercera, y $E=P_{13}$.[^a5][^emdr]

#### Ejemplo — Multiplicar la segunda fila por dos

Sea $t_2$ la operación $L_2\leftarrow2L_2$. Primero la efectuamos sobre $I_2$:

$$
I_2=\begin{pmatrix}1&0\\0&1\end{pmatrix}
\xrightarrow[t_2:\,L_2\leftarrow2L_2]{}
E_2=\begin{pmatrix}1&0\\0&2\end{pmatrix}.
$$

Aplicamos ahora la matriz elemental a una matriz $A$ de dos filas y tres columnas:

$$
\underbrace{\begin{pmatrix}1&0\\0&2\end{pmatrix}}_{E_2}
\underbrace{\begin{pmatrix}1&2&-1\\3&4&2\end{pmatrix}}_A
=
\underbrace{\begin{pmatrix}1&2&-1\\6&8&4\end{pmatrix}}_{B_2=t_2(A)}.
$$

La primera fila queda igual; la segunda pasa de $(3,4,2)$ a $(6,8,4)$. ==$E_2$ se construye duplicando la segunda fila de la identidad y, al multiplicar, duplica la segunda fila de $A$==.[^a5][^emdr]

#### Ejemplo — Restar tres veces la primera fila a la segunda

Volvemos a partir de la misma $A$, sin aplicar el resultado anterior. Sea $t_3$ la operación $L_2\leftarrow L_2-3L_1$. Su matriz elemental se construye así:

$$
I_2=\begin{pmatrix}1&0\\0&1\end{pmatrix}
\xrightarrow[t_3:\,L_2\leftarrow L_2-3L_1]{}
E_3=\begin{pmatrix}1&0\\-3&1\end{pmatrix}.
$$

Multiplicamos por $E_3$ a la izquierda:

$$
\underbrace{\begin{pmatrix}1&0\\-3&1\end{pmatrix}}_{E_3}
\underbrace{\begin{pmatrix}1&2&-1\\3&4&2\end{pmatrix}}_A
=
\underbrace{\begin{pmatrix}1&2&-1\\0&-2&5\end{pmatrix}}_{B_3=t_3(A)}.
$$

La nueva segunda fila se obtiene mediante

$$
(3,4,2)-3(1,2,-1)=(0,-2,5).
$$

Los coeficientes $(-3,1)$ de la segunda fila de $E_3$ indican la combinación $-3L_1+L_2$. La primera fila de $A$ no cambia.[^a5][^emdr]

#### Lectura de una fila del producto

> [!opcional]- Ampliación — Cómo una fila de $E$ combina las filas de $A$
> Partimos de la identidad y le restamos cinco veces la tercera fila a la segunda:
>
> $$
> I_3=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}
> \xrightarrow[L_2\leftarrow L_2-5L_3]{}
> E=\begin{pmatrix}1&0&0\\0&1&-5\\0&0&1\end{pmatrix}.
> $$
>
> Multiplicamos esa matriz elemental por $A$:
>
> $$
> \underbrace{\begin{pmatrix}1&0&0\\0&1&-5\\0&0&1\end{pmatrix}}_E
> \underbrace{\begin{pmatrix}1&2\\3&4\\1&-1\end{pmatrix}}_A
> =\underbrace{\begin{pmatrix}1&2\\-2&9\\1&-1\end{pmatrix}}_{EA}.
> $$
>
> En la segunda fila de $E$ leemos los coeficientes $(0,1,-5)$. Con ellos se forma la segunda fila del resultado:
>
> $$
> \underbrace{0(1,2)+1(3,4)-5(1,-1)}_{0L_1+L_2-5L_3}
> =(-2,9).
> $$
>
> Las filas primera y tercera de $A$ quedan iguales. Sólo la segunda se sustituye por $L_2-5L_3$.
>
> En general, si $E\in M_m(K)$ y $A\in M_{m\times n}(K)$, el producto tiene tamaño $m\times n$. La fila $r$ de $E$ proporciona los coeficientes para combinar las filas de $A$; en la columna $k$, esto se escribe
>
> $$
> (EA)_{rk}=\sum_{\ell=1}^{m}e_{r\ell}a_{\ell k},
> \qquad 1\le r\le m,\quad 1\le k\le n.
> $$
>
> ![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/02-matriz-elemental-izquierda.svg|La fila de E contiene los coeficientes de la combinación de filas de A.]]
>
> [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/02-matriz-elemental-izquierda.excalidraw|Abrir figura editable]].[^lectura-filas]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - matrices-elementales
---
> [!note] Pregunta
> ¿En qué lado se multiplica una matriz por la matriz elemental para efectuar una operación sobre sus filas?
===
> [!important] Respuesta
> Por la izquierda: $EA$ efectúa sobre $A$ la operación con la que se obtuvo $E$ a partir de $I_m$.
```

> [!opcional]- Tarjetas de la ampliación
> ![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/assets/anki/ALGA — Tarjetas de ampliación#^fila-matriz-elemental]]

#### Demostración de las propiedades de [[Matemáticas/Álgebra lineal/Operaciones elementales por filas|operaciones elementales por filas]]

Hay tres tipos de operación elemental por filas. Demostramos $EA=t(A)$ para cada uno: [[#Intercambiar las filas $i$ y $j$|intercambio]], [[#Multiplicar una fila por un escalar no nulo|multiplicación de una fila por un escalar no nulo]] y [[#Sumar a una fila un múltiplo de otra|suma de un múltiplo de otra fila]]. Estos tres casos completan la prueba de la proposición general.[^tpc-elementales]


### Intercambiar las filas $i$ y $j$

#### Propiedad

> [!propiedad] Matriz elemental de intercambio
> Sean $A\in M_{m\times n}(K)$ e $i,j\in\{1,\ldots,m\}$, con $i\ne j$. El mismo intercambio construye $P_{ij}$ a partir de la identidad y transforma $A$ en $B$:
>
> $$
> \begin{aligned}
> I_m&\xrightarrow[L_i\leftrightarrow L_j]{}P_{ij},\\[4pt]
> A&\xrightarrow[L_i\leftrightarrow L_j]{}B.
> \end{aligned}
> $$
>
> Ambas maneras de efectuar el intercambio coinciden:
>
> $$
> \boxed{B=P_{ij}A}.
> $$
>
> Las filas $i$ y $j$ cambian de posición; las demás se conservan.[^a5][^emdr]

#### Demostración

> [!demostracion] Caso 1 — Intercambio de filas
> Supongamos $i\ne j$ y que $P_{ij}$ se obtiene de $I_m$ intercambiando sus filas $i$ y $j$. La fila $i$ de $P_{ij}$ tiene un $1$ en la columna $j$ y ceros en las demás. Para cada columna $k\in\{1,\ldots,n\}$,
>
> $$
> (P_{ij}A)_{ik}=\sum_{\ell=1}^{m}(P_{ij})_{i\ell}a_{\ell k}=a_{jk}.
> $$
>
> La fila $j$ de $P_{ij}$ tiene un $1$ en la columna $i$, de modo que
>
> $$
> (P_{ij}A)_{jk}=a_{ik}.
> $$
>
> Si $r$ es distinta de $i$ y $j$, la fila $r$ de $P_{ij}$ coincide con la fila $r$ de $I_m$, por lo que $(P_{ij}A)_{rk}=a_{rk}$. Así, las filas $i$ y $j$ se intercambian y las restantes quedan iguales. El producto coincide con $B$ en todas las entradas; por el criterio de igualdad de matrices, $P_{ij}A=B$. $\blacksquare$[^emdr]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - matrices-elementales
  - intercambio
---
> [!note] Pregunta
> ¿Qué matriz elemental representa el intercambio de las filas $i$ y $j$ de una matriz $A$ por multiplicación a la izquierda?
===
> [!important] Respuesta
> $P_{ij}$, obtenida al intercambiar las mismas filas de $I_m$; entonces $P_{ij}A$ intercambia las filas $i$ y $j$ de $A$.
```

### Multiplicar una fila por un escalar no nulo

#### Propiedad

> [!propiedad] Matriz elemental de escalado
> Sean $A\in M_{m\times n}(K)$, $i\in\{1,\ldots,m\}$ y $\lambda\in K\setminus\{0\}$. Multiplicamos la fila $i$ por el mismo escalar en las dos matrices:
>
> $$
> \begin{aligned}
> I_m&\xrightarrow[L_i\leftarrow\lambda L_i]{}D_i(\lambda),\\[4pt]
> A&\xrightarrow[L_i\leftarrow\lambda L_i]{}B.
> \end{aligned}
> $$
>
> En $D_i(\lambda)$ sólo cambia la entrada diagonal $(i,i)$, que pasa de $1$ a $\lambda$. Entonces
>
> $$
> \boxed{B=D_i(\lambda)A}.
> $$
>
> Sólo se escala la fila $i$ de $A$; las demás permanecen iguales.[^a5][^emdr]

#### Demostración

> [!demostracion] Caso 2 — Multiplicación de una fila por un escalar
> Sea $\lambda\in K\setminus\{0\}$ y sea $D_i(\lambda)$ la [[Matemáticas/Álgebra lineal/Matriz identidad|matriz identidad]] con su fila $i$ multiplicada por $\lambda$. La fila $i$ contiene $\lambda$ en la columna $i$ y ceros en las demás. Por tanto, para cada $k\in\{1,\ldots,n\}$,
>
> $$
> (D_i(\lambda)A)_{ik}=\sum_{\ell=1}^{m}(D_i(\lambda))_{i\ell}a_{\ell k}=\lambda a_{ik}.
> $$
>
> Si $r\ne i$, la fila $r$ de $D_i(\lambda)$ no cambia respecto de la identidad, y $(D_i(\lambda)A)_{rk}=a_{rk}$. El producto coincide con $B$ en cada posición: $D_i(\lambda)A=B$. El factor no nulo permite deshacer el escalado. $\blacksquare$[^emdr]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - matrices-elementales
  - escalado
---
> [!note] Pregunta
> ¿Qué matriz elemental representa $L_i\leftarrow\lambda L_i$ para $\lambda\ne0$?
===
> [!important] Respuesta
> $D_i(\lambda)$, la identidad con la entrada diagonal $(i,i)$ sustituida por $\lambda$; $D_i(\lambda)A$ escala solo la fila $i$.
```

### Sumar a una fila un múltiplo de otra

#### Propiedad

> [!propiedad] Matriz elemental de reemplazo
> Sean $A\in M_{m\times n}(K)$, $i,j\in\{1,\ldots,m\}$, $i\ne j$ y $\lambda\in K$. Sumamos $\lambda$ veces la fila $j$ a la fila $i$:
>
> $$
> \begin{aligned}
> I_m&\xrightarrow[L_i\leftarrow L_i+\lambda L_j]{}E_{ij}(\lambda),\\[4pt]
> A&\xrightarrow[L_i\leftarrow L_i+\lambda L_j]{}B.
> \end{aligned}
> $$
>
> En $E_{ij}(\lambda)$ aparece $\lambda$ en la posición $(i,j)$, que antes era cero. Se cumple
>
> $$
> \boxed{B=E_{ij}(\lambda)A}.
> $$
>
> Cambia la fila $i$ de $A$; la fila $j$, usada para calcularla, queda intacta.[^a5][^emdr]

#### Demostración

> [!demostracion] Caso 3 — Suma de un múltiplo de otra fila
> Sean $i\ne j$ y $\lambda\in K$. La fila $i$ de $E_{ij}(\lambda)$ se obtiene sumando la fila $i$ de $I_m$ con $\lambda$ veces su fila $j$. Para cada columna $k\in\{1,\ldots,n\}$,
>
> $$
> (E_{ij}(\lambda)A)_{ik}=\sum_{\ell=1}^{m}\bigl((I_m)_{i\ell}+\lambda(I_m)_{j\ell}\bigr)a_{\ell k}.
> $$
>
> La distributividad separa las dos contribuciones:
>
> $$
> \begin{aligned}
> (E_{ij}(\lambda)A)_{ik}&=\sum_{\ell=1}^{m}(I_m)_{i\ell}a_{\ell k}\\
> &\quad+\lambda\sum_{\ell=1}^{m}(I_m)_{j\ell}a_{\ell k}.
> \end{aligned}
> $$
>
> La primera suma selecciona la entrada $a_{ik}$ de la fila $i$; la segunda selecciona $a_{jk}$ de la fila $j$. Por tanto,
>
> $$
> (E_{ij}(\lambda)A)_{ik}=a_{ik}+\lambda a_{jk}.
> $$
>
> Para $r\ne i$, la fila $r$ de $E_{ij}(\lambda)$ sigue siendo la fila $r$ de la identidad, así que $(E_{ij}(\lambda)A)_{rk}=a_{rk}$. El producto tiene las mismas entradas que $B$: $E_{ij}(\lambda)A=B$. La condición $i\ne j$ mantiene intacta la fila fuente, necesaria para deshacer el reemplazo. $\blacksquare$[^emdr]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - matrices-elementales
  - reemplazo
---
> [!note] Pregunta
> ¿Qué matriz elemental representa $L_i\leftarrow L_i+\lambda L_j$ con $i\ne j$?
===
> [!important] Respuesta
> $E_{ij}(\lambda)$ es la identidad con $\lambda$ en la posición $(i,j)$; por la izquierda suma $\lambda$ veces la fila $j$ a la fila $i$.
```

### Composición de operaciones elementales

#### Propiedad

> [!propiedad] Una secuencia de operaciones y su matriz
> Sea $A\in M_{m\times n}(K)$ y supongamos que $p\ge1$ operaciones elementales $t_1,\ldots,t_p$ producen la cadena
>
> $$
> A=A_0\xrightarrow[t_1]{}A_1
> \xrightarrow[t_2]{}A_2
> \xrightarrow[t_3]{}\cdots
> \xrightarrow[t_p]{}A_p=B,
> $$
>
> con $A_1,\ldots,A_p\in M_{m\times n}(K)$. Sean $E_1,\ldots,E_p\in M_m(K)$ las matrices elementales correspondientes a esas operaciones, respectivamente.
>
> Aplicamos cada operación a los dos bloques de $[A\mid I_m]$:
>
> $$
> \begin{aligned}
> [A\mid I_m]
> &\xrightarrow[t_1,\,E_1]{}[A_1\mid Q_1]
> \xrightarrow[t_2,\,E_2]{}[A_2\mid Q_2]\\[4pt]
> &\xrightarrow[t_3,\,E_3]{}\cdots
> \xrightarrow[t_p,\,E_p]{}[A_p\mid Q_p]=[B\mid Q].
> \end{aligned}
> $$
>
> Entonces
>
> $$
> \boxed{B=QA},\qquad
> \boxed{Q=E_pE_{p-1}\cdots E_2E_1}.
> $$
>
> Si hay una sola operación, la cadena tiene un solo paso y $Q=E_1$.[^a5-composicion]

En cada paso, $t_k$ nombra la **operación** y $E_k=t_k(I_m)$ es su **matriz elemental**. El bloque derecho empieza como $Q_0=I_m$ y recibe las mismas operaciones que el izquierdo:

$$
A_k=E_kA_{k-1},\qquad Q_k=E_kQ_{k-1},
\qquad k\in\{1,\ldots,p\}.
$$

Por ejemplo, las dos primeras operaciones dejan $Q_1=E_1$ y $Q_2=E_2E_1$. La segunda matriz multiplica **a la izquierda** de la primera; por eso el orden del producto final es $E_p\cdots E_1$.[^comp]

#### Ejemplo — Seguir tres operaciones

Retomamos la matriz del intercambio. En cada flecha aparece el nombre del paso y la operación que se realiza.

**Primero: intercambiar las filas 1 y 3.**

$$
\underbrace{\begin{pmatrix}1&2&0\\3&-1&4\\5&0&2\end{pmatrix}}_{A}
\xrightarrow[t_1:\,L_1\leftrightarrow L_3]{}
\underbrace{\begin{pmatrix}5&0&2\\3&-1&4\\1&2&0\end{pmatrix}}_{A_1=P_{13}A}.
$$

**Segundo: multiplicar la fila 2 por 3.** Se opera sobre $A_1$, el resultado anterior:

$$
\underbrace{\begin{pmatrix}5&0&2\\3&-1&4\\1&2&0\end{pmatrix}}_{A_1}
\xrightarrow[t_2:\,L_2\leftarrow3L_2]{}
\underbrace{\begin{pmatrix}5&0&2\\9&-3&12\\1&2&0\end{pmatrix}}_{A_2=D_2(3)A_1}.
$$

**Tercero: restar dos veces la fila 1 a la fila 3.** En $A_2$, esa resta es $(1,2,0)-2(5,0,2)=(-9,2,-4)$:

$$
\underbrace{\begin{pmatrix}5&0&2\\9&-3&12\\1&2&0\end{pmatrix}}_{A_2}
\xrightarrow[t_3:\,L_3\leftarrow L_3-2L_1]{}
\underbrace{\begin{pmatrix}5&0&2\\9&-3&12\\-9&2&-4\end{pmatrix}}_{B=E_{31}(-2)A_2}.
$$

La cadena y su producto representan el mismo recorrido:

$$
A\xrightarrow[t_1]{}A_1\xrightarrow[t_2]{}A_2\xrightarrow[t_3]{}B,
\qquad
B=E_{31}(-2)D_2(3)P_{13}A.
$$

Para deshacerlo, sumamos $2L_1$ a $L_3$, dividimos $L_2$ por $3$ y repetimos el intercambio. Ese orden se ve en

$$
B\xrightarrow[t'_3]{}A_2\xrightarrow[t'_2]{}A_1\xrightarrow[t'_1]{}A.
$$

#### Demostración

> [!demostracion] Demostración
> **1. Seguir los dos bloques.** Por la propiedad de [[#Multiplicación por la izquierda y operaciones elementales|multiplicación por la izquierda]], el paso $t_k$ equivale a multiplicar por $E_k$. Aplicado a la fila completa del arreglo, da
>
> $$
> \begin{aligned}
> E_k[A_{k-1}\mid Q_{k-1}]
> &=[E_kA_{k-1}\mid E_kQ_{k-1}]\\
> &=[A_k\mid Q_k].
> \end{aligned}
> $$
>
> Por tanto, ambos bloques acumulan los mismos factores, en el mismo orden.
>
> **2. Comprobar el producto acumulado.** Al empezar, $A_0=A=Q_0A$, pues $Q_0=I_m$. Si tras $k-1$ operaciones se cumple $A_{k-1}=Q_{k-1}A$, la [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Asociatividad del producto|asociatividad]] permite escribir
>
> $$
> A_k=E_kA_{k-1}
> =E_k(Q_{k-1}A)
> =(E_kQ_{k-1})A=Q_kA.
> $$
>
> Esto prueba por [[Matemáticas/Fundamentos/Inducción matemática|inducción]] que $A_k=Q_kA$ para cada $k\in\{0,\ldots,p\}$. Además, sustituyendo sucesivamente $Q_k=E_kQ_{k-1}$,
>
> $$
> Q_p=E_pE_{p-1}\cdots E_1I_m
> =E_pE_{p-1}\cdots E_1.
> $$
>
> Con $A_p=B$ y $Q_p=Q$, concluimos
>
> $$
> \boxed{B=QA,\qquad Q=E_pE_{p-1}\cdots E_1}.
> \qquad\blacksquare
> $$
>
> [^a5-composicion][^comp]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - matrices-elementales
  - composición
---
> [!note] Pregunta
> En una cadena de operaciones por filas, ¿qué diferencia hay entre $t_k$ y $E_k$?
===
> [!important] Respuesta
> $t_k$ es la operación elemental y $E_k$ es su matriz: aplicar $t_k$ a $A_{k-1}$ produce $A_k=E_kA_{k-1}$.
```

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - matrices-elementales
  - composición
---
> [!note] Pregunta
> Si primero se aplican $E_1$ y después $E_2$, ¿qué producto representa la secuencia sobre $A$?
===
> [!important] Respuesta
> $E_2E_1A=(E_2E_1)A$; la última operación aplicada queda a la izquierda.
```

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - matrices-elementales
  - matriz-aumentada
---
> [!note] Pregunta
> ¿Qué se obtiene al aplicar las mismas operaciones por filas a ambos bloques de $[A\mid I_m]$?
===
> [!important] Respuesta
> Un arreglo $[QA\mid Q]$, donde $Q$ es el producto de matrices elementales que representa la secuencia aplicada.
```

## Ejemplos de operaciones y matrices elementales

### Invertir operaciones y construir matrices elementales

Supongamos que intercambiamos dos filas y después multiplicamos una por $-5$. Para recuperar la matriz inicial, primero debemos dividir esa fila por $-5$ y sólo después repetir el [[#Intercambio de filas|intercambio]]. Ese orden evita aplicar una [[#Reversibilidad de las operaciones|operación inversa]] a una fila que ya ocupa otra posición.

| Operación | Operación inversa |
|---|---|
| $L_i\leftrightarrow L_j$ | $L_i\leftrightarrow L_j$ |
| $L_i\leftarrow\lambda L_i$, $\lambda\ne0$ | $L_i\leftarrow\lambda^{-1}L_i$ |
| $L_i\leftarrow L_i+\lambda L_j$, $i\ne j$ | $L_i\leftarrow L_i-\lambda L_j$ |

En el [[#Reemplazo de una fila|reemplazo]], la fila $j$ no se modifica. Por eso podemos restar exactamente el múltiplo que habíamos añadido.[^a5]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - operaciones-inversas
---
> [!note] Pregunta
> ¿Qué operación deshace el intercambio de dos filas $L_i\leftrightarrow L_j$?
===
> [!important] Respuesta
> El mismo intercambio $L_i\leftrightarrow L_j$.
```

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - operaciones-inversas
---
> [!note] Pregunta
> ¿Qué operación deshace el escalado $L_i\leftarrow\lambda L_i$ cuando $\lambda\ne0$?
===
> [!important] Respuesta
> El escalado $L_i\leftarrow\lambda^{-1}L_i$.
```

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - operaciones-inversas
---
> [!note] Pregunta
> ¿Qué operación deshace el reemplazo $L_i\leftarrow L_i+\lambda L_j$?
===
> [!important] Respuesta
> $L_i\leftarrow L_i-\lambda L_j$, manteniendo intacta la fila $j$.
```

Para construir la [[Matemáticas/Álgebra lineal/Matriz elemental|matriz elemental]] de cada operación, la aplicamos a $I_3$.

#### Intercambios de filas

Intercambiar las filas primera y tercera de $I_3$ da $P_{13}$:

$$
P_{13}=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}.
$$

Intercambiar las filas segunda y tercera da $P_{23}$:

$$
P_{23}=\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}.
$$

#### Escalado de una fila

Multiplicamos la tercera fila de $I_3$ por $-5$:

$$
D_3(-5)=\begin{pmatrix}1&0&0\\0&1&0\\0&0&-5\end{pmatrix}.
$$

#### Reemplazos de filas

Para $L_1\leftarrow L_1-5L_3$, partimos de $I_3$ y restamos cinco veces su tercera fila a la primera:

$$
E_{13}(-5)=\begin{pmatrix}1&0&-5\\0&1&0\\0&0&1\end{pmatrix}.
$$

Para $L_3\leftarrow L_3+6L_2$, sumamos seis veces la segunda fila de $I_3$ a su tercera fila:

$$
E_{32}(6)=\begin{pmatrix}1&0&0\\0&1&0\\0&6&1\end{pmatrix}.
$$

#### Ejemplo: composición sobre una matriz simbólica

$$
A=\begin{pmatrix}a_1&a_2&a_3&a_4\\b_1&b_2&b_3&b_4\\c_1&c_2&c_3&c_4\end{pmatrix}.
$$

Primero intercambiamos las filas 2 y 3:

$$
B=P_{23}A=
\begin{pmatrix}a_1&a_2&a_3&a_4\\c_1&c_2&c_3&c_4\\b_1&b_2&b_3&b_4\end{pmatrix}.
$$

Después multiplicamos la primera fila por $-5$:

$$
C=D_1(-5)B=
\begin{pmatrix}-5a_1&-5a_2&-5a_3&-5a_4\\c_1&c_2&c_3&c_4\\b_1&b_2&b_3&b_4\end{pmatrix}.
$$

Al sustituir $B=P_{23}A$, obtenemos

$$
C=D_1(-5)B=D_1(-5)P_{23}A.
$$

Podemos calcular el producto de las matrices elementales mientras operamos con $A$: añadimos $I_3$ a su derecha y aplicamos cada operación a la fila completa de $[A\mid I_3]$. El bloque derecho termina siendo

$$
Q=D_1(-5)P_{23}=\begin{pmatrix}-5&0&0\\0&0&1\\0&1&0\end{pmatrix}.
$$

El bloque izquierdo es $C=QA$. Por tanto,

$$
[A\mid I_3]\sim[QA\mid Q]=[C\mid Q].
$$

El bloque derecho empezó como $I_3$ y recibió las mismas operaciones que $A$. Por eso termina siendo $Q$. En este arreglo, la barra separa dos bloques de matrices: el derecho tiene tres columnas y registra la secuencia aplicada.[^comp]

## Condiciones de validez y errores frecuentes

> [!warning] La operación afecta a toda la ecuación
> En $[A\mid\mathbf b]$, cada operación debe aplicarse también al término independiente. Si dividimos $2x+y=5$ por $2$, obtenemos $x+\tfrac12y=\tfrac52$, no $x+\tfrac12y=5$.

Una entrada cero no sirve como divisor. Buscamos una entrada no nula en las filas pendientes de la misma columna y la llevamos a la fila de trabajo mediante un [[#Intercambio de filas|intercambio]]. Si no existe, esa columna queda sin pivote y seguimos con la siguiente.

En una lista de operaciones, cada paso actúa sobre la matriz que ha dejado el anterior. Así, después de $L_2\leftarrow L_2+L_3$, una operación que use $L_2$ utiliza **su valor actualizado**. Esto importa especialmente cuando varias operaciones se escriben juntas.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - operaciones-fila
---
> [!note] Pregunta
> Después de efectuar $L_2\leftarrow L_2+L_3$, ¿qué fila $L_2$ se usa en la siguiente operación de una secuencia?
===
> [!important] Respuesta
> La fila $L_2$ actualizada, obtenida en el paso anterior.
```

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - matriz-ampliada
---
> [!note] Pregunta
> Al reducir $[A\mid\mathbf b]$, ¿sobre qué parte de la matriz ampliada se aplica cada operación elemental por filas?
===
> [!important] Respuesta
> Sobre la fila completa, incluidos los coeficientes de $A$ y el término independiente de $\mathbf b$.
>
> ![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/02-fila-completa-anki.png|Escalar toda la ecuación: (2,1 | 5) pasa a (1,1/2 | 5/2)|420]]
```

Las operaciones permiten construir formas escalonadas y resolver sistemas mediante [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan|Gauss y Gauss–Jordan]].

## 📚 Fuentes

### Material base aportado

[^a4]: FCUL, *Álgebra Linear e Geometria Analítica*, 2026/27, aula 4, diapositivas 13–17. Fuente de las convenciones sobre pivotes, formas escalonadas y del ejemplo con tres ecuaciones. Archivo docente: `ALGA-2026-27-AulasTeo-slides-aula4-FormaEscada-impressao.pdf`.

[^a5]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 5, 25/09/2026, «Transformações Elementares», diapositivas 2–11. La captura aportada de la diapositiva 4 muestra las operaciones inversas; la segunda captura muestra las cadenas rotuladas $t_1,\ldots,t_p$, su recorrido inverso y la equivalencia por filas. Se adopta la notación $L_i$ para las filas. La diapositiva 8 propone como TPC demostrar que $EA$ realiza sobre $A$ la operación que construye $E$; aquí se resuelven sus tres casos. Archivo docente: `ALGA-2026-27-AulasTeo-slides-aula5-TransfElem-impressao.pdf`.

[^tpc-elementales]: FCUL, aula 5, diapositiva 8, archivo privado `ALGA-2026-27-AulasTeo-slides-aula5-TransfElem-impressao.pdf`: un único «Dem.: TPC» referido a la proposición general $B=EA$. Los enunciados particulares de intercambio, escalado y reemplazo organizan aquí sus tres casos; no son tres encargos independientes. El argumento por entradas se adapta de Beezer, teorema EMDRO.[^emdr]

[^a5-composicion]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 5, diapositiva 11, archivo privado `ALGA-2026-27-AulasTeo-slides-aula5-TransfElem-impressao.pdf`. Proposición de composición: cadena $A\to A_1\to\cdots\to A_p=B$, operaciones simultáneas sobre $[A\mid I_m]$ y conclusiones $B=QA$, $Q=E_p\cdots E_1$. Se traduce el enunciado y se desarrolla su justificación por inducción, con $Q_0=I_m$.

### Contraste académico y ampliaciones

[^pres]: Instituto Superior Técnico, *Apontamentos de Álgebra Linear*, §1.10, pp. 15–16, justificación de la conservación de soluciones en las tres operaciones. La demostración se adapta al español y a la notación de esta nota. [PDF](https://fenix.tecnico.ulisboa.pt/downloadFile/563568428979297/ApontamentosInteg.pdf).

[^comp]: W. Keith Nicholson, *Linear Algebra with Applications*, §2.5, apartado “Inverses and Elementary Matrices”, deducción $A\to UA=B$ anterior al Teorema 1, donde se representa una secuencia de operaciones mediante el producto de matrices elementales. [LibreTexts](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_%28Nicholson%29/02%3A_Matrix_Algebra/2.05%3A_Elementary_Matrices).

[^emdr]: Robert A. Beezer, *A First Course in Linear Algebra*, §DM, Teorema EMDRO, prueba completa por entradas de los tres tipos de operación. Las demostraciones de esta nota adaptan ese argumento y su notación. En la edición web consultada algunos sumatorios aparecen hasta $n$; aquí se utiliza $m$, el número de filas de $A$ y el orden de la matriz elemental. [Sección sobre matrices elementales](https://linear.pugetsound.edu/fcla/section-DM.html#theorem-EMDRO).

[^lectura-filas]: MIT OpenCourseWare, Gilbert Strang, *18.06SC Linear Algebra*, [resumen de la lección 3, «Multiplication and Inverse Matrices»](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/1963da71c4d96e5d14e7939780f79bcc_MIT18_06SCF11_Ses1.3sum.pdf), p. 1, «Rows»: las filas del producto son combinaciones de las filas del segundo factor. Se aplica a $EA$ con una matriz elemental; las matrices numéricas de esta ampliación se han elegido para mostrar $L_2-5L_3$.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como tutor de operaciones y matrices elementales para un estudiante universitario que conoce las operaciones matriciales. Formula una pregunta cada vez y espera el intento; distingue errores de concepto y de cálculo, y ofrece pistas antes de mostrar la respuesta. No generes ejercicios nuevos: trabaja con los ejemplos de esta nota.

Las tres operaciones sobre filas son $L_i\leftrightarrow L_j$, $L_i\leftarrow\lambda L_i$ con $\lambda\ne0$, y $L_i\leftarrow L_i+\lambda L_j$ con $i\ne j$. Sus operaciones inversas repiten el intercambio, usan $\lambda^{-1}$ y restan el múltiplo, respectivamente. En un sistema se opera sobre toda la fila de $[A\mid\mathbf b]$, incluidos los términos independientes. Usa $2x+y=5$, $x-y=1$: intercambiar y efectuar $L_2\leftarrow L_2-2L_1$ da $x-y=1$, $3y=3$; deshacer esas operaciones recupera las ecuaciones originales.

La matriz elemental $E=t(I_m)$ realiza $t$ por multiplicación a la izquierda: $t(A)=EA$ para $A\in M_{m\times n}(K)$. Distingue $t$, la operación, de $E$, su matriz. Para una secuencia $t_1,\ldots,t_p$, se obtiene $B=QA$ con $Q=E_p\cdots E_1$; el factor más próximo a $A$ corresponde a la primera operación. Las mismas operaciones llevan $[A\mid I_m]$ a $[B\mid Q]$.

Pide justificar que la operación afecta a toda la fila, qué fila queda intacta en un reemplazo y qué valor actualizado se utiliza en cada paso. Si se solicita la prueba de $EA=t(A)$, distingue intercambio, escalado y reemplazo como los tres casos de una sola proposición. La invertibilidad de matrices se estudiará después; aquí se utiliza sólo la reversibilidad de las operaciones.
