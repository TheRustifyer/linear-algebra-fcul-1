---
title: Ejercicios 1–15 — operaciones, potencias y transposición
asignatura: Álgebra Lineal y Geometría Analítica
capa: curricular
tipo: ejercicios
nivel: universitario-introductorio
estado: revisado
fsrs_goal: Calcular operaciones matriciales compatibles y justificar propiedades y contraejemplos del producto, las potencias y la transposición.
tags:
  - matematicas
  - algebra-lineal
  - matrices
  - ejercicios
  - fcul
---

# Operaciones, potencias y transposición · ejercicios 1–15

> [!tip] Procedencia y uso
> 🤖 marca una solución añadida por IA; su **Comprobación** final permite verificarla sin fiarse solo del resultado. 📘 marca una respuesta de la ficha del curso. Cada ejercicio vuelve a definir sus propias matrices.

## Lectura y construcción de matrices

### Ejercicio 1 · Tamaño, entradas y posiciones 🤖

#### Enunciado

Considera la matriz

$$
A=\begin{pmatrix}
11&\frac12&-2&3\\
4&1&1&0
\end{pmatrix}.
$$

1. ¿De qué tipo es $A$ según su tamaño?
2. ¿Cuánto valen $a_{12}$ y $a_{21}$?
3. ¿Qué entradas de $A$ valen $1$?

> [!example]- Resolución
>
> **a)** $A$ es una matriz real rectangular de tamaño $2\times4$: tiene dos filas y cuatro columnas.
>
> **b)** El primer índice indica la fila y el segundo la columna, por lo que
>
> $$
> a_{12}=\frac12,\qquad a_{21}=4.
> $$
>
> **c)** Las entradas son $a_{22}=1$ y $a_{23}=1$.

> [!success]- Comprobación
>
> Recorre las dos filas de izquierda a derecha: $a_{21}=4$, $a_{22}=1$, $a_{23}=1$ y $a_{24}=0$. Solo $a_{22}$ y $a_{23}$ valen $1$.

---

### Ejercicio 2 · Matriz definida por sus entradas 🤖

#### Enunciado

Construye $A=(a_{ij})_{3\times3}$ en cada caso:

1. $a_{ij}=i+j$.
2. $a_{ij}=0$ si $i=j$; $a_{ij}=-1$ si $i>j$; $a_{ij}=2$ si $i<j$.

> [!example]- Resolución
>
> **a)** Para $i,j\in\{1,2,3\}$ se sustituye cada par de índices:
>
> $$
> A=\begin{pmatrix}
> 2&3&4\\
> 3&4&5\\
> 4&5&6
> \end{pmatrix}.
> $$
>
> **b)** La diagonal vale $0$, por encima de ella aparece $2$ y por debajo $-1$:
>
> $$
> A=\begin{pmatrix}
> 0&2&2\\
> -1&0&2\\
> -1&-1&0
> \end{pmatrix}.
> $$

> [!success]- Comprobación
>
> En a), comprueba, por ejemplo, $a_{13}=1+3=4$ y $a_{31}=3+1=4$. En b), verifica una entrada de cada región: $a_{22}=0$, $a_{13}=2$ y $a_{31}=-1$.

---

### Ejercicio 3 · Igualdad entrada a entrada 🤖

#### Enunciado

Determina, si existen, $x,y\in\mathbb R$ para que $A=B$ en cada apartado.

**a)**

$$
A=\begin{pmatrix}1&0\\x&y\\-1&3\end{pmatrix},
\qquad
B=\begin{pmatrix}1&0\\y/2&x+1\\-1&3\end{pmatrix}.
$$

**b)**

$$
A=\begin{pmatrix}x^3&2&0\\3&y&-1\end{pmatrix},
\qquad
B=\begin{pmatrix}3x+1&2&y\\3&-2&-1\end{pmatrix}.
$$

**c)**

$$
A=\begin{pmatrix}2&-5\\0&x+y\\2y&3\end{pmatrix},
\qquad
B=\begin{pmatrix}2&-5\\0&2x+4\\y+1&1\end{pmatrix}.
$$

