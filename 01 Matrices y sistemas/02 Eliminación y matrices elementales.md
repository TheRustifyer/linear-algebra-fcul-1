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
  - - A\mid\mathbf b
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

Cada fila de un sistema lineal expresa una ecuación. La eliminación combina o reordena esas ecuaciones para obtener otras más sencillas, pero equivalentes: el conjunto de soluciones debe permanecer igual.

La matriz ampliada $[A\mid\mathbf b]$ reúne en un solo arreglo los coeficientes de las incógnitas y los términos independientes. Una operación sobre sus filas representa la misma transformación aplicada a las ecuaciones del sistema.

Trabajaremos con $K=\mathbb R$ o $K=\mathbb C$. Para $m,n\in\mathbb N$ con $m,n\ge1$, una matriz $A\in M_{m\times n}(K)$ tiene $m$ filas y $n$ columnas, y su entrada $a_{ij}\in K$ ocupa la fila $i$ y la columna $j$, con $1\le i\le m$ y $1\le j\le n$. En $A\mathbf{x}=\mathbf{b}$, el vector de incógnitas es $\mathbf{x}\in K^n$ y el de términos independientes es $\mathbf{b}\in K^m$.

## Operaciones elementales por filas

Para una matriz con filas $R_1,\ldots,R_m$, se permiten tres transformaciones.

### Intercambio de filas

> [!definicion] Intercambio
> $R_i\leftrightarrow R_j$ permuta dos filas. En el sistema equivale a reordenar dos ecuaciones.

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
> $R_i\leftarrow cR_i$, con $c\in K\setminus\{0\}$, multiplica una ecuación por una constante no nula. La condición $c\ne0$ permite recuperar la fila original dividiendo por $c$.

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
> $R_i\leftarrow R_i+cR_j$, con $c\in K$ e $i\ne j$, suma a la fila $i$ un múltiplo de otra fila. Se deshace mediante $R_i\leftarrow R_i-cR_j$.

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

