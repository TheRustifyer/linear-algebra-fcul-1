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
fsrs_goal: Interpretar las entradas y dimensiones de una matriz real o compleja, clasificar sus formas notables, decidir y calcular suma, opuesto, producto escalar, producto matricial y transposición, y traducir un sistema lineal a Ax=b y a su matriz ampliada.
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

Fijados los ejes del plano, el par $u=(3,2)$ puede representarse por una flecha que parte del origen: avanza tres unidades en la dirección horizontal y dos en la vertical. Así, un [[Matemáticas/Álgebra lineal/Vectores|vector geométrico]] queda descrito mediante números cuyo orden indica a qué dirección corresponde cada desplazamiento. La misma idea se extiende a más de dos coordenadas.[^1]

### Tuplas de $n$ componentes: $K^n$

Un par como $(3,2)$ pertenece a $\mathbb R^2$: tiene dos componentes reales. Una terna de números reales pertenece a $\mathbb R^3$. En la notación $K^n$, $K$ indica de qué conjunto se toman las componentes —aquí, $\mathbb R$ o $\mathbb C$— y $n$ indica cuántas hay. Así, ==$K^n=\mathbb R^2$ cuando $K=\mathbb R$ y $n=2$==.[^1]

> [!definicion] Vector coordenado
> Tomamos $\mathbb N=\{1,2,3,\ldots\}$. Para $K=\mathbb R$ o $K=\mathbb C$ y $n\in\mathbb N$, un **vector coordenado** es una tupla ordenada $u=(x_1,\ldots,x_n)$ con $x_i\in K$ para todo $i\in\{1,\ldots,n\}$. El conjunto de todas ellas es $K^n$. El número $n$ cuenta sus componentes y $x_i$ es la componente en la posición $i$.

$K$ contiene escalares individuales, mientras que $K^n$ contiene tuplas: $1+i\in\mathbb C$ es un escalar, y $(1+i,2)\in\mathbb C^2$ es un vector coordenado.

### Igualdad de vectores coordenados

Dos tuplas son iguales cuando tienen la misma longitud y las componentes correspondientes coinciden. Por ejemplo, $(3,2)$ y $(2,3)$ son distintos: intercambiar las posiciones cambia el vector. Si $u=(x_1,\ldots,x_n)$ y $v=(y_1,\ldots,y_p)$, la condición completa es[^1]

$$
u=v\quad\Longleftrightarrow\quad n=p\ \text{y}\ x_i=y_i\quad\forall i\in\{1,\ldots,n\}.
$$

## Matrices: filas, columnas y entradas

En una tupla basta un índice para localizar un número, como $x_i$. Si se disponen varias filas de la misma longitud, hacen falta dos: uno señala la fila y otro la posición dentro de ella. Esa organización rectangular es una [[Matemáticas/Álgebra lineal/Matrices|matriz]].[^1]

### Definición de matriz

> [!definicion] Matriz de tamaño $m\times n$
> Dados $m,n\in\mathbb N$ y $K=\mathbb R$ o $K=\mathbb C$, una matriz $A$ de tamaño $m\times n$ es una disposición rectangular de entradas $a_{ij}\in K$, con $1\le i\le m$ y $1\le j\le n$:
> $$
> A=(a_{ij})_{m\times n}=
> \begin{pmatrix}
> a_{11}&\cdots&a_{1n}\\
> \vdots&\ddots&\vdots\\
> a_{m1}&\cdots&a_{mn}
> \end{pmatrix}.
> $$
> $m$ cuenta las filas y $n$ las columnas; $a_{ij}$ ocupa la fila $i$ y la columna $j$. El conjunto de estas matrices se denota $M_{m\times n}(K)$.[^1][^5]

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

Para comparar $A=(a_{ij})$ y $B=(b_{ij})$, primero se comprueba que ambas pertenecen al mismo $M_{m\times n}(K)$. Con esa condición,

$$
A=B\quad\Longleftrightarrow\quad
a_{ij}=b_{ij}\quad
\forall i\in\{1,\ldots,m\},\ \forall j\in\{1,\ldots,n\}.
$$

Dos matrices de tamaños distintos no son iguales aunque contengan el mismo número de entradas. El tamaño forma parte del objeto, no es un dato accesorio.

## Matrices por su forma

### Matriz rectangular no cuadrada

> [!definicion] Matriz rectangular no cuadrada
> Una matriz $A\in M_{m\times n}(K)$ es **rectangular no cuadrada** si $m\ne n$.

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

### Ejemplo — Una cuadrada de orden tres

> [!ejemplo] Reconocer la diagonal principal
> $$
> C=\begin{pmatrix}
> -1&3&0\\
> 4&2&1\\
> 7&0&5
> \end{pmatrix}\in M_3(K).
> $$
> Sus entradas diagonales son $c_{11}=-1$, $c_{22}=2$ y $c_{33}=5$. La **diagonal principal** existe porque las filas y columnas recorren el mismo conjunto de índices.[^1]

> [!recuerda] Caso de orden uno
> Una matriz $(a)$ de tamaño $1\times1$ también es cuadrada. No se identifica sin más con el escalar $a$: su tamaño sigue determinando qué operaciones matriciales se pueden aplicar.[^1]

### Matriz fila

> [!definicion] Matriz fila
> Una **matriz fila** tiene tamaño $1\times n$ para algún $n\in\mathbb N$.

### Ejemplo — Una fila con tres entradas

> [!ejemplo] Leer la única fila
> $$
> F=\begin{pmatrix}-2&\sqrt5&0\end{pmatrix}\in M_{1\times3}(\mathbb R).
> $$
> Las tres entradas pertenecen a la misma fila. Su tamaño la distingue de la columna formada por esos mismos números.[^1]

### Matriz columna

> [!definicion] Matriz columna
> Una **matriz columna** tiene tamaño $m\times1$ para algún $m\in\mathbb N$.

### Ejemplo — Una columna con tres entradas

> [!ejemplo] Leer la única columna
> $$
> G=\begin{pmatrix}1\\-1\\0\end{pmatrix}\in M_{3\times1}(\mathbb R).
> $$
> Cada entrada ocupa una fila diferente. Las columnas representan de forma natural tanto un vector de incógnitas como una columna de términos independientes.[^1]

## Matrices notables

El tamaño deja abierta otra pregunta: ¿qué entradas pueden ser distintas de cero? Las clases siguientes responden mediante condiciones sobre posiciones concretas.[^1][^4]

### Matriz nula

