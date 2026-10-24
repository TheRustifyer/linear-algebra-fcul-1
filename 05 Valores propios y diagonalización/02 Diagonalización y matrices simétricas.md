---
schema: nabla-phi-note/v1
title: Diagonalización y matrices simétricas
aliases:
  - Diagonalización de matrices
  - Teorema espectral para matrices simétricas
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
tipo:
  - lección
  - teorema
  - procedimiento
nivel: universitario-introductorio
estado: borrador
capa: curricular
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/05 Valores propios y diagonalización/01 Espectro y subespacios propios|Espectro y subespacios propios]]"
desbloquea:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/06 Espacios euclídeos/01 Producto interno, norma y ángulo|Producto interno, norma y ángulo]]"
relacionado:
  - "[[Matemáticas/Álgebra lineal/Diagonalización|Valores propios y diagonalización]]"
key concepts:
  - "[[Matemáticas/Álgebra lineal/Teorema espectral|Teorema espectral]]"
  - "[[Matemáticas/Álgebra lineal/Matriz ortogonal|Matriz ortogonal]]"
fsrs_goal: Decide si una matriz es diagonalizable, construye y verifica una factorización A=PDP^{-1}, distingue matrices con igual espectro y reconoce cuándo una matriz simétrica admite diagonalización ortogonal.
tags:
  - matematicas
  - algebra-lineal
  - diagonalizacion
  - matrices-simetricas
  - teorema-espectral
  - fcul
---
```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```
# Diagonalización y matrices simétricas
Una matriz diagonal separa las direcciones coordenadas: cada una se escala sin mezclarse con las demás. Diagonalizar un operador consiste en encontrar una base cuyas direcciones sean propias. La transformación no cambia; cambia el sistema de coordenadas en el que se observa.[^1]

Se supone que $V$ tiene dimensión finita $n$ sobre un cuerpo $K$ y que el polinomio característico se descompone en factores lineales en $K$ cuando se aplican los criterios basados en todas sus raíces.

## Qué significa diagonalizar
### Definición matricial
> [!definicion] Matriz diagonalizable
> Una matriz $A\in M_n(K)$ es **diagonalizable sobre $K$** si existen una matriz invertible $P\in M_n(K)$ y una matriz diagonal $D\in M_n(K)$ tales que
> $$
> A=PDP^{-1}.
> $$
> Equivalentemente, $P^{-1}AP=D$.[^1]

Las matrices $A$ y $D$ son semejantes: representan el mismo operador en bases distintas. La frase «sobre $K$» es esencial; una matriz real puede ser diagonalizable sobre $\mathbb C$ y no sobre $\mathbb R$.

### Criterio de la base propia
> [!teorema] Caracterización por una base de vectores propios
> $A\in M_n(K)$ es diagonalizable si y sólo si $K^n$ posee una base formada por vectores propios de $A$.[^2]

Si $(v_1,\ldots,v_n)$ es una base propia con $Av_j=\lambda_jv_j$, se forman
$$
P=\begin{pmatrix}v_1&\cdots&v_n\end{pmatrix},
\qquad
D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n).
$$
Entonces $P$ es invertible y la igualdad columna por columna es
$$
AP=PD.
$$
Multiplicar a la derecha por $P^{-1}$ da $A=PDP^{-1}$.

Recíprocamente, si $A=PDP^{-1}$, entonces $AP=PD$. La columna $j$ de esta igualdad afirma que $Av_j=d_{jj}v_j$, donde $v_j$ es la columna $j$ de $P$. Como $P$ es invertible, sus columnas forman una base de vectores propios.

```anki
deck: Física::Álgebra Lineal::Valores propios y diagonalización
tags:
  - matematicas
  - algebra-lineal
  - diagonalizacion
---
> [!note] Pregunta
> ¿Qué propiedad de las columnas de $P$ garantiza una diagonalización $A=PDP^{-1}$?
===
> [!important] Respuesta
> Las columnas de $P$ forman una base de vectores propios de $A$, ordenados como sus valores propios en la diagonal de $D$.
```

## Criterios mediante multiplicidades
Supóngase
$$
\chi_A(t)=\prod_{j=1}^{r}(t-\lambda_j)^{m_a(\lambda_j)}
$$
con valores propios distintos $\lambda_1,\ldots,\lambda_r$ en $K$. Los subespacios propios asociados a valores distintos se suman directamente, por lo que el número máximo de vectores propios independientes es
$$
\sum_{j=1}^{r}m_g(\lambda_j).
$$