Cada operación tiene inversa del mismo tipo. Por eso no elimina ni añade soluciones; sólo cambia la representación del sistema.[^1]

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
> ¿Qué hace equivalentes a dos sistemas obtenidos mediante operaciones elementales por filas?
===
> [!important] Respuesta
> Cada operación es reversible, así que ambos sistemas tienen exactamente el mismo conjunto de soluciones.
```

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

## Matrices elementales

> [!definicion] Matriz elemental
> Una [[Matemáticas/Álgebra lineal/Matriz elemental|matriz elemental]] se obtiene aplicando una única operación elemental por filas a una matriz identidad $I_m$.

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

La definición convierte una operación por filas en una matriz que puede actuar sobre cualquier matriz con $m$ filas. La multiplicación por la izquierda cambia las filas; una secuencia de operaciones se representa mediante un producto cuyos factores aparecen en orden inverso al de aplicación.[^1][^2]

### Multiplicación por la izquierda y operaciones elementales

> [!formula] Multiplicación por la izquierda
> Sea $A\in M_{m\times n}(K)$ y sea $E\in M_m(K)$ la matriz elemental obtenida al efectuar una operación elemental sobre $I_m$. Entonces $EA$ se obtiene de $A$ efectuando esa misma operación elemental sobre sus filas. Para el intercambio se requieren índices distintos $i\ne j$; para el escalado, $\lambda\in K\setminus\{0\}$; para el reemplazo, $i\ne j$ y $\lambda\in K$.[^a5]

#### Preparar la lectura por entradas

El producto $EA$ está definido porque $E$ tiene $m$ columnas y $A$ tiene $m$ filas; el resultado tiene tamaño $m\times n$. Fijemos $r\in\{1,\ldots,m\}$ y $k\in\{1,\ldots,n\}$. Entonces

$$
(EA)_{rk}=\sum_{\ell=1}^{m}e_{r\ell}a_{\ell k}.
$$

Los índices $r$ y $k$ fijan la entrada que calculamos; el índice $\ell$ recorre las filas de $A$. Por ello, la fila $r$ de $E$ indica qué combinación de filas de $A$ forma la fila $r$ del resultado.

#### Intercambiar las filas $i$ y $j$

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

#### Multiplicar una fila por un escalar no nulo

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

#### Sumar a una fila un múltiplo de otra

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

> [!consecuencia] Las matrices elementales son invertibles
> Si $E$ es una matriz elemental, existe una matriz $F$ tal que $FE=EF=I_m$; por tanto, $E$ es invertible.[^emni]

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

### Composición de operaciones elementales

Una segunda operación $E_2$ actúa sobre el resultado de la primera como $E_2(E_1A)$. La asociatividad del producto matricial permite reunir los factores:

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

> [!definicion] Forma escalonada por filas
> Una matriz está en **forma escalonada por filas** si sus filas nulas, si existen, quedan al final; cada pivote aparece a la derecha del pivote de la fila anterior; y debajo de cada pivote hay ceros. El pivote es la primera entrada no nula de su fila; no tiene que valer $1$.

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

> [!definicion] Forma escalonada reducida
> Una matriz está en **forma escalonada reducida** si está escalonada y cada pivote vale $1$ y es el único elemento no nulo de su columna. Esta forma permite leer directamente las variables pivote en función de las variables libres.

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

La forma escalonada puede depender de las decisiones de cálculo. En cambio, cada matriz tiene una forma escalonada reducida equivalente, y esa forma es única.[^rref]

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

> [!demostracion] Demostración
> El procedimiento de Gauss–Jordan construye esta forma en un número finito de pasos. Se recorren las columnas de izquierda a derecha y se busca una entrada no nula entre las filas que aún no tienen pivote. Si no existe, esa columna queda sin pivote. Si existe, se intercambia su fila con la primera fila pendiente, se divide por la entrada no nula para obtener un pivote $1$ y se anulan las demás entradas de esa columna mediante reemplazos de filas.
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

### Unicidad de forma escalonada reducida

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
> **4. El pivote final y el cierre.** Sin pivote en la última columna, $x_{n+1}$ sería libre. Fijamos las demás variables libres en cero y elegimos $x_{n+1}=1$; las ecuaciones de la forma reducida determinan entonces las variables pivote. Esto daría una solución con $x_{n+1}\ne0$, en contradicción con la conclusión anterior. Así, ambas formas tienen pivote en la última columna.
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

> [!corolario] Invariancia del rango
> Todas las formas escalonadas equivalentes de una matriz tienen el mismo número de filas no nulas; ese número es su rango.[^rank]

> [!demostracion] Demostración
> Partamos de una forma escalonada con $r$ filas no nulas y tratemos las filas desde abajo hacia arriba. Al normalizar el pivote de una fila, esa fila sigue siendo no nula. Al usarla para limpiar su columna por encima, sus entradas en las columnas de pivotes anteriores son cero, porque su pivote está más a la derecha; por ello no borra esos pivotes. Las filas nulas siguen al final. La forma reducida obtenida tiene, pues, exactamente $r$ filas no nulas. Como la forma reducida equivalente es única, cualquier forma escalonada equivalente tiene el mismo número de filas no nulas: ese número es el rango.[^rank]

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

El método de **Gauss** elige pivotes sucesivos y elimina las entradas que quedan debajo de ellos. Así obtiene una forma escalonada, que se resuelve por sustitución hacia atrás.

Si el candidato a pivote es cero, se intercambian filas para buscar una entrada no nula. Si no existe en esa columna, se avanza a la siguiente; la variable de la columna sin pivote puede quedar libre. Cuando el pivote es $p\ne0$ y debajo aparece $q$, se resta $q/p$ veces la fila pivote, pues $q-(q/p)p=0$. Esta elección anula la entrada sin dividir por cero.

**Gauss–Jordan** continúa eliminando también las entradas que quedan por encima de cada pivote hasta llegar a la forma escalonada reducida.

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
> Elimina las entradas debajo de los pivotes para obtener una forma escalonada; después se usa sustitución hacia atrás.
```

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

