---
title: Propiedades y aplicaciones de determinantes
aliases:
  - Propiedades del determinante
  - Regla de Cramer y adjunta
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
  - Determinantes
tipo:
  - teoría
  - propiedad
  - procedimiento
nivel: universitario-introductorio
estado: borrador
capa: curricular
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/01 Definición y cálculo de determinantes|Definición y cálculo de determinantes]]"
  - "[[Matemáticas/Álgebra lineal/Determinantes|Determinantes]]"
relacionado:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa|Compatibilidad, rango e inversa]]"
  - "[[Matemáticas/Álgebra lineal/Matrices|Matrices]]"
fsrs_goal: Justificar la linealidad y homogeneidad por filas y columnas y el efecto de las operaciones; usar transposición, conjugación, triangularidad, escala y producto; decidir invertibilidad y analizar sistemas singulares; definir un sistema de Cramer, identificar A, B y sus columnas C_j, construir A_j(B), aplicar la fórmula bajo det(A)≠0 para hallar la solución o una coordenada aislada y comprobar por sustitución; construir la adjunta y obtener A^{-1} o una de sus entradas.
simbolos:
  - \det(A)
  - A^T
  - \overline{A}
  - B
  - C_j
  - A_j(B)
  - \widehat A_{ij}
  - \operatorname{adj}(A)
  - A^{-1}
tags:
  - matemáticas
  - álgebra-lineal
  - determinantes
  - regla-de-cramer
  - adjunta
  - curricular
---

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

# Propiedades y aplicaciones de determinantes

El [[Matemáticas/Álgebra lineal/Determinantes|determinante]] cambia de manera controlada cuando se modifican las filas o columnas de una matriz. La definición recursiva y el [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/01 Definición y cálculo de determinantes|desarrollo de Laplace]] permiten calcularlo mediante menores y cofactores; las propiedades relacionan el escalar $\det(A)$ con la invertibilidad, la solución de sistemas y la matriz adjunta.

## Linealidad por filas y columnas

La fórmula del determinante por permutaciones selecciona exactamente una entrada de cada fila y de cada columna. En lo que sigue, $A_{i\leftarrow L}$ denota la matriz que coincide con $A$ salvo que su fila $i$ se sustituye por $L$; $A_{j\leftarrow C}$ se define de modo análogo para la columna $j$. Usaremos las filas $L=(\ell_1,\ldots,\ell_n)$ y $K=(k_1,\ldots,k_n)$ en $\mathbb K^{1\times n}$ y las columnas $C=(c_1,\ldots,c_n)^T$ y $D=(d_1,\ldots,d_n)^T$ en $\mathbb K^{n\times1}$. Al sustituir una fila o columna por una suma, cada producto de la fórmula se distribuye en dos; al multiplicarla por un escalar, el mismo escalar aparece en todos los productos. De ahí se obtienen las cuatro propiedades siguientes. (Aula 14, pp. 11–14)[^a14]

### Aditividad respecto de una fila

> [!teorema] Linealidad en una fila
> Si la fila $i$ de una matriz cuadrada es $L+K$, entonces
> $$
> \det(A_{i\leftarrow L+K})=\det(A_{i\leftarrow L})+\det(A_{i\leftarrow K}).
> $$

**Demostración.** En cada término de la fórmula por permutaciones aparece una entrada de la fila $i$, concretamente $a_{i,\sigma(i)}$. Si esa fila procede de $L+K$, la entrada correspondiente es $\ell_{\sigma(i)}+k_{\sigma(i)}$. Distribuirla en la fórmula separa la suma en los términos de la matriz con fila $L$ y los de la matriz con fila $K$. Los signos y las demás entradas no cambian; por tanto, se obtiene la suma de los dos determinantes.

### Aditividad respecto de una columna

> [!teorema] Linealidad en una columna
> Si la columna $j$ de una matriz cuadrada es $C+D$, entonces
> $$
> \det(A_{j\leftarrow C+D})=\det(A_{j\leftarrow C})+\det(A_{j\leftarrow D}).
> $$

**Demostración.** Cada término de la fórmula por permutaciones selecciona una entrada de la columna $j$, la de la fila $\sigma^{-1}(j)$. Si la columna es $C+D$, esa entrada es $c_{\sigma^{-1}(j)}+d_{\sigma^{-1}(j)}$. Al distribuirla, la fórmula se separa en los términos del determinante con columna $C$ y con columna $D$; su suma es el determinante indicado.

### Homogeneidad respecto de una fila

> [!teorema] Homogeneidad en una fila
> Para $\lambda\in\mathbb K$, si la fila $i$ es $\lambda L$, entonces
> $$
> \det(A_{i\leftarrow\lambda L})=\lambda\det(A_{i\leftarrow L}).
> $$

**Demostración.** Cada producto de la fórmula por permutaciones contiene exactamente la entrada de la fila $i$ situada en la columna $\sigma(i)$. Al sustituir $L$ por $\lambda L$, ese factor pasa de $\ell_{\sigma(i)}$ a $\lambda\ell_{\sigma(i)}$. Se extrae el mismo $\lambda$ de todos los sumandos.

### Homogeneidad respecto de una columna