> [!teorema] Criterio de multiplicidades
> $A$ es diagonalizable sobre $K$ si y sólo si
> $$
> \sum_{j=1}^{r}m_g(\lambda_j)=n.
> $$
> Como $m_g(\lambda_j)\leq m_a(\lambda_j)$ y las multiplicidades algebraicas suman $n$, esto equivale a $m_g(\lambda_j)=m_a(\lambda_j)$ para todo $j$.[^1]

Si $A$ tiene $n$ valores propios distintos en $K$, cada espacio propio aporta al menos una dirección y la matriz es diagonalizable. Es una condición suficiente, pero no necesaria: la matriz escalar $\lambda I$ tiene un solo valor propio y todo vector no nulo es propio.

## Construcción y comprobación de $A=PDP^{-1}$
El procedimiento separa cálculo y verificación:

1. calcular los valores propios y una base de cada espacio propio;
2. reunir $n$ vectores propios independientes;
3. colocarlos como columnas de $P$;
4. escribir en $D$ los valores propios en el mismo orden;
5. comprobar $AP=PD$ y $\det P\neq0$.

La comprobación $AP=PD$ verifica simultáneamente cada pareja propia y evita una multiplicación triple innecesaria.

### Ejemplo trabajado
Sea
$$
A=\begin{pmatrix}2&1\\1&2\end{pmatrix}.
$$
Su polinomio característico es $(t-3)(t-1)$. Se obtienen
$$
v_1=(1,1),\quad \lambda_1=3,
\qquad
v_2=(1,-1),\quad \lambda_2=1.
$$
Así,
$$
P=\begin{pmatrix}1&1\\1&-1\end{pmatrix},
\qquad
D=\begin{pmatrix}3&0\\0&1\end{pmatrix}.
$$
Como $\det P=-2\neq0$ y
$$
AP=\begin{pmatrix}3&1\\3&-1\end{pmatrix}=PD,
$$
queda verificada la diagonalización.

### Potencias
Si $A=PDP^{-1}$, la cancelación de factores intermedios da
$$
A^k=PD^kP^{-1}
$$
para todo entero $k\geq0$. Como $D^k$ se obtiene elevando cada entrada diagonal, la factorización reduce potencias matriciales a potencias escalares.

## Igual polinomio, distinta diagonalización
Considérense
$$
A=\begin{pmatrix}1&0\\0&1\end{pmatrix},
\qquad
B=\begin{pmatrix}1&1\\0&1\end{pmatrix}.
$$
Ambas matrices tienen
$$
\chi(t)=(t-1)^2.
$$
Para $A$, $E_1(A)=\mathbb R^2$, de modo que $m_g(1)=2=m_a(1)$ y $A$ ya es diagonal.

Para $B$,
$$
B-I=\begin{pmatrix}0&1\\0&0\end{pmatrix},
$$
luego $E_1(B)=\operatorname{span}\{(1,0)\}$ y $m_g(1)=1<2$. Falta una segunda dirección propia independiente, así que $B$ no es diagonalizable.

El polinomio característico determina valores propios y multiplicidades algebraicas, pero no determina las dimensiones de los espacios propios. Por eso no decide por sí solo la diagonalización.

## Matrices simétricas reales
### Definición
> [!definicion] Matriz simétrica
> Una matriz real $A\in M_n(\mathbb R)$ es **simétrica** si
> $$
> A^T=A.
> $$

La simetría vincula la transformación con el producto escalar euclídeo:
$$
\langle Ax,y\rangle
=x^TA^Ty
=x^TAy
=\langle x,Ay\rangle.
$$
Esta identidad se denomina autoadjunción en el caso real euclídeo.[^2]

### Los valores propios son reales
Aunque se permita un vector complejo $z\neq0$ con $Az=\lambda z$, se tiene
$$
z^*Az=\lambda z^*z,
$$
donde $z^*$ es el transpuesto conjugado. Como $A$ es real y simétrica, $z^*Az$ es real, mientras $z^*z>0$ es real. Por tanto
$$
\lambda=\frac{z^*Az}{z^*z}\in\mathbb R.
$$
Así, el polinomio característico de una matriz simétrica real se descompone por completo en raíces reales.[^2]

### Ortogonalidad de espacios propios distintos
Sean $Au=\lambda u$ y $Av=\mu v$, con $\lambda\neq\mu$. La simetría da
$$
\lambda\langle u,v\rangle
=\langle Au,v\rangle
=\langle u,Av\rangle
=\mu\langle u,v\rangle.
$$
Por tanto, $(\lambda-\mu)\langle u,v\rangle=0$ y
$$
\langle u,v\rangle=0.
$$
Los vectores propios asociados a valores propios distintos son ortogonales, una propiedad más fuerte que la independencia lineal.