### Ejemplo trabajado: reducción de un sistema

Para el sistema $2x+y=5$, $x-y=1$, la matriz ampliada es

$$
\left[\begin{array}{cc|c}2&1&5\\1&-1&1\end{array}\right].
$$

Intercambiamos las ecuaciones para colocar un candidato más sencillo, $1$, en la primera posición pivote. Restar dos veces la primera fila a la segunda elimina el coeficiente de $x$ de esa ecuación:

$$
\left[\begin{array}{cc|c}1&-1&1\\2&1&5\end{array}\right]
\xrightarrow{R_2\leftarrow R_2-2R_1}
\left[\begin{array}{cc|c}1&-1&1\\0&3&3\end{array}\right].
$$

El nuevo pivote es $3$. Multiplicamos toda la segunda fila por $1/3$ para normalizarlo a $1$, y sumamos esa fila a la primera para eliminar el $-1$ que está encima:

$$
\left[\begin{array}{cc|c}1&-1&1\\0&1&1\end{array}\right]
\xrightarrow{R_1\leftarrow R_1+R_2}
\left[\begin{array}{cc|c}1&0&2\\0&1&1\end{array}\right].
$$

La forma reducida expresa $x=2$ e $y=1$. Sustituir esos valores en las ecuaciones originales comprueba el resultado. La reducción matricial hace explícita cada operación reversible.[^1]

## Ejemplos de pivotes, reducción y rango

### Pivotes y formas escalonadas

> [!definicion] Posición pivote
> En una fila no nula, la posición pivote es la de su primera entrada no nula de izquierda a derecha; el pivote es esa entrada. Una fila nula carece de pivote.[^a4]

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

Los pivotes son $7,-8,-3$. La matriz no está escalonada: el pivote de la tercera fila aparece a la izquierda del pivote de la segunda.

### Ejemplos de matrices escalonadas

En cada matriz no nula de la lista, las posiciones pivote avanzan estrictamente hacia la derecha al bajar de fila, y las filas nulas quedan al final:

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
I_2.
$$

La identidad también está escalonada.

### Ejemplo: matrices que no están escalonadas

La primera matriz falla porque una fila nula aparece antes de una fila no nula. En la segunda, las dos primeras filas tienen su primer elemento no nulo en la misma columna, así que el segundo pivote no avanza a la derecha. En la tercera, el pivote de la segunda fila queda a la izquierda del primero:

$$
\begin{pmatrix}0&3&1&0\\0&0&0&0\\0&0&0&2\end{pmatrix}.
$$

La fila nula aparece antes de una fila no nula.

$$
\begin{pmatrix}0&3&1&0\\0&1&0&5\\0&0&0&-2\end{pmatrix}.
$$

Los pivotes de las dos primeras filas quedan ambos en la columna 2.

$$
\begin{pmatrix}0&1\\1&0\end{pmatrix}.
$$

Aquí el pivote de la segunda fila queda en la columna 1, a la izquierda del de la primera fila.

### Ejemplo: matrices en forma escalonada reducida

Además de ser escalonadas, estas matrices tienen pivotes iguales a $1$ y únicos elementos no nulos en sus columnas:

$$
\begin{pmatrix}0&1&0&5\\0&0&1&0\\0&0&0&0\end{pmatrix}.
$$

Los pivotes son unos y sus columnas contienen ceros en las demás posiciones.

$$
\begin{pmatrix}1&-3&0&2&0\\0&0&1&4&0\\0&0&0&0&1\end{pmatrix}.
$$

La misma condición se cumple aunque haya columnas sin pivote.

$$
I_2.
$$

La identidad es reducida.

### Del sistema a la matriz

Se parte del sistema $-2x+4y-3z=-1$, $5x-5y+10z=5$, $3x+y+5z=14$. Dividir la segunda ecuación por $5$ produce coeficiente $1$ para $x$; se intercambia con la primera para usarlo como primer pivote.[^a4]

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