> [!teorema] Homogeneidad en una columna
> Para $\lambda\in\mathbb K$, si la columna $j$ es $\lambda C$, entonces
> $$
> \det(A_{j\leftarrow\lambda C})=\lambda\det(A_{j\leftarrow C}).
> $$

**Demostración.** Cada producto de la fórmula por permutaciones contiene exactamente la entrada de la columna $j$ situada en la fila $\sigma^{-1}(j)$. Al sustituir $C$ por $\lambda C$, ese factor pasa de $c_{\sigma^{-1}(j)}$ a $\lambda c_{\sigma^{-1}(j)}$. Se extrae el mismo $\lambda$ de todos los sumandos.

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - linealidad
---
> [!note] Pregunta
> ¿Qué reglas de linealidad satisface el determinante respecto de cada fila y de cada columna?
===
> [!important] Respuesta
> Es aditivo y homogéneo por separado en cada fila y en cada columna: sustituir una fila o columna por una suma separa el determinante en dos; multiplicarla por $\lambda$ multiplica el determinante por $\lambda$.
```

## Efecto de las operaciones elementales

Sea $A\in M_n(\mathbb K)$. Las reglas anteriores, junto con el cambio de signo al intercambiar dos filas o columnas, permiten determinar exactamente el efecto de cada operación elemental. Para intercambiar filas, la fórmula por permutaciones empareja los términos mediante la transposición de los índices correspondientes: el producto de entradas se conserva y el signo de cada permutación cambia. Para columnas se aplica el mismo argumento. (Aula 15, pp. 2–5)[^a15]

### Intercambio de dos filas o columnas

Si se intercambian dos filas (o dos columnas), el determinante cambia de signo:

$$
\det(\ldots,R_i,\ldots,R_j,\ldots)=-\det(\ldots,R_j,\ldots,R_i,\ldots),
$$

con la misma regla para columnas. Así, un número par de intercambios conserva el signo y uno impar lo invierte.

### Multiplicación de una fila o columna por un escalar

Si una fila o columna se multiplica por $\lambda$, el determinante también se multiplica por $\lambda$. En particular, multiplicarla por cero produce determinante cero; si $\lambda\ne0$, el determinante original es $1/\lambda$ veces el nuevo. Esta regla se aplica a una fila o columna cada vez.

### Suma de un múltiplo de otra fila o columna

Reemplazar $R_i$ por $R_i+\lambda R_j$, con $i\ne j$, no cambia el determinante. Por aditividad y homogeneidad en la fila $i$,

$$
\det(\ldots,R_i+\lambda R_j,\ldots)
=\det(\ldots,R_i,\ldots)+\lambda\det(\ldots,R_j,\ldots).
$$

El segundo determinante tiene dos filas iguales y vale cero, como se prueba en el resultado siguiente. La misma demostración se aplica a columnas. (Aula 15, pp. 2–5, 9)[^a15]

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - operaciones-elementales
---
> [!note] Pregunta
> ¿Cómo cambia el determinante al intercambiar, escalar o sumar a una fila o columna un múltiplo de otra?
===
> [!important] Respuesta
> Intercambiar dos filas o columnas cambia el signo; multiplicar una por $\lambda$ multiplica el determinante por $\lambda$; sumar a una fila o columna un múltiplo de otra distinta no lo cambia.
```

### Determinante con dos filas iguales

> [!teorema] Dos filas iguales
> Si una matriz cuadrada tiene dos filas iguales, su determinante es cero.

**Demostración.** En la fórmula por permutaciones, emparejamos cada permutación $\sigma$ con la obtenida al intercambiar los índices de las dos filas iguales. El producto de entradas es el mismo, pues esas filas coinciden, mientras que el signo de la permutación cambia. Los términos de cada par se cancelan; por ello, la suma completa vale cero. (Aula 15, p. 9)[^a15]

### Determinante con dos columnas iguales

> [!teorema] Dos columnas iguales
> Si una matriz cuadrada tiene dos columnas iguales, su determinante es cero.

**Demostración.** Emparejamos los términos de la fórmula por permutaciones intercambiando las dos columnas iguales, es decir, reemplazando $\sigma$ por la composición con esa transposición. Las entradas elegidas producen el mismo producto y el signo cambia, así que los términos se cancelan por pares.

### Filas proporcionales

> [!consecuencia] Una fila múltiplo de otra
> Si una fila es múltiplo escalar de otra, el determinante es cero.

**Demostración.** Sea $R_i=\lambda R_j$, con $i\ne j$. Por homogeneidad, podemos extraer $\lambda$ de la fila $i$. En la matriz restante las filas $i$ y $j$ son iguales, por lo que su determinante es cero. Si $\lambda=0$, la fila nula también da determinante cero por homogeneidad. Las filas iguales son el caso $\lambda=1$, ya demostrado. (Aula 15, p. 9)[^a15]

### Columnas proporcionales

> [!consecuencia] Una columna múltiplo de otra
> Si una columna es múltiplo escalar de otra, el determinante es cero.