> [!definicion] Matriz nula
> Para $m,n\in\mathbb N$, la **[[Matemáticas/Álgebra lineal/Matriz nula|matriz nula]]** $0_{m\times n}\in M_{m\times n}(K)$ cumple
> $$
> (0_{m\times n})_{ij}=0_K
> \qquad\forall i\in\{1,\ldots,m\},\ \forall j\in\{1,\ldots,n\}.
> $$
> El subíndice conserva su tamaño: hay una matriz nula para cada par $(m,n)$.

### Ejemplo — La nula de orden tres

> [!ejemplo] Comprobar todas las posiciones
> $$
> 0_3=\begin{pmatrix}
> 0&0&0\\
> 0&0&0\\
> 0&0&0
> \end{pmatrix}.
> $$
> Sus nueve entradas son cero. También existe $0_{2\times3}$: el valor de sus entradas coincide, pero su tamaño y su papel en una suma son distintos.[^1]

> [!recuerda] Neutro de la suma
> Si $A\in M_{m\times n}(K)$, entonces ==$A+0_{m\times n}=A$==. Se usa la nula **del mismo tamaño**, pues la suma compara posiciones correspondientes.

### Matriz identidad

> [!definicion] Matriz identidad
> La **[[Matemáticas/Álgebra lineal/Matriz identidad|identidad]]** $I_n\in M_n(K)$ cumple, para todo $i,j\in\{1,\ldots,n\}$,
> $$
> (I_n)_{ij}=
> \begin{cases}
> 1_K,&i=j,\\
> 0_K,&i\ne j.
> \end{cases}
> $$

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

> [!definicion] Matriz diagonal
> Una matriz $D=(d_{ij})\in M_n(K)$ es **[[Matemáticas/Álgebra lineal/Matriz diagonal|diagonal]]** si
> $$
> d_{ij}=0_K
> \qquad\forall i,j\in\{1,\ldots,n\}\text{ con }i\ne j.
> $$

### Ejemplo — Una diagonal con un cero

> [!ejemplo] La diagonal puede contener ceros
> $$
> D=\begin{pmatrix}
> 2&0&0\\
> 0&0&0\\
> 0&0&-1
> \end{pmatrix}.
> $$
> Todas las entradas fuera de la diagonal son cero; la definición no exige que las diagonales sean no nulas. Sobre una columna $(x,y,z)^T$, esta matriz produce $(2x,0,-z)^T$.[^1]

### Matriz escalar

> [!definicion] Matriz escalar
> Una **[[Matemáticas/Álgebra lineal/Matriz escalar|matriz escalar]]** de orden $n$ tiene la forma $\lambda I_n$ para algún $\lambda\in K$: sus entradas fuera de la diagonal son cero y todas las diagonales valen $\lambda$.

### Ejemplo — El mismo escalar en toda la diagonal

> [!ejemplo] Escalado uniforme
> $$
> 5I_3=\begin{pmatrix}
> 5&0&0\\
> 0&5&0\\
> 0&0&5
> \end{pmatrix}.
> $$
> Multiplica cada componente de una columna de tres entradas por $5$. Toda identidad es escalar, tomando $\lambda=1$, y toda escalar es diagonal; también $0_3=0_KI_3$ es escalar.[^1]

### Matriz triangular superior

> [!definicion] Matriz triangular superior
> Una matriz $A=(a_{ij})\in M_n(K)$ es **[[Matemáticas/Álgebra lineal/Matriz triangular superior|triangular superior]]** si
> $$
> a_{ij}=0_K
> \qquad\forall i,j\in\{1,\ldots,n\}\text{ con }i>j.
> $$

### Ejemplo — Ceros bajo la diagonal

> [!ejemplo] Triangular superior de orden tres
> $$
> U=\begin{pmatrix}
> 7&1&-2\\
> 0&3&4\\
> 0&0&-5
> \end{pmatrix}.
> $$
> Las posiciones $(2,1)$, $(3,1)$ y $(3,2)$ están debajo de la diagonal y son cero. Las entradas de la diagonal o superiores pueden tomar cualquier valor.[^1]

### Matriz triangular inferior

> [!definicion] Matriz triangular inferior
> Una matriz $L=(\ell_{ij})\in M_n(K)$ es **[[Matemáticas/Álgebra lineal/Matriz triangular inferior|triangular inferior]]** si
> $$
> \ell_{ij}=0_K
> \qquad\forall i,j\in\{1,\ldots,n\}\text{ con }i<j.
> $$

### Ejemplo — Ceros sobre la diagonal

> [!ejemplo] Triangular inferior de orden tres
> $$
> L=\begin{pmatrix}
> 2&0&0\\
> 1&-1&0\\
> 0&5&3
> \end{pmatrix}.
> $$
> Ahora son cero las posiciones $(1,2)$, $(1,3)$ y $(2,3)$. ==Toda diagonal es triangular superior e inferior== porque todas sus entradas fuera de la diagonal son cero.[^1]

### Matriz simétrica

> [!definicion] Matriz simétrica
> Una matriz $A=(a_{ij})\in M_n(K)$ es **[[Matemáticas/Álgebra lineal/Matriz simétrica|simétrica]]** si $A^T=A$, es decir,
> $$
> a_{ij}=a_{ji}\qquad\forall i,j\in\{1,\ldots,n\}.
> $$

### Ejemplo — Reflejo respecto de la diagonal

> [!ejemplo] Simétrica de orden tres
> $$
> S=\begin{pmatrix}
> 3&5&1\\
> 5&0&-2\\
> 1&-2&-1
> \end{pmatrix}.
> $$
> Se comprueban las parejas $s_{12}=s_{21}=5$, $s_{13}=s_{31}=1$ y $s_{23}=s_{32}=-2$. La condición obliga a que la matriz sea cuadrada y no conjuga las entradas.[^4]

> [!advertencia] Dos sentidos de «simétrica» en las diapositivas
> El aula 3 llama «matriz simétrica de $A$» a $-A$, el **opuesto aditivo**. La propiedad $A^T=A$ define una **matriz simétrica** en el sentido de clasificación. Aquí se reserva «opuesta» para $-A$.[^8]

### Matriz antisimétrica

> [!definicion] Matriz antisimétrica
> Una matriz $A=(a_{ij})\in M_n(K)$ es **[[Matemáticas/Álgebra lineal/Matriz antisimétrica|antisimétrica]]** si $A^T=-A$, equivalentemente,
> $$
> a_{ij}=-a_{ji}\qquad\forall i,j\in\{1,\ldots,n\}.
> $$

En una posición diagonal se tiene $i=j$, por lo que la condición exige $a_{ii}=-a_{ii}$. Al sumar $a_{ii}$ a ambos lados resulta $2a_{ii}=0_K$. Como $K$ es $\mathbb R$ o $\mathbb C$ y $2\ne0_K$, se concluye ==$a_{ii}=0_K$ para cada $i$==. Esta conclusión puede fallar en un cuerpo de característica dos.[^4]

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

