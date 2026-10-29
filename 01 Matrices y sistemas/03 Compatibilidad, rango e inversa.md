---
title: Compatibilidad, rango e inversa
aliases:
  - Rango de una matriz e invertibilidad
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
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Eliminación y matrices elementales|Eliminación y matrices elementales]]"
desbloquea:
  - "[[Matemáticas/Álgebra lineal/Determinantes|Determinantes]]"
relacionado:
  - "[[Matemáticas/Álgebra lineal/Matrices|Matrices]]"
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/07 Núcleo, imagen, rango y nulidad|Rango, núcleo e imagen]]"
fsrs_goal: Clasifica sistemas por sus rangos, calcula la inversa por Gauss–Jordan, comprueba inversas bilaterales de matrices elementales, escalares, transpuestas y conjugadas transpuestas, resuelve AX=B con una matriz invertible y justifica por qué AB invertible fuerza la invertibilidad de A y B.
simbolos:
  - \operatorname{rg}(A)
  - - A\mid\mathbf b
  - A^{-1}
  - I_n
tags:
  - matemáticas
  - álgebra-lineal
  - sistemas-lineales
  - rango
  - matriz-inversa
  - curricular
---

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

# Compatibilidad, rango e inversa

> [!important] Alcance de las clases
> Integra el rango de las aulas 5–6, las diapositivas 11–14 del aula 6 y el aula 7 completa sobre inversas. El criterio de compatibilidad amplía lo necesario para clasificar sistemas; el aula 8 se desarrolla por separado.

La forma escalonada permite leer tres aspectos de un [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales|sistema lineal]]: si existe solución, cuántas variables quedan libres y si una matriz cuadrada puede deshacer una transformación. El mismo dato —la posición de los pivotes— conecta compatibilidad, rango e invertibilidad.

## Rango y pivotes

> [!definicion] Rango
> El rango de una matriz $A$, denotado $\operatorname{rg}(A)$, es el número de pivotes de cualquiera de sus formas escalonadas por filas. Equivale a la dimensión del espacio generado por sus filas y también por sus columnas.

Las operaciones elementales por filas no cambian el rango. Por eso puede calcularse reduciendo la matriz: cada fila no nula de la forma escalonada aporta un pivote, y las filas nulas no aportan ninguno. Si $A$ tiene $m$ filas y $n$ columnas,

$$
0\leq \operatorname{rg}(A)\leq\min(m,n).
$$

Una columna pivote identifica una variable básica; una columna sin pivote identifica una variable libre. En el sistema homogéneo, las variables libres parametrizan las soluciones. El rango y estas subestructuras se relacionan con el [[Matemáticas/Álgebra lineal/Espacios vectoriales/07 Núcleo, imagen, rango y nulidad|núcleo y la imagen]] de la aplicación representada por la matriz.[^2]

## Criterio de compatibilidad

Sea $A\in K^{m\times n}$ y $\mathbf b\in K^m$, con $K=\mathbb R$ o $\mathbb C$. El rango de la matriz ampliada nunca es menor que el de $A$, porque sólo se añade una columna.

> [!definicion] Teorema de Rouché–Capelli
> El sistema $A\mathbf x=\mathbf b$ es compatible si y sólo si
> $$
> \operatorname{rg}(A)=\operatorname{rg}([A\mid\mathbf b]).
> $$
> Si los rangos difieren, una fila reducida contiene una igualdad imposible $0=c$ con $c\ne0$.

Cuando el sistema es compatible y el rango común es $r$, hay $n-r$ variables libres. Por tanto, si $r=n$ la solución es única; si $r<n$, en los cuerpos $\mathbb R$ y $\mathbb C$ hay infinitas soluciones parametrizadas. El rango de $A$ no basta por sí solo para decidir compatibilidad: hay que comparar con el rango de la matriz ampliada.[^1][^2]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - rango
  - compatibilidad
