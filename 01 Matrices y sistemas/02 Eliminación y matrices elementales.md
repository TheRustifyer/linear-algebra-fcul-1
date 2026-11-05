---
title: Eliminación y matrices elementales
aliases:
  - Método de Gauss y Gauss-Jordan
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
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices y operaciones|Matrices y operaciones]]"
  - "[[Matemáticas/Álgebra lineal/Matrices|Matrices]]"
desbloquea:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa|Compatibilidad, rango e inversa]]"
fsrs_goal: Aplicar intercambios, escalados no nulos y reemplazos de fila, justificar que conservan las soluciones, reconocer formas escalonadas y reducir un sistema por Gauss o Gauss-Jordan sin perder las dimensiones ni el significado de las variables.
simbolos:
  - R_i\leftrightarrow R_j
  - R_i\leftarrow cR_i
  - R_i\leftarrow R_i+cR_j
  - E_{ij}
  - '[A\mid\mathbf b]'
tags:
  - matemáticas
  - álgebra-lineal
  - sistemas-lineales
  - eliminación
  - curricular
---

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

# Eliminación y matrices elementales

## Propósito de la eliminación

En el sistema

$$
\begin{cases}
2x+y=5,\\
x-y=1,
\end{cases}
$$

podemos despejar una incógnita y sustituirla en la otra ecuación. También podemos sumar o restar múltiplos de las ecuaciones hasta que desaparezca una de las incógnitas. La **eliminación** sigue esta segunda vía: convierte el sistema en otro que se resuelve con menos cálculo, conservando exactamente sus soluciones.

### La matriz ampliada

Para operar con las ecuaciones, basta conservar sus coeficientes y términos independientes. Fijamos el orden $x,y$ y escribimos:

$$
\left[\begin{array}{cc|c}
2&1&5\\
1&-1&1
\end{array}\right].
$$

Cada fila corresponde a una ecuación. Las dos primeras columnas contienen los coeficientes de $x$ e $y$; la columna situada después de la barra contiene los términos independientes.

> [!definicion] Matriz ampliada
> Si el sistema es $A\mathbf x=\mathbf b$, su [[Matemáticas/Álgebra lineal/Matriz ampliada|matriz ampliada]] es
>
> $$
> [A\mid\mathbf b].
> $$
>
> Se obtiene añadiendo a la matriz de coeficientes $A$ la columna $\mathbf b$, sin cambiar el orden de las ecuaciones ni de las incógnitas.[^a4]

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

Usaremos coeficientes en $K=\mathbb R$ o $K=\mathbb C$. Para $m,n\in\mathbb N$ positivos, las dimensiones son

$$
A\in M_{m\times n}(K),\qquad
\mathbf x\in K^n,\qquad
\mathbf b\in K^m.
$$

Hay $m$ ecuaciones y $n$ incógnitas; por eso la matriz ampliada tiene $m$ filas y $n+1$ columnas. En las operaciones por filas, la columna de términos independientes se trata igual que las demás.

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

Las [[Matemáticas/Álgebra lineal/Operaciones elementales por filas|operaciones elementales por filas]] son las tres transformaciones que utilizaremos para reducir una matriz. Denotamos sus filas por $R_1,\ldots,R_m$. En una matriz ampliada, operar con una fila equivale a operar con la ecuación completa.

### Intercambio de filas

> [!definicion] Intercambio
> Para $i\ne j$, la operación
>
> $$
> R_i\leftrightarrow R_j
> $$
>
> intercambia las filas $i$ y $j$.[^a5]

En el sistema anterior, intercambiar las ecuaciones coloca arriba la que tiene coeficiente $1$ para $x$:

$$
\left[\begin{array}{cc|c}2&1&5\\1&-1&1\end{array}\right]
\xrightarrow{R_1\leftrightarrow R_2}
\left[\begin{array}{cc|c}1&-1&1\\2&1&5\end{array}\right].
$$

Las ecuaciones siguen siendo las mismas; sólo hemos cambiado su orden.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - operaciones-fila
---
> [!note] Pregunta
> ¿Qué hace la operación elemental $R_i\leftrightarrow R_j$?
===
> [!important] Respuesta
> Intercambia las filas $i$ y $j$; en el sistema, reordena esas ecuaciones.
```

### Escalado por un escalar no nulo

> [!definicion] Escalado
> Para $c\in K\setminus\{0\}$, la operación
>
> $$
> R_i\leftarrow cR_i
> $$
>
> multiplica todas las entradas de la fila $i$ por $c$.[^a5]

Por ejemplo, multiplicar la primera ecuación por $1/2$ da

$$
\left[\begin{array}{cc|c}2&1&5\\1&-1&1\end{array}\right]
\xrightarrow{R_1\leftarrow\frac12R_1}
\left[\begin{array}{cc|c}1&1/2&5/2\\1&-1&1\end{array}\right].
$$

Podemos recuperar la ecuación inicial multiplicando por $2$. El factor debe ser **no nulo**: multiplicar por cero sustituiría la ecuación por $0=0$ y perderíamos su información.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - operaciones-fila
---
> [!note] Pregunta
> ¿Qué hace el escalado elemental $R_i\leftarrow cR_i$ y qué condición debe cumplir $c$?
===
> [!important] Respuesta
> Multiplica la fila $i$ por $c$, con $c\in K\setminus\{0\}$.
```

### Reemplazo de una fila

> [!definicion] Reemplazo
> Para $c\in K$ e $i\ne j$, la operación
>
> $$
> R_i\leftarrow R_i+cR_j
> $$
>
> sustituye la fila $i$ por su suma con $c$ veces la fila $j$. La fila $j$ permanece intacta.[^a5]

Tras intercambiar las ecuaciones del ejemplo, restamos dos veces la primera a la segunda para eliminar $x$ de esta última:

$$
\left[\begin{array}{cc|c}1&-1&1\\2&1&5\end{array}\right]
\xrightarrow{R_2\leftarrow R_2-2R_1}
\left[\begin{array}{cc|c}1&-1&1\\0&3&3\end{array}\right].
$$