> [!definicion] Matriz hermítica
> Para $A=(a_{ij})\in M_n(\mathbb C)$, la **conjugada transpuesta** es $A^*=\overline A^{\,T}$. La matriz es **[[Matemáticas/Álgebra lineal/Matriz hermítica|hermítica]]** si $A^*=A$, equivalentemente,
> $$
> a_{ij}=\overline{a_{ji}}\qquad\forall i,j\in\{1,\ldots,n\}.
> $$

### Ejemplo — Conjugación al cruzar la diagonal

> [!ejemplo] Hermítica de orden tres
> $$
> H=\begin{pmatrix}
> 1&1-2i&4i\\
> 1+2i&0&-8\\
> -4i&-8&-2
> \end{pmatrix}.
> $$
> Por ejemplo, $h_{21}=\overline{h_{12}}=1+2i$ y $h_{31}=\overline{h_{13}}=-4i$. En la diagonal, $h_{ii}=\overline{h_{ii}}$, de modo que sus entradas son reales; sustituir $-2$ por $-2+i$ rompería la condición.[^6]

> [!recuerda] Caso real
> Si todas las entradas son reales, $\overline A=A$ y por tanto $A^*=A^T$. En consecuencia, ==una matriz real es hermítica si y sólo si es simétrica==. Esta equivalencia aparece expresamente en el aula 4, diapositiva 8.[^7]

### Matriz antihermítica

> [!definicion] Matriz antihermítica
> Una matriz $A=(a_{ij})\in M_n(\mathbb C)$ es **[[Matemáticas/Álgebra lineal/Matriz antihermítica|antihermítica]]** si $A^*=-A$, es decir,
> $$
> a_{ij}=-\overline{a_{ji}}\qquad\forall i,j\in\{1,\ldots,n\}.
> $$

### Ejemplo — Diagonal imaginaria

> [!ejemplo] Antihermítica de orden tres
> $$
> Q=\begin{pmatrix}
> i&2+i&0\\
> -2+i&0&3\\
> 0&-3&-2i
> \end{pmatrix}.
> $$
> La pareja $q_{12}=2+i$, $q_{21}=-2+i=-\overline{q_{12}}$ verifica la condición; ocurre lo mismo con las demás parejas. En la diagonal, $q_{ii}=-\overline{q_{ii}}$ fuerza parte real nula. La antisimetría usa $A^T$; la antihermiticidad, $A^*$.[^6]

Una misma matriz puede pertenecer a varias clases: $I_n$ es escalar, toda escalar es diagonal y toda diagonal es triangular superior e inferior. La nula cuadrada satisface además las condiciones de simetría, antisimetría, hermiticidad y antihermiticidad.

## Suma, opuesto y producto por un escalar

### Suma de matrices

> [!definicion] Suma de matrices
> Si $A=(a_{ij})$ y $B=(b_{ij})$ pertenecen a $M_{m\times n}(K)$, la [[Matemáticas/Álgebra lineal/Suma de matrices|suma de matrices]] se define por $(A+B)_{ij}=a_{ij}+b_{ij}$ para todo $i\in\{1,\ldots,m\}$ y todo $j\in\{1,\ldots,n\}$. Solo se suman matrices del mismo tamaño.

El resultado conserva el tamaño $m\times n$. ==La igualdad de tamaños se comprueba antes de sumar==: una matriz $2\times3$ y otra $3\times2$ no tienen entradas correspondientes, aunque ambas contengan seis números.[^8]

### Ejemplo — Sumar entradas correspondientes

> [!ejemplo] Suma de dos matrices $2\times3$
> Sean
> $$
> A=\begin{pmatrix}5&-1&0\\2&0&1\end{pmatrix}.
> $$
> $$
> B=\begin{pmatrix}-3&8&1\\1&0&1\end{pmatrix}.
> $$
> Ambas tienen el mismo tamaño. La primera entrada del resultado es $5+(-3)=2$ y la situada en la fila 2, columna 3 es $1+1=2$; por tanto,
> $$
> A+B=\begin{pmatrix}2&7&1\\3&0&2\end{pmatrix}.
> $$

### Opuesto y resta

> [!definicion] Matriz opuesta y resta
> La **opuesta** de $A=(a_{ij})\in M_{m\times n}(K)$ es $-A=(-a_{ij})\in M_{m\times n}(K)$. Para $A,B$ del mismo tamaño, la resta se define por $A-B=A+(-B)$.

La palabra «opuesta» evita la ambigüedad de las diapositivas: allí se llama «matriz simétrica de $A$» a $-A$, mientras que una matriz *simétrica* en la clasificación satisface $A^T=A$.[^8]

### Ejemplo — Cambiar el signo de cada entrada

> [!ejemplo] Opuesta de la matriz anterior
> $$
> -A=\begin{pmatrix}-5&1&0\\-2&0&-1\end{pmatrix}.
> $$
> La resta $A-B$ se obtiene sumando esta clase de opuesta a $A$; no se resta una matriz de tamaño diferente.

### Conmutatividad de la suma

> [!formula] La propiedad
> Para $A,B\in M_{m\times n}(K)$, se cumple $A+B=B+A$.[^8]

> [!demostracion] Por entradas
> Fijemos $i\in\{1,\ldots,m\}$ y $j\in\{1,\ldots,n\}$. Entonces
> $$
> (A+B)_{ij}=a_{ij}+b_{ij}=b_{ij}+a_{ij}=(B+A)_{ij}.
> $$
> El paso central es la conmutatividad de la suma en $K$. Como vale en cada posición, las dos matrices son iguales.

### Asociatividad de la suma

> [!formula] La propiedad
> Para $A,B,C\in M_{m\times n}(K)$, se cumple $(A+B)+C=A+(B+C)$.[^8]

> [!demostracion] Por entradas
> En cualquier posición $(i,j)$ válida,
> $$
> ((A+B)+C)_{ij}=(a_{ij}+b_{ij})+c_{ij}
> =a_{ij}+(b_{ij}+c_{ij})=(A+(B+C))_{ij}.
> $$
> La igualdad central usa la asociatividad de la suma de escalares. Por eso puede escribirse $A+B+C$ sin paréntesis.

### La matriz nula como neutro aditivo

> [!formula] La propiedad
> Para $A\in M_{m\times n}(K)$, $A+0_{m\times n}=A=0_{m\times n}+A$.[^8]