**Demostración.** Si $C_i=\lambda C_j$, extraemos el factor $\lambda$ por homogeneidad en la columna $i$. Quedan dos columnas iguales, cuyo determinante es cero. Si $\lambda=0$, se obtiene una columna nula y el determinante es cero por homogeneidad. Las columnas iguales son el caso $\lambda=1$, ya demostrado. (Aula 15, p. 9)[^a15]

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - filas-proporcionales
---
> [!note] Pregunta
> ¿Qué ocurre con el determinante si dos filas o columnas son proporcionales? ¿Y si son iguales?
===
> [!important] Respuesta
> Es cero. Si una fila o columna es múltiplo de otra, la homogeneidad la reduce al caso de dos filas o columnas iguales, cuyo determinante se anula; la igualdad es el caso de múltiplo $1$.
```

## Transpuesta, conjugación, triangularidad y escala

### Determinante de la transpuesta

> [!teorema] Invariancia por transposición
> Para toda matriz cuadrada $A$, se cumple $\det(A^T)=\det(A)$.

**Demostración.** Procedemos por inducción sobre $n$. Para $n=1$, $A=A^T$. Supongamos la propiedad para matrices de orden $n-1$ y sea $A\in M_n(\mathbb K)$. Desarrollando $\det(A)$ por la primera fila,

$$
\det(A)=\sum_{j=1}^n a_{1j}(-1)^{1+j}\det(A(1|j)).
$$

Desarrollando $\det(A^T)$ por su primera columna,

$$
\det(A^T)=\sum_{j=1}^n a_{1j}(-1)^{j+1}\det(A^T(j|1)).
$$

Como $A^T(j|1)=A(1|j)^T$, cada determinante menor coincide por la hipótesis inductiva. Los sumandos son iguales, y por tanto $\det(A^T)=\det(A)$. (Aula 14, pp. 7–9)[^a14]

### Determinante de la conjugada compleja

> [!teorema] Compatibilidad con conjugación compleja
> Si $A\in M_n(\mathbb C)$, entonces
> $$
> \det(\overline A)=\overline{\det(A)}.
> $$

**Demostración.** Por la fórmula del determinante por permutaciones,

$$
\det(\overline A)=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i=1}^n\overline{a_{i,\sigma(i)}}
=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\overline{\prod_{i=1}^n a_{i,\sigma(i)}}
=\overline{\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i=1}^n a_{i,\sigma(i)}}.
$$

El último paso es válido porque $\operatorname{sgn}(\sigma)\in\{1,-1\}\subset\mathbb R$ y la conjugación conmuta con sumas y productos. (Aula 14, p. 10; la diapositiva propone demostrarlo usando la definición e inducción)[^a14]

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - transpuesta
---
> [!note] Pregunta
> ¿Qué relación cumplen el determinante y la transpuesta? Si $A$ es compleja, ¿qué relación cumple con la conjugada?
===
> [!important] Respuesta
> $\det(A^T)=\det(A)$; si $A\in M_n(\mathbb C)$, $\det(\overline A)=\overline{\det(A)}$.
```

### Determinante de una matriz triangular

> [!teorema] Producto de la diagonal
> Si $A$ es triangular superior o inferior, entonces
> $$
> \det(A)=a_{11}a_{22}\cdots a_{nn}.
> $$
> En particular, $\det(I_n)=1$.

**Demostración.** Inducimos sobre el orden. En el caso superior, la primera columna tiene sólo una entrada posiblemente no nula, $a_{11}$; el desarrollo por esa columna da $a_{11}$ multiplicado por el determinante de la submatriz triangular superior que queda. En el caso inferior, se desarrolla por la última columna, cuya única entrada posiblemente no nula es $a_{nn}$. En ambos casos se reduce el orden en uno. El caso base $n=1$ es inmediato, así que el producto de las entradas diagonales es el determinante. Para $I_n$, todas esas entradas son $1$. (Aula 14, pp. 5–6)[^a14]

### Escalar una matriz completa

> [!consecuencia] Escala global
> Para $A\in M_n(\mathbb K)$ y $\lambda\in\mathbb K$,
> $$
> \det(\lambda A)=\lambda^n\det(A).
> $$