El primer pivote permanece en su fila y aparecen las ecuaciones $2y+z=1$ y $4y-z=11$:

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

Dividir la tercera fila por $-3$ normaliza el pivote y da $z=-3$:

$$
R_3\leftarrow-\tfrac13R_3.
$$

Para eliminar las entradas que quedan sobre el pivote de la tercera columna, se resta una vez la tercera fila a la segunda y dos veces a la primera. Después se normaliza el pivote $2$ de la segunda fila y se elimina el $-1$ que queda sobre él:

$$
\begin{aligned}
R_2&\leftarrow R_2-R_3,\\
R_1&\leftarrow R_1-2R_3,\\
R_2&\leftarrow\tfrac12R_2,\\
R_1&\leftarrow R_1+R_2.
\end{aligned}
$$

Con estas operaciones quedan $x=9$, $y=2$ y $z=-3$:

$$
\left[\begin{array}{ccc|c}1&0&0&9\\0&1&0&2\\0&0&1&-3\end{array}\right].
$$

### Invertir operaciones y construir matrices elementales

Las operaciones elementales son reversibles. El intercambio se deshace con el mismo intercambio; el escalado $R_i\leftarrow\lambda R_i$ se deshace con $R_i\leftarrow\lambda^{-1}R_i$ cuando $\lambda\ne0$; y el reemplazo $R_i\leftarrow R_i+\lambda R_j$ se deshace con $R_i\leftarrow R_i-\lambda R_j$. Por ello, una secuencia finita también puede invertirse, deshaciendo sus pasos en orden contrario.[^a5]

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

Cada matriz que resulta al aplicar una operación a $I_m$ representa esa operación por multiplicación a la izquierda. En orden tres, los ejemplos siguientes muestran un intercambio, un escalado y dos reemplazos:

#### Intercambios de filas

El primer factor intercambia las filas primera y tercera; el segundo intercambia las filas segunda y tercera:

$$
P_{13}=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}.
$$

$$
P_{23}=\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}.
$$

#### Escalado de una fila

El factor $-5$ en la tercera posición representa multiplicar la fila tercera por $-5$:
$$
D_3(-5)=\operatorname{diag}(1,1,-5).
$$

#### Reemplazos de filas

En $E_{13}(-5)$, se suma $-5$ veces la fila tercera a la primera; en $E_{32}(6)$, se suma $6$ veces la fila segunda a la tercera:
$$
E_{13}(-5)=\begin{pmatrix}1&0&-5\\0&1&0\\0&0&1\end{pmatrix}.
$$

$$
E_{32}(6)=\begin{pmatrix}1&0&0\\0&1&0\\0&6&1\end{pmatrix}.
$$

Para ver cómo se compone una secuencia, consideremos una matriz simbólica con cuatro columnas:

#### Ejemplo: composición sobre una matriz simbólica

$$
A=\begin{pmatrix}a_1&a_2&a_3&a_4\\b_1&b_2&b_3&b_4\\c_1&c_2&c_3&c_4\end{pmatrix}.
$$

Intercambiar sus filas 2 y 3 y luego multiplicar la primera fila por $-5$ da $C=D_1(-5)P_{23}A$:

$$
B=P_{23}A,\qquad C=D_1(-5)B=D_1(-5)P_{23}A.
$$

Si aplicamos las mismas operaciones a la identidad de la derecha en la matriz aumentada $[A\mid I_3]$, obtenemos $[C\mid Q]$, donde

$$
Q=D_1(-5)P_{23}=\begin{pmatrix}-5&0&0\\0&0&1\\0&1&0\end{pmatrix}.
$$

La parte izquierda del arreglo final es $QA$. Para una secuencia $E_1,\ldots,E_p$, el resultado tiene la forma $(E_p\cdots E_1)A$: el factor de la última operación queda más a la izquierda.

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