La nueva segunda ecuación es $3y=3$. El coeficiente de $x$ se ha anulado porque $2-2\cdot1=0$. Para deshacer el paso, sumaríamos dos veces la primera fila a la segunda.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - operaciones-fila
---
> [!note] Pregunta
> ¿Qué hace el reemplazo elemental $R_i\leftarrow R_i+cR_j$?
===
> [!important] Respuesta
> Suma $c$ veces la fila $j$ a la fila $i$, con $i\ne j$ y $c\in K$.
```

### Equivalencia por filas

> [!definicion] Matrices equivalentes por filas
> Dos matrices del mismo tamaño son **equivalentes por filas** si una se obtiene de la otra mediante una secuencia finita de operaciones elementales. Escribimos $A\sim B$.[^pres]

Como cada paso se puede deshacer, de $A\sim B$ también se sigue $B\sim A$.

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

### Sistemas equivalentes

> [!definicion] Sistemas equivalentes
> Dos sistemas son equivalentes cuando tienen ==exactamente el mismo conjunto de soluciones==.[^pres]

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
> Las operaciones elementales sobre la **matriz ampliada completa** producen sistemas equivalentes al original.[^pres]

#### Demostración

> [!demostracion] Demostración
> Consideremos el sistema $A\mathbf x=\mathbf b$ y apliquemos una operación a sus ecuaciones. Para comparar los conjuntos de soluciones, comprobamos que cada operación se puede deshacer.
>
> **Intercambio.** Reordenar dos ecuaciones no cambia cuáles deben cumplirse: si se satisfacen todas antes del intercambio, se satisfacen todas después, y el intercambio inverso las devuelve a su orden inicial.
>
> **Escalado.** Multiplicar una ecuación por $c\ne0$ conserva sus soluciones, porque podemos dividir por $c$ para recuperar la ecuación original. La condición $c\ne0$ es esencial para que esa operación inversa exista.
>
> **Reemplazo.** Sustituimos la ecuación $i$ por ella misma más $c$ veces la ecuación $j$, sin alterar la ecuación $j$. Si ambas ecuaciones originales se cumplen, la nueva también. Recíprocamente, de la nueva ecuación podemos restar $c$ veces la ecuación $j$ y recuperar la ecuación $i$ original.
>
> Por tanto, cada transformación tiene el mismo conjunto de soluciones que el sistema inicial; una cadena finita también lo conserva, pues cada paso es reversible.[^pres]

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
> Una [[Matemáticas/Álgebra lineal/Matriz elemental|matriz elemental]] se obtiene aplicando ==una única operación elemental== por filas a una matriz identidad $I_m$.[^a5]

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

Por ejemplo, intercambiamos las filas primera y tercera de $I_3$:

$$
I_3=
\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}
\xrightarrow{R_1\leftrightarrow R_3}
P_{13}=
\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}.
$$

Al multiplicar $P_{13}A$, se intercambiarán las filas primera y tercera de $A$. Para entender por qué, examinamos cómo se calcula una fila de un producto.

### Multiplicación por la izquierda y operaciones elementales

#### Propiedad

> [!teorema] Una matriz elemental efectúa una operación por filas
> Sea $B$ el resultado de una operación elemental sobre $A\in M_{m\times n}(K)$. Si $E$ se obtiene efectuando esa misma operación sobre $I_m$, entonces
>
> $$
> \boxed{B=EA}.
> $$
>
> El producto se realiza **por la izquierda**.[^a5][^emdr]

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

#### Lectura de una fila del producto

El producto $EA$ está definido porque $E$ tiene $m$ columnas y $A$ tiene $m$ filas; el resultado tiene tamaño $m\times n$. Fijemos $r\in\{1,\ldots,m\}$ y $k\in\{1,\ldots,n\}$. Entonces

$$
(EA)_{rk}=\sum_{\ell=1}^{m}e_{r\ell}a_{\ell k}.
$$

Los índices $r$ y $k$ fijan la entrada que calculamos; el índice $\ell$ recorre las filas de $A$. Por ejemplo, si la fila $r$ de $E$ es $(0,1,-5)$, la entrada calculada es $a_{2k}-5a_{3k}$. Al recorrer todas las columnas $k$, obtenemos la fila $R_2-5R_3$. Los coeficientes de esa combinación son, precisamente, las entradas de la fila $r$ de $E$.

La demostración del resultado se divide según las tres operaciones posibles.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - producto-matricial
---
> [!note] Pregunta
> ¿Qué combinación de filas de $A$ forma la fila $r$ del producto $EA$?
===
> [!important] Respuesta
> Si $E$ tiene orden $m$, es $e_{r1}R_1+\cdots+e_{rm}R_m$: la fila $r$ de $E$ da los coeficientes.
```

### Intercambiar las filas $i$ y $j$

#### Propiedad

> [!propiedad] Matriz elemental de intercambio
> Sea $B$ el resultado de intercambiar las filas $i$ y $j$ de $A\in M_{m\times n}(K)$, con $1\le i,j\le m$ e $i\ne j$. Si $P_{ij}$ se construye intercambiando esas filas de $I_m$, entonces
>
> $$
> \boxed{B=P_{ij}A}.
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Supongamos $i\ne j$ y que $P_{ij}$ se obtiene de $I_m$ intercambiando sus filas $i$ y $j$. La fila $i$ de $P_{ij}$ tiene un $1$ en la columna $j$ y ceros en las demás. Para cada columna $k$,
> $$
> (P_{ij}A)_{ik}=\sum_{\ell=1}^{m}(P_{ij})_{i\ell}a_{\ell k}=a_{jk}.
> $$
> La fila $j$ de $P_{ij}$ tiene un $1$ en la columna $i$, de modo que
> $$
> (P_{ij}A)_{jk}=a_{ik}.
> $$
> Si $r$ es distinta de $i$ y $j$, la fila $r$ de $P_{ij}$ coincide con la fila $r$ de $I_m$, por lo que $(P_{ij}A)_{rk}=a_{rk}$. Así, las filas $i$ y $j$ se intercambian y las restantes quedan iguales.[^emdr]

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
> Sea $B$ el resultado de $R_i\leftarrow\lambda R_i$ en $A\in M_{m\times n}(K)$, con $1\le i\le m$ y $\lambda\in K\setminus\{0\}$. Si $D_i(\lambda)$ es $I_m$ con la entrada $(i,i)$ sustituida por $\lambda$, entonces
>
> $$
> \boxed{B=D_i(\lambda)A}.
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sea $\lambda\in K\setminus\{0\}$ y sea $D_i(\lambda)$ la matriz identidad con su fila $i$ multiplicada por $\lambda$. La fila $i$ contiene $\lambda$ en la columna $i$ y ceros en las demás. Por tanto, para cada $k$,
> $$
> (D_i(\lambda)A)_{ik}=\sum_{\ell=1}^{m}(D_i(\lambda))_{i\ell}a_{\ell k}=\lambda a_{ik}.
> $$
> Si $r\ne i$, la fila $r$ de $D_i(\lambda)$ no cambia respecto de la identidad, y $(D_i(\lambda)A)_{rk}=a_{rk}$. Luego solo se escala la fila $i$; el factor no nulo es el que hace que la operación sea elemental e invertible.[^emdr]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - matrices-elementales
  - escalado
---
> [!note] Pregunta
> ¿Qué matriz elemental representa $R_i\leftarrow\lambda R_i$ para $\lambda\ne0$?
===
> [!important] Respuesta
> $D_i(\lambda)$, la identidad con la entrada diagonal $(i,i)$ sustituida por $\lambda$; $D_i(\lambda)A$ escala solo la fila $i$.
```

### Sumar a una fila un múltiplo de otra

#### Propiedad

> [!propiedad] Matriz elemental de reemplazo
> Sea $B$ el resultado de $R_i\leftarrow R_i+\lambda R_j$ en $A\in M_{m\times n}(K)$, con $1\le i,j\le m$, $i\ne j$ y $\lambda\in K$. Si $E_{ij}(\lambda)$ es $I_m$ con la entrada $(i,j)$ sustituida por $\lambda$, entonces
>
> $$
> \boxed{B=E_{ij}(\lambda)A}.
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sean $i\ne j$ y $\lambda\in K$. La fila $i$ de $E_{ij}(\lambda)$ se obtiene sumando la fila $i$ de $I_m$ con $\lambda$ veces su fila $j$. Para cada columna $k$,
> $$
> (E_{ij}(\lambda)A)_{ik}=\sum_{\ell=1}^{m}\bigl((I_m)_{i\ell}+\lambda(I_m)_{j\ell}\bigr)a_{\ell k}.
> $$
> La distributividad separa las dos contribuciones:
> $$
> \begin{aligned}
> (E_{ij}(\lambda)A)_{ik}&=\sum_{\ell=1}^{m}(I_m)_{i\ell}a_{\ell k}\\
> &\quad+\lambda\sum_{\ell=1}^{m}(I_m)_{j\ell}a_{\ell k}.
> \end{aligned}
> $$
> La primera suma selecciona la entrada $a_{ik}$ de la fila $i$; la segunda selecciona $a_{jk}$ de la fila $j$. Por tanto,
>
> $$
> (E_{ij}(\lambda)A)_{ik}=a_{ik}+\lambda a_{jk}.
> $$
>
> Para $r\ne i$, la fila $r$ de $E_{ij}(\lambda)$ sigue siendo la fila $r$ de la identidad, así que $(E_{ij}(\lambda)A)_{rk}=a_{rk}$. Solo cambia la fila $i$, que pasa a ser $R_i+\lambda R_j$; la condición $i\ne j$ mantiene intacta la fila fuente.[^emdr]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - matrices-elementales
  - reemplazo
---
> [!note] Pregunta
> ¿Qué matriz elemental representa $R_i\leftarrow R_i+\lambda R_j$ con $i\ne j$?
===
> [!important] Respuesta
> $E_{ij}(\lambda)$ es la identidad con $\lambda$ en la posición $(i,j)$; por la izquierda suma $\lambda$ veces la fila $j$ a la fila $i$.
```

