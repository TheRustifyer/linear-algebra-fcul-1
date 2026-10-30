---
title: Matrices y operaciones
aliases:
  - Matrices y sistemas lineales reales y complejos
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
  - "[[Matemáticas/Sistemas numéricos/Números complejos|Números complejos]]"
  - "[[Matemáticas/Álgebra/Sistemas de ecuaciones lineales|Sistemas de ecuaciones lineales]]"
relacionado:
  - "[[Matemáticas/Álgebra lineal/Matrices|Matrices]]"
fsrs_goal: Interpretar entradas y dimensiones de matrices reales o complejas, clasificar sus formas notables, calcular suma, opuesto, producto por escalar, producto matricial y transposición, justificar por entradas las leyes de suma, producto por escalar, producto matricial, transpuesta, conjugación compleja y traza, y traducir un sistema lineal a Ax=b y a su matriz ampliada.
tags:
  - matematicas
  - algebra-lineal
  - matrices
  - fcul
  - grado-fisica
  - curricular
---


# Matrices y operaciones

## De los pares ordenados a los vectores coordenados

Una flecha en el plano puede describirse por cuánto avanza en cada dirección. Si fijamos unos ejes, $u=(3,2)$ representa una flecha que parte del origen y avanza tres unidades horizontalmente y dos verticalmente. El orden de las coordenadas importa: la primera corresponde al eje horizontal y la segunda al vertical. Así, un [[Matemáticas/Álgebra lineal/Vectores|vector geométrico]] queda descrito por una lista ordenada de números, idea que se extiende a cualquier número de coordenadas.[^1]

### Tuplas de $n$ componentes: $K^n$

El par $(3,2)$ tiene dos componentes y pertenece a $\mathbb R^2$; una terna real pertenece a $\mathbb R^3$. La notación $K^n$ permite considerar cualquier número de componentes, reales o complejas: $K$ es el conjunto de escalares, $\mathbb R$ o $\mathbb C$, y $n$ es el número de componentes. Si $K=\mathbb R$ y $n=2$, entonces ==$K^n=\mathbb R^2$==.[^1]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
  - definición
---
> [!note] Pregunta
> ¿Qué contiene el conjunto $K^n$?
===
> [!important] Respuesta
> Todas las listas ordenadas de $n$ componentes pertenecientes a $K$.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
  - escalares
---
> [!note] Pregunta
> ¿En qué se distinguen un escalar $x\in K$ y un vector coordenado de $K^n$?
===
> [!important] Respuesta
> $x$ es un solo elemento de $K$; un vector de $K^n$ es una lista ordenada de $n$ elementos de $K$.
```

Tomamos $\mathbb N=\{1,2,3,\ldots\}$, $n\in\mathbb N$ y $K=\mathbb R$ o $K=\mathbb C$.

> [!definicion] Vector coordenado
> Un **vector coordenado** de $K^n$ es una tupla ordenada de $n$ escalares:
> $$
> u=(x_1,\ldots,x_n),\qquad x_i\in K\quad\forall i\in\{1,\ldots,n\}.
> $$

$K^n$ es el conjunto de todas estas tuplas; $x_i$ designa la componente que ocupa la posición $i$.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
  - definición
---
> [!note] Pregunta
> ¿Qué es un vector coordenado de longitud $n$ sobre $K$?
===
> [!important] Respuesta
> Una tupla ordenada $u=(x_1,\ldots,x_n)$ con cada componente $x_i\in K$.
```

$1+i\in\mathbb C$ es un escalar; $(1+i,2)\in\mathbb C^2$ es un vector coordenado con dos componentes.

### Igualdad de vectores coordenados

Para que dos vectores coordenados sean iguales, deben tener igual número de componentes y coincidir en cada posición. Por ejemplo, $(3,2)$ y $(2,3)$ son distintos porque intercambiar los componentes cambia el vector. Si $u=(x_1,\ldots,x_n)$ y $v=(y_1,\ldots,y_p)$, esto se expresa como[^1]

$$
u=v\quad\Longleftrightarrow\quad n=p\ \text{y}\ x_i=y_i\quad\forall i\in\{1,\ldots,n\}.
$$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
  - igualdad
---
> [!note] Pregunta
> ¿Cuándo son iguales dos vectores coordenados $u=(x_1,\ldots,x_n)$ y $v=(y_1,\ldots,y_p)$?
===
> [!important] Respuesta
> Cuando $n=p$ y $x_i=y_i$ para todo $i\in\{1,\ldots,n\}$.
```

## Matrices: filas, columnas y entradas

En un vector basta un índice para localizar una componente. Si varias listas de igual longitud se escriben una debajo de otra, cada entrada tiene además un número de fila. La disposición rectangular resultante es una [[Matemáticas/Álgebra lineal/Matrices|matriz]]: hacen falta dos índices para localizar sus entradas.[^1]

### Definición de matriz

Sean $m,n\in\mathbb N$ y $K=\mathbb R$ o $K=\mathbb C$.

> [!definicion] Matriz de tamaño $m\times n$
> Una matriz $A$ de tamaño $m\times n$ es una disposición rectangular de escalares de $K$, con $m$ filas y $n$ columnas:
> $$
> A=(a_{ij})_{m\times n}=
> \begin{pmatrix}
> a_{11}&\cdots&a_{1n}\\
> \vdots&\ddots&\vdots\\
> a_{m1}&\cdots&a_{mn}
> \end{pmatrix}.
> $$

La entrada $a_{ij}\in K$ ocupa la fila $i$ y la columna $j$, con $1\le i\le m$ y $1\le j\le n$. El conjunto de estas matrices se denota $M_{m\times n}(K)$.[^1][^5]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - definición
---
> [!note] Pregunta
> ¿Qué datos definen una matriz de tamaño $m\times n$ sobre $K$?
===
> [!important] Respuesta
> Es una disposición rectangular $A=(a_{ij})$ con $a_{ij}\in K$ para $1\le i\le m$, $1\le j\le n$; $m$ y $n$ cuentan las filas y columnas, y $A\in M_{m\times n}(K)$.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - definición
---
> [!note] Pregunta
> En una matriz $A=(a_{ij})$, ¿qué posición ocupa $a_{ij}$?
===
> [!important] Respuesta
> Fila $i$, columna $j$: el primer índice señala la fila y el segundo la columna.
```

### Ejemplo — Localizar una entrada

> [!ejemplo] Leer primero la fila y después la columna
> $$
> A=\begin{pmatrix}
> 2&-1&0\\
> 4&3&7\\
> 5&0&-2
> \end{pmatrix}\in M_{3\times3}(\mathbb R).
> $$
> La entrada $a_{23}=7$ está en la segunda fila y tercera columna. En cambio, $a_{32}=0$: invertir los índices cambia la posición. Esta matriz tiene tres filas, tres columnas y nueve entradas.

### Igualdad de matrices

Dos matrices son iguales si tienen el mismo tamaño y coinciden en cada posición. Para $A=(a_{ij})$ y $B=(b_{ij})$ pertenecientes a $M_{m\times n}(K)$,

$$
A=B\quad\Longleftrightarrow\quad
a_{ij}=b_{ij}\quad
\forall i\in\{1,\ldots,m\},\ \forall j\in\{1,\ldots,n\}.
$$

Una matriz $2\times3$ nunca es igual a una $3\times2$, aunque ambas tengan seis entradas: no basta con que contengan la misma cantidad de números.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - igualdad
---
> [!note] Pregunta
> ¿Cuándo son iguales dos matrices $A=(a_{ij})$ y $B=(b_{ij})$?
===
> [!important] Respuesta
> Cuando pertenecen al mismo $M_{m\times n}(K)$ y $a_{ij}=b_{ij}$ para todo $1\le i\le m$, $1\le j\le n$.
```

## Matrices por su forma

### Matriz rectangular no cuadrada

> [!definicion] Matriz rectangular no cuadrada
> Una matriz $A\in M_{m\times n}(K)$ es **rectangular no cuadrada** si $m\ne n$.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - dimensiones
---
> [!note] Pregunta
> ¿Qué significa que una matriz sea rectangular no cuadrada?
===
> [!important] Respuesta
> Que su número de filas $m$ y su número de columnas $n$ difieren: $m\ne n$.
```

### Ejemplo — Tres filas y dos columnas

> [!ejemplo] Leer el tamaño
> $$
> A=\begin{pmatrix}
> 1&6\\
> 0&-3\\
> 2&0
> \end{pmatrix}\in M_{3\times2}(K).
> $$
> Hay tres filas y dos columnas. El número total de entradas, seis, no determina por sí solo la forma: una matriz $2\times3$ también tendría seis entradas, pero otro tamaño.[^1]

### Matriz cuadrada

> [!definicion] Matriz cuadrada
> Una matriz es **cuadrada de orden $n$** si pertenece a $M_n(K)=M_{n\times n}(K)$; tiene tantas filas como columnas.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - dimensiones
---
> [!note] Pregunta
> ¿Qué caracteriza a una matriz cuadrada de orden $n$?
===
> [!important] Respuesta
> Tiene $n$ filas y $n$ columnas; pertenece a $M_{n\times n}(K)$.
```

### Ejemplo — Una cuadrada de orden tres

> [!ejemplo] Reconocer la diagonal principal
> $$
> C=\begin{pmatrix}
> -1&3&0\\
> 4&2&1\\
> 7&0&5
> \end{pmatrix}\in M_3(K).
> $$
> En una matriz cuadrada de orden tres, la diagonal principal reúne $c_{11}=-1$, $c_{22}=2$ y $c_{33}=5$: la fila y la columna de cada entrada tienen el mismo índice.[^1]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - diagonal
---
> [!note] Pregunta
> ¿Qué entradas forman la diagonal principal de $A\in M_n(K)$?
===
> [!important] Respuesta
> Las entradas $a_{11},a_{22},\ldots,a_{nn}$, cuyas posiciones tienen iguales índices de fila y columna.
```

> [!recuerda] Caso de orden uno
> Una matriz $(a)$ de tamaño $1\times1$ también es cuadrada. No se identifica sin más con el escalar $a$: su tamaño sigue determinando qué operaciones matriciales se pueden aplicar.[^1]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - dimensiones
---
> [!note] Pregunta
> ¿Por qué una matriz $1\times1$ $(a)$ no se identifica sin más con el escalar $a$?
===
> [!important] Respuesta
> Porque $(a)$ es una matriz de tamaño $1\times1$, y ese tamaño determina las operaciones matriciales compatibles; $a$ es un escalar.
```

### Matriz fila

> [!definicion] Matriz fila
> Una **matriz fila** tiene tamaño $1\times n$ para algún $n\in\mathbb N$.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - dimensiones
---
> [!note] Pregunta
> ¿Qué tamaño tiene una matriz fila?
===
> [!important] Respuesta
> $1\times n$: una fila y $n$ columnas.
```

### Ejemplo — Una fila con tres entradas

> [!ejemplo] Leer la única fila
> $$
> F=\begin{pmatrix}-2&\sqrt5&0\end{pmatrix}\in M_{1\times3}(\mathbb R).
> $$
> Las tres entradas pertenecen a la misma fila. Su tamaño la distingue de la columna formada por esos mismos números.[^1]

### Matriz columna

> [!definicion] Matriz columna
> Una **matriz columna** tiene tamaño $m\times1$ para algún $m\in\mathbb N$.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - dimensiones
---
> [!note] Pregunta
> ¿Qué tamaño tiene una matriz columna?
===
> [!important] Respuesta
> $m\times1$: $m$ filas y una columna.
```

### Ejemplo — Una columna con tres entradas

> [!ejemplo] Leer la única columna
> $$
> G=\begin{pmatrix}1\\-1\\0\end{pmatrix}\in M_{3\times1}(\mathbb R).
> $$
> Cada entrada ocupa una fila diferente. En un sistema de ecuaciones, tanto las incógnitas como los términos independientes pueden escribirse en columnas de este tipo.[^1]

## Matrices notables

Las matrices diagonales y triangulares se distinguen por la posición de sus ceros. Las simétricas y hermíticas relacionan las entradas situadas a ambos lados de la diagonal.[^1][^4]

### Matriz nula

Las matrices $0_{2\times3}$ y $0_{3\times2}$ solo contienen ceros, pero tienen tamaños distintos.

El símbolo $0_K$ designa el número cero de $K$. Sean $m,n\in\mathbb N$.

> [!definicion] Matriz nula
> La **[[Matemáticas/Álgebra lineal/Matriz nula|matriz nula]]** $0_{m\times n}\in M_{m\times n}(K)$ tiene todas sus entradas iguales a cero:
> $$
> (0_{m\times n})_{ij}=0_K
> \qquad\forall i\in\{1,\ldots,m\},\ \forall j\in\{1,\ldots,n\}.
> $$

Hay una matriz nula para cada tamaño $m\times n$; los subíndices indican cuál se está utilizando.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - tipos-de-matriz
---
> [!note] Pregunta
> ¿Qué es la matriz nula $0_{m\times n}$?
===
> [!important] Respuesta
> La matriz de tamaño $m\times n$ cuyas entradas son todas $0_K$; el subíndice especifica su tamaño.
```

### Ejemplo — La nula de orden tres

> [!ejemplo] Comprobar todas las posiciones
> $$
> 0_3=\begin{pmatrix}
> 0&0&0\\
> 0&0&0\\
> 0&0&0
> \end{pmatrix}.
> $$
> Sus nueve entradas son cero. La matriz $0_{2\times3}$ también es nula, pero tiene seis entradas y solo puede sumarse a matrices de tamaño $2\times3$.[^1]

> [!recuerda] Neutro de la suma
> Si $A\in M_{m\times n}(K)$, entonces ==$A+0_{m\times n}=A$==. Se usa la nula **del mismo tamaño**, pues la suma compara posiciones correspondientes.

### Matriz identidad

Multiplicar una columna por la matriz identidad devuelve la misma columna.

El símbolo $1_K$ designa el número uno de $K$.

> [!definicion] Matriz identidad
> La **[[Matemáticas/Álgebra lineal/Matriz identidad|identidad]]** $I_n\in M_n(K)$ tiene unos en la diagonal principal y ceros fuera de ella:
> $$
> (I_n)_{ij}=
> \begin{cases}
> 1_K,&i=j,\\
> 0_K,&i\ne j.
> \end{cases}
> $$
> $\forall i,j\in\{1,\ldots,n\}$.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - tipos-de-matriz
---
> [!note] Pregunta
> ¿Cómo se define la matriz identidad $I_n$ entrada por entrada?
===
> [!important] Respuesta
> $I_n\in M_n(K)$ y, para $1\le i,j\le n$, $(I_n)_{ij}=1_K$ si $i=j$ y $0_K$ si $i\ne j$.
```

### Ejemplo — La identidad de orden tres

> [!ejemplo] Diagonal de unos
> $$
> I_3=\begin{pmatrix}
> 1&0&0\\
> 0&1&0\\
> 0&0&1
> \end{pmatrix}.
> $$
> Solo las posiciones $(1,1)$, $(2,2)$ y $(3,3)$ contienen un uno. Al multiplicar una columna de tres componentes, cada fila selecciona la componente correspondiente.[^1]

> [!recuerda] Neutro del producto
> Para $A\in M_{m\times n}(K)$, ==$I_mA=A=AI_n$==. La identidad que actúa por la izquierda tiene orden $m$; la que actúa por la derecha, orden $n$.

### Matriz diagonal

Al multiplicar una columna por una matriz diagonal, cada componente se multiplica por el valor correspondiente de la diagonal, sin combinarse con las demás componentes.

> [!definicion] Matriz diagonal
> Una matriz $D=(d_{ij})\in M_n(K)$ es **[[Matemáticas/Álgebra lineal/Matriz diagonal|diagonal]]** si
> $$
> d_{ij}=0_K
> \qquad\forall i,j\in\{1,\ldots,n\}\text{ con }i\ne j.
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - tipos-de-matriz
---
> [!note] Pregunta
> Para $D=(d_{ij})\in M_n(K)$, ¿qué condición define que sea diagonal?
===
> [!important] Respuesta
> Es cuadrada y $d_{ij}=0_K$ para todo $i,j\in\{1,\ldots,n\}$ con $i\ne j$.
```

### Ejemplo — Una diagonal con un cero

> [!ejemplo] La diagonal puede contener ceros
> $$
> D=\begin{pmatrix}
> 2&0&0\\
> 0&0&0\\
> 0&0&-1
> \end{pmatrix}.
> $$
> Fuera de la diagonal solo hay ceros; en cambio, la definición permite que cualquier entrada diagonal también sea cero. Al multiplicar $D$ por $(x,y,z)^T$, se obtiene $(2x,0,-z)^T$.[^1]

### Matriz escalar

En una matriz diagonal, los valores de la diagonal pueden ser distintos. Si todos coinciden, la multiplicación por esa matriz equivale a multiplicar cada componente por un mismo número.