**Demostración.** La matriz $\lambda A$ tiene todas sus filas multiplicadas por $\lambda$. Aplicando la homogeneidad por filas $n$ veces se extrae un factor $\lambda$ por cada fila: $\det(\lambda A)=\lambda^n\det(A)$. (Aula 15, p. 8)[^a15]

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - triangular
---
> [!note] Pregunta
> ¿Cuál es el determinante de una matriz triangular y de $\lambda A$ cuando $A$ es de orden $n$?
===
> [!important] Respuesta
> El determinante triangular es el producto de la diagonal y $\det(I_n)=1$. Para una matriz completa escalada, $\det(\lambda A)=\lambda^n\det(A)$, pues se escala cada una de sus $n$ filas.
```

## Producto de matrices

> [!teorema] Determinante de un producto
> Para $A,B\in M_n(\mathbb K)$,
> $$
> \det(AB)=\det(A)\det(B).
> $$

**Demostración.** Fijada $A$, la función de las columnas de $B$ definida por $F(C_1,\ldots,C_n)=\det(AC_1,\ldots,AC_n)$ es multilineal y alternante. Al escribir cada columna como combinación de los vectores canónicos y distribuir, los términos con vectores repetidos se anulan; los restantes corresponden a permutaciones y suman $F(e_1,\ldots,e_n)\det(B)$. Como $F(e_1,\ldots,e_n)=\det(A)$, resulta $\det(AB)=\det(A)\det(B)$. (Aula 15, p. 18)[^a15]

El determinante no es lineal respecto de la suma de matrices. Por ejemplo,

$$
\det(I_2+I_2)=\det(2I_2)=2^2\det(I_2)=4,
\qquad
\det(I_2)+\det(I_2)=1+1=2.
$$

Por tanto, $\det(A+B)$ no es en general $\det(A)+\det(B)$. (Aula 15, p. 18)[^a15]

### Determinante de la inversa

Si $A$ es invertible, multiplicatividad y $\det(I_n)=1$ implican

$$
1=\det(AA^{-1})=\det(A)\det(A^{-1}).
$$
Como el producto vale $1$, necesariamente $\det(A)\ne0$; al dividir la igualdad por $\det(A)$ se obtiene
$$
\det(A^{-1})=\frac1{\det(A)}.
$$
(Aula 15, p. 19)[^a15]

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - producto
---
> [!note] Pregunta
> ¿Cómo se calcula $\det(AB)$ y qué relación cumple $\det(A^{-1})$ si $A$ es invertible?
===
> [!important] Respuesta
> $\det(AB)=\det(A)\det(B)$. Si $A$ es invertible, $\det(A^{-1})=1/\det(A)$.
```

## Invertibilidad y determinante

> [!teorema] Criterio de invertibilidad
> Una matriz cuadrada $A\in M_n(\mathbb K)$ es invertible si y sólo si $\det(A)\ne0$.

Las operaciones elementales por filas llevan $A$ a una matriz triangular escalonada sin cambiar si su determinante es nulo o no: un intercambio cambia sólo el signo, escalar una fila por un número no nulo multiplica el determinante por un escalar no nulo y sumar a una fila un múltiplo de otra no lo cambia. Si $A$ es invertible, su forma reducida es $I_n$, cuyo determinante es $1$, por lo que el de $A$ no puede ser cero. A la inversa, si $\det(A)\ne0$, la forma escalonada no puede tener una fila nula; tiene un pivote en cada columna, y la eliminación reduce $A$ a $I_n$. Así, $A$ es invertible. (Aula 15, pp. 10–11)[^a15]

Para $A\in M_n(\mathbb K)$, son equivalentes: $A$ es invertible; $A$ es producto de matrices elementales; $\operatorname{rg}(A)=n$; $\det(A)\ne0$; y para todo $\mathbf b\in\mathbb K^n$, el sistema $A\mathbf x=\mathbf b$ tiene solución única. Por tanto, si $\det(A)=0$, ningún término independiente produce una solución única: para un $\mathbf b$ concreto, el sistema es incompatible si $\mathbf b$ no pertenece al espacio columna de $A$ y tiene varias soluciones si sí pertenece. (Aula 15, pp. 10–11)[^a15]

El criterio también se obtiene por multiplicatividad: si $A$ es invertible, $\det(A)\det(A^{-1})=\det(I_n)=1$, luego $\det(A)\ne0$. Esta caracterización enlaza con [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa|rango e inversa]].

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - invertibilidad
---
> [!note] Pregunta
> ¿Cuál es el criterio determinantal de invertibilidad y qué se puede concluir si $\det(A)=0$ para el sistema $A\mathbf x=\mathbf b$?
===
> [!important] Respuesta
> $A$ es invertible si y sólo si $\det(A)\ne0$. Si $\det(A)=0$, $A$ no es invertible; un sistema concreto puede ser incompatible o compatible indeterminado, pero no tiene solución única.
```

## Regla de Cramer

### Sistema de Cramer

> [!definicion] Sistema de Cramer
> Un [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales|sistema de ecuaciones lineales]] es de Cramer si el número de ecuaciones coincide con el número de incógnitas y es compatible determinado, es decir, tiene una única solución. (Aula 16, p. 2)[^a16]


Para estos sistemas, la [[Matemáticas/Álgebra lineal/Determinantes|regla de Cramer]] expresa cada coordenada mediante determinantes. Si las columnas de la matriz de coeficientes son $C_1,\ldots,C_n\in\mathbb K^{n\times1}$, entonces $A=[C_1\ C_2\ \cdots\ C_n]\in M_n(\mathbb K)$. Denotamos por $B=\mathbf b\in\mathbb K^{n\times1}$ la columna de términos independientes, de modo que el sistema se escribe $A\mathbf x=B$. El criterio de invertibilidad da $\det(A)\ne0$ para un sistema cuadrado con solución única. (Aula 16, p. 2)[^a16]

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - regla-de-cramer
---
> [!note] Pregunta
> ¿Qué condiciones definen un sistema de Cramer?
===
> [!important] Respuesta
> Es un sistema cuadrado —igual número de ecuaciones e incógnitas— y compatible determinado: tiene una única solución.
```

### Regla de Cramer

Para cada $j\in\{1,\ldots,n\}$, $A_j(B)$ es la matriz que se obtiene al sustituir la columna $j$ de $A$ por $B$. Esta notación permite aislar el numerador asociado a la coordenada $x_j$.

