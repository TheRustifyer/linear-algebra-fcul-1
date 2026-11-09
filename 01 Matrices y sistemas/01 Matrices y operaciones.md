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
fsrs_goal: Sumar vectores coordenados reales o complejos y multiplicarlos por escalares, interpretar entradas y dimensiones de matrices, clasificar sus formas notables, calcular suma, opuesto, producto por escalar, producto matricial y transposición, justificar por entradas las leyes de suma, producto por escalar, producto matricial, transpuesta, conjugación compleja y traza, y traducir un sistema lineal a Ax=b y a su matriz ampliada.
tags:
  - matematicas
  - algebra-lineal
  - matrices
  - fcul
  - grado-fisica
  - curricular
---

# Matrices y operaciones

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

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

## Operaciones con vectores coordenados

### Suma de vectores

La [[Matemáticas/Geometría/Vectores/Suma de vectores|suma de dos desplazamientos]] corresponde a recorrer uno después del otro. En coordenadas, se suman por separado los cambios en cada eje.

Sean $u=(x_1,\ldots,x_n)$ y $v=(y_1,\ldots,y_n)$ dos vectores de $K^n$.

> [!definicion] Suma de vectores coordenados
> La suma se calcula componente a componente:
>
> $$
> u+v=(x_1+y_1,\ldots,x_n+y_n).
> $$
> [^vectores]

#### Ejemplo — Sumar dos desplazamientos

Con los pares que ya hemos utilizado,

$$
(3,2)+(2,3)=(5,5).
$$

En el plano, podemos recorrer primero el desplazamiento $(3,2)$ y, desde su extremo, recorrer $(2,3)$. Terminamos en $(5,5)$.

![[vector-addition-graph.excalidraw.svg|Si dibujamos los dos vectores desde el mismo origen, sus flechas forman dos lados de un paralelogramo. La diagonal que parte de ese origen representa la suma.]][^vectores]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Cómo se suman dos vectores de $K^n$?
===
> [!important] Respuesta
> Sumando las componentes correspondientes: $(x_1,\ldots,x_n)+(y_1,\ldots,y_n)=(x_1+y_1,\ldots,x_n+y_n)$.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Cómo representa la regla del paralelogramo la suma de dos vectores del plano?
===
> [!important] Respuesta
> Se dibujan desde el mismo origen y se completa el paralelogramo. La diagonal que parte de ese origen representa la suma.
>
> En el dibujo, las flechas azul y roja son los sumandos $(3,2)$ y $(2,3)$; la negra representa $(5,5)$.
>
> ![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/vector-addition-graph-anki.png|Paralelogramo de la suma (3,2)+(2,3)=(5,5)|420]]
```

### Producto de un escalar por un vector

> [!definicion] Producto por escalar de un vector
> Para $\lambda\in K$ y $u=(x_1,\ldots,x_n)\in K^n$,
>
> $$
> \lambda u=(\lambda x_1,\ldots,\lambda x_n).
> $$
> [^vectores]

#### Ejemplo — Cambiar la longitud y el sentido

Para $u=(3,2)$,

$$
2u=(6,4),
$$

$$
-\frac12u=\left(-\frac32,-1\right).
$$

En el plano, $2u$ tiene el mismo sentido que $u$ y el doble de longitud.
El factor $-\frac12$ cambia el sentido y reduce la longitud a la mitad.[^vectores]

> [!recuerda] El signo y el valor absoluto cumplen funciones distintas
> Para un vector real no nulo, multiplicar por $\lambda\in\mathbb R\setminus\{0\}$ cambia su longitud por el factor $|\lambda|$. El sentido se conserva si $\lambda>0$ y se invierte si $\lambda<0$. La interpretación geométrica se desarrolla en [[Matemáticas/Geometría/Vectores/Producto por un escalar|producto de un vector por un escalar]].

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> Al multiplicar un vector real no nulo por un escalar real no nulo $\lambda$, ¿cómo cambian su longitud y su sentido?
===
> [!important] Respuesta
> La longitud se multiplica por $|\lambda|$. El sentido se conserva si $\lambda>0$ y se invierte si $\lambda<0$.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Cómo se multiplica un vector coordenado por un escalar $\lambda$?
===
> [!important] Respuesta
> Multiplicando cada componente: $\lambda(x_1,\ldots,x_n)=(\lambda x_1,\ldots,\lambda x_n)$.
```

### Vector nulo

> [!definicion] Vector nulo
> El vector nulo de $K^n$ tiene todas sus componentes iguales a cero:
>
> $$
> 0_{K^n}=(0_K,\ldots,0_K).
> $$
> [^vectores]

Por ejemplo, $0_{\mathbb R^2}=(0,0)$. El subíndice indica que se trata de un vector con dos componentes; el escalar $0_K$ es un número.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Qué componentes tiene el vector nulo de $K^n$?
===
> [!important] Respuesta
> Sus $n$ componentes son $0_K$: $0_{K^n}=(0_K,\ldots,0_K)$.
```

### Vector opuesto

> [!definicion] Vector opuesto
> El opuesto de $u=(x_1,\ldots,x_n)$ es
>
> $$
> -u=(-x_1,\ldots,-x_n).
> $$
> [^vectores]

El opuesto de $(3,2)$ es $(-3,-2)$. En el plano, tienen la misma longitud, el sentido contrario y ambos se sientan sobre la misma dirección (recta en el plano).

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Cómo se obtiene el opuesto de un vector coordenado?
===
> [!important] Respuesta
> Cambiando el signo de cada componente: $-(x_1,\ldots,x_n)=(-x_1,\ldots,-x_n)$.
```

## Leyes de las operaciones vectoriales

Las siguientes igualdades se aplican a $u,v,w\in K^n$. Se comprueban usando las definiciones en cada posición y las leyes de suma y multiplicación del [[Matemáticas/Estructuras algebraicas/Cuerpos|cuerpo]] $K$.[^vectores]

### Conmutatividad de la suma vectorial

#### Propiedad

> [!teorema] Conmutatividad de la suma de vectores
> $$
> \boxed{u+v=v+u}.
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Cambia la suma de dos vectores de $K^n$ al intercambiar los sumandos?
===
> [!important] Respuesta
> No: $u+v=v+u$.
```

### Asociatividad de la suma vectorial

#### Propiedad

> [!teorema] Asociatividad de la suma de vectores
> $$
> \boxed{(u+v)+w=u+(v+w)}.
> $$

Podemos escribir $u+v+w$ sin especificar qué par se suma primero.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Qué permite la asociatividad al sumar tres vectores de $K^n$?
===
> [!important] Respuesta
> Cambiar los paréntesis: $(u+v)+w=u+(v+w)$.
```

### El vector nulo como neutro aditivo

#### Propiedad

> [!teorema] El vector nulo es el neutro aditivo
> $$
> \boxed{u+0_{K^n}=u=0_{K^n}+u}.
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Qué vector es el elemento neutro de la suma en $K^n$?
===
> [!important] Respuesta
> El vector nulo: $u+0_{K^n}=u=0_{K^n}+u$.
```

### El vector opuesto como inverso aditivo

#### Propiedad

> [!teorema] Sumar un vector y su opuesto
> $$
> \boxed{u+(-u)=0_{K^n}=(-u)+u}.
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Qué se obtiene al sumar un vector y su opuesto?
===
> [!important] Respuesta
> El vector nulo del mismo espacio: $u+(-u)=0_{K^n}$.
```

Sean $u,v\in K^n$ y $\alpha,\beta\in K$. Las leyes de los escalares se aplican a cada componente del vector.[^vectores]

### Asociatividad del producto por escalar de un vector

#### Propiedad

> [!teorema] Multiplicaciones sucesivas por escalares
> $$
> \boxed{(\alpha\beta)u=\alpha(\beta u)}.
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Cómo se combinan dos multiplicaciones sucesivas de un vector por escalares?
===
> [!important] Respuesta
> Para $u\in K^n$ y $\alpha,\beta\in K$, $\alpha(\beta u)=(\alpha\beta)u$.
```

### Distributividad respecto de la suma vectorial

#### Propiedad

> [!teorema] Producto de un escalar por una suma de vectores
> $$
> \boxed{\alpha(u+v)=\alpha u+\alpha v}.
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Cómo se distribuye un escalar sobre una suma de vectores?
===
> [!important] Respuesta
> Para $u,v\in K^n$ y $\alpha\in K$, $\alpha(u+v)=\alpha u+\alpha v$.
```

### Distributividad respecto de la suma de escalares