> [!definicion] Matriz escalar
> Una **[[Matemáticas/Álgebra lineal/Matriz escalar|matriz escalar]]** de orden $n$ tiene la forma $\lambda I_n$ para algún $\lambda\in K$: sus entradas fuera de la diagonal son cero y todas las diagonales valen $\lambda$.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - tipos-de-matriz
---
> [!note] Pregunta
> Para $S\in M_n(K)$, ¿qué condición adicional distingue a una matriz escalar de una matriz diagonal?
===
> [!important] Respuesta
> Tiene la forma $\lambda I_n$: $s_{ii}=\lambda$ para $1\le i\le n$ y $s_{ij}=0_K$ para $1\le i,j\le n$ si $i\ne j$.
```

### Ejemplo — El mismo escalar en toda la diagonal

> [!ejemplo] Escalado uniforme
> $$
> 5I_3=\begin{pmatrix}
> 5&0&0\\
> 0&5&0\\
> 0&0&5
> \end{pmatrix}.
> $$
> Al multiplicar esta matriz por una columna de tres componentes, cada componente queda multiplicada por $5$. La identidad es un caso particular de matriz escalar ($\lambda=1$), y toda matriz escalar es diagonal. También la nula cuadrada lo es, pues $0_3=0_KI_3$.[^1]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - tipos-de-matriz
---
> [!note] Pregunta
> ¿Por qué toda matriz escalar es diagonal?
===
> [!important] Respuesta
> Una matriz escalar tiene forma $\lambda I_n$, así que todas sus entradas fuera de la diagonal son cero; esa es la condición de matriz diagonal.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - tipos-de-matriz
---
> [!note] Pregunta
> ¿Qué tipos triangulares son necesariamente las matrices diagonales?
===
> [!important] Respuesta
> Son triangulares superiores e inferiores: sus entradas fuera de la diagonal son cero, tanto para $i>j$ como para $i<j$.
```

### Matriz triangular superior

En una matriz triangular superior, todas las entradas situadas **debajo de la diagonal principal** son cero. Las de la diagonal y las que quedan por encima pueden tomar cualquier valor de $K$.

> [!definicion] Matriz triangular superior
> Una matriz $A=(a_{ij})\in M_n(K)$ es **[[Matemáticas/Álgebra lineal/Matriz triangular superior|triangular superior]]** si
> $$
> a_{ij}=0_K
> \qquad\forall i,j\in\{1,\ldots,n\}\text{ con }i>j.
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - tipos-de-matriz
---
> [!note] Pregunta
> Para $U=(u_{ij})\in M_n(K)$, ¿qué entradas deben anularse para que sea triangular superior?
===
> [!important] Respuesta
> Las entradas $u_{ij}=0_K$ para todo $i,j\in\{1,\ldots,n\}$ con $i>j$.
```

La desigualdad $i>j$ identifica las posiciones que quedan debajo de la diagonal: el número de fila es mayor que el de columna.

### Ejemplo — Ceros bajo la diagonal

> [!ejemplo] Triangular superior de orden tres
> $$
> U=\begin{pmatrix}
> 7&1&-2\\
> 0&3&4\\
> 0&0&-5
> \end{pmatrix}.
> $$
> Debajo de la diagonal están las entradas $u_{21}$, $u_{31}$ y $u_{32}$. Las tres son cero, por lo que $U$ es triangular superior.
>
> Los números $1$, $-2$ y $4$ quedan por encima de la diagonal. Si alguno fuese cero, la matriz seguiría siendo triangular superior.[^1]

### Matriz triangular inferior

En una matriz triangular inferior, todas las entradas situadas **por encima de la diagonal principal** son cero. Las de la diagonal y las que quedan por debajo pueden tomar cualquier valor de $K$.

> [!definicion] Matriz triangular inferior
> Una matriz $L=(\ell_{ij})\in M_n(K)$ es **[[Matemáticas/Álgebra lineal/Matriz triangular inferior|triangular inferior]]** si
> $$
> \ell_{ij}=0_K
> \qquad\forall i,j\in\{1,\ldots,n\}\text{ con }i<j.
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - tipos-de-matriz
---
> [!note] Pregunta
> Para $L=(\ell_{ij})\in M_n(K)$, ¿qué entradas deben anularse para que sea triangular inferior?
===
> [!important] Respuesta
> Las entradas $\ell_{ij}=0_K$ para todo $i,j\in\{1,\ldots,n\}$ con $i<j$.
```

### Ejemplo — Ceros sobre la diagonal

> [!ejemplo] Triangular inferior de orden tres
> $$
> L=\begin{pmatrix}
> 2&0&0\\
> 1&-1&0\\
> 0&5&3
> \end{pmatrix}.
> $$
> Las entradas $(1,2)$, $(1,3)$ y $(2,3)$, situadas por encima de la diagonal, son cero. Una matriz diagonal tiene ceros tanto por encima como por debajo de la diagonal; por ello es triangular superior e inferior a la vez.[^1]

### Matriz simétrica

Las posiciones $(i,j)$ y $(j,i)$ están reflejadas respecto de la diagonal principal. En una matriz simétrica, las entradas que ocupan esas dos posiciones son iguales.

> [!definicion] Matriz simétrica
> Una matriz $A=(a_{ij})\in M_n(K)$ es **[[Matemáticas/Álgebra lineal/Matriz simétrica|simétrica]]** si $A^T=A$, es decir,
> $$
> a_{ij}=a_{ji}\qquad\forall i,j\in\{1,\ldots,n\}.
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - tipos-de-matriz
---
> [!note] Pregunta
> Para $A=(a_{ij})\in M_n(K)$, ¿qué relación cumplen las entradas reflejadas si $A$ es simétrica?
===
> [!important] Respuesta
> $a_{ij}=a_{ji}$ para todo $i,j\in\{1,\ldots,n\}$; equivalentemente, $A^T=A$.
```

### Ejemplo — Reflejo respecto de la diagonal

> [!ejemplo] Simétrica de orden tres
> $$
> S=\begin{pmatrix}
> 3&5&1\\
> 5&0&-2\\
> 1&-2&-1
> \end{pmatrix}.
> $$
> Al reflejar una posición respecto de la diagonal, el valor no cambia: $s_{12}=s_{21}=5$, $s_{13}=s_{31}=1$ y $s_{23}=s_{32}=-2$. La condición requiere una matriz cuadrada y compara las entradas sin conjugarlas.[^4]

> [!advertencia] Dos sentidos de «simétrica»
> En la terminología de la fuente, «matriz simétrica de $A$» significa $-A$, su **opuesto aditivo**. En la clasificación, en cambio, una **matriz simétrica** cumple $A^T=A$. Para evitar confundir estos dos usos, aquí llamamos «opuesta» a $-A$.[^8]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - terminología
---
> [!note] Pregunta
> ¿Qué significa «opuesta de $A$» y qué significa que $A$ sea simétrica?
===
> [!important] Respuesta
> La opuesta es $-A$; ser simétrica es cumplir $A^T=A$. Son conceptos distintos.
```

### Matriz antisimétrica

En una matriz antisimétrica, las entradas situadas en las posiciones $(i,j)$ y $(j,i)$ son números opuestos.

> [!definicion] Matriz antisimétrica
> Una matriz $A=(a_{ij})\in M_n(K)$ es **[[Matemáticas/Álgebra lineal/Matriz antisimétrica|antisimétrica]]** si $A^T=-A$, equivalentemente,
> $$
> a_{ij}=-a_{ji}\qquad\forall i,j\in\{1,\ldots,n\}.
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - tipos-de-matriz
---
> [!note] Pregunta
> Para $A=(a_{ij})\in M_n(K)$, ¿qué relación cumplen las entradas reflejadas si $A$ es antisimétrica?
===
> [!important] Respuesta
> $a_{ij}=-a_{ji}$ para todo $i,j\in\{1,\ldots,n\}$; equivalentemente, $A^T=-A$.
```

Sobre $\mathbb R$ o $\mathbb C$, esta condición obliga a que la diagonal sea nula. La posibilidad de dividir por $2$ es necesaria para justificarlo.

> [!demostracion] Demostración
> Fijemos un índice diagonal $i$. Como $A^T=-A$, su entrada diagonal satisface $a_{ii}=-a_{ii}$.
>
> Al sumar $a_{ii}$ a ambos lados, $2a_{ii}=0_K$. Sobre $\mathbb R$ o $\mathbb C$, el número $2$ tiene inverso; multiplicando por $1/2$ queda $a_{ii}=0_K$. En un cuerpo de característica dos, $2=0_K$ y esta ecuación no fuerza que la entrada se anule.[^31]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - antisimetría
---
> [!note] Pregunta
> ¿Qué valores tienen las entradas diagonales de una matriz antisimétrica sobre $\mathbb R$ o $\mathbb C$?
===
> [!important] Respuesta
> Son cero: $a_{ii}=-a_{ii}$ implica $2a_{ii}=0$, y se puede dividir por $2$ en esos cuerpos.
```

### Ejemplo — Signos opuestos a ambos lados

> [!ejemplo] Antisimétrica de orden tres
> $$
> T=\begin{pmatrix}
> 0&2&-1\\
> -2&0&4\\
> 1&-4&0
> \end{pmatrix}.
> $$
> Cada pareja fuera de la diagonal tiene valores opuestos y la diagonal es cero.

### Matriz hermítica

En las matrices complejas, las entradas reflejadas respecto de la diagonal pueden relacionarse mediante conjugación. En una matriz hermítica, cada una es el conjugado de la otra.

Para $A=(a_{ij})\in M_n(\mathbb C)$, la notación $A^*=\overline A^{\,T}$ significa que se conjugan las entradas y se transpone la matriz: es su **conjugada transpuesta**.

> [!definicion] Matriz hermítica
> Una matriz $A\in M_n(\mathbb C)$ es **[[Matemáticas/Álgebra lineal/Matriz hermítica|hermítica]]** si $A^*=A$, equivalentemente,
> $$
> a_{ij}=\overline{a_{ji}}\qquad\forall i,j\in\{1,\ldots,n\}.
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - tipos-de-matriz
---
> [!note] Pregunta
> Para $A=(a_{ij})\in M_n(\mathbb C)$, ¿qué relación cumplen las entradas reflejadas si $A$ es hermítica?
===
> [!important] Respuesta
> $a_{ij}=\overline{a_{ji}}$ para todo $i,j\in\{1,\ldots,n\}$; equivalentemente, $A^*=A$.
```

### Ejemplo — Conjugación al cruzar la diagonal

> [!ejemplo] Hermítica de orden tres
> $$
> H=\begin{pmatrix}
> 1&1-2i&4i\\
> 1+2i&0&-8\\
> -4i&-8&-2
> \end{pmatrix}.
> $$
> Cada pareja reflejada contiene números conjugados: $h_{21}=\overline{h_{12}}=1+2i$ y $h_{31}=\overline{h_{13}}=-4i$. En la diagonal, $h_{ii}=\overline{h_{ii}}$, así que esas entradas son reales. Por ejemplo, cambiar $h_{33}=-2$ por $-2+i$ dejaría de cumplir la condición.[^6]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - hermítica
---
> [!note] Pregunta
> Si $H\in M_n(\mathbb C)$ es hermítica, ¿qué condición cumplen sus entradas diagonales?
===
> [!important] Respuesta
> Son reales, porque $h_{ii}=\overline{h_{ii}}$.
```

> [!recuerda] Caso real
> Para una matriz real, conjugar las entradas no las cambia: $\overline A=A$, así que $A^*=A^T$. Por ello, una matriz real cumple $A^*=A$ exactamente cuando cumple $A^T=A$; es decir, ==es hermítica si y sólo si es simétrica==. [^7]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - hermítica
---
> [!note] Pregunta
> Para una matriz real cuadrada, ¿qué relación hay entre ser hermítica y ser simétrica?
===
> [!important] Respuesta
> Son condiciones equivalentes, porque $A^*=A^T$ cuando las entradas son reales.
```

### Matriz antihermítica

En una matriz antihermítica, cada entrada es el opuesto del conjugado de la entrada reflejada respecto de la diagonal. Las entradas diagonales son puramente imaginarias o cero.

> [!definicion] Matriz antihermítica
> Una matriz $A=(a_{ij})\in M_n(\mathbb C)$ es **[[Matemáticas/Álgebra lineal/Matriz antihermítica|antihermítica]]** si $A^*=-A$, es decir,
> $$
> a_{ij}=-\overline{a_{ji}}\qquad\forall i,j\in\{1,\ldots,n\}.
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - tipos-de-matriz
---
> [!note] Pregunta
> Para $A=(a_{ij})\in M_n(\mathbb C)$, ¿qué relación cumplen las entradas reflejadas si $A$ es antihermítica?
===
> [!important] Respuesta
> $a_{ij}=-\overline{a_{ji}}$ para todo $i,j\in\{1,\ldots,n\}$; equivalentemente, $A^*=-A$.
```

### Ejemplo — Diagonal imaginaria

> [!ejemplo] Antihermítica de orden tres
> $$
> Q=\begin{pmatrix}
> i&2+i&0\\
> -2+i&0&3\\
> 0&-3&-2i
> \end{pmatrix}.
> $$
> La pareja $q_{12}=2+i$, $q_{21}=-2+i=-\overline{q_{12}}$ cumple la condición, y las demás parejas se comprueban del mismo modo. En la diagonal, $q_{ii}=-\overline{q_{ii}}$ obliga a que la parte real sea cero. La antisimetría compara con $A^T$; la antihermiticidad, con $A^*$.[^6]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - antihermítica
---
> [!note] Pregunta
> Si $Q\in M_n(\mathbb C)$ es antihermítica, ¿qué condición cumplen sus entradas diagonales?
===
> [!important] Respuesta
> Son puramente imaginarias o cero, porque $q_{ii}=-\overline{q_{ii}}$.
```

Una matriz puede reunir varias de estas propiedades. Por ejemplo, $I_n$ es escalar y, por tanto, diagonal; toda diagonal es además triangular superior e inferior. La matriz nula cuadrada también es simétrica, antisimétrica, hermítica y antihermítica.

## Suma, opuesto y producto por un escalar

La suma combina las entradas de dos matrices del mismo tamaño. El producto por escalar multiplica las entradas de una matriz por un número. Ambas operaciones conservan el tamaño de las matrices sobre las que se realizan.

### Suma de matrices

Sean $A=(a_{ij})$ y $B=(b_{ij})$ dos matrices de $M_{m\times n}(K)$.

> [!definicion] Suma de matrices
> La [[Matemáticas/Álgebra lineal/Suma de matrices|suma de matrices]] se obtiene sumando las entradas correspondientes:
> $$
> (A+B)_{ij}=a_{ij}+b_{ij}.
> $$
> $\forall i\in\{1,\ldots,m\},\ \forall j\in\{1,\ldots,n\}$. Las dos matrices deben tener el mismo tamaño.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - suma
---
> [!note] Pregunta
> ¿Cómo se define la suma de matrices y qué condición deben cumplir sus tamaños?
===
> [!important] Respuesta
> Para matrices del mismo tamaño, $(A+B)_{ij}=a_{ij}+b_{ij}$; el resultado conserva ese tamaño.
```

El resultado conserva el tamaño $m\times n$. ==La igualdad de tamaños se comprueba antes de sumar==: una matriz $2\times3$ y otra $3\times2$ no tienen entradas correspondientes, aunque ambas contengan seis números.[^8]

#### Cómo se comprueba una igualdad de matrices

La expresión $A+B$ representa una matriz; $(A+B)_{ij}$ representa un escalar, su entrada en la fila $i$ y la columna $j$. Del mismo modo, $a_{ij}$, $b_{ij}$ y $c_{ij}$ son las entradas de $A$, $B$ y $C$ en esa posición.

Para demostrar una igualdad de matrices del mismo tamaño basta comparar sus entradas en una posición arbitraria $(i,j)$. Si coinciden y el argumento no depende de una elección particular de los índices, coinciden en todas las posiciones.