> [!demostracion] Por entradas
> Como cada entrada de $0_{m\times n}$ es $0_K$,
> $$
> (A+0_{m\times n})_{ij}=a_{ij}+0_K=a_{ij}.
> $$
> La suma por el otro lado da $0_K+a_{ij}=a_{ij}$. El neutro escalar actúa en todas las posiciones.

### La matriz opuesta como inverso aditivo

> [!formula] La propiedad
> Para $A\in M_{m\times n}(K)$, $A+(-A)=0_{m\times n}=(-A)+A$.[^8]

> [!demostracion] Por entradas
> $$
> (A+(-A))_{ij}=a_{ij}+(-a_{ij})=0_K=(0_{m\times n})_{ij}.
> $$
> Cada escalar se cancela con su opuesto; el mismo cálculo, en orden inverso, prueba la segunda igualdad.

### Producto de un escalar por una matriz

> [!definicion] Producto por escalar
> Para $\lambda\in K$ y $A=(a_{ij})\in M_{m\times n}(K)$, el [[Matemáticas/Álgebra lineal/Producto de matriz por escalar|producto por escalar]] $\lambda A$ conserva el tamaño de $A$ y cumple $(\lambda A)_{ij}=\lambda a_{ij}$ para todo $i\in\{1,\ldots,m\}$ y todo $j\in\{1,\ldots,n\}$.

El escalar se escribe a la izquierda, de acuerdo con la notación del aula 3. La operación multiplica **cada** entrada por el mismo número.[^8]

### Ejemplo — Escalar todas las entradas

> [!ejemplo] Cuatro veces una matriz $2\times3$
> $$
> 4A
> =4\begin{pmatrix}5&-1&0\\2&0&1\end{pmatrix}
> =\begin{pmatrix}20&-4&0\\8&0&4\end{pmatrix}.
> $$
> El tamaño permanece $2\times3$ y los ceros siguen siendo cero.

### Asociatividad de los escalares sobre matrices

> [!formula] La propiedad
> Si $\alpha,\beta\in K$ y $A\in M_{m\times n}(K)$, entonces $(\alpha\beta)A=\alpha(\beta A)$.[^8]

> [!demostracion] Por entradas
> $$
> ((\alpha\beta)A)_{ij}=(\alpha\beta)a_{ij}
> =\alpha(\beta a_{ij})=(\alpha(\beta A))_{ij}.
> $$
> La agrupación cambia por la asociatividad del producto en $K$; el tamaño permanece $m\times n$.

### Distribución sobre la suma de matrices

> [!formula] La propiedad
> Para $A,B\in M_{m\times n}(K)$ y $\alpha\in K$, $\alpha(A+B)=\alpha A+\alpha B$.[^8]

> [!demostracion] Por entradas
> $$
> (\alpha(A+B))_{ij}=\alpha(a_{ij}+b_{ij})
> =\alpha a_{ij}+\alpha b_{ij}
> =(\alpha A+\alpha B)_{ij}.
> $$
> La distributividad en $K$ permite pasar de un escalar que multiplica una suma a la suma de dos productos.

### Distribución sobre la suma de escalares

> [!formula] La propiedad
> Para $\alpha,\beta\in K$ y $A\in M_{m\times n}(K)$, $(\alpha+\beta)A=\alpha A+\beta A$.[^8]

> [!demostracion] Por entradas
> $$
> ((\alpha+\beta)A)_{ij}=(\alpha+\beta)a_{ij}
> =\alpha a_{ij}+\beta a_{ij}
> =(\alpha A+\beta A)_{ij}.
> $$
> Ahora la suma está en el conjunto de escalares; cada uno multiplica la misma entrada de $A$.

### Multiplicar por cero

> [!formula] La propiedad
> Para $A\in M_{m\times n}(K)$, $0_KA=0_{m\times n}$.[^8]

> [!demostracion] Por entradas
> $$
> (0_KA)_{ij}=0_Ka_{ij}=0_K=(0_{m\times n})_{ij}.
> $$
> El primer cero es un escalar; el último $0_{m\times n}$ es una matriz con el tamaño de $A$.

### Multiplicar por menos uno

> [!formula] La propiedad
> Para $A\in M_{m\times n}(K)$, $(-1_K)A=-A$.[^8]

> [!demostracion] Por entradas
> Para cualquier escalar $a\in K$, $a+(-1_K)a=(1_K-1_K)a=0_K$, de modo que $(-1_K)a=-a$. Aplicado a $a_{ij}$,
> $$
> ((-1_K)A)_{ij}=(-1_K)a_{ij}=-a_{ij}=(-A)_{ij}.
> $$

Estas leyes muestran que $M_{m\times n}(K)$, con la suma y el producto por escalar definidos arriba, es un [[Matemáticas/Álgebra lineal/Espacios vectoriales|espacio vectorial]] sobre $K$.[^8]

## Producto matricial

### Definición y compatibilidad

> [!definicion] Producto de matrices
> Sean $A\in M_{m\times n}(K)$ y $B\in M_{p\times q}(K)$. El [[Matemáticas/Álgebra lineal/Producto matricial|producto matricial]] $AB$ ==está definido si y sólo si $n=p$==. En ese caso, $AB\in M_{m\times q}(K)$ y, para $i\in\{1,\ldots,m\}$ y $j\in\{1,\ldots,q\}$,
> $$
> (AB)_{ij}=\sum_{k=1}^{n}a_{ik}b_{kj}.
> $$
> Cada entrada se obtiene multiplicando los términos correspondientes de la fila $i$ de $A$ y la columna $j$ de $B$, y sumando esos $n$ productos.[^8]

Los tamaños se leen en dos pasos. Las dimensiones **interiores**, $n$ y $p$, deciden si las entradas pueden emparejarse; las **exteriores**, $m$ y $q$, son el tamaño del resultado:

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

==Las dos dimensiones interiores valen $3$==, así que el producto existe y debe medir $2\times2$. La entrada $(2,1)$ ilustra el cálculo: la segunda fila de $A$ se combina con la primera columna de $B$,

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

> [!ejemplo] Datos del aula 3
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
> Las dimensiones interiores son $3$ y $3$. La entrada $(1,2)$ se obtiene de la primera fila de $E$ y la segunda columna de $F$:
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
> El producto inverso $FE$ exigiría combinar tamaños $3\times4$ y $2\times3$. Como las dimensiones interiores serían $4$ y $2$, ==$FE$ no está definido==.
> Así se conserva el ejemplo numérico de la diapositiva 9 del aula 3.[^8]

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

