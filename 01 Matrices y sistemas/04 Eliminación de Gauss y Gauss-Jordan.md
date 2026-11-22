---
title: Eliminación de Gauss y Gauss-Jordan
aliases:
  - Método de Gauss y Gauss-Jordan
  - Formas escalonadas y eliminación
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
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Matrices elementales y operaciones elementales|Matrices elementales y operaciones elementales]]"
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones]]"
desbloquea:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/05 Matrices invertibles y matriz inversa|Matrices invertibles y matriz inversa]]"
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/06 Compatibilidad y clasificación de sistemas|Compatibilidad y clasificación de sistemas]]"
fsrs_goal: Construye formas escalonadas y reducidas mediante Gauss y Gauss–Jordan, identifica pivotes y múltiplos que no reintroduzcan coeficientes eliminados, calcula el rango y resuelve los sistemas del capítulo, reconoce la unicidad de la forma reducida y explica las pruebas externas de existencia e invariancia del número de pivotes.
simbolos:
  - L_i
  - "[A\\mid\\mathbf b]"
  - r(A)
tags:
  - matemáticas
  - álgebra-lineal
  - sistemas-lineales
  - eliminación
  - curricular
---

# Eliminación de Gauss y Gauss-Jordan

En el [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales|método de reducción]] para dos ecuaciones, sumamos a una ecuación un múltiplo de la otra para eliminar una incógnita. Las [[Operaciones elementales por filas|operaciones por filas]] hacen esas mismas cuentas sobre los coeficientes y los términos independientes de la [[Matriz ampliada|matriz ampliada]], sin volver a escribir las incógnitas en cada paso.

Con tres ecuaciones, si el coeficiente de $x$ en la primera es distinto de cero, podemos usar múltiplos de esa ecuación para eliminar $x$ de las otras dos. Éstas forman un sistema en $y,z$, sobre el que repetimos la reducción. Conservamos las ecuaciones anteriores porque las necesitaremos para calcular después las incógnitas eliminadas.

Buscamos llegar a un sistema como éste:[^a4]

$$
\begin{cases}
x-y+2z=1,\\
2y+z=1,\\
-3z=9.
\end{cases}
$$