Las entradas son números reales o complejos. Sus leyes de asociatividad, conmutatividad y distributividad permiten justificar los cálculos por componentes.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - demostraciones
---
> [!note] Pregunta
> ¿Cómo se demuestra por entradas que dos matrices del mismo tamaño son iguales?
===
> [!important] Respuesta
> Se fija una posición arbitraria $(i,j)$, se calcula la entrada de ambos lados y se prueba que coinciden; como la posición es arbitraria, coinciden todas las entradas.
```

### Ejemplo — Sumar entradas correspondientes

> [!ejemplo] Suma de dos matrices $2\times3$
> Sean
> $$
> A=\begin{pmatrix}5&-1&0\\2&0&1\end{pmatrix}.
> $$
> $$
> B=\begin{pmatrix}-3&8&1\\1&0&1\end{pmatrix}.
> $$
> Las dos matrices tienen tamaño $2\times3$, así que sus entradas se suman posición por posición. Por ejemplo, la entrada $(1,1)$ resulta $5+(-3)=2$, y la entrada $(2,3)$ resulta $1+1=2$. Al completar las seis posiciones, queda
> $$
> A+B=\begin{pmatrix}2&7&1\\3&0&2\end{pmatrix}.
> $$

### Opuesto y resta

Sea $A=(a_{ij})\in M_{m\times n}(K)$.

> [!definicion] Matriz opuesta
> La **opuesta** de $A$ se obtiene sustituyendo cada entrada por su opuesto en $K$:
> $$
> -A=(-a_{ij}).
> $$
> Tiene el mismo tamaño que $A$.[^9]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - opuesto
---
> [!note] Pregunta
> ¿Cómo se define la matriz opuesta $-A$?
===
> [!important] Respuesta
> Se cambia el signo de cada entrada de $A$: $(-A)_{ij}=-a_{ij}$; su tamaño no cambia.
```

Para restar dos matrices, $A,B\in M_{m\times n}(K)$ deben tener el mismo tamaño.

> [!definicion] Resta de matrices
> La **diferencia** de $A$ y $B$ es la suma de $A$ con la opuesta de $B$:
> $$
> A-B=A+(-B).
> $$

En cada posición se restan las entradas correspondientes: $(A-B)_{ij}=a_{ij}-b_{ij}$, $\forall i\in\{1,\ldots,m\}$ y $\forall j\in\{1,\ldots,n\}$.[^9]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - resta
---
> [!note] Pregunta
> ¿Cómo se define la diferencia $A-B$ de matrices del mismo tamaño?
===
> [!important] Respuesta
> Como la suma de $A$ y la opuesta de $B$: $A-B=A+(-B)$.
```

La expresión «matriz simétrica de $A$» también se utiliza para designar $-A$. Se emplea «opuesta» para distinguir este uso de la condición $A^T=A$ que define una matriz *simétrica*.[^8]

### Ejemplo — Cambiar el signo de cada entrada

> [!ejemplo] Opuesta de la matriz anterior
> $$
> -A=\begin{pmatrix}-5&1&0\\-2&0&-1\end{pmatrix}.
> $$
> Para calcular $A-B$, se suma $A$ con la opuesta de $B$. Las dos matrices deben tener el mismo tamaño para que haya entradas correspondientes que restar.

### Conmutatividad de la suma

#### Proposición y propiedad

Para $A,B\in M_{m\times n}(K)$, se cumple:[^8]

> [!formula] Propiedad
> $$
> \boxed{A+B=B+A}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sean $A=(a_{ij})$ y $B=(b_{ij})$, con $1 \leq i \leq m$ y $1 \leq j \leq n$.
>
> Por definición de la suma de matrices:
>
>$$
>(A+B)_{ij}=a_{ij}+b_{ij}
>$$
>
> Como $a_{ij},b_{ij}\in K$ y la suma en el cuerpo $K$ es conmutativa, tenemos:
>
>$$
>a_{ij}+b_{ij}=b_{ij}+a_{ij}
>$$
>
>Por tanto:
>
>$$
>(A+B)_{ij}=b_{ij}+a_{ij}=(B+A)_{ij}
>$$
>
> Dado que esta igualdad se cumple para todos los índices $i,j$, las matrices $A+B$ y $B+A$ tienen las mismas entradas. En consecuencia:
>
>$$
>\boxed{A+B=B+A}
>$$

> [!abstract] Idea fundamental
> La suma de matrices es conmutativa porque la suma de los elementos del cuerpo $K$ es [[Leyes conmutativas|conmutativa]].
>
> Esta técnica se denomina **[[00 Prefacio#^2bd3aa|demostración por componentes]]**: dos matrices de las mismas dimensiones son iguales si, y solo si, todas sus entradas correspondientes son iguales.
>
> Como la ==suma de escalares reales o complejos es conmutativa, estas dos entradas son iguales==. La posición elegida era arbitraria; por el criterio de igualdad de matrices [^14][^10]
> $$A+B=B+A$$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - suma
---
> [!note] Pregunta
> ¿Qué ley satisface la suma de matrices respecto al orden de sus sumandos?
===
> [!important] Respuesta
> Es conmutativa: $A+B=B+A$ para matrices del mismo tamaño.
```

### Asociatividad de la suma

#### Proposición y propiedad

Para $A,B,C\in M_{m\times n}(K)$, se cumple:[^8]

> [!formula] Propiedad
> $$
> \boxed{(A+B)+C=A+(B+C)}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sean $A=(a_{ij})$, $B=(b_{ij})$ y $C=(c_{ij})$ matrices de $M_{m\times n}(K)$. Las dos agrupaciones tienen tamaño $m\times n$; para demostrar que son iguales, basta comprobar que coinciden sus entradas correspondientes.
>
> Fijemos una posición arbitraria: $i\in\{1,\ldots,m\}$ y $j\in\{1,\ldots,n\}$. Por definición de la suma de matrices,
>
> $$
> ((A+B)+C)_{ij}=(A+B)_{ij}+c_{ij}.
> $$
>
> La entrada $(i,j)$ de $A+B$ es $a_{ij}+b_{ij}$. Al sustituirla,
>
> $$
> ((A+B)+C)_{ij}=(a_{ij}+b_{ij})+c_{ij}.
> $$
>
> Ahora sumamos **escalares de $K$**. Su suma es asociativa, por lo que podemos cambiar los paréntesis:
>
> $$
> (a_{ij}+b_{ij})+c_{ij}=a_{ij}+(b_{ij}+c_{ij}).
> $$
>
> Por definición, $b_{ij}+c_{ij}=(B+C)_{ij}$. Por tanto,
>
> $$
> ((A+B)+C)_{ij}=a_{ij}+(B+C)_{ij}=(A+(B+C))_{ij}.
> $$
>
> La posición elegida era arbitraria: la igualdad se cumple $\forall i\in\{1,\ldots,m\}$ y $\forall j\in\{1,\ldots,n\}$. Las dos matrices tienen el mismo tamaño y las mismas entradas. En consecuencia,
>
> $$
> \boxed{(A+B)+C=A+(B+C)}.
> $$
> La asociatividad permite escribir la suma como $A+B+C$ sin indicar qué par se suma primero.[^34][^10]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - suma
---
> [!note] Pregunta
> Si $A,B,C\in M_{m\times n}(K)$, ¿qué permite la asociatividad de la suma?
===
> [!important] Respuesta
> Cambiar los paréntesis sin cambiar el resultado: $(A+B)+C=A+(B+C)$.
```

### La matriz nula como neutro aditivo

#### Proposición y propiedad

Dada una matriz $A\in M_{m\times n}(K)$:[^8]

> [!formula] Propiedad
> $$
> \boxed{A+0_{m\times n}=A=0_{m\times n}+A}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sea $A$ de tamaño $m\times n$ y fijemos $1\le i\le m$, $1\le j\le n$. La entrada de la nula en esa posición es $(0_{m\times n})_{ij}=0_K$. Al sumar por la derecha,
>
> $$
> (A+0_{m\times n})_{ij}=a_{ij}+(0_{m\times n})_{ij}.
> $$
>
> La identidad aditiva de los escalares da
>
> $$
> (A+0_{m\times n})_{ij}=a_{ij}+0_K=a_{ij}.
> $$
>
> Si sumamos la misma matriz nula por la izquierda,
>
> $$
> (0_{m\times n}+A)_{ij}=(0_{m\times n})_{ij}+a_{ij}=0_K+a_{ij}=a_{ij}.
> $$
>
> En ambos órdenes, cada entrada coincide con $a_{ij}$ y el tamaño sigue siendo $m\times n$. Por ello $A+0_{m\times n}=A=0_{m\times n}+A$.[^24][^10]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - suma
---
> [!note] Pregunta
> Para $A\in M_{m\times n}(K)$, ¿qué matriz es su neutro aditivo?
===
> [!important] Respuesta
> La matriz nula del mismo tamaño, $0_{m\times n}$: $A+0_{m\times n}=A=0_{m\times n}+A$.
```

### La matriz opuesta como inverso aditivo

#### Proposición y propiedad

Para $A\in M_{m\times n}(K)$:[^8]

> [!formula] Propiedad
> $$
> \boxed{A+(-A)=0_{m\times n}=(-A)+A}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> La opuesta $-A$ también mide $m\times n$ y su entrada $(i,j)$ es $-a_{ij}$. Fijemos una posición con $1\le i\le m$, $1\le j\le n$. En un orden,
>
> $$
> (A+(-A))_{ij}=a_{ij}+(-a_{ij})=0_K.
> $$
>
> La entrada de la matriz nula en esa posición es también cero:
>
> $$
> (0_{m\times n})_{ij}=0_K.
> $$
>
> Al invertir el orden, la suma de escalares sigue dando cero:
>
> $$
> ((-A)+A)_{ij}=(-a_{ij})+a_{ij}=0_K=(0_{m\times n})_{ij}.
> $$
>
> Por tanto, en ambos órdenes cada entrada es cero y el tamaño es $m\times n$. Concluimos $A+(-A)=0_{m\times n}=(-A)+A$; aquí usamos que cada escalar real o complejo tiene opuesto aditivo.[^29][^10]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - opuesto
---
> [!note] Pregunta
> Para $A\in M_{m\times n}(K)$, ¿qué igualdad caracteriza a su opuesto aditivo?
===
> [!important] Respuesta
> $A+(-A)=0_{m\times n}=(-A)+A$.
```

### Producto de un escalar por una matriz

Sean $\lambda\in K$ un escalar y $A=(a_{ij})\in M_{m\times n}(K)$ una matriz.

> [!definicion] Producto por escalar
> El [[Matemáticas/Álgebra lineal/Producto de matriz por escalar|producto por escalar]] $\lambda A$ se obtiene multiplicando por $\lambda$ cada entrada de $A$:
> $$
> (\lambda A)_{ij}=\lambda a_{ij}.
> $$
> $\forall i\in\{1,\ldots,m\},\ \forall j\in\{1,\ldots,n\}$.

El resultado tiene el mismo tamaño $m\times n$ que $A$.[^8]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-por-escalar
---
> [!note] Pregunta
> Si $\lambda\in K$ y $A\in M_{m\times n}(K)$, ¿cómo se define $\lambda A$?
===
> [!important] Respuesta
> Se multiplica cada entrada por $\lambda$: $(\lambda A)_{ij}=\lambda a_{ij}$; el tamaño de $A$ no cambia.
```

### Ejemplo — Escalar todas las entradas

> [!ejemplo] Cuatro veces una matriz $2\times3$
> $$
> 4A
> =4\begin{pmatrix}5&-1&0\\2&0&1\end{pmatrix}
> =\begin{pmatrix}20&-4&0\\8&0&4\end{pmatrix}.
> $$
> El tamaño permanece $2\times3$ y los ceros siguen siendo cero.

### Asociatividad de los escalares sobre matrices

#### Proposición y propiedad

Si $\large \alpha,\beta\in K$ y $A\in M_{m\times n}(K)$, entonces:[^8]

> [!formula] Propiedad
> $$
> \boxed{(\alpha\beta)A=\alpha(\beta A)}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sea $A=(a_{ij})\in M_{m\times n}(K)$, con $1\leq i\leq m$ y $1\leq j\leq n$.
>
> Por definición del producto por escalares y por la **asociatividad de la multiplicación en el cuerpo $K$**:
>
> $$
> \begin{aligned}
> ((\alpha\beta)A)_{ij}
> &=(\alpha\beta)a_{ij}\\
> &=\alpha(\beta a_{ij})\\
> &=(\alpha(\beta A))_{ij}
> \end{aligned}
> $$
>
> Como la igualdad se cumple para todos los índices $i,j$, por el criterio de igualdad de matrices:[^15][^10]
>
> $$
> \boxed{(\alpha\beta)A=\alpha(\beta A)}\qquad
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-por-escalar
---
> [!note] Pregunta
> Si $\alpha,\beta\in K$ y $A\in M_{m\times n}(K)$, ¿qué ley relaciona $(\alpha\beta)A$ con $\alpha(\beta A)$?
===
> [!important] Respuesta
> La asociatividad de los escalares: $(\alpha\beta)A=\alpha(\beta A)$.
```

### Distribución sobre la suma de matrices

#### Proposición y propiedad

Para $A,B\in M_{m\times n}(K)$ y $\alpha\in K$:[^8]

> [!formula] Propiedad
> $$
> \boxed{\alpha(A+B)=\alpha A+\alpha B}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sean $A=(a_{ij})$ y $B=(b_{ij})$, con $1\leq i\leq m$ y $1\leq j\leq n$.
>
> Por definición de suma de matrices y producto por escalares, y por la **propiedad distributiva de la multiplicación respecto de la suma en el cuerpo $K$**:
>
> $$
> \begin{aligned}
> (\alpha(A+B))_{ij}
> &=\alpha(a_{ij}+b_{ij})\\
> &=\alpha a_{ij}+\alpha b_{ij}\\
> &=(\alpha A+\alpha B)_{ij}
> \end{aligned}
> $$
>
> Como la igualdad se cumple para todos los índices $i,j$, por el criterio de igualdad de matrices:[^15][^10]
>
> $$
> \boxed{\alpha(A+B)=\alpha A+\alpha B}\qquad
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-por-escalar
---
> [!note] Pregunta
> Si $A,B\in M_{m\times n}(K)$ y $\alpha\in K$, ¿cómo se distribuye $\alpha$ sobre $A+B$?
===
> [!important] Respuesta
> $\alpha(A+B)=\alpha A+\alpha B$.
```

### Distribución sobre la suma de escalares

#### Proposición y propiedad

Para $\alpha,\beta\in K$ y $A\in M_{m\times n}(K)$:[^8]

> [!formula] Propiedad
> $$
> \boxed{(\alpha+\beta)A=\alpha A+\beta A}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sea $A=(a_{ij})\in M_{m\times n}(K)$, con $1\leq i\leq m$ y $1\leq j\leq n$.
>
> Por definición del producto por escalares y por la **propiedad distributiva de la multiplicación respecto de la suma en el cuerpo $K$**:
>
> $$
> \begin{aligned}
> ((\alpha+\beta)A)_{ij}
> &=(\alpha+\beta)a_{ij}\\
> &=\alpha a_{ij}+\beta a_{ij}\\
> &=(\alpha A+\beta A)_{ij}
> \end{aligned}
> $$
>
> Como la igualdad se cumple para todos los índices $i,j$, por el criterio de igualdad de matrices:[^15][^10]
>
> $$
> \boxed{(\alpha+\beta)A=\alpha A+\beta A}\qquad\blacksquare
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-por-escalar
---
> [!note] Pregunta
> Al multiplicar una matriz $A\in M_{m\times n}(K)$ por la suma de dos escalares $\alpha,\beta\in K$, ¿cómo se aplica la propiedad distributiva?
===
> [!important] Respuesta
> $(\alpha+\beta)A=\alpha A+\beta A$.
```

### Multiplicar por cero

#### Proposición y propiedad

Para $A\in M_{m\times n}(K)$:[^8]

> [!formula] Propiedad
> $$
> \boxed{0_KA=0_{m\times n}}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sea $A=(a_{ij})\in M_{m\times n}(K)$, con $1\leq i\leq m$ y $1\leq j\leq n$.
>
> Por definición del producto por escalares y dado que **$0_Ka=0_K$ para todo $a\in K$**:
>
> $$
> \begin{aligned}
> (0_KA)_{ij}
> &=0_Ka_{ij}\\
> &=0_K\\
> &=(0_{m\times n})_{ij}
> \end{aligned}
> $$
>
> Como la igualdad se cumple para todos los índices $i,j$, por el criterio de igualdad de matrices:[^35]
>
> $$
> \boxed{0_KA=0_{m\times n}}\qquad\blacksquare
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-por-escalar
---
> [!note] Pregunta
> Si $A\in M_{m\times n}(K)$, ¿qué matriz resulta al multiplicarla por el escalar cero $0_K$?
===
> [!important] Respuesta
> La matriz nula del mismo tamaño: $0_KA=0_{m\times n}$ si $A\in M_{m\times n}(K)$.
```

### Multiplicar por menos uno

#### Proposición y propiedad

Para $A\in M_{m\times n}(K)$:[^8]

