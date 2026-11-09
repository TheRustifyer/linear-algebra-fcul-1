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
fsrs_goal: Elegir y justificar operaciones elementales que reduzcan una matriz ampliada, construir sus matrices elementales e inversas y ordenar su composición, reconocer pivotes y formas escalonadas, explicar la existencia y unicidad de la forma reducida y la invariancia del rango, y resolver los sistemas del capítulo por Gauss o Gauss–Jordan comprobando las soluciones.
simbolos:
  - R_i\leftrightarrow R_j
  - R_i\leftarrow cR_i
  - R_i\leftarrow R_i+cR_j
  - E_{ij}
  - "[A\\mid\\mathbf b]"
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

podemos eliminar $x$ de la primera ecuación restándole dos veces la segunda:

$$
(2x+y)-2(x-y)=5-2\cdot1.
$$

Los términos $2x$ y $-2x$ se anulan. Queda $3y=3$, de donde $y=1$. La ecuación que hemos conservado, $x-y=1$, da entonces $x=2$.

El sistema transformado contiene las ecuaciones $3y=3$ y $x-y=1$. Podemos recuperar la primera ecuación original sumando a $3y=3$ dos veces la ecuación conservada. Por eso la transformación conserva las soluciones en ambos sentidos.

La **eliminación** aplica este tipo de operaciones hasta obtener ecuaciones que podamos resolver en orden. Para llevar la cuenta de los coeficientes y de sus cambios utilizaremos la matriz ampliada.

### La matriz ampliada

Para seguir esas transformaciones sin reescribir las letras en cada línea, fijamos el orden de incógnitas $x,y$ y registramos los coeficientes y los términos independientes:

$$
\left[\begin{array}{cc|c}
2&1&5\\
1&-1&1
\end{array}\right].
$$

Cada fila representa una ecuación; las columnas, en orden, representan los coeficientes de $x$, de $y$ y el término independiente. Al efectuar $R_1\leftrightarrow R_2$ y luego $R_2\leftarrow R_2-2R_1$, también se transforma la última entrada de la fila: $5-2\cdot1=3$. Así se obtiene la fila $[0\;3\mid3]$, que expresa exactamente $3y=3$.

![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/02-operaciones-fila-completa.svg|*La operación actúa sobre los coeficientes y el término independiente de la ecuación.*]]

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/02-operaciones-fila-completa.excalidraw|Abrir figura editable]]

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

Denotamos por $R_1,\ldots,R_m$ las filas de la matriz. Sobre ellas podemos realizar tres [[Matemáticas/Álgebra lineal/Operaciones elementales por filas|operaciones elementales]]: intercambiar dos filas, multiplicar una por un escalar no nulo o sumarle un múltiplo de otra. En una matriz ampliada, cada una transforma una ecuación del sistema.

### Intercambio de filas

> [!definicion] Intercambio
> Para $i\ne j$, la operación
>
> $$
> R_i\leftrightarrow R_j
> $$
>
> intercambia las filas $i$ y $j$.[^a5]

