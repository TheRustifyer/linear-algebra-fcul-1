---
title: Matrices
aliases: []
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
relacionado:
  - "[[Matemáticas/Álgebra lineal/Matrices|Matrices]]"
fsrs_goal: Interpretar entradas y dimensiones, clasificar matrices, calcular transpuestas, conjugadas, adjuntas y trazas, y justificar por componentes las condiciones de simetría y hermiticidad.
tags:
  - matematicas
  - algebra-lineal
  - matrices
  - fcul
  - grado-fisica
  - curricular
---

# Matrices

Las operaciones de suma y producto se desarrollan en [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones|02 · Operaciones]].

## De los pares ordenados a los vectores coordenados

Para describir un desplazamiento en el plano, necesitamos indicar cuánto cambia la posición en cada eje. Si avanzamos tres unidades a la derecha y dos hacia arriba, reunimos ambos cambios en el par $(3,2)$.

Podemos dibujarlo mediante una flecha desde el origen hasta el punto de [[Matemáticas/Geometría/Geometría analítica/Coordenada cartesiana|coordenadas]] $(3,2)$. La flecha representa un [[Matemáticas/Álgebra lineal/Vectores|vector geométrico]]; sus [[Matemáticas/Geometría/Vectores/Componentes cartesianas de un vector|componentes cartesianas]] son los cambios de posición en los ejes horizontal y vertical.[^1]

![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/01-desplazamiento-cartesiano.svg|*Desde el origen hasta (3,2): tres unidades en horizontal y dos en vertical. La flecha diagonal representa el vector; los dos ejes tienen la misma escala.*|563]]

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/01-desplazamiento-cartesiano.excalidraw|Abrir el dibujo editable]]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
  - componentes-cartesianas
---
> [!note] Pregunta
> ¿Qué representan las dos componentes cartesianas de un vector del plano?
===
> [!important] Respuesta
> Los cambios de posición en los ejes horizontal y vertical, respectivamente.
```

### Tuplas de $n$ componentes: $K^n$

El par $(3,2)$ tiene dos componentes reales. En la notación $\mathbb R^2$, $\mathbb R$ indica que trabajamos con el [[Cuerpos|cuerpo]] de los números reales y el exponente $2$ indica el número de componentes (o grados de libertad) que podemos fijar independientemente para determinar un vector del plano.

Escribiremos $K^n$ cuando dejemos esos dos datos sin concretar: $K$ será el conjunto de escalares y $n$, el número de componentes.

> [!note]
> En lo que sigue, $K=\mathbb R$ o $K=\mathbb C$ y $\mathbb N=\{1,2,3,\ldots\}$.

### Vectores coordenados

> [!definicion] Vector coordenado y notación $K^n$
> Un **vector coordenado** es una tupla ordenada de $n$ escalares de $K$:
>
> $$
> u=(x_1,\ldots,x_n),\qquad
> x_i\in K\quad\forall i\in\{1,\ldots,n\}.
> $$
>
> El conjunto de todas estas tuplas se denota $K^n$.[^1]

La componente $x_i$ ocupa la posición $i$. Así, $(3,2)\in\mathbb R^2$ y $(1+i,2)\in\mathbb C^2$. En el segundo ejemplo, $1+i$ es **un escalar complejo**; la tupla $(1+i,\ 2)$ es **un vector con dos componentes**. El número de componentes se determina por cada valor coma-separado que se encuentre dentro de la tupla.

> [!ejemplo]
> Cuando $K=\mathbb R$ y $n=2$, ==$K^n=\mathbb R^2$==.
>
> Se trata de la misma notación particularizada al caso de dos coordenadas reales.

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

> [!recuerda] Coordenadas reales como caso complejo
> Todo número real es un complejo con parte imaginaria cero. Por eso $\mathbb R\subseteq\mathbb C$ y, componente a componente, $\mathbb R^n\subseteq\mathbb C^n$.[^vectores]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Por qué puede considerarse un vector de $\mathbb R^n$ como un vector de $\mathbb C^n$?
===
> [!important] Respuesta
> Porque cada componente real es también un número complejo con parte imaginaria cero. Así, $\mathbb R^n\subseteq\mathbb C^n$.
```

### Igualdad de vectores coordenados

> [!definicion] Igualdad de vectores coordenados
> Dos tuplas son iguales cuando tienen el mismo número de componentes y coinciden en cada posición. Para $u=(x_1,\ldots,x_n)$ y $v=(y_1,\ldots,y_p)$,
>
> $$
> u=v\iff n=p\ \text{y}\ x_i=y_i
> \quad\forall i\in\{1,\ldots,n\}.
> $$
> [^1]

Por ejemplo, $a = (3,2)\ne \ (2,3) = b$: ambas tuplas contienen a los mismos escalares, pero estos ocupan posiciones distintas. Como se observa, $a_1 = 3$ y $b_1 = 2$, donde $3 \ne 2$ lo cuál es condición suficiente para determinar que ambos vectores son distintos.