### Invertibilidad de las matrices elementales

#### Propiedad

> [!consecuencia] Las matrices elementales son invertibles
> Si $E$ es una matriz elemental de orden $m$, la matriz $F$ de la operación inversa satisface
>
> $$
> \boxed{FE=EF=I_m}.
> $$
>
> Por tanto, $F=E^{-1}$.[^emni]

#### Demostración

> [!demostracion] Demostración
> Sea $E$ la matriz elemental asociada a una operación y sea $F$ la que representa la operación inversa. Para toda matriz $A$ con $m$ filas, aplicar primero $E$ y luego $F$ devuelve $A$; por tanto, $F(EA)=A$. Por asociatividad, $(FE)A=A$. Tomando $A=I_m$, queda $FE=I_m$.
>
> En el orden inverso, aplicar primero $F$ y luego $E$ también devuelve $A$, así que $(EF)A=A$. Con $A=I_m$, obtenemos $EF=I_m$. Luego $F$ es inversa bilateral de $E$.[^emni]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - matrices-elementales
  - inversibilidad
---
> [!note] Pregunta
> ¿Por qué toda matriz elemental es invertible?
===
> [!important] Respuesta
> La operación inversa tiene matriz elemental $F$ y deshace la acción de $E$ en ambos órdenes: $FE=EF=I_m$.
```

#### Inversas de los tres tipos

La inversa se construye aplicando a $I_m$ la operación que deshace el paso original:

| Matriz elemental | Matriz inversa | Operación que deshace |
|---|---|---|
| $P_{ij}$ | $P_{ij}$ | Repetir el intercambio |
| $D_i(\lambda)$, $\lambda\ne0$ | $D_i(\lambda^{-1})$ | Dividir la fila por $\lambda$ |
| $E_{ij}(\lambda)$, $i\ne j$ | $E_{ij}(-\lambda)$ | Restar el múltiplo añadido |

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - matrices-elementales
  - inversibilidad
---
> [!note] Pregunta
> ¿Cuál es la inversa de la matriz elemental de intercambio $P_{ij}$?
===
> [!important] Respuesta
> $P_{ij}^{-1}=P_{ij}$: repetir el mismo intercambio devuelve las filas a su orden inicial.
```

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - matrices-elementales
  - inversibilidad
---
> [!note] Pregunta
> ¿Cuál es la inversa de la matriz elemental de escalado $D_i(\lambda)$ para $\lambda\ne0$?
===
> [!important] Respuesta
> $D_i(\lambda)^{-1}=D_i(\lambda^{-1})$, que deshace el escalado de la fila $i$.
```

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - matrices-elementales
  - inversibilidad
---
> [!note] Pregunta
> ¿Cuál es la inversa de la matriz elemental de reemplazo $E_{ij}(\lambda)$, con $i\ne j$?
===
> [!important] Respuesta
> $E_{ij}(\lambda)^{-1}=E_{ij}(-\lambda)$, que anula el múltiplo añadido a la fila $i$.
```

### Composición de operaciones elementales

#### Propiedad

> [!propiedad] Orden de los factores
> Si las matrices elementales $E_1,\ldots,E_p$, de orden $m$, representan las operaciones en el orden en que se aplican a $A\in M_{m\times n}(K)$, el resultado $B$ es
>
> $$
> \boxed{B=(E_p\cdots E_2E_1)A}.
> $$
>
> La primera operación corresponde al factor más próximo a $A$.[^comp]

#### Demostración

> [!demostracion] Demostración
> Si primero se aplica $E_1$ y después $E_2$, el resultado es
> $$
> E_2(E_1A).
> $$
> Por asociatividad,
> $$
> E_2(E_1A)=(E_2E_1)A.
> $$
> Repitiendo este paso para una secuencia de $p$ operaciones se obtiene $(E_p\cdots E_2E_1)A$. Por eso la última operación aplicada queda representada por el factor más a la izquierda.[^comp]

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

## Formas escalonada y escalonada reducida

### Pivote

> [!definicion] Pivote de una fila
> El pivote de una fila no nula es su primera entrada no nula de izquierda a derecha. Una fila nula carece de pivote.[^a4]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - pivotes
  - definición
---
> [!note] Pregunta
> ¿Qué es el pivote de una fila no nula?
===
> [!important] Respuesta
> Su primera entrada no nula al leerla de izquierda a derecha.
```

### Posición pivote

> [!definicion] Posición pivote
> La posición pivote es el par de índices $(i,j)$ que localiza el pivote: $i$ indica su fila y $j$, su columna.[^a4]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - pivotes
  - definición
---
> [!note] Pregunta
> ¿Qué es una posición pivote en una fila no nula?
===
> [!important] Respuesta
> La posición de su primera entrada no nula; identifica la fila y la columna donde está el pivote.
```

#### Ejemplo: posiciones pivote

En esta matriz, el primer elemento no nulo de cada fila ocupa las posiciones $(1,1)$, $(2,3)$ y $(3,2)$:

$$
\begin{pmatrix}7&-2&1&0\\0&0&-8&2\\0&-3&0&1\end{pmatrix}.
$$

Los pivotes son $7,-8,-3$. Sus columnas son, respectivamente, la 1, la 3 y la 2: al pasar a la última fila, el pivote retrocede hacia la izquierda. Esta es la disposición que la eliminación trata de evitar.

### Forma escalonada por filas

> [!definicion] Forma escalonada por filas
> Una matriz está en [[Matemáticas/Álgebra lineal/Forma escalonada|forma escalonada por filas]] cuando:
>
> 1. Las filas nulas están debajo de todas las filas no nulas.
> 2. Al bajar de una fila no nula a la siguiente, el pivote se desplaza estrictamente hacia la derecha.
> 3. Debajo de cada pivote hay ceros.[^a4]

Los pivotes pueden ser distintos de $1$. La tercera condición se deduce de las dos primeras, pero se incluye porque describe los ceros que buscamos al eliminar.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - forma-escalonada
---
> [!note] Pregunta
> ¿Cuáles son las condiciones de una forma escalonada por filas?
===
> [!important] Respuesta
> Las filas nulas quedan al final, los pivotes avanzan hacia la derecha al bajar y hay ceros debajo de cada pivote; un pivote no tiene que ser $1$.
```

### Forma escalonada reducida

> [!definicion] Forma escalonada reducida
> Una matriz está en [[Matemáticas/Álgebra lineal/Forma escalonada reducida|forma escalonada reducida]] si está escalonada y cumple dos condiciones más:
>
> 1. Todos sus pivotes valen $1$.
> 2. En cada columna pivote, todas las demás entradas son cero.[^a4]

Para pasar de una forma escalonada a una reducida, dividimos cada fila no nula por su pivote y eliminamos las entradas que quedan **encima** de él. Los ceros de debajo ya estaban obtenidos.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - forma-escalonada-reducida
---
> [!note] Pregunta
> ¿Qué condiciones adicionales hacen reducida una forma escalonada por filas?
===
> [!important] Respuesta
> Cada pivote vale $1$ y es el único elemento no nulo de su columna.
```

### Ejemplos de matrices escalonadas

#### Tres pivotes y dos filas nulas

$$
\begin{pmatrix}0&2&5&3&0&3\\0&0&-7&0&8&0\\0&0&0&0&3&1\\0&0&0&0&0&0\\0&0&0&0&0&0\end{pmatrix}.
$$