> [!formula] Propiedad
> $$
> \boxed{(-1_K)A=-A}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sea $A=(a_{ij})\in M_{m\times n}(K)$. La igualdad $1_KA=A$ se cumple porque $(1_KA)_{ij}=1_Ka_{ij}=a_{ij}$, para $1\leq i\leq m$ y $1\leq j\leq n$.
>
> Por esta igualdad, la distributividad respecto de la suma de escalares y la propiedad $0_KA=0_{m\times n}$:
>
> $$
> \begin{aligned}
> A+(-1_K)A
> &=1_KA+(-1_K)A\\
> &=(1_K+(-1_K))A\\
> &=0_KA\\
> &=0_{m\times n}
> \end{aligned}
> $$
>
> Así, $(-1_K)A$ es un opuesto aditivo de $A$. Este opuesto es único: si $B,C\in M_{m\times n}(K)$ satisfacen $A+B=0_{m\times n}=A+C$, entonces, por las leyes de la suma ya demostradas,
>
> $$
> \begin{aligned}
> B&=B+0_{m\times n}\\
> &=B+(A+C)\\
> &=(B+A)+C\\
> &=0_{m\times n}+C\\
> &=C.
> \end{aligned}
> $$
>
> Como $-A$ también es un opuesto de $A$, la unicidad permite concluir:[^36]
>
> $$
> \boxed{(-1_K)A=-A}\qquad\blacksquare
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-por-escalar
---
> [!note] Pregunta
> ¿Qué resultado se obtiene al multiplicar una matriz $A\in M_{m\times n}(K)$ por el escalar $1_K$?
===
> [!important] Respuesta
> Se obtiene la misma matriz: $1_KA=A$.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - opuesto
---
> [!note] Pregunta
> ¿Puede una matriz $A\in M_{m\times n}(K)$ tener dos opuestos aditivos distintos?
===
> [!important] Respuesta
> No. Si $A+B=0_{m\times n}$ y $A+C=0_{m\times n}$, entonces $B=C=-A$.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-por-escalar
---
> [!note] Pregunta
> Si $A\in M_{m\times n}(K)$, ¿qué relación expresa $(-1_K)A$ con la opuesta de $A$?
===
> [!important] Respuesta
> $(-1_K)A=-A$.
```

Con estas operaciones, $M_{m\times n}(K)$ es un [[Matemáticas/Álgebra lineal/Espacios vectoriales|espacio vectorial]] sobre $K$: se pueden sumar matrices y multiplicarlas por escalares sin salir del conjunto de matrices de tamaño $m\times n$.[^8]

## Producto matricial

### Definición y compatibilidad

Para multiplicar dos matrices se combinan las filas de la primera con las columnas de la segunda. Cada fila y cada columna deben tener igual número de entradas.

Sean $A=(a_{ij})\in M_{m\times n}(K)$ y $B=(b_{ij})\in M_{p\times q}(K)$, donde $K$ es un cuerpo —por ejemplo, $\mathbb R$ o $\mathbb C$— y $m,n,p,q\in\mathbb N_{>0}$.

> [!definicion] Producto de matrices
> El [[Matemáticas/Álgebra lineal/Producto matricial|producto matricial]] $AB$ ==está definido si y sólo si $n=p$==. Sus entradas se calculan mediante
> $$
> (AB)_{ij}=\sum_{k=1}^{n}a_{ik}b_{kj}.
> $$
> $\forall i\in\{1,\ldots,m\},\ \forall j\in\{1,\ldots,q\}$.

Para obtener la entrada $(i,j)$, se multiplican las entradas de la fila $i$ de $A$ por las entradas correspondientes de la columna $j$ de $B$ y se suman los $n$ productos. El resultado pertenece a $M_{m\times q}(K)$.[^8]

El sumatorio abrevia la expresión

$$
(AB)_{ij}=a_{i1}b_{1j}+a_{i2}b_{2j}+\cdots+a_{in}b_{nj}.
$$

Cada término $a_{ik}b_{kj}$ es un **producto de dos escalares** de $K$; al sumar los $n$ términos se obtiene otro escalar, la entrada $(AB)_{ij}$. No se multiplican únicamente las entradas que ocupan la misma posición en ambas matrices.[^37]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-matricial
---
> [!note] Pregunta
> Si $A\in M_{m\times n}(K)$ y $B\in M_{n\times p}(K)$, ¿cómo se calcula $(AB)_{ij}$?
===
> [!important] Respuesta
> Para $1\le i\le m$, $1\le j\le p$, se multiplica fila $i$ de $A$ por columna $j$ de $B$: $(AB)_{ij}=\sum_{k=1}^{n}a_{ik}b_{kj}$.
```

Las dimensiones **interiores**, $n$ y $p$, deben coincidir. Las **exteriores**, $m$ y $q$, dan el número de filas y columnas del resultado:

$$
\underbrace{(m\times n)}_{A}\,
\underbrace{(p\times q)}_{B}
\quad\xrightarrow{\ n=p\ }\quad
\underbrace{(m\times q)}_{AB}.
$$

### Ejemplo — Combinar filas con columnas

En este ejemplo, los subíndices de $A_{2\times3}$ y $B_{3\times2}$ **rotulan tamaños**; no designan entradas.

$$
A_{2\times3}=
\begin{pmatrix}
1&2&0\\
-1&3&4
\end{pmatrix}.
$$

$$
B_{3\times2}=
\begin{pmatrix}
2&1\\
0&-1\\
3&2
\end{pmatrix}.
$$

==Las dos dimensiones interiores valen $3$==, así que el producto existe y tiene tamaño $2\times2$. Para calcular la entrada $(2,1)$ se multiplica la segunda fila de $A$ por la primera columna de $B$:

$$
(AB)_{21}=(-1)\cdot2+3\cdot0+4\cdot3=10.
$$

Las otras tres entradas se calculan de la misma manera y dan

$$
AB=\begin{pmatrix}
2&-1\\
10&4
\end{pmatrix}_{2\times2}.
$$

### Ejemplo — Un producto $2\times3$ por $3\times4$

> [!ejemplo] Producto rectangular y compatibilidad
> $$
> E_{2\times3}=
> \begin{pmatrix}5&-1&0\\2&0&1\end{pmatrix}.
> $$
> $$
> F_{3\times4}=
> \begin{pmatrix}
> 1&-3&0&-1\\
> 2&-8&1&0\\
> 1&0&0&-1
> \end{pmatrix}.
> $$
> Las dimensiones interiores coinciden en $3$, así que el producto existe. Para calcular su entrada $(1,2)$, emparejamos la primera fila de $E$ con la segunda columna de $F$:
> $$
> (EF)_{12}=5(-3)+(-1)(-8)+0\cdot0=-7.
> $$
> El producto completo, de tamaño $2\times4$, es
> $$
> EF=\begin{pmatrix}
> 3&-7&-1&-5\\
> 3&-6&0&-3
> \end{pmatrix}_{2\times4}.
> $$
> En el orden contrario, $FE$ combinaría tamaños $3\times4$ y $2\times3$. Las dimensiones interiores, $4$ y $2$, no coinciden; por eso ==$FE$ no está definido==.[^8]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto
---
> [!note] Pregunta
> ¿Cuándo está definido $AB$ si $A$ es $m\times n$?
===
> [!important] Respuesta
> Cuando $B$ tiene $n$ filas. Si $B$ es $n\times p$, el producto $AB$ es $m\times p$.
```

### Lectura por columnas y filas

Escribamos las columnas de $B$ como $\mathbf b_1,\ldots,\mathbf b_p$. La columna $j$ del producto es $A\mathbf b_j$, así que

$$
AB=(A\mathbf b_1\;\cdots\;A\mathbf b_p).
$$

Cada columna del producto es una combinación lineal de las columnas de $A$: los coeficientes son las entradas de la columna correspondiente de $B$. De forma análoga, la fila $i$ de $AB$ se obtiene multiplicando la fila $i$ de $A$ por $B$.[^2]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-matricial
---
> [!note] Pregunta
> Si $A$ es $m\times n$ y $B$ es $n\times p$, ¿cómo se interpreta la columna $j$ de $AB$?
===
> [!important] Respuesta
> Es $A\mathbf b_j$, donde $\mathbf b_j$ es la columna $j$ de $B$; por tanto, es una combinación lineal de las columnas de $A$.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-matricial
---
> [!note] Pregunta
> Si $A$ es $m\times n$ y $B$ es $n\times p$, ¿cómo se obtiene la fila $i$ de $AB$?
===
> [!important] Respuesta
> Multiplicando la fila $i$ de $A$ por $B$; en coordenadas, su entrada $j$ es $\sum_{k=1}^n a_{ik}b_{kj}$.
```

### Producto como composición

> [!opcional]- Ampliación — Por qué el producto representa una composición
> Una matriz $A\in M_{m\times n}(K)$ define una [[Matemáticas/Álgebra lineal/Aplicaciones lineales|aplicación lineal]] que recibe una columna de $n$ coordenadas y devuelve una de $m$:
>
> $$
> T_A:K^n\longrightarrow K^m,\qquad T_A(\mathbf x)=A\mathbf x.
> $$
>
> Para $B\in M_{n\times q}(K)$, la aplicación correspondiente es
>
> $$
> T_B:K^q\longrightarrow K^n,\qquad T_B(\mathbf x)=B\mathbf x.
> $$
>
> Componerlas significa usar la salida de $T_B$ como entrada de $T_A$:
>
> $$
> K^q\xrightarrow{\ T_B\ }K^n\xrightarrow{\ T_A\ }K^m.
> $$
>
> Las $n$ filas de $B$ dan las $n$ coordenadas que necesita $A$. Ésta es la razón de la condición de compatibilidad: el codominio de $T_B$ coincide con el dominio de $T_A$. El producto tiene $q$ columnas y $m$ filas porque la composición recibe $q$ coordenadas y devuelve $m$.
>
> La regla fila-columna garantiza que, para cada $\mathbf x\in K^q$,
>
> $$
> T_A(T_B(\mathbf x))=A(B\mathbf x)=(AB)\mathbf x.
> $$
>
> Por tanto,
>
> $$
> \boxed{T_A\circ T_B=T_{AB}}.
> $$
>
> ==En $AB$ actúa primero $B$ y después $A$==. Por ejemplo, una matriz $3\times2$ multiplicada por otra $2\times2$ representa el recorrido $K^2\to K^2\to K^3$.
>
> Para aplicaciones $S:U\to V$ y $T:V\to W$ entre espacios vectoriales, se eligen bases: cada columna de su matriz contiene las coordenadas de la imagen de un vector de la base del dominio. Si sus matrices son $B$ y $A$, respectivamente, la matriz de $T\circ S$ es $AB$, usando **la misma base de $V$** para escribir la salida de $S$ y la entrada de $T$.[^37]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - aplicaciones-lineales
---
> [!note] Pregunta
> Si $A$ tiene $m$ filas y $n$ columnas, ¿entre qué espacios actúa la aplicación $T_A(\mathbf x)=A\mathbf x$?
===
> [!important] Respuesta
> $T_A:K^n\to K^m$: recibe $n$ coordenadas y devuelve $m$.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - aplicaciones-lineales
---
> [!note] Pregunta
> Para obtener la matriz de $T\circ S$ multiplicando las matrices de $S:U\to V$ y $T:V\to W$, ¿cómo deben elegirse las bases de $V$?
===
> [!important] Respuesta
> Debe usarse la misma base de $V$ para las coordenadas de salida de $S$ y las de entrada de $T$.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - aplicaciones-lineales
---
> [!note] Pregunta
> ¿Qué representan las columnas de la matriz de una aplicación lineal en las bases elegidas?
===
> [!important] Respuesta
> Las coordenadas de las imágenes de los vectores de la base elegida del dominio.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-matricial
---
> [!note] Pregunta
> Si $B$ representa $S:U\to V$ y $A$ representa $T:V\to W$, ¿qué composición representa $AB$?
===
> [!important] Respuesta
> $T\circ S$: primero actúa $B$ y después $A$.
```

### Cómo leer los sumatorios del producto

En el producto matricial aparece una suma finita. La expresión $\sum_{k=1}^{n}x_k$ abrevia $x_1+x_2+\cdots+x_n$: $k$ recorre los enteros de $1$ a $n$. Al calcular una entrada del producto, $i$ y $j$ quedan fijos y $k$ recorre las posiciones interiores que se emparejan. Un factor que no depende de $k$ mantiene el mismo valor en todos los sumandos.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - sumatorios
---
> [!note] Pregunta
> En $(AB)_{ij}=\sum_{k=1}^{n}a_{ik}b_{kj}$, ¿qué índices quedan fijos y cuál recorre los sumandos?
===
> [!important] Respuesta
> $i,j$ fijan la entrada de salida; $k$ recorre las $n$ posiciones interiores.
```

### Asociatividad del producto

#### Proposición y propiedad

Sean $A\in M_{m\times n}(K)$, $B\in M_{n\times p}(K)$ y $C\in M_{p\times q}(K)$.

> [!formula] Propiedad
> $$
> \boxed{(AB)C=A(BC)}
> $$

Ambos productos pertenecen a $M_{m\times q}(K)$.[^8]

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sean $A$ de tamaño $m\times n$, $B$ de tamaño $n\times p$ y $C$ de tamaño $p\times q$. Entonces $AB$ mide $m\times p$ y $(AB)C$ mide $m\times q$; también $BC$ mide $n\times q$ y $A(BC)$ mide $m\times q$. Fijamos $1\le i\le m$ y $1\le j\le q$.
>
> **1. Expandir el producto exterior.** Por la definición del producto matricial:
> $$
> ((AB)C)_{ij}=\sum_{\ell=1}^{p}(AB)_{i\ell}c_{\ell j}.
> $$
>
> Sustituimos la entrada $(AB)_{i\ell}$, calculada también por definición:
> $$
> ((AB)C)_{ij}=\sum_{\ell=1}^{p}\left(\sum_{k=1}^{n}a_{ik}b_{k\ell}\right)c_{\ell j}.
> $$
>
> **2. Abrir la suma interior.** Distribuir cada factor $c_{\ell j}$ sobre la suma finita da
> $$
> ((AB)C)_{ij}=\sum_{\ell=1}^{p}\sum_{k=1}^{n}(a_{ik}b_{k\ell})c_{\ell j}.
> $$
>
> Los índices $i,j$ siguen fijos porque nombran la entrada final. $k$ recorre las $n$ posiciones interiores usadas en $AB$; $\ell$ recorre las $p$ posiciones interiores usadas al multiplicar por $C$.
>
> **3. Reordenar la suma finita.** Veamos qué significa cambiar el orden de los sumatorios. Llamemos $x_{k\ell}$ a cada escalar que aparece; si $n=p=2$, sumar primero sobre $k$ para cada $\ell$ da
> $$
> (x_{11}+x_{21})+(x_{12}+x_{22}).
> $$
>
> Si sumamos primero sobre $\ell$ para cada $k$, obtenemos
> $$
> (x_{11}+x_{12})+(x_{21}+x_{22}).
> $$
>
> En este ejemplo aparecen los mismos cuatro escalares una vez cada uno; solo cambia el orden de la suma. En general, ambos recorridos pasan exactamente una vez por cada pareja $(k,\ell)$ con $1\le k\le n$ y $1\le\ell\le p$. Por tanto, suman los mismos $np$ escalares. La asociatividad y conmutatividad de la suma en $\mathbb R$ y $\mathbb C$ permiten reagruparlos. Aplicamos esa reordenación a los sumandos del producto:
> $$
> ((AB)C)_{ij}=\sum_{k=1}^{n}\sum_{\ell=1}^{p}(a_{ik}b_{k\ell})c_{\ell j}.
> $$
>
> En este paso solo reordenamos una suma de escalares; mantenemos el orden de los factores matriciales $A,B,C$.
>
> **4. Agrupar y reconocer $BC$.** La asociatividad de la multiplicación de escalares permite escribir cada término como $a_{ik}(b_{k\ell}c_{\ell j})$. El factor $a_{ik}$ no depende de $\ell$; la distributividad permite sacarlo de la suma sobre esos $p$ valores:
> $$
> ((AB)C)_{ij}=\sum_{k=1}^{n}a_{ik}\left(\sum_{\ell=1}^{p}b_{k\ell}c_{\ell j}\right).
> $$
>
> La suma interior es $(BC)_{kj}$ por definición. Sustituyéndola y aplicando la definición de $A(BC)$:
> $$
> ((AB)C)_{ij}=\sum_{k=1}^{n}a_{ik}(BC)_{kj}=(A(BC))_{ij}.
> $$
>
> La igualdad vale para toda pareja $i,j$ con $1\le i\le m$ y $1\le j\le q$. Como ambos lados tienen tamaño $m\times q$, concluimos $(AB)C=A(BC)$.[^16]