Si las columnas de $B$ son $\mathbf b_1,\ldots,\mathbf b_p$, entonces $AB=(A\mathbf b_1\;\cdots\;A\mathbf b_p)$. Cada columna de $AB$ es una combinación lineal de las columnas de $A$, con coeficientes tomados de la columna correspondiente de $B$. También cada fila del producto es la fila correspondiente de $A$ multiplicada por $B$ [^2].

### Producto como composición

Una matriz representa una [[Matemáticas/Álgebra lineal/Aplicaciones lineales|aplicación lineal]] cuando se eligen bases para dominio y codominio. Sus columnas contienen las coordenadas de las imágenes de los vectores de la base del dominio. Si $B$ representa primero $S:U\to V$ y $A$ representa después $T:V\to W$, el producto $AB$ representa $T\circ S$: actúa primero $B$, luego $A$. Esta interpretación explica por qué la composición matricial conserva el orden de actuación [^2].

### Asociatividad del producto

> [!formula] La propiedad
> Si $A\in M_{m\times n}(K)$, $B\in M_{n\times p}(K)$ y $C\in M_{p\times q}(K)$, entonces $(AB)C=A(BC)\in M_{m\times q}(K)$.[^8]

> [!demostracion] Las dos agrupaciones dan la misma entrada
> Fijemos $i\in\{1,\ldots,m\}$ y $j\in\{1,\ldots,q\}$. Al sustituir la definición de producto en $(AB)C$,
> $$
> ((AB)C)_{ij}
> =\sum_{\ell=1}^{p}\sum_{k=1}^{n}a_{ik}b_{k\ell}c_{\ell j}.
> $$
> Como las sumas son finitas, pueden intercambiarse. La asociatividad del producto en $K$ permite agrupar $b_{k\ell}c_{\ell j}$:
> $$
> ((AB)C)_{ij}
> =\sum_{k=1}^{n}a_{ik}
> \left(\sum_{\ell=1}^{p}b_{k\ell}c_{\ell j}\right)
> =(A(BC))_{ij}.
> $$
> Los dos resultados miden $m\times q$ y coinciden en cada entrada; por tanto son iguales.

La asociatividad autoriza cambiar los paréntesis de un producto triple compatible, ==sin cambiar el orden de los factores==.

### Distributividad por la derecha

> [!formula] La propiedad
> Para $A\in M_{m\times n}(K)$ y $B_1,B_2\in M_{n\times p}(K)$, $A(B_1+B_2)=AB_1+AB_2$.[^8]

> [!demostracion] Distribuir dentro de una entrada
> La entrada $(i,j)$ del lado izquierdo es
> $$
> \sum_{k=1}^{n}a_{ik}\bigl(b^{(1)}_{kj}+b^{(2)}_{kj}\bigr).
> $$
> La distributividad en $K$ separa cada sumando; al reunir los términos de $B_1$ y de $B_2$ se obtiene $(AB_1)_{ij}+(AB_2)_{ij}$. Los dos lados miden $m\times p$, luego son la misma matriz.

### Distributividad por la izquierda

> [!formula] La propiedad
> Para $A_1,A_2\in M_{m\times n}(K)$ y $B\in M_{n\times p}(K)$, $(A_1+A_2)B=A_1B+A_2B$.[^8]

> [!demostracion] Distribuir la otra entrada del sumando
> Ahora la entrada $(i,j)$ del lado izquierdo es
> $$
> \sum_{k=1}^{n}\bigl(a^{(1)}_{ik}+a^{(2)}_{ik}\bigr)b_{kj}.
> $$
> Al distribuir $b_{kj}$ y separar las dos sumas finitas aparecen $(A_1B)_{ij}$ y $(A_2B)_{ij}$. También aquí ambos lados tienen tamaño $m\times p$.

### Compatibilidad con el producto por escalar

> [!formula] La propiedad
> Para $\alpha\in K$, $A\in M_{m\times n}(K)$ y $B\in M_{n\times p}(K)$,
> $$
> \alpha(AB)=(\alpha A)B=A(\alpha B).
> $$
> Esta es la cuarta ley del producto del aula 3, diapositiva 11.[^8]

> [!demostracion] El escalar puede entrar en cualquier factor
> En la posición $(i,j)$,
> $$
> \bigl(\alpha(AB)\bigr)_{ij}
> =\alpha\sum_{k=1}^{n}a_{ik}b_{kj}
> =\sum_{k=1}^{n}(\alpha a_{ik})b_{kj}.
> $$
> La igualdad usa la distributividad del producto sobre una suma finita y da la entrada de $(\alpha A)B$. Como $K=\mathbb R$ o $\mathbb C$ es conmutativo, $(\alpha a_{ik})b_{kj}=a_{ik}(\alpha b_{kj})$; así se obtiene también la entrada de $A(\alpha B)$.

### Identidad a la izquierda

> [!formula] Conservación de cada fila
> Para $A\in M_{m\times n}(K)$, $I_mA=A$.[^8]

> [!demostracion] Seleccionar la fila correcta
> El producto tiene tamaño $m\times n$. En su entrada $(i,j)$,
> $$
> (I_mA)_{ij}=\sum_{k=1}^{m}(I_m)_{ik}a_{kj}=a_{ij}.
> $$
> Todos los sumandos salvo el de $k=i$ son cero. La igualdad de entradas en ese tamaño prueba $I_mA=A$.

### Identidad a la derecha

> [!formula] Conservación de cada columna
> Para $A\in M_{m\times n}(K)$, $AI_n=A$.[^8]

> [!demostracion] Seleccionar la columna correcta
> Este producto también mide $m\times n$. Para su entrada $(i,j)$,
> $$
> (AI_n)_{ij}=\sum_{k=1}^{n}a_{ik}(I_n)_{kj}=a_{ij}.
> $$
> Solo el término con $k=j$ permanece; de ahí la igualdad de las matrices.

### Matriz nula a la izquierda

> [!formula] Tamaño del resultado
> Si $A\in M_{m\times n}(K)$ y $r\in\mathbb N$, entonces $0_{r\times m}A=0_{r\times n}$.[^8]

> [!demostracion] Suma de términos nulos
> Cada entrada del resultado es $\sum_{k=1}^{m}0_Ka_{kj}=0_K$. El producto tiene $r$ filas y $n$ columnas; por tanto es exactamente $0_{r\times n}$.

### Matriz nula a la derecha

> [!formula] Tamaño del resultado
> Si $A\in M_{m\times n}(K)$ y $q\in\mathbb N$, entonces $A0_{n\times q}=0_{m\times q}$.[^8]

> [!demostracion] Suma de términos nulos
> Cada entrada del resultado es $\sum_{k=1}^{n}a_{ik}0_K=0_K$. El producto mide $m\times q$; por tanto es exactamente $0_{m\times q}$.

### No conmutatividad del producto