Aquí hay tres filas no nulas, con pivotes en las columnas 2, 3 y 5; las filas nulas están al final.

#### Pivotes en columnas consecutivas

$$
\begin{pmatrix}-6&0&0\\0&1&3\\0&0&-5\end{pmatrix}.
$$

Los pivotes avanzan una columna en cada fila.

#### La identidad

$$
I_2=\begin{pmatrix}1&0\\0&1\end{pmatrix}.
$$

Sus pivotes ocupan las posiciones $(1,1)$ y $(2,2)$.

### Ejemplo: matrices que no están escalonadas

#### Una fila nula interrumpe la escalera

$$
\begin{pmatrix}0&3&1&0\\0&0&0&0\\0&0&0&2\end{pmatrix}.
$$

La fila nula aparece antes de una fila no nula.

#### Dos pivotes en la misma columna

$$
\begin{pmatrix}0&3&1&0\\0&1&0&5\\0&0&0&-2\end{pmatrix}.
$$

Los pivotes de las dos primeras filas quedan ambos en la columna 2.

#### Un pivote retrocede hacia la izquierda

$$
\begin{pmatrix}0&1\\1&0\end{pmatrix}.
$$

Aquí el pivote de la segunda fila queda en la columna 1, a la izquierda del de la primera fila.

### Ejemplo: matrices en forma escalonada reducida

#### Dos columnas pivote y una fila nula

$$
\begin{pmatrix}0&1&0&5\\0&0&1&0\\0&0&0&0\end{pmatrix}.
$$

Los pivotes son unos y sus columnas contienen ceros en las demás posiciones.

#### Columnas sin pivote entre las columnas pivote

$$
\begin{pmatrix}1&-3&0&2&0\\0&0&1&4&0\\0&0&0&0&1\end{pmatrix}.
$$

Las columnas 2 y 4 no contienen pivotes y pueden tener entradas no nulas. La condición de tener ceros fuera del pivote se exige sólo a las columnas 1, 3 y 5.

#### La identidad es también reducida

$$
I_2=\begin{pmatrix}1&0\\0&1\end{pmatrix}.
$$

Cada columna contiene un pivote $1$ y un cero en la otra posición.

### La forma escalonada puede variar

Una misma matriz puede dar formas escalonadas distintas. Por ejemplo, $I_2$ y $2I_2$ están escalonadas y son equivalentes por filas: basta multiplicar por $2$ cada fila de $I_2$. Sólo la primera está reducida.

La **forma escalonada reducida**, en cambio, es única. Para justificarlo, probamos primero que siempre se puede obtener una y después que no pueden obtenerse dos diferentes.[^rref]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - forma-escalonada
---
> [!note] Pregunta
> ¿Es única la forma escalonada por filas equivalente a una matriz?
===
> [!important] Respuesta
> No, puede variar con las operaciones elegidas. La unicidad corresponde a la forma escalonada reducida.
```

### Existencia de forma escalonada reducida

#### Propiedad

> [!teorema] Existencia
> Toda matriz $A\in M_{m\times n}(K)$ es equivalente por filas a una matriz en forma escalonada reducida.[^rref]

#### Demostración

> [!demostracion] Demostración
> El procedimiento de Gauss–Jordan construye esta forma en un número finito de pasos. Se recorren las columnas de izquierda a derecha y se busca una entrada no nula entre las filas que aún no tienen pivote. Si no existe, esa columna queda sin pivote. Si existe, se intercambia su fila con la primera fila pendiente, se divide por la entrada no nula para obtener un pivote $1$ y se anulan las demás entradas de esa columna mediante reemplazos de filas.
>
> Las columnas pivote anteriores no se estropean: en las filas pendientes sus entradas son cero. Por eso, al usar una de esas filas para eliminar en una columna nueva, no cambiamos los ceros ni los unos ya fijados en las columnas pivote anteriores.
>
> Cada pivote ocupa una fila nueva y una columna nueva. Por tanto, puede haber como máximo $\min(m,n)$ pivotes. Como la matriz tiene solo $m$ filas y $n$ columnas, el recorrido termina; las filas nulas quedan al final y cada columna pivote tiene un único $1$. El resultado es una forma escalonada reducida.[^rref]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - forma-escalonada-reducida
---
> [!note] Pregunta
> Para una matriz de tamaño $m\times n$, ¿qué garantiza que el procedimiento de Gauss–Jordan termine?
===
> [!important] Respuesta
> Cada pivote ocupa una fila y una columna nuevas; hay como máximo $\min(m,n)$ pivotes, así que el recorrido termina.
```

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - forma-escalonada-reducida
---
> [!note] Pregunta
> ¿Toda matriz puede transformarse por filas en una forma escalonada reducida?
===
> [!important] Respuesta
> Sí. Gauss–Jordan la construye mediante un número finito de operaciones elementales.
```

### Unicidad de forma escalonada reducida

#### Propiedad

> [!teorema] Unicidad
> Si $B$ y $C$ son formas escalonadas reducidas equivalentes por filas a la misma matriz $A$, entonces
>
> $$
> \boxed{B=C}.
> $$
>
> Las elecciones durante el cálculo pueden cambiar los pasos, pero no el resultado reducido.[^rref]

#### Demostración

> [!demostracion] Demostración
> Sean $B$ y $C$ dos formas escalonadas reducidas obtenidas de una misma matriz $A$ mediante operaciones elementales. Probaremos por inducción en el número de columnas que coinciden.
>
> **1. Base: una columna.** Con una sola columna, las únicas formas reducidas posibles son la columna nula y
>
> $$
> \begin{pmatrix}1\\0\\\vdots\\0\end{pmatrix}.
> $$
>
> La matriz nula no puede transformarse en una matriz no nula con operaciones elementales; por tanto, la forma reducida es única.
>
> **2. Truncación e hipótesis inductiva.** Supongamos el resultado para matrices con $n$ columnas y consideremos $A$ con $n+1$ columnas. Denotemos por $B_{\le n}$ y $C_{\le n}$ las matrices que quedan al retirar la última columna. Como ambas matrices son reducidas, si al quitar esa columna una fila pierde su único pivote, queda nula y aparece al final; las demás columnas pivote conservan sus columnas unitarias. Por eso las truncaciones siguen siendo reducidas. Las operaciones por filas aplicadas a $A$ producen las mismas operaciones en $A_{\le n}$, así que la hipótesis inductiva implica
> $$
> B_{\le n}=C_{\le n}.
> $$
> **3. Comparación de la última columna.** Si $B$ y $C$ aún difiriesen, diferirían solo en alguna entrada de la última columna. Como ambas se obtienen de $A$ mediante operaciones reversibles, sus sistemas homogéneos tienen el mismo conjunto de soluciones. Para una fila $i$ donde difieren, sus ecuaciones homogéneas, una en cada matriz, serían
>
> $$
> \begin{aligned}
> \sum_{j=1}^{n}b_{ij}x_j+b_{i,n+1}x_{n+1}&=0,\\
> \sum_{j=1}^{n}b_{ij}x_j+c_{i,n+1}x_{n+1}&=0.
> \end{aligned}
> $$
>
> Restarlas da $(b_{i,n+1}-c_{i,n+1})x_{n+1}=0$. El coeficiente es distinto de cero, por lo que toda solución común de los sistemas homogéneos de $B$ y $C$ tendría $x_{n+1}=0$.
>
> **4. El pivote final y el cierre.** Si una de las dos matrices no tuviera pivote en la última columna, ninguna ecuación obligaría a fijar $x_{n+1}$. Esa incógnita sería una variable libre: podríamos elegir su valor y despejar después las incógnitas de las columnas pivote.
>
> Fijamos las demás variables libres en cero y elegimos $x_{n+1}=1$; las ecuaciones de la forma reducida determinan entonces las variables pivote. Esto daría una solución con $x_{n+1}\ne0$, en contradicción con la conclusión anterior. Así, ambas formas tienen pivote en la última columna.
>
> Sea $r$ el número de filas no nulas de la truncación común $B_{\le n}=C_{\le n}$. Las filas siguientes son nulas en las primeras $n$ columnas, así que el pivote de la última columna debe estar en la fila $r+1$. En forma reducida esa columna tiene un $1$ en esa fila y ceros en las demás; por ello coincide en $B$ y $C$. Concluimos $B=C$.[^rref]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - forma-escalonada-reducida
---
> [!note] Pregunta
> ¿Cuál es el resultado de unicidad para la forma escalonada reducida?
===
> [!important] Respuesta
> Dos formas escalonadas reducidas equivalentes por filas son idénticas.
```