> [!example]- Resolución
>
> **a)** Dos matrices son iguales cuando coinciden todas sus entradas. Aquí la primera y la tercera filas ya son iguales; solo hay que comparar las dos entradas de la segunda fila.
>
> **Paso 1. Igualar las entradas correspondientes.**
>
> $$
> a_{21}=b_{21}\quad\Longrightarrow\quad x=\frac{y}{2},
> \qquad
> a_{22}=b_{22}\quad\Longrightarrow\quad y=x+1.
> $$
>
> **Paso 2. Despejar $y$ en la primera ecuación.** Multiplicamos ambos miembros por $2$:
>
> $$
> x=\frac{y}{2}\quad\Longrightarrow\quad y=2x.
> $$
>
> **Paso 3. Sustituir en la segunda ecuación.** Como $y=x+1$ y $y=2x$, igualamos ambas expresiones y restamos $x$ a los dos miembros:
>
> $$
> 2x=x+1\quad\Longrightarrow\quad 2x-x=1\quad\Longrightarrow\quad x=1.
> $$
>
> **Paso 4. Recuperar $y$.** Sustituimos $x=1$ en $y=2x$ y obtenemos $y=2\cdot1=2$. Por tanto, la única solución es $x=1$ e $y=2$.
>
> **b)** Para que $A=B$, las entradas de la primera fila y tercera columna tendrían que ser iguales.
>
> **Paso 1. Comparar $a_{13}$ y $b_{13}$.** En $A$ esa entrada vale $0$; en $B$ vale $y$. Por tanto,
>
> $$
> a_{13}=b_{13}\quad\Longrightarrow\quad 0=y.
> $$
>
> **Paso 2. Comparar $a_{22}$ y $b_{22}$.** En $A$ aparece $y$ y en $B$ aparece $-2$, así que
>
> $$
> a_{22}=b_{22}\quad\Longrightarrow\quad y=-2.
> $$
>
> **Paso 3. Detectar la contradicción.** El mismo número $y$ tendría que valer $0$ y $-2$ a la vez. Eso es imposible. La igualdad de las primeras entradas también exigiría $x^3=3x+1$, pero ningún valor de $x$ puede eliminar la contradicción en $y$. **No existe solución.**
>
> **c)** La primera fila de $A$ y $B$ coincide, al igual que sus entradas $a_{21}=b_{21}=0$. Examinemos las restantes.
>
> **Paso 1. Igualar las entradas que dependen de $x$ e $y$.** En la segunda fila y segunda columna,
>
> $$
> a_{22}=b_{22}\quad\Longrightarrow\quad x+y=2x+4\quad\Longrightarrow\quad y=x+4.
> $$
>
> En la tercera fila y primera columna,
>
> $$
> a_{31}=b_{31}\quad\Longrightarrow\quad 2y=y+1\quad\Longrightarrow\quad y=1.
> $$
>
> **Paso 2. Hallar el único candidato.** Al sustituir $y=1$ en $y=x+4$, se obtiene $1=x+4$ y, por tanto, $x=-3$.
>
> **Paso 3. Revisar la entrada restante.** La tercera fila y segunda columna exige
>
> $$
> a_{32}=b_{32}\quad\Longrightarrow\quad 3=1,
> $$
>
> lo cual es falso independientemente de $x$ e $y$. Por ello, ni siquiera $x=-3$ e $y=1$ hacen iguales las matrices. **No existe solución.**

> [!success]- Comprobación
>
> En a), sustituye $x=1$ e $y=2$ en las dos matrices. Ambas deben dar
>
> $$
> A=B=\begin{pmatrix}1&0\\1&2\\-1&3\end{pmatrix}.
> $$
>
> En b), la condición $y=0$ iguala $a_{13}$ y $b_{13}$, pero deja $a_{22}=0$ frente a $b_{22}=-2$. Por tanto, $A\ne B$ para cualquier $x$.
>
> En c), incluso el candidato $x=-3$ e $y=1$ deja distintas las últimas entradas:
>
> $$
> A=\begin{pmatrix}2&-5\\0&-2\\2&3\end{pmatrix},
> \qquad
> B=\begin{pmatrix}2&-5\\0&-2\\2&1\end{pmatrix}.
> $$

---

## Suma y producto matricial

### Ejercicio 4 · Compatibilidad de tamaños y cálculos 🤖

#### Enunciado

Considera las matrices

$$
A=\begin{pmatrix}2&2\\3&3\\-1&-1\end{pmatrix},\qquad
B=\begin{pmatrix}-1&3\\-4&0\\0&-1\end{pmatrix},\qquad
C=\begin{pmatrix}2&-1\\3&0\end{pmatrix}.
$$