> [!teorema] Regla de Cramer
> Si $A\in M_n(\mathbb K)$ y $\det(A)\ne0$, la única solución de $A\mathbf x=B$ cumple
> $$
> x_j=\frac{\det(A_j(B))}{\det(A)},\qquad j=1,\ldots,n.
> $$
> (Aula 16, p. 3)[^a16]

La fórmula permite calcular una coordenada elegida sin conocer las demás: se construye solo la matriz $A_j(B)$ correspondiente a esa incógnita. (Aula 16, p. 3)[^a16]

**Demostración.** Escribimos $B=\sum_{k=1}^n x_kC_k$, pues $A\mathbf x=B$ y las columnas de $A$ son $C_1,\ldots,C_n$. Por linealidad en la columna $j$,
$$
\det(A_j(B))=\sum_{k=1}^n x_k\det(C_1,\ldots,C_{j-1},C_k,C_{j+1},\ldots,C_n).
$$
Cada término con $k\ne j$ contiene dos columnas iguales, $C_k$, y por tanto su determinante es cero. El término con $k=j$ vale $x_j\det(A)$; como $\det(A)\ne0$, dividir por ese determinante da la fórmula. La demostración usa la linealidad por columnas y la anulación cuando se repiten columnas (Aula 14, pp. 13–14; Aula 15, p. 9)[^a14][^a15].

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - regla-de-cramer
---
> [!note] Pregunta
> ¿Cuándo se puede aplicar la regla de Cramer y qué matriz se usa para hallar $x_j$?
===
> [!important] Respuesta
> Si $A$ es cuadrada y $\det(A)\ne0$, entonces $x_j=\det(A_j(B))/\det(A)$; $A_j(B)$ sustituye la columna $j$ de $A$ por la columna de términos independientes $B$.
```

### Ejemplo trabajado

#### Sistema de tres incógnitas

Resuelve mediante la regla de Cramer el sistema
$$
\begin{cases}
2x+z=-2,\\
x+y-z=0,\\
-2x-y-3z=1,
\end{cases}
$$
y comprueba la solución por sustitución. Su matriz de coeficientes y la columna de términos independientes son
$$
A=\begin{pmatrix}2&0&1\\1&1&-1\\-2&-1&-3\end{pmatrix},\qquad
B=\begin{pmatrix}-2\\0\\1\end{pmatrix}.
$$
Por Sarrus, $\det(A)=-6-1+0+2-2-0=-7\ne0$, de modo que el sistema tiene una única solución y se puede aplicar Cramer. Sustituyendo cada columna por $B$:
$$
\det(A_1(B))=\begin{vmatrix}-2&0&1\\0&1&-1\\1&-1&-3\end{vmatrix}=6+0+0-1+2-0=7.
$$
Por tanto, $x=\dfrac{7}{-7}=-1$.
$$
\det(A_2(B))=\begin{vmatrix}2&-2&1\\1&0&-1\\-2&1&-3\end{vmatrix}=0-4+1-0+2-6=-7.
$$
Por tanto, $y=\dfrac{-7}{-7}=1$.
$$
\det(A_3(B))=\begin{vmatrix}2&0&-2\\1&1&0\\-2&-1&1\end{vmatrix}=2+0+2-4-0-0=0.
$$
Por tanto, $z=\dfrac{0}{-7}=0$ y la solución es $(x,y,z)=(-1,1,0)$. Al sustituir, $2(-1)+0=-2$, $-1+1-0=0$ y $-2(-1)-1-3(0)=1$. (Aula 16, pp. 4–5)[^a16]

## Matriz adjunta e inversa

Sea $\widehat A_{ij}=(-1)^{i+j}\det(A(i|j))$ el cofactor de $A$ en la posición $(i,j)$; también se escribe $C_{ij}$. La matriz de cofactores es $\widehat A=[\widehat A_{ij}]$.

> [!definicion] Adjunta clásica
> La adjunta clásica de $A$ es la transpuesta de su matriz de cofactores:
> $$
> \operatorname{adj}(A)=\widehat A^{\,T}.
> $$
> (Aula 15, p. 12)[^a15]

> [!teorema] Identidad de la adjunta
> Para toda matriz cuadrada $A$,
> $$
> A\operatorname{adj}(A)=\operatorname{adj}(A)A=\det(A)I_n.
> $$

**Demostración.** Probamos la primera igualdad; la segunda se obtiene análogamente desarrollando por columnas. La entrada $(i,j)$ de $A\operatorname{adj}(A)$ es

$$
\sum_{k=1}^n a_{ik}\widehat A_{jk}.
$$

Si $i=j$, esta suma es el desarrollo de Laplace de $\det(A)$ por la fila $i$. Si $i\ne j$, formamos una matriz $M$ sustituyendo la fila $j$ de $A$ por la fila $i$. Tiene las filas $i$ y $j$ iguales, así que $\det(M)=0$. Al desarrollar $\det(M)$ por la fila $j$, los cofactores son los de $A$ porque suprimir la fila reemplazada elimina esa fila; por tanto, la suma anterior vale cero. Las entradas diagonales son $\det(A)$ y las demás son cero, como exige $\det(A)I_n$. (Aula 15, pp. 12–14)[^a15]

Si $\det(A)\ne0$, dividir la identidad por el determinante da

$$
A^{-1}=\frac{1}{\det(A)}\operatorname{adj}(A)
=\frac{1}{\det(A)}\widehat A^{\,T}.
$$

En particular, cada entrada se obtiene directamente como

$$
(A^{-1})_{ij}=\frac{\widehat A_{ji}}{\det(A)}.
$$

La transposición de la matriz de cofactores es esencial: la entrada $(i,j)$ de la inversa usa el cofactor $(j,i)$. La fórmula proporciona incluso una entrada aislada sin calcular toda la inversa. (Aula 15, pp. 15–17)[^a15]

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - adjunta
---
> [!note] Pregunta
> ¿Cómo se construye $\operatorname{adj}(A)$ y qué cofactor determina la entrada $(i,j)$ de $A^{-1}$?
===
> [!important] Respuesta
> $\operatorname{adj}(A)=\widehat A^{\,T}$, la transpuesta de la matriz de cofactores. Si $\det(A)\ne0$, $(A^{-1})_{ij}=\widehat A_{ji}/\det(A)$.
```