### Rango de una matriz

> [!definicion] Rango
> El [[Matemáticas/Álgebra lineal/Rango de una matriz|rango]] de $A$, denotado por $r(A)$, es el número de pivotes de una forma escalonada equivalente a $A$; coincide con su número de filas no nulas.[^rank]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - rango
  - definición
---
> [!note] Pregunta
> ¿Cómo se lee el rango de una matriz en forma escalonada?
===
> [!important] Respuesta
> Es el número de filas no nulas, equivalente al número de pivotes.
```

Esta definición exige justificar que distintas reducciones dan el mismo número. La unicidad de la forma reducida proporciona esa justificación.

### El rango no depende de la forma escalonada elegida

#### Propiedad

> [!corolario] Invariancia del rango
> Todas las formas escalonadas equivalentes a una matriz tienen el mismo número de filas no nulas.[^rank]

#### Demostración

> [!demostracion] Demostración
> Partamos de una forma escalonada con $r$ filas no nulas y tratemos las filas desde abajo hacia arriba. Al normalizar el pivote de una fila, esa fila sigue siendo no nula. Al usarla para limpiar su columna por encima, sus entradas en las columnas de pivotes anteriores son cero, porque su pivote está más a la derecha; por ello no borra esos pivotes. Las filas nulas siguen al final. La forma reducida obtenida tiene, pues, exactamente $r$ filas no nulas. Como la forma reducida equivalente es única, cualquier forma escalonada equivalente tiene el mismo número de filas no nulas: ese número es el rango.[^rank]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - rango
  - invariancia
---
> [!note] Pregunta
> ¿Cambia el rango si se obtiene otra forma escalonada equivalente por filas?
===
> [!important] Respuesta
> No; toda forma escalonada equivalente tiene el mismo número de filas no nulas.
```

## Eliminación de Gauss y Gauss-Jordan

### Método de Gauss

El [[Matemáticas/Álgebra lineal/Eliminación de Gauss|método de Gauss]] obtiene una forma escalonada. Comenzamos en la primera columna y elegimos una entrada no nula como pivote; si hace falta, intercambiamos filas para llevarla a la primera fila. Después anulamos las entradas que quedan debajo y repetimos el procedimiento en las filas aún pendientes.

Cuando una columna sólo contiene ceros en las filas pendientes, pasamos a la siguiente. No hay ninguna entrada que pueda servir como nuevo pivote en esa columna.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - métodos
---
> [!note] Pregunta
> ¿Qué obtiene el método de Gauss y cómo se termina de resolver el sistema?
===
> [!important] Respuesta
> Elimina las entradas debajo de los pivotes para obtener una forma escalonada; si el sistema es compatible, se termina por sustitución hacia atrás.
```

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - pivotes
  - procedimiento
---
> [!note] Pregunta
> ¿Qué se hace si la columna candidata a pivote no tiene una entrada no nula en las filas pendientes?
===
> [!important] Respuesta
> Se deja esa columna sin pivote y se avanza a la siguiente; no se divide por cero.
```

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - pivotes
  - procedimiento
