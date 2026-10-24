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
fsrs_goal: Clasifica sistemas por sus rangos, calcula la inversa por Gauss–Jordan, resuelve AX=B cuando la matriz cuadrada es invertible y justifica qué implican AB=I y la invertibilidad de AB sobre sus factores.
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

Las columnas sin pivote determinan las variables libres y, con ellas, los parámetros de la solución general.

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
> Para $A\in K^{n\times n}$, una matriz $B\in K^{n\times n}$ es inversa de $A$ si
> $$
> AB=BA=I_n.
> $$
> Si existe, es única y se denota $A^{-1}$.

Gauss–Jordan calcula la inversa reduciendo simultáneamente $A$ e $I_n$:

$$
[A\mid I_n]\longrightarrow[I_n\mid A^{-1}].
$$

La reducción sólo puede dejar $I_n$ a la izquierda si hay un pivote en cada columna de $A$. Si falta un pivote, $A$ no es invertible. El procedimiento se apoya en que cada operación elemental es reversible y equivale a multiplicar por una matriz elemental invertible.[^2]

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

## Equivalencias y unicidad

Para una matriz cuadrada $A\in K^{n\times n}$ son equivalentes:

- $A$ es invertible.
- La forma escalonada de $A$ tiene $n$ pivotes.
- $\operatorname{rg}(A)=n$.
- Para todo $\mathbf b\in K^n$, el sistema $A\mathbf x=\mathbf b$ tiene solución única.

La conexión se ve por Gauss–Jordan: tener $n$ pivotes permite transformar $A$ en $I_n$, a la vez que se obtiene una matriz $B$ con $BA=I_n$. Como $B$ es producto de matrices elementales invertibles, también es invertible; de $BA=I_n$ se sigue $A=B^{-1}$ y, por tanto, $AB=I_n$. Recíprocamente, si $A$ es invertible, ninguna variable puede quedar libre en $A\mathbf x=\mathbf b$, y la reducción debe tener un pivote por columna.[^2][^3]

La inversa es única: si $B$ y $C$ fueran inversas de $A$, entonces

$$
B=B I_n=B(AC)=(BA)C=I_nC=C.
$$

Así, $B=C$. Para matrices no cuadradas no se aplica este criterio de inversa bilateral; las nociones de inversa lateral requieren un tratamiento propio. El [[Matemáticas/Álgebra lineal/Determinantes|determinante]] ofrece otro criterio de invertibilidad para matrices cuadradas, desarrollado en su nota correspondiente.

## Inventario completo de invertibilidad: aulas 6 y 7

El aula 6 motiva la inversa comparando $\sqrt5\cdot(1/\sqrt5)=1$ y $3\cdot(1/3)=1$ en $\mathbb R$ con el hecho de que $3$ no tiene inversa *dentro de* $\mathbb N$. En $M_n(K)$ el neutro es $I_n$, pero la multiplicación no es conmutativa: por eso la definición pide $AB=BA=I_n$. No toda matriz no nula es invertible; una fila o columna completamente nula impide la inversa. $I_n^{-1}=I_n$. El ejemplo de ambas clases es

$$A=\begin{pmatrix}1&0&-1\\2&2&-1\\1&4&2\end{pmatrix},\qquad B=\begin{pmatrix}4&-2&1\\-5/2&3/2&-1/2\\3&-2&1\end{pmatrix},\qquad AB=BA=I_3,$$

de modo que $B=A^{-1}$. La unicidad se demuestra si $B$ y $C$ son inversas: $B=BI_n=B(AC)=(BA)C=I_nC=C$. Las matrices elementales también son invertibles: $P_{ij}^{-1}=P_{ij}$, $D_i(\lambda)^{-1}=D_i(1/\lambda)$ para $\lambda\ne0$, y $E_{ij}(\lambda)^{-1}=E_{ij}(-\lambda)$.

### TPC · Aula 6, diapositiva 14: inversas de matrices elementales

La proposición afirma que toda matriz elemental tiene inversa elemental **del mismo tipo**. Por el resultado $EA$ sobre operaciones por filas, un producto de dos matrices elementales aplica a $I_n$ las dos operaciones correspondientes. En cada caso la segunda deshace exactamente la primera:

$$
P_{ij}^{-1}=P_{ij},\qquad
D_i(\lambda)^{-1}=D_i(\lambda^{-1})\quad(\lambda\ne0),\qquad
E_{ij}(\lambda)^{-1}=E_{ij}(-\lambda)\quad(i\ne j).
$$