En un producto de tres matrices compatibles se puede elegir qué par multiplicar primero, manteniendo el orden de los factores.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - sumatorios
---
> [!note] Pregunta
> En una suma doble finita sobre todos los pares $(k,\ell)$, ¿por qué se puede intercambiar el orden de los sumatorios?
===
> [!important] Respuesta
> Ambos órdenes recorren una vez cada pareja de índices y, por asociatividad y conmutatividad de la suma escalar finita, suman los mismos términos.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-matricial
---
> [!note] Pregunta
> Si $A\in M_{m\times n}(K)$, $B\in M_{n\times p}(K)$ y $C\in M_{p\times q}(K)$, ¿qué permite la asociatividad del producto?
===
> [!important] Respuesta
> Para productos compatibles, cambiar los paréntesis: $(AB)C=A(BC)$; el orden de los factores no cambia.
```

### Distributividad por la derecha

#### Proposición y propiedad

Para $A\in M_{m\times n}(K)$ y $B_1,B_2\in M_{n\times p}(K)$:[^8]

> [!formula] Propiedad
> $$
> \boxed{A(B_1+B_2)=AB_1+AB_2}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sean $A$ de tamaño $m\times n$ y $B_1,B_2$ de tamaño $n\times p$. Ambos lados miden $m\times p$. Fijemos $1\le i\le m$ y $1\le j\le p$.
>
> **1. Calcular la entrada izquierda.**
> $$
> (A(B_1+B_2))_{ij}=\sum_{k=1}^{n}a_{ik}(B_1+B_2)_{kj}.
> $$
>
> Por la definición de suma de matrices, $(B_1+B_2)_{kj}=(B_1)_{kj}+(B_2)_{kj}$. Sustituimos:
> $$
> (A(B_1+B_2))_{ij}=\sum_{k=1}^{n}a_{ik}\bigl((B_1)_{kj}+(B_2)_{kj}\bigr).
> $$
>
> **2. Distribuir cada producto numérico.**
> $$
> (A(B_1+B_2))_{ij}=\sum_{k=1}^{n}\bigl(a_{ik}(B_1)_{kj}+a_{ik}(B_2)_{kj}\bigr).
> $$
>
> Separamos la suma de las dos listas de sumandos:
> $$
> (A(B_1+B_2))_{ij}=\sum_{k=1}^{n}a_{ik}(B_1)_{kj}+\sum_{k=1}^{n}a_{ik}(B_2)_{kj}.
> $$
>
> **3. Reconocer la entrada derecha.** Las dos sumas son $(AB_1)_{ij}$ y $(AB_2)_{ij}$ por la definición de producto. Por la definición de suma de matrices,
> $$
> (A(B_1+B_2))_{ij}=(AB_1)_{ij}+(AB_2)_{ij}=(AB_1+AB_2)_{ij}.
> $$
>
> Las entradas coinciden en cada posición del tamaño común, así que $A(B_1+B_2)=AB_1+AB_2$.[^17]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-matricial
---
> [!note] Pregunta
> Si $A\in M_{m\times n}(K)$ y $B_1,B_2\in M_{n\times p}(K)$, ¿cómo se distribuye $A$ sobre la suma del segundo factor?
===
> [!important] Respuesta
> $A(B_1+B_2)=AB_1+AB_2$, si los productos están definidos.
```

### Distributividad por la izquierda

#### Proposición y propiedad

Para $A_1,A_2\in M_{m\times n}(K)$ y $B\in M_{n\times p}(K)$:[^8]

> [!formula] Propiedad
> $$
> \boxed{(A_1+A_2)B=A_1B+A_2B}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sean $A_1,A_2$ de tamaño $m\times n$ y $B$ de tamaño $n\times p$. Ambos lados miden $m\times p$. Fijemos $1\le i\le m$ y $1\le j\le p$.
>
> **1. Expandir la entrada del lado izquierdo.** La regla del producto da la primera suma; la regla de la suma reemplaza luego $(A_1+A_2)_{ik}$ por $(A_1)_{ik}+(A_2)_{ik}$:
> $$
> ((A_1+A_2)B)_{ij}=\sum_{k=1}^{n}(A_1+A_2)_{ik}b_{kj}
> =\sum_{k=1}^{n}\bigl((A_1)_{ik}+(A_2)_{ik}\bigr)b_{kj}.
> $$
>
> **2. Distribuir cada producto numérico.**
> $$
> ((A_1+A_2)B)_{ij}=\sum_{k=1}^{n}\bigl((A_1)_{ik}b_{kj}+(A_2)_{ik}b_{kj}\bigr).
> $$
>
> Separamos los sumandos correspondientes a cada matriz:
> $$
> ((A_1+A_2)B)_{ij}=\sum_{k=1}^{n}(A_1)_{ik}b_{kj}+\sum_{k=1}^{n}(A_2)_{ik}b_{kj}.
> $$
>
> **3. Reconstruir el lado derecho.** Cada sumatorio es una entrada de producto: $(A_1B)_{ij}$ y $(A_2B)_{ij}$. Al sumarlas, obtenemos la entrada correspondiente de $A_1B+A_2B$:
> $$
> ((A_1+A_2)B)_{ij}=(A_1B)_{ij}+(A_2B)_{ij}=(A_1B+A_2B)_{ij}.
> $$
>
> Por tanto, las matrices coinciden en todas las posiciones de tamaño $m\times p$, y $(A_1+A_2)B=A_1B+A_2B$.[^18]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-matricial
---
> [!note] Pregunta
> Si $A_1,A_2\in M_{m\times n}(K)$ y $B\in M_{n\times p}(K)$, ¿cómo se distribuye la suma del primer factor?
===
> [!important] Respuesta
> $(A_1+A_2)B=A_1B+A_2B$, si los tamaños son compatibles.
```

### Compatibilidad con el producto por escalar

#### Proposición y propiedad

Para $\alpha\in K$, $A\in M_{m\times n}(K)$ y $B\in M_{n\times p}(K)$:[^8]

> [!formula] Propiedad
> $$
> \boxed{\alpha(AB)=(\alpha A)B=A(\alpha B)}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sean $\alpha\in K$, $A$ de tamaño $m\times n$ y $B$ de tamaño $n\times p$. Las tres expresiones tienen tamaño $m\times p$. Fijemos $1\le i\le m$ y $1\le j\le p$.
>
> **1. Expandir la entrada de $\alpha(AB)$.**
> $$
> (\alpha(AB))_{ij}=\alpha(AB)_{ij}=\alpha\left(\sum_{k=1}^{n}a_{ik}b_{kj}\right).
> $$
>
> **2. Distribuir $\alpha$ sobre la suma.**
> $$
> (\alpha(AB))_{ij}=\sum_{k=1}^{n}\alpha\bigl(a_{ik}b_{kj}\bigr).
> $$
>
> Por asociatividad de la multiplicación de escalares, cada término es $\alpha(a_{ik}b_{kj})=(\alpha a_{ik})b_{kj}$. Así,
> $$
> (\alpha(AB))_{ij}=\sum_{k=1}^{n}(\alpha a_{ik})b_{kj}.
> $$
>
> **3. Identificar la entrada de $(\alpha A)B$.** La entrada $(\alpha A)_{ik}$ vale $\alpha a_{ik}$. Al sustituirla en la definición del producto matricial,
> $$
> ((\alpha A)B)_{ij}=\sum_{k=1}^{n}(\alpha A)_{ik}b_{kj}.
> $$
>
> Esta suma es la misma que obtuvimos para $\alpha(AB)$. Así coinciden las entradas de ambos productos.
>
> **4. Calcular por separado la entrada de $A(\alpha B)$.**
> $$
> (A(\alpha B))_{ij}=\sum_{k=1}^{n}a_{ik}(\alpha B)_{kj}
> =\sum_{k=1}^{n}a_{ik}\bigl(\alpha b_{kj}\bigr).
> $$
>
> Aquí usamos que los escalares de $\mathbb R$ o $\mathbb C$ conmutan: $a_{ik}\alpha=\alpha a_{ik}$. Junto con la asociatividad numérica, esto transforma cada sumando en $(\alpha a_{ik})b_{kj}$. Por eso la entrada de $A(\alpha B)$ coincide con la de $(\alpha A)B$. En conjunto,
> $$
> \alpha(AB)=(\alpha A)B=A(\alpha B).
> $$
>
> Esta igualdad se cumple en cada posición del tamaño común $m\times p$.[^19]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-matricial
---
> [!note] Pregunta
> Si $\alpha\in K$, $A\in M_{m\times n}(K)$ y $B\in M_{n\times p}(K)$, ¿cómo se relacionan $\alpha(AB)$, $(\alpha A)B$ y $A(\alpha B)$?
===
> [!important] Respuesta
> $\alpha(AB)=(\alpha A)B=A(\alpha B)$ para tamaños compatibles.
```

### Identidad a la izquierda

#### Proposición y propiedad

Para $A\in M_{m\times n}(K)$:[^8]

> [!formula] Propiedad
> $$
> \boxed{I_mA=A}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sean $A$ de tamaño $m\times n$ e $I_m$ la identidad de tamaño $m\times m$. El producto $I_mA$ está definido y mide $m\times n$, igual que $A$. En la posición cualquiera $1\le i\le m$, $1\le j\le n$,
>
> $$
> (I_mA)_{ij}=\sum_{k=1}^{m}(I_m)_{ik}a_{kj}.
> $$
>
> En la fila $i$ de $I_m$, solo la entrada de la columna $i$ vale $1_K$; las demás son cero. Por eso todos los sumandos salvo el de $k=i$ desaparecen:
> $$
> (I_mA)_{ij}=a_{ij}.
> $$
>
> La entrada coincide con la de $A$ en cada posición del tamaño $m\times n$, de modo que $I_mA=A$.[^20]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-matricial
---
> [!note] Pregunta
> Para $A\in M_{m\times n}(K)$, ¿qué identidad actúa por la izquierda y qué resultado produce?
===
> [!important] Respuesta
> La identidad $I_m$ de orden $m$: $I_mA=A$.
```

### Identidad a la derecha

#### Proposición y propiedad

Para $A\in M_{m\times n}(K)$:[^8]

> [!formula] Propiedad
> $$
> \boxed{AI_n=A}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sea $A$ de tamaño $m\times n$ e $I_n$ la identidad de tamaño $n\times n$. El producto $AI_n$ está definido y mide $m\times n$. Para cualquier $1\le i\le m$ y $1\le j\le n$,
>
> $$
> (AI_n)_{ij}=\sum_{k=1}^{n}a_{ik}(I_n)_{kj}.
> $$
>
> En la columna $j$ de $I_n$, solo la entrada de la fila $j$ es $1_K$. Todos los demás sumandos son cero, y el restante vale $a_{ij}1_K=a_{ij}$:
> $$
> (AI_n)_{ij}=a_{ij}.
> $$
>
> Como esto ocurre para cualquier $i,j$, la matriz resultante coincide con $A$: $AI_n=A$.[^20]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-matricial
---
> [!note] Pregunta
> Para $A\in M_{m\times n}(K)$, ¿qué identidad actúa por la derecha y qué resultado produce?
===
> [!important] Respuesta
> La identidad $I_n$ de orden $n$: $AI_n=A$.
```

### Matriz nula a la izquierda

#### Proposición y propiedad

Si $A\in M_{m\times n}(K)$ y $r\in\mathbb N$, entonces:[^8]

> [!formula] Propiedad
> $$
> \boxed{0_{r\times m}A=0_{r\times n}}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sean $A$ de tamaño $m\times n$ y $0_{r\times m}$ la matriz nula de tamaño $r\times m$. Las dimensiones interiores coinciden y el producto mide $r\times n$. Fijemos $1\le i\le r$ y $1\le j\le n$.
>
> La definición del producto da
> $$
> (0_{r\times m}A)_{ij}=\sum_{k=1}^{m}(0_{r\times m})_{ik}a_{kj}.
> $$
>
> Cada entrada de la matriz nula vale $0_K$. Además, $0_Ka_{kj}=0_K$ para cualquier escalar, como se justifica en [^12]. Por tanto,
> $$
> (0_{r\times m}A)_{ij}=\sum_{k=1}^{m}0_K.
> $$
>
> Hay $m$ sumandos y cada uno vale cero, así que la entrada del producto es cero. Como su tamaño es $r\times n$,[^21]
> $$
> 0_{r\times m}A=0_{r\times n}.
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-matricial
---
> [!note] Pregunta
> ¿Qué resulta al multiplicar $A\in M_{m\times n}(K)$ por una matriz nula a la izquierda $0_{r\times m}$?
===
> [!important] Respuesta
> $0_{r\times m}A=0_{r\times n}$.
```

### Matriz nula a la derecha

#### Proposición y propiedad

Si $A\in M_{m\times n}(K)$ y $q\in\mathbb N$, entonces:[^8]

> [!formula] Propiedad
> $$
> \boxed{A0_{n\times q}=0_{m\times q}}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sean $A$ de tamaño $m\times n$ y $0_{n\times q}$ la matriz nula de tamaño $n\times q$. Las dimensiones interiores coinciden y el producto mide $m\times q$. Fijemos $1\le i\le m$ y $1\le j\le q$.
>
> Por definición del producto matricial,
> $$
> (A0_{n\times q})_{ij}=\sum_{k=1}^{n}a_{ik}(0_{n\times q})_{kj}.
> $$
>
> Las entradas de la matriz nula son $0_K$, y cada producto $a_{ik}0_K$ también vale cero por [^12]. Así,
> $$
> (A0_{n\times q})_{ij}=\sum_{k=1}^{n}0_K.
> $$
>
> Los $n$ sumandos son cero, así que esta entrada es $0_K$. El producto tiene tamaño $m\times q$; por tanto,[^21]
> $$
> A0_{n\times q}=0_{m\times q}.
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-matricial
---
> [!note] Pregunta
> ¿Qué resulta al multiplicar $A\in M_{m\times n}(K)$ por una matriz nula a la derecha $0_{n\times q}$?
===
> [!important] Respuesta
> $A0_{n\times q}=0_{m\times q}$.
```

### No conmutatividad del producto

El producto matricial no es conmutativo: aun cuando $AB$ y $BA$ estén definidos y tengan el mismo tamaño, pueden ser distintos.[^8]

### Ejemplo — Cambiar el orden cambia el resultado

> [!ejemplo] Dos productos $2\times2$
> $$
> C=\begin{pmatrix}1&1\\0&1\end{pmatrix}.
> $$
> $$
> D=\begin{pmatrix}1&0\\2&-1\end{pmatrix}.
> $$
> Se obtienen
> $$
> CD=\begin{pmatrix}3&-1\\2&-1\end{pmatrix}.
> $$
> $$
> DC=\begin{pmatrix}1&1\\2&1\end{pmatrix}.
> $$
> Las entradas $(1,1)$ ya son diferentes: ==$CD\ne DC$==. El orden determina qué matriz actúa primero.[^8]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - producto-matricial
  - no-conmutatividad
---
> [!note] Pregunta
> ¿Por qué no se puede suponer que $AB=BA$?
===
> [!important] Respuesta
> Porque el producto matricial no es conmutativo en general; incluso puede estar definido $AB$ y no estar definido $BA$.
```

## Potencias de una matriz cuadrada

Para multiplicar una matriz por sí misma, su número de columnas debe coincidir con su número de filas. Las potencias matriciales se definen, por tanto, para matrices cuadradas.

### Definición de potencia

Sean $A\in M_n(K)$ y $p\in\mathbb N$.

> [!definicion] Potencia positiva de una matriz
> La [[Matemáticas/Álgebra lineal/Potencia de una matriz|potencia]] se define mediante productos sucesivos:[^8]
> $$
> A^1=A,\qquad A^p=A^{p-1}A\quad\text{si }p>1.
> $$

Todos los factores tienen tamaño $n\times n$, por lo que cada producto está definido y conserva ese tamaño.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - potencias
---
> [!note] Pregunta
> ¿Para qué matrices se define $A^p$ y cómo se construye para $p>1$?
===
> [!important] Respuesta
> Para $A\in M_n(K)$; $A^1=A$ y $A^p=A^{p-1}A$ para $p>1$.
```

### Ejemplo — Calcular un cuadrado

> [!ejemplo] Producto de la matriz por sí misma
> $$
> P=\begin{pmatrix}4&2\\-3&-1\end{pmatrix}.
> $$
> $$
> P^2=\begin{pmatrix}10&6\\-9&-5\end{pmatrix}.
> $$
> Por ejemplo, la entrada $(1,1)$ es $4\cdot4+2(-3)=10$. Como $P$ es cuadrada de orden dos, $P^2$ vuelve a tener ese mismo tamaño.

### Ejemplo — Una potencia puede dar la identidad

> [!ejemplo] $R^2=I_2$
> $$
> R=\begin{pmatrix}1&1\\0&-1\end{pmatrix}.
> $$
> $$
> R^2=\begin{pmatrix}1&0\\0&1\end{pmatrix}=I_2.
> $$
> La entrada superior derecha es $1\cdot1+1(-1)=0$. Las dos entradas diagonales valen uno y la inferior izquierda vale cero, de modo que $R^2=I_2$. Por ello, al multiplicar dos veces una columna por $R$, se recupera la columna inicial.

### Ejemplo — Dos factores no nulos pueden dar cero