---
> [!note] Pregunta
> Si el pivote candidato es cero, ¿cómo se busca un pivote no nulo en esa columna?
===
> [!important] Respuesta
> Se intercambia la fila candidata con una fila pendiente que tenga una entrada no nula en esa columna; si no existe, se omite la columna.
```

### Cómo elegir el múltiplo que elimina una entrada

Supongamos que el pivote de la fila $R_i$ es $p\ne0$ y que queremos anular una entrada $q$ situada debajo, en la fila $R_j$. Debemos restar un múltiplo de $p$ que valga exactamente $q$. Ese múltiplo es $q/p$:

> [!formula] Eliminación bajo un pivote
> $$
> R_j\leftarrow R_j-\frac{q}{p}R_i,
> \qquad q-\frac{q}{p}p=0.
> $$

Con $p=1$ y $q=2$, restamos dos veces la fila pivote. Con $p=2$ y $q=4$, también restamos dos veces esa fila. La división se hace por el pivote, que debe ser no nulo. Si queremos que pase a valer $1$, dividimos toda su fila por $p$.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - pivotes
---
> [!note] Pregunta
> ¿Cómo se normaliza un pivote no nulo $p$ en la fila $R_i$?
===
> [!important] Respuesta
> Se multiplica toda la fila por $1/p$, que está definido porque $p\ne0$; el pivote pasa a valer $1$.
```

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - pivotes
---
> [!note] Pregunta
> Si la fila $R_i$ contiene un pivote $p\ne0$ y en esa columna la fila inferior $R_j$ contiene $q$, ¿qué operación anula $q$?
===
> [!important] Respuesta
> $R_j\leftarrow R_j-(q/p)R_i$; la entrada pasa a $q-(q/p)p=0$.
```

### Sustitución hacia atrás

Una vez escalonado el sistema, resolvemos desde la última ecuación no nula hacia la primera. El valor de la última incógnita despejada se sustituye en la ecuación anterior, y así sucesivamente. Si hay incógnitas libres, se conservan como parámetros. Una ecuación $0=c$ con $c\ne0$ indica que el sistema no tiene solución; en ese caso no se inicia la sustitución.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - sustitución-hacia-atrás
---
> [!note] Pregunta
> ¿En qué orden se resuelve un sistema escalonado mediante sustitución hacia atrás?
===
> [!important] Respuesta
> Desde la última ecuación no nula hacia la primera, sustituyendo en cada una los valores o expresiones ya obtenidos.
```

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - compatibilidad
---
> [!note] Pregunta
> ¿Qué indica una fila $[0\ \cdots\ 0\mid c]$ con $c\ne0$ en una matriz ampliada?
===
> [!important] Respuesta
> La ecuación imposible $0=c$; el sistema no tiene solución.
```

### Método de Gauss–Jordan

El [[Matemáticas/Álgebra lineal/Eliminación de Gauss-Jordan|método de Gauss–Jordan]] llega hasta la forma escalonada reducida: convierte los pivotes en $1$ y anula también las entradas situadas por encima.

Si el sistema es compatible, el resultado ya tiene despejadas las incógnitas de las columnas pivote. Las incógnitas de las otras columnas de coeficientes son **variables libres**: se eligen como parámetros y las ecuaciones determinan las variables pivote en función de ellas.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - métodos
---
> [!note] Pregunta
> ¿Qué hace Gauss–Jordan después de alcanzar una forma escalonada?
===
> [!important] Respuesta
> Normaliza los pivotes a $1$ y elimina también las entradas situadas por encima de ellos, hasta obtener la forma escalonada reducida.
```

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - variables-libres
---
> [!note] Pregunta
> En un sistema reducido que tiene solución, ¿qué variables son libres según las columnas de su matriz de coeficientes?
===
> [!important] Respuesta
> Las correspondientes a columnas sin pivote; pueden elegirse como parámetros, y las ecuaciones determinan las variables pivote en función de ellas.
```

### Ejemplo trabajado: reducción de un sistema

Retomamos el sistema de dos ecuaciones de la introducción:

$$
\begin{cases}2x+y=5,\\x-y=1.\end{cases}
$$

Su matriz ampliada es

$$
\left[\begin{array}{cc|c}2&1&5\\1&-1&1\end{array}\right].
$$

El coeficiente de $x$ en la segunda ecuación ya es $1$. Intercambiamos las filas para usarlo como primer pivote y restamos dos veces esa fila a la segunda:

$$
\left[\begin{array}{cc|c}1&-1&1\\2&1&5\end{array}\right]
\xrightarrow{R_2\leftarrow R_2-2R_1}
\left[\begin{array}{cc|c}1&-1&1\\0&3&3\end{array}\right].
$$

La segunda fila da $3y=3$, de donde $y=1$. Sustituimos en la primera ecuación, $x-y=1$, y obtenemos $x=2$. Con esto termina **Gauss con sustitución hacia atrás**.

Para llegar a la forma reducida mediante **Gauss–Jordan**, dividimos la segunda fila por $3$ y la sumamos a la primera:

$$
\left[\begin{array}{cc|c}1&-1&1\\0&1&1\end{array}\right]
\xrightarrow{R_1\leftarrow R_1+R_2}
\left[\begin{array}{cc|c}1&0&2\\0&1&1\end{array}\right].
$$

En la forma reducida se leen $x=2$ e $y=1$. La comprobación en el sistema original da

$$
2\cdot2+1=5,\qquad 2-1=1.
$$

## Reducciones completas y composición de operaciones

### Del sistema a la matriz

Consideremos ahora tres ecuaciones:[^a4]

$$
\begin{cases}
-2x+4y-3z=-1,\\
5x-5y+10z=5,\\
3x+y+5z=14.
\end{cases}
$$

La segunda ecuación tiene todos sus coeficientes divisibles por $5$. Al dividirla por $5$, obtenemos $x-y+2z=1$. La colocamos arriba para empezar con pivote $1$.

$$
\left[\begin{array}{ccc|c}-2&4&-3&-1\\5&-5&10&5\\3&1&5&14\end{array}\right]
\sim
\left[\begin{array}{ccc|c}1&-1&2&1\\-2&4&-3&-1\\3&1&5&14\end{array}\right].
$$

El primer pivote es $1$. Para anular el $-2$ de la segunda fila se suma dos veces la primera; para anular el $3$ de la tercera se restan tres veces la primera:

$$
\begin{aligned}
R_2&\leftarrow R_2+2R_1,\\
R_3&\leftarrow R_3-3R_1.
\end{aligned}
$$

Las dos últimas ecuaciones ya no contienen $x$:

$$
2y+z=1,\qquad 4y-z=11.
$$

La matriz es

$$
\left[\begin{array}{ccc|c}1&-1&2&1\\0&2&1&1\\0&4&-1&11\end{array}\right].
$$

El segundo pivote es $2$ en la columna de $y$. Para anular el $4$ que queda debajo, se resta dos veces la segunda fila a la tercera:

$$
R_3\leftarrow R_3-2R_2.
$$

La nueva tercera fila expresa $-3z=9$. La matriz escalonada, antes de normalizar el último pivote, es

$$
\left[\begin{array}{ccc|c}1&-1&2&1\\0&2&1&1\\0&0&-3&9\end{array}\right].
$$

#### Resolver por sustitución hacia atrás

De abajo hacia arriba, las ecuaciones dan

$$
\begin{aligned}
-3z=9&\quad\Longrightarrow\quad z=-3,\\
2y+z=1&\quad\Longrightarrow\quad 2y-3=1\quad\Longrightarrow\quad y=2,\\
x-y+2z=1&\quad\Longrightarrow\quad x-2-6=1\quad\Longrightarrow\quad x=9.
\end{aligned}
$$

#### Continuar hasta la forma reducida

La alternativa es seguir operando con las filas. Primero dividimos la tercera por $-3$:

$$
R_3\leftarrow-\tfrac13R_3.
$$

Restamos la tercera fila a la segunda y dos veces la tercera a la primera para anular las entradas sobre ese pivote:

$$
\begin{aligned}
R_2&\leftarrow R_2-R_3,\\
R_1&\leftarrow R_1-2R_3.
\end{aligned}
$$

Después de eliminar por encima del tercer pivote, la matriz es

$$
\left[\begin{array}{ccc|c}
1&-1&0&7\\
0&2&0&4\\
0&0&1&-3
\end{array}\right].
$$

Dividimos la segunda fila por $2$ y la sumamos a la primera:

$$
\begin{aligned}
R_2&\leftarrow\tfrac12R_2,\\
R_1&\leftarrow R_1+R_2.
\end{aligned}
$$

$$
\left[\begin{array}{ccc|c}1&0&0&9\\0&1&0&2\\0&0&1&-3\end{array}\right].
$$

La solución es $(x,y,z)=(9,2,-3)$. En las tres ecuaciones originales resulta

$$
\begin{aligned}
-2(9)+4(2)-3(-3)&=-1,\\
5(9)-5(2)+10(-3)&=5,\\
3(9)+2+5(-3)&=14.
\end{aligned}
$$

### Invertir operaciones y construir matrices elementales

Para recuperar una matriz anterior, hay que deshacer los pasos en orden contrario. Si primero intercambiamos dos filas y después escalamos una, deshacemos antes el escalado y después el intercambio.

| Operación | Operación inversa |
|---|---|
| $R_i\leftrightarrow R_j$ | $R_i\leftrightarrow R_j$ |
| $R_i\leftarrow\lambda R_i$, $\lambda\ne0$ | $R_i\leftarrow\lambda^{-1}R_i$ |
| $R_i\leftarrow R_i+\lambda R_j$, $i\ne j$ | $R_i\leftarrow R_i-\lambda R_j$ |

En el reemplazo, la fila $j$ no se modifica. Por eso podemos restar exactamente el múltiplo que habíamos añadido.[^a5]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - operaciones-inversas
---
> [!note] Pregunta
> ¿Qué operación deshace el intercambio de dos filas $R_i\leftrightarrow R_j$?
===
> [!important] Respuesta
> El mismo intercambio $R_i\leftrightarrow R_j$.
```

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - operaciones-inversas
---
> [!note] Pregunta
> ¿Qué operación deshace el escalado $R_i\leftarrow\lambda R_i$ cuando $\lambda\ne0$?
===
> [!important] Respuesta
> El escalado $R_i\leftarrow\lambda^{-1}R_i$.
```

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - operaciones-inversas
---
> [!note] Pregunta
> ¿Qué operación deshace el reemplazo $R_i\leftarrow R_i+\lambda R_j$?
===
> [!important] Respuesta
> $R_i\leftarrow R_i-\lambda R_j$, manteniendo intacta la fila $j$.
```

Para construir la matriz elemental de cada operación, la aplicamos a $I_3$.

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

Para $R_1\leftarrow R_1-5R_3$, partimos de $I_3$ y restamos cinco veces su tercera fila a la primera:

$$
E_{13}(-5)=\begin{pmatrix}1&0&-5\\0&1&0\\0&0&1\end{pmatrix}.
$$

Para $R_3\leftarrow R_3+6R_2$, sumamos seis veces la segunda fila de $I_3$ a su tercera fila:

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

El bloque derecho conserva el efecto conjunto de las operaciones. No se trata aquí de la columna de términos independientes de un sistema: hemos añadido una identidad para calcular la matriz $Q$.[^comp]

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

### Ejemplo: cuatro pivotes en una matriz $4\times5$

Reducimos la matriz siguiente sin interpretar su última columna como términos independientes:[^a5]

$$
A=\begin{pmatrix}6&-28&4&23&-6\\5&-28&4&20&-7\\-3&15&0&-9&3\\2&-12&4&8&0\end{pmatrix}.
$$

#### Primer pivote

Elegimos el $-3$ de la tercera fila porque al dividir esa fila por $-3$ obtenemos coeficientes enteros y un pivote $1$. La llevamos a la primera posición y anulamos las otras entradas de esa columna:

$$
\begin{aligned}
R_3&\leftarrow-\tfrac13R_3,\\
R_1&\leftrightarrow R_3,\\
R_2&\leftarrow R_2-5R_1,\\
R_3&\leftarrow R_3-6R_1,\\
R_4&\leftarrow R_4-2R_1.
\end{aligned}
$$

$$
A_1=\begin{pmatrix}1&-5&0&3&-1\\0&-3&4&5&-2\\0&2&4&5&0\\0&-2&4&2&2\end{pmatrix}\in M_{4\times5}(\mathbb R).
$$

#### Segundo pivote

En la segunda columna, $-3+2=-1$. Sumamos la tercera fila a la segunda para obtener ese pivote y usamos la **nueva segunda fila** en los dos pasos siguientes:

$$
\begin{aligned}
R_2&\leftarrow R_2+R_3,\\
R_3&\leftarrow R_3+2R_2,\\
R_4&\leftarrow R_4-2R_2.
\end{aligned}
$$

El resultado es la matriz

$$
A_2=\begin{pmatrix}1&-5&0&3&-1\\0&-1&8&10&-2\\0&0&20&25&-4\\0&0&-12&-18&6\end{pmatrix}\in M_{4\times5}(\mathbb R).
$$

### Ejemplo: completar la reducción de la matriz $4\times5$

#### Tercer y cuarto pivotes

Continuamos desde $A_2$. En la tercera columna hay un $20$ y un $-12$. Dividir la cuarta fila por $-6$ deja un pivote $2$ y mantiene enteros todos los coeficientes. Después la intercambiamos con la tercera:[^a6]

$$
\begin{aligned}
R_4&\leftarrow -\tfrac16R_4,\\
R_3&\leftrightarrow R_4.
\end{aligned}
$$

Así, el elemento $20$ de la nueva cuarta fila se anula restando diez veces la tercera fila, cuyo pivote en la tercera columna es $2$: $20-10\cdot2=0$.

$$
R_4\leftarrow R_4-10R_3.
$$

Se llega a la forma escalonada $U\in M_{4\times5}(\mathbb R)$, con pivotes en las cuatro primeras columnas:

$$
U=\begin{pmatrix}1&-5&0&3&-1\\0&-1&8&10&-2\\0&0&2&3&-1\\0&0&0&-5&6\end{pmatrix}.
$$

#### Eliminar por encima de los pivotes

El último pivote es $-5$. Para anular, por ejemplo, el $3$ situado en la misma columna de la tercera fila, sumamos $3/5$ veces la última fila: $3+(3/5)(-5)=0$. Aplicamos el mismo cálculo a las otras dos filas:

$$
\begin{aligned}
R_3&\leftarrow R_3+\tfrac35R_4,\\
R_2&\leftarrow R_2+2R_4,\\
R_1&\leftarrow R_1+\tfrac35R_4.
\end{aligned}
$$

Después se anula la entrada sobre el pivote de la tercera columna en la segunda fila y, con la segunda fila ya preparada, se anula la entrada sobre el pivote de la segunda columna:

$$
\begin{aligned}
R_2&\leftarrow R_2-4R_3,\\
R_1&\leftarrow R_1-5R_2.
\end{aligned}
$$

El primer pivote ya vale $1$. Dividimos las otras tres filas por sus respectivos pivotes, $-1$, $2$ y $-5$:

$$
\begin{aligned}
R_2&\leftarrow -R_2,\\
R_3&\leftarrow \tfrac12R_3,\\
R_4&\leftarrow -\tfrac15R_4.
\end{aligned}
$$

El resultado reducido $R\in M_{4\times5}(\mathbb R)$ tiene cuatro pivotes, de modo que $r(A)=4$:

$$
R=\begin{pmatrix}1&0&0&0&23/5\\0&1&0&0&2/5\\0&0&1&0&13/10\\0&0&0&1&-6/5\end{pmatrix}.
$$

### Ejemplo: leer el rango en forma escalonada

En una matriz escalonada podemos contar directamente las filas no nulas:[^a6]

$$
D=\begin{pmatrix}0&5&2&5&-1\\0&0&0&8&3\\0&0&0&0&0\end{pmatrix}.
$$

Los pivotes son $5$ y $8$, en las columnas 2 y 4. Hay dos filas no nulas, de modo que $r(D)=2$.

### Ejemplo: reducción de una matriz $4\times6$

Esta reducción incluye columnas sin pivote y una fila que acaba siendo nula:[^a6]

$$
A=\begin{pmatrix}0&2&0&0&1&0\\0&5&-1&0&5&-5\\0&7&-17&0&32&-57\\0&-5&-1&0&-4&3\end{pmatrix}.
$$

La primera columna es nula, así que no puede tener pivote; se avanza a la columna 2. Primero se resta dos veces la primera fila de la segunda; esta operación convierte el $5$ de la segunda columna en $1$:

$$
R_2\leftarrow R_2-2R_1.
$$

Después se intercambian las dos primeras filas para colocar ese pivote en la primera fila:

$$
R_1\leftrightarrow R_2.
$$

Las siguientes operaciones anulan las entradas bajo el pivote de la segunda columna:

$$
\begin{aligned}
R_2&\leftarrow R_2-2R_1,\\
R_3&\leftarrow R_3-7R_1,\\
R_4&\leftarrow R_4+5R_1.
\end{aligned}
$$

$$
A_1=\begin{pmatrix}0&1&-1&0&3&-5\\0&0&2&0&-5&10\\0&0&-10&0&11&-22\\0&0&-6&0&11&-22\end{pmatrix}\in M_{4\times6}(\mathbb R).
$$

#### Pivotes en las columnas 3 y 5

El siguiente pivote es el $2$ de la segunda fila, en la columna 3. Sumando cinco veces esa fila a la tercera y tres veces a la cuarta, anulamos $-10$ y $-6$:

$$
\begin{aligned}
R_3&\leftarrow R_3+5R_2,\\
R_4&\leftarrow R_4+3R_2.
\end{aligned}
$$

Las dos últimas filas pasan a ser

$$
\begin{pmatrix}
0&0&0&0&-14&28\\
0&0&0&0&-4&8
\end{pmatrix}.
$$

La columna 4 es nula. En la columna 5 dividimos la tercera fila por $-14$ para obtener un pivote $1$ y eliminamos el $-4$ de debajo:

$$
\begin{aligned}
R_3&\leftarrow-\tfrac1{14}R_3,\\
R_4&\leftarrow R_4+4R_3.
\end{aligned}
$$

El resultado es

$$
B=\begin{pmatrix}0&1&-1&0&3&-5\\0&0&2&0&-5&10\\0&0&0&0&1&-2\\0&0&0&0&0&0\end{pmatrix}.
$$

Hay tres pivotes, en las columnas 2, 3 y 5; por tanto, $r(A)=3$.

#### Llegar a la forma reducida

El pivote de la última fila no nula ya vale $1$. Lo usamos para eliminar el $-5$ y el $3$ que tiene encima. Después dividimos la segunda fila por $2$ y la sumamos a la primera para anular su $-1$ en la columna 3:

$$
\begin{aligned}
R_2&\leftarrow R_2+5R_3,\\
R_1&\leftarrow R_1-3R_3,\\
R_2&\leftarrow \tfrac12R_2,\\
R_1&\leftarrow R_1+R_2.
\end{aligned}
$$

Así se obtiene la forma reducida

$$
C=\begin{pmatrix}0&1&0&0&0&1\\0&0&1&0&0&0\\0&0&0&0&1&-2\\0&0&0&0&0&0\end{pmatrix}\in M_{4\times6}(\mathbb R).
$$

## Condiciones de validez y errores frecuentes