## Teorema espectral y diagonalización ortogonal
El [[Matemáticas/Álgebra lineal/Teorema espectral|teorema espectral real]] caracteriza las matrices que admiten una diagonalización por cambio de base ortogonal.

> [!teorema] Teorema espectral real
> Para $A\in M_n(\mathbb R)$, son equivalentes:
> 1. $A$ es simétrica;
> 2. existe una [[Matemáticas/Álgebra lineal/Matriz ortogonal|matriz ortogonal]] $Q$ y una matriz diagonal real $D$ tales que
> $$
> A=QDQ^T.
> $$
> Las columnas de $Q$ forman una base ortonormal de vectores propios de $A$.[^2]

Una [[Matemáticas/Álgebra lineal/Matriz ortogonal|matriz ortogonal]] satisface $Q^TQ=I$; por ello $Q^{-1}=Q^T$. El teorema afirma más que la diagonalizabilidad: permite elegir la base propia ortonormal y garantiza valores propios reales.

Para construir $Q$, se obtiene una base de cada subespacio propio y se ortonormaliza dentro de él. Los subespacios de valores distintos ya son ortogonales entre sí. Los vectores resultantes se colocan como columnas de $Q$, y sus valores propios, en el mismo orden, forman $D$.

```anki
deck: Física::Álgebra Lineal::Valores propios y diagonalización
tags:
  - matematicas
  - algebra-lineal
  - teorema-espectral
---
> [!note] Pregunta
> ¿Qué forma de diagonalización garantiza el teorema espectral para una matriz simétrica real $A$?
===
> [!important] Respuesta
> $A=QDQ^T$, donde $Q$ es ortogonal y sus columnas forman una base ortonormal de vectores propios; $D$ es diagonal real.
```

## Práctica de transferencia y solución razonada

### Ejercicio — diagonalización ortogonal

Diagonaliza ortogonalmente $A=\begin{pmatrix}5&1\\1&5\end{pmatrix}$ y comprueba las dos identidades que validan el resultado.

### Soluciones razonadas

Los vectores propios $(1,1)^T$ y $(1,-1)^T$ corresponden a $6$ y $4$. Al normalizarlos se forma
$$
Q=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},\qquad D=\begin{pmatrix}6&0\\0&4\end{pmatrix}.
$$
Las columnas ortonormales dan $Q^TQ=I$, y la multiplicación $QDQ^T$ devuelve la matriz $A$. La primera comprobación valida el cambio ortogonal; la segunda, los valores propios y el orden de columnas.

## Condiciones de validez y casos límite
La diagonalización depende del cuerpo: la rotación real de $90^\circ$ no tiene valores propios reales y no es diagonalizable sobre $\mathbb R$, aunque sí lo es sobre $\mathbb C$. Incluso cuando el polinomio se descompone, pueden faltar vectores propios, como ocurre en la matriz $B$ anterior.

Toda matriz simétrica real es diagonalizable ortogonalmente, pero una matriz diagonalizable general no tiene por qué admitir una base propia ortonormal. La ortogonalidad de vectores propios distintos utiliza la simetría y el producto escalar; no se deduce únicamente de que los valores propios sean diferentes.

## 📚 Fuentes
### Material base
- Faculdade de Ciências da Universidade de Lisboa, [*Álgebra Linear e Geometria Analítica — programa 2026/27*](https://fenix.ciencias.ulisboa.pt/courses/algana-2817829258658182/programa), alcance curricular de diagonalización y matrices simétricas.

### Ampliación académica
[^1]: Jim Hefferon, [*Linear Algebra*](https://hefferon.net/linearalgebra/), texto universitario abierto; criterios, construcción y límites de la diagonalización.
[^2]: MIT OpenCourseWare, [*18.06SC Linear Algebra — Symmetric Matrices and Positive Definiteness*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/symmetric-matrices-and-positive-definiteness/), matrices simétricas, ortogonalidad y teorema espectral.

## 🧑‍🏫 Prompt para tutor conversacional
Actúa como tutor universitario de Álgebra Lineal. Da una matriz cuyo polinomio característico se descomponga y pide decidir si posee una base propia. Haz que el estudiante construya $P$ y $D$, compruebe $AP=PD$ y explique qué falla cuando una multiplicidad geométrica es insuficiente. Incluye después una matriz simétrica real para que justifique la ortogonalidad de espacios propios y construya una diagonalización ortogonal, ofreciendo pistas graduadas y exigiendo indicar el cuerpo de escalares.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