La asociatividad anterior no implica $AB=BA$. Incluso cuando ambos productos existen y tienen el mismo tamaño, pueden diferir.[^8]

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

### Definición de potencia

> [!definicion] Potencia positiva de una matriz
> Para $A\in M_n(K)$ y $p\in\mathbb N$, la [[Matemáticas/Álgebra lineal/Potencia de una matriz|potencia]] se define por $A^1=A$ y, si $p>1$, $A^p=A^{p-1}A$. Existe porque cada factor tiene tamaño $n\times n$.[^8]

### Ejemplo — Calcular un cuadrado

> [!ejemplo] Producto de la matriz por sí misma
> $$
> P=\begin{pmatrix}4&2\\-3&-1\end{pmatrix}.
> $$
> $$
> P^2=\begin{pmatrix}10&6\\-9&-5\end{pmatrix}.
> $$
> Por ejemplo, la entrada $(1,1)$ es $4\cdot4+2(-3)=10$. El resultado conserva el orden dos.

### Ejemplo — Una potencia puede dar la identidad

> [!ejemplo] $R^2=I_2$
> $$
> R=\begin{pmatrix}1&1\\0&-1\end{pmatrix}.
> $$
> $$
> R^2=\begin{pmatrix}1&0\\0&1\end{pmatrix}=I_2.
> $$
> La entrada superior derecha vale $1\cdot1+1(-1)=0$; el producto deshace el efecto de $R$.

### Ejemplo — Dos factores no nulos pueden dar cero

> [!ejemplo] Un cuadrado nulo
> $$
> N=\begin{pmatrix}1&i\\i&-1\end{pmatrix}.
> $$
> $$
> N^2=\begin{pmatrix}0&0\\0&0\end{pmatrix}=0_2.
> $$
> En la entrada $(1,1)$ aparece $1+i^2=0$. La igualdad ==$N^2=0_2$ con $N\ne0_2$== muestra que la cancelación del producto de escalares no se traslada sin más a las matrices.[^8]

## Transpuesta y conjugada transpuesta

### Transpuesta

> [!definicion] Transpuesta
> Si $A=(a_{ij})\in M_{m\times n}(K)$, su **[[Matemáticas/Álgebra lineal/Transpuesta de una matriz|transpuesta]]** $A^T\in M_{n\times m}(K)$ se define por
> $$
> (A^T)_{ij}=a_{ji}
> \qquad\forall i\in\{1,\ldots,n\},\ \forall j\in\{1,\ldots,m\}.
> $$
> Intercambia la función de filas y columnas.[^7]

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

> [!formula] La propiedad
> Para $A\in M_{m\times n}(K)$, $(A^T)^T=A$.[^7]

> [!demostracion] Intercambiar dos veces devuelve cada posición
> La primera transposición da una matriz $n\times m$; la segunda, una $m\times n$. En una posición válida,
> $$
> ((A^T)^T)_{ij}=(A^T)_{ji}=a_{ij}.
> $$
> Ambas matrices tienen el mismo tamaño y las mismas entradas, luego son iguales.

### Transpuesta de una suma

> [!formula] La propiedad
> Para $A,B\in M_{m\times n}(K)$, $(A+B)^T=A^T+B^T$.[^7]

> [!demostracion] Intercambio y suma se aplican a la misma pareja de entradas
> Para $i\in\{1,\ldots,n\}$ y $j\in\{1,\ldots,m\}$,
> $$
> ((A+B)^T)_{ij}=(A+B)_{ji}=a_{ji}+b_{ji}.
> $$
> Es la entrada $(i,j)$ de $A^T+B^T$. Los dos lados miden $n\times m$.

### Transpuesta de un producto por escalar

> [!formula] La propiedad
> Para $\lambda\in K$ y $A\in M_{m\times n}(K)$, $(\lambda A)^T=\lambda A^T$.[^7]

> [!demostracion] El escalar no cambia la posición
> $$
> ((\lambda A)^T)_{ij}=(\lambda A)_{ji}
> =\lambda a_{ji}=(\lambda A^T)_{ij}.
> $$
> La transposición cambia los índices; multiplicar por $\lambda$ cambia el valor de cada entrada. Las acciones no interfieren.

### Transpuesta de un producto matricial

> [!formula] La propiedad
> Si $A\in M_{m\times n}(K)$ y $B\in M_{n\times p}(K)$, entonces ==$(AB)^T=B^TA^T$==. Ambos lados miden $p\times m$.[^7]

> [!demostracion] El orden se invierte al intercambiar fila y columna
> Para $i\in\{1,\ldots,p\}$ y $j\in\{1,\ldots,m\}$,
> $$
> ((AB)^T)_{ij}
> =(AB)_{ji}
> =\sum_{k=1}^{n}a_{jk}b_{ki}.
> $$
> Por conmutatividad del producto de escalares, cada término puede escribirse $b_{ki}a_{jk}=(B^T)_{ik}(A^T)_{kj}$. La suma es, por definición, $(B^TA^T)_{ij}$. Como coinciden todas las entradas, coinciden las matrices.

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

> [!definicion] Matriz conjugada
> Para $A=(a_{ij})\in M_{m\times n}(\mathbb C)$, la **conjugada** $\overline A$ conserva el tamaño de $A$ y cumple $(\overline A)_{ij}=\overline{a_{ij}}$ en cada posición. La barra a la derecha conjuga un número; sobre toda la matriz, conjuga cada entrada.[^7]

### Ejemplo — Cambiar el signo de las partes imaginarias

> [!ejemplo] Conjugación de una matriz $2\times3$
> $$
> C=\begin{pmatrix}1+i&2&-i\\3-i&0&4i\end{pmatrix}.
> $$
> $$
> \overline C=\begin{pmatrix}1-i&2&i\\3+i&0&-4i\end{pmatrix}.
> $$
> Los números reales permanecen iguales; por ejemplo, el $2$ de la primera fila no cambia.

### Conjugada transpuesta

> [!definicion] Conjugada transpuesta
> Para $A\in M_{m\times n}(\mathbb C)$, la **[[Matemáticas/Álgebra lineal/Conjugada transpuesta de una matriz|conjugada transpuesta]]** o **adjunta** es $A^*=\overline A^{\,T}\in M_{n\times m}(\mathbb C)$, con
> $$
> (A^*)_{ij}=\overline{a_{ji}}
> \qquad\forall i\in\{1,\ldots,n\},\ \forall j\in\{1,\ldots,m\}.
> $$
> Esta es la transconjugada del aula 4, diapositiva 4.[^7]

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

> [!formula] La propiedad
> Para $A\in M_{m\times n}(\mathbb C)$, $\overline{\overline A}=A$.[^7]