![[01-example-different-vecs-graph.svg|Gráficamente se puede observar a simple vista que el orden de los mismos valores escalares en la 2-tupla produce diferentes vectores|300]]

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

Supongamos que ahora, escribimos varias listas de igual longitud una debajo de otra. ¿Cómo hacemos para identificar unívocamente cada elemento escrito?

Para localizar un número necesitamos saber en qué fila está y qué posición ocupa dentro de ella. Esas dos posiciones serán los índices de una [[Matemáticas/Álgebra lineal/Matrices|matriz]].[^1]

### Definición de matriz

Sean $m,n\in\mathbb N$.

> [!definicion] Matriz de tamaño $m\times n$
> Una matriz sobre $K$ es una disposición rectangular de escalares con $m$ filas y $n$ columnas:
>
> $$
> A=(a_{ij})_{m\times n}=
> \begin{pmatrix}
> a_{11}&\cdots&a_{1n}\\
> \vdots&\ddots&\vdots\\
> a_{m1}&\cdots&a_{mn}
> \end{pmatrix}.
> $$
>
> Se escribe $A\in M_{m\times n}(K)$ para indicar su tamaño y el conjunto al que pertenecen sus entradas.[^1][^5]

La entrada $a_{ij}$ está en la fila $i$ y la columna $j$, donde $1\leq i\leq m$ y $1\leq j\leq n$. El primer índice se lee siempre como fila.

#### Ejemplo — Localizar una entrada

$$
A=\begin{pmatrix}
2&-1&0\\
4&3&7\\
5&0&-2
\end{pmatrix}\in M_{3\times3}(\mathbb R).
$$

Para encontrar $a_{23}$, tomamos la segunda fila, $(4,3,7)$, y su tercera entrada: $a_{23}=7$. Si intercambiamos los índices, llegamos a otra posición: $a_{32}=0$. La matriz tiene tres filas, tres columnas y nueve entradas.

![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/02-indices-y-diagonal.svg|*La entrada a₂₃ ocupa la segunda fila y la tercera columna. En verde, las posiciones de la diagonal principal.*]]

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/02-indices-y-diagonal.excalidraw|Abrir el dibujo editable]]

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

### Igualdad de matrices

> [!definicion] Igualdad de matrices
> Dos matrices son iguales si tienen el mismo tamaño y sus entradas correspondientes son iguales. Para $A=(a_{ij}),B=(b_{ij})\in M_{m\times n}(K)$,
>
> $$
> A=B\iff a_{ij}=b_{ij}
> \quad\forall i\in\{1,\ldots,m\},\ \forall j\in\{1,\ldots,n\}.
> $$
> [^5]