> [!ejemplo] Un cuadrado nulo
> $$
> N=\begin{pmatrix}1&i\\i&-1\end{pmatrix}.
> $$
> $$
> N^2=\begin{pmatrix}0&0\\0&0\end{pmatrix}=0_2.
> $$
> La entrada $(1,1)$ vale $1+i^2=0$, y las demás entradas también se anulan. Así, ==$N^2=0_2$ aunque $N\ne0_2$==. En los números reales o complejos, un producto es cero solo si alguno de sus factores es cero; en el producto matricial, esa propiedad no se cumple.[^8]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto
---
> [!note] Pregunta
> ¿Si un producto de matrices es cero, debe ser cero alguno de sus factores?
===
> [!important] Respuesta
> No. Las matrices pueden tener divisores de cero: existen $A,B\ne0$ tales que $AB=0$.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - potencias
---
> [!note] Pregunta
> ¿Puede una matriz no nula tener una potencia igual a cero?
===
> [!important] Respuesta
> Sí. Existen matrices $N\ne0$ con $N^2=0$; por tanto, que una potencia de una matriz sea cero no implica que la matriz sea cero.
```

## Transpuesta y conjugada transpuesta

La transposición intercambia filas y columnas; la conjugación sustituye cada entrada por su conjugado. En las matrices complejas se pueden realizar ambas operaciones para obtener la conjugada transpuesta.

### Transpuesta

Al transponer una matriz, cada fila pasa a ser una columna. La operación está definida tanto para matrices cuadradas como para rectangulares.

Sea $A=(a_{ij})\in M_{m\times n}(K)$.

> [!definicion] Transpuesta
> Su **[[Matemáticas/Álgebra lineal/Transpuesta de una matriz|transpuesta]]** $A^T\in M_{n\times m}(K)$ se define por
> $$
> (A^T)_{ij}=a_{ji}
> \qquad\forall i\in\{1,\ldots,n\},\ \forall j\in\{1,\ldots,m\}.
> $$

La fila $i$ de $A$ es la columna $i$ de $A^T$; por eso se invierten las dimensiones: de $m\times n$ a $n\times m$.[^7]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - transpuesta
---
> [!note] Pregunta
> ¿Cómo se define la transpuesta de $A\in M_{m\times n}(K)$ y qué tamaño tiene?
===
> [!important] Respuesta
> $(A^T)_{ij}=a_{ji}$; tiene tamaño $n\times m$ e intercambia filas y columnas.
```

### Ejemplo — Las filas pasan a columnas

> [!ejemplo] Transponer una matriz $2\times3$
> $$
> A=\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}_{2\times3}.
> $$
> La primera fila $(1,2,3)$ se convierte en la primera columna; la segunda fila, en la segunda columna:
> $$
> A^T=\begin{pmatrix}1&4\\2&5\\3&6\end{pmatrix}_{3\times2}.
> $$

### La doble transpuesta

#### Proposición y propiedad

Para $A\in M_{m\times n}(K)$:[^7]

> [!formula] Propiedad
> $$
> \boxed{(A^T)^T=A}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> La doble transpuesta recupera el tamaño original: $A^T$ mide $n\times m$ y $(A^T)^T$ mide $m\times n$. Fijemos $1\le i\le m$ y $1\le j\le n$. Al transponer por segunda vez, la entrada $(i,j)$ pasa a ser la entrada $(j,i)$ de $A^T$:
>
> $$
> ((A^T)^T)_{ij}=(A^T)_{ji}.
> $$
>
> Por la definición de transpuesta, esa entrada es $a_{ij}$:
>
> $$
> (A^T)_{ji}=a_{ij}.
> $$
>
> Por tanto, en cada posición admisible las dos matrices tienen la misma entrada; luego $(A^T)^T=A$.[^25]
```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - transpuesta
---
> [!note] Pregunta
> Si $A\in M_{m\times n}(K)$, ¿qué ocurre al transponerla dos veces?
===
> [!important] Respuesta
> Se recupera la matriz original: $(A^T)^T=A$.
```

### Transpuesta de una suma

#### Proposición y propiedad

Para $A,B\in M_{m\times n}(K)$:[^7]

> [!formula] Propiedad
> $$
> \boxed{(A+B)^T=A^T+B^T}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Como $A$ y $B$ miden $m\times n$, los dos lados tienen tamaño $n\times m$. Fijemos $1\le i\le n$ y $1\le j\le m$. En el lado izquierdo, transponer intercambia los índices y la entrada de la suma se calcula posición a posición:
>
> $$
> ((A+B)^T)_{ij}=(A+B)_{ji}=a_{ji}+b_{ji}.
> $$
>
> En el lado derecho, primero sumamos las entradas correspondientes:
>
> $$
> (A^T+B^T)_{ij}=(A^T)_{ij}+(B^T)_{ij}.
> $$
>
> Como $(A^T)_{ij}=a_{ji}$ y $(B^T)_{ij}=b_{ji}$, resulta
>
> $$
> (A^T+B^T)_{ij}=a_{ji}+b_{ji}.
> $$
>
> Las entradas son iguales para cualquier posición del tamaño $n\times m$; por eso $(A+B)^T=A^T+B^T$.[^25]
```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - transpuesta
---
> [!note] Pregunta
> Si $A,B\in M_{m\times n}(K)$, ¿cómo se comporta la transpuesta respecto de la suma?
===
> [!important] Respuesta
> $(A+B)^T=A^T+B^T$ para matrices del mismo tamaño.
```

### Transpuesta de un producto por escalar

#### Proposición y propiedad

Para $\lambda\in K$ y $A\in M_{m\times n}(K)$:[^7]

> [!formula] Propiedad
> $$
> \boxed{(\lambda A)^T=\lambda A^T}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Ambos lados tienen tamaño $n\times m$. Fijemos $1\le i\le n$ y $1\le j\le m$. En $(\lambda A)^T$, la transpuesta selecciona la entrada $(j,i)$ de $\lambda A$:
>
> $$
> ((\lambda A)^T)_{ij}=(\lambda A)_{ji}.
> $$
>
> La definición del producto por escalar la evalúa como
>
> $$
> ((\lambda A)^T)_{ij}=\lambda a_{ji}.
> $$
>
> En el lado derecho, $(A^T)_{ij}=a_{ji}$, y por tanto
>
> $$
> (\lambda A^T)_{ij}=\lambda(A^T)_{ij}=\lambda a_{ji}.
> $$
>
> Las entradas coinciden en cada posición del tamaño común, así que $(\lambda A)^T=\lambda A^T$.[^25]
```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - transpuesta
---
> [!note] Pregunta
> Si $\lambda\in K$ y $A\in M_{m\times n}(K)$, ¿cómo se comporta la transpuesta respecto de $\lambda A$?
===
> [!important] Respuesta
> $(\lambda A)^T=\lambda A^T$.
```

### Transpuesta de un producto matricial

#### Proposición y propiedad

Sean $A\in M_{m\times n}(K)$ y $B\in M_{n\times p}(K)$.

Al transponer un producto, se invierte el orden de los factores:

> [!formula] Propiedad
> $$
> \boxed{(AB)^T=B^TA^T}
> $$

Ambos lados miden $p\times m$.[^7]

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Como $A$ mide $m\times n$ y $B$ mide $n\times p$, $AB$ mide $m\times p$; por eso $(AB)^T$ mide $p\times m$. También $B^T$ mide $p\times n$ y $A^T$ mide $n\times m$, así que $B^TA^T$ mide $p\times m$. Fijemos $1\le i\le p$ y $1\le j\le m$.
>
> **1. Calcular la entrada del lado izquierdo.** Por la definición de transpuesta,
>
> $$
> ((AB)^T)_{ij}=(AB)_{ji}.
> $$
>
> La entrada $(j,i)$ de $AB$ es una suma de $n$ productos, donde $k$ recorre las posiciones interiores:
>
> $$
> ((AB)^T)_{ij}=\sum_{k=1}^{n}a_{jk}b_{ki}.
> $$
>
> **2. Calcular la entrada del lado derecho.** Aplicamos la definición del producto matricial y después las definiciones de las transpuestas:
>
> $$
> (B^TA^T)_{ij}=\sum_{k=1}^{n}(B^T)_{ik}(A^T)_{kj}
> =\sum_{k=1}^{n}b_{ki}a_{jk}.
> $$
>
> **3. Comparar los sumandos.** Los factores son escalares de $K=\mathbb R$ o $\mathbb C$, por lo que su producto conmuta: $a_{jk}b_{ki}=b_{ki}a_{jk}$. Las dos sumas tienen los mismos términos y los mismos límites; así coinciden en cada posición. Concluimos $(AB)^T=B^TA^T$.[^25]
>
```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - transpuesta
---
> [!note] Pregunta
> ¿Qué ocurre con el orden al transponer un producto?
===
> [!important] Respuesta
> Se invierte: $(AB)^T=B^TA^T$.
```


### Conjugada de una matriz

Sea $A=(a_{ij})\in M_{m\times n}(\mathbb C)$.

> [!definicion] Matriz conjugada
> La **conjugada** $\overline A$ se obtiene conjugando cada entrada, sin cambiar su posición:
> $$
> (\overline A)_{ij}=\overline{a_{ij}}.
> $$
> Tiene el mismo tamaño que $A$.[^7]

$\overline{a_{ij}}$ es un número complejo; $\overline A$ es la matriz completa.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - conjugación
---
> [!note] Pregunta
> Si $A\in M_{m\times n}(\mathbb C)$, ¿cómo se obtiene la matriz conjugada $\overline A$?
===
> [!important] Respuesta
> Se conjuga cada entrada sin cambiar su posición ni el tamaño: $(\overline A)_{ij}=\overline{a_{ij}}$.
```

### Ejemplo — Cambiar el signo de las partes imaginarias

> [!ejemplo] Conjugación de una matriz $2\times3$
> $$
> C=\begin{pmatrix}1+i&2&-i\\3-i&0&4i\end{pmatrix}.
> $$
> $$
> \overline C=\begin{pmatrix}1-i&2&i\\3+i&0&-4i\end{pmatrix}.
> $$
> Las entradas reales, como $2$, permanecen iguales. En las demás cambia el signo de la parte imaginaria.

### Leyes escalares de conjugación

Sean $z=x+iy$ y $w=u+iv$ dos [[Matemáticas/Sistemas numéricos/Números complejos|números complejos]], con $x,y,u,v\in\mathbb R$ e $i^2=-1$. Entonces $\overline z=x-iy$ y $\overline w=u-iv$.[^13]

#### Doble conjugación escalar

##### Proposición y propiedad

Para $z\in\mathbb C$,

> [!formula] Propiedad
> $$
> \boxed{\overline{\overline z}=z}
> $$

##### Demostración

> [!demostracion] Demostración
> La primera conjugación cambia el signo de la parte imaginaria; la segunda lo cambia de nuevo:
>
> $$
> \overline{\overline z}=\overline{x-iy}=x+iy=z.
> $$
>
> Así, $\overline{\overline z}=z$.[^30]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - números-complejos
  - conjugación
---
> [!note] Pregunta
> ¿Qué le ocurre a $z\in\mathbb C$ al conjugarlo dos veces?
===
> [!important] Respuesta
> Se recupera el número: $\overline{\overline z}=z$.
```

#### Conjugación de una suma de números complejos

##### Proposición y propiedad

Para $z,w\in\mathbb C$,

> [!formula] Propiedad
> $$
> \boxed{\overline{z+w}=\overline z+\overline w}
> $$

##### Demostración

> [!demostracion] Demostración
> La suma combina por separado partes reales e imaginarias. Al conjugar, cambia el signo de la parte imaginaria:
>
> $$
> \overline{z+w}=\overline{(x+u)+i(y+v)}=(x+u)-i(y+v).
> $$
>
> Si conjugamos antes de sumar, obtenemos
>
> $$
> \overline z+\overline w=(x-iy)+(u-iv)=(x+u)-i(y+v).
> $$
>
> Por tanto, $\overline{z+w}=\overline z+\overline w$.[^30]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - números-complejos
  - conjugación
---
> [!note] Pregunta
> Para $z,w\in\mathbb C$, ¿cómo se conjuga su suma?
===
> [!important] Respuesta
> Conjugando cada sumando: $\overline{z+w}=\overline z+\overline w$.
```

#### Conjugación del producto de dos números complejos

##### Proposición y propiedad

Para $z,w\in\mathbb C$,

> [!formula] Propiedad
> $$
> \boxed{\overline{zw}=\overline z\,\overline w}
> $$

##### Demostración

> [!demostracion] Demostración
> Al desarrollar el producto usando $i^2=-1$,
>
> $$
> zw=(x+iy)(u+iv)=(xu-yv)+i(xv+yu).
> $$
>
> Por eso,
>
> $$
> \overline{zw}=(xu-yv)-i(xv+yu).
> $$
>
> El producto de las conjugadas produce la misma expresión:
>
> $$
> \overline z\,\overline w=(x-iy)(u-iv)=(xu-yv)-i(xv+yu).
> $$
>
> Así, $\overline{zw}=\overline z\,\overline w$.[^30]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - números-complejos
  - conjugación
---
> [!note] Pregunta
> Para $z,w\in\mathbb C$, ¿cómo se conjuga su producto?
===
> [!important] Respuesta
> Conjugando cada factor y conservando el orden: $\overline{zw}=\overline z\,\overline w$.
```

### Conjugada transpuesta

Para obtener la conjugada transpuesta se conjugan las entradas y se intercambian las filas con las columnas. Si hay entradas no reales, el resultado puede ser distinto de la transpuesta.

Sea $A\in M_{m\times n}(\mathbb C)$.

> [!definicion] Conjugada transpuesta
> La **[[Matemáticas/Álgebra lineal/Conjugada transpuesta de una matriz|conjugada transpuesta]]** o **adjunta** es
> $$
> A^*=\overline A^{\,T}\in M_{n\times m}(\mathbb C).
> $$

También se denomina **transconjugada**. Cada entrada es el conjugado de la entrada situada en la posición transpuesta:[^7]