En efecto, intercambiar dos veces restaura todas las filas; multiplicar la fila $i$ por $\lambda$ y luego por $\lambda^{-1}$ la restaura; sumarle $\lambda$ veces la fila $j$ y después $-\lambda$ veces **esa misma fila $j$** también la restaura, pues $j$ no se modifica. Repetir las parejas en orden contrario produce igualmente $I_n$, de modo que cada candidato es inversa bilateral. *(FCUL, aula 6, diap. 14.)*

El aula 7 prueba $(A^{-1})^{-1}=A$ y $(AB)^{-1}=B^{-1}A^{-1}$; para el producto se comprueban **ambos** órdenes: $(AB)(B^{-1}A^{-1})=A(BB^{-1})A^{-1}=I_n$ y $(B^{-1}A^{-1})(AB)=B^{-1}(A^{-1}A)B=I_n$. Si $BA=C$ y $B$ es invertible, entonces $A=B^{-1}C$; en general **no** $A=CB^{-1}$, porque el factor que multiplica por la izquierda se deshace por la izquierda.

### TPC · Aula 7, diapositiva 3: escala, transpuesta y transconjugada

Sean $A\in M_n(K)$ invertible y $\alpha\in K\setminus\{0\}$. Como los escalares conmutan con las entradas de $A$, se verifican **los dos órdenes**:

$$
(\alpha A)(\alpha^{-1}A^{-1})
=\alpha\alpha^{-1}AA^{-1}=I_n,\qquad
(\alpha^{-1}A^{-1})(\alpha A)
=\alpha^{-1}\alpha A^{-1}A=I_n.
$$

Por unicidad, $(\alpha A)^{-1}=\alpha^{-1}A^{-1}$. La condición $\alpha\ne0$ es necesaria para formar $\alpha^{-1}$; si $\alpha=0$, $\alpha A=0_n$ no es invertible.

Para la transpuesta, transponer $AA^{-1}=I_n$ y $A^{-1}A=I_n$ e invertir el orden en cada producto da

$$
(A^{-1})^TA^T=I_n,\qquad A^T(A^{-1})^T=I_n.
$$

Luego $(A^T)^{-1}=(A^{-1})^T$. Finalmente, la identidad $(XY)^*=Y^*X^*$ aplicada a las mismas dos igualdades produce

$$
(A^{-1})^*A^*=I_n,\qquad A^*(A^{-1})^*=I_n,
$$

y por tanto $(A^*)^{-1}=(A^{-1})^*$. Para matrices reales, $A^*=A^T$; en matrices complejas, la conjugación de las entradas es esencial. *(FCUL, aula 7, diap. 2–3.)*

### Criterio y cálculo por Gauss–Jordan (aula 7, diapositivas 6–9)

La cadena $[A\mid I_n]\sim[B\mid Q]$ satisface $QA=B$ y $Q=E_p\cdots E_1$, producto invertible. Si la reducida $B=I_n$, entonces $A=Q^{-1}$ y $A^{-1}=Q$. Si $B\ne I_n$, al ser cuadrada y reducida tiene una fila nula; no es invertible. Si $A$ lo fuera, $QA$ sería invertible, contradicción. Quedan equivalentes: $A$ invertible; $r(A)=n$; reducida $I_n$; $A$ es producto de matrices elementales. Esta última equivalencia se ve de $Q A=I_n$, de donde $A=Q^{-1}=E_1^{-1}\cdots E_p^{-1}$. En consecuencia, Gauss–Jordan sobre $[A\mid I_n]$ prueba invertibilidad y calcula la inversa a la vez.

El cálculo completo mostrado en el aula 7 usa el $A$ anterior:

$$\left[\begin{array}{ccc|ccc}1&0&-1&1&0&0\\2&2&-1&0&1&0\\1&4&2&0&0&1\end{array}\right]\xrightarrow{R_2-2R_1,\ R_3-R_1}\left[\begin{array}{ccc|ccc}1&0&-1&1&0&0\\0&2&1&-2&1&0\\0&4&3&-1&0&1\end{array}\right]$$

$$\xrightarrow{R_3-2R_2}\left[\begin{array}{ccc|ccc}1&0&-1&1&0&0\\0&2&1&-2&1&0\\0&0&1&3&-2&1\end{array}\right]\xrightarrow{R_2-R_3,\ R_1+R_3}\left[\begin{array}{ccc|ccc}1&0&0&4&-2&1\\0&2&0&-5&3&-1\\0&0&1&3&-2&1\end{array}\right]$$

$$\xrightarrow{R_2/2}\left[\begin{array}{ccc|ccc}1&0&0&4&-2&1\\0&1&0&-5/2&3/2&-1/2\\0&0&1&3&-2&1\end{array}\right]=[I_3\mid A^{-1}].$$