Una matriz $2\times3$ y otra $3\times2$ tienen seis entradas cada una, pero no pueden ser iguales. Sus filas y columnas no ocupan las mismas posiciones.

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
> Una matriz $A\in M_{m\times n}(K)$ es **[[Matemáticas/Álgebra lineal/Matrices#Entradas y tamaño|rectangular no cuadrada]]** cuando $m\ne n$.[^1]

#### Ejemplo — Tres filas y dos columnas

$$
A=\begin{pmatrix}
1&6\\
0&-3\\
2&0
\end{pmatrix}\in M_{3\times2}(K).
$$

Contamos primero las tres filas y después las dos columnas. Una matriz $2\times3$ también tendría seis entradas, dispuestas en dos filas de tres números.

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

### Matriz cuadrada

> [!definicion] Matriz cuadrada
> Una matriz es **[[Matemáticas/Álgebra lineal/Matrices#Entradas y tamaño|cuadrada de orden $n$]]** cuando tiene $n$ filas y $n$ columnas. Se escribe
>
> $$
> A\in M_n(K)=M_{n\times n}(K).
> $$
> [^1]

La matriz $A$ del ejemplo «Localizar una entrada» es cuadrada de orden tres: tiene tres filas y tres columnas, con nueve entradas en total. ==El orden es $3$, no $9$==.

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

### Diagonal principal

> [!definicion] Diagonal principal
> La [[Matemáticas/Álgebra lineal/Matrices#Diagonal principal|diagonal principal]] de $A\in M_n(K)$ está formada por las entradas cuyos dos índices coinciden:
>
> $$
> a_{11},a_{22},\ldots,a_{nn}.
> $$
> [^1]

#### Ejemplo — Una cuadrada de orden tres

$$
C=\begin{pmatrix}
-1&3&0\\
4&2&1\\
7&0&5
\end{pmatrix}\in M_3(K).
$$

Para recorrer la diagonal principal avanzamos una fila y una columna cada vez: $c_{11}=-1$, $c_{22}=2$ y $c_{33}=5$.

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

> [!recuerda] El caso $1\times1$
> La matriz $(a)$ tiene una fila y una columna. Es cuadrada de orden uno. El escalar $a$ es su única entrada; al operar con la matriz se conserva la condición de tamaño $1\times1$.[^1]

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
> Una **[[Matemáticas/Álgebra lineal/Matrices#Entradas y tamaño|matriz fila]]** tiene una sola fila: su tamaño es $1\times n$, con $n\in\mathbb N$.[^1]

#### Ejemplo — Una fila con tres entradas

$$
F=\begin{pmatrix}-2&\sqrt5&0\end{pmatrix}\in M_{1\times3}(\mathbb R).
$$

Hay una fila y tres columnas. Cada número ocupa una columna distinta.

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

### Matriz columna

> [!definicion] Matriz columna
> Una **[[Matemáticas/Álgebra lineal/Matrices#Entradas y tamaño|matriz columna]]** tiene una sola columna: su tamaño es $m\times1$, con $m\in\mathbb N$.[^1]

#### Ejemplo — Una columna con tres entradas

$$
G=\begin{pmatrix}1\\-1\\0\end{pmatrix}\in M_{3\times1}(\mathbb R).
$$

Los tres números se escriben uno debajo de otro: cada entrada ocupa una fila. En un sistema, las incógnitas y los términos independientes se pueden reunir en columnas como ésta.

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

## Matrices nulas, identidad, diagonales y triangulares

Una diagonal puede contener ceros; una triangular puede ser también diagonal. Para clasificar una matriz hay que comprobar la condición que define cada clase, sin suponer que las clases se excluyen entre sí. Todas las de este apartado son cuadradas, salvo la matriz nula, que admite cualquier tamaño.[^1][^4]

### Matriz nula

> [!definicion] Matriz nula
> La **[[Matemáticas/Álgebra lineal/Matriz nula|matriz nula]]** $0_{m\times n}$ tiene tamaño $m\times n$ y todas sus entradas son cero:
>
> $$
> (0_{m\times n})_{ij}=0_K
> \quad\forall i\in\{1,\ldots,m\},\ \forall j\in\{1,\ldots,n\}.
> $$
> [^1]

El subíndice de $0_K$ señala el cero escalar de $K$. Los subíndices de $0_{m\times n}$ indican cuántas filas y columnas tiene la matriz.

#### Ejemplo — La nula de orden tres

$$
0_3=\begin{pmatrix}
0&0&0\\
0&0&0\\
0&0&0
\end{pmatrix}.
$$

Hay una matriz nula para cada tamaño. Así, $0_{2\times3}$ y $0_{3\times2}$ contienen sólo ceros, pero son matrices distintas.

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

### Matriz identidad

> [!definicion] Matriz identidad
> La **[[Matemáticas/Álgebra lineal/Matriz identidad|identidad]]** $I_n$ es cuadrada de orden $n$, con unos en la [[#Diagonal principal|diagonal principal]] y ceros fuera de ella. Para $i,j\in\{1,\ldots,n\}$,
>
> $$
> (I_n)_{ij}=\begin{cases}
> 1_K,&i=j,\\
> 0_K,&i\ne j.
> \end{cases}
> $$
> [^1]

#### Ejemplo — La identidad de orden tres

$$
I_3=\begin{pmatrix}
1&0&0\\
0&1&0\\
0&0&1
\end{pmatrix}.
$$

Los unos ocupan las posiciones $(1,1)$, $(2,2)$ y $(3,3)$. Todas las demás entradas son cero.

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

### Matriz diagonal

> [!definicion] Matriz diagonal
> Una matriz $D=(d_{ij})\in M_n(K)$ es **[[Matemáticas/Álgebra lineal/Matriz diagonal|diagonal]]** cuando todas las entradas exteriores a la [[#Diagonal principal|diagonal principal]] son cero:
>
> $$
> d_{ij}=0_K
> \quad\forall i,j\in\{1,\ldots,n\}\text{ con }i\ne j.
> $$
> [^1]

#### Ejemplo — Una diagonal con un cero

$$
D=\begin{pmatrix}
2&0&0\\
0&0&0\\
0&0&-1
\end{pmatrix}.
$$

Las seis entradas exteriores a la diagonal son cero. En la diagonal aparecen $2$, $0$ y $-1$: la definición no exige que sus entradas sean distintas de cero. Por eso tanto $I_n$ como $0_n$ son diagonales.

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

### Matriz escalar

> [!definicion] Matriz escalar
> Una **[[Matemáticas/Álgebra lineal/Matriz escalar|matriz escalar]]** es una matriz diagonal cuyas entradas diagonales son todas iguales a un mismo $\lambda\in K$:
>
> $$
> s_{ij}=\begin{cases}\lambda,&i=j,\\0_K,&i\ne j.\end{cases}
> \qquad i,j\in\{1,\ldots,n\}.
> $$
> [^1]

#### Ejemplo — El mismo escalar en toda la diagonal

$$
S=\begin{pmatrix}
5&0&0\\
0&5&0\\
0&0&5
\end{pmatrix}=5I_3.
$$

La notación $5I_3$ indica que se ha [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Producto de un escalar por una matriz|multiplicado por $5$ cada entrada]] de la identidad: los unos pasan a ser cincos y los ceros siguen siendo ceros. En general, una escalar se escribe $\lambda I_n$.

Toda matriz escalar es diagonal. La identidad corresponde a $\lambda=1_K$, y la nula cuadrada, a $\lambda=0_K$.

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

### Matriz triangular superior

> [!definicion] Matriz triangular superior
> Una matriz $U=(u_{ij})\in M_n(K)$ es **[[Matemáticas/Álgebra lineal/Matriz triangular superior|triangular superior]]** cuando tiene ceros debajo de la [[#Diagonal principal|diagonal principal]]:
>
> $$
> u_{ij}=0_K
> \quad\forall i,j\in\{1,\ldots,n\}\text{ con }i>j.
> $$
> [^1]

La desigualdad $i>j$ sitúa la entrada por debajo de la diagonal: su número de fila es mayor que su número de columna.

#### Ejemplo — Ceros bajo la diagonal

$$
U=\begin{pmatrix}
7&1&-2\\
0&3&4\\
0&0&-5
\end{pmatrix}.
$$

Comprobamos las posiciones inferiores: $u_{21}=u_{31}=u_{32}=0$. Las entradas de la diagonal y las superiores pueden tomar cualquier valor de $K$. Si sustituimos el $4$ de la posición $(2,3)$ por cero, la matriz sigue siendo triangular superior.

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

### Matriz triangular inferior

> [!definicion] Matriz triangular inferior
> Una matriz $L=(\ell_{ij})\in M_n(K)$ es **[[Matemáticas/Álgebra lineal/Matriz triangular inferior|triangular inferior]]** cuando tiene ceros por encima de la [[#Diagonal principal|diagonal principal]]:
>
> $$
> \ell_{ij}=0_K
> \quad\forall i,j\in\{1,\ldots,n\}\text{ con }i<j.
> $$
> [^1]

#### Ejemplo — Ceros sobre la diagonal

$$
L=\begin{pmatrix}
2&0&0\\
1&-1&0\\
0&5&3
\end{pmatrix}.
$$

Las posiciones superiores son $(1,2)$, $(1,3)$ y $(2,3)$; las tres contienen ceros. El cero en $(3,1)$ no es obligatorio para esta clase, pero tampoco impide que la matriz sea triangular inferior.

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

> [!recuerda] Las diagonales pertenecen a las dos clases
> Una matriz diagonal tiene ceros tanto por encima como por debajo de su [[#Diagonal principal|diagonal principal]]. Por tanto, ==es triangular superior e inferior a la vez==.[^1]

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

## Transpuesta y conjugación de entradas

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

#### Ejemplo — Las filas pasan a columnas

$$
A=\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}_{2\times3}.
$$

La primera fila $(1,2,3)$ se convierte en la primera columna; la segunda fila, en la segunda columna:

$$
A^T=\begin{pmatrix}1&4\\2&5\\3&6\end{pmatrix}_{3\times2}.
$$

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

Antes de las primeras pruebas por entradas, consulta el fundamento de la [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/00 Prefacio#^2bd3aa|demostración por componentes]].

### La doble transpuesta

#### Propiedad

> [!teorema] La doble transpuesta
> Para $A\in M_{m\times n}(K)$:[^7]
>
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

### Conjugada de una matriz

Para un número complejo $z=x+iy$, con $x,y\in\mathbb R$, el [[Matemáticas/Sistemas numéricos/Números complejos#🔄 Conjugación y módulo|conjugado]] es $\overline z=x-iy$. Así, $1+2i$ y $1-2i$ son conjugados; cualquier número real es su propio conjugado.[^13]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - números-complejos
---
> [!note] Pregunta
> ¿Cómo se obtiene el conjugado de $z=x+iy$, con $x,y\in\mathbb R$?
===
> [!important] Respuesta
> Se conserva la parte real y se cambia el signo de la parte imaginaria: $\overline z=x-iy$.
```


Sea $A=(a_{ij})\in M_{m\times n}(\mathbb C)$.

> [!definicion] Matriz conjugada
> La **[[Matemáticas/Álgebra lineal/Conjugada de una matriz|conjugada]]** $\overline A$ se obtiene conjugando cada entrada, sin cambiar su posición:
> $$
> (\overline A)_{ij}=\overline{a_{ij}}.
> $$
> Tiene el mismo tamaño que $A$.[^7]

$\overline{a_{ij}}$ es un número complejo; $\overline A$ es la matriz completa.

#### Ejemplo — Cambiar el signo de las partes imaginarias

$$
C=\begin{pmatrix}1+i&2&-i\\3-i&0&4i\end{pmatrix}.
$$

$$
\overline C=\begin{pmatrix}1-i&2&i\\3+i&0&-4i\end{pmatrix}.
$$

Las entradas reales, como $2$, permanecen iguales. En las demás cambia el signo de la parte imaginaria.

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

## Conjugación compleja y conjugada transpuesta

Sean $z=x+iy$ y $w=u+iv$ dos [[Matemáticas/Sistemas numéricos/Números complejos|números complejos]], con $x,y,u,v\in\mathbb R$ e $i^2=-1$. Entonces $\overline z=x-iy$ y $\overline w=u-iv$.[^13]

### Doble conjugación escalar

#### Propiedad

> [!teorema] Doble conjugación escalar
> Para $z\in\mathbb C$,
>
> $$
> \boxed{\overline{\overline z}=z}
> $$

#### Demostración

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

### Conjugación de una suma de números complejos

#### Propiedad

> [!teorema] Conjugación de una suma de números complejos
> Para $z,w\in\mathbb C$,
>
> $$
> \boxed{\overline{z+w}=\overline z+\overline w}
> $$

#### Demostración

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

### Conjugación del producto de dos números complejos

#### Propiedad

> [!teorema] Conjugación del producto de dos números complejos
> Para $z,w\in\mathbb C$,
>
> $$
> \boxed{\overline{zw}=\overline z\,\overline w}
> $$

#### Demostración

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

#### Ejemplo — Conjugar y después transponer

$$
C^*=\begin{pmatrix}
1-i&3+i\\
2&0\\
i&-4i
\end{pmatrix}_{3\times2}.
$$

La entrada $(1,2)$ de $C^*$ es $\overline{c_{21}}=3+i$: se toma la posición transpuesta y además se conjuga.

![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/04-transpuesta-y-adjunta.svg|*La entrada c₂₁ pasa a la posición (1,2). La transpuesta conserva 3−i; la adjunta lo conjuga y da 3+i.*]]

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/04-transpuesta-y-adjunta.excalidraw|Abrir el dibujo editable]]

> [!recuerda] Caso real
> Si $A$ tiene solo entradas reales, $\overline A=A$ y, por tanto, ==$A^*=A^T$==.[^7]

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

### Conjugar dos veces

#### Propiedad

> [!teorema] Conjugar dos veces
> Para $A\in M_{m\times n}(\mathbb C)$:[^7]
>
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

### Conjugación y transposición

#### Propiedad

> [!teorema] Conjugación y transposición
> Para $A\in M_{m\times n}(\mathbb C)$:[^7]
>
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

## Matrices simétricas, antisimétricas, hermíticas y antihermíticas

La traspuesta y la conjugada transpuesta permiten comparar cada matriz cuadrada con la que resulta de esas operaciones. Las condiciones se comprueban también entrada por entrada.

### Matriz simétrica

Las posiciones $(1,2)$ y $(2,1)$ se intercambian al reflejarse respecto de la [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Diagonal principal|diagonal principal]]. Lo mismo ocurre con cualquier pareja $(i,j)$ y $(j,i)$.

> [!definicion] Matriz simétrica
> Una matriz $A=(a_{ij})\in M_n(K)$ es **[[Matemáticas/Álgebra lineal/Matriz simétrica|simétrica]]** cuando coinciden las entradas de esas posiciones:
>
> $$
> a_{ij}=a_{ji}\qquad\forall i,j\in\{1,\ldots,n\}.
> $$
> [^9]

La [[#Transpuesta|transpuesta]] intercambia esas posiciones. Por tanto, la condición de simetría también se escribe $A^T=A$.[^9]

#### Ejemplo — Reflejo respecto de la diagonal

$$
S=\begin{pmatrix}
3&5&1\\
5&0&-2\\
1&-2&-1
\end{pmatrix}.
$$

Basta revisar las tres parejas exteriores a la diagonal:

$$
s_{12}=s_{21}=5,\qquad
s_{13}=s_{31}=1,\qquad
s_{23}=s_{32}=-2.
$$

Las entradas diagonales se comparan consigo mismas y pueden tomar cualquier valor de $K$.

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

> [!advertencia] Opuesta y simétrica
> La **opuesta de $A$** es otra matriz, $-A$. Que $A$ sea **simétrica** expresa una condición sobre sus entradas: $A^T=A$.[^8]

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

La [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Matriz opuesta|opuesta de una matriz]] se escribe $-A=(-a_{ij})$: sus entradas son los opuestos de las de $A$.

> [!definicion] Matriz antisimétrica
> Una matriz $A=(a_{ij})\in M_n(K)$ es **[[Matemáticas/Álgebra lineal/Matriz antisimétrica|antisimétrica]]** cuando las entradas reflejadas son opuestas:
>
> $$
> a_{ij}=-a_{ji}\qquad\forall i,j\in\{1,\ldots,n\}.
> $$
>
> En notación de transpuesta, $A^T=-A$.[^31]

#### Ejemplo — Signos opuestos a ambos lados

$$
T=\begin{pmatrix}
0&2&-1\\
-2&0&4\\
1&-4&0
\end{pmatrix}.
$$

El $2$ de $(1,2)$ se corresponde con $-2$ en $(2,1)$. Las otras parejas son $-1$ y $1$, y $4$ y $-4$. Las entradas diagonales son cero.

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

#### Propiedad

> [!consecuencia] Diagonal de una antisimétrica real o compleja
> Si $A^T=-A$ sobre $\mathbb R$ o $\mathbb C$, entonces
>
> $$
> a_{ii}=0_K\qquad\forall i\in\{1,\ldots,n\}.
> $$

#### Demostración

> [!demostracion] Demostración
> En una posición diagonal, los índices no cambian al transponer. Por eso la condición de antisimetría exige
>
> $$
> a_{ii}=-a_{ii}.
> $$
>
> Sumamos $a_{ii}$ a los dos miembros:
>
> $$
> 2a_{ii}=0_K.
> $$
>
> En $\mathbb R$ y $\mathbb C$ podemos dividir por $2$, y obtenemos $a_{ii}=0_K$. El argumento vale para cualquier índice diagonal. $\blacksquare$[^31]

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

> [!opcional]- Por qué se ha especificado el conjunto de escalares
> Existen cuerpos en los que $1_K+1_K=0_K$, llamados de característica dos. Allí la igualdad $2a_{ii}=0_K$ se cumple para cualquier $a_{ii}$ y no obliga a que la diagonal sea nula. Esta excepción no aparece en $\mathbb R$ ni en $\mathbb C$.[^10]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - escalares
---
> [!note] Pregunta
> ¿Qué significa que un cuerpo tenga característica dos?
===
> [!important] Respuesta
> Que $1_K+1_K=0_K$. En ese caso, la igualdad $2a=0_K$ no obliga a que $a=0_K$.
```

### Matriz hermítica

> [!definicion] Matriz hermítica
> Una matriz $H=(h_{ij})\in M_n(\mathbb C)$ es **[[Matemáticas/Álgebra lineal/Matriz hermítica|hermítica]]** cuando sus entradas reflejadas son conjugadas:
>
> $$
> h_{ij}=\overline{h_{ji}}\qquad\forall i,j\in\{1,\ldots,n\}.
> $$
> [^6]

La [[#Conjugada transpuesta|conjugada transpuesta]] tiene entradas $(H^*)_{ij}=\overline{h_{ji}}$. La condición de hermiticidad equivale, por tanto, a $H^*=H$.[^6]

#### Ejemplo — Conjugación al cruzar la diagonal

$$
H=\begin{pmatrix}
1&1-2i&4i\\
1+2i&0&-8\\
-4i&-8&-2
\end{pmatrix}.
$$

En las posiciones $(1,2)$ y $(2,1)$ aparecen $1-2i$ y $1+2i$. En $(1,3)$ y $(3,1)$, $4i$ y $-4i$. La pareja restante contiene dos veces el número real $-8$, que es su propio conjugado.

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

#### Propiedad

> [!consecuencia] La diagonal de una hermítica es real
> Si $H\in M_n(\mathbb C)$ es hermítica, entonces
>
> $$
> \boxed{h_{ii}\in\mathbb R\qquad\forall i\in\{1,\ldots,n\}.}
> $$
> [^6]

#### Demostración

> [!demostracion] Demostración
> Sea $r\in\mathbb N$, con $1\leq r\leq n$. En la diagonal, los índices coinciden, de modo que la condición $h_{ij}=\overline{h_{ji}}$ se reduce a $h_{rr}=\overline{h_{rr}}$.
>
> Escribimos $h_{rr}=x+iy$, con $x,y\in\mathbb R$. La igualdad con su conjugado exige
>
> $$
> x+iy=x-iy.
> $$
>
> Al comparar las partes imaginarias obtenemos $y=-y$, es decir, $2y=0$. Como $y$ es real, $y=0$, por lo que $h_{rr}=x\in\mathbb R$.
>
> El índice $r$ era arbitrario: todas las entradas diagonales son reales. $\blacksquare$[^6]

En el ejemplo, cambiar $h_{33}=-2$ por $-2+i$ haría que la matriz dejase de ser hermítica, aunque no se alterase ninguna pareja fuera de la diagonal.

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

> [!recuerda] Hermítica y simétrica en el caso real
> Si las entradas de $A$ son reales, conjugar no las cambia: $A^*=A^T$. Por tanto, ==una matriz real es hermítica si, y sólo si, es simétrica==.[^7]

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

> [!definicion] Matriz antihermítica
> Una matriz $Q=(q_{ij})\in M_n(\mathbb C)$ es **[[Matemáticas/Álgebra lineal/Matriz antihermítica|antihermítica]]** cuando cada entrada es el opuesto del conjugado de la entrada reflejada:
>
> $$
> q_{ij}=-\overline{q_{ji}}\qquad\forall i,j\in\{1,\ldots,n\}.
> $$
>
> Equivalentemente, $Q^*=-Q$.[^antihermiticas]

#### Ejemplo — Diagonal imaginaria

$$
Q=\begin{pmatrix}
i&2+i&0\\
-2+i&0&3\\
0&-3&-2i
\end{pmatrix}.
$$

Conjugamos $q_{12}=2+i$ y cambiamos su signo:

$$
-\overline{q_{12}}=-(2-i)=-2+i=q_{21}.
$$

Las otras parejas son $0,0$ y $3,-3$. Las tres cumplen la misma condición.

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

#### Propiedad

> [!consecuencia] La diagonal de una antihermítica
> Las entradas diagonales de una matriz antihermítica son puramente imaginarias o cero.[^antihermiticas]

#### Demostración

> [!demostracion] Demostración
> Escribimos una entrada diagonal como $q_{ii}=x+iy$, con $x,y\in\mathbb R$. En esa posición, la condición de antihermiticidad exige $q_{ii}=-\overline{q_{ii}}$. Al sustituir,
>
> $$
> x+iy=-(x-iy)=-x+iy.
> $$
>
> Las partes imaginarias ya coinciden. La igualdad de las partes reales da
>
> $$
> x=-x\quad\Longrightarrow\quad 2x=0\quad\Longrightarrow\quad x=0.
> $$
>
> Por tanto, $q_{ii}=iy$: su parte real es cero. Esto incluye el caso $y=0$. $\blacksquare$[^antihermiticas]

En $Q$ son $i$, $0$ y $-2i$. Al comprobar una antihermítica, se conjuga **y** se cambia el signo; para una antisimétrica sólo se cambia el signo.

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

Una misma matriz puede pertenecer a varias clases. La [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Matriz identidad|identidad]] es [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Matriz escalar|escalar]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Matriz diagonal|diagonal]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Matriz triangular superior|triangular superior]] y [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Matriz triangular inferior|triangular inferior]]. La [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Matriz nula|nula cuadrada]] cumple, además, las condiciones de [[#Matriz simétrica|simetría]], [[#Matriz antisimétrica|antisimetría]], [[#Matriz hermítica|hermiticidad]] y [[#Matriz antihermítica|antihermiticidad]]: todas sus entradas reflejadas son cero.

## Traza

### Traza de una matriz

Sea $A=(a_{ij})\in M_n(K)$.

> [!definicion] Traza
> La **[[Matemáticas/Álgebra lineal/Traza de una matriz|traza]]** es la suma de las entradas de la [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Diagonal principal|diagonal principal]]:
> $$
> \operatorname{tr}(A)=\sum_{i=1}^{n}a_{ii}\in K.
> $$

El resultado es un escalar de $K$. La traza se define para matrices cuadradas.[^7]

#### Ejemplo — Leer la diagonal antes de sumar

$$
T=\begin{pmatrix}
3&2&-1\\
4&0&1\\
-3&6&-8
\end{pmatrix}.
$$

La diagonal es $(3,0,-8)$, de modo que $\operatorname{tr}(T)=3+0-8=-5$. Las otras seis entradas no intervienen.[^7]

En $I_n$, las $n$ entradas diagonales valen uno. Por tanto, $\operatorname{tr}(I_n)=n\cdot1_K$, que se escribe simplemente $n$ para $K=\mathbb R$ o $\mathbb C$.

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

## Condiciones de validez y continuación

La traspuesta intercambia filas y columnas; la conjugada conserva su posición; la adjunta conjuga y transpone. Las clases de simetría y hermiticidad consideradas son cuadradas. Las sumas, los productos y sus propiedades se desarrollan en [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones|02 · Operaciones]].

## 📚 Fuentes

### Material base aportado

[^vectores]: FCUL, aula 2, 18/09/2026, diapositivas 5–10. Archivo privado `ALGA-2026-27-AulasTeo-slides-aula2-VectMatrizes-impressao.pdf`. Operaciones vectoriales, regla del paralelogramo, nulo y opuesto, ocho leyes y regla de signos.

[^1]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 2, 18/09/2026, diapositivas 3–22. Archivo privado `ALGA-2026-27-AulasTeo-slides-aula2-VectMatrizes-impressao.pdf`. Vectores coordenados, operaciones, definición de matriz y clases notables.

[^8]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 3. Archivo privado `ALGA-2026-27-AulasTeo-slides-aula3-Matrizes-impressao.pdf`. Diap. 4, propiedades 1–4: suma; diap. 6, propiedades 1–5: producto por escalar; diap. 11, propiedades 1–6: producto matricial, sus distributividades y sus identidades y nulas. En estas diapositivas también se llama «simétrica de $A$» a $-A$; aquí se reserva «opuesta» para esa matriz, para distinguirla de la condición $A^T=A$. Fuente de los enunciados TPC; las pruebas se contrastan con las referencias indicadas junto a cada una.

[^7]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 4, 23/09/2026. Archivo privado `ALGA-2026-27-AulasTeo-slides-aula4-FormaEscada-impressao.pdf`. Diap. 4: conjugada transpuesta; diap. 8: caso real de hermíticas; diap. 9: propiedades de la transpuesta; diap. 10: propiedades de conjugación; diap. 12: propiedades de la traza. Los TPC se identifican por estos localizadores; las fuentes de las pruebas se citan por separado.

### Ampliación académica

[^4]: [Al Doerr y Ken Levasseur, *Applied Discrete Structures* — “Special Types of Matrices”](https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Applied_Discrete_Structures_%28Doerr_and_Levasseur%29/05%3A_Introduction_to_Matrix_Algebra/5.02%3A_Special_Types_of_Matrices). Clasificación de matrices especiales.

[^5]: Departamento de Matemáticas, Universidade da Coruña, [*Linear Algebra I*, parte II, capítulo 1, §§1–2](https://caminos.udc.es/info/asignaturas/grado_tecic/101/AL1/pdfs/THEORY2-1.pdf). Definición, igualdad y operaciones matriciales sobre un cuerpo; la traducción de sistemas usa la regla del producto.

[^9]: W. Keith Nicholson, *Linear Algebra with Applications*, §2.1, «Matrix Addition, Scalar Multiplication, and Transposition», Theorem 2.1.1 y demostración. [LibreTexts](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_(Nicholson)/02:_Matrix_Algebra/2.01:_Matrix_Addition_Scalar_Multiplication_and_Transposition). Contraste académico para las leyes de suma y producto por escalar; definición de traspuesta y caracterización de matrices simétricas.

[^10]: [[Matemáticas/Estructuras algebraicas/Cuerpos|Cuerpos]], §§1–2: leyes de suma, producto, distributividad, neutros y opuestos en $K=\mathbb R$ o $\mathbb C$.

[^13]: [[Matemáticas/Sistemas numéricos/Números complejos|Números complejos]], apartados «Operaciones en forma binómica» y «Conjugación y módulo», para lectura y notación de $z=x+iy$.

[^25]: University of Manitoba, Math 1220, §3.5, Teorema 3.5.4, pruebas de las propiedades de la transpuesta. [Sección 3.5](https://linearalgebra.math.umanitoba.ca/math1220/section-19.html).

[^26]: University of Puget Sound, Robert A. Beezer, *A First Course in Linear Algebra*, §MO, teoremas CRMA, CRMSM, CCM, MCT y §MM, teorema MMCC; pruebas por entradas de las leyes de conjugación y del producto conjugado. [PDF](https://upload.wikimedia.org/wikipedia/commons/8/8d/A_First_Course_in_Linear_Algebra_for_smartphones.pdf).

[^30]: Robert A. Beezer, *A First Course in Linear Algebra*, §CNO, pruebas de conjugación compleja y sus leyes para sumas, productos y doble conjugación. [Operaciones con números complejos](https://linear.pugetsound.edu/jsmath/0222/fcla-jsmath-2.22li69.html).

[^6]: [W. Keith Nicholson, *Linear Algebra with Applications* — “Complex Matrices”](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_%28Nicholson%29/08%3A_Orthogonality/8.07%3A_Complex_Matrices). Conjugada transpuesta y matrices hermíticas; la definición de antihermítica se respalda por separado en O’Sullivan.

[^31]: Rob Beavers, Western Oregon University, [*Linear Algebra*, §2.10, “Matrix Algebra”](https://people.wou.edu/~beavers/Text341/Book%20Updated%2010-5-22/sectionMatrixAlgebra.html), propiedad de la diagonal de una antisimétrica. Se desarrolla aquí la consecuencia por entradas a partir de la definición y de las leyes del cuerpo citadas en la referencia de Cuerpos; no se atribuye a la fuente una demostración que deja como ejercicio.

[^antihermiticas]: Michael E. O’Sullivan, San Diego State University, *Lecture Notes for Math 623: Matrix Analysis*, 18/04/2013, §1, definición 1.1 y observación 2, p. 1. [Hermitian Matrices](https://mosullivan.sdsu.edu/Teaching/MatrixAnalysis13s/hermitian.pdf). Definición $A^*=-A$ y condición sobre la diagonal. La justificación por partes real e imaginaria se desarrolla aquí a partir del enunciado; no se atribuye a la fuente una prueba publicada de ese argumento.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como tutor de Álgebra lineal para primer curso de Física. El alumno conoce aritmética real y compleja. Trabaja con $K=\mathbb R$ o $\mathbb C$ e índices naturales positivos.

Repasa tuplas, vectores coordenados, entradas, tamaños e igualdad de matrices. Pide reconocer matrices fila, columna, cuadradas, nulas, identidad, diagonales, escalares y triangulares. La transpuesta intercambia índices, la conjugada conjuga entradas y la adjunta realiza ambas operaciones. Pide clasificar matrices simétricas, antisimétricas, hermíticas y antihermíticas, justificar sus condiciones diagonales y calcular la traza. Para entradas reales, hermítica equivale a simétrica.

Formula una pregunta cada vez y espera el intento antes de mostrar la respuesta. Distingue errores de concepto, de notación y de cálculo; ofrece pistas concretas y recupera después lo que haya fallado. Usa los ejemplos existentes; no generes ejercicios nuevos.