La última ecuación da $z=-3$. Sustituimos ese valor en la segunda y obtenemos $y=2$; con ambos valores, la primera da $x=9$. Hemos resuelto el sistema por [[Matemáticas/Álgebra lineal/Eliminación de Gauss|Gauss]], con [[#Sustitución hacia atrás|sustitución hacia atrás]].

En lugar de sustituir, podemos seguir reduciendo las ecuaciones. Usamos $z=-3$ para eliminar $z$ de las dos primeras y, después, eliminamos $y$ de la primera. Dividiendo cada ecuación por el coeficiente de la incógnita que queda, obtenemos $x=9$, $y=2$ y $z=-3$. Esta eliminación, primero hacia abajo y después hacia arriba, corresponde al método de [[Matemáticas/Álgebra lineal/Eliminación de Gauss-Jordan|Gauss–Jordan]].[^a6-metodo][^gauss]

El procedimiento parte de la reducción que aprendimos en secundaria. Ahora lo formularemos como un algoritmo de [[Operaciones elementales por filas|operaciones elementales de fila]] sobre matrices, aplicable a sistemas con cualquier número de ecuaciones e incógnitas.

Para formularlo, consideremos una matriz $A\in M_{m\times n}(K)$, con $m,n\ge1$ y [[Cuerpos|cuerpo]] de escalares $K=\mathbb R$ o $K=\mathbb C$.

Cuando la matriz represente un sistema $A\mathbf x=\mathbf b$, sus incógnitas forman la columna $\mathbf x\in K^n$ y sus términos independientes, $\mathbf b\in K^m$. 

> [!recuerda] Matriz ampliada
> Las operaciones se aplican a toda la matriz ampliada $[A\mid\mathbf b]$.

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

>[!recuerda]
>En una [[#Forma escalonada por filas|forma escalonada]], las entradas situadas debajo de los pivotes ya son cero. 

Para obtener la forma reducida aún debemos convertir cada pivote en $1$ y anular las entradas de su columna que quedan **encima**. No se impone esa condición a las columnas sin pivote.

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

La **[[#Forma escalonada reducida|forma escalonada reducida]]**, en cambio, es única.[^rref]

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
> Toda matriz $A\in M_{m\times n}(K)$ es [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Matrices elementales y operaciones elementales#Equivalencia por filas|equivalente por filas]] a una matriz en [[#Forma escalonada reducida|forma escalonada reducida]].[^a6-pruebas][^existencia-rref]

#### Demostración (ampliación del currículo del curso opcional)

> [!demostracion]- Demostración · ampliación
> Procedemos por [[Matemáticas/Fundamentos/Inducción matemática|inducción en el número de columnas]] $n\ge1$, para cualquier número de filas $m\ge1$.
>
> **1. Una columna.** Si $A=0_{m\times1}$, ya está reducida. Si no, elegimos una entrada $a\ne0$ en la fila $j$ y la llevamos a la primera fila. Llamamos $c_2,\ldots,c_m$ a las entradas que quedan debajo:
>
> $$
> A\xrightarrow[L_1\leftrightarrow L_j]{}
> \begin{pmatrix}a\\c_2\\\vdots\\c_m\end{pmatrix}
> \xrightarrow[L_1\leftarrow a^{-1}L_1]{}
> \begin{pmatrix}1\\c_2\\\vdots\\c_m\end{pmatrix}.
> $$
>
> Para cada $i\in\{2,\ldots,m\}$, efectuamos $L_i\leftarrow L_i-c_iL_1$. Así,
>
> $$
> \begin{pmatrix}1\\c_2\\\vdots\\c_m\end{pmatrix}
> \xrightarrow[\forall i\ge2:\,L_i\leftarrow L_i-c_iL_1]{}
> \begin{pmatrix}1\\0\\\vdots\\0\end{pmatrix},
> \qquad c_i-c_i\cdot1=0.
> $$
>
> El resultado está reducido. Si $m=1$, no hay entradas que eliminar; si $j=1$, no hace falta el intercambio.
>
> **2. Hipótesis inductiva.** Sea $n\ge2$ y supongamos que el resultado vale para todas las matrices de $n-1$ columnas. Separamos la última columna de $A$:
>
> $$
> A=[A'\mid\mathbf b],\qquad
> A'\in M_{m\times(n-1)}(K),\quad\mathbf b\in K^m.
> $$
>
> Aquí la barra sólo separa columnas de una matriz; $\mathbf b$ no representa necesariamente términos independientes de un sistema.
>
> Por la hipótesis inductiva, unas operaciones elementales transforman $A'$ en una matriz reducida $S$. Aplicadas a las filas completas de $A$, esas mismas operaciones producen
>
> $$
> A\longrightarrow X=[S\mid\mathbf c]
> =\left[\begin{array}{c|c}
> T&\mathbf u\\\hline
> 0_{k\times(n-1)}&\mathbf v
> \end{array}\right].
> $$
>
> Las primeras $r$ filas de $S$ son no nulas y forman $T\in M_{r\times(n-1)}(K)$; las $k=m-r$ restantes son nulas. La columna $\mathbf c$ se divide de la misma manera: $\mathbf u\in K^r$ y $\mathbf v\in K^k$. Si alguno de esos bloques tiene cero filas, se omite.
>
> **3. Caso sin nuevo pivote.** Si $k=0$ o $\mathbf v=\mathbf0$, $X$ ya está reducida: los pivotes de $S$ siguen siendo unos con ceros en sus columnas, y no aparece ninguna fila no nula debajo de las de $T$.
>
> **4. Caso con nuevo pivote.** Si $k>0$ y $\mathbf v\ne\mathbf0$, elegimos una entrada $a\ne0$ de $\mathbf v$ y, mediante un intercambio entre las últimas $k$ filas, la llevamos a la fila $r+1$. Después dividimos esa fila por $a$:
>
> $$
> X\xrightarrow[\text{intercambio entre las últimas }k\text{ filas}]{}
> \left[\begin{array}{c|c}
> T&\mathbf u\\\hline
> 0_{1\times(n-1)}&a\\
> 0_{(k-1)\times(n-1)}&\mathbf w
> \end{array}\right]
> $$
>
> $$
> \xrightarrow[L_{r+1}\leftarrow a^{-1}L_{r+1}]{}
> Y=\left[\begin{array}{c|c}
> T&\mathbf u\\\hline
> 0_{1\times(n-1)}&1\\
> 0_{(k-1)\times(n-1)}&\mathbf w
> \end{array}\right],
> \qquad \mathbf w\in K^{k-1}.
> $$
>
> Para cada $i\in\{1,\ldots,m\}\setminus\{r+1\}$, sea $d_i=Y_{in}$ su entrada en la última columna. La anulamos con la nueva fila pivote:
>
> $$
> L_i\leftarrow L_i-d_iL_{r+1},
> \qquad d_i-d_i\cdot1=0.
> $$
>
> Como las primeras $n-1$ entradas de $L_{r+1}$ son cero, estas restas conservan todas las columnas de $S$. Se obtiene
>
> $$
> R=\left[\begin{array}{c|c}
> T&0_{r\times1}\\\hline
> 0_{1\times(n-1)}&1\\
> 0_{(k-1)\times(n-1)}&0_{(k-1)\times1}
> \end{array}\right].
> $$
>
> Los pivotes de $T$ no cambian. El nuevo pivote queda a su derecha, vale $1$ y es el único elemento no nulo de su columna; las filas nulas quedan al final. Por tanto, $R$ está en forma escalonada reducida.
>
> En ambos casos, la hipótesis inductiva requiere un número finito de operaciones y añadimos, como máximo, un intercambio, un escalado y $m-1$ reemplazos. Esto completa la inducción:
>
> $$
> \boxed{A\longrightarrow R,\qquad
> R\text{ en forma escalonada reducida}}.
> \qquad\blacksquare
> $$
>
> [^existencia-rref]

> [!opcional]- Tarjetas de este resultado
> ![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/assets/anki/ALGA — Tarjetas de ampliación#^existencia-forma-reducida]]

### Unicidad de forma escalonada reducida

#### Propiedad

> [!teorema] Unicidad
> Si $B$ y $C$ son [[#Forma escalonada reducida|formas escalonadas reducidas]] [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Matrices elementales y operaciones elementales#Equivalencia por filas|equivalentes por filas]] a la misma matriz $A$, entonces
>
> $$
> \boxed{B=C}.
> $$
>
> Las elecciones durante el cálculo pueden cambiar los pasos, pero no el resultado reducido.[^rref]

> [!opcional]- Tarjetas de este resultado
> ![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/assets/anki/ALGA — Tarjetas de ampliación#^unicidad-forma-reducida]]

### Rango de una matriz

> [!definicion] Rango de una matriz
> El [[Matemáticas/Álgebra lineal/Rango de una matriz|rango]] de $A$, denotado por $r(A)$, $\operatorname{rg}(A)$ o $\operatorname{rank}(A)$, es el número de pivotes de cualquier forma escalonada equivalente a $A$. La [[#El rango no depende de la forma escalonada elegida|invariancia del número de pivotes]] garantiza que coincide con el número de sus filas no nulas y no depende de las operaciones elegidas.[^rank][^a6-rango]

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

#### Ejemplo: contar pivotes

La matriz

$$
R=\begin{pmatrix}1&1\\0&0\end{pmatrix}
$$

ya está escalonada. Tiene un solo [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#Pivote|pivote]], en la primera columna, por lo que $\operatorname{rg}(R)=1$.

### El rango no depende de la forma escalonada elegida

#### Propiedad

> [!corolario] Invariancia del rango
> Todas las [[#Forma escalonada por filas|formas escalonadas]] equivalentes a una matriz tienen el mismo número de filas no nulas.[^rank]

#### Demostración

> [!demostracion]- Demostración · ampliación
> Sea $U\in M_{m\times n}(K)$ una forma escalonada equivalente a $A$, con $r$ filas no nulas y columnas pivote $j_1<\cdots<j_r$. Si $r=0$, ya está reducida. Para $r>0$, reducimos $U$ sin cambiar ese número de filas.
>
> **Normalizar.** Con $p_k=u_{k,j_k}\ne0$, para cada $k\in\{1,\ldots,r\}$:
>
> $$
> L_k\leftarrow p_k^{-1}L_k,
> \qquad p_k^{-1}p_k=1.
> $$
>
> Ninguna fila no nula desaparece. Las filas nulas no se modifican.
>
> **Eliminar hacia arriba.** Para $k=r,r-1,\ldots,1$, si $c_i$ es la entrada actual sobre el pivote de la fila $k$, efectuamos
>
> $$
> L_i\leftarrow L_i-c_iL_k\quad(i<k),
> \qquad c_i-c_i\cdot1=0.
> $$
>
> La fila $k$ tiene ceros antes de su pivote, así que conserva el pivote de cada fila anterior:
>
> $$
> (L_i-c_iL_k)_{j_i}=1-c_i\cdot0=1.
> $$
>
> En las columnas pivote ya limpiadas, la fila $k$ también tiene ceros. No reaparecen entradas en ellas:
>
> $$
> (L_i-c_iL_k)_{j_\ell}=0-c_i\cdot0=0
> \qquad(\ell>k).
> $$
>
> La forma reducida $R$ obtenida conserva las $r$ filas no nulas. Otra forma escalonada $V$ equivalente a $A$, con $s$ filas no nulas, produce de igual modo una forma reducida $R'$ con $s$ filas no nulas. Por [[#Unicidad de forma escalonada reducida|unicidad]],
>
> $$
> R=R'\quad\Longrightarrow\quad\boxed{r=s}.
> \qquad\blacksquare
> $$
>
> [^rank]

> [!opcional]- Tarjetas de este resultado
> ![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/assets/anki/ALGA — Tarjetas de ampliación#^invariancia-numero-pivotes]]

### Cotas del rango

#### Propiedad

> [!teorema] El rango está limitado por el tamaño
> Para $A\in M_{m\times n}(K)$,
>
> $$
> \boxed{0\leq\operatorname{rg}(A)\leq\min(m,n)}.
> $$

#### Demostración

> [!demostracion] Demostración
> El rango cuenta [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#Pivote|pivotes]], por lo que no puede ser negativo. En una [[Matemáticas/Álgebra lineal/Forma escalonada|forma escalonada]] hay como máximo un [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#Pivote|pivote]] por fila y uno por columna. Por tanto, su número no supera ni las $m$ filas ni las $n$ columnas. Así,
>
> $$
> 0\leq\operatorname{rg}(A)\leq\min(m,n).\qquad\blacksquare
> $$
>
> [^a9]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - rango
---
> [!note] Pregunta
> ¿Entre qué valores puede estar el rango de una matriz $m\times n$?
===
> [!important] Respuesta
> $0\leq\operatorname{rg}(A)\leq\min(m,n)$: el rango cuenta pivotes y no puede haber más de uno por fila ni por columna.
```

### Extra - Lectura mediante espacios generados

> [!opcional]- Lectura mediante espacios generados
> El espacio generado por unas columnas reúne todas sus [[Matemáticas/Álgebra lineal/Espacios vectoriales/03 Combinaciones lineales y espacio generado|combinaciones lineales]]. Su dimensión es el número de vectores de [[Matemáticas/Álgebra lineal/Espacios vectoriales/05 Bases y dimensión|una base]]: una familia independiente que genera el mismo espacio. El rango coincide con la dimensión del espacio columna y del espacio fila. Esta interpretación conecta los [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#Pivote|pivotes]] con [[Matemáticas/Álgebra lineal/Espacios vectoriales/07 Núcleo, imagen, rango y nulidad|núcleo, imagen, rango y nulidad]].[^rango-espacios]

> [!opcional]- Tarjetas de la ampliación
> ![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/assets/anki/ALGA — Tarjetas de ampliación#^espacio-generado]]
> ![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/assets/anki/ALGA — Tarjetas de ampliación#^base-espacio-vectorial]]
> ![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/assets/anki/ALGA — Tarjetas de ampliación#^dimension-base]]
> ![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/assets/anki/ALGA — Tarjetas de ampliación#^rango-espacios-fila-columna]]

### Variables pivote y variables libres

Para leer las incógnitas de un [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales|sistema]] [[#Forma escalonada reducida|reducido]], miramos las [[Matemáticas/Álgebra lineal/Matrices#Entradas y tamaño|columnas]] de su **[[Matemáticas/Álgebra/Sistemas de ecuaciones lineales#Ejemplo de traducción|matriz de coeficientes]]**. Distinguimos las que contienen un [[#Pivote|pivote]] de las que no lo contienen.

#### Variable pivote

> [!definicion] Variable pivote
> La variable asociada a una [[#Pivote|columna pivote]] de la [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales#Ejemplo de traducción|matriz de coeficientes]] se llama **variable pivote**. Si el [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/06 Compatibilidad y clasificación de sistemas#Sistema compatible|sistema es compatible]] (en los siguientes veremos en más detalle [[Sistemas de ecuaciones|sistemas]]), la [[#Forma escalonada reducida|forma reducida]] determina su valor una vez fijadas las [[#Variable libre|variables libres]].

##### Ejemplo — Las columnas de $x$ e $y$ contienen pivote

Consideremos $B\mathbf x=\mathbf b$, con

$$
B=\begin{pmatrix}\boxed{1}&0&2\\0&\boxed{1}&-1\end{pmatrix}
\in M_{2\times3}(K),\qquad
\mathbf x=\begin{pmatrix}x\\y\\z\end{pmatrix},\qquad
\mathbf b=\begin{pmatrix}4\\1\end{pmatrix}.
$$

El sistema es

$$
\begin{cases}
x+2z=4,\\
y-z=1.
\end{cases}
$$

$B$ ya está reducida. Sus pivotes están en las columnas primera y segunda, asociadas a $x$ e $y$:

$$
\underbrace{\text{columna 1}}_{x}\ \text{con pivote},
\qquad
\underbrace{\text{columna 2}}_{y}\ \text{con pivote}.
$$

Despejando en cada fila obtenemos

$$
x=4-2z,\qquad y=1+z.
$$

Por tanto, $x$ e $y$ son las variables pivote. No tienen un valor fijo por sí solas: sus valores dependen de la elección de $z$.[^variables]

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
> La variable asociada a una [[Matemáticas/Álgebra lineal/Matrices#Entradas y tamaño|columna]] sin [[#Pivote|pivote]] de la [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales#Ejemplo de traducción|matriz de coeficientes]] se llama **variable libre**. Si el [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/06 Compatibilidad y clasificación de sistemas#Sistema compatible|sistema es compatible]], puede elegirse como [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales#Ejemplo con infinitas soluciones|parámetro]]; las ecuaciones determinan las [[#Variable pivote|variables pivote]] en función de esos parámetros.

##### Ejemplo — La columna de $z$ no contiene pivote

Retomamos el sistema $B\mathbf x=\mathbf b$ con sus tres incógnitas y sus dos ecuaciones:

$$
B=\begin{pmatrix}1&0&2\\0&1&-1\end{pmatrix}
\in M_{2\times3}(K),\qquad
\mathbf x=\begin{pmatrix}x\\y\\z\end{pmatrix},\qquad
\mathbf b=\begin{pmatrix}4\\1\end{pmatrix}.
$$

$$
\begin{cases}
x+2z=4,\\
y-z=1.
\end{cases}
$$

La tercera columna no contiene pivote. Podemos elegir $z=t$, con $t\in K$; las dos ecuaciones determinan entonces las otras incógnitas:

$$
z=t
\quad\Longrightarrow\quad
\begin{cases}
x=4-2t,\\
y=1+t.
\end{cases}
$$

La solución general, escrita como vector columna, es

$$
\boxed{\mathbf x(t)=\begin{pmatrix}4-2t\\1+t\\t\end{pmatrix},
\qquad t\in K}.
$$

Cualquier elección de $t$ satisface ambas ecuaciones. La comprobación mediante producto matricial da

$$
B\mathbf x(t)
=\begin{pmatrix}(4-2t)+2t\\(1+t)-t\end{pmatrix}
=\begin{pmatrix}4\\1\end{pmatrix}=\mathbf b.
$$

Así, $z$ es libre, mientras que $x$ e $y$ quedan determinadas por el parámetro $t$.[^variables]

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

## Métodos de reducción

![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/02-gauss-y-gauss-jordan.svg|*Gauss elimina bajo los pivotes; Gauss–Jordan limpia también por encima y deja visibles las variables pivote.*]]

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/02-gauss-y-gauss-jordan.excalidraw|Abrir figura editable]]

### Método de Gauss

> [!definicion] Método de Gauss
> El **[[Matemáticas/Álgebra lineal/Eliminación de Gauss|método de Gauss]]**, o **eliminación gaussiana**, transforma una matriz en otra equivalente por filas que está en [[#Forma escalonada por filas|forma escalonada]]. Aplicado a la matriz ampliada de un sistema, permite resolverlo por [[#Sustitución hacia atrás|sustitución hacia atrás]], si es compatible.[^a6-metodo][^gauss]

La eliminación anula las entradas situadas **debajo** de cada pivote. Los pasos siguientes operan en las filas inferiores, donde las columnas pivote anteriores ya contienen ceros.

#### Estrategia de reducción

1. **Ordenar las filas.** Los intercambios sitúan las filas nulas abajo y colocan en la primera fila de trabajo un pivote en la columna más a la izquierda que contenga alguna entrada no nula.
2. **Simplificar el pivote, si conviene.** Escalar su fila para obtener $1$ o $-1$ puede facilitar las cuentas; Gauss no exige hacerlo.
3. **Anular las entradas inferiores.** Si el pivote de la fila $i$ es $p\ne0$ y debajo aparece $q$ en la fila $j$, el reemplazo $L_j\leftarrow L_j-(q/p)L_i$ elimina esa entrada.
4. **Continuar con las filas restantes.** Se repite el proceso en la submatriz situada debajo de la fila pivote. Sus columnas anteriores ya son nulas, así que los pivotes siguientes avanzan hacia la derecha.[^a6-metodo]

> [!danger] Elegir operaciones que faciliten las cuentas
> No hace falta convertir de inmediato cada pivote en $1$. Un intercambio o un reemplazo puede evitar fracciones y ahorrar pasos. Cada operación actúa sobre la matriz que ha dejado la anterior; cambiar el orden puede cambiar las filas que se utilizan.

Cada nuevo pivote ocupa otra fila y una columna posterior. Por tanto,

$$
\text{número de pivotes}\le\min(m,n),
$$

y el recorrido de las $n$ columnas termina tras un número finito de operaciones.[^gauss]

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

En la columna que estamos reduciendo, la fila [[#Pivote|pivote]] $L_i$ contiene $p\ne0$ y una fila inferior $L_j$ contiene $q$. Si restamos $c$ veces la fila pivote, la entrada inferior pasa a valer $q-cp$. Para que sea cero, necesitamos $cp=q$, es decir, $c=q/p$:

> [!formula] Eliminación bajo un pivote
>
> $$
> L_j\leftarrow L_j-\frac{q}{p}L_i,
> \qquad q-\frac{q}{p}p=0.
> $$

Con $p=1$ y $q=2$, restamos dos veces la fila pivote. Para normalizar un pivote no nulo, dividimos toda su fila por $p$.

> [!warning] Condición de validez
> El cociente $q/p$ exige $p\ne0$. Si la entrada candidata es cero, se intercambia la fila con otra que tenga una entrada no nula en esa columna. Si toda la columna es nula en las filas pendientes, se pasa a la siguiente: no se divide por cero.[^a6-metodo][^gauss]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - pivotes
---
> [!note] Pregunta
> ¿Cómo se normaliza un pivote no nulo $p$ en la fila $L_i$?
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
> Si la fila $L_i$ contiene un pivote $p\ne0$ y en esa columna la fila inferior $L_j$ contiene $q$, ¿qué operación anula $q$?
===
> [!important] Respuesta
> $L_j\leftarrow L_j-(q/p)L_i$; la entrada pasa a $q-(q/p)p=0$.
```

### Sustitución hacia atrás

En un sistema escalonado, la última ecuación no nula contiene la última variable [[#Pivote|pivote]] y, si las hay, algunas [[#Variable libre|variables libres]]. Las columnas sin pivote de los coeficientes corresponden a esas incógnitas libres; si el sistema es compatible, elegimos sus valores como parámetros y despejamos la [[#Variable pivote|variable pivote]]. Sustituimos su expresión en la ecuación anterior y seguimos subiendo.

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

> [!definicion] Método de Gauss–Jordan
> El **[[Matemáticas/Álgebra lineal/Eliminación de Gauss-Jordan|método de Gauss–Jordan]]** transforma una matriz en su [[#Forma escalonada reducida|forma escalonada reducida]] mediante operaciones elementales por filas.[^a6-metodo][^gauss]

Desde una forma escalonada, se empieza por la última fila no nula y se avanza hacia arriba:

1. El pivote de la fila elegida anula las entradas que tiene **encima**, mediante reemplazos de filas.
2. Se repite la eliminación con los pivotes anteriores.
3. Se normaliza cada pivote dividiendo su fila por su valor no nulo, para que todos valgan $1$.[^a6-metodo]

La normalización también puede hacerse antes de eliminar por encima si simplifica el cálculo. Al terminar, cada columna pivote contiene un único $1$; las restantes entradas de esa columna son cero.

Si el sistema es compatible, la forma reducida determina las [[#Variable pivote|variables pivote]] en función de las [[#Variable libre|variables libres]].

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
  - métodos
---
> [!note] Pregunta
> ¿Es obligatorio convertir los pivotes en $1$ al aplicar Gauss? ¿Y al obtener la forma reducida con Gauss–Jordan?
===
> [!important] Respuesta
> En Gauss no: un escalado a $1$ o $-1$ es opcional, si facilita las cuentas. La forma reducida que obtiene Gauss–Jordan exige que todos los pivotes valgan $1$.
```

## Ejemplos de reducción

### Ejemplo — Resolver un sistema de tres ecuaciones

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
L_2&\leftarrow L_2+2L_1,\\
L_3&\leftarrow L_3-3L_1.
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
L_3\leftarrow L_3-2L_2.
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
L_3\leftarrow-\tfrac13L_3.
$$

Restamos la tercera fila a la segunda y dos veces la tercera a la primera para anular las entradas sobre ese pivote:

$$
\begin{aligned}
L_2&\leftarrow L_2-L_3,\\
L_1&\leftarrow L_1-2L_3.
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
L_2&\leftarrow\tfrac12L_2,\\
L_1&\leftarrow L_1+L_2.
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

### Ejemplo — Reducción completa de una matriz $4\times5$

Reducimos la matriz siguiente sin interpretar su última columna como términos independientes:[^a5]

$$
A=\begin{pmatrix}6&-28&4&23&-6\\5&-28&4&20&-7\\-3&15&0&-9&3\\2&-12&4&8&0\end{pmatrix}.
$$

#### Primer pivote

Elegimos el $-3$ de la tercera fila porque al dividir esa fila por $-3$ obtenemos coeficientes enteros y un [[#Pivote|pivote]] $1$. La llevamos a la primera posición y anulamos las otras entradas de esa columna:

$$
\begin{aligned}
L_3&\leftarrow-\tfrac13L_3,\\
L_1&\leftrightarrow L_3,\\
L_2&\leftarrow L_2-5L_1,\\
L_3&\leftarrow L_3-6L_1,\\
L_4&\leftarrow L_4-2L_1.
\end{aligned}
$$

$$
A_1=\begin{pmatrix}1&-5&0&3&-1\\0&-3&4&5&-2\\0&2&4&5&0\\0&-2&4&2&2\end{pmatrix}\in M_{4\times5}(\mathbb R).
$$

#### Segundo pivote

Podríamos dividir por $-3$ para obtener el segundo pivote, pero sumar la tercera fila a la segunda permite trabajar todavía con enteros: $-3+2=-1$. Después usamos esa **segunda fila actualizada** para anular el $2$ y el $-2$ que quedan debajo:

$$
\begin{aligned}
L_2&\leftarrow L_2+L_3,\\
L_3&\leftarrow L_3+2L_2,\\
L_4&\leftarrow L_4-2L_2.
\end{aligned}
$$

El resultado es la matriz

$$
A_2=\begin{pmatrix}1&-5&0&3&-1\\0&-1&8&10&-2\\0&0&20&25&-4\\0&0&-12&-18&6\end{pmatrix}\in M_{4\times5}(\mathbb R).
$$

#### Tercer y cuarto pivotes

Continuamos desde $A_2$. En la tercera columna hay un $20$ y un $-12$. Dividir la cuarta fila por $-6$ deja un [[#Pivote|pivote]] $2$ y mantiene enteros todos los coeficientes. Después la intercambiamos con la tercera:[^a6]

$$
\begin{aligned}
L_4&\leftarrow -\tfrac16L_4,\\
L_3&\leftrightarrow L_4.
\end{aligned}
$$

Así, el elemento $20$ de la nueva cuarta fila se anula restando diez veces la tercera fila, cuyo pivote en la tercera columna es $2$: $20-10\cdot2=0$.

$$
L_4\leftarrow L_4-10L_3.
$$

Se llega a la [[#Forma escalonada por filas|forma escalonada]] $U\in M_{4\times5}(\mathbb R)$, con pivotes en las cuatro primeras columnas:

$$
U=\begin{pmatrix}1&-5&0&3&-1\\0&-1&8&10&-2\\0&0&2&3&-1\\0&0&0&-5&6\end{pmatrix}.
$$

#### Eliminar por encima de los pivotes

El último pivote es $-5$. Para anular, por ejemplo, el $3$ situado en la misma columna de la tercera fila, sumamos $3/5$ veces la última fila: $3+(3/5)(-5)=0$. Aplicamos el mismo cálculo a las otras dos filas:

$$
\begin{aligned}
L_3&\leftarrow L_3+\tfrac35L_4,\\
L_2&\leftarrow L_2+2L_4,\\
L_1&\leftarrow L_1+\tfrac35L_4.
\end{aligned}
$$

Después se anula la entrada sobre el pivote de la tercera columna en la segunda fila y, con la segunda fila ya preparada, se anula la entrada sobre el pivote de la segunda columna:

$$
\begin{aligned}
L_2&\leftarrow L_2-4L_3,\\
L_1&\leftarrow L_1-5L_2.
\end{aligned}
$$

El primer pivote ya vale $1$. Dividimos las otras tres filas por sus respectivos pivotes, $-1$, $2$ y $-5$:

$$
\begin{aligned}
L_2&\leftarrow -L_2,\\
L_3&\leftarrow \tfrac12L_3,\\
L_4&\leftarrow -\tfrac15L_4.
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
L_2\leftarrow L_2-2L_1.
$$

Después se intercambian las dos primeras filas para colocar ese pivote en la primera fila:

$$
L_1\leftrightarrow L_2.
$$

Las siguientes operaciones anulan las entradas bajo el pivote de la segunda columna:

$$
\begin{aligned}
L_2&\leftarrow L_2-2L_1,\\
L_3&\leftarrow L_3-7L_1,\\
L_4&\leftarrow L_4+5L_1.
\end{aligned}
$$

$$
A_1=\begin{pmatrix}0&1&-1&0&3&-5\\0&0&2&0&-5&10\\0&0&-10&0&11&-22\\0&0&-6&0&11&-22\end{pmatrix}\in M_{4\times6}(\mathbb R).
$$

#### Pivotes en las columnas 3 y 5

El siguiente pivote es $2$, en la columna $3$. Para anular el $-10$ sumamos cinco veces la fila pivote; para anular el $-6$ sumamos tres veces esa fila: $-10+5\cdot2=0$ y $-6+3\cdot2=0$.

$$
\begin{aligned}
L_3&\leftarrow L_3+5L_2,\\
L_4&\leftarrow L_4+3L_2.
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
L_3&\leftarrow-\tfrac1{14}L_3,\\
L_4&\leftarrow L_4+4L_3.
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
L_2&\leftarrow L_2+5L_3,\\
L_1&\leftarrow L_1-3L_3,\\
L_2&\leftarrow \tfrac12L_2,\\
L_1&\leftarrow L_1+L_2.
\end{aligned}
$$

Así se obtiene la [[#Forma escalonada reducida|forma reducida]]

$$
C=\begin{pmatrix}0&1&0&0&0&1\\0&0&1&0&0&0\\0&0&0&0&1&-2\\0&0&0&0&0&0\end{pmatrix}\in M_{4\times6}(\mathbb R).
$$

El [[#Rango de una matriz|rango]] y los pivotes de la ampliada permiten decidir la compatibilidad y el número de parámetros de un sistema. Estos criterios se desarrollan en [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/06 Compatibilidad y clasificación de sistemas|Compatibilidad y clasificación de sistemas]].

## 📚 Fuentes

### Material base aportado

[^a4]: FCUL, *Álgebra Linear e Geometria Analítica*, 2026/27, aula 4, diapositivas 13–17. Fuente de las convenciones sobre pivotes, formas escalonadas y del ejemplo con tres ecuaciones. Archivo docente: `ALGA-2026-27-AulasTeo-slides-aula4-FormaEscada-impressao.pdf`.

[^a5]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 5, 25/09/2026, «Transformações Elementares», diapositivas 2–11. La captura aportada de la diapositiva 4 muestra las operaciones inversas; la segunda captura muestra las cadenas rotuladas $t_1,\ldots,t_p$, su recorrido inverso y la equivalencia por filas. Se adopta la notación $L_i$ para las filas. La diapositiva 8 propone como TPC demostrar que $EA$ realiza sobre $A$ la operación que construye $E$; aquí se resuelven sus tres casos. Archivo docente: `ALGA-2026-27-AulasTeo-slides-aula5-TransfElem-impressao.pdf`.

[^a6]: FCUL, *Álgebra Linear e Geometria Analítica*, 2026/27, aula 6, diapositivas 2–10. Fuente de los ejemplos de rango y de la continuación de las reducciones. Archivo docente: `ALGA-2026-27-AulasTeo-slides-aula6-CaractMatrizesInv-impressao.pdf`.

[^a6-metodo]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 6, diapositivas 6–7, archivo privado `ALGA-2026-27-AulasTeo-slides-aula6-CaractMatrizesInv-impressao.pdf`. Estrategia de Gauss y de Gauss–Jordan: escalonar mediante reemplazos, elegir escalados que faciliten las cuentas y, para la forma reducida, eliminar sobre los pivotes y normalizarlos. Se sigue la transcripción aportada por el usuario.

[^a6-pruebas]: FCUL, aula 6, diapositiva 2, archivo privado `ALGA-2026-27-AulasTeo-slides-aula6-CaractMatrizesInv-impressao.pdf`: enuncia existencia y unicidad de la forma reducida e invariancia del número de filas no nulas, indicando «não o vamos fazer». Las pruebas añadidas de existencia y de invariancia del número de filas no nulas son ampliaciones académicas; su procedencia se identifica en las referencias respectivas.[^existencia-rref][^rank]

[^a6-rango]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 6, 28/09/2026, diapositivas 2–10. Archivo privado `ALGA-2026-27-AulasTeo-slides-aula6-CaractMatrizesInv-impressao.pdf`. Rango —«característica» en el material— y reducción por filas.

[^a9]: FCUL, aula 9, 07/10/2026, diapositivas 2–11. Archivo privado `ALGA-2026-27-AulasTeo-slides-Aula9-Sistemas-impressao.pdf`. Compatibilidad por comparación de rangos, clasificación, grado de indeterminación y cotas del rango. La demostración del criterio reconstruye los casos de las diapositivas 4–7.

### Contraste académico y ampliaciones

[^rref]: Instituto Superior Técnico, *Apontamentos de Álgebra Linear*, Teorema 1.12, pp. 17–18, enunciado y demostración de la unicidad de la forma escalonada reducida. Se cita como respaldo del resultado; su demostración no se desarrolla en esta nota. [PDF](https://fenix.tecnico.ulisboa.pt/downloadFile/563568428979297/ApontamentosInteg.pdf).

[^rank]: Instituto Superior Técnico, *Apontamentos de Álgebra Linear*, Corolario 1.13, p. 18, enunciado de la invariancia del rango como corolario de la unicidad. La comprobación mediante normalización y eliminación hacia arriba es un desarrollo propio de las operaciones de Gauss–Jordan descritas por Nicholson, §1.2, citado en la referencia de existencia. Se hace explícito que cada pivote se conserva; no es una transcripción de una prueba separada del corolario. [PDF](https://fenix.tecnico.ulisboa.pt/downloadFile/563568428979297/ApontamentosInteg.pdf).

[^existencia-rref]: Matthew Towers, UCL, *MATH0005 Algebra 1*, [§3.10.1, teorema 3.10.1 y su demostración](https://www.homepages.ucl.ac.uk/~ucahmto/0005_2021/Ch3.S10.html). Prueba por inducción en el número de columnas, adaptada al español; se desarrollan las operaciones y los bloques matriciales que la fuente describe. W. Keith Nicholson, [*Linear Algebra with Applications*, §1.2, algoritmo de Gauss](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_%28Nicholson%29/01%3A_Systems_of_Linear_Equations/1.02%3A_Gaussian_Elimination), respalda el procedimiento finito de elección, normalización y eliminación de pivotes.

[^variables]: W. Keith Nicholson, [*Linear Algebra with Applications*, §1.2, ejemplo 1.2.3 y explicación posterior de variables principales, libres y parámetros](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_%28Nicholson%29/01%3A_Systems_of_Linear_Equations/1.02%3A_Gaussian_Elimination). Los ejemplos con $B=\left(\begin{smallmatrix}1&0&2\\0&1&-1\end{smallmatrix}\right)$ y $\mathbf b=(4,1)^T$ son elaboración didáctica propia; se muestran el sistema, su solución general y la comprobación.

[^gauss]: W. Keith Nicholson, [*Linear Algebra with Applications*, §1.2, algoritmo de Gauss y apartado de sustitución hacia atrás](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_%28Nicholson%29/01%3A_Systems_of_Linear_Equations/1.02%3A_Gaussian_Elimination). Procedimiento por filas y distinción entre escalonamiento y reducción completa.

[^rango-espacios]: TU Delft, [*Linear Algebra*, §4.2.4, “Row space and rank”, proposición 4.2.5](https://interactivetextbooks.tudelft.nl/linear-algebra/Chapter4/BasisAndDimension.html). Igualdad entre las dimensiones de los espacios de filas y de columnas y su relación con los pivotes.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como tutor de eliminación de Gauss y Gauss–Jordan para un estudiante universitario que ya conoce las operaciones elementales y el producto matricial. Haz una pregunta cada vez y espera el intento; ofrece pistas ajustadas al error y no inventes ejercicios nuevos. Utiliza los ejemplos ya desarrollados.

En una forma escalonada, las filas nulas quedan al final y los pivotes —primeras entradas no nulas de las filas— avanzan hacia la derecha. Una forma reducida exige además pivotes $1$ y ceros en el resto de cada columna pivote. Gauss elimina debajo: con pivote $p\ne0$ y entrada inferior $q$, usa $L_j\leftarrow L_j-(q/p)L_i$. No exige convertir cada pivote en $1$. Gauss–Jordan elimina también encima, desde la última fila no nula hacia arriba, y normaliza los pivotes. Cada paso usa las filas actualizadas.

El rango, denotado $r(A)$ o $\operatorname{rg}(A)$, es el número de pivotes de una forma escalonada y no depende de las operaciones elegidas. Para $A\in M_{m\times n}(K)$, $0\le r(A)\le\min(m,n)$; se cuenta a lo sumo un pivote por fila y columna. Para resolver un sistema compatible, Gauss termina con sustitución hacia atrás. Una fila $[0\ \cdots\ 0\mid c]$ con $c\ne0$ impide la solución. En la forma reducida de los coeficientes, una columna sin pivote da una variable libre; las variables pivote se despejan en función de los parámetros. Usa $x+2z=4$, $y-z=1$: $z=t$ produce $\mathbf x=(4-2t,1+t,t)^T$, que debe comprobarse en ambas ecuaciones.

Como ejemplo principal, $-2x+4y-3z=-1$, $5x-5y+10z=5$, $3x+y+5z=14$ conduce a $x-y+2z=1$, $2y+z=1$, $-3z=9$, y da $(x,y,z)=(9,2,-3)$. Pide explicar cada múltiplo y comprobar la solución en el sistema original. Los ejemplos rectangulares permiten interpretar columnas sin pivote y filas nulas sin confundir la última columna con términos independientes.

Las pruebas externas de existencia e invariancia del número de pivotes están plegadas junto a sus propiedades, con sus tarjetas asociadas. Si el estudiante las trabaja, prepara la inducción y el papel de los pivotes; no presentes esas pruebas como TPC del curso. Evalúa por separado el cálculo, la elección del método y la justificación de cada paso.