> [!warning] La operación afecta a toda la ecuación
> En $[A\mid\mathbf b]$, cada operación debe aplicarse también al término independiente. Si dividimos $2x+y=5$ por $2$, obtenemos $x+\tfrac12y=\tfrac52$, no $x+\tfrac12y=5$.

Antes de dividir por un pivote, comprobamos que sea no nulo. Si es cero, buscamos otra fila; si toda la parte pendiente de la columna es nula, pasamos a la siguiente.

En una lista de operaciones, cada paso actúa sobre la matriz que ha dejado el anterior. Así, después de $R_2\leftarrow R_2+R_3$, una operación que use $R_2$ utiliza **su valor actualizado**. Esto importa especialmente cuando varias operaciones se escriben juntas.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - operaciones-fila
---
> [!note] Pregunta
> Después de efectuar $R_2\leftarrow R_2+R_3$, ¿qué fila $R_2$ se usa en la siguiente operación de una secuencia?
===
> [!important] Respuesta
> La fila $R_2$ actualizada, obtenida en el paso anterior.
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
```

La reducción ya da las ecuaciones con las que decidiremos si un sistema tiene solución y cuántos parámetros necesita. Esa lectura se desarrolla en [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa|Compatibilidad, rango e inversa]].

## 📚 Fuentes

### Material base aportado

[^a4]: FCUL, *Álgebra Linear e Geometria Analítica*, 2026/27, aula 4, diapositivas 13–17. Fuente de las convenciones sobre pivotes, formas escalonadas y del ejemplo con tres ecuaciones. Archivo docente: `ALGA-2026-27-AulasTeo-slides-aula4-FormaEscada-impressao.pdf`.

[^a5]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 5, 25/09/2026, «Transformações Elementares», diapositivas 2–11. La diapositiva 8 propone como TPC demostrar que $EA$ realiza sobre $A$ la operación que construye $E$; aquí se resuelven sus tres casos. Archivo docente: `ALGA-2026-27-AulasTeo-slides-aula5-TransfElem-impressao.pdf`.

[^a6]: FCUL, *Álgebra Linear e Geometria Analítica*, 2026/27, aula 6, diapositivas 2–10. Fuente de los ejemplos de rango y de la continuación de las reducciones. Archivo docente: `ALGA-2026-27-AulasTeo-slides-aula6-CaractMatrizesInv-impressao.pdf`.

### Ampliación académica

[^pres]: Instituto Superior Técnico, *Apontamentos de Álgebra Linear*, §1.10, pp. 15–16, justificación de la conservación de soluciones en las tres operaciones. La demostración se adapta al español y a la notación de esta nota. [PDF](https://fenix.tecnico.ulisboa.pt/downloadFile/563568428979297/ApontamentosInteg.pdf).

[^rref]: Instituto Superior Técnico, *Apontamentos de Álgebra Linear*, Teorema 1.12, pp. 17–18, prueba por inducción en el número de columnas de la unicidad de la forma escalonada reducida. Se conserva ese argumento, adaptado al español y con el paso de la variable libre explicado. La existencia se desarrolla aquí a partir del algoritmo de Gauss–Jordan, que la fuente invoca. [PDF](https://fenix.tecnico.ulisboa.pt/downloadFile/563568428979297/ApontamentosInteg.pdf).

[^rank]: Instituto Superior Técnico, *Apontamentos de Álgebra Linear*, Corolario 1.13, p. 18, enunciado de la invariancia del rango como corolario de la unicidad. El argumento que explica por qué la reducción conserva el número de filas no nulas se desarrolla en esta nota; no es una transcripción de una prueba separada de la fuente. [PDF](https://fenix.tecnico.ulisboa.pt/downloadFile/563568428979297/ApontamentosInteg.pdf).

[^comp]: W. Keith Nicholson, *Linear Algebra with Applications*, §2.5, apartado “Inverses and Elementary Matrices”, deducción $A\to UA=B$ anterior al Teorema 1, donde se representa una secuencia de operaciones mediante el producto de matrices elementales. [LibreTexts](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_%28Nicholson%29/02%3A_Matrix_Algebra/2.05%3A_Elementary_Matrices).

[^emdr]: Robert A. Beezer, *A First Course in Linear Algebra*, §DM, Teorema EMDRO, prueba completa por entradas de los tres tipos de operación. Las demostraciones de esta nota adaptan ese argumento y su notación; la suma del producto recorre las $m$ filas de $A$. [Sección sobre matrices elementales](https://linear.pugetsound.edu/fcla/section-DM.html#theorem-EMDRO).

[^emni]: W. Keith Nicholson, *Linear Algebra with Applications*, §2.5, Lema 2.5.2 y párrafo inmediatamente anterior: la operación inversa deshace la operación elemental y su matriz satisface $FE=I$, por lo que es la inversa de $E$. La prueba de esta nota también aplica el mismo razonamiento en orden inverso para explicitar la identidad $EF=I$. [LibreTexts](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_%28Nicholson%29/02%3A_Matrix_Algebra/2.05%3A_Elementary_Matrices).

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como tutor de eliminación y matrices elementales para un estudiante que conoce la suma y el producto matriciales, pero está aprendiendo a reducir sistemas. Haz una pregunta cada vez y espera la respuesta. Si hay un error, localiza el paso y ofrece primero una pista; no anticipes toda la resolución. No generes ejercicios nuevos: trabaja con los ejemplos siguientes y pide explicar decisiones, cálculos y comprobaciones.

**Base matemática.** En un sistema $A\mathbf x=\mathbf b$, con $A\in M_{m\times n}(K)$, $\mathbf x\in K^n$ y $\mathbf b\in K^m$, la matriz ampliada es $[A\mid\mathbf b]$. Las operaciones elementales son intercambiar dos filas, multiplicar una fila por un escalar no nulo y sumar a una fila un múltiplo de otra distinta. Afectan a la fila completa y conservan las soluciones porque pueden deshacerse.

Una matriz está escalonada si las filas nulas quedan abajo y los pivotes —primeras entradas no nulas de las filas— avanzan hacia la derecha. En la forma reducida, cada pivote vale $1$ y es la única entrada no nula de su columna. La forma reducida es única; las formas escalonadas pueden variar, pero todas tienen el mismo número de pivotes, el rango. Gauss elimina debajo de los pivotes y termina con sustitución hacia atrás; Gauss–Jordan elimina también encima y normaliza los pivotes.

**Ejemplo disponible.** Para $2x+y=5$, $x-y=1$, intercambiar filas y efectuar $R_2\leftarrow R_2-2R_1$ da $x-y=1$, $3y=3$. De aquí se obtienen $y=1$ y $x=2$. Para reducir, dividir la segunda fila por $3$ y sumarla a la primera da $[I_2\mid(2,1)^T]$. Pide justificar el factor $2$, el efecto sobre el término independiente y la comprobación en las ecuaciones originales.

**Segundo ejemplo disponible.** El sistema $-2x+4y-3z=-1$, $5x-5y+10z=5$, $3x+y+5z=14$ se reduce a $x-y+2z=1$, $2y+z=1$, $-3z=9$, con solución $(9,2,-3)$. Úsalo para distinguir sustitución hacia atrás y reducción completa.

**Matrices elementales.** Una operación sobre $I_m$ produce $E$; el producto $EA$ realiza esa misma operación sobre $A$. Cada $E$ es invertible, y su inversa corresponde a la operación inversa. Si se aplican $E_1$ y después $E_2$, el resultado es $E_2E_1A$. Operar sobre $[A\mid I_m]$ deja $[QA\mid Q]$, donde $Q$ representa toda la secuencia.

Evalúa por separado el cálculo y su justificación: por qué se puede dividir, qué fila está siendo modificada, si se usa su valor actualizado y qué asegura la conservación de soluciones. Si se pide una prueba, fija las dimensiones y los índices antes de operar por componentes; evita sustituir la justificación por un ejemplo numérico.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
