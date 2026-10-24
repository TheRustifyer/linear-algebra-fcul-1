---
title: Factorización LU
aliases:
  - Descomposición LU
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
tipo:
  - ampliación
  - definición
  - procedimiento
nivel: universitario-introductorio
estado: borrador
capa: curricular
alcance: ampliación-curricular-externa
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Eliminación y matrices elementales|Eliminación y matrices elementales]]"
  - "[[Matemáticas/Álgebra lineal/Matrices|Matrices]]"
relacionado:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa|Compatibilidad, rango e inversa]]"
fsrs_goal: Para una matriz cuadrada que admite eliminación sin permutaciones, calcula L triangular inferior unitaria y U triangular superior, reconstruye y comprueba A=LU, resuelve Ax=b mediante sustitución hacia delante y hacia atrás, e identifica cuándo se requiere pivoteo.
simbolos:
  - A=LU
  - L
  - U
  - m_{ik}
  - PA=LU
tags:
  - matemáticas
  - álgebra-lineal
  - matrices
  - ampliación
  - curricular
---

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

# Factorización LU

> [!info] Ampliación curricular externa
> La factorización $LU$ organiza en dos matrices triangulares los multiplicadores y pivotes de una eliminación gaussiana. Aquí se desarrolla el caso que no necesita permutar filas; el pivoteo se señala como límite del procedimiento.[^1]

## La eliminación como producto de matrices

Resolver $A\mathbf x=\mathbf b$ por eliminación transforma $A$ en una matriz triangular superior. Si los pasos no intercambian filas, cada eliminación usa un multiplicador que puede conservarse. Reuniendo esos multiplicadores se forma una matriz triangular inferior $L$; la matriz ya eliminada es $U$. Así, la secuencia de operaciones se puede expresar como

$$
A=LU.
$$

La igualdad no es una aproximación: es una factorización exacta. Su utilidad es separar una eliminación en dos sustituciones sencillas, especialmente cuando se resolverán varios sistemas con la misma matriz $A$ y distintos vectores de términos independientes.[^1][^2]

## Definición y estructura de los factores

> [!definicion] Factorización LU
> Una factorización $A=LU$ expresa una matriz cuadrada $A$ como producto de una matriz triangular inferior $L$ y una matriz triangular superior $U$. En la convención unitaria, los elementos diagonales de $L$ valen $1$; sus elementos debajo de la diagonal almacenan los multiplicadores de eliminación.

Para una matriz de orden $n$,

$$
L=\begin{pmatrix}
1&0&\cdots&0\\
\ell_{21}&1&\cdots&0\\
\vdots&\ddots&\ddots&\vdots\\
\ell_{n1}&\cdots&\ell_{n,n-1}&1
\end{pmatrix},\qquad
U=\begin{pmatrix}
u_{11}&u_{12}&\cdots&u_{1n}\\
0&u_{22}&\cdots&u_{2n}\\
\vdots&\ddots&\ddots&\vdots\\
0&\cdots&0&u_{nn}
\end{pmatrix}.
$$

La diagonal de $L$ unitaria fija una convención y evita trasladar factores escalares entre $L$ y $U$. En la eliminación de la columna $k$, si el pivote es $u_{kk}\ne0$, el multiplicador para anular la entrada de la fila $i$ es

$$
m_{ik}=\frac{a_{ik}^{(k)}}{u_{kk}},\qquad i>k,
$$

donde $a_{ik}^{(k)}$ es la entrada que se va a eliminar en la etapa $k$. Se guarda $m_{ik}$ en la posición $(i,k)$ de $L$, y se reemplaza la fila de trabajo por $R_i-m_{ik}R_k$. Los pivotes y las entradas que sobreviven forman $U$.

```anki
deck: Matemáticas::Álgebra lineal::Factorización LU
tags:
  - matemáticas
  - matrices
  - factorización-lu
---
> [!note] Pregunta
> ¿Qué representan las entradas de $L$ situadas debajo de su diagonal en la convención $A=LU$ con $L$ unitaria?
===
> [!important] Respuesta
> Los multiplicadores usados para eliminar las entradas debajo de los pivotes durante la reducción de $A$ a $U$.
```

## Construcción sin permutaciones

En cada columna $k$, se usa el pivote actual $u_{kk}$ para anular las entradas inferiores. No se intercambian filas. Los multiplicadores se guardan en $L$ en el mismo orden de eliminación; los pivotes y las filas transformadas construyen $U$. Para una matriz de orden $n$, hacen falta pivotes no nulos en cada etapa:

$$
u_{kk}\ne0\quad (k=1,\ldots,n-1).
$$

La última entrada diagonal de $U$ también debe ser no nula si se desea resolver cualquier segundo miembro de forma única. La forma de eliminar sigue el método de [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Eliminación y matrices elementales|Gauss]]; la diferencia es que ahora los multiplicadores se conservan en lugar de descartarse.

### Ejemplo trabajado: construir y comprobar $A=LU$

Sea

$$
A=\begin{pmatrix}2&1\\4&3\end{pmatrix}.
$$