Multiplicar el resultado por $A$ en ambos órdenes verifica el cálculo. La diapositiva final denomina a este procedimiento **método de eliminación de Gauss–Jordan para la inversa**. Fuentes: FCUL, [aula 6, pp. 11–14](<file:///Users/therustifyer/Seafile/Fi%CC%81sica%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-aula6-CaractMatrizesInv-impressao.pdf>) y [aula 7](<file:///Users/therustifyer/Seafile/Fi%CC%81sica%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-Aula7-MatrizesInv-impressao.pdf>).

## Sistemas cuadrados e inversas para resolver $AX=B$ (aula 10, diapositivas 8–10)

Para $A\in M_n(K)$, el sistema $AX=B$ es compatible determinado si y solo si $r(A)=n$, condición equivalente a que $A$ sea invertible. En tal caso, para cualquier $B\in K^n$,

$$
AX=B\quad\Longrightarrow\quad X=A^{-1}B.
$$

La multiplicación por $A^{-1}$ se hace por la izquierda y conserva el orden: $A^{-1}(AX)=A^{-1}B$, así que $X=A^{-1}B$.

> [!example] Resolver con la inversa
> Para $A=\begin{pmatrix}1&0&-1\\2&2&-1\\1&4&2\end{pmatrix}$, ya se obtuvo $A^{-1}=\begin{pmatrix}4&-2&1\\-5/2&3/2&-1/2\\3&-2&1\end{pmatrix}$. Si $B=(1,2,3)^T$, entonces $X=A^{-1}B=(3,-1,2)^T$. La comprobación da $AX=(1,2,3)^T$.

### Corolarios sobre productos

Si $A,B\in M_n(K)$ y $AB=I_n$, ambas son invertibles y $A^{-1}=B$. Si $B$ no fuera invertible, existiría un vector columna $C\ne0$ con $BC=0$. Pero $C=I_nC=(AB)C=A(BC)=0$, contradicción. Así, $B$ es invertible y de $AB=I_n$ se deduce $A=B^{-1}$.

Si $AB$ es invertible, también lo son $A$ y $B$. Sea $C=(AB)^{-1}$. Entonces $A(BC)=I_n$ y $(CA)B=I_n$. Aplicando el resultado anterior a cada producto, se concluye que $A$ y $B$ son invertibles. *(Aula 10, diap. 8–10.)*

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

- FCUL, [aula 6, pp. 11–14](<file:///Users/therustifyer/Seafile/Fi%CC%81sica%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-aula6-CaractMatrizesInv-impressao.pdf>), [aula 7](<file:///Users/therustifyer/Seafile/Fi%CC%81sica%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-Aula7-MatrizesInv-impressao.pdf>), [aula 9, pp. 2–11](<file:///Users/therustifyer/Seafile/Fi%CC%81sica%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-Aula9-Sistemas-impressao.pdf>) y [aula 10, pp. 8–10](<file:///Users/therustifyer/Seafile/Fi%CC%81sica%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-Aula10-Sistemas-impressao.pdf>). Slides del curso FCUL 2026/27 sobre rango, inversa y sistemas.

### Alcance curricular

[^1]: [Faculdade de Ciências, Universidade de Lisboa, *Álgebra Linear e Geometria Analítica*, programa 2025/2026](https://fenix.ciencias.ulisboa.pt/courses/algana-2817829258658182/programa). Incluye característica/rango, eliminación de Gauss–Jordan e inversión de matrices.

### Ampliación académica

[^2]: [MIT OpenCourseWare, Gilbert Strang, *Multiplication and Inverse Matrices*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/multiplication-and-inverse-matrices/). Inversa por eliminación, criterio de pivotes y relación con los sistemas $A\mathbf x=\mathbf b$.

[^3]: [Jim Hefferon, *Linear Algebra*, texto universitario abierto](https://hefferon.net/linearalgebra/). Sistemas, rango, invertibilidad y métodos elementales de álgebra lineal.

## 🧑‍🏫 Prompt para tutor conversacional

Diagnostica si el estudiante compara correctamente $\operatorname{rg}(A)$ y $\operatorname{rg}([A\mid\mathbf b])$, cuenta variables libres sólo en sistemas compatibles, y distingue compatibilidad de unicidad. Para la inversa, comprueba que aplica Gauss–Jordan a $[A\mid I]$, verifica pivotes en todas las columnas y justifica la unicidad. No generes ejercicios nuevos; usa ejemplos funcionales breves y pide comprobaciones algebraicas.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