$$
D=\begin{pmatrix}1&2&3\\3&1&-2\end{pmatrix},\qquad
E=\begin{pmatrix}1&0&2\\-1&2&1\\-2&2&4\end{pmatrix},\qquad
F=\begin{pmatrix}-2&1&3\\-1&1&-2\\0&1&3\end{pmatrix}.
$$

Calcula, cuando estén definidas, las siguientes expresiones:

- **a–h:** $A+B$, $B+A$, $A-B$, $D+E$, $-A+2B$, $A+C$, $A+D$, $A-A$.
- **i–p:** $C-C$, $AB$, $AC$, $CA$, $AD$, $DA$, $EF$, $FE$.
- **q–w:** $A(3D)$, $(AC)D$, $A(CD)$, $(2A)(C(3D))$, $(2A)((2C)(2D))$, $A(CD+D)$, $C^3$.

> [!example]- Resolución: tamaño antes de calcular
>
> La suma exige tamaños iguales; el producto $XY$ exige que las columnas de $X$ coincidan con las filas de $Y$. Por ello, **d), f), g), j) y l) no están definidas**. En particular, $AB$ intenta multiplicar una matriz $3\times2$ por otra $3\times2$.

> [!example]- Resolución: sumas y restas
>
> $$
> \text{a) }A+B=\text{b) }B+A=
> \begin{pmatrix}1&5\\-1&3\\-1&-2\end{pmatrix}.
> $$
>
> $$
> \text{c) }A-B=
> \begin{pmatrix}3&-1\\7&3\\-1&0\end{pmatrix},
> \qquad
> \text{e) }-A+2B=
> \begin{pmatrix}-4&4\\-11&-3\\1&-1\end{pmatrix}.
> $$
>
> $$
> \text{h) }A-A=0_{3\times2},
> \qquad
> \text{i) }C-C=0_{2\times2}.
> $$

> [!example]- Resolución: productos simples
>
> $$
> \text{k) }AC=
> \begin{pmatrix}10&-2\\15&-3\\-5&1\end{pmatrix},
> \qquad
> \text{m) }AD=
> \begin{pmatrix}8&6&2\\12&9&3\\-4&-3&-1\end{pmatrix}.
> $$
>
> $$
> \text{n) }DA=
> \begin{pmatrix}5&5\\11&11\end{pmatrix}.
> $$
>
> El orden importa: $AD$ y $DA$ tienen incluso tamaños distintos.
>
> $$
> \text{o) }EF=
> \begin{pmatrix}-2&3&9\\0&2&-4\\2&4&2\end{pmatrix},
> \qquad
> \text{p) }FE=
> \begin{pmatrix}-9&8&9\\2&-2&-9\\-7&8&13\end{pmatrix}.
> $$

> [!example]- Resolución: productos compuestos
>
> Por asociatividad y compatibilidad de tamaños,
>
> $$
> \text{q) }A(3D)=3AD=
> \begin{pmatrix}24&18&6\\36&27&9\\-12&-9&-3\end{pmatrix}.
> $$
>
> $$
> \text{r) }(AC)D=\text{s) }A(CD)=
> \begin{pmatrix}4&18&34\\6&27&51\\-2&-9&-17\end{pmatrix}.
> $$
>
> $$
> \text{t) }(2A)(C(3D))=6A(CD)=
> \begin{pmatrix}24&108&204\\36&162&306\\-12&-54&-102\end{pmatrix}.
> $$
>
> $$
> \text{u) }(2A)((2C)(2D))=8A(CD)=
> \begin{pmatrix}32&144&272\\48&216&408\\-16&-72&-136\end{pmatrix}.
> $$
>
> $$
> \text{v) }A(CD+D)=A(CD)+AD=
> \begin{pmatrix}12&24&36\\18&36&54\\-6&-12&-18\end{pmatrix}.
> $$
>
> $$
> \text{w) }C^3=
> \begin{pmatrix}-4&-1\\3&-6\end{pmatrix}.
> $$

> [!success]- Comprobación
>
> Antes de revisar cada número, repite la prueba de tamaños. Para una entrada concreta,
>
> $$
> (AC)_{11}=2\cdot2+2\cdot3=10.
> $$
>
> Después verifica las relaciones independientes **r)=s)**, **q)=$3\,$m)** y **v)=r)+m)**. Estas igualdades controlan la asociatividad, el factor escalar y la distributividad. Los resultados numéricos se contrastaron también con multiplicación matricial de enteros.