> [!demostracion] Cada número recupera su valor
> En la posición $(i,j)$, $(\overline{\overline A})_{ij}=\overline{\overline{a_{ij}}}=a_{ij}$. La última igualdad es la ley de doble conjugación de los números complejos; el tamaño no cambia.

### Conjugada de una suma

> [!formula] La propiedad
> Si $A,B\in M_{m\times n}(\mathbb C)$, entonces $\overline{A+B}=\overline A+\overline B$.[^7]

> [!demostracion] Conjugar una suma de escalares
> $$
> (\overline{A+B})_{ij}
> =\overline{a_{ij}+b_{ij}}
> =\overline{a_{ij}}+\overline{b_{ij}}
> =(\overline A+\overline B)_{ij}.
> $$
> La segunda igualdad es la aditividad de la conjugación compleja.

### Conjugada de un producto por escalar

> [!formula] La propiedad
> Para $\alpha\in\mathbb C$ y $A\in M_{m\times n}(\mathbb C)$, $\overline{\alpha A}=\overline\alpha\,\overline A$.[^7]

> [!demostracion] Ambos factores se conjugan
> $$
> (\overline{\alpha A})_{ij}
> =\overline{\alpha a_{ij}}
> =\overline\alpha\,\overline{a_{ij}}
> =(\overline\alpha\,\overline A)_{ij}.
> $$
> El paso central usa que la conjugación de un producto de complejos es el producto de sus conjugados.

### Conjugada de un producto matricial

> [!formula] La propiedad
> Si $A\in M_{m\times n}(\mathbb C)$ y $B\in M_{n\times p}(\mathbb C)$, entonces $\overline{AB}=\overline A\,\overline B$.[^7]

> [!demostracion] Se conjuga cada sumando
> $$
> (\overline{AB})_{ij}
> =\overline{\sum_{k=1}^{n}a_{ik}b_{kj}}
> =\sum_{k=1}^{n}\overline{a_{ik}}\,\overline{b_{kj}}.
> $$
> La conjugación respeta sumas finitas y productos de escalares. La última suma es la entrada $(i,j)$ de $\overline A\,\overline B$. ==La conjugación sola conserva el orden de los factores==.

### Conjugación y transposición

> [!formula] La propiedad
> Para cualquier matriz compleja $A$, $\overline{A^T}=(\overline A)^T$.[^7]

> [!demostracion] Las dos operaciones llegan a la misma entrada
> $$
> (\overline{A^T})_{ij}
> =\overline{(A^T)_{ij}}
> =\overline{a_{ji}}
> =((\overline A)^T)_{ij}.
> $$
> Conjugar cambia el valor y transponer cambia la posición; hacerlo en uno u otro orden produce la misma matriz.

### Adjunta de un producto

> [!consecuencia] Inversión del orden
> Si $A\in M_{m\times n}(\mathbb C)$ y $B\in M_{n\times p}(\mathbb C)$, entonces $(AB)^*=B^*A^*$. Ambos lados miden $p\times m$.[^7]

> [!demostracion] Conjugar y transponer
> Al conjugar $AB$ se obtiene $\overline A\,\overline B$ sin invertir el orden. La transposición posterior sí lo invierte:
> $$
> (AB)^*=(\overline{AB})^T
> =(\overline A\,\overline B)^T
> =(\overline B)^T(\overline A)^T=B^*A^*.
> $$
> El cambio de orden procede de la transposición, no de la conjugación.

### Adjunta de un múltiplo escalar

> [!consecuencia] Conjugación del escalar
> Si $\alpha\in\mathbb C$ y $A\in M_{m\times n}(\mathbb C)$, entonces $(\alpha A)^*=\overline\alpha\,A^*$.[^7]

> [!demostracion] Seguir las dos operaciones
> Primero se conjugan tanto el escalar como las entradas: $\overline{\alpha A}=\overline\alpha\,\overline A$. Después se transpone, sin volver a conjugar el escalar:
> $$
> (\alpha A)^*=(\overline\alpha\,\overline A)^T
> =\overline\alpha\,(\overline A)^T
> =\overline\alpha\,A^*.
> $$

### Traza de una matriz

> [!definicion] Traza
> Para $A=(a_{ij})\in M_n(K)$, la **[[Matemáticas/Álgebra lineal/Traza de una matriz|traza]]** es el escalar obtenido al sumar las entradas de la diagonal principal:
> $$
> \operatorname{tr}(A)=\sum_{i=1}^{n}a_{ii}\in K.
> $$
> Solo se define aquí para matrices cuadradas.[^7]

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

Como $I_n$ tiene $n$ unos en la diagonal, $\operatorname{tr}(I_n)=n\cdot1_K$, que se escribe $n$ cuando el cuerpo es $\mathbb R$ o $\mathbb C$.

### Traza de la transpuesta

> [!formula] La propiedad
> Para $A\in M_n(K)$, $\operatorname{tr}(A^T)=\operatorname{tr}(A)$.[^7]

> [!demostracion] La diagonal no cambia
> En cada posición diagonal, $(A^T)_{ii}=a_{ii}$. Al sumar esas mismas $n$ entradas se obtiene la misma traza:
> $$
> \operatorname{tr}(A^T)=\sum_{i=1}^{n}(A^T)_{ii}
> =\sum_{i=1}^{n}a_{ii}=\operatorname{tr}(A).
> $$

### Traza de una suma

> [!formula] La propiedad
> Para $A,B\in M_n(K)$, $\operatorname{tr}(A+B)=\operatorname{tr}(A)+\operatorname{tr}(B)$.[^7]

> [!demostracion] Separar dos sumas finitas
> $$
> \operatorname{tr}(A+B)=\sum_{i=1}^{n}(a_{ii}+b_{ii})
> =\sum_{i=1}^{n}a_{ii}+\sum_{i=1}^{n}b_{ii}.
> $$
> El segundo paso reagrupa sumas de escalares en $K$; sus dos términos son las trazas buscadas.

### Traza de un múltiplo escalar

> [!formula] La propiedad
> Para $\lambda\in K$ y $A\in M_n(K)$, $\operatorname{tr}(\lambda A)=\lambda\operatorname{tr}(A)$.[^7]

> [!demostracion] El mismo factor aparece en toda la diagonal
> $$
> \operatorname{tr}(\lambda A)
> =\sum_{i=1}^{n}\lambda a_{ii}
> =\lambda\sum_{i=1}^{n}a_{ii}.
> $$
> La distributividad permite sacar $\lambda$ de la suma finita.

### Igualdad de las trazas de $AB$ y $BA$