### Aplicación conjunta de Cramer y la adjunta

#### Ejemplo trabajado: Cramer y adjunta de orden dos

Sea

$$
A=\begin{pmatrix}2&1\\5&3\end{pmatrix},\qquad
\mathbf b=\begin{pmatrix}1\\2\end{pmatrix}.
$$

Su determinante es $\det(A)=6-5=1$, así que $A$ es invertible. Cramer da

$$
x_1=\frac{\begin{vmatrix}1&1\\2&3\end{vmatrix}}{1}=1,
\qquad
x_2=\frac{\begin{vmatrix}2&1\\5&2\end{vmatrix}}{1}=-1.
$$

Los cofactores son $\widehat A=\begin{pmatrix}3&-5\\-1&2\end{pmatrix}$, de modo que

$$
A^{-1}=\operatorname{adj}(A)=\widehat A^T=
\begin{pmatrix}3&-1\\-5&2\end{pmatrix}.
$$

Se comprueba $A(1,-1)^T=(1,2)^T$ y $AA^{-1}=I_2$. El ejemplo verifica las aplicaciones con un determinante no nulo, que es la condición común a Cramer y a la fórmula adjunta. (Ejemplo de elaboración propia.)

## Práctica graduada

Los ejercicios 1, 3, 4, 5 y 7 son de elaboración propia; el ejercicio 2 reproduce el cálculo por reducción de Aula 15 y el ejercicio 6 adapta el ejemplo de entrada aislada de la inversa de Aula 15.

### Ejercicios

#### Ejercicio 1 — transpuesta y conjugación

Para la matriz compleja

$$
A=\begin{pmatrix}1+i&2\\ i&1-i\end{pmatrix},
$$
calcula $\det(A)$, $\det(A^T)$ y $\det(\overline A)$ y comprueba las dos relaciones anteriores.

> [!resolucion]- Resolución
> $$
> \det(A)=(1+i)(1-i)-2i=2-2i.
> $$
> Directamente,
> $$
> \det(A^T)=(1+i)(1-i)-2i=2-2i=\det(A).
> $$
> Además,
> $$
> \det(\overline A)=(1-i)(1+i)-2(-i)=2+2i=\overline{\det(A)}.
> $$
> Se verifican tanto la invariancia por transposición como la compatibilidad con conjugación.

#### Ejercicio 2 — calcular por operaciones elementales

Calcula el determinante de

$$
A=\begin{pmatrix}3&1&9\\-2&0&6\\1&1&-3\end{pmatrix}
$$
reduciendo a una matriz triangular y contabilizando los cambios de signo.

> [!resolucion]- Resolución
> Intercambiamos $L_1$ y $L_3$, lo que cambia el signo. Después sumamos múltiplos de filas para anular las entradas debajo del primer pivote:
> $$
> \det(A)=-\det\begin{pmatrix}1&1&-3\\0&2&0\\0&-2&18\end{pmatrix}
> =-\det\begin{pmatrix}1&1&-3\\0&2&0\\0&0&18\end{pmatrix}.
> $$
> La última operación, $L_3\leftarrow L_3+L_2$, conserva el determinante. La matriz final es triangular, así que
> $$
> \det(A)=-(1\cdot2\cdot18)=-36.
> $$
> Sólo se hizo un intercambio, por eso se conserva un signo negativo. (Aula 15, p. 7)[^a15]

#### Ejercicio 3 — escalar una matriz

Sea

$$
B=\begin{pmatrix}1&0&0\\2&1&0\\-1&4&2\end{pmatrix}.
$$
Calcula $\det(B)$ y $\det(3B)$ de dos maneras: usando triangularidad y usando la fórmula de escala global.

> [!resolucion]- Resolución
> $B$ es triangular inferior y $\det(B)=1\cdot1\cdot2=2$. Como el orden es tres,
> $$
> \det(3B)=3^3\det(B)=27\cdot2=54.
> $$
> Directamente, $3B$ sigue siendo triangular y sus entradas diagonales son $3,3,6$, cuyo producto también es $54$. El factor es $3^3$, no $3$, porque cada una de las tres filas queda escalada.