$$
(A^*)_{ij}=\overline{a_{ji}}
\qquad\forall i\in\{1,\ldots,n\},\ \forall j\in\{1,\ldots,m\}.
$$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - adjunta
---
> [!note] Pregunta
> Si $A\in M_{m\times n}(\mathbb C)$, ¿qué es su conjugada transpuesta $A^*$ y qué tamaño tiene?
===
> [!important] Respuesta
> $A^*=\overline A^{\,T}\in M_{n\times m}(\mathbb C)$; intercambia índices y conjuga entradas, por lo que $(A^*)_{ij}=\overline{a_{ji}}$.
```

### Ejemplo — Conjugar y después transponer

> [!ejemplo] Adjunta de la matriz anterior
> $$
> C^*=\begin{pmatrix}
> 1-i&3+i\\
> 2&0\\
> i&-4i
> \end{pmatrix}_{3\times2}.
> $$
> La entrada $(1,2)$ de $C^*$ es $\overline{c_{21}}=3+i$: se toma la posición transpuesta y además se conjuga.

> [!recuerda] Caso real
> Si $A$ tiene solo entradas reales, $\overline A=A$ y, por tanto, ==$A^*=A^T$==. Esta es la razón de que «hermítica» y «simétrica» coincidan para matrices reales.[^7]

### Conjugar dos veces

#### Proposición y propiedad

Para $A\in M_{m\times n}(\mathbb C)$:[^7]

> [!formula] Propiedad
> $$
> \boxed{\overline{\overline A}=A}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> La conjugación conserva el tamaño. Fijemos $1\le i\le m$ y $1\le j\le n$: al aplicar la definición dos veces,
>
> $$
> (\overline{\overline A})_{ij}=\overline{\overline{a_{ij}}}.
> $$
>
> La doble conjugación de un número complejo devuelve el número original. Por eso,
>
> $$
> (\overline{\overline A})_{ij}=a_{ij}.
> $$
>
> La igualdad se cumple en cada posición del tamaño común, luego $\overline{\overline A}=A$.[^26]
```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - adjunta
---
> [!note] Pregunta
> Si $A\in M_{m\times n}(\mathbb C)$, ¿qué le ocurre al conjugarla dos veces?
===
> [!important] Respuesta
> Se recupera la matriz original: $\overline{\overline A}=A$.
```

### Conjugada de una suma

#### Proposición y propiedad

Si $A,B\in M_{m\times n}(\mathbb C)$, entonces:[^7]

> [!formula] Propiedad
> $$
> \boxed{\overline{A+B}=\overline A+\overline B}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Ambos lados tienen tamaño $m\times n$. Fijemos una posición $(i,j)$ dentro de esos rangos. Conjugar la matriz significa conjugar su entrada; la entrada de $A+B$ es la suma de las correspondientes:
>
> $$
> (\overline{A+B})_{ij}=\overline{(A+B)_{ij}}=\overline{a_{ij}+b_{ij}}.
> $$
>
> En el lado derecho, la suma de las matrices conjugadas produce
>
> $$
> (\overline A+\overline B)_{ij}=(\overline A)_{ij}+(\overline B)_{ij}
> =\overline{a_{ij}}+\overline{b_{ij}}.
> $$
>
> La conjugación de escalares distribuye sobre la suma: $\overline{a_{ij}+b_{ij}}=\overline{a_{ij}}+\overline{b_{ij}}$. Así, las entradas coinciden en cualquier posición y $\overline{A+B}=\overline A+\overline B$.[^26]
```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - conjugación
---
> [!note] Pregunta
> Si $A,B\in M_{m\times n}(\mathbb C)$, ¿cómo se conjuga su suma?
===
> [!important] Respuesta
> Conjugando cada sumando: $\overline{A+B}=\overline A+\overline B$.
```

### Conjugada de un producto por escalar

#### Proposición y propiedad

Para $\alpha\in\mathbb C$ y $A\in M_{m\times n}(\mathbb C)$:[^7]

> [!formula] Propiedad
> $$
> \boxed{\overline{\alpha A}=\overline\alpha\,\overline A}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Los dos lados miden $m\times n$. Para una posición cualquiera $(i,j)$, la entrada de $\alpha A$ es $\alpha a_{ij}$; al conjugar la matriz,
>
> $$
> (\overline{\alpha A})_{ij}=\overline{(\alpha A)_{ij}}=\overline{\alpha a_{ij}}.
> $$
>
> En el lado derecho, la entrada conjugada es $\overline{a_{ij}}$, así que
>
> $$
> (\overline\alpha\,\overline A)_{ij}=\overline\alpha\,(\overline A)_{ij}
> =\overline\alpha\,\overline{a_{ij}}.
> $$
>
> La ley escalar $\overline{zw}=\overline z\,\overline w$ da $\overline{\alpha a_{ij}}=\overline\alpha\,\overline{a_{ij}}$. Las entradas coinciden para todo $(i,j)$; por eso $\overline{\alpha A}=\overline\alpha\,\overline A$.[^26]
```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - conjugación
---
> [!note] Pregunta
> Si $\alpha\in\mathbb C$ y $A\in M_{m\times n}(\mathbb C)$, ¿cómo cambia el escalar al conjugar $\alpha A$?
===
> [!important] Respuesta
> También se conjuga: $\overline{\alpha A}=\overline\alpha\,\overline A$.
```

### Conjugada de un producto matricial

#### Proposición y propiedad

Si $A\in M_{m\times n}(\mathbb C)$ y $B\in M_{n\times p}(\mathbb C)$, entonces:[^7]

> [!formula] Propiedad
> $$
> \boxed{\overline{AB}=\overline A\,\overline B}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Los productos $AB$ y $\overline A\,\overline B$ están definidos y tienen tamaño $m\times p$. Fijemos $1\le i\le m$ y $1\le j\le p$. El índice $k$ recorrerá las $n$ posiciones interiores, desde $1$ hasta $n$.
>
> La entrada del producto es una suma finita; al conjugarla,
>
> $$
> (\overline{AB})_{ij}=\overline{(AB)_{ij}}
> =\overline{\sum_{k=1}^{n}a_{ik}b_{kj}}.
> $$
>
> La conjugación respeta tanto sumas como productos de escalares complejos:
>
> $$
> (\overline{AB})_{ij}=\sum_{k=1}^{n}\overline{a_{ik}b_{kj}}
> =\sum_{k=1}^{n}\overline{a_{ik}}\,\overline{b_{kj}}.
> $$
>
> Como $(\overline A)_{ik}=\overline{a_{ik}}$ y $(\overline B)_{kj}=\overline{b_{kj}}$, el sumatorio resultante es la entrada $(i,j)$ de $\overline A\,\overline B$. Esto vale en cada posición, así que $\overline{AB}=\overline A\,\overline B$. La conjugación sola conserva el orden de los factores.[^26]
```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - conjugación
---
> [!note] Pregunta
> Si $A\in M_{m\times n}(\mathbb C)$ y $B\in M_{n\times p}(\mathbb C)$, ¿cómo se conjuga el producto $AB$?
===
> [!important] Respuesta
> Se conjuga cada matriz y se conserva el orden: $\overline{AB}=\overline A\,\overline B$.
```

### Conjugación y transposición

#### Proposición y propiedad

Para $A\in M_{m\times n}(\mathbb C)$:[^7]

> [!formula] Propiedad
> $$
> \boxed{\overline{A^T}=(\overline A)^T}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Como $A$ mide $m\times n$, tanto $\overline{A^T}$ como $(\overline A)^T$ miden $n\times m$. Fijemos $1\le i\le n$ y $1\le j\le m$.
>
> En el lado izquierdo, la transpuesta selecciona la entrada $(j,i)$ y luego se conjuga:
>
> $$
> (\overline{A^T})_{ij}=\overline{(A^T)_{ij}}=\overline{a_{ji}}.
> $$
>
> En el lado derecho, la transpuesta selecciona esa misma posición de $\overline A$:
>
> $$
> ((\overline A)^T)_{ij}=(\overline A)_{ji}=\overline{a_{ji}}.
> $$
>
> Las entradas coinciden para cada $i,j$ de esos rangos; por tanto, $\overline{A^T}=(\overline A)^T$.[^26]
```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - conjugación
---
> [!note] Pregunta
> Si $A\in M_{m\times n}(\mathbb C)$, ¿conmutan la conjugación de entradas y la transposición?
===
> [!important] Respuesta
> Sí: $\overline{A^T}=(\overline A)^T$.
```

### Adjunta de un producto

#### Proposición y propiedad

Sean $A\in M_{m\times n}(\mathbb C)$ y $B\in M_{n\times p}(\mathbb C)$.

> [!formula] Propiedad
> $$
> \boxed{(AB)^*=B^*A^*}
> $$

Ambos lados miden $p\times m$.[^7]

#### Demostración

> [!demostracion] Demostración · Conjugar y transponer
> Por definición, primero se conjuga el producto y después se transpone. La propiedad ya demostrada para la conjugada de un producto permite escribir
> $$
> (AB)^*=(\overline{AB})^T=(\overline A\,\overline B)^T.
> $$
> Ahora se aplica la propiedad de la transpuesta de un producto: ella invierte el orden de los factores.
> $$
> (\overline A\,\overline B)^T=(\overline B)^T(\overline A)^T=B^*A^*.
> $$
> Por tanto, el cambio de orden procede de la transposición; la conjugación por sí sola conserva el orden.[^33]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - adjunta
---
> [!note] Pregunta
> Si $A\in M_{m\times n}(\mathbb C)$ y $B\in M_{n\times p}(\mathbb C)$, ¿cómo se transforma el orden al tomar la adjunta de $AB$?
===
> [!important] Respuesta
> Se invierte: $(AB)^*=B^*A^*$.
```

### Adjunta de un múltiplo escalar

#### Proposición y propiedad

Si $\alpha\in\mathbb C$ y $A\in M_{m\times n}(\mathbb C)$, entonces:[^7]

> [!formula] Propiedad
> $$
> \boxed{(\alpha A)^*=\overline\alpha\,A^*}
> $$

#### Demostración

> [!demostracion] Demostración · Comparación de entradas
> Ambos lados tienen tamaño $n\times m$. Fijemos $1\le i\le n$ y $1\le j\le m$. Por definición de conjugada transpuesta, la entrada $(i,j)$ del lado izquierdo es
>
> $$
> ((\alpha A)^*)_{ij}=\overline{(\alpha A)_{ji}}=\overline{\alpha a_{ji}}.
> $$
>
> La ley escalar de conjugación del producto da
>
> $$
> \overline{\alpha a_{ji}}=\overline\alpha\,\overline{a_{ji}}.
> $$
>
> Como $(A^*)_{ij}=\overline{a_{ji}}$, la entrada coincide con $\overline\alpha(A^*)_{ij}$. Esto vale en cada posición; por tanto, $(\alpha A)^*=\overline\alpha A^*$.[^32]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - adjunta
---
> [!note] Pregunta
> Si $\alpha\in\mathbb C$ y $A\in M_{m\times n}(\mathbb C)$, ¿qué factor aparece al tomar la adjunta de $\alpha A$?
===
> [!important] Respuesta
> El escalar se conjuga: $(\alpha A)^*=\overline\alpha\,A^*$.
```

### Traza de una matriz

Sea $A=(a_{ij})\in M_n(K)$.

> [!definicion] Traza
> La **[[Matemáticas/Álgebra lineal/Traza de una matriz|traza]]** es la suma de las entradas de la diagonal principal:
> $$
> \operatorname{tr}(A)=\sum_{i=1}^{n}a_{ii}\in K.
> $$

El resultado es un escalar de $K$. La traza se define para matrices cuadradas.[^7]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - traza
---
> [!note] Pregunta
> ¿Cómo se define la traza de una matriz cuadrada $A\in M_n(K)$?
===
> [!important] Respuesta
> Es la suma de sus entradas diagonales: $\operatorname{tr}(A)=\sum_{i=1}^{n}a_{ii}$.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - traza
---
> [!note] Pregunta
> Si $I_n\in M_n(K)$ con $K=\mathbb R$ o $\mathbb C$, ¿cuál es su traza?
===
> [!important] Respuesta
> $\operatorname{tr}(I_n)=n1_K$, que en $\mathbb R$ o $\mathbb C$ se identifica con $n$, porque hay $n$ entradas diagonales iguales a $1_K$.
```

### Ejemplo — Leer la diagonal antes de sumar

> [!ejemplo] Traza de una matriz de orden tres
> $$
> T=\begin{pmatrix}
> 3&2&-1\\
> 4&0&1\\
> -3&6&-8
> \end{pmatrix}.
> $$
> La diagonal es $(3,0,-8)$, de modo que $\operatorname{tr}(T)=3+0-8=-5$. Las otras seis entradas no intervienen.[^7]

En $I_n$, las $n$ entradas diagonales valen uno. Por tanto, $\operatorname{tr}(I_n)=n\cdot1_K$, que se escribe simplemente $n$ para $K=\mathbb R$ o $\mathbb C$.

### Traza de la transpuesta

#### Proposición y propiedad

Para $A\in M_n(K)$:[^7]

> [!formula] Propiedad
> $$
> \boxed{\operatorname{tr}(A^T)=\operatorname{tr}(A)}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> La transpuesta sigue siendo cuadrada de orden $n$. Para cada $i$ entre $1$ y $n$, su entrada diagonal es la misma que la de $A$:
>
> $$
> (A^T)_{ii}=a_{ii}.
> $$
>
> Al sumar esas entradas,
>
> $$
> \operatorname{tr}(A^T)=\sum_{i=1}^{n}(A^T)_{ii}
> =\sum_{i=1}^{n}a_{ii}=\operatorname{tr}(A).
> $$
> La igualdad de las sumas diagonales da la conclusión.[^27]
```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - traza
---
> [!note] Pregunta
> Si $A\in M_n(K)$, ¿cómo se relaciona $\operatorname{tr}(A)$ con $\operatorname{tr}(A^T)$?
===
> [!important] Respuesta
> No cambia: $\operatorname{tr}(A^T)=\operatorname{tr}(A)$.
```

### Traza de una suma

#### Proposición y propiedad

Para $A,B\in M_n(K)$:[^7]

> [!formula] Propiedad
> $$
> \boxed{\operatorname{tr}(A+B)=\operatorname{tr}(A)+\operatorname{tr}(B)}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sean $A$ y $B$ cuadradas de orden $n$. La suma también lo es, y su traza se obtiene sumando sus entradas diagonales:
>
> $$
> \operatorname{tr}(A+B)=\sum_{i=1}^{n}(A+B)_{ii}.
> $$
>
> Cada entrada diagonal de $A+B$ es $a_{ii}+b_{ii}$. Por eso,
>
> $$
> \operatorname{tr}(A+B)=\sum_{i=1}^{n}(a_{ii}+b_{ii}).
> $$
>
> La asociatividad y la conmutatividad de la suma de escalares permiten reagrupar los términos: cada $a_{ii}$ y cada $b_{ii}$ aparece una vez. Así,
>
> $$
> \sum_{i=1}^{n}(a_{ii}+b_{ii})
> =\left(\sum_{i=1}^{n}a_{ii}\right)+\left(\sum_{i=1}^{n}b_{ii}\right).
> $$
>
> Los dos sumatorios separados son, por definición, $\operatorname{tr}(A)$ y $\operatorname{tr}(B)$. Concluimos que $\operatorname{tr}(A+B)=\operatorname{tr}(A)+\operatorname{tr}(B)$.[^27]
```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - traza
---
> [!note] Pregunta
> Si $A,B\in M_n(K)$, ¿qué ley de suma satisface la traza?
===
> [!important] Respuesta
> Es aditiva: $\operatorname{tr}(A+B)=\operatorname{tr}(A)+\operatorname{tr}(B)$.
```

### Traza de un múltiplo escalar

#### Proposición y propiedad

Para $\lambda\in K$ y $A\in M_n(K)$:[^7]

> [!formula] Propiedad
> $$
> \boxed{\operatorname{tr}(\lambda A)=\lambda\operatorname{tr}(A)}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> La matriz $\lambda A$ sigue siendo cuadrada de orden $n$, y su entrada diagonal $i$ es $\lambda a_{ii}$. Desde la definición,
>
> $$
> \operatorname{tr}(\lambda A)=\sum_{i=1}^{n}(\lambda A)_{ii}.
> $$
>
> Al sustituir cada entrada por su valor,
>
> $$
> \operatorname{tr}(\lambda A)=\sum_{i=1}^{n}\lambda a_{ii}.
> $$
>
> El escalar $\lambda$ multiplica cada sumando. Por distributividad, puede factorizarse fuera de la suma:
>
> $$
> \operatorname{tr}(\lambda A)=\lambda\sum_{i=1}^{n}a_{ii}
> =\lambda\operatorname{tr}(A).
> $$
> Por tanto, se obtiene la igualdad anunciada.[^27]
```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - traza
---
> [!note] Pregunta
> Si $\lambda\in K$ y $A\in M_n(K)$, ¿cómo se comporta la traza respecto de $\lambda A$?
===
> [!important] Respuesta
> $\operatorname{tr}(\lambda A)=\lambda\operatorname{tr}(A)$.
```

### Igualdad de las trazas de $AB$ y $BA$

#### Proposición y propiedad

Sean $A\in M_{m\times n}(K)$ y $B\in M_{n\times m}(K)$. Los productos $AB$ y $BA$ son cuadrados, de órdenes $m$ y $n$, respectivamente.

Aunque los productos puedan tener tamaños distintos, sus trazas coinciden:[^7]

> [!formula] Propiedad
> $$
> \boxed{\operatorname{tr}(AB)=\operatorname{tr}(BA)}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> El producto $AB$ tiene tamaño $m\times m$ y $BA$ tiene tamaño $n\times n$, por lo que ambas trazas están definidas. Primero escribimos la traza de $AB$ como suma de sus entradas diagonales:
>
> $$
> \operatorname{tr}(AB)=\sum_{i=1}^{m}(AB)_{ii}.
> $$
>
> La definición del producto matricial expresa cada entrada diagonal como suma sobre el índice interior $k$, que recorre $1,\ldots,n$:
>
> $$
> \operatorname{tr}(AB)=\sum_{i=1}^{m}\sum_{k=1}^{n}a_{ik}b_{ki}.
> $$
>
> Ahora calculamos la traza de $BA$ por separado. Su diagonal tiene $n$ entradas; para cada una, el índice interior $i$ recorre $1,\ldots,m$:
>
> $$
> \operatorname{tr}(BA)=\sum_{k=1}^{n}(BA)_{kk}
> =\sum_{k=1}^{n}\sum_{i=1}^{m}b_{ki}a_{ik}.
> $$
>
> Ambas expresiones recorren una vez cada uno de los $mn$ pares $(i,k)$. Podemos cambiar el orden de una suma finita; además, los factores $a_{ik}$ y $b_{ki}$ son escalares y conmutan. Así, los sumandos de una traza coinciden con los de la otra:
>
> $$
> \operatorname{tr}(AB)=\operatorname{tr}(BA).
> $$
>
> La igualdad compara las sumas diagonales, no las matrices: en general, $AB$ y $BA$ pueden ser distintas.[^28]
>
```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - traza
---
> [!note] Pregunta
> Si $A$ es $m\times n$ y $B$ es $n\times m$, ¿qué relación existe entre $\operatorname{tr}(AB)$ y $\operatorname{tr}(BA)$?
===
> [!important] Respuesta
> Son iguales: $\operatorname{tr}(AB)=\operatorname{tr}(BA)$, aunque $AB$ y $BA$ tengan órdenes distintos.
```

## Sistemas lineales en forma matricial

En un sistema lineal, los coeficientes de cada ecuación forman una fila y los de cada incógnita, una columna. Esta organización permite expresar todas las ecuaciones mediante un producto matricial.

### Ecuación $A\mathbf{x}=\mathbf{b}$