#### Propiedad

> [!teorema] Producto de una suma de escalares por un vector
> $$
> \boxed{(\alpha+\beta)u=\alpha u+\beta u}.
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Cómo se distribuye una suma de escalares al multiplicar un vector?
===
> [!important] Respuesta
> Para $u\in K^n$ y $\alpha,\beta\in K$, $(\alpha+\beta)u=\alpha u+\beta u$.
```

### Multiplicar un vector por uno o por cero

#### Propiedad

> [!teorema] Escalares uno y cero
> $$
> \boxed{1_Ku=u,\qquad 0_Ku=0_{K^n}}.
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Qué efecto tiene multiplicar un vector por el escalar $1_K$?
===
> [!important] Respuesta
> Conserva el vector: $1_Ku=u$.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Qué se obtiene al multiplicar un vector de $K^n$ por el escalar cero?
===
> [!important] Respuesta
> El vector nulo: $0_Ku=0_{K^n}$.
```

### Signo de un múltiplo escalar de un vector

#### Propiedad

> [!consecuencia] El signo puede incorporarse al escalar o al vector
> $$
> \boxed{-(\alpha u)=(-\alpha)u=\alpha(-u)}.
> $$
> [^vectores]

#### Demostración

> [!demostracion] Demostración
> Sea $u=(x_1,\ldots,x_n)$. Las tres expresiones pertenecen a $K^n$. Fijemos una posición arbitraria $j\in\mathbb N$, con $1\leq j\leq n$.
>
> Por la definición de opuesto, la componente $j$ de $-(\alpha u)$ es $-(\alpha x_j)$. Por la definición del producto por escalar, las componentes de las otras dos expresiones son $(-\alpha)x_j$ y $\alpha(-x_j)$.
>
> Las [[Matemáticas/Estructuras algebraicas/Cuerpos#Reglas de los signos|reglas de los signos en un cuerpo]] establecen que
>
> $$
> -(\alpha x_j)=(-\alpha)x_j=\alpha(-x_j).
> $$
>
> Las componentes coinciden en cualquier posición admisible. Por el criterio de igualdad de vectores,
>
> $$
> \boxed{-(\alpha u)=(-\alpha)u=\alpha(-u)}\qquad\blacksquare
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Cómo puede escribirse el opuesto de un múltiplo escalar de un vector?
===
> [!important] Respuesta
> Para $u\in K^n$ y $\alpha\in K$, $-(\alpha u)=(-\alpha)u=\alpha(-u)$.
```

La suma de dos elementos de $K^n$ [[Matemáticas/Estructuras algebraicas/Operaciones algebraicas#2. Cerradura y operaciones externas|vuelve a pertenecer a $K^n$]], igual que el [[Matemáticas/Estructuras algebraicas/Operaciones algebraicas#2. Cerradura y operaciones externas|producto de uno de ellos por un escalar de $K$]]. Junto con las leyes anteriores, esto hace de $K^n$ un [[Matemáticas/Álgebra lineal/Espacios vectoriales/01 Espacios vectoriales — definición y axiomas|espacio vectorial sobre $K$]]. Aquí los vectores son las tuplas y los escalares pertenecen a $K$.[^vectores]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Qué significa que $K^n$ sea cerrado bajo la suma de vectores?
===
> [!important] Respuesta
> Que $u+v\in K^n$ para cualesquiera $u,v\in K^n$: sumar dos de sus elementos no produce un elemento exterior al conjunto.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Qué significa que $K^n$ sea estable bajo el producto por escalares de $K$?
===
> [!important] Respuesta
> Que $\alpha u\in K^n$ para cualquier $\alpha\in K$ y cualquier $u\in K^n$.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> En el espacio vectorial $K^n$ sobre $K$, ¿cuáles son los vectores y cuáles los escalares?
===
> [!important] Respuesta
> Los vectores son las tuplas de $n$ componentes de $K$; los escalares son los elementos de $K$.
```

> [!advertencia] Distinguir escalar y vector al operar
> Las operaciones definidas reciben dos vectores del mismo $K^n$ para sumarlos, o un escalar y un vector para multiplicarlos. No definen una suma entre un vector y un escalar ni un producto entre dos vectores.[^vectores]

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

## Matrices notables

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

La notación $5I_3$ indica que se ha multiplicado por $5$ cada entrada de la identidad: los unos pasan a ser cincos y los ceros siguen siendo ceros. En general, una escalar se escribe $\lambda I_n$.

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

### Matriz simétrica

Las posiciones $(1,2)$ y $(2,1)$ se intercambian al reflejarse respecto de la [[#Diagonal principal|diagonal principal]]. Lo mismo ocurre con cualquier pareja $(i,j)$ y $(j,i)$.

> [!definicion] Matriz simétrica
> Una matriz $A=(a_{ij})\in M_n(K)$ es **[[Matemáticas/Álgebra lineal/Matriz simétrica|simétrica]]** cuando coinciden las entradas de esas posiciones:
>
> $$
> a_{ij}=a_{ji}\qquad\forall i,j\in\{1,\ldots,n\}.
> $$
> [^4]

Al intercambiar filas y columnas se obtiene la **[[Matemáticas/Álgebra lineal/Transpuesta de una matriz|transpuesta]]**, que se denota $A^T$ y tiene entrada $(A^T)_{ij}=a_{ji}$. Por eso la condición de simetría también se escribe $A^T=A$.

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

> [!definicion] Matriz hermítica
> Una matriz $H=(h_{ij})\in M_n(\mathbb C)$ es **[[Matemáticas/Álgebra lineal/Matriz hermítica|hermítica]]** cuando sus entradas reflejadas son conjugadas:
>
> $$
> h_{ij}=\overline{h_{ji}}\qquad\forall i,j\in\{1,\ldots,n\}.
> $$
> [^6]

Se escribe también $H^*=H$. El símbolo $H^*$ designa la **[[Matemáticas/Álgebra lineal/Conjugada transpuesta de una matriz|conjugada transpuesta]]**: se intercambian las filas con las columnas y se conjuga cada entrada, de modo que $(H^*)_{ij}=\overline{h_{ji}}$.

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
> Equivalentemente, $Q^*=-Q$.[^6]

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
> Las entradas diagonales de una matriz antihermítica son puramente imaginarias o cero.[^6]

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
> Por tanto, $q_{ii}=iy$: su parte real es cero. Esto incluye el caso $y=0$. $\blacksquare$[^6]

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

Una misma matriz puede pertenecer a varias clases. La [[#Matriz identidad|identidad]] es [[#Matriz escalar|escalar]], [[#Matriz diagonal|diagonal]], [[#Matriz triangular superior|triangular superior]] y [[#Matriz triangular inferior|triangular inferior]]. La [[#Matriz nula|nula cuadrada]] cumple, además, las condiciones de [[#Matriz simétrica|simetría]], [[#Matriz antisimétrica|antisimetría]], [[#Matriz hermítica|hermiticidad]] y [[#Matriz antihermítica|antihermiticidad]]: todas sus entradas reflejadas son cero.

## Suma, opuesto y producto por un escalar

Para sumar matrices emparejamos las entradas que ocupan la misma posición. Por eso empezamos comprobando sus tamaños: debe haber una fila y una columna correspondientes para cada entrada.

### Suma de matrices

Sean $A=(a_{ij})$ y $B=(b_{ij})$ dos matrices de $M_{m\times n}(K)$.

> [!definicion] Suma de matrices
> La [[Matemáticas/Álgebra lineal/Suma de matrices|suma de matrices]] se obtiene sumando las entradas correspondientes:
> $$
> (A+B)_{ij}=a_{ij}+b_{ij}.
> $$
> La fórmula vale en cualquier posición: $1\leq i\leq m$, $1\leq j\leq n$.

El resultado pertenece a $M_{m\times n}(K)$. Una $2\times3$ y una $3\times2$ tienen seis entradas cada una, pero no se pueden sumar: la primera tiene una tercera columna que la segunda no tiene.[^8]

#### Ejemplo — Sumar entradas correspondientes

Sean

$$
A=\begin{pmatrix}5&-1&0\\2&0&1\end{pmatrix}.
$$

$$
B=\begin{pmatrix}-3&8&1\\1&0&1\end{pmatrix}.
$$

Las dos matrices tienen tamaño $2\times3$, así que sus entradas se suman posición por posición. Por ejemplo, la entrada $(1,1)$ resulta $5+(-3)=2$, y la entrada $(2,3)$ resulta $1+1=2$. Al completar las seis posiciones, queda

$$
A+B=\begin{pmatrix}2&7&1\\3&0&2\end{pmatrix}.
$$

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

### Demostración por componentes

La expresión $A+B$ representa una matriz; $(A+B)_{ij}$ representa un escalar, su entrada en la fila $i$ y la columna $j$. Del mismo modo, $a_{ij}$, $b_{ij}$ y $c_{ij}$ son las entradas de $A$, $B$ y $C$ en esa posición.

> [!definicion] Demostración por componentes
> Para probar que dos matrices del mismo tamaño son iguales, se comparan sus entradas en una posición arbitraria $(i,j)$. Si el argumento vale para todos los índices admisibles, el criterio de igualdad de matrices permite concluir que las matrices coinciden.[^14]

En estas pruebas, fijar $i$ y $j$ no significa elegir una entrada concreta, como $(1,2)$. Significa razonar con una posición cualquiera, manteniendo los índices dentro de sus dominios.

Al aplicar la definición de una operación matricial obtenemos una expresión con escalares de $K$. Podemos entonces usar sus leyes de suma y multiplicación. Al final volvemos a las matrices mediante el criterio de igualdad.[^10]

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

### Matriz opuesta

Sea $A=(a_{ij})\in M_{m\times n}(K)$.

> [!definicion] Matriz opuesta
> La **[[Matemáticas/Álgebra lineal/Suma de matrices#Neutro, opuesta y resta|opuesta]]** de $A$ es la matriz del mismo tamaño que se obtiene cambiando el signo de cada entrada:
>
> $$
> -A=(-a_{ij}).
> $$
> [^9]

#### Ejemplo — Cambiar el signo de cada entrada

Para la matriz $A$ usada en la suma,

$$
-A=\begin{pmatrix}-5&1&0\\-2&0&-1\end{pmatrix}.
$$

El $5$ pasa a ser $-5$; el $-1$, a ser $1$. Las entradas nulas permanecen nulas.

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

### Resta de matrices

Sean $A,B\in M_{m\times n}(K)$.

> [!definicion] Resta de matrices
> La [[Matemáticas/Álgebra lineal/Suma de matrices#Neutro, opuesta y resta|diferencia de $A$ y $B$]] es la suma de $A$ con la opuesta de $B$:
>
> $$
> A-B=A+(-B).
> $$
> [^9]

En cada posición, $(A-B)_{ij}=a_{ij}-b_{ij}$, con $1\leq i\leq m$ y $1\leq j\leq n$. La resta necesita matrices del mismo tamaño, igual que la suma.

#### Ejemplo — Restar entradas correspondientes

Con las dos matrices del ejemplo de suma,

$$
A-B=\begin{pmatrix}
5-(-3)&-1-8&0-1\\
2-1&0-0&1-1
\end{pmatrix}.
$$

Al efectuar las seis restas,

$$
A-B=\begin{pmatrix}8&-9&-1\\1&0&0\end{pmatrix}.
$$

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

### Conmutatividad de la suma

#### Propiedad

> [!teorema] Conmutatividad de la suma
> Para $A,B\in M_{m\times n}(K)$, se cumple:[^8]
>
> $$
> \boxed{A+B=B+A}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sean $A=(a_{ij})$ y $B=(b_{ij})$, con $1 \leq i \leq m$ y $1 \leq j \leq n$.
>
> Por definición de la suma de matrices:
>
> $$
>(A+B)_{ij}=a_{ij}+b_{ij}
> $$
>
> Como $a_{ij},b_{ij}\in K$ y la suma en el cuerpo $K$ es conmutativa, tenemos:
>
> $$
> a_{ij}+b_{ij}=b_{ij}+a_{ij}
> $$
>
> Por tanto:
>
> $$
>(A+B)_{ij}=b_{ij}+a_{ij}=(B+A)_{ij}
> $$
>
> Dado que esta igualdad se cumple para todos los índices $i,j$, las matrices $A+B$ y $B+A$ tienen las mismas entradas. En consecuencia:
>
> $$
> \boxed{A+B=B+A}
> $$

> [!abstract] Idea fundamental
> La igualdad matricial se reduce a la conmutatividad de la suma en $K$. La posición $(i,j)$ era arbitraria, por lo que el mismo razonamiento cubre todas las entradas.[^14][^10]
>
> Es una [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/00 Prefacio#^2bd3aa|demostración por componentes]].

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

#### Propiedad

> [!teorema] Asociatividad de la suma
> Para $A,B,C\in M_{m\times n}(K)$, se cumple:[^8]
>
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

#### Propiedad

> [!teorema] La matriz nula como neutro aditivo
> Dada una matriz $A\in M_{m\times n}(K)$:[^8]
>
> $$
> \boxed{A+0_{m\times n}=A=0_{m\times n}+A}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sea $A=(a_{ij})\in M_{m\times n}(K)$. Fijemos $1\leq i\leq m$ y $1\leq j\leq n$.
>
> Por definición de la suma de matrices y porque $0_K$ es el neutro aditivo de $K$,
>
> $$
> \begin{aligned}
> (A+0_{m\times n})_{ij}
> &=a_{ij}+0_K\\
> &=a_{ij}\\
> &=0_K+a_{ij}\\
> &=(0_{m\times n}+A)_{ij}.
> \end{aligned}
> $$
>
> Las dos sumas tienen el mismo tamaño y las mismas entradas que $A$. Por el criterio de igualdad,
>
> $$
> \boxed{A+0_{m\times n}=A=0_{m\times n}+A}.\qquad\blacksquare
> $$
> [^24][^10]

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

#### Propiedad

> [!teorema] La matriz opuesta como inverso aditivo
> Para $A\in M_{m\times n}(K)$:[^8]
>
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
> La fórmula vale para $1\leq i\leq m$ y $1\leq j\leq n$.

El resultado pertenece a $M_{m\times n}(K)$.[^8]

#### Ejemplo — Escalar todas las entradas

$$
4A
=4\begin{pmatrix}5&-1&0\\2&0&1\end{pmatrix}
=\begin{pmatrix}20&-4&0\\8&0&4\end{pmatrix}.
$$

Por ejemplo, la entrada $-1$ da $4(-1)=-4$ y la entrada $2$ da $4\cdot2=8$.

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

### Asociatividad de los escalares sobre matrices

#### Propiedad

> [!teorema] Asociatividad de los escalares sobre matrices
> Si $\alpha,\beta\in K$ y $A\in M_{m\times n}(K)$, entonces:[^8]
>
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
> \boxed{(\alpha\beta)A=\alpha(\beta A)}\qquad\blacksquare
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-por-escalar
---
> [!note] Pregunta
> ¿Cómo se combinan dos multiplicaciones sucesivas de una matriz por escalares?
===
> [!important] Respuesta
> Para $\alpha,\beta\in K$ y $A\in M_{m\times n}(K)$, $(\alpha\beta)A=\alpha(\beta A)$.
```

### Distribución sobre la suma de matrices

#### Propiedad

> [!teorema] Distribución sobre la suma de matrices
> Para $A,B\in M_{m\times n}(K)$ y $\alpha\in K$:[^8]
>
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
> \boxed{\alpha(A+B)=\alpha A+\alpha B}\qquad\blacksquare
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

#### Propiedad

> [!teorema] Distribución sobre la suma de escalares
> Para $\alpha,\beta\in K$ y $A\in M_{m\times n}(K)$:[^8]
>
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
> ¿Cómo se distribuye una suma de escalares al multiplicar una matriz?
===
> [!important] Respuesta
> $(\alpha+\beta)A=\alpha A+\beta A$.
```

### Multiplicar por cero

#### Propiedad

> [!teorema] Multiplicar por cero
> Para $A\in M_{m\times n}(K)$:[^8]
>
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

#### Propiedad

> [!teorema] Multiplicar por menos uno
> Para $A\in M_{m\times n}(K)$:[^8]
>
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
> ¿Qué se obtiene al multiplicar una matriz por $-1_K$?
===
> [!important] Respuesta
> $(-1_K)A=-A$.
```

También podemos sumar matrices de un tamaño fijo y multiplicarlas por escalares sin salir de $M_{m\times n}(K)$. Las leyes demostradas y la igualdad $1_KA=A$, justificada en la prueba anterior, hacen de este conjunto un [[Matemáticas/Álgebra lineal/Espacios vectoriales/01 Espacios vectoriales — definición y axiomas|espacio vectorial sobre $K$]]. En este caso, los «vectores» del espacio son matrices.[^8]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
---
> [!note] Pregunta
> ¿Qué elementos desempeñan el papel de vectores en el espacio vectorial $M_{m\times n}(K)$?
===
> [!important] Respuesta
> Las matrices de tamaño fijo $m\times n$ con entradas en $K$; los escalares pertenecen a $K$.
```

## Producto matricial

### Definición y compatibilidad

Para calcular una entrada de $AB$ usamos una fila de $A$ y una columna de $B$. Emparejamos sus números, multiplicamos cada pareja y sumamos los productos. Las dos listas deben tener la misma longitud.

Sean $A=(a_{ij})\in M_{m\times n}(K)$ y $B=(b_{ij})\in M_{p\times q}(K)$, con $m,n,p,q\in\mathbb N$.

> [!definicion] Producto de matrices
> El [[Matemáticas/Álgebra lineal/Producto matricial|producto matricial]] $AB$ ==está definido si y sólo si $n=p$==. Sus entradas se calculan mediante
> $$
> (AB)_{ij}=\sum_{k=1}^{n}a_{ik}b_{kj}.
> $$
> $\forall i\in\{1,\ldots,m\},\ \forall j\in\{1,\ldots,q\}$.

El resultado pertenece a $M_{m\times q}(K)$: hay una fila por cada fila de $A$ y una columna por cada columna de $B$.[^8]

El sumatorio abrevia la expresión

$$
(AB)_{ij}=a_{i1}b_{1j}+a_{i2}b_{2j}+\cdots+a_{in}b_{nj}.
$$

En cada término, $k$ señala la posición de la pareja dentro de la fila y de la columna. Mientras calculamos una entrada concreta, $i$ y $j$ permanecen fijos. El resultado de la suma es un escalar de $K$.[^37]

Las dimensiones **interiores**, $n$ y $p$, deben coincidir. Las **exteriores**, $m$ y $q$, dan el número de filas y columnas del resultado:

$$
\underbrace{(m\times n)}_{A}\,
\underbrace{(p\times q)}_{B}
\quad\xrightarrow{\ n=p\ }\quad
\underbrace{(m\times q)}_{AB}.
$$

#### Ejemplo — Combinar filas con columnas

Multipliquemos las matrices siguientes. Sus tamaños se indican como subíndices para comprobar la compatibilidad antes de calcular:

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

> [!ejemplo] Segunda fila por primera columna
> $$
> (AB)_{21}=(-1)\cdot2+3\cdot0+4\cdot3=10.
> $$

![[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/03-producto-fila-columna.svg|*La segunda fila de A y la primera columna de B tienen tres entradas. Su combinación determina la entrada (2,1) del producto.*]]

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/assets/03-producto-fila-columna.excalidraw|Abrir el dibujo editable]]

Las otras tres entradas se calculan del mismo modo:

$$
\begin{aligned}
(AB)_{11}&=1\cdot2+2\cdot0+0\cdot3=2,\\
(AB)_{12}&=1\cdot1+2(-1)+0\cdot2=-1,\\
(AB)_{22}&=(-1)\cdot1+3(-1)+4\cdot2=4.
\end{aligned}
$$

Cada resultado ocupa la posición que fijan la fila y la columna utilizadas:

$$
AB=\begin{pmatrix}
2&-1\\
10&4
\end{pmatrix}_{2\times2}.
$$

#### Ejemplo — Un producto $2\times3$ por $3\times4$

$$
E_{2\times3}=
\begin{pmatrix}5&-1&0\\2&0&1\end{pmatrix}.
$$

$$
F_{3\times4}=
\begin{pmatrix}
1&-3&0&-1\\
2&-8&1&0\\
1&0&0&-1
\end{pmatrix}.
$$

Las dimensiones interiores coinciden en $3$, así que el producto existe. Para calcular su entrada $(1,2)$, emparejamos la primera fila de $E$ con la segunda columna de $F$:

$$
(EF)_{12}=5(-3)+(-1)(-8)+0\cdot0=-7.
$$

El producto completo, de tamaño $2\times4$, es

$$
EF=\begin{pmatrix}
3&-7&-1&-5\\
3&-6&0&-3
\end{pmatrix}_{2\times4}.
$$

En el orden contrario, $FE$ combinaría tamaños $3\times4$ y $2\times3$. Las dimensiones interiores, $4$ y $2$, no coinciden; por eso ==$FE$ no está definido==.[^8]

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

### Combinaciones lineales de vectores

En la primera columna de $AB$ han intervenido las tres columnas de $A$, con coeficientes $2$, $0$ y $3$ tomados de $B$. Una suma de múltiplos de vectores recibe el nombre de **combinación lineal**.

> [!definicion] Combinación lineal
> Para vectores $v_1,\ldots,v_p$ del mismo espacio y escalares $\lambda_1,\ldots,\lambda_p\in K$, una **[[Matemáticas/Álgebra lineal/Espacios vectoriales/03 Combinaciones lineales y espacio generado|combinación lineal]]** es una expresión
>
> $$
> \lambda_1v_1+\cdots+\lambda_pv_p.
> $$
> [^2]

#### Ejemplo — Combinar tres columnas

Las columnas de $A$ pertenecen a $\mathbb R^2$. Con los coeficientes de la primera columna de $B$,

$$
2\begin{pmatrix}1\\-1\end{pmatrix}
+0\begin{pmatrix}2\\3\end{pmatrix}
+3\begin{pmatrix}0\\4\end{pmatrix}
=\begin{pmatrix}2\\10\end{pmatrix}.
$$

Ésta es la primera columna del producto calculado. El coeficiente cero anula la contribución de la segunda columna de $A$.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Qué es una combinación lineal de vectores?
===
> [!important] Respuesta
> Una suma de múltiplos escalares de esos vectores: $\lambda_1v_1+\cdots+\lambda_pv_p$, con $\lambda_i\in K$.
```

### Lectura por columnas y filas

Sean $A\in M_{m\times n}(K)$ y $B\in M_{n\times p}(K)$. Al calcular una columna de $AB$, usamos sucesivamente todas las filas de $A$, pero siempre la misma columna de $B$.

Si las columnas de $B$ son $\mathbf b_1,\ldots,\mathbf b_p$,

> [!formula] Columnas del producto
> $$
> AB=(A\mathbf b_1\;\cdots\;A\mathbf b_p).
> $$
> [^2]

Llamemos $\mathbf a_1,\ldots,\mathbf a_n$ a las columnas de $A$. Para obtener la columna $j$ del producto, multiplicamos cada $\mathbf a_k$ por el número $b_{kj}$ y sumamos:

$$
A\mathbf b_j=b_{1j}\mathbf a_1+\cdots+b_{nj}\mathbf a_n.
$$

En la columna $j$ del producto, los coeficientes de esa combinación se leen en la columna $j$ de $B$.

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

Para leer el producto por filas, fijamos una fila de $A$ y la multiplicamos por $B$. Si la fila $i$ es $\mathbf r_i$, la fila correspondiente de $AB$ es $\mathbf r_iB$: sus entradas se calculan emparejando esa fila con cada columna de $B$.

#### Ejemplo — La primera fila del producto

La primera fila de $A$ es $(1,2,0)$. Al multiplicarla por $B$, esos tres números actúan como coeficientes de sus filas:

$$
(1,2,0)B=1(2,1)+2(0,-1)+0(3,2)=(2,-1).
$$

Obtenemos así las dos entradas de la primera fila de $AB$ a la vez.

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

### Matrices diagonales en un producto

Con la diagonal $D$ definida anteriormente,

$$
\begin{pmatrix}2&0&0\\0&0&0\\0&0&-1\end{pmatrix}
\begin{pmatrix}x\\y\\z\end{pmatrix}
=\begin{pmatrix}2x\\0\\-z\end{pmatrix}.
$$

En cada fila sólo puede contribuir la entrada diagonal. Cada coordenada se multiplica por el valor correspondiente de la diagonal, sin mezclarse con las demás.[^37]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - producto-matricial
---
> [!note] Pregunta
> ¿Cómo actúa una matriz diagonal sobre una columna de coordenadas?
===
> [!important] Respuesta
> Multiplica cada coordenada por la entrada diagonal correspondiente: $D\mathbf x=(d_{11}x_1,\ldots,d_{nn}x_n)^T$.
```

Si todas las entradas diagonales son $5$, las tres coordenadas se multiplican por el mismo número:

$$
5I_3\begin{pmatrix}x\\y\\z\end{pmatrix}
=\begin{pmatrix}5x\\5y\\5z\end{pmatrix}.
$$

En particular, una identidad selecciona una coordenada en cada fila y devuelve la columna inicial.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - producto-matricial
---
> [!note] Pregunta
> ¿Qué efecto tiene multiplicar una columna por la matriz escalar $\lambda I_n$?
===
> [!important] Respuesta
> Multiplica todas sus coordenadas por $\lambda$: $(\lambda I_n)\mathbf x=\lambda\mathbf x$.
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
> [^37]

> [!opcional]- Ampliación — Representación en bases compatibles
> Para aplicaciones $S:U\to V$ y $T:V\to W$ entre espacios vectoriales, se eligen [[Matemáticas/Álgebra lineal/Aplicaciones lineales#La matriz de una aplicación lineal|bases para obtener sus matrices]]: cada columna de su matriz contiene las coordenadas de la imagen de un vector de la base del dominio. Si sus matrices son $B$ y $A$, respectivamente, la matriz de $T\circ S$ es $AB$, usando **la misma base de $V$** para escribir la salida de $S$ y la entrada de $T$.[^37]

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

Las pruebas del producto requieren operar con sumas finitas. El símbolo $\sum$ permite escribirlas sin enumerar todos sus términos:

$$
\sum_{k=1}^{n}x_k=x_1+x_2+\cdots+x_n.
$$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - sumatorios
---
> [!note] Pregunta
> ¿Qué suma abrevia la notación $\sum_{k=1}^{n}x_k$?
===
> [!important] Respuesta
> $x_1+x_2+\cdots+x_n$: el índice $k$ recorre los enteros de $1$ a $n$.
```

El índice $k$ toma los valores enteros de $1$ a $n$. Por ejemplo, al calcular $(AB)_{21}$, los índices exteriores permanecen fijos en $i=2$, $j=1$ y sólo cambia $k$:

$$
\sum_{k=1}^{3}a_{2k}b_{k1}
=a_{21}b_{11}+a_{22}b_{21}+a_{23}b_{31}.
$$

Si un factor no depende de $k$, aparece igual en todos los sumandos. La distributividad permite sacarlo fuera de la suma:

$$
\sum_{k=1}^{n}\alpha x_k
=\alpha x_1+\cdots+\alpha x_n
=\alpha\sum_{k=1}^{n}x_k.
$$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - sumatorios
---
> [!note] Pregunta
> ¿Por qué puede sacarse un factor $\alpha$ fuera de $\sum_{k=1}^{n}\alpha x_k$ cuando no depende de $k$?
===
> [!important] Respuesta
> Porque multiplica por igual a todos los sumandos; la distributividad da $\sum_{k=1}^{n}\alpha x_k=\alpha\sum_{k=1}^{n}x_k$.
```

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

#### Propiedad

> [!teorema] Asociatividad del producto
> Sean $A\in M_{m\times n}(K)$, $B\in M_{n\times p}(K)$ y $C\in M_{p\times q}(K)$.
>
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
> **4. Reagrupar los factores escalares.** La asociatividad de la multiplicación de escalares permite escribir cada término como $a_{ik}(b_{k\ell}c_{\ell j})$. El factor $a_{ik}$ no depende de $\ell$; la distributividad permite sacarlo de la suma sobre esos $p$ valores:
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

#### Propiedad

> [!teorema] Distributividad por la derecha
> Para $A\in M_{m\times n}(K)$ y $B_1,B_2\in M_{n\times p}(K)$:[^8]
>
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

#### Propiedad

> [!teorema] Distributividad por la izquierda
> Para $A_1,A_2\in M_{m\times n}(K)$ y $B\in M_{n\times p}(K)$:[^8]
>
> $$
> \boxed{(A_1+A_2)B=A_1B+A_2B}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sean $A_1,A_2$ de tamaño $m\times n$ y $B$ de tamaño $n\times p$. Ambos lados miden $m\times p$. Fijemos $1\le i\le m$ y $1\le j\le p$.
>
> **1. Expandir la entrada del lado izquierdo.** La regla del producto da la primera suma; la regla de la suma reemplaza luego $(A_1+A_2)_{ik}$ por $(A_1)_{ik}+(A_2)_{ik}$:
> $$
> \begin{aligned}
> ((A_1+A_2)B)_{ij}
> &=\sum_{k=1}^{n}(A_1+A_2)_{ik}b_{kj}\\
> &=\sum_{k=1}^{n}\bigl((A_1)_{ik}+(A_2)_{ik}\bigr)b_{kj}.
> \end{aligned}
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

#### Propiedad

> [!teorema] Compatibilidad con el producto por escalar
> Para $\alpha\in K$, $A\in M_{m\times n}(K)$ y $B\in M_{n\times p}(K)$:[^8]
>
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
> Aquí usamos que los escalares de $\mathbb R$ o $\mathbb C$ conmutan: $a_{ik}\alpha=\alpha a_{ik}$. Junto con la asociatividad numérica, esto transforma cada sumando en $(\alpha a_{ik})b_{kj}$. Por eso la entrada de $A(\alpha B)$ coincide con la de $(\alpha A)B$ en cualquier posición. Las tres matrices tienen el mismo tamaño y las mismas entradas; concluimos
> $$
> \alpha(AB)=(\alpha A)B=A(\alpha B).
> $$
>
> [^19]

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

#### Propiedad

> [!teorema] Identidad a la izquierda
> Para $A\in M_{m\times n}(K)$:[^8]
>
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
> La entrada coincide con la de $A$ en cada posición del tamaño $m\times n$, de modo que $I_mA=A$. La identidad que multiplica por la izquierda tiene orden $m$, el número de filas de $A$.[^20]

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

#### Propiedad

> [!teorema] Identidad a la derecha
> Para $A\in M_{m\times n}(K)$:[^8]
>
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
> Como esto ocurre para cualquier $i,j$ admisible, la matriz resultante coincide con $A$: $AI_n=A$.[^20]

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

#### Propiedad

> [!teorema] Matriz nula a la izquierda
> Si $A\in M_{m\times n}(K)$ y $r\in\mathbb N$, entonces:[^8]
>
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
> Cada entrada de la nula vale $0_K$, y multiplicar un escalar por cero da cero.[^12] Por tanto,
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

#### Propiedad

> [!teorema] Matriz nula a la derecha
> Si $A\in M_{m\times n}(K)$ y $q\in\mathbb N$, entonces:[^8]
>
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
> Las entradas de la nula son $0_K$. Cada producto $a_{ik}0_K$ vale cero.[^12] Así,
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

#### Ejemplo — Cambiar el orden cambia el resultado

$$
C=\begin{pmatrix}1&1\\0&1\end{pmatrix}.
$$

$$
D=\begin{pmatrix}1&0\\2&-1\end{pmatrix}.
$$

Se obtienen

$$
CD=\begin{pmatrix}3&-1\\2&-1\end{pmatrix}.
$$

$$
DC=\begin{pmatrix}1&1\\2&1\end{pmatrix}.
$$

Las entradas $(1,1)$ ya son diferentes: ==$CD\ne DC$==. [^8]

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

#### Ejemplo — Calcular un cuadrado

$$
P=\begin{pmatrix}4&2\\-3&-1\end{pmatrix}.
$$

$$
P^2=\begin{pmatrix}10&6\\-9&-5\end{pmatrix}.
$$

Por ejemplo, la entrada $(1,1)$ es $4\cdot4+2(-3)=10$. Como $P$ es cuadrada de orden dos, $P^2$ vuelve a tener ese mismo tamaño.

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

#### Ejemplo — Una potencia puede dar la identidad

$$
R=\begin{pmatrix}1&1\\0&-1\end{pmatrix}.
$$

$$
R^2=\begin{pmatrix}1&0\\0&1\end{pmatrix}=I_2.
$$

La entrada superior derecha es $1\cdot1+1(-1)=0$. Las dos entradas diagonales valen uno y la inferior izquierda vale cero, de modo que $R^2=I_2$. Por ello, al multiplicar dos veces una columna por $R$, se recupera la columna inicial.

#### Ejemplo — Dos factores no nulos pueden dar cero

$$
N=\begin{pmatrix}1&i\\i&-1\end{pmatrix}.
$$

$$
N^2=\begin{pmatrix}0&0\\0&0\end{pmatrix}=0_2.
$$

Las cuatro entradas se anulan al usar $i^2=-1$:

$$
N^2=\begin{pmatrix}
1+i^2&i-i\\
i-i&i^2+1
\end{pmatrix}
=\begin{pmatrix}0&0\\0&0\end{pmatrix}.
$$

Así, ==$N^2=0_2$ aunque $N\ne0_2$==. En los números reales o complejos, un producto es cero solo si alguno de sus factores es cero; en el producto matricial, esa propiedad no se cumple.[^8]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto
---
> [!note] Pregunta
> Si un producto de matrices es cero, ¿debe ser cero alguno de sus factores?
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

### Transpuesta de una suma

#### Propiedad

> [!teorema] Transpuesta de una suma
> Para $A,B\in M_{m\times n}(K)$:[^7]
>
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

#### Propiedad

> [!teorema] Transpuesta de un producto por escalar
> Para $\lambda\in K$ y $A\in M_{m\times n}(K)$:[^7]
>
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

#### Propiedad

> [!teorema] Transpuesta de un producto matricial
> Sean $A\in M_{m\times n}(K)$ y $B\in M_{n\times p}(K)$.
>
> Al transponer un producto, se invierte el orden de los factores:
>
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
> \begin{aligned}
> (B^TA^T)_{ij}
> &=\sum_{k=1}^{n}(B^T)_{ik}(A^T)_{kj}\\
> &=\sum_{k=1}^{n}b_{ki}a_{jk}.
> \end{aligned}
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
> Si $A$ tiene solo entradas reales, $\overline A=A$ y, por tanto, ==$A^*=A^T$==. Esta es la razón de que «hermítica» y «simétrica» coincidan para matrices reales.[^7]

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

### Conjugada de una suma

#### Propiedad

> [!teorema] Conjugada de una suma
> Si $A,B\in M_{m\times n}(\mathbb C)$, entonces:[^7]
>
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

#### Propiedad

> [!teorema] Conjugada de un producto por escalar
> Para $\alpha\in\mathbb C$ y $A\in M_{m\times n}(\mathbb C)$:[^7]
>
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

#### Propiedad

> [!teorema] Conjugada de un producto matricial
> Si $A\in M_{m\times n}(\mathbb C)$ y $B\in M_{n\times p}(\mathbb C)$, entonces:[^7]
>
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
> \begin{aligned}
> (\overline{AB})_{ij}
> &=\overline{(AB)_{ij}}\\
> &=\overline{\sum_{k=1}^{n}a_{ik}b_{kj}}.
> \end{aligned}
> $$
>
> La conjugación respeta tanto sumas como productos de escalares complejos:
>
> $$
> \begin{aligned}
> (\overline{AB})_{ij}
> &=\sum_{k=1}^{n}\overline{a_{ik}b_{kj}}\\
> &=\sum_{k=1}^{n}\overline{a_{ik}}\,\overline{b_{kj}}.
> \end{aligned}
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

### Adjunta de un producto

#### Propiedad

> [!teorema] Adjunta de un producto
> Sean $A\in M_{m\times n}(\mathbb C)$ y $B\in M_{n\times p}(\mathbb C)$.
>
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
> Al transponer el producto, se invierte el orden de sus factores:
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

#### Propiedad

> [!teorema] Adjunta de un múltiplo escalar
> Si $\alpha\in\mathbb C$ y $A\in M_{m\times n}(\mathbb C)$, entonces:[^7]
>
> $$
> \boxed{(\alpha A)^*=\overline\alpha\,A^*}
> $$

#### Demostración

> [!demostracion] Demostración
> Por definición de conjugada transpuesta,
>
> $$
> (\alpha A)^*=(\overline{\alpha A})^T.
> $$
>
> Al conjugar un producto por escalar, se conjugan tanto el escalar como la matriz. Aplicamos esa propiedad ya demostrada:
>
> $$
> (\alpha A)^*=(\overline\alpha\,\overline A)^T.
> $$
>
> La transposición conserva el factor escalar, así que
>
> $$
> (\alpha A)^*=\overline\alpha\,(\overline A)^T.
> $$
>
> Como $(\overline A)^T=A^*$, obtenemos
>
> $$
> \boxed{(\alpha A)^*=\overline\alpha\,A^*}.\qquad\blacksquare
> $$
> [^32]

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

## Traza y sus propiedades

### Traza de una matriz

Sea $A=(a_{ij})\in M_n(K)$.

> [!definicion] Traza
> La **[[Matemáticas/Álgebra lineal/Traza de una matriz|traza]]** es la suma de las entradas de la [[#Diagonal principal|diagonal principal]]:
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

### Traza de la transpuesta

#### Propiedad

> [!teorema] Traza de la transpuesta
> Para $A\in M_n(K)$:[^7]
>
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

#### Propiedad

> [!teorema] Traza de una suma
> Para $A,B\in M_n(K)$:[^7]
>
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

#### Propiedad

> [!teorema] Traza de un múltiplo escalar
> Para $\lambda\in K$ y $A\in M_n(K)$:[^7]
>
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
> El último sumatorio es la definición de $\operatorname{tr}(A)$; esto prueba la propiedad.[^27]

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

#### Propiedad

> [!teorema] Igualdad de las trazas de $AB$ y $BA$
> Sean $A\in M_{m\times n}(K)$ y $B\in M_{n\times m}(K)$. Los productos $AB$ y $BA$ son cuadrados, de órdenes $m$ y $n$, respectivamente.
>
> Aunque los productos puedan tener tamaños distintos, sus trazas coinciden:[^7]
>
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

El producto de la fila $(2,-1)$ por la columna $(x,y)^T$ es $2x-y$. Por tanto, una fila de coeficientes puede representar el primer miembro de una ecuación lineal. Al colocar varias filas en una matriz, el producto devuelve una columna con esos primeros miembros, uno por ecuación.

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

La fila $i$ representa la ecuación $a_{i1}x_1+\cdots+a_{in}x_n=b_i$. El producto $A\mathbf{x}$ es una columna de $m$ componentes, una por ecuación, igual que $\mathbf b$.

#### Ejemplo — Un sistema de dos ecuaciones

Escribamos en forma matricial el sistema

$$
\begin{cases}
2x-y=3,\\
x+4y=1.
\end{cases}
$$

En la primera fila de $A$ colocamos los coeficientes $2,-1$; en la segunda, $1,4$. Las incógnitas y los términos independientes se escriben como columnas:

$$
A=\begin{pmatrix}2&-1\\1&4\end{pmatrix},
$$

$$
\mathbf x=\begin{pmatrix}x\\y\end{pmatrix},
\qquad
\mathbf b=\begin{pmatrix}3\\1\end{pmatrix}.
$$

El producto da una columna con el primer miembro de cada ecuación:

$$
A\mathbf x=\begin{pmatrix}2x-y\\x+4y\end{pmatrix}.
$$

Por eso $A\mathbf x=\mathbf b$ exige exactamente las dos igualdades del sistema.[^5]

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

### Matriz ampliada

> [!definicion] Matriz ampliada
> La [[Matemáticas/Álgebra lineal/Matriz ampliada|matriz ampliada]] $[A\mid\mathbf b]$ se obtiene al añadir la columna de términos independientes a la derecha de $A$.

#### Ejemplo — Añadir la columna de términos independientes

Para el sistema anterior, la matriz ampliada es

$$
[A\mid\mathbf b]=
\left[\begin{array}{cc|c}
2&-1&3\\
1&4&1
\end{array}\right].
$$

en donde la barra separa los coeficientes del término independiente.

La primera fila se lee $2x-y=3$ y la segunda, $x+4y=1$. Nótese que mediante la [[Matemáticas/Álgebra lineal/Eliminación de Gauss|eliminación de Gauss]], cada operación sobre una fila afectará también al número situado a la derecha de la barra.

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

## Condiciones de validez y errores frecuentes

- La suma y la resta requieren dos matrices del mismo tamaño.
- El producto requiere que coincidan las dimensiones interiores; las exteriores dan el tamaño del resultado.
- En matrices complejas, $A^T$ intercambia índices, $\overline A$ conjuga cada entrada y $A^*=\overline A^{\,T}$ realiza ambas operaciones.
- En $A\mathbf{x}=\mathbf{b}$, hay una columna de $A$ por incógnita y una fila por ecuación.

El capítulo siguiente, [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Eliminación y matrices elementales|Eliminación y matrices elementales]], desarrolla las operaciones sobre filas y su uso para resolver sistemas.

## 📚 Fuentes

### Material base aportado

- FCUL, aulas 2 y 3: vectores, matrices y sus operaciones.[^1][^8]
- FCUL, aula 4, diapositivas 2–12.[^7]

[^vectores]: FCUL, aula 2, 18/09/2026, diapositivas 5–10. Archivo privado `ALGA-2026-27-AulasTeo-slides-aula2-VectMatrizes-impressao.pdf`. Operaciones vectoriales, regla del paralelogramo, nulo y opuesto, ocho leyes y regla de signos.

[^1]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 2, 18/09/2026, diapositivas 3–22. Archivo privado `ALGA-2026-27-AulasTeo-slides-aula2-VectMatrizes-impressao.pdf`. Vectores coordenados, operaciones, definición de matriz y clases notables.

[^7]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 4, 23/09/2026. Archivo privado `ALGA-2026-27-AulasTeo-slides-aula4-FormaEscada-impressao.pdf`. Diap. 4: conjugada transpuesta; diap. 8: caso real de hermíticas; diap. 9: propiedades de la transpuesta; diap. 10: propiedades de conjugación; diap. 12: propiedades de la traza. Los TPC se identifican por estos localizadores; las fuentes de las pruebas se citan por separado.

[^8]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 3. Archivo privado `ALGA-2026-27-AulasTeo-slides-aula3-Matrizes-impressao.pdf`. Diap. 4, propiedades 1–4: suma; diap. 6, propiedades 1–5: producto por escalar; diap. 11, propiedades 1–6: producto matricial, sus distributividades y sus identidades y nulas. En estas diapositivas también se llama «simétrica de $A$» a $-A$; aquí se reserva «opuesta» para esa matriz, para distinguirla de la condición $A^T=A$. Fuente de los enunciados TPC; las pruebas se contrastan con las referencias indicadas junto a cada una.

### Ampliación académica

[^2]: [MIT OpenCourseWare, Gilbert Strang — “Multiplication and Inverse Matrices”](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/multiplication-and-inverse-matrices/). Lectura del producto por columnas y como composición.

[^4]: [Al Doerr y Ken Levasseur, *Applied Discrete Structures* — “Special Types of Matrices”](https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Applied_Discrete_Structures_%28Doerr_and_Levasseur%29/05%3A_Introduction_to_Matrix_Algebra/5.02%3A_Special_Types_of_Matrices). Clasificación de matrices especiales.

[^13]: [[Matemáticas/Sistemas numéricos/Números complejos|Números complejos]], apartados «Operaciones en forma binómica» y «Conjugación y módulo», para lectura y notación de $z=x+iy$.

[^14]: University of Manitoba, Math 1220, §3.2.2, Teorema 3.2.2, pruebas de conmutatividad y asociatividad de la suma de matrices. [Sección 3.2.2](https://linearalgebra.math.umanitoba.ca/math1220/section-16.html).

[^15]: University of Manitoba, Math 1220, §3.3, Teorema 3.3.4, pruebas por entradas de las leyes escalares para matrices. [Sección 3.3](https://linearalgebra.math.umanitoba.ca/math1220/section-17.html).

[^16]: Instituto Superior Técnico, *Apontamentos de Álgebra Linear*, §2.6, Teorema 2.6(i), pp.24–25. Prueba explícita de la asociatividad del producto matricial por entradas. [PDF](https://fenix.tecnico.ulisboa.pt/downloadFile/563568428979297/ApontamentosInteg.pdf).

[^17]: Instituto Superior Técnico, *Apontamentos de Álgebra Linear*, §2.18, p.27, Proposición 2.18, primera distributividad y demostración de $A(B+C)=AB+AC$. [PDF](https://fenix.tecnico.ulisboa.pt/downloadFile/563568428979297/ApontamentosInteg.pdf).

[^18]: University of Manitoba, Math 1220, §3.4, Teorema 3.4.7, prueba explícita de la distributividad de la suma en el factor izquierdo del producto. [Sección 3.4](https://linearalgebra.math.umanitoba.ca/math1220/section-18.html).

[^19]: Robert A. Beezer, *A First Course in Linear Algebra*, §MM, teorema MMSMM y demostración, p. impresa 145 de la versión 3.50. [Texto completo](https://upload.wikimedia.org/wikipedia/commons/8/8d/A_First_Course_in_Linear_Algebra_for_smartphones.pdf). Compatibilidad entre producto matricial y producto por escalar; adaptación de la notación e inclusión de las justificaciones escalares.

[^20]: Instituto Superior Técnico, [*Apontamentos de Álgebra Linear*](https://fenix.tecnico.ulisboa.pt/downloadFile/563568428979297/ApontamentosInteg.pdf), teorema 2.6(ii), pp. impresas 24–25: enuncia ambas identidades y propone verificarlas por filas y columnas. La prueba por entradas se contrasta además con el teorema MMIM de Beezer (§MM, versión 3.50); la fuente demuestra un lado y deja el otro como ejercicio. Aquí se desarrollan ambos sin introducir la delta de Kronecker.

[^21]: Robert A. Beezer, *A First Course in Linear Algebra*, §MM, teorema MMZM y demostración, pp. impresas 143–144 de la versión 3.50. [Texto completo](https://upload.wikimedia.org/wikipedia/commons/8/8d/A_First_Course_in_Linear_Algebra_for_smartphones.pdf). La fuente demuestra el producto con la nula a la derecha y deja el de la izquierda como ejercicio. Aquí se desarrolla también ese caso aplicando el mismo método a sus filas nulas, con los tamaños explícitos.

[^25]: University of Manitoba, Math 1220, §3.5, Teorema 3.5.4, pruebas de las propiedades de la transpuesta. [Sección 3.5](https://linearalgebra.math.umanitoba.ca/math1220/section-19.html).

[^26]: University of Puget Sound, Robert A. Beezer, *A First Course in Linear Algebra*, §MO, teoremas CRMA, CRMSM, CCM, MCT y §MM, teorema MMCC; pruebas por entradas de las leyes de conjugación y del producto conjugado. [PDF](https://upload.wikimedia.org/wikipedia/commons/8/8d/A_First_Course_in_Linear_Algebra_for_smartphones.pdf).

[^27]: Universidade da Coruña, *Linear Algebra I*, §2.5, pruebas de la traza de una transpuesta, una suma y un múltiplo escalar. [PDF](https://caminos.udc.es/info/asignaturas/grado_tecic/101/AL1/pdfs/THEORY2-1.pdf).

[^28]: University of Manitoba, Math 1220, §3.5, Teorema 3.5.6, prueba de $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ para tamaños rectangulares compatibles. [Sección 3.5](https://linearalgebra.math.umanitoba.ca/math1220/section-19.html).

[^24]: Universidad de Tikrit, *Chapter One: Matrices*, “Properties of the Addition of Matrices”, prueba (3), p. impresa 9 (PDF p. 16), prueba de las identidades con la matriz nula. [PDF](https://cedt.tu.edu.iq/images/1111/rym/sws/d.%20zynb%20ly%20jfr%20mdmj.pdf).

[^30]: Robert A. Beezer, *A First Course in Linear Algebra*, §CNO, pruebas de conjugación compleja y sus leyes para sumas, productos y doble conjugación. [Operaciones con números complejos](https://linear.pugetsound.edu/jsmath/0222/fcla-jsmath-2.22li69.html).

[^29]: Universidad de Tikrit, *Chapter One: Matrices*, “Multiplication of Matrix by Scalar”, proposición y prueba, p. impresa 10 (PDF p. 17), prueba del opuesto aditivo de la matriz por entradas. [PDF](https://cedt.tu.edu.iq/images/1111/rym/sws/d.%20zynb%20ly%20jfr%20mdmj.pdf).

[^5]: Departamento de Matemáticas, Universidade da Coruña, [*Linear Algebra I*, parte II, capítulo 1, §§1–2](https://caminos.udc.es/info/asignaturas/grado_tecic/101/AL1/pdfs/THEORY2-1.pdf). Definición, igualdad y operaciones matriciales sobre un cuerpo; la traducción de sistemas usa la regla del producto.

[^6]: [W. Keith Nicholson, *Linear Algebra with Applications* — “Complex Matrices”](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_%28Nicholson%29/08%3A_Orthogonality/8.07%3A_Complex_Matrices). Conjugada transpuesta y matrices hermíticas y antihermíticas.

[^31]: Rob Beavers, Western Oregon University, [*Linear Algebra*, §2.10, “Matrix Algebra”](https://people.wou.edu/~beavers/Text341/Book%20Updated%2010-5-22/sectionMatrixAlgebra.html), propiedad de la diagonal de una antisimétrica. Se desarrolla aquí la consecuencia por entradas a partir de la definición y de las leyes del cuerpo citadas en la referencia de Cuerpos; no se atribuye a la fuente una demostración que deja como ejercicio.

[^32]: Robert A. Beezer, *A First Course in Linear Algebra*, §MO, teorema AMSM y demostración, pp. impresas 134–135 de la versión 3.50. [Texto completo](https://upload.wikimedia.org/wikipedia/commons/8/8d/A_First_Course_in_Linear_Algebra_for_smartphones.pdf). Prueba de la adjunta de un múltiplo escalar mediante definición, conjugación y transposición; se adapta la notación y se explican sus pasos en castellano.

[^33]: Bruce Ikenaga, “Unitary and Hermitian Matrices”, proposición (c) y prueba de la relación entre la adjunta de un producto y las adjuntas de sus factores. El argumento se reordena usando la conmutación entre conjugación y transposición demostrada arriba. [Millersville University](https://sites.millersville.edu/bikenaga/linear-algebra/unitary-and-hermitian-matrices/unitary-and-hermitian-matrices.html).

[^9]: W. Keith Nicholson, *Linear Algebra with Applications*, §2.1, «Matrix Addition, Scalar Multiplication, and Transposition», Theorem 2.1.1 y demostración. [LibreTexts](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_(Nicholson)/02:_Matrix_Algebra/2.01:_Matrix_Addition_Scalar_Multiplication_and_Transposition). Contraste académico para las leyes de suma y producto por escalar.

[^10]: [[Matemáticas/Estructuras algebraicas/Cuerpos|Cuerpos]], §§1–2: leyes de suma, producto, distributividad, neutros y opuestos en $K=\mathbb R$ o $\mathbb C$.

[^12]: [[Matemáticas/Estructuras algebraicas/Cuerpos#Producto por cero|Cuerpos, producto por cero]]; la igualdad $0a=0$ se deriva allí de distributividad y cancelación aditiva.

[^34]: John S. Alin y Colin L. Starr, *Undergraduate Matrix Theory and Linear Algebra*, 15/01/2018, §1.3, Teorema 1.3.2(b), p. 18 (página 22 del PDF). [Willamette University](https://people.willamette.edu/~cstarr/math253/0LinAlgMain-18.pdf). La demostración publicada desarrolla la suma por entradas y aplica la asociatividad de los escalares. Adaptación al español y a la notación del curso, con las justificaciones separadas. Enunciado TPC: FCUL, aula 3, diap. 4, propiedad 2.[^8]

[^35]: University of Manitoba, *Math 1220*, §3.3, «Scalar Multiplication», ejercicio 3, solución por entradas de $0A=0$. [Texto y solución](https://linearalgebra.math.umanitoba.ca/math1220/section-17.html). Adaptación a la notación $0_K$ para el cero escalar y $0_{m\times n}$ para la matriz nula, sobre $K=\mathbb R$ o $\mathbb C$.

[^36]: Isaiah Lankham, Bruno Nachtergaele y Anne Schilling, *Linear Algebra*, §4.2, «Elementary Properties of Vector Spaces», proposiciones 4.2.5 y 4.2.2: producto por $-1$ y unicidad del inverso aditivo. [UC Davis / LibreTexts](https://math.libretexts.org/Bookshelves/Linear_Algebra/Book%3A_Linear_Algebra_%28Schilling_Nachtergaele_and_Lankham%29/04%3A_Vector_spaces/4.02%3A_Elementary_properties_of_vector_spaces). Adaptación al caso matricial usando las leyes de suma y producto por escalar demostradas previamente; no se presupone la estructura de espacio vectorial.

[^37]: Dan Margalit y Joseph Rabinoff, *Interactive Linear Algebra*, §3.4, «Matrix Multiplication», apartados 3.4.1–3.4.3: compatibilidad de dominios, regla fila-columna y representación de la composición mediante el producto de las matrices estándar. [Georgia Institute of Technology](https://textbooks.math.gatech.edu/ila/matrix-multiplication.html). El desarrollo sobre $K$ y la formulación en bases compatibles adaptan la explicación «Producto matricial: definición formal» aportada por el usuario; el texto de contraste presenta las transformaciones sobre $\mathbb R$.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como tutor de Álgebra lineal para primer curso universitario de Física. El alumno conoce aritmética real y compleja y está aprendiendo a justificar igualdades por componentes. Trabaja con $K=\mathbb R$ o $\mathbb C$ e índices naturales positivos.

Los vectores de $K^n$ son tuplas ordenadas; su suma y producto por escalar se calculan componente a componente. Una matriz $A=(a_{ij})\in M_{m\times n}(K)$ tiene $m$ filas y $n$ columnas. Dos matrices son iguales si tienen el mismo tamaño y coinciden en cada posición. Una prueba por componentes fija índices arbitrarios admisibles, aplica las definiciones y las leyes de $K$, y concluye con ese criterio de igualdad.

Repasa las clases de matrices con sus condiciones exactas: nula, todas las entradas cero; identidad, diagonal de unos y ceros exteriores; diagonal, $a_{ij}=0$ si $i\ne j$; escalar, $\lambda I_n$; triangular superior, ceros para $i>j$; inferior, ceros para $i<j$; simétrica, $a_{ij}=a_{ji}$; antisimétrica, $a_{ij}=-a_{ji}$; hermítica, $a_{ij}=\overline{a_{ji}}$; antihermítica, $a_{ij}=-\overline{a_{ji}}$. Las cuatro últimas son cuadradas. Sobre $\mathbb R$ o $\mathbb C$, la diagonal antisimétrica es cero, la hermítica es real y la antihermítica tiene parte real cero. En matrices reales, hermítica y simétrica son condiciones equivalentes.

La suma y resta exigen tamaños iguales: $(A+B)_{ij}=a_{ij}+b_{ij}$, $(-A)_{ij}=-a_{ij}$. El producto por escalar cumple $(\lambda A)_{ij}=\lambda a_{ij}$. Para $A\in M_{m\times n}(K)$ y $B\in M_{n\times p}(K)$, el producto es $m\times p$ y $(AB)_{ij}=\sum_{k=1}^n a_{ik}b_{kj}$. El orden no se intercambia. Usa los ejemplos existentes

$$
A=\begin{pmatrix}1&2&0\\-1&3&4\end{pmatrix},
\qquad B=\begin{pmatrix}2&1\\0&-1\\3&2\end{pmatrix},
\qquad AB=\begin{pmatrix}2&-1\\10&4\end{pmatrix}.
$$

Pide justificar una entrada y el tamaño antes de aceptar el cálculo. El producto es asociativo y distributivo; $I_mA=A=AI_n$ y los productos compatibles por nulas dan la nula del tamaño de salida. Para potencias positivas se usa $A^1=A$ y $A^p=A^{p-1}A$. Una matriz no nula puede tener cuadrado cero.

La transpuesta cumple $(A^T)_{ij}=a_{ji}$, la conjugada $(\overline A)_{ij}=\overline{a_{ij}}$ y la adjunta $(A^*)_{ij}=\overline{a_{ji}}$. Transponer o tomar adjunta invierte el orden de un producto; conjugar sólo las entradas lo conserva. Al conjugar un múltiplo o tomar su adjunta, el escalar también se conjuga. Para una cuadrada, $\operatorname{tr}(A)=\sum_i a_{ii}$; es aditiva, respeta el producto por escalar y no cambia al transponer. Si $A$ es $m\times n$ y $B$ es $n\times m$, $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ aunque los productos tengan órdenes distintos.

El sistema $2x-y=3$, $x+4y=1$ se escribe con $A=\begin{pmatrix}2&-1\\1&4\end{pmatrix}$, columna de incógnitas $(x,y)^T$ y segundo miembro $(3,1)^T$. La ampliada es $\left[\begin{array}{cc|c}2&-1&3\\1&4&1\end{array}\right]$. Pide reconstruir una ecuación desde su fila, como preparación para la eliminación de Gauss.

Formula una pregunta cada vez y espera el intento antes de mostrar la respuesta. Distingue error de concepto, de notación y de cálculo. Ante un fallo, pide revisar primero el significado de los índices o la operación aplicada; ofrece después una pista concreta. Adapta la dificultad y recupera más adelante los conocimientos que hayan fallado. Usa los ejemplos ya contenidos en el capítulo; no generes ejercicios nuevos. El bloque sobre composición y bases es una ampliación opcional y no un prerrequisito para las operaciones elementales.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