#### Ejercicio 4 — resolver un sistema con Cramer

Indica si el sistema es de Cramer, resuélvelo mediante esa regla y comprueba la solución:

$$
\begin{cases}
3x+2y=7,\\
x-y=1.
\end{cases}
$$

> [!resolucion]- Resolución
> Hay dos ecuaciones y dos incógnitas; además, la matriz de coeficientes tiene determinante $\Delta=3(-1)-2(1)=-5\ne0$. Por tanto, el sistema es de Cramer y la regla se aplica. Sustituyendo cada columna por los términos independientes:
> $$
> \Delta_x=\begin{vmatrix}7&2\\1&-1\end{vmatrix}=-9,
> \qquad
> \Delta_y=\begin{vmatrix}3&7\\1&1\end{vmatrix}=-4.
> $$
> Así, $x=\Delta_x/\Delta=9/5$ e $y=\Delta_y/\Delta=4/5$. En efecto, $3(9/5)+2(4/5)=7$ y $9/5-4/5=1$.

#### Ejercicio 5 — distinguir incompatibilidad y compatibilidad indeterminada

Considera la matriz singular

$$
A=\begin{pmatrix}1&2\\2&4\end{pmatrix}
$$

y compara los sistemas $A\mathbf x=(3,6)^T$ y $A\mathbf x=(3,5)^T$.

> [!resolucion]- Resolución
> El determinante es $1\cdot4-2\cdot2=0$, así que $A$ no puede producir solución única para ningún término independiente. En el primer sistema, la segunda ecuación es el doble de la primera: $x+2y=3$, por lo que hay varias soluciones, por ejemplo $x=3-2t$, $y=t$. En el segundo, duplicar la primera ecuación daría $2x+4y=6$, en contradicción con $2x+4y=5$; es incompatible. La diferencia depende de si el término independiente pertenece al espacio columna de $A$. (Aula 15, pp. 10–11)[^a15]

#### Ejercicio 6 — obtener una entrada de la inversa

Sea

$$
A=\begin{pmatrix}
2&-1&0&3\\
1&-1&-3&4\\
1&0&2&1\\
-5&2&0&1
\end{pmatrix},\qquad \det(A)=12.
$$
Calcula $(A^{-1})_{23}$ sin calcular toda la inversa.

> [!resolucion]- Resolución
> La entrada requiere el cofactor transpuesto, $\widehat A_{32}$:
> $$
> (A^{-1})_{23}=\frac{\widehat A_{32}}{12}
> =\frac{(-1)^{3+2}}{12}\det\begin{pmatrix}2&0&3\\1&-3&4\\-5&0&1\end{pmatrix}.
> $$
> Por Sarrus, el determinante menor es $-6+0+0-(45+0+0)=-51$. Por ello, $\widehat A_{32}=(-1)(-51)=51$ y
> $$
> (A^{-1})_{23}=\frac{51}{12}=\frac{17}{4}.
> $$
> La posición $(2,3)$ de la inversa usa el cofactor de la posición transpuesta $(3,2)$. (Aula 15, p. 17; el determinante de orden cuatro se había calculado en Aula 14, p. 4)[^a15][^a14]

#### Ejercicio 7 — calcular una coordenada aislada

Sea
$$
A=\begin{pmatrix}2&0&1\\1&1&-1\\-2&-1&-3\end{pmatrix},\qquad
B_s=\begin{pmatrix}-2\\0\\s\end{pmatrix},\qquad s\in\mathbb R.
$$
Esta variación conserva la matriz del sistema resuelto arriba y cambia el tercer término independiente. Calcula únicamente $z(s)$, sin determinar $x$ ni $y$, y comprueba el caso $s=1$. (Variación propia basada en Aula 16, pp. 3–5)[^a16]

> [!resolucion]- Resolución
> Como $\det(A)=-7\ne0$, el sistema es de Cramer para todo $s\in\mathbb R$. Para hallar solo $z$, sustituimos la tercera columna de $A$ por $B_s$:
> $$
> A_3(B_s)=\begin{pmatrix}2&0&-2\\1&1&0\\-2&-1&s\end{pmatrix},\qquad \det(A_3(B_s))=2s+0+2-4-0-0=2s-2.
> $$
> La regla de Cramer da $z(s)=\dfrac{2s-2}{-7}=\dfrac{2-2s}{7}$. Para $s=1$, $z(1)=0$, como en el sistema del ejemplo.


## Condiciones de validez y elección del método

Cramer y la fórmula adjunta para $A^{-1}$ requieren que $A$ sea cuadrada e invertible, esto es, $\det(A)\ne0$. Si el determinante es cero, no se pueden usar para obtener una solución única; el sistema puede ser incompatible o compatible indeterminado. Antes de usar operaciones por filas para calcular un determinante, contabiliza los intercambios y los escalados: sumar múltiplos de otras filas conserva el valor, intercambiar cambia el signo y escalar una fila multiplica el resultado.