En un sistema de $m$ ecuaciones lineales con $n$ incógnitas:

- $A\in M_{m\times n}(K)$ es la matriz de coeficientes.
- $\mathbf{x}\in M_{n\times1}(K)$ es la columna de incógnitas.
- $\mathbf{b}\in M_{m\times1}(K)$ contiene los términos independientes.

> [!definicion] Forma matricial de un sistema
> El sistema se expresa mediante la ecuación matricial
> $$
> A\mathbf{x}=\mathbf{b}.
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - sistemas
---
> [!note] Pregunta
> ¿Qué representa cada elemento de $A\mathbf{x}=\mathbf{b}$ para un sistema de $m$ ecuaciones y $n$ incógnitas?
===
> [!important] Respuesta
> $A\in M_{m\times n}(K)$ contiene coeficientes, $\mathbf{x}\in K^n$ las incógnitas y $\mathbf{b}\in K^m$ los términos independientes.
```

La fila $i$ representa la ecuación $a_{i1}x_1+\cdots+a_{in}x_n=b_i$. El producto $A\mathbf{x}$ es una columna de $m$ componentes, una por ecuación, igual que $\mathbf b$.

### Ejemplo — Un sistema de dos ecuaciones

El sistema

$$
\begin{cases}
2x-y=3,\\
x+4y=1
\end{cases}
\quad\Longleftrightarrow\quad
\begin{pmatrix}2&-1\\1&4\end{pmatrix}
\begin{pmatrix}x\\y\end{pmatrix}
=\begin{pmatrix}3\\1\end{pmatrix}.
$$

### Matriz ampliada

> [!definicion] Matriz ampliada
> La [[Matemáticas/Álgebra lineal/Matriz ampliada|matriz ampliada]] $[A\mid\mathbf b]$ se obtiene al añadir la columna de términos independientes a la derecha de $A$.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - sistemas
---
> [!note] Pregunta
> Si $A\in M_{m\times n}(K)$ y $\mathbf b\in K^m$, ¿qué contiene la matriz ampliada $[A\mid\mathbf b]$?
===
> [!important] Respuesta
> La matriz de coeficientes $A$ con la columna de términos independientes $\mathbf b$ añadida a su derecha.
```

### Ejemplo — Añadir la columna de términos independientes

Para el sistema anterior, la matriz ampliada es

$$
[A\mid\mathbf b]=
\left[\begin{array}{cc|c}
2&-1&3\\
1&4&1
\end{array}\right].
$$

La matriz ampliada reúne los coeficientes y los términos independientes del sistema. En la [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales#5. Eliminación de Gauss|eliminación de Gauss]], las operaciones se realizan sobre sus filas.

## Condiciones de validez y errores frecuentes

- La suma y la resta requieren dos matrices del mismo tamaño.
- El producto requiere que coincidan las dimensiones interiores; las exteriores dan el tamaño del resultado.
- En matrices complejas, $A^T$ intercambia índices, $\overline A$ conjuga cada entrada y $A^*=\overline A^{\,T}$ realiza ambas operaciones.
- En $A\mathbf{x}=\mathbf{b}$, hay una columna de $A$ por incógnita y una fila por ecuación.


## 📚 Fuentes

### Material base aportado

- [FCUL, aula 2](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-aula2-VectMatrizes-impressao.pdf). Para el aula 3, se consultó la copia real indicada en la referencia [^8]. Material docente FCUL 2026/27 sobre vectores y operaciones matriciales.
- FCUL, aula 4, diapositivas 2–12.[^7]

[^1]: [FCUL, *Álgebra Linear e Geometria Analítica*, aula 2 (18/09/2026)](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-aula2-VectMatrizes-impressao.pdf), diapositivas 3–22: vectores coordenados, operaciones, definición de matriz y clases notables.

[^7]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 4, «Matrizes em forma de escada», 23/09/2026. Localizadores: diap. 4, definición de conjugada transpuesta; diap. 8, equivalencia de matrices hermíticas y simétricas en el caso real; diap. 9, propiedades 1–4 (doble transpuesta, transpuesta de suma, escalar y producto); diap. 10, propiedades 1–5 (doble conjugación, conjugada de suma, escalar y producto, y conmutación con transposición); diap. 12, propiedades 1–4 (traza de transpuesta, suma, escalar y productos compatibles). [Copia consultada](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-aula4-FormaEscada-impressao.pdf). Fuente de los enunciados; las demostraciones se apoyan en las referencias académicas locales.

[^8]: FCUL, *Álgebra Linear e Geometria Analítica*, Aula 3, diapositivas 2–13. Localizadores de los enunciados: diap. 4, propiedades 1–4 (conmutatividad, asociatividad, neutro y opuesto de la suma); diap. 6, propiedades 1–5 (asociatividad de escalares, distributividad sobre suma de matrices y de escalares, producto por cero y por menos uno); diap. 11, propiedades 1–6 (asociatividad, dos distributividades, compatibilidad escalar, productos con identidad y productos con matriz nula). Copia consultada (ruta relativa desde esta nota): [ALGA-2026-27-AulasTeo-slides-aula3-Matrizes-impressao.pdf](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-aula3-Matrizes-impressao.pdf).

### Alcance curricular

1. [Faculdade de Ciências, Universidade de Lisboa — programa de Álgebra Linear e Geometria Analítica, 2026/2027](https://fenix.ciencias.ulisboa.pt/courses/algana-847504421686879/programa). Fuente institucional para el alcance de matrices y sistemas sobre $\mathbb R$ y $\mathbb C$; no respalda definiciones ni propiedades matemáticas.

### Ampliación académica

[^2]: [MIT OpenCourseWare, Gilbert Strang — “Multiplication and Inverse Matrices”](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/multiplication-and-inverse-matrices/). Lectura del producto por columnas y como composición.

[^4]: [Al Doerr y Ken Levasseur, *Applied Discrete Structures* — “Special Types of Matrices”](https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Applied_Discrete_Structures_%28Doerr_and_Levasseur%29/05%3A_Introduction_to_Matrix_Algebra/5.02%3A_Special_Types_of_Matrices). Clasificación de matrices especiales.

[^13]: [[Matemáticas/Sistemas numéricos/Números complejos|Números complejos]], apartados «Operaciones en forma binómica» y «Conjugación y módulo», para lectura y notación de $z=x+iy$.

[^14]: University of Manitoba, Math 1220, §3.2.2, Teorema 3.2.2, pruebas de conmutatividad y asociatividad de la suma de matrices. [Sección 3.2.2](https://linearalgebra.math.umanitoba.ca/math1220/section-16.html).

[^15]: University of Manitoba, Math 1220, §3.3, Teorema 3.3.4, pruebas por entradas de las leyes escalares para matrices. [Sección 3.3](https://linearalgebra.math.umanitoba.ca/math1220/section-17.html).

[^16]: Instituto Superior Técnico, *Apontamentos de Álgebra Linear*, §2.6, Teorema 2.6(i), pp.24–25. Prueba explícita de la asociatividad del producto matricial por entradas. [PDF](https://fenix.tecnico.ulisboa.pt/downloadFile/563568428979297/ApontamentosInteg.pdf).

[^17]: Instituto Superior Técnico, *Apontamentos de Álgebra Linear*, §2.18, p.27, Proposición 2.18, primera distributividad y demostración de $A(B+C)=AB+AC$. [PDF](https://fenix.tecnico.ulisboa.pt/downloadFile/563568428979297/ApontamentosInteg.pdf).

[^18]: University of Manitoba, Math 1220, §3.4, Teorema 3.4.7, prueba explícita de la distributividad de la suma en el factor izquierdo del producto. [Sección 3.4](https://linearalgebra.math.umanitoba.ca/math1220/section-18.html).

[^19]: University College London, MATH0007, §2.2, Proposición 2.1, compatibilidad del producto matricial con multiplicación por escalares y demostración. [Matrix multiplication](https://www.homepages.ucl.ac.uk/~ucahmto/0007/_book/2-2-matrix-multiplication.html).

[^20]: University College London, MATH0007, §2.2, Definición 2.6 y Proposición 2.2, identidad multiplicativa y demostración por entradas con la delta de Kronecker. [Matrix multiplication](https://www.homepages.ucl.ac.uk/~ucahmto/0007/_book/2-2-matrix-multiplication.html).

[^21]: University College London, MATH0007, §2.2, Proposición 2.1, productos matriciales con una matriz nula y sus pruebas. [Matrix multiplication](https://www.homepages.ucl.ac.uk/~ucahmto/0007/_book/2-2-matrix-multiplication.html).

[^22]: University of Puget Sound, Robert A. Beezer, *A First Course in Linear Algebra*, §VS, Teorema ZSSM, prueba de $0u=0_V$, particularizada a $B=0_KA$. [Vector Spaces](https://linear.pugetsound.edu/fcla/section-VS.html).

[^25]: University of Manitoba, Math 1220, §3.5, Teorema 3.5.4, pruebas de las propiedades de la transpuesta. [Sección 3.5](https://linearalgebra.math.umanitoba.ca/math1220/section-19.html).

[^26]: University of Puget Sound, Robert A. Beezer, *A First Course in Linear Algebra*, §MO, teoremas CRMA, CRMSM, CCM, MCT y §MM, teorema MMCC; pruebas por entradas de las leyes de conjugación y del producto conjugado. [PDF](https://upload.wikimedia.org/wikipedia/commons/8/8d/A_First_Course_in_Linear_Algebra_for_smartphones.pdf).

[^27]: Universidade da Coruña, *Linear Algebra I*, §2.5, pruebas de la traza de una transpuesta, una suma y un múltiplo escalar. [PDF](https://caminos.udc.es/info/asignaturas/grado_tecic/101/AL1/pdfs/THEORY2-1.pdf).

[^28]: University of Manitoba, Math 1220, §3.5, Teorema 3.5.6, prueba de $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ para tamaños rectangulares compatibles. [Sección 3.5](https://linearalgebra.math.umanitoba.ca/math1220/section-19.html).

[^24]: Universidad de Tikrit, *Chapter One: Matrices*, “Properties of the Addition of Matrices”, prueba (3), p. impresa 9 (PDF p. 16), prueba de las identidades con la matriz nula. [PDF](https://cedt.tu.edu.iq/images/1111/rym/sws/d.%20zynb%20ly%20jfr%20mdmj.pdf).

[^30]: Robert A. Beezer, *A First Course in Linear Algebra*, §CNO, pruebas de conjugación compleja y sus leyes para sumas, productos y doble conjugación. [Operaciones con números complejos](https://linear.pugetsound.edu/jsmath/0222/fcla-jsmath-2.22li69.html).

[^29]: Universidad de Tikrit, *Chapter One: Matrices*, “Multiplication of Matrix by Scalar”, proposición y prueba, p. impresa 10 (PDF p. 17), prueba del opuesto aditivo de la matriz por entradas. [PDF](https://cedt.tu.edu.iq/images/1111/rym/sws/d.%20zynb%20ly%20jfr%20mdmj.pdf).

[^23]: University of Puget Sound, Robert A. Beezer, *A First Course in Linear Algebra*, §VS, Teorema AISM, demostración de $-u=(-1)u$, particularizada aquí a $A$. [Vector Spaces](https://linear.pugetsound.edu/fcla/section-VS.html).

[^5]: [Jim Hefferon, *Linear Algebra*](https://hefferon.net/linearalgebra/). Referencia de texto para definición y álgebra elemental de matrices.

[^6]: [W. Keith Nicholson, *Linear Algebra with Applications* — “Complex Matrices”](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_%28Nicholson%29/08%3A_Orthogonality/8.07%3A_Complex_Matrices). Conjugada transpuesta y matrices hermíticas y antihermíticas.

[^31]: S. J. Cowley, *Vectors and Matrices*, §3.6.5, ecuaciones (3.43a–b), pp. 52–53, observación de que las entradas diagonales de una matriz antisimétrica son nulas. [PDF](https://www.damtp.cam.ac.uk/user/sjc1/teaching/VandM/notes.pdf).

[^32]: Nicholas A. Loehr, *Advanced Linear Algebra*, §4.4, p. 78, prueba por entradas de $(cA)^*=\overline c A^*$. La demostración se consultó en el texto indexado; el enlace editorial corresponde a la segunda edición. [Routledge](https://www.routledge.com/Advanced-Linear-Algebra/Loehr/p/book/9781032765723).

[^33]: Bruce Ikenaga, “Unitary and Hermitian Matrices”, proposición (c) y prueba de la relación entre la adjunta de un producto y las adjuntas de sus factores. El argumento se reordena usando la conmutación entre conjugación y transposición demostrada arriba. [Millersville University](https://sites.millersville.edu/bikenaga/linear-algebra/unitary-and-hermitian-matrices/unitary-and-hermitian-matrices.html).

[^9]: W. Keith Nicholson, *Linear Algebra with Applications*, §2.1, «Matrix Addition, Scalar Multiplication, and Transposition», Theorem 2.1.1 y demostración. [LibreTexts](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_(Nicholson)/02:_Matrix_Algebra/2.01:_Matrix_Addition_Scalar_Multiplication_and_Transposition). Contraste académico para las leyes de suma y producto por escalar.

[^10]: [[Matemáticas/Estructuras algebraicas/Cuerpos|Cuerpos]], §§1–2: leyes de suma, producto, distributividad, neutros y opuestos en $K=\mathbb R$ o $\mathbb C$.

[^11]: W. Keith Nicholson, *Linear Algebra with Applications*, §2.3, «Matrix Multiplication», Theorem 2.3.3 y demostración. [LibreTexts](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_(Nicholson)/02:_Matrix_Algebra/2.03:_Matrix_Multiplication). Contraste académico para las propiedades del producto matricial.

[^12]: [[Matemáticas/Estructuras algebraicas/Cuerpos#Producto por cero|Cuerpos, producto por cero]]; la igualdad $0a=0$ se deriva allí de distributividad y cancelación aditiva.

[^34]: John S. Alin y Colin L. Starr, *Undergraduate Matrix Theory and Linear Algebra*, 15/01/2018, §1.3, Teorema 1.3.2(b), p. 18 (página 22 del PDF). [Willamette University](https://people.willamette.edu/~cstarr/math253/0LinAlgMain-18.pdf). La demostración publicada desarrolla la suma por entradas y aplica la asociatividad de los escalares. Adaptación al español y a la notación del curso, con las justificaciones separadas. Enunciado TPC: FCUL, aula 3, diap. 4, propiedad 2.[^8]

[^35]: University of Manitoba, *Math 1220*, §3.3, «Scalar Multiplication», ejercicio 3, solución por entradas de $0A=0$. [Texto y solución](https://linearalgebra.math.umanitoba.ca/math1220/section-17.html). Adaptación a la notación $0_K$ para el cero escalar y $0_{m\times n}$ para la matriz nula, sobre $K=\mathbb R$ o $\mathbb C$.

[^36]: Isaiah Lankham, Bruno Nachtergaele y Anne Schilling, *Linear Algebra*, §4.2, «Elementary Properties of Vector Spaces», proposiciones 4.2.5 y 4.2.2: producto por $-1$ y unicidad del inverso aditivo. [UC Davis / LibreTexts](https://math.libretexts.org/Bookshelves/Linear_Algebra/Book%3A_Linear_Algebra_%28Schilling_Nachtergaele_and_Lankham%29/04%3A_Vector_spaces/4.02%3A_Elementary_properties_of_vector_spaces). Adaptación al caso matricial usando las leyes de suma y producto por escalar demostradas previamente; no se presupone la estructura de espacio vectorial.

[^37]: Dan Margalit y Joseph Rabinoff, *Interactive Linear Algebra*, §3.4, «Matrix Multiplication», apartados 3.4.1–3.4.3: compatibilidad de dominios, regla fila-columna y representación de la composición mediante el producto de las matrices estándar. [Georgia Institute of Technology](https://textbooks.math.gatech.edu/ila/matrix-multiplication.html). El desarrollo sobre $K$ y la formulación en bases compatibles adaptan la explicación «Producto matricial: definición formal» aportada por el usuario; el texto de contraste presenta las transformaciones sobre $\mathbb R$.

## 🧑‍🏫 Prompt para tutor conversacional

Ayuda a estudiar matrices en un curso universitario introductorio de Física. Comprueba que el estudiante interpreta $a_{ij}$ y las dimensiones, clasifica matrices notables reales y complejas, verifica compatibilidad antes de sumar o multiplicar, y justifica por qué el producto no se puede reordenar. Pídele que justifique por entradas las leyes de suma, producto por escalar, producto matricial, transpuesta, conjugación compleja y traza; que distinga $A^T$ de $A^*$; y que traduzca un sistema a $A\mathbf{x}=\mathbf{b}$ y $[A\mid\mathbf b]$. No generes ejercicios nuevos: diagnostica cada respuesta, explica el error conceptual con precisión y usa ejemplos funcionales cortos.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