> [!formula] La propiedad
> Si $A\in M_{m\times n}(K)$ y $B\in M_{n\times m}(K)$, entonces ==$\operatorname{tr}(AB)=\operatorname{tr}(BA)$==. Ambos productos son cuadrados, aunque $AB$ sea $m\times m$ y $BA$ sea $n\times n$.[^7]

> [!demostracion] Reordenar sumas, no matrices
> La diagonal de $AB$ da
> $$
> \operatorname{tr}(AB)
> =\sum_{i=1}^{m}\sum_{k=1}^{n}a_{ik}b_{ki}.
> $$
> Como las sumas son finitas, se cambia su orden; como $K$ es conmutativo, se intercambian los dos escalares de cada producto:
> $$
> \sum_{i=1}^{m}\sum_{k=1}^{n}a_{ik}b_{ki}
> =\sum_{k=1}^{n}\sum_{i=1}^{m}b_{ki}a_{ik}
> =\operatorname{tr}(BA).
> $$
> Esta prueba **no** afirma que $AB=BA$; solo que las sumas de sus diagonales coinciden.

## Sistemas lineales en forma matricial

### Ecuación $A\mathbf{x}=\mathbf{b}$

> [!definicion] Forma matricial de un sistema
> Un sistema de $m$ ecuaciones lineales con $n$ incógnitas se expresa como $A\mathbf{x}=\mathbf{b}$, donde $A\in M_{m\times n}(K)$ es la matriz de coeficientes, $\mathbf{x}\in M_{n\times1}(K)$ es la columna de incógnitas y $\mathbf{b}\in M_{m\times1}(K)$ contiene los términos independientes.

La fila $i$ corresponde a $a_{i1}x_1+\cdots+a_{in}x_n=b_i$. Por eso hay una fila por ecuación y una columna por incógnita; $A\mathbf{x}$ tiene $m$ componentes, como $\mathbf b$.

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
> La [[Matemáticas/Álgebra lineal/Matriz ampliada|matriz ampliada]] $[A\mid\mathbf b]$ añade a la derecha de $A$ la columna de términos independientes.

### Ejemplo — Añadir la columna de términos independientes

Para el sistema anterior, la matriz ampliada es

$$
[A\mid\mathbf b]=
\left[\begin{array}{cc|c}
2&-1&3\\
1&4&1
\end{array}\right].
$$

La matriz ampliada conserva en un solo arreglo coeficientes y términos independientes. Las operaciones por filas se desarrollan al estudiar la [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales#5. Eliminación de Gauss|eliminación de Gauss]].

## Condiciones de validez y errores frecuentes

- Para sumar o restar, confirma que las dos matrices tienen el mismo tamaño.
- Para multiplicar, compara las dimensiones interiores y anuncia el tamaño exterior del resultado.
- En matrices complejas, distingue $A^T$ de $A^*$; solo $A^*$ conjuga entradas.
- En $A\mathbf{x}=\mathbf{b}$, comprueba una columna por incógnita y una fila por ecuación.

Estas comprobaciones expresan las condiciones de validez: una suma requiere entradas correspondientes, un producto requiere dimensiones interiores iguales y la conjugación sólo interviene en $A^*$.

## 📚 Fuentes

### Material base aportado

- [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/New Folder With Items/ALGA-2026-27-AulasTeo-slides-aula2-VectMatrizes-impressao.pdf|FCUL, aula 2]] y [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/New Folder With Items/ALGA-2026-27-AulasTeo-slides-aula3-Matrizes-impressao.pdf|aula 3]]. Material docente FCUL 2026/27 sobre vectores y operaciones matriciales.
- FCUL, aula 4, diapositivas 2–12.[^7]

[^1]: [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/New Folder With Items/ALGA-2026-27-AulasTeo-slides-aula2-VectMatrizes-impressao.pdf|FCUL, Álgebra Linear e Geometria Analítica, aula 2 (18/09/2026)]], diapositivas 3–22: vectores coordenados, operaciones, definición de matriz y clases notables.

[^7]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 4, «Matrizes em forma de escada», 23/09/2026, diapositivas 2–12. Consultado en el historial local de Git, objeto ed59e5ed7c86fcbbad4f95f5ce8e02eeb76bbbc0; el PDF no está actualmente en el árbol de trabajo.

[^8]: [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/New Folder With Items/ALGA-2026-27-AulasTeo-slides-aula3-Matrizes-impressao.pdf|FCUL, Álgebra Linear e Geometria Analítica, aula 3]], diapositivas 2–11: suma, producto por escalar, producto matricial, potencias y TPC de sus propiedades.

### Alcance curricular

1. [Faculdade de Ciências, Universidade de Lisboa — programa de Álgebra Linear e Geometria Analítica, 2026/2027](https://fenix.ciencias.ulisboa.pt/courses/algana-847504421686879/programa). Fuente institucional para el alcance de matrices y sistemas sobre $\mathbb R$ y $\mathbb C$; no respalda definiciones ni propiedades matemáticas.

### Ampliación académica

[^2]: [2. MIT OpenCourseWare, Gilbert Strang — “Multiplication and Inverse Matrices”](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/multiplication-and-inverse-matrices/). Lectura del producto por columnas y como composición.

[^4]: [4. Al Doerr y Ken Levasseur, *Applied Discrete Structures* — “Special Types of Matrices”](https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Applied_Discrete_Structures_%28Doerr_and_Levasseur%29/05%3A_Introduction_to_Matrix_Algebra/5.02%3A_Special_Types_of_Matrices). Clasificación de matrices especiales.

[^5]: [5. Jim Hefferon, *Linear Algebra*](https://hefferon.net/linearalgebra/). Referencia de texto para definición y álgebra elemental de matrices.

[^6]: [6. W. Keith Nicholson, *Linear Algebra with Applications* — “Complex Matrices”](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_%28Nicholson%29/08%3A_Orthogonality/8.07%3A_Complex_Matrices). Conjugada transpuesta y matrices hermíticas y antihermíticas.

## 🧑‍🏫 Prompt para tutor conversacional

Ayuda a estudiar matrices en un curso universitario introductorio de Física. Comprueba que el estudiante interpreta $a_{ij}$ y las dimensiones, clasifica matrices notables reales y complejas, verifica compatibilidad antes de sumar o multiplicar, y justifica por qué el producto no se puede reordenar. Pídele que distinga $A^T$ de $A^*$ y traduzca un sistema a $A\mathbf{x}=\mathbf{b}$ y $[A\mid\mathbf b]$. No generes ejercicios nuevos: diagnostica cada respuesta, explica el error conceptual con precisión y usa ejemplos funcionales cortos.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