---
> [!note] Pregunta
> ¿Cuál es el criterio de Rouché–Capelli para que $A\mathbf x=\mathbf b$ tenga solución?
===
> [!important] Respuesta
> Que $\operatorname{rg}(A)=\operatorname{rg}([A\mid\mathbf b])$.
```

## Clasificación de los sistemas

La clasificación depende de la comparación de rangos y del número $n$ de incógnitas.

### Sistema compatible determinado

Es compatible determinado si tiene una única solución. Esto ocurre exactamente cuando

$$
\operatorname{rg}(A)=\operatorname{rg}([A\mid\mathbf b])=n.
$$

Cada incógnita corresponde entonces a una columna pivote.

### Sistema compatible indeterminado

Es compatible indeterminado si tiene más de una solución. Para $K=\mathbb R$ o $\mathbb C$, esto equivale a

$$
\operatorname{rg}(A)=\operatorname{rg}([A\mid\mathbf b])<n.
$$

Las columnas sin pivote determinan las variables libres y, con ellas, los parámetros de la solución general. En $\mathbb R$ o $\mathbb C$ un parámetro puede tomar infinitos valores; al variar una variable libre se obtienen soluciones distintas, pues esa coordenada cambia.

### Sistema incompatible

Es incompatible si no tiene solución:

$$
\operatorname{rg}(A)<\operatorname{rg}([A\mid\mathbf b]).
$$

Al reducir la matriz ampliada aparece una fila cuyo lado de coeficientes es nulo y cuyo término independiente no lo es; representa $0=c$, con $c\ne0$.

### Ejemplo trabajado: lectura de pivotes

La forma escalonada ampliada

$$
\begin{pmatrix}1&1&\mid&2\\0&0&\mid&0\end{pmatrix}
$$

tiene un pivote en la matriz de coeficientes y uno en la ampliada: ambos rangos valen $1$. Hay $n-r=2-1=1$ variable libre. Tomando $y=t$, la primera fila da $x=2-t$; el sistema es compatible indeterminado.

En cambio,

$$
\begin{pmatrix}1&1&\mid&2\\0&0&\mid&1\end{pmatrix}
$$

tiene $\operatorname{rg}(A)=1$ y $\operatorname{rg}([A\mid\mathbf b])=2$. La última fila expresa $0=1$, así que el sistema es incompatible. La lectura de rangos evita confundir “menos pivotes que incógnitas” con incompatibilidad: ese caso también puede ser compatible, pero con variables libres.[^1]

## Inversa de una matriz cuadrada

> [!definicion] Matriz inversa
> Para $A\in K^{n\times n}$, una matriz $B\in K^{n\times n}$ es una [[Matemáticas/Álgebra lineal/Matriz inversa|matriz inversa]] de $A$ si
> $$
> AB=BA=I_n.
> $$
> Si existe, es única y se denota $A^{-1}$.

Gauss–Jordan calcula la inversa reduciendo simultáneamente $A$ e $I_n$:

$$
[A\mid I_n]\longrightarrow[I_n\mid A^{-1}].
$$

La reducción sólo puede dejar $I_n$ a la izquierda si hay un pivote en cada columna de $A$. Si falta un pivote, Gauss–Jordan no produce la identidad; más adelante se justifica que, para una matriz cuadrada, esto equivale a que no exista inversa. El procedimiento se apoya en que cada operación elemental es reversible; las matrices que representan esas operaciones se estudian y verifican en la sección siguiente.[^2]

### Ejemplo trabajado: cálculo por Gauss–Jordan

Para $A=\begin{pmatrix}1&2\\3&7\end{pmatrix}$,

$$
\left[\begin{array}{cc|cc}1&2&1&0\\3&7&0&1\end{array}\right]
\xrightarrow{R_2\leftarrow R_2-3R_1}
\left[\begin{array}{cc|cc}1&2&1&0\\0&1&-3&1\end{array}\right]
\xrightarrow{R_1\leftarrow R_1-2R_2}
\left[\begin{array}{cc|cc}1&0&7&-2\\0&1&-3&1\end{array}\right].
$$

Por tanto,

$$
A^{-1}=\begin{pmatrix}7&-2\\-3&1\end{pmatrix}.
$$

La comprobación directa da $AA^{-1}=A^{-1}A=I_2$.

## Inventario completo de invertibilidad: aulas 6 y 7

El aula 6 motiva la inversa comparando $\sqrt5\cdot(1/\sqrt5)=1$ y $3\cdot(1/3)=1$ en $\mathbb R$ con el hecho de que $3$ no tiene inversa *dentro de* $\mathbb N$. En $M_n(K)$ el neutro es $I_n$, pero la multiplicación no es conmutativa: por eso la definición pide $AB=BA=I_n$. No toda matriz no nula es invertible; una fila o columna completamente nula impide la inversa. $I_n^{-1}=I_n$. El ejemplo de ambas clases es

$$A=\begin{pmatrix}1&0&-1\\2&2&-1\\1&4&2\end{pmatrix},\qquad B=\begin{pmatrix}4&-2&1\\-5/2&3/2&-1/2\\3&-2&1\end{pmatrix},\qquad AB=BA=I_3,$$

de modo que $B=A^{-1}$. La unicidad de esta inversa se demuestra en [[#Unicidad de la inversa|la propiedad correspondiente]]. Las matrices elementales también son invertibles: $P_{ij}^{-1}=P_{ij}$, $D_i(\lambda)^{-1}=D_i(1/\lambda)$ para $\lambda\ne0$, y $E_{ij}(\lambda)^{-1}=E_{ij}(-\lambda)$.

### Inversa de una matriz elemental de permutación

> [!formula] La propiedad
> Si $P_{ij}$ se obtiene de $I_n$ intercambiando las filas distintas $i$ y $j$, entonces $P_{ij}^{-1}=P_{ij}$. (Aula 6, diap. 14.)[^a6]

#### Demostración paso a paso

Probaremos que $P_{ij}$ es inversa por ambos lados. Por el resultado sobre multiplicación por la izquierda, multiplicar una matriz por $P_{ij}$ intercambia en ella las filas $i$ y $j$; en particular, aplicado a $I_n$ produce $P_{ij}$.

**1. Componer el intercambio consigo mismo.** La primera aplicación cambia las filas $i$ y $j$; la segunda las devuelve a sus lugares. Por tanto,

$$
P_{ij}P_{ij}=I_n.
$$

**2. Verificar ambos órdenes.** La matriz y el candidato a inversa son el mismo factor, $P_{ij}$. Por ello, el producto de la matriz por el candidato y el del candidato por la matriz coinciden en la expresión ya calculada; ambos valen $I_n$. Por tanto, $P_{ij}^{-1}=P_{ij}$.

### Inversa de una matriz elemental de escalado

> [!formula] La propiedad
> Si $\lambda\in K\setminus\{0\}$, entonces $D_i(\lambda)^{-1}=D_i(\lambda^{-1})$. (Aula 6, diap. 14.)[^a6]

#### Demostración paso a paso

Como $\lambda\ne0$, existe el escalar inverso $\lambda^{-1}$. El producto $D_i(\lambda)D_i(\lambda^{-1})$ aplica a $I_n$ primero el escalado por $\lambda^{-1}$ y después el escalado por $\lambda$ a la fila $i$.

**1. Calcular la fila modificada.** En la columna $i$, el valor diagonal pasa de $1$ a $\lambda^{-1}$ y luego a $\lambda\lambda^{-1}=1$; en las demás columnas de esa fila, los ceros siguen siendo cero. La fila $i$ vuelve a ser la fila $i$ de $I_n$.

**2. Comprobar las demás filas y el orden inverso.** Ninguna de las dos operaciones modifica filas distintas de $i$, así que las otras filas siguen siendo las de $I_n$. Repetir primero el factor $D_i(\lambda)$ y después $D_i(\lambda^{-1})$ también da diagonal $\lambda^{-1}\lambda=1$ en esa fila. Por tanto,

$$
D_i(\lambda)D_i(\lambda^{-1})=I_n,
\qquad
D_i(\lambda^{-1})D_i(\lambda)=I_n.
$$

El candidato es una inversa bilateral y $D_i(\lambda)^{-1}=D_i(\lambda^{-1})$.

### Inversa de una matriz elemental de reemplazo

> [!formula] La propiedad
> Si $i\ne j$ y $\lambda\in K$, entonces $E_{ij}(\lambda)^{-1}=E_{ij}(-\lambda)$. (Aula 6, diap. 14.)[^a6]

#### Demostración paso a paso

Partimos de las filas $R_1,\ldots,R_n$ de $I_n$. La operación $E_{ij}(\lambda)$ reemplaza la fila $i$ por $R_i+\lambda R_j$ y deja intacta la fila fuente $j$. Como $i\ne j$, la operación inversa puede restar el mismo múltiplo de esa fila fuente.

**1. Aplicar primero $E_{ij}(\lambda)$ y luego $E_{ij}(-\lambda)$.** La fila $i$ pasa a

$$
(R_i+\lambda R_j)-\lambda R_j=R_i.
$$

La fila $j$ y todas las demás no cambian. Como cada producto por la izquierda ejecuta la operación indicada, esto prueba

$$
E_{ij}(-\lambda)E_{ij}(\lambda)=I_n.
$$

**2. Aplicar las operaciones en el orden contrario.** La fila $i$ pasa a

$$
(R_i-\lambda R_j)+\lambda R_j=R_i,
$$

porque la fila $j$ permanece intacta también en este orden. Las otras filas siguen iguales y, por tanto,

$$
E_{ij}(\lambda)E_{ij}(-\lambda)=I_n.
$$

Los dos productos son la identidad; así, $E_{ij}(\lambda)^{-1}=E_{ij}(-\lambda)$.

### Inversa de un producto

> [!formula] La propiedad
> Si $A,B\in M_n(K)$ son invertibles, entonces $(AB)^{-1}=B^{-1}A^{-1}$. (Aula 7, diap. 2, propiedad 2.)[^a7]

Para que el producto $AB$ se cancele por la derecha, el primer factor del candidato debe cancelar $B$ y el segundo debe cancelar $A$. Esto propone $B^{-1}A^{-1}$, en ese orden. Verificamos ambos órdenes: una inversa tiene que cancelar tanto a izquierda como a derecha.

**1. Multiplicar en el orden $AB$ y el candidato.**

$$
(AB)(B^{-1}A^{-1})
=A\bigl(B(B^{-1}A^{-1})\bigr).
$$

La primera igualdad usa asociatividad para reagrupar los factores sin cambiar su orden. Ahora se agrupa $B$ con su inversa:

$$
B(B^{-1}A^{-1})=(BB^{-1})A^{-1}=I_nA^{-1}.
$$

Al sustituir esta simplificación,

$$
A(I_nA^{-1})=AA^{-1}=I_n.
$$

Se usaron las identidades bilaterales $BB^{-1}=I_n$ y $AA^{-1}=I_n$, junto con que $I_n$ es neutro.

**2. Multiplicar en el orden contrario.**

$$
(B^{-1}A^{-1})(AB)
=B^{-1}\bigl(A^{-1}(AB)\bigr).
$$

De nuevo, asociatividad cambia solo los paréntesis. Agrupamos $A^{-1}$ con $A$:

$$
A^{-1}(AB)=(A^{-1}A)B=I_nB.
$$

Al sustituir y usar que $I_n$ es neutro,

$$
B^{-1}(I_nB)=B^{-1}B=I_n.
$$

Así, el candidato multiplica a $AB$ por ambos lados para dar $I_n$; por definición, $(AB)^{-1}=B^{-1}A^{-1}$.


Si $BA=C$ y $B$ es invertible, multiplicar por $B^{-1}$ a la izquierda da $A=B^{-1}C$; en general **no** $A=CB^{-1}$, porque el factor que multiplica por la izquierda se deshace por la izquierda.[^a7]

### Inversa de un múltiplo escalar

> [!formula] La propiedad
> Si $A\in M_n(K)$ es invertible y $\alpha\in K\setminus\{0\}$, entonces $\alpha A$ es invertible y $(\alpha A)^{-1}=\alpha^{-1}A^{-1}$. (Aula 7, diap. 2, propiedad 3; propuesta como TPC en diap. 3.)[^a7]

#### Demostración paso a paso

La hipótesis $\alpha\ne0$ garantiza que existe $\alpha^{-1}$. Verificaremos que $\alpha^{-1}A^{-1}$ es inversa por ambos lados. Usaremos la compatibilidad del producto matricial con escalares, demostrada antes: un escalar puede factorizarse fuera del producto.

**1. Producto en el orden $\alpha A$ seguido de $\alpha^{-1}A^{-1}$.**

$$
(\alpha A)(\alpha^{-1}A^{-1})
=\alpha\alpha^{-1}(AA^{-1})
=1_K I_n=I_n.
$$

**2. Producto en el orden contrario.**

$$
(\alpha^{-1}A^{-1})(\alpha A)
=\alpha^{-1}\alpha(A^{-1}A)
=1_K I_n=I_n.
$$

Ambos productos son la identidad, así que el candidato es la inversa bilateral de $\alpha A$. Si $\alpha=0$, no existe $\alpha^{-1}$ y la matriz nula de orden positivo no es invertible.

### Inversa de la transpuesta

> [!formula] La propiedad
> Si $A\in M_n(K)$ es invertible, entonces $A^T$ también lo es y $(A^T)^{-1}=(A^{-1})^T$. (Aula 7, diap. 2, propiedad 4; propuesta como TPC en diap. 3.)[^a7]

#### Demostración paso a paso

La definición de inversa bilateral da las dos igualdades $AA^{-1}=I_n$ y $A^{-1}A=I_n$. Transpondremos cada una por separado. Usamos la propiedad ya demostrada de que la transpuesta de un producto invierte el orden de sus factores y que $I_n^T=I_n$.[^a4]

**1. Transponer $AA^{-1}=I_n$.**

$$
(AA^{-1})^T=(A^{-1})^TA^T=I_n.
$$

**2. Transponer $A^{-1}A=I_n$.**

$$
(A^{-1}A)^T=A^T(A^{-1})^T=I_n.
$$

El candidato $(A^{-1})^T$ multiplica a $A^T$ por la izquierda y por la derecha para dar $I_n$. Por definición, $(A^T)^{-1}=(A^{-1})^T$.

### Inversa de la conjugada transpuesta

> [!formula] La propiedad
> Si $A\in M_n(\mathbb C)$ es invertible, entonces $A^*$ también lo es y $(A^*)^{-1}=(A^{-1})^*$. (Aula 7, diap. 2, propiedad 4; propuesta como TPC en diap. 3.)[^a7]

#### Demostración paso a paso

Para justificar la regla $(XY)^*=Y^*X^*$ para matrices cuadradas complejas, usamos la definición $X^*=\overline X^{\,T}$. La conjugación conserva el orden del producto y la transposición lo invierte, según las leyes establecidas para estas operaciones.[^a4]

$$
(XY)^*=\overline{XY}^{\,T}
=(\overline X\,\overline Y)^T
=(\overline Y)^T(\overline X)^T
=Y^*X^*.
$$

Ahora partimos de las dos igualdades de inversa. Como $I_n^*=I_n$, la primera da

$$
(AA^{-1})^*=(A^{-1})^*A^*=I_n.
$$

La segunda, $A^{-1}A=I_n$, da

$$
(A^{-1}A)^*=A^*(A^{-1})^*=I_n.
$$

Por tanto, $(A^{-1})^*$ es inversa por ambos lados de $A^*$ y $(A^*)^{-1}=(A^{-1})^*$.

### Criterio y cálculo por Gauss–Jordan (aula 7, diapositivas 6–9)

Sea $A\in M_n(K)$. Al reducir $[A\mid I_n]$ por filas se obtiene una matriz equivalente $[B\mid Q]$. Si las operaciones efectuadas están representadas, en su orden, por $E_1,\ldots,E_p$, entonces

$$
Q=E_p\cdots E_1.
$$

Cada $E_k$ es invertible, como se probó antes; por tanto, también lo es su producto $Q$. Las operaciones actúan por multiplicación a la izquierda, de modo que

$$
QA=B.
$$

La matriz $B$ es la forma escalonada reducida de $A$.

**Caso $B=I_n$.** De $QA=I_n$, multiplicando por $Q^{-1}$ a la izquierda, resulta $A=Q^{-1}$. Así, $A$ es invertible y $A^{-1}=Q$; el bloque derecho de la reducción contiene la inversa.

**Caso $B\ne I_n$.** Una matriz cuadrada en forma escalonada reducida sin filas nulas tendría $n$ pivotes en sus $n$ columnas. Cada pivote sería un $1$ y el único elemento no nulo de su columna; por ello, la matriz sería $I_n$. Como $B$ no es la identidad, tiene una fila nula. Entonces el sistema $B\mathbf x=\mathbf e_i$, donde $i$ es el índice de esa fila y $\mathbf e_i$ tiene un $1$ en la posición $i$ y ceros en las demás, no tiene solución: la componente $i$ de $B\mathbf x$ siempre es cero.

Si $B$ tuviera inversa, $B^{-1}\mathbf e_i$ sería una solución; por tanto, $B$ no es invertible. Si $A$ lo fuera, el producto $QA$ también lo sería, por la regla de la inversa de un producto; esto contradice $QA=B$. Así, $A$ no es invertible.

En consecuencia, $A$ es invertible si y solo si su forma escalonada reducida es $I_n$, lo que equivale a tener un pivote en cada columna, es decir, $n$ pivotes y rango $n$. Además, si $B=I_n$, entonces

$$
A=Q^{-1}=(E_p\cdots E_1)^{-1}=E_1^{-1}\cdots E_p^{-1},
$$

un producto de matrices elementales. Recíprocamente, todo producto finito de matrices elementales es invertible, pues cada factor lo es y la inversa de un producto se construye invirtiendo el orden de los factores. La reducción de $[A\mid I_n]$ decide así la invertibilidad y, cuando existe, calcula $A^{-1}$.

El cálculo completo mostrado en el aula 7 usa el $A$ anterior:

$$\left[\begin{array}{ccc|ccc}1&0&-1&1&0&0\\2&2&-1&0&1&0\\1&4&2&0&0&1\end{array}\right]\xrightarrow{R_2-2R_1,\ R_3-R_1}\left[\begin{array}{ccc|ccc}1&0&-1&1&0&0\\0&2&1&-2&1&0\\0&4&3&-1&0&1\end{array}\right]$$

$$\xrightarrow{R_3-2R_2}\left[\begin{array}{ccc|ccc}1&0&-1&1&0&0\\0&2&1&-2&1&0\\0&0&1&3&-2&1\end{array}\right]\xrightarrow{R_2-R_3,\ R_1+R_3}\left[\begin{array}{ccc|ccc}1&0&0&4&-2&1\\0&2&0&-5&3&-1\\0&0&1&3&-2&1\end{array}\right]$$

$$\xrightarrow{R_2/2}\left[\begin{array}{ccc|ccc}1&0&0&4&-2&1\\0&1&0&-5/2&3/2&-1/2\\0&0&1&3&-2&1\end{array}\right]=[I_3\mid A^{-1}].$$

Multiplicar el resultado por $A$ en ambos órdenes verifica el cálculo. La diapositiva final denomina a este procedimiento **método de eliminación de Gauss–Jordan para la inversa**. Fuentes: FCUL, [aula 6, pp. 11–14](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-aula6-CaractMatrizesInv-impressao.pdf) y [aula 7](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-Aula7-MatrizesInv-impressao.pdf).

## Equivalencias y unicidad

Para una matriz cuadrada $A\in K^{n\times n}$ son equivalentes:

- $A$ es invertible.
- La forma escalonada de $A$ tiene $n$ pivotes.
- $\operatorname{rg}(A)=n$.
- Para todo $\mathbf b\in K^n$, el sistema $A\mathbf x=\mathbf b$ tiene solución única.

### Relación entre invertibilidad, rango y solución única

La reducción por filas explica las equivalencias. En forma escalonada, tener $n$ pivotes significa que cada columna contiene un pivote; por definición, esto equivale a que el rango sea $n$.

**1. Relacionar pivotes e invertibilidad.** Si hay $n$ pivotes, cada columna tiene pivote y Gauss–Jordan transforma $A$ en $I_n$. El criterio anterior muestra entonces que $A$ es invertible. En sentido contrario, si $A$ es invertible, el criterio dice que su forma escalonada reducida es $I_n$, que tiene $n$ pivotes. Así, la invertibilidad equivale a tener $n$ pivotes, y esto equivale a $\operatorname{rg}(A)=n$ por la definición de rango mediante el número de pivotes.

**2. De invertibilidad a solución única para todo término independiente.** Sea $\mathbf b\in K^n$ y definamos $\mathbf x=A^{-1}\mathbf b$. Esta elección da una solución porque

$$
A\mathbf x=A(A^{-1}\mathbf b)=(AA^{-1})\mathbf b=I_n\mathbf b=\mathbf b.
$$

Si $\mathbf x_1$ y $\mathbf x_2$ fueran dos soluciones, entonces $A\mathbf x_1=A\mathbf x_2$. Multiplicar ambos miembros por $A^{-1}$ a la izquierda da

$$
A^{-1}(A\mathbf x_1)=A^{-1}(A\mathbf x_2),
$$

y, por asociatividad y $A^{-1}A=I_n$, se obtiene $\mathbf x_1=\mathbf x_2$. La solución existe y es única.

**3. De solución única a $n$ pivotes.** En particular, para $\mathbf b=\mathbf 0$ la solución debe ser solo $\mathbf x=\mathbf 0$. Si faltara un pivote en alguna columna, la variable de esa columna sería libre: se le podría asignar el valor $1$, fijar las demás variables libres en $0$ y determinar hacia atrás las variables pivote. Así se obtendría una solución no nula de $A\mathbf x=\mathbf 0$, contradiciendo la unicidad. Por tanto, hay pivote en cada columna.

Esto demuestra el ciclo entre invertibilidad, rango completo, $n$ pivotes y solución única para todo $\mathbf b$. Para matrices no cuadradas no se aplica este criterio de inversa bilateral; las nociones de inversa lateral requieren un tratamiento propio. El [[Matemáticas/Álgebra lineal/Determinantes|determinante]] ofrece otro criterio de invertibilidad para matrices cuadradas, desarrollado en su nota correspondiente.[^2][^3]

### Unicidad de la inversa

> [!teorema] La inversa es única
> Si $B$ y $C$ son inversas de una misma matriz $A$, entonces $B=C$.

Como $B$ es inversa por la izquierda y $C$ por la derecha, $BA=I_n$ y $AC=I_n$. Primero, $I_n$ es el neutro por la derecha, así que

$$
B=BI_n.
$$

Ahora sustituimos $I_n=AC$, usando que $C$ es inversa por la derecha:

$$
BI_n=B(AC).
$$

La asociatividad permite reagrupar sin cambiar el orden de los factores:

$$
B(AC)=(BA)C.
$$

Finalmente, $BA=I_n$ y $I_n$ es neutro por la izquierda:

$$
(BA)C=I_nC=C.
$$

Por tanto, $B=C$. La prueba usa las dos identidades de inversa y la asociatividad del producto.

### Doble inversa

> [!formula] La propiedad
> Si $A$ es invertible, entonces $(A^{-1})^{-1}=A$. (Aula 7, diap. 2, propiedad 1.)[^a7]

La definición de $A^{-1}$ da ambos productos

$$
A^{-1}A=I_n,\qquad AA^{-1}=I_n.
$$

Por tanto, $A$ es inversa bilateral de $A^{-1}$. La unicidad de la inversa, demostrada antes, permite concluir $(A^{-1})^{-1}=A$.

## Sistemas cuadrados e inversas para resolver $AX=B$ (aula 10, diapositivas 8–10)

Para $A\in M_n(K)$, el sistema $AX=B$ es compatible determinado si y solo si $r(A)=n$, condición equivalente a que $A$ sea invertible. En tal caso, para cualquier $B\in K^n$,

$$
AX=B\quad\Longrightarrow\quad X=A^{-1}B.
$$

La multiplicación por $A^{-1}$ se hace por la izquierda y conserva el orden: $A^{-1}(AX)=A^{-1}B$, así que $X=A^{-1}B$.

> [!example] Resolver con la inversa
> Para $A=\begin{pmatrix}1&0&-1\\2&2&-1\\1&4&2\end{pmatrix}$, ya se obtuvo $A^{-1}=\begin{pmatrix}4&-2&1\\-5/2&3/2&-1/2\\3&-2&1\end{pmatrix}$. Si $B=(1,2,3)^T$, entonces $X=A^{-1}B=(3,-1,2)^T$. La comprobación da $AX=(1,2,3)^T$.

### Una identidad de producto fuerza ambas inversas

> [!formula] Resultado auxiliar de Aula 10, diap. 10, item 1
> Si $A,B\in M_n(K)$ y $AB=I_n$, entonces $A$ y $B$ son invertibles y $A^{-1}=B$.[^a10]

#### Demostración paso a paso

**1. Mostrar que el sistema homogéneo $B\mathbf x=0$ sólo tiene la solución nula.** Sea $\mathbf x\in K^n$ una columna con $B\mathbf x=0$. Multiplicar esta igualdad por $A$ a la izquierda da

$$
A(B\mathbf x)=A\mathbf 0=\mathbf 0.
$$

Por asociatividad y por la hipótesis $AB=I_n$, el miembro izquierdo también es

$$
A(B\mathbf x)=(AB)\mathbf x=I_n\mathbf x=\mathbf x.
$$

Igualar estos dos resultados da $\mathbf x=\mathbf 0$. Así, el núcleo de $B$ contiene sólo el vector nulo.

**2. Concluir que $B$ es invertible.** Como $B$ es cuadrada, si su forma escalonada no tuviera pivote en alguna columna, la variable correspondiente sería libre. Se le podría asignar el valor $1$, fijar las demás variables libres en $0$ y resolver las variables pivote hacia atrás. Eso produciría una solución no nula de $B\mathbf x=\mathbf 0$, en contradicción con el paso 1. Por tanto, hay pivote en cada columna; el criterio de invertibilidad ya establecido implica que $B$ es invertible.

**3. Identificar la inversa de $A$.** Multiplicamos la igualdad $AB=I_n$ por $B^{-1}$ a la derecha:

$$
(AB)B^{-1}=I_nB^{-1}.
$$

Por asociatividad, el miembro izquierdo es $A(BB^{-1})$. Como $BB^{-1}=I_n$, resulta

$$
A I_n=B^{-1}.
$$

El neutro $I_n$ deja fija a $A$, así que $A=B^{-1}$ y, por tanto, $A^{-1}=B$.

### Invertibilidad de ambos factores de un producto invertible

> [!formula] La propiedad — Aula 10, diap. 10, item 2
> Si $A,B\in M_n(K)$ y $AB$ es invertible, entonces $A$ y $B$ son invertibles.[^a10]

#### Demostración paso a paso

Supongamos que $A,B\in M_n(K)$ y definamos $C=(AB)^{-1}$. Entonces $C$ también es $n\times n$ y, por definición de inversa bilateral,

$$
(AB)C=I_n,
\qquad
C(AB)=I_n.
$$

**1. Obtener una identidad cuyo primer factor sea $A$.** Por asociatividad del producto,

$$
A(BC)=(AB)C=I_n.
$$

Los factores $A$ y $BC$ son matrices cuadradas de orden $n$. El resultado auxiliar anterior aplicado a $A(BC)=I_n$ demuestra que $A$ es invertible.

**2. Obtener una identidad cuyo segundo factor sea $B$.** La segunda igualdad da, de nuevo por asociatividad,

$$
(CA)B=C(AB)=I_n.
$$

Los factores $CA$ y $B$ también son cuadrados de orden $n$. Aplicar el resultado auxiliar a $(CA)B=I_n$ demuestra que $B$ es invertible. Concluimos que ambos factores de $AB$ son invertibles.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matrices
  - inversa
  - sistemas-lineales
---
> [!note] Pregunta
> Si $AB$ es invertible para $A,B\in M_n(K)$, ¿qué se concluye sobre los factores?
===
> [!important] Respuesta
> $A$ y $B$ son invertibles: con $C=(AB)^{-1}$, $A(BC)=I_n$ y $(CA)B=I_n$.
```