La matriz inicial tiene cuatro filas y cinco columnas; el ejemplo reproduce una reducción con cuatro pivotes.[^a5]

$$
A=\begin{pmatrix}6&-28&4&23&-6\\5&-28&4&20&-7\\-3&15&0&-9&3\\2&-12&4&8&0\end{pmatrix}.
$$

En la primera columna conviene usar el $-3$ de la tercera fila: al multiplicar esa fila por $-1/3$ aparece un pivote $1$, y el intercambio lo coloca arriba. Las tres restas posteriores hacen cero las entradas debajo de ese pivote:

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

Para elegir el siguiente pivote se reemplaza la segunda fila por su suma con la tercera; así su segunda entrada pasa de $-3$ a $-1$. Las operaciones siguientes anulan la segunda columna debajo de ese nuevo pivote:

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

Esta es la matriz desde la que continúa la reducción:

### Ejemplo: completar la reducción de la matriz $4\times5$

Los cuatro pivotes de la forma escalonada permiten completar Gauss–Jordan y leer el rango como el número de filas no nulas.[^a6]

Para continuar el ejemplo $4\times5$ anterior, se escala la cuarta fila y se intercambia con la tercera:

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

En la etapa de Gauss–Jordan, las operaciones siguientes anulan primero las entradas que están sobre el pivote de la cuarta columna:

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

Por último, se normalizan las tres filas que tienen pivote:

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

La matriz $D\in M_{3\times5}(\mathbb R)$ tiene rango 2, pues sus dos filas no nulas contienen los dos pivotes.[^a6]

$$
D=\begin{pmatrix}0&5&2&5&-1\\0&0&0&8&3\\0&0&0&0&0\end{pmatrix}.
$$

### Ejemplo: reducción de una matriz $4\times6$

La matriz inicial $A$ tiene tamaño $4\times6$.[^a6]

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

La columna 4 también carece de pivote disponible y se omite. Primero se crean y normalizan los pivotes de las columnas 3 y 5, y se anulan las entradas inferiores:

$$
\begin{aligned}
R_3&\leftarrow R_3+5R_2,\\
R_4&\leftarrow R_4+3R_2,\\
R_3&\leftarrow-\tfrac1{14}R_3,\\
R_4&\leftarrow R_4+4R_3.
\end{aligned}
$$

El resultado es

$$
B=\begin{pmatrix}0&1&-1&0&3&-5\\0&0&2&0&-5&10\\0&0&0&0&1&-2\\0&0&0&0&0&0\end{pmatrix}.
$$

Los pivotes están en las columnas 2, 3 y 5; la cuarta fila se vuelve nula, por lo que el rango es 3. Para alcanzar la forma reducida, primero se usa el pivote de la tercera fila y quinta columna para limpiar esa columna en las filas superiores; luego se normaliza el pivote de la segunda fila y tercera columna y se limpia su columna:

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

El escalado exige un factor no nulo. Al sumar un múltiplo de otra fila, la fila fuente debe permanecer intacta durante esa operación. Las operaciones se aplican a toda la fila ampliada, incluido el término independiente; cambiar sólo la parte de coeficientes altera el sistema. Un pivote cero no autoriza dividir: se intercambian filas o se deja esa columna sin pivote. La eliminación preserva el conjunto de soluciones, pero puede cambiar la apariencia y el orden de las ecuaciones.[^2]

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

El siguiente paso interpreta el número de pivotes para decidir si el sistema es compatible y cuántas soluciones tiene; esa conexión conduce a [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa|compatibilidad, rango e inversa]].

## 📚 Fuentes

### Material base aportado

- [FCUL, aula 4, pp. 13–17](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-aula4-FormaEscada-impressao.pdf), [aula 5](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-aula5-TransfElem-impressao.pdf) y [aula 6, pp. 2–10](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-aula6-CaractMatrizesInv-impressao.pdf). Diapositivas docentes FCUL 2026/27.

### Alcance curricular