---

### Ejercicio 5 · Entradas, fila y columna de un producto 🤖

#### Enunciado

Sean

$$
A=\begin{pmatrix}0&3&1\\-1&0&2\\3&0&2\end{pmatrix},
\qquad
B=\begin{pmatrix}-1&0&0\\0&-1&3\\2&8&1\end{pmatrix}.
$$

Sin calcular todo $AB$, determina: a) $(AB)_{23}$ y $(AB)_{31}$; b) la segunda fila; c) la tercera columna.

> [!example]- Resolución
>
> Una entrada se obtiene multiplicando la fila correspondiente de $A$ por la columna correspondiente de $B$:
>
> $$
> (AB)_{23}=(-1,0,2)\cdot(0,3,1)=2,
> \qquad
> (AB)_{31}=(3,0,2)\cdot(-1,0,2)=1.
> $$
>
> La segunda fila y la tercera columna son, respectivamente,
>
> $$
> (AB)_{2,*}=(5,16,2),
> \qquad
> (AB)_{*,3}=\begin{pmatrix}10\\2\\2\end{pmatrix}.
> $$

> [!success]- Comprobación
>
> Calcula el producto entero **solo después** de resolver los apartados:
>
> $$
> AB=\begin{pmatrix}2&5&10\\5&16&2\\1&16&2\end{pmatrix}.
> $$
>
> Las entradas, la fila y la columna pedidas deben aparecer en sus posiciones respectivas.

---

### Ejercicio 6 · Productos con filas y columnas simbólicas 🤖

#### Enunciado

Sean

$$
A=\begin{pmatrix}a_1&a_2&a_3\\b_1&b_2&b_3\\c_1&c_2&c_3\\d_1&d_2&d_3\end{pmatrix},
\qquad
B=\begin{pmatrix}1&0&1&0\end{pmatrix}.
$$

$$
C=\begin{pmatrix}1&0&1&0\\1&-2&0&0\end{pmatrix},
\qquad
D=\begin{pmatrix}1\\0\\1\end{pmatrix},
\qquad
E=\begin{pmatrix}1&1&1\\0&-2&0\\1&0&1\end{pmatrix}.
$$

Calcula $BA$, $CA$, $AD$ y $AE$.

> [!example]- Resolución
>
> Denota por $a,b,c,d$ las cuatro filas de $A$. La multiplicación por la izquierda forma combinaciones de filas:
>
> $$
> BA=a+c,
> \qquad
> CA=\begin{pmatrix}a+c\\a-2b\end{pmatrix}.
> $$
>
> La multiplicación por $D$ suma las columnas primera y tercera de $A$:
>
> $$
> AD=\begin{pmatrix}a_1+a_3\\b_1+b_3\\c_1+c_3\\d_1+d_3\end{pmatrix}.
> $$
>
> Para $AE$, cada fila $(r_1,r_2,r_3)$ de $A$ se transforma en
>
> $$
> (r_1+r_3,\ r_1-2r_2,\ r_1+r_3).
> $$
>
> Por tanto,
>
> $$
> AE=\begin{pmatrix}
> a_1+a_3&a_1-2a_2&a_1+a_3\\
> b_1+b_3&b_1-2b_2&b_1+b_3\\
> c_1+c_3&c_1-2c_2&c_1+c_3\\
> d_1+d_3&d_1-2d_2&d_1+d_3
> \end{pmatrix}.
> $$

> [!success]- Comprobación
>
> Los tamaños finales son $1\times3$, $2\times3$, $4\times1$ y $4\times3$. Como la primera y la tercera columnas de $E$ coinciden con $D$, la primera y la tercera columnas de $AE$ deben coincidir con $AD$.

---

### Ejercicio 7 · Producto exterior y producto interior 🤖

#### Enunciado

Sean

$$
A=\begin{pmatrix}3\\2\\-1\\1\end{pmatrix},
\qquad
B=\begin{pmatrix}-1&0&1&2\end{pmatrix}.
$$

Calcula $AB$ y $BA$.