## Condiciones de validez y errores frecuentes

La igualdad de rangos decide compatibilidad, pero sólo para comparar el sistema completo $A\mathbf x=\mathbf b$; el rango de $A$ aislado no indica si un término independiente concreto produce contradicción. El número de variables libres es $n-r$ sólo cuando el sistema es compatible. La matriz inversa bilateral se define aquí para matrices cuadradas; no se debe aplicar el criterio de $n$ pivotes a una matriz rectangular.

Comprueba cada clasificación sustituyendo la solución obtenida en las ecuaciones originales o identificando la fila imposible. Comprueba una inversa multiplicando en ambos órdenes por $A$. Estos controles detectan errores de signos y de orden de factores.

## Práctica graduada

1. Usa $A^{-1}$ del ejemplo para resolver $AX=(1,2,3)^T$ y comprueba la respuesta en el sistema original.
2. Demuestra que si $AB=I_n$, entonces $B$ es invertible, usando el núcleo de $B$.
3. Si $AB$ es invertible, explica cómo obtener un producto igual a la identidad que permita concluir la invertibilidad de ambos factores.

### Soluciones razonadas

1. $X=A^{-1}(1,2,3)^T=(3,-1,2)^T$. Multiplicando, $AX=(3-2,6-2-2,3-4+4)^T=(1,2,3)^T$.
2. Si $B$ fuera singular, existiría $C\ne0$ con $BC=0$. Entonces $C=(AB)C=A(BC)=0$, contradicción. Así $B$ es invertible y $A=B^{-1}$.
3. Sea $C=(AB)^{-1}$. Se tienen $A(BC)=I_n$ y $(CA)B=I_n$. El resultado anterior, aplicado a cada igualdad, implica que $A$ y $B$ son invertibles.