El único multiplicador es $m_{21}=4/2=2$. Al hacer $R_2\leftarrow R_2-2R_1$, se obtiene $U$ y se registra ese multiplicador en $L$:

$$
U=\begin{pmatrix}2&1\\0&1\end{pmatrix},\qquad
L=\begin{pmatrix}1&0\\2&1\end{pmatrix}.
$$

La comprobación reconstruye la matriz original:

$$
LU=\begin{pmatrix}1&0\\2&1\end{pmatrix}
\begin{pmatrix}2&1\\0&1\end{pmatrix}
=\begin{pmatrix}2&1\\4&3\end{pmatrix}=A.
$$

La entrada $2$ de $L$ conserva el multiplicador, mientras que la fila segunda de $U$ contiene el resultado de la eliminación. Verificar el producto detecta errores de orden o de signo.[^1]

## Resolver sistemas con los factores

Si $A=LU$, entonces

$$
A\mathbf x=\mathbf b\iff LU\mathbf x=\mathbf b.
$$

Se introduce $\mathbf y=U\mathbf x$ y se resuelven dos sistemas triangulares:

1. **Sustitución hacia delante:** resolver $L\mathbf y=\mathbf b$. Como $L$ es triangular inferior unitaria, cada componente se calcula desde la primera fila hacia abajo.
2. **Sustitución hacia atrás:** resolver $U\mathbf x=\mathbf y$. Como $U$ es triangular superior, se empieza en la última fila y se avanza hacia arriba.

En el ejemplo anterior, con $\mathbf b=(5,11)^T$, primero

$$
\begin{pmatrix}1&0\\2&1\end{pmatrix}
\begin{pmatrix}y_1\\y_2\end{pmatrix}
=\begin{pmatrix}5\\11\end{pmatrix}
\quad\Longrightarrow\quad \mathbf y=\begin{pmatrix}5\\1\end{pmatrix}.
$$

Después,

$$
\begin{pmatrix}2&1\\0&1\end{pmatrix}
\begin{pmatrix}x_1\\x_2\end{pmatrix}
=\begin{pmatrix}5\\1\end{pmatrix}
\quad\Longrightarrow\quad \mathbf x=\begin{pmatrix}2\\1\end{pmatrix}.
$$

La sustitución en $A\mathbf x=\mathbf b$ confirma que $A(2,1)^T=(5,11)^T$. Si se mantienen fijos $L$ y $U$, cada nuevo vector $\mathbf b$ requiere sólo resolver los dos sistemas triangulares, no repetir la eliminación completa.[^1][^2]

## Pivoteo y límites de la factorización

Las condiciones de validez de esta construcción exigen que cada pivote usado sea no nulo. Si un pivote es cero, no se puede calcular $m_{ik}$; un intercambio de filas puede permitir continuar. En ese caso se registra la permutación mediante una matriz $P$ y se escribe, con la convención habitual,

$$
PA=LU.
$$

Una matriz invertible puede necesitar un intercambio aunque admita una factorización con permutación. Por tanto, que falle este algoritmo sin permutar no implica que $A$ sea singular. El alcance de esta exposición es la factorización sin pivoteo; el análisis de $PA=LU$ y las estrategias numéricas de pivoteo constituyen una ampliación adicional.[^2]

## Conexión con la resolución de sistemas

La factorización $A=LU$ no cambia el conjunto solución: reescribe la matriz del sistema como dos transformaciones triangulares. Cuando los pivotes de $U$ son no nulos, el sistema tiene solución única, y la secuencia de sustituciones la encuentra. Esto se conecta con la clasificación por rango y con la inversa de una matriz en [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa|compatibilidad, rango e inversa]]. La eliminación de Gauss que origina los multiplicadores se desarrolla en la sección canónica de [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales#5. Eliminación de Gauss|eliminación de Gauss]].

## 📚 Fuentes

### Material base aportado

- Ninguno aportado. El índice curricular señala esta factorización como ampliación; no es una fuente matemática.

### Ampliación académica

[^1]: [MIT OpenCourseWare, Gilbert Strang, *Factorization into A = LU*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/factorization-into-a-lu/). Multiplicadores de eliminación, factores triangulares y resolución de sistemas.

[^2]: [Jim Hefferon, *Linear Algebra*, texto universitario abierto](https://hefferon.net/linearalgebra/). Eliminación, sistemas triangulares y factorización matricial en un curso introductorio.

## 🧑‍🏫 Prompt para tutor conversacional

Comprueba que el estudiante conserva en $L$ los multiplicadores usados para obtener $U$, mantiene la diagonal de $L$ unitaria, verifica $LU=A$ y resuelve en el orden correcto $L\mathbf y=\mathbf b$ y $U\mathbf x=\mathbf y$. Si encuentra un pivote nulo, pregunta por qué el método sin permutaciones se detiene y cómo se expresa el caso con una matriz de permutación. No generes ejercicios nuevos; usa ejemplos funcionales breves y exige comprobaciones.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