El [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/01 Definición y cálculo de determinantes|desarrollo de Laplace]] convierte la definición del determinante en un cálculo mediante menores y cofactores. Las propiedades de las operaciones explican cuándo cambia su valor y cuándo su nulidad impide una solución única; Cramer permite obtener coordenadas de la solución y la adjunta construye la matriz inversa. Queda una pregunta distinta: ¿qué relación tiene el determinante con la geometría? La [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/03 Interpretación geométrica del determinante|interpretación geométrica del determinante]] desarrolla esa conexión.

## 📚 Fuentes

### Material base aportado

- FCUL, *ALGA-2026-27-AulasTeo-slides-Aula14-Determinantes-impressao.pdf*, Aula 14, 19/10/2026, pp. 2–16. Fuente local: /Users/therustifyer/Seafile/Física (Completo)/Carrera/1º/ULisboa/ALGA/02 - Determinantes/.
- FCUL, *ALGA-2026-27-AulasTeo-slides-Aula15-Determinantes-impressao.pdf*, Aula 15, 21/10/2026, pp. 2–19. Fuente local: /Users/therustifyer/Seafile/Física (Completo)/Carrera/1º/ULisboa/ALGA/02 - Determinantes/.
- FCUL, *ALGA-2026-27-AulasTeo-slides-Aula16-SistemasCramer-impressao.pdf*, Aula 16, 23/10/2026, pp. 2–5. Fuente local: /Users/therustifyer/Seafile/Física (Completo)/Carrera/1º/ULisboa/ALGA/02 - Determinantes/. La p. 6 solo remite a los ejercicios 58.b y 58.d (este último, parcialmente), sin sus enunciados; la colección local de problemas consultada llega al 34, por lo que no se reconstruyen.

[^a14]: FCUL, *ALGA-2026-27-AulasTeo-slides-Aula14-Determinantes-impressao.pdf*, Aula 14, 19/10/2026.

[^a15]: FCUL, *ALGA-2026-27-AulasTeo-slides-Aula15-Determinantes-impressao.pdf*, Aula 15, 21/10/2026.

[^a16]: FCUL, *ALGA-2026-27-AulasTeo-slides-Aula16-SistemasCramer-impressao.pdf*, Aula 16, 23/10/2026.

### Lecturas académicas opcionales

- MIT OpenCourseWare, [*Properties of Determinants*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/5dd3f8ec0a398fd74264fef3fd591f81_MIT18_06SCF11_Ses2.5sum.pdf). Resumen de clase complementario sobre propiedades de los determinantes.
- MIT OpenCourseWare, [*Cramer's Rule, Inverse Matrix and Volume*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/least-squares-determinants-and-eigenvalues/cramers-rule-inverse-matrix-and-volume/). Sesión complementaria con vídeo, resumen y ejercicios sobre cofactores, la inversa y la regla de Cramer.


## 🧑‍🏫 Prompt para tutor conversacional

Trabaja el tema al nivel de primer curso universitario y presupón el manejo de matrices, determinantes por cofactores, rango y sistemas lineales. Evalúa también la linealidad por filas y columnas, el efecto de las operaciones, la transposición y conjugación, las matrices triangulares, la escala, el producto y el criterio de invertibilidad. Comprueba que el estudiante puede enunciar que un sistema de Cramer es cuadrado y compatible determinado; representar $A=[C_1\ \cdots\ C_n]$, $B=\mathbf b$ y $A\mathbf x=B$; y construir $A_j(B)$ sustituyendo por $B$ la columna $j$. La regla es
$$
x_j=\frac{\det(A_j(B))}{\det(A)},\qquad A\in M_n(\mathbb K),\quad B\in\mathbb K^{n\times1},\quad \det(A)\ne0.
$$
Relaciona el caso $\det(A)=0$ con sistemas incompatibles o compatibles indeterminados, y vincula Cramer con la invertibilidad y la fórmula de la adjunta. Aplica recuperación activa, repetición espaciada y práctica guiada: formula una pregunta cada vez, espera la respuesta, distingue el tipo de error, corrige con precisión y adapta la dificultad. No reveles la solución antes de que el estudiante lo intente. Para comprobar el procedimiento, usa el sistema concreto
$$
\begin{cases}
2x+z=-2,\\
x+y-z=0,\\
-2x-y-3z=1,
\end{cases}
\qquad A=\begin{pmatrix}2&0&1\\1&1&-1\\-2&-1&-3\end{pmatrix},\quad B=\begin{pmatrix}-2\\0\\1\end{pmatrix}.
$$
El resultado es $\det(A)=-7$, $\det(A_1(B))=7$, $\det(A_2(B))=-7$, $\det(A_3(B))=0$ y $(x,y,z)=(-1,1,0)$; exige verificar las tres ecuaciones por sustitución. Para practicar una coordenada aislada, usa $B_s=(-2,0,s)^T$ con $s\in\mathbb R$: basta obtener $z(s)=(2-2s)/7$, sin hallar las otras coordenadas. Al calcular $A^{-1}$, verifica que se transponga la matriz de cofactores; la interpretación geométrica del determinante queda como ampliación externa. No generes ejercicios: usa los sistemas y la práctica incluidos en esta nota.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