## 📚 Fuentes

### Material base aportado

- FCUL, [aula 6, pp. 11–14](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-aula6-CaractMatrizesInv-impressao.pdf), [aula 7](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-Aula7-MatrizesInv-impressao.pdf), [aula 9, pp. 2–11](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-Aula9-Sistemas-impressao.pdf) y [aula 10, pp. 8–10](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-Aula10-Sistemas-impressao.pdf). Diapositivas del curso FCUL 2026/27 sobre rango, inversa y sistemas.

### Alcance curricular

[^1]: [Faculdade de Ciências, Universidade de Lisboa, *Álgebra Linear e Geometria Analítica*, programa 2025/2026](https://fenix.ciencias.ulisboa.pt/courses/algana-2817829258658182/programa). Incluye característica/rango, eliminación de Gauss–Jordan e inversión de matrices.

[^a4]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 4, 23/09/2026, diapositivas 9–10. [PDF consultado](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-aula4-FormaEscada-impressao.pdf). Enuncia las leyes de transposición y conjugación usadas para construir la regla de la adjunta.

[^a6]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 6, 28/09/2026, diapositiva 14. [PDF consultado](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-aula6-CaractMatrizesInv-impressao.pdf). Enuncia la inversibilidad y las inversas de los tres tipos de matrices elementales; las pruebas por operaciones se deducen aquí.

[^a7]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 7, 30/09/2026, diapositivas 2–3. [PDF consultado](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-Aula7-MatrizesInv-impressao.pdf). Las propiedades 1–2 se demuestran en la fuente; las propiedades 3–4 se proponen como TPC y sus pruebas aquí se deducen de las definiciones y de las leyes establecidas para productos, transpuesta y adjunta.

[^a10]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 10, 09/10/2026, diapositiva 10, corolarios 1–2. [PDF consultado](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-Aula10-Sistemas-impressao.pdf). El argumento del corolario 2 se desarrolla aquí usando el corolario 1 y la asociatividad del producto.

### Ampliación académica

[^2]: [MIT OpenCourseWare, Gilbert Strang, *Multiplication and Inverse Matrices*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/multiplication-and-inverse-matrices/). Inversa por eliminación, criterio de pivotes y relación con los sistemas $A\mathbf x=\mathbf b$.

[^3]: [Jim Hefferon, *Linear Algebra*, texto universitario abierto](https://hefferon.net/linearalgebra/). Sistemas, rango, invertibilidad y métodos elementales de álgebra lineal.

## 🧑‍🏫 Prompt para tutor conversacional

Diagnostica si el estudiante compara correctamente $\operatorname{rg}(A)$ y $\operatorname{rg}([A\mid\mathbf b])$, cuenta variables libres sólo en sistemas compatibles, y distingue compatibilidad de unicidad. Para la inversa, comprueba que aplica Gauss–Jordan a $[A\mid I]$, verifica pivotes en todas las columnas y justifica bilateralmente las inversas de matrices elementales, escalares, transpuestas y conjugadas transpuestas. Pídele que explique por qué $AB$ invertible implica que $A$ y $B$ lo son, sin usar determinantes. No generes ejercicios nuevos; usa ejemplos funcionales breves y pide comprobaciones algebraicas.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