[^3]: [Faculdade de Ciências, Universidade de Lisboa, *Álgebra Linear e Geometria Analítica*, programa 2025/2026](https://fenix.ciencias.ulisboa.pt/courses/algana-2817829258658182/programa). Incluye transformaciones elementales, matrices elementales y métodos de Gauss y Gauss–Jordan.

[^a4]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 4. [PDF de la fuente](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-aula4-FormaEscada-impressao.pdf), pp. 13–17, sobre formas escalonadas y sistemas equivalentes.

[^a6]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 6. [PDF de la fuente](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-aula6-CaractMatrizesInv-impressao.pdf), pp. 2–10, sobre rango y reducciones.

[^a5]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 5, 25/09/2026. [PDF de la fuente](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-aula5-TransfElem-impressao.pdf), diapositivas 2–11 para los ejemplos de operaciones y composición; diapositiva 8 presenta el enunciado de $EA$.

### Ampliación académica

[^pres]: Instituto Superior Técnico, *Apontamentos de Álgebra Linear*, §1.10, pp. 15–16, equivalencia de sistemas bajo operaciones elementales: cada transformación y su inversa conservan las soluciones. [PDF](https://fenix.tecnico.ulisboa.pt/downloadFile/563568428979297/ApontamentosInteg.pdf).

[^rref]: Instituto Superior Técnico, *Apontamentos de Álgebra Linear*, Teorema 1.12, pp. 17–18, prueba por inducción en el número de columnas de la unicidad de la forma escalonada reducida. [PDF](https://fenix.tecnico.ulisboa.pt/downloadFile/563568428979297/ApontamentosInteg.pdf).

[^rank]: Instituto Superior Técnico, *Apontamentos de Álgebra Linear*, Corolario 1.13, p. 18, invariancia del número de filas no nulas en formas escalonadas equivalentes. [PDF](https://fenix.tecnico.ulisboa.pt/downloadFile/563568428979297/ApontamentosInteg.pdf).

[^comp]: W. Keith Nicholson, *Linear Algebra with Applications*, §2.5, apartado “Inverses and Elementary Matrices”, deducción $A\to UA=B$ anterior al Teorema 1, donde se representa una secuencia de operaciones mediante el producto de matrices elementales. [LibreTexts](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_%28Nicholson%29/02%3A_Matrix_Algebra/2.05%3A_Elementary_Matrices).


[^emdr]: Robert A. Beezer, *A First Course in Linear Algebra*, §DM, Teorema EMDRO, prueba de que multiplicar por la izquierda por una matriz elemental realiza la operación elemental correspondiente sobre las filas. [Sección sobre matrices elementales](https://linear.pugetsound.edu/fcla/section-DM.html#theorem-EMDRO).

[^emni]: W. Keith Nicholson, *Linear Algebra with Applications*, §2.5, Lema 2.5.2 y párrafo inmediatamente anterior: la operación inversa deshace la operación elemental y su matriz satisface $FE=I$, por lo que es la inversa de $E$. La prueba de esta nota también aplica el mismo razonamiento en orden inverso para explicitar la identidad $EF=I$. [LibreTexts](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_%28Nicholson%29/02%3A_Matrix_Algebra/2.05%3A_Elementary_Matrices).

[^1]: [MIT OpenCourseWare, Gilbert Strang, *Elimination with Matrices*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/elimination-with-matrices/). Eliminación como método matricial y su organización algorítmica.

[^2]: [Jim Hefferon, *Linear Algebra*, texto universitario abierto](https://hefferon.net/linearalgebra/). Sistemas lineales, eliminación y álgebra matricial.

## 🧑‍🏫 Prompt para tutor conversacional

Comprueba que el estudiante identifica las tres operaciones elementales, justifica su reversibilidad, distingue forma escalonada de reducida y aplica Gauss-Jordan sobre la matriz ampliada completa. Si aparece un pivote nulo, pregunta qué operación preserva el conjunto de soluciones. No generes ejercicios; utiliza ejemplos funcionales breves y pide que cada respuesta se compruebe en el sistema original.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