> [!example]- Resolución
>
> $AB$ es una matriz $4\times4$: cada fila es una copia de $B$ multiplicada por la entrada correspondiente de $A$.
>
> $$
> AB=\begin{pmatrix}
> -3&0&3&6\\
> -2&0&2&4\\
> 1&0&-1&-2\\
> -1&0&1&2
> \end{pmatrix}.
> $$
>
> En el otro orden, el resultado es $1\times1$:
>
> $$
> BA=(-1)3+0(2)+1(-1)+2(1)=(-2).
> $$

> [!success]- Comprobación
>
> El tamaño de cada producto impide intercambiar las respuestas. Por ejemplo, $(AB)_{43}=1\cdot1=1$.

---

### Ejercicio 8 · Ecuación matricial 📘

#### Enunciado

Utiliza las matrices $A$ y $B$ del ejercicio 5. Determina $X$ tal que

$$
2B^2+\frac12X-BA=(A-B)^2+AB.
$$

> [!example]- Resolución de la ficha
>
> Se despeja $X$ sin cambiar el orden de los productos:
>
> $$
> X=2\bigl[(A-B)^2+AB-2B^2+BA\bigr]
> =\begin{pmatrix}-2&0&16\\0&-56&6\\12&18&-36\end{pmatrix}.
> $$
>
> Al sustituir esta matriz, ambos miembros de la ecuación valen
>
> $$
> \begin{pmatrix}1&3&9\\2&22&-1\\11&3&12\end{pmatrix}.
> $$

---

### Ejercicio 9 · El producto depende del orden 📘

#### Enunciado

Sean

$$
A=\begin{pmatrix}4&2\\2&1\end{pmatrix},
\qquad
B=\begin{pmatrix}-1&-1\\2&2\end{pmatrix},
\qquad
C=\begin{pmatrix}0&-3\\3&0\end{pmatrix}.
$$

Calcula $AB$, $BA$ y $CA$.

> [!example]- Resolución de la ficha
>
> $$
> AB=\begin{pmatrix}0&0\\0&0\end{pmatrix},
> \qquad
> BA=\begin{pmatrix}-6&-3\\12&6\end{pmatrix},
> \qquad
> CA=\begin{pmatrix}-6&-3\\12&6\end{pmatrix}.
> $$
>
> Por ejemplo, $(BA)_{11}=(-1)4+(-1)2=-6$. La igualdad $BA=CA$ no implica $B=C$, porque $A$ no es invertible.

---

## Potencias y propiedades

### Ejercicio 10 · Matriz idempotente 🤖

#### Enunciado

Sea

$$
A=\begin{pmatrix}\frac12&-\frac12\\-\frac12&\frac12\end{pmatrix}.
$$

Calcula $A^2$, $A^3$, $A^4$ y $A^5$.

> [!example]- Resolución
>
> La multiplicación da $A^2=A$. Entonces
>
> $$
> A^3=A^2A=A^2=A,
> $$
>
> Y el mismo paso demuestra por inducción que $A^k=A$ para todo $k\ge1$. Las cuatro potencias pedidas son la propia $A$.

> [!success]- Comprobación
>
> En $A^2$, se obtiene $(A^2)_{11}=\tfrac14+\tfrac14=\tfrac12$ y $(A^2)_{12}=-\tfrac14-\tfrac14=-\tfrac12$; por simetría, coinciden también las otras dos entradas.

---

### Ejercicio 11 · Matriz nilpotente 🤖

#### Enunciado

Verifica que alguna potencia de

$$
A=\begin{pmatrix}1&1&3\\5&2&6\\-2&-1&-3\end{pmatrix}
$$

es la matriz nula.

> [!example]- Resolución
>
> Multiplicando dos veces,
>
> $$
> A^2=\begin{pmatrix}0&0&0\\3&3&9\\-1&-1&-3\end{pmatrix},
> \qquad
> A^3=A^2A=0_{3\times3}.
> $$
>
> Por tanto, $A$ es nilpotente de índice $3$: $A^2\ne0$ y $A^3=0$.

> [!success]- Comprobación
>
> La segunda fila de $A^3$ es $3$ veces la primera fila de $A$, más $3$ veces la segunda, más $9$ veces la tercera; la suma da $(0,0,0)$. La tercera fila se anula por la misma relación.

---

### Ejercicio 12 · Tres órdenes de multiplicación 📘

#### Enunciado

Sean

$$
A=\begin{pmatrix}1&1\\1&0\end{pmatrix},
\qquad
B=\begin{pmatrix}1&1\\-1&1\end{pmatrix}.
$$