El coeficiente de $x$ en la segunda ecuación es $1$. Llevamos esa ecuación a la primera fila para utilizarlo como [[#Pivote|pivote]]:

$$
\left[\begin{array}{cc|c}2&1&5\\1&-1&1\end{array}\right]
\xrightarrow{R_1\leftrightarrow R_2}
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

Para convertir el coeficiente $2$ de $x$ en un $1$, multiplicamos la primera fila por $1/2$:

$$
\left[\begin{array}{cc|c}2&1&5\\1&-1&1\end{array}\right]
\xrightarrow{R_1\leftarrow\frac12R_1}
\left[\begin{array}{cc|c}1&1/2&5/2\\1&-1&1\end{array}\right].
$$

El cálculo afecta a las tres entradas: $2/2=1$, $1/2$ y $5/2$. Multiplicar de nuevo la fila por $2$ devuelve la ecuación inicial.

> [!warning] El factor cero no permite volver atrás
> Si multiplicásemos $2x+y=5$ por cero, obtendríamos $0=0$, que cumple cualquier pareja $(x,y)$. Habríamos eliminado una condición del sistema; no podríamos recuperarla dividiendo por cero.

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
> ¿Qué hace el reemplazo elemental $R_i\leftarrow R_i+cR_j$?
===
> [!important] Respuesta
> Suma $c$ veces la fila $j$ a la fila $i$, con $i\ne j$ y $c\in K$.
```

### Equivalencia por filas

> [!definicion] Matrices equivalentes por filas
> Dos matrices del mismo tamaño son **equivalentes por filas** si una se obtiene de la otra mediante una secuencia finita de [[#Operaciones elementales por filas|operaciones elementales]]. Escribimos $A\sim B$.[^pres]

Para pasar de $B$ a $A$, deshacemos las operaciones en el orden contrario al utilizado: la última se deshace primero. Por tanto, $A\sim B$ implica también $B\sim A$.

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

> [!demostracion] Demostración
> Consideremos el sistema $A\mathbf x=\mathbf b$ y apliquemos una operación a sus ecuaciones. Para comparar los conjuntos de soluciones, comprobamos que cada operación se puede deshacer.
>
> **[[#Intercambio de filas|Intercambio]].** Reordenar dos ecuaciones no cambia cuáles deben cumplirse: si se satisfacen todas antes del intercambio, se satisfacen todas después, y el intercambio inverso las devuelve a su orden inicial.
>
> **[[#Escalado por un escalar no nulo|Escalado]].** Multiplicar una ecuación por $c\ne0$ conserva sus soluciones, porque podemos dividir por $c$ para recuperar la ecuación original. La condición $c\ne0$ es esencial para que esa [[#Inversas de los tres tipos|operación inversa]] exista.
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
> Una [[Matemáticas/Álgebra lineal/Matriz elemental|matriz elemental]] se obtiene aplicando ==una única operación elemental== por filas a una [[Matemáticas/Álgebra lineal/Matriz identidad|matriz identidad]] $I_m$.[^a5]

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

En la primera fila de $P_{13}$, el $1$ ocupa la tercera columna. Al multiplicar por $A$, esa fila selecciona la tercera fila de $A$. La tercera fila de $P_{13}$ selecciona la primera. La fila central conserva su posición. El producto $P_{13}A$ efectúa, por tanto, el intercambio para cualquier matriz $A$ con tres filas.

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

Fijamos la fila $r$ y una columna $k$ del resultado. El índice $\ell$ recorre las $m$ filas de $A$: cada entrada $e_{r\ell}$ multiplica la entrada de esa fila situada en la columna $k$.

Si la fila $r$ de $E$ es $(0,1,-5)$, el cálculo queda

$$
(EA)_{rk}=0a_{1k}+1a_{2k}-5a_{3k}=a_{2k}-5a_{3k}.
$$

La misma combinación se realiza en todas las columnas. Por eso la fila completa del resultado es $R_2-5R_3$. Para representar una operación elemental que modifique la segunda fila, ésta sería precisamente la fila $2$ de $E$.

![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/02-matriz-elemental-izquierda.svg|*La fila de E indica cómo combinar las filas de A en EA.*]]

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/02-matriz-elemental-izquierda.excalidraw|Abrir figura editable]]

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
> Sea $B$ el resultado de $R_i\leftarrow\lambda R_i$ en $A\in M_{m\times n}(K)$, con $1\le i\le m$ y $\lambda\in K\setminus\{0\}$. Si $D_i(\lambda)$ es $I_m$ con la entrada $(i,i)$ sustituida por $\lambda$, entonces
>
> $$
> \boxed{B=D_i(\lambda)A}.
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
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
> ¿Qué matriz elemental representa $R_i\leftarrow R_i+\lambda R_j$ con $i\ne j$?
===
> [!important] Respuesta
> $E_{ij}(\lambda)$ es la identidad con $\lambda$ en la posición $(i,j)$; por la izquierda suma $\lambda$ veces la fila $j$ a la fila $i$.
```

### Inversa bilateral

Repetir el [[#Intercambio de filas|intercambio]] de las filas primera y tercera devuelve la matriz inicial. En términos de productos, $P_{13}P_{13}=I_3$. Para los demás tipos de operación también buscaremos una matriz que deshaga su efecto.

> [!definicion] Inversa bilateral
> Para $E,F\in M_m(K)$, decimos que $F$ es la [[Matemáticas/Álgebra lineal/Matriz inversa|inversa]] de $E$ si
>
> $$
> EF=FE=I_m.
> $$
>
> En ese caso escribimos $F=E^{-1}$. Se exigen ambos órdenes del producto.[^emni]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - matrices-elementales
  - inversibilidad
---
> [!note] Pregunta
> ¿Qué significa que $F$ sea la inversa bilateral de una matriz cuadrada $E$?
===
> [!important] Respuesta
> Que $EF=FE=I$; al componer en cualquiera de los dos órdenes, se obtiene la matriz identidad.
```

### Invertibilidad de las matrices elementales

#### Propiedad

> [!consecuencia] Las matrices elementales son invertibles
> Si $E$ es una [[Matemáticas/Álgebra lineal/Matriz elemental|matriz elemental]] de orden $m$, la matriz $F$ de la operación inversa satisface
>
> $$
> \boxed{FE=EF=I_m}.
> $$
>
> Por tanto, $F=E^{-1}$.[^emni]

#### Demostración

> [!demostracion] Demostración
> Sea $E$ la matriz elemental asociada a una operación y sea $F$ la que representa la operación inversa. Para toda matriz $A$ con $m$ filas, aplicar primero $E$ y luego $F$ devuelve $A$; por tanto, $F(EA)=A$. Por [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices y operaciones#Asociatividad del producto|asociatividad]], $(FE)A=A$. Tomando $A=I_m$, queda $FE=I_m$.
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

Para construir $E^{-1}$ aplicamos a $I_m$ la operación inversa. Un intercambio se repite; un [[#Escalado por un escalar no nulo|escalado]] se deshace con el factor recíproco; un [[#Reemplazo de una fila|reemplazo]], restando el múltiplo que se había añadido:

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
> Si las [[Matemáticas/Álgebra lineal/Matriz elemental|matrices elementales]] $E_1,\ldots,E_p$, de orden $m$, representan las operaciones en el orden en que se aplican a $A\in M_{m\times n}(K)$, el resultado $B$ es
>
> $$
> \boxed{B=(E_p\cdots E_2E_1)A}.
> $$
>
> La primera operación corresponde al factor más próximo a $A$.[^comp]

#### Demostración

> [!demostracion] Demostración
> Si primero se aplica $E_1$ y después $E_2$, el resultado es
>
> $$
> E_2(E_1A).
> $$
>
> Por [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices y operaciones#Asociatividad del producto|asociatividad]],
>
> $$
> E_2(E_1A)=(E_2E_1)A.
> $$
>
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
> La posición [[#Pivote|pivote]] es el par de índices $(i,j)$ que localiza el pivote: $i$ indica su fila y $j$, su columna.[^a4]

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

Los pivotes son $7$, $-8$ y $-3$. El segundo está en la columna $3$, pero el tercero vuelve a la columna $2$. La matriz no está escalonada: al bajar, los pivotes deben avanzar hacia la derecha. Intercambiar las dos últimas filas corregiría ese orden.

### Forma escalonada por filas

> [!definicion] Forma escalonada por filas
> Una matriz está en [[Matemáticas/Álgebra lineal/Forma escalonada|forma escalonada por filas]] cuando:
>
> 1. Las filas nulas están debajo de todas las filas no nulas.
> 2. Al bajar de una fila no nula a la siguiente, el [[#Pivote|pivote]] se desplaza estrictamente hacia la derecha.
> 3. Debajo de cada pivote hay ceros.[^a4]

No se exige que los pivotes valgan $1$. Por ejemplo, una fila puede comenzar con $-7$ y cumplir la definición.

La tercera condición se deduce de la segunda: si una fila inferior tuviera una entrada no nula en la columna de un pivote anterior, su primera entrada no nula no podría estar a la derecha de esa columna. Se explicita porque esos son los ceros que construye la eliminación.

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
>
> ![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/02-forma-escalonada-anki.png|Pivotes 2 y 3 en columnas 1 y 2; fila nula al final|420]]
```

### Forma escalonada reducida

> [!definicion] Forma escalonada reducida
> Una matriz está en [[Matemáticas/Álgebra lineal/Forma escalonada reducida|forma escalonada reducida]] si está escalonada y cumple dos condiciones más:
>
> 1. Todos sus [[#Pivote|pivotes]] valen $1$.
> 2. En cada columna pivote, todas las demás entradas son cero.[^a4]

En una [[#Forma escalonada por filas|forma escalonada]], las entradas situadas debajo de los pivotes ya son cero. Para obtener la forma reducida aún debemos convertir cada pivote en $1$ y anular las entradas de su columna que quedan **encima**. No se impone esa condición a las columnas sin pivote.

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

![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/02-pivotes-y-formas-escalonadas.svg|*Los pivotes avanzan a la derecha; las filas nulas quedan al final. En RREF, cada pivote es el único elemento no nulo de su columna.*]]

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/02-pivotes-y-formas-escalonadas.excalidraw|Abrir figura editable]]

### Ejemplos de matrices escalonadas

#### Tres pivotes y dos filas nulas

$$
\begin{pmatrix}0&2&5&3&0&3\\0&0&-7&0&8&0\\0&0&0&0&3&1\\0&0&0&0&0&0\\0&0&0&0&0&0\end{pmatrix}.
$$

La primera fila comienza con un cero: su [[#Pivote|pivote]] es $2$, en la columna $2$. En las filas siguientes, los pivotes son $-7$ en la columna $3$ y $3$ en la columna $5$. Avanzan hacia la derecha; las dos filas nulas quedan al final.

#### Pivotes en columnas consecutivas

$$
\begin{pmatrix}-6&0&0\\0&1&3\\0&0&-5\end{pmatrix}.
$$

Las primeras entradas no nulas son $-6$, $1$ y $-5$, situadas en las columnas $1$, $2$ y $3$. La matriz está escalonada aunque dos de sus pivotes sean distintos de $1$.

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

La segunda fila es nula, pero debajo aparece una fila con [[#Pivote|pivote]] $2$. Para colocar las filas nulas al final hay que intercambiar las filas segunda y tercera.

#### Dos pivotes en la misma columna

$$
\begin{pmatrix}0&3&1&0\\0&1&0&5\\0&0&0&-2\end{pmatrix}.
$$

La primera entrada no nula de las dos primeras filas está en la columna $2$: son $3$ y $1$. El segundo pivote no avanza hacia la derecha, por lo que esta matriz no está escalonada.

#### Un pivote retrocede hacia la izquierda

$$
\begin{pmatrix}0&1\\1&0\end{pmatrix}.
$$

La primera fila tiene su pivote en la columna $2$ y la segunda, en la columna $1$. Intercambiarlas da $I_2$, que sí está escalonada y reducida.

### Ejemplo: matrices en forma escalonada reducida

#### Dos columnas pivote y una fila nula

$$
\begin{pmatrix}0&1&0&5\\0&0&1&0\\0&0&0&0\end{pmatrix}.
$$

Los [[#Pivote|pivotes]] son unos y sus columnas contienen ceros en las demás posiciones.

#### Columnas sin pivote entre las columnas pivote

$$
\begin{pmatrix}1&-3&0&2&0\\0&0&1&4&0\\0&0&0&0&1\end{pmatrix}.
$$

Los pivotes ocupan las columnas $1$, $3$ y $5$. En cada una sólo hay un $1$ y ceros en las otras posiciones. Los números $-3$, $2$ y $4$ de las columnas $2$ y $4$ no impiden que la forma sea reducida: esas columnas no contienen pivotes.

#### La identidad es también reducida

$$
I_2=\begin{pmatrix}1&0\\0&1\end{pmatrix}.
$$

Cada columna contiene un pivote $1$ y un cero en la otra posición.

### La forma escalonada puede variar

Multipliquemos cada fila de $I_2$ por $2$. Obtenemos $2I_2$: otra matriz escalonada, equivalente a la inicial. Los [[#Pivote|pivotes]] siguen en las mismas posiciones, pero ahora valen $2$. Por tanto, una matriz puede tener distintas [[#Forma escalonada por filas|formas escalonadas]] equivalentes.

La **[[#Forma escalonada reducida|forma escalonada reducida]]**, en cambio, es única. Para justificarlo, probamos primero que siempre se puede obtener una y después que no pueden obtenerse dos diferentes.[^rref]

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
> Toda matriz $A\in M_{m\times n}(K)$ es [[#Equivalencia por filas|equivalente por filas]] a una matriz en [[#Forma escalonada reducida|forma escalonada reducida]].[^rref]

#### Demostración

> [!demostracion] Demostración
> Partimos de $A\in M_{m\times n}(K)$. Construiremos una matriz reducida usando únicamente [[#Operaciones elementales por filas|operaciones elementales]], de modo que el resultado será equivalente por filas a $A$.
>
> **Elegir el siguiente [[#Pivote|pivote]].** Recorremos las columnas de izquierda a derecha, considerando sólo las filas que aún no tienen pivote. Si la columna examinada es nula en esas filas, la saltamos. Si encontramos una entrada no nula, llevamos su fila a la primera posición pendiente y dividimos esa fila por la entrada elegida. El nuevo pivote vale $1$.
>
> **Anular el resto de su columna.** A cada una de las otras filas le restamos su entrada en esa columna multiplicada por la fila pivote. La entrada que queremos eliminar pasa a valer $a-a\cdot1=0$.
>
> **Conservar lo ya obtenido.** En las columnas pivote anteriores, la nueva fila pivote tiene ceros. Por tanto, sumarle un múltiplo a otra fila no modifica los unos ni los ceros de esas columnas. Además, como hemos escogido la primera columna disponible con alguna entrada no nula, la nueva fila no tiene entradas no nulas antes de su pivote. Los pivotes avanzan hacia la derecha al bajar.
>
> **Terminar.** Cada pivote ocupa una fila nueva y una columna nueva; puede haber como máximo $\min(m,n)$ pivotes. El recorrido de las $n$ columnas es finito. Si todavía quedan filas pendientes al terminar, todas sus entradas son cero y esas filas están debajo de las filas con pivote.
>
> La matriz obtenida tiene filas nulas al final, pivotes $1$ que avanzan hacia la derecha y ceros en las demás posiciones de sus columnas. Es una [[#Forma escalonada reducida|forma escalonada reducida]], y se ha obtenido mediante un número finito de operaciones elementales. $\blacksquare$[^rref]

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

### Sistemas homogéneos

La prueba de unicidad comparará dos sistemas con términos independientes nulos. Sean $B\in M_{m\times n}(K)$ y $\mathbf x\in K^n$.

> [!definicion] Sistema homogéneo
> Un [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales|sistema lineal]] es **homogéneo** cuando todos sus términos independientes son cero:
>
> $$
> B\mathbf x=\mathbf 0,\qquad \mathbf 0\in K^m.
> $$
>
> [^rref]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - sistemas-lineales
  - homogéneo
---
> [!note] Pregunta
> ¿Qué condición define a un sistema lineal homogéneo $B\mathbf x=\mathbf b$?
===
> [!important] Respuesta
> Su vector de términos independientes es nulo: $\mathbf b=\mathbf 0$.
```

### Variables pivote y variables libres

Para leer las incógnitas de un sistema reducido, miramos las columnas de su **matriz de coeficientes**. Distinguimos las que contienen un [[#Pivote|pivote]] de las que no lo contienen.

#### Variable pivote

> [!definicion] Variable pivote
> La variable asociada a una columna pivote de la matriz de coeficientes se llama **variable pivote**. Si el sistema es compatible, la [[#Forma escalonada reducida|forma reducida]] determina su valor una vez fijadas las variables libres.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - variables-pivote
---
> [!note] Pregunta
> En un sistema escrito en forma reducida, ¿qué incógnita se llama variable pivote?
===
> [!important] Respuesta
> La incógnita asociada a una columna pivote de la matriz de coeficientes.
```

#### Variable libre

> [!definicion] Variable libre
> La variable asociada a una columna sin pivote de la matriz de coeficientes se llama **variable libre**. Si el sistema es compatible, puede elegirse como parámetro; las ecuaciones determinan las variables pivote en función de esos parámetros.

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

### Unicidad de forma escalonada reducida

#### Propiedad

> [!teorema] Unicidad
> Si $B$ y $C$ son [[#Forma escalonada reducida|formas escalonadas reducidas]] [[#Equivalencia por filas|equivalentes por filas]] a la misma matriz $A$, entonces
>
> $$
> \boxed{B=C}.
> $$
>
> Las elecciones durante el cálculo pueden cambiar los pasos, pero no el resultado reducido.[^rref]

#### Demostración

> [!demostracion] Demostración
> Sean $B$ y $C$ dos [[#Forma escalonada reducida|formas escalonadas reducidas]] obtenidas de una misma matriz $A$ mediante [[#Operaciones elementales por filas|operaciones elementales]]. Probaremos por inducción en el número de columnas que coinciden.
>
> **1. Base: una columna.** Con una sola columna, las únicas formas reducidas posibles son la columna nula y
>
> $$
> \begin{pmatrix}1\\0\\\vdots\\0\end{pmatrix}.
> $$
>
> La matriz nula no puede transformarse en una matriz no nula con operaciones elementales; por tanto, la forma reducida es única.
>
> **2. Truncación e hipótesis inductiva.** Supongamos el resultado para matrices con $n$ columnas y consideremos $A$ con $n+1$ columnas. Denotemos por $B_{\le n}$ y $C_{\le n}$ las matrices que quedan al retirar la última columna. Como ambas matrices son reducidas, si al quitar esa columna una fila pierde su único [[#Pivote|pivote]], queda nula y aparece al final; las demás columnas pivote conservan sus columnas unitarias. Por eso las truncaciones siguen siendo reducidas. Las operaciones por filas aplicadas a $A$ producen las mismas operaciones en $A_{\le n}$, así que la hipótesis inductiva implica
>
> $$
> B_{\le n}=C_{\le n}.
> $$
>
> **3. Comparación de la última columna.** Si $B$ y $C$ aún difiriesen, diferirían solo en alguna entrada de la última columna. Como ambas se obtienen de $A$ mediante operaciones reversibles, sus [[#Sistemas homogéneos|sistemas homogéneos]] tienen el mismo [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales|conjunto de soluciones]]. Para una fila $i$ donde difieren, sus ecuaciones homogéneas, una en cada matriz, serían
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
> **4. El pivote final y el cierre.** Si una de las dos matrices no tuviera pivote en la última columna, ninguna ecuación obligaría a fijar $x_{n+1}$. Esa incógnita sería una [[#Variable libre|variable libre]]: podríamos elegir su valor y despejar después las incógnitas de las columnas pivote.
>
> Fijamos las demás variables libres en cero y elegimos $x_{n+1}=1$; las ecuaciones de la forma reducida determinan entonces las [[#Variable pivote|variables pivote]]. Esto daría una solución con $x_{n+1}\ne0$, en contradicción con la conclusión anterior. Así, ambas formas tienen pivote en la última columna.
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

### El rango no depende de la forma escalonada elegida

#### Propiedad

> [!corolario] Invariancia del rango
> Todas las [[#Forma escalonada por filas|formas escalonadas]] equivalentes a una matriz tienen el mismo número de filas no nulas.[^rank]

#### Demostración

> [!demostracion] Demostración
> Partamos de una forma escalonada con $r$ filas no nulas y tratemos las filas desde abajo hacia arriba. Al [[#Cómo elegir el múltiplo que elimina una entrada|normalizar]] el [[#Pivote|pivote]] de una fila, esa fila sigue siendo no nula. Al usarla para limpiar su columna por encima, sus entradas en las columnas de pivotes anteriores son cero, porque su pivote está más a la derecha; por ello no borra esos pivotes. Las filas nulas siguen al final. La [[#Forma escalonada reducida|forma reducida]] obtenida tiene, pues, exactamente $r$ filas no nulas. Como la forma reducida equivalente es única, cualquier forma escalonada equivalente tiene el mismo número de filas no nulas: ese número es el rango.[^rank]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - rango
  - invariancia
---
> [!note] Pregunta
> ¿Depende de la reducción elegida el número de filas no nulas de una forma escalonada equivalente a $A$?
===
> [!important] Respuesta
> No; toda forma escalonada equivalente tiene el mismo número de filas no nulas.
```

### Rango de una matriz

> [!definicion] Rango de una matriz
> El [[Matemáticas/Álgebra lineal/Rango de una matriz|rango]] de $A$, denotado por $r(A)$, es el número de pivotes de cualquier forma escalonada equivalente a $A$. Por lo demostrado, coincide con el número de sus filas no nulas y no depende de las operaciones elegidas.[^rank]

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

## Eliminación de Gauss y Gauss-Jordan

![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/02-gauss-y-gauss-jordan.svg|*Gauss elimina bajo los pivotes; Gauss–Jordan limpia también por encima y deja visibles las variables pivote.*]]

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/02-gauss-y-gauss-jordan.excalidraw|Abrir figura editable]]

### Método de Gauss

El [[Matemáticas/Álgebra lineal/Eliminación de Gauss|método de Gauss]] construye una [[#Forma escalonada por filas|forma escalonada]] de izquierda a derecha. Buscamos una entrada no nula en la primera columna que la tenga. La llevamos a la primera fila mediante un [[#Intercambio de filas|intercambio]] y la utilizamos para anular las entradas de debajo. Después repetimos la búsqueda en las filas inferiores y en las columnas situadas a la derecha del [[#Pivote|pivote]] elegido.

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

En la columna que estamos reduciendo, la fila [[#Pivote|pivote]] $R_i$ contiene $p\ne0$ y una fila inferior $R_j$ contiene $q$. Si restamos $c$ veces la fila pivote, la entrada inferior pasa a valer $q-cp$. Para que sea cero, necesitamos $cp=q$, es decir, $c=q/p$:

> [!formula] Eliminación bajo un pivote
>
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

En un sistema escalonado, la última ecuación no nula contiene la última variable [[#Pivote|pivote]] y, si las hay, algunas [[#Variable libre|variables libres]]. Fijamos estas últimas como parámetros y despejamos la [[#Variable pivote|variable pivote]]. Sustituimos su expresión en la ecuación anterior y seguimos subiendo.

Antes comprobamos que ninguna fila exprese $0=c$ con $c\ne0$. Esa igualdad es imposible; si aparece, el sistema no tiene solución.

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

Con [[Matemáticas/Álgebra lineal/Eliminación de Gauss-Jordan|Gauss–Jordan]] continuamos desde la [[#Forma escalonada por filas|forma escalonada]]. Dividimos cada fila no nula por su [[#Pivote|pivote]] y lo utilizamos para anular las entradas de su columna situadas por encima. Podemos empezar por el último pivote y subir. Al terminar, cada columna pivote contiene un único $1$.

Si el sistema es compatible, las variables de las columnas sin pivote se fijan como parámetros; la [[#Forma escalonada reducida|forma reducida]] expresa las [[#Variable pivote|variables pivote]] en función de ellos.

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

### Ejemplo trabajado: reducción de un sistema

Retomamos el sistema de dos ecuaciones de la introducción:

$$
\begin{cases}2x+y=5,\\x-y=1.\end{cases}
$$

Su [[#La matriz ampliada|matriz ampliada]] es

$$
\left[\begin{array}{cc|c}2&1&5\\1&-1&1\end{array}\right].
$$

El coeficiente de $x$ en la segunda ecuación ya es $1$. Intercambiamos las filas para usarlo como primer [[#Pivote|pivote]] y restamos dos veces esa fila a la segunda:

$$
\left[\begin{array}{cc|c}1&-1&1\\2&1&5\end{array}\right]
\xrightarrow{R_2\leftarrow R_2-2R_1}
\left[\begin{array}{cc|c}1&-1&1\\0&3&3\end{array}\right].
$$

La segunda fila da $3y=3$, de donde $y=1$. Sustituimos en la primera ecuación, $x-y=1$, y obtenemos $x=2$. Con esto termina **Gauss con [[#Sustitución hacia atrás|sustitución hacia atrás]]**.

Para llegar a la [[#Forma escalonada reducida|forma reducida]] mediante **[[#Método de Gauss–Jordan|Gauss–Jordan]]**, dividimos la segunda fila por $3$ y la sumamos a la primera:

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

La segunda ecuación tiene todos sus coeficientes divisibles por $5$. Al dividirla por $5$, obtenemos $x-y+2z=1$. La colocamos arriba para empezar con [[#Pivote|pivote]] $1$.

$$
\left[\begin{array}{ccc|c}-2&4&-3&-1\\5&-5&10&5\\3&1&5&14\end{array}\right].
$$

Después de dividir la segunda fila por $5$ e intercambiarla con la primera, queda

$$
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

En la tercera fila obtenemos $4-2\cdot2=0$ en la columna de $y$, $-1-2\cdot1=-3$ en la de $z$ y $11-2\cdot1=9$ en el término independiente. Esa fila expresa $-3z=9$. Hemos llegado a una [[#Forma escalonada por filas|forma escalonada]]:

$$
\left[\begin{array}{ccc|c}1&-1&2&1\\0&2&1&1\\0&0&-3&9\end{array}\right].
$$

#### Resolver por sustitución hacia atrás

De abajo hacia arriba, las ecuaciones dan

$$
-3z=9\quad\Longrightarrow\quad z=-3.
$$

Sustituimos $z=-3$ en la segunda ecuación:

$$
2y-3=1\quad\Longrightarrow\quad y=2.
$$

Con ambos valores, la primera ecuación queda

$$
x-2+2(-3)=1\quad\Longrightarrow\quad x=9.
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

Supongamos que intercambiamos dos filas y después multiplicamos una por $-5$. Para recuperar la matriz inicial, primero debemos dividir esa fila por $-5$ y sólo después repetir el [[#Intercambio de filas|intercambio]]. Usar el orden contrario evita aplicar una [[#Inversas de los tres tipos|operación inversa]] a una fila que ya ocupa otra posición.

| Operación | Operación inversa |
|---|---|
| $R_i\leftrightarrow R_j$ | $R_i\leftrightarrow R_j$ |
| $R_i\leftarrow\lambda R_i$, $\lambda\ne0$ | $R_i\leftarrow\lambda^{-1}R_i$ |
| $R_i\leftarrow R_i+\lambda R_j$, $i\ne j$ | $R_i\leftarrow R_i-\lambda R_j$ |

En el [[#Reemplazo de una fila|reemplazo]], la fila $j$ no se modifica. Por eso podemos restar exactamente el múltiplo que habíamos añadido.[^a5]

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

El bloque derecho empezó como $I_3$ y recibió las mismas operaciones que $A$. Por eso termina siendo $Q$. En este arreglo, la barra separa dos bloques de matrices: el derecho tiene tres columnas y registra la secuencia aplicada.[^comp]

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

Elegimos el $-3$ de la tercera fila porque al dividir esa fila por $-3$ obtenemos coeficientes enteros y un [[#Pivote|pivote]] $1$. La llevamos a la primera posición y anulamos las otras entradas de esa columna:

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

Podríamos dividir por $-3$ para obtener el segundo pivote, pero sumar la tercera fila a la segunda permite trabajar todavía con enteros: $-3+2=-1$. Después usamos esa **segunda fila actualizada** para anular el $2$ y el $-2$ que quedan debajo:

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

Continuamos desde $A_2$. En la tercera columna hay un $20$ y un $-12$. Dividir la cuarta fila por $-6$ deja un [[#Pivote|pivote]] $2$ y mantiene enteros todos los coeficientes. Después la intercambiamos con la tercera:[^a6]

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

Se llega a la [[#Forma escalonada por filas|forma escalonada]] $U\in M_{4\times5}(\mathbb R)$, con pivotes en las cuatro primeras columnas:

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

Los [[#Pivote|pivotes]] son $5$ y $8$, en las columnas 2 y 4. Hay dos filas no nulas, de modo que $r(D)=2$.

### Ejemplo: reducción de una matriz $4\times6$

Esta reducción incluye columnas sin [[#Pivote|pivote]] y una fila que acaba siendo nula:[^a6]

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

El siguiente pivote es $2$, en la columna $3$. Para anular el $-10$ sumamos cinco veces la fila pivote; para anular el $-6$ sumamos tres veces esa fila: $-10+5\cdot2=0$ y $-6+3\cdot2=0$.

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

Así se obtiene la [[#Forma escalonada reducida|forma reducida]]

$$
C=\begin{pmatrix}0&1&0&0&0&1\\0&0&1&0&0&0\\0&0&0&0&1&-2\\0&0&0&0&0&0\end{pmatrix}\in M_{4\times6}(\mathbb R).
$$

## Condiciones de validez y errores frecuentes

> [!warning] La operación afecta a toda la ecuación
> En $[A\mid\mathbf b]$, cada operación debe aplicarse también al término independiente. Si dividimos $2x+y=5$ por $2$, obtenemos $x+\tfrac12y=\tfrac52$, no $x+\tfrac12y=5$.

Una entrada cero no sirve como divisor. Buscamos una entrada no nula en las filas pendientes de la misma columna y la llevamos a la fila de trabajo mediante un [[#Intercambio de filas|intercambio]]. Si no existe, esa columna queda sin pivote y seguimos con la siguiente.

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
>
> ![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/02-fila-completa-anki.png|Escalar toda la ecuación: (2,1 | 5) pasa a (1,1/2 | 5/2)|420]]
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

[^emdr]: Robert A. Beezer, *A First Course in Linear Algebra*, §DM, Teorema EMDRO, prueba completa por entradas de los tres tipos de operación. Las demostraciones de esta nota adaptan ese argumento y su notación. En la edición web consultada algunos sumatorios aparecen hasta $n$; aquí se utiliza $m$, el número de filas de $A$ y el orden de la matriz elemental. [Sección sobre matrices elementales](https://linear.pugetsound.edu/fcla/section-DM.html#theorem-EMDRO).

[^emni]: W. Keith Nicholson, *Linear Algebra with Applications*, §2.5, Lema 2.5.2 y párrafo inmediatamente anterior: la operación inversa deshace la operación elemental y su matriz satisface $FE=I$, por lo que es la inversa de $E$. La prueba de esta nota también aplica el mismo razonamiento en orden inverso para explicitar la identidad $EF=I$. [LibreTexts](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_%28Nicholson%29/02%3A_Matrix_Algebra/2.05%3A_Elementary_Matrices).

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como tutor de eliminación y matrices elementales para un estudiante que conoce la suma y el producto matriciales, pero está aprendiendo a reducir sistemas. Haz una pregunta cada vez y espera la respuesta. Si hay un error, localiza el paso y ofrece primero una pista; no anticipes toda la resolución. No generes ejercicios nuevos: trabaja con los ejemplos siguientes y pide explicar decisiones, cálculos y comprobaciones.

**Base matemática.** En un sistema $A\mathbf x=\mathbf b$, con $A\in M_{m\times n}(K)$, $\mathbf x\in K^n$ y $\mathbf b\in K^m$, la matriz ampliada es $[A\mid\mathbf b]$. Las operaciones elementales son intercambiar dos filas, multiplicar una fila por un escalar no nulo y sumar a una fila un múltiplo de otra distinta. Afectan a la fila completa y conservan las soluciones porque pueden deshacerse.

Una matriz está escalonada si las filas nulas quedan abajo y los pivotes —primeras entradas no nulas de las filas— avanzan hacia la derecha. En la forma reducida, cada pivote vale $1$ y es la única entrada no nula de su columna. La forma reducida es única; las formas escalonadas pueden variar, pero todas tienen el mismo número de pivotes, el rango. En una forma reducida compatible, las variables asociadas a columnas sin pivote son libres y se eligen como parámetros; las variables pivote quedan determinadas por ellas. Un sistema homogéneo tiene vector de términos independientes nulo. Gauss elimina debajo de los pivotes y termina con sustitución hacia atrás; Gauss–Jordan elimina también encima y normaliza los pivotes.

**Ejemplo disponible.** Para $2x+y=5$, $x-y=1$, intercambiar filas y efectuar $R_2\leftarrow R_2-2R_1$ da $x-y=1$, $3y=3$. De aquí se obtienen $y=1$ y $x=2$. Para reducir, dividir la segunda fila por $3$ y sumarla a la primera da $[I_2\mid(2,1)^T]$. Pide justificar el factor $2$, el efecto sobre el término independiente y la comprobación en las ecuaciones originales.

**Segundo ejemplo disponible.** El sistema $-2x+4y-3z=-1$, $5x-5y+10z=5$, $3x+y+5z=14$ se reduce a $x-y+2z=1$, $2y+z=1$, $-3z=9$, con solución $(9,2,-3)$. Úsalo para distinguir sustitución hacia atrás y reducción completa.

**Matrices elementales.** Una operación sobre $I_m$ produce $E$; el producto $EA$ realiza esa misma operación sobre $A$. La fila $r$ de $E$ da los coeficientes de la combinación que forma la fila $r$ de $EA$. Cada $E$ es invertible: la matriz de la operación inversa satisface $FE=EF=I_m$. Si se aplican $E_1$ y después $E_2$, el resultado es $E_2E_1A$. Operar sobre $[A\mid I_m]$ deja $[QA\mid Q]$, donde $Q$ representa toda la secuencia.

Evalúa por separado el cálculo y su justificación: por qué se puede dividir, qué fila está siendo modificada, si se usa su valor actualizado y qué asegura la conservación de soluciones. Si se pide una prueba, fija las dimensiones y los índices antes de operar por componentes; evita sustituir la justificación por un ejemplo numérico.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