Calcula $(AB)^2$, $A^2B^2$ y $B^2A^2$.

> [!example]- Resolución de la ficha
>
> $$
> (AB)^2=\begin{pmatrix}2&2\\1&3\end{pmatrix},
> \qquad
> A^2B^2=\begin{pmatrix}-2&4\\-2&2\end{pmatrix},
> \qquad
> B^2A^2=\begin{pmatrix}2&2\\-4&-2\end{pmatrix}.
> $$
>
> Los tres resultados son distintos. En general, $(AB)^2=ABAB$, y no se puede permutar el $B$ central con el $A$ central.

---

### Ejercicio 13 · Cinco afirmaciones sobre matrices 🤖

#### Enunciado

Decide, con justificación, si son verdaderas o falsas las siguientes afirmaciones sobre matrices cuadradas del mismo orden:

1. Siempre se cumple $AB=BA$.
2. Si $AB=0$, entonces $A=0$ o $B=0$.
3. Si $AB=AC$, entonces $B=C$.
4. Si $A^k=0$ para algún $k\in\mathbb N$, entonces $A=0$.
5. Siempre se cumple $(AB)^2=A^2B^2$.

> [!example]- Resolución
>
> **Todas son falsas.** Los contraejemplos pueden construirse con
>
> $$
> P=\begin{pmatrix}0&1\\0&0\end{pmatrix},
> \qquad
> Q=\begin{pmatrix}0&0\\1&0\end{pmatrix}.
> $$
>
> **a)** $PQ=\operatorname{diag}(1,0)$ y $QP=\operatorname{diag}(0,1)$: no conmutan.
>
> **b)** $P\ne0$ pero $P^2=0$; basta tomar $A=B=P$.
>
> **c)** $P0=P^2=0$ aunque $0\ne P$; toma $A=P$, $B=0$ y $C=P$.
>
> **d)** $P^2=0$ con $P\ne0$.
>
> **e)** $(PQ)^2=PQ\ne0=P^2Q^2$.

> [!success]- Comprobación
>
> Multiplica $P$ y $Q$ a mano. Debes obtener dos proyectores diagonales distintos y, además, $P^2=Q^2=0$. Estas tres igualdades verifican los cinco contraejemplos.

---

### Ejercicio 14 · Transpuesta de un producto 🤖

#### Enunciado

Sean $A_1,A_2,\ldots,A_n$ matrices tales que $A_1A_2\cdots A_n$ está definido. Expresa su transpuesta mediante las transpuestas de los factores.

> [!example]- Resolución
>
> La identidad para dos factores es $(XY)^T=Y^TX^T$. Al aplicarla repetidamente, el orden se invierte por completo:
>
> $$
> (A_1A_2\cdots A_n)^T=A_n^TA_{n-1}^T\cdots A_1^T.
> $$
>
> La demostración puede hacerse por inducción: si vale para $n-1$ factores, se aplica la identidad de dos factores a $(A_1\cdots A_{n-1})A_n$.

> [!success]- Comprobación
>
> Si $A_i$ tiene tamaño $d_{i-1}\times d_i$, el producto original es $d_0\times d_n$. Los dos miembros de la igualdad son $d_n\times d_0$; escribir $A_1^T\cdots A_n^T$ en el orden original puede incluso dejar el producto sin definir.

---

### Ejercicio 15 · Una matriz simétrica a partir de cualquier matriz 🤖

#### Enunciado

Demuestra que, para cualquier matriz cuadrada $A$, la matriz $A+A^T$ es simétrica.

> [!example]- Resolución
>
> Una matriz $S$ es simétrica si $S^T=S$. Por linealidad de la transposición y porque $(A^T)^T=A$,
>
> $$
> (A+A^T)^T=A^T+(A^T)^T=A^T+A=A+A^T.
> $$

> [!success]- Comprobación
>
> Se cumple $(A+A^T)_{ij}=a_{ij}+a_{ji}=a_{ji}+a_{ij}=(A+A^T)_{ji}$ para todo $i,j$.

## 📚 Fuentes

### Material base

- [Ficha de enunciados ALGA 2026/27](../../ALGA-2026-27-Exerc-Aulas-Enunc_1-34.pdf), pp. 1–4.
- [Ficha de soluciones ALGA 2026/27](../../ALGA-2026-27-Exerc-Aulas-Solucoes.pdf), p. 1, para los ejercicios 8, 9 y 12.
