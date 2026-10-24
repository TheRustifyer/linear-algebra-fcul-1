---
title: Eliminación y matrices elementales
aliases:
  - Método de Gauss y Gauss-Jordan
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
  - "[[Matemáticas/Álgebra lineal/Matrices|Matrices]]"
desbloquea:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa|Compatibilidad, rango e inversa]]"
fsrs_goal: Aplicar intercambios, escalados no nulos y reemplazos de fila, justificar que conservan las soluciones, reconocer formas escalonadas y reducir un sistema por Gauss o Gauss-Jordan sin perder las dimensiones ni el significado de las variables.
simbolos:
  - R_i\leftrightarrow R_j
  - R_i\leftarrow cR_i
  - R_i\leftarrow R_i+cR_j
  - E_{ij}
  - - A\mid\mathbf b
tags:
  - matemáticas
  - álgebra-lineal
  - sistemas-lineales
  - eliminación
  - curricular
---

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

# Eliminación y matrices elementales

> [!important] Alcance de las clases
> Reúne en castellano las diapositivas 13–17 del aula 4, el aula 5 completa y las diapositivas 2–10 del aula 6, con sus ejemplos de operaciones y reducciones.

## Propósito de la eliminación

En un sistema lineal, cada fila expresa una ecuación. La eliminación transforma esas ecuaciones en otras más sencillas, pero equivalentes: el conjunto de soluciones permanece igual. La matriz ampliada $[A\mid\mathbf b]$ registra los coeficientes y los términos independientes; operar sobre sus filas es una manera compacta de efectuar las mismas transformaciones en las ecuaciones.

## Operaciones elementales por filas

Para una matriz con filas $R_1,\ldots,R_m$, se permiten tres transformaciones.

### Intercambio de filas

> [!definicion] Intercambio
> $R_i\leftrightarrow R_j$ permuta dos filas. En el sistema equivale a reordenar dos ecuaciones.

### Escalado por un escalar no nulo

> [!definicion] Escalado
> $R_i\leftarrow cR_i$, con $c\ne0$, multiplica una ecuación por una constante no nula. La condición $c\ne0$ permite recuperar la fila original dividiendo por $c$.

### Reemplazo de una fila

> [!definicion] Reemplazo
> $R_i\leftarrow R_i+cR_j$, para $i\ne j$, suma a la fila $i$ un múltiplo de otra fila. Se deshace mediante $R_i\leftarrow R_i-cR_j$.

Cada operación tiene inversa del mismo tipo. Por eso no elimina ni añade soluciones; sólo cambia la representación del sistema.[^1]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - definición
---
> [!note] Pregunta
> ¿Qué hace equivalentes a dos sistemas obtenidos mediante operaciones elementales por filas?
===
> [!important] Respuesta
> Cada operación es reversible, así que ambos sistemas tienen exactamente el mismo conjunto de soluciones.
```

## Matrices elementales

> [!definicion] Matriz elemental
> Una matriz elemental se obtiene aplicando una única operación elemental por filas a una matriz identidad $I_m$.

Si $E$ corresponde a una operación sobre las filas de $A$, entonces esa misma operación se expresa como multiplicación por la izquierda: $EA$. El orden importa: la multiplicación modifica filas. Las matrices elementales son invertibles porque cada operación se deshace con otra operación elemental; una secuencia de pasos equivale a $E_k\cdots E_2E_1A$. Esta lectura conecta el algoritmo con el producto matricial.[^1][^2]

#### TPC · Aula 5, diapositiva 8: por qué $EA$ ejecuta la operación

Sea $A=(a_{rk})\in M_{m\times n}(K)$ y sea $E\in M_m(K)$ la matriz obtenida al aplicar una operación elemental a $I_m$. El producto está definido y su entrada $(r,k)$ es $(EA)_{rk}=\sum_{\ell=1}^{m}e_{r\ell}a_{\ell k}$: la fila $r$ de $E$ indica qué combinación de filas de $A$ ocupará la fila $r$ del resultado.

- **Permuta $P_{ij}$:** las filas $i,j$ de $I_m$ pasan a ser las filas $j,i$; por tanto, $(P_{ij}A)_{ik}=a_{jk}$ y $(P_{ij}A)_{jk}=a_{ik}$. Las demás filas siguen iguales.
- **Escalado $D_i(\lambda)$, $\lambda\ne0$:** la fila $i$ de $E$ es $\lambda$ veces la de $I_m$; así, $(D_i(\lambda)A)_{ik}=\lambda a_{ik}$ y las otras filas no cambian.
- **Reemplazo $E_{ij}(\lambda)$, $i\ne j$:** la fila $i$ de $E$ es la fila $i$ de $I_m$ más $\lambda$ veces la fila $j$; por ello, $(E_{ij}(\lambda)A)_{ik}=a_{ik}+\lambda a_{jk}$ y las restantes filas se conservan.

Son exactamente los tres resultados de aplicar a $A$ la operación que produjo $E$ desde $I_m$. La demostración explica también por qué una segunda operación $E_2$ actúa como $E_2(E_1A)$: las matrices se escriben en el **orden inverso al de lectura temporal**. *(FCUL, aula 5, diap. 8; la composición se enuncia en la diap. 11.)*

## Formas escalonada y escalonada reducida

Una matriz está en **forma escalonada por filas** si las filas nulas, si existen, quedan al final; el primer elemento no nulo de cada fila no nula (su pivote) aparece a la derecha del pivote de la fila anterior; y debajo de cada pivote hay ceros. Los pivotes no tienen que valer $1$.

Está en **forma escalonada reducida** si además cada pivote vale $1$ y es el único elemento no nulo de su columna. Esta forma permite leer directamente las variables pivote en función de las variables libres. La forma escalonada no suele ser única, mientras que la forma escalonada reducida de una matriz es única.

## Eliminación de Gauss y Gauss-Jordan

El método de **Gauss** elige pivotes sucesivos, elimina los elementos que quedan debajo de ellos y obtiene una forma escalonada; después se resuelve por sustitución hacia atrás. Si un candidato a pivote es cero, se intercambian filas para buscar otro. El método de **Gauss-Jordan** continúa eliminando también los elementos por encima de cada pivote hasta llegar a la forma escalonada reducida. Si no hay pivote disponible en una columna, se avanza a la siguiente: esa columna puede corresponder a una variable libre.

### Ejemplo trabajado: reducción de un sistema

Para

$$
2x+y=5,\qquad x-y=1,
$$

la matriz ampliada y una secuencia de operaciones son

$$
\left[\begin{array}{cc|c}2&1&5\\1&-1&1\end{array}\right]
\xrightarrow{R_1\leftrightarrow R_2}
\left[\begin{array}{cc|c}1&-1&1\\2&1&5\end{array}\right]
\xrightarrow{R_2\leftarrow R_2-2R_1}
\left[\begin{array}{cc|c}1&-1&1\\0&3&3\end{array}\right]
\xrightarrow{R_2\leftarrow \frac13R_2}
\left[\begin{array}{cc|c}1&-1&1\\0&1&1\end{array}\right]
\xrightarrow{R_1\leftarrow R_1+R_2}
\left[\begin{array}{cc|c}1&0&2\\0&1&1\end{array}\right].
$$

La forma reducida expresa $x=2$ e $y=1$. Sustituir esos valores en las ecuaciones originales comprueba el resultado. La reducción matricial hace explícita cada operación reversible.[^1]

## Desarrollo completo de las aulas 4–6

### Pivotes y formas escalonadas (aula 4, pp. 13–15)

> [!definicion] Posición pivote
> En una fila no nula, la posición pivote es la de su primera entrada no nula de izquierda a derecha; el pivote es esa entrada. Una fila nula carece de pivote.

En $\begin{pmatrix}7&-2&1&0\\0&0&-8&2\\0&-3&0&1\end{pmatrix}$ las posiciones pivote son $(1,1)$, $(2,3)$ y $(3,2)$, y los pivotes $7,-8,-3$. **No** es escalonada, porque la tercera posición retrocede respecto de la segunda. Son escalonadas $\begin{pmatrix}0&2&5&3&0&3\\0&0&-7&0&8&0\\0&0&0&0&3&1\\0&0&0&0&0&0\\0&0&0&0&0&0\end{pmatrix}$, $\begin{pmatrix}-6&0&0\\0&1&3\\0&0&-5\end{pmatrix}$ e $I_2$. No son escalonadas $\begin{pmatrix}0&3&1&0\\0&0&0&0\\0&0&0&2\end{pmatrix}$, $\begin{pmatrix}0&3&1&0\\0&1&0&5\\0&0&0&-2\end{pmatrix}$ ni $\begin{pmatrix}0&1\\1&0\end{pmatrix}$. Son reducidas $\begin{pmatrix}0&1&0&5\\0&0&1&0\\0&0&0&0\end{pmatrix}$, $\begin{pmatrix}1&-3&0&2&0\\0&0&1&4&0\\0&0&0&0&1\end{pmatrix}$ e $I_2$. Esta lista distingue las dos condiciones de escalonamiento de las adicionales para reducción.

### Del sistema a la matriz (aula 4, pp. 16–17)

Se parte de $-2x+4y-3z=-1$, $5x-5y+10z=5$, $3x+y+5z=14$. Escalar la segunda ecuación por $1/5$ y permutarla con la primera produce $x-y+2z=1$, $-2x+4y-3z=-1$, $3x+y+5z=14$. Luego $R_2\leftarrow R_2+2R_1$ y $R_3\leftarrow R_3-3R_1$ dan $x-y+2z=1$, $2y+z=1$, $4y-z=11$. Con $R_3\leftarrow R_3-2R_2$ resulta $-3z=9$, y con $R_3\leftarrow-\tfrac13R_3$, $z=-3$. Finalmente $R_2\leftarrow R_2-R_3$, $R_1\leftarrow R_1-2R_3$, $R_2\leftarrow\tfrac12R_2$ y $R_1\leftarrow R_1+R_2$ dan $(x,y,z)=(9,2,-3)$. En matrices ampliadas, el trayecto muestra $\left[\begin{array}{ccc|c}-2&4&-3&-1\\5&-5&10&5\\3&1&5&14\end{array}\right]\sim\left[\begin{array}{ccc|c}1&-1&2&1\\0&2&1&1\\0&0&-3&9\end{array}\right]\sim\left[\begin{array}{ccc|c}1&0&0&9\\0&1&0&2\\0&0&1&-3\end{array}\right]$.

### Operaciones, reversibilidad y matrices elementales (aula 5, pp. 2–11)

Las tres operaciones son $R_i\leftrightarrow R_j$, $R_i\leftarrow\lambda R_i$ con $\lambda\ne0$, y $R_i\leftarrow R_i+\lambda R_j$ con $i\ne j$. Sus inversas respectivas son el mismo intercambio, $R_i\leftarrow\lambda^{-1}R_i$ y $R_i\leftarrow R_i-\lambda R_j$. Una cadena finita también se revierte en orden inverso; esta es la razón de que la equivalencia por filas sea una relación de equivalencia. Se denominan $P_{ij}$, $D_i(\lambda)$ y $E_{ij}(\lambda)$ las matrices obtenidas al aplicar cada operación a $I_m$. Los ejemplos de orden 3 son $P_{13}=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}$, $P_{23}=\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}$, $D_3(-5)=\operatorname{diag}(1,1,-5)$, $E_{13}(-5)=\begin{pmatrix}1&0&-5\\0&1&0\\0&0&1\end{pmatrix}$ y $E_{32}(6)=\begin{pmatrix}1&0&0\\0&1&0\\0&6&1\end{pmatrix}$.

Para $A=\begin{pmatrix}a_1&a_2&a_3&a_4\\b_1&b_2&b_3&b_4\\c_1&c_2&c_3&c_4\end{pmatrix}$, la permutación de filas 2 y 3 da $B=P_{23}A$; escalar la primera por $-5$ da $C=D_1(-5)B=D_1(-5)P_{23}A$. En $[A\mid I_3]$, los mismos pasos producen $[C\mid Q]$ con $Q=D_1(-5)P_{23}=\begin{pmatrix}-5&0&0\\0&0&1\\0&1&0\end{pmatrix}$; la izquierda es $QA$. En general, tras $t_1,\ldots,t_p$ se obtiene $[B\mid Q]$ con $B=QA$ y $Q=E_p\cdots E_1$. No se invierte el orden de los factores.

La matriz numérica del aula 5 es $A=\begin{pmatrix}6&-28&4&23&-6\\5&-28&4&20&-7\\-3&15&0&-9&3\\2&-12&4&8&0\end{pmatrix}$. Los pasos $R_3\leftarrow-\tfrac13R_3$, $R_1\leftrightarrow R_3$, $(R_2,R_3,R_4)\leftarrow(R_2-5R_1,R_3-6R_1,R_4-2R_1)$ producen $\begin{pmatrix}1&-5&0&3&-1\\0&-3&4&5&-2\\0&2&4&5&0\\0&-2&4&2&2\end{pmatrix}$. Después $R_2\leftarrow R_2+R_3$ y $(R_3,R_4)\leftarrow(R_3+2R_2,R_4-2R_2)$ dan $\begin{pmatrix}1&-5&0&3&-1\\0&-1&8&10&-2\\0&0&20&25&-4\\0&0&-12&-18&6\end{pmatrix}$. Esta es la matriz desde la que continúa el aula 6.

### Rango y dos reducciones completas (aula 6, pp. 2–10)

Toda matriz admite una única forma escalonada **reducida** equivalente; todas sus formas escalonadas equivalentes tienen igual número de filas no nulas. La presentación enuncia estos hechos sin demostrarlos. En ella «característica» $r(A)$ o $c(A)$ es lo que esta nota llama rango. Gauss llega a una forma escalonada, Gauss–Jordan a la reducida. Conviene escoger pivotes $1$ o $-1$ cuando ahorre operaciones, eliminar hacia abajo y luego hacia arriba; ninguna estrategia exige exactamente la misma secuencia de pasos.

Para continuar el ejemplo $4\times5$ anterior se hacen $R_4\leftarrow-\tfrac16R_4$, $R_3\leftrightarrow R_4$, $R_4\leftarrow R_4-10R_3$, llegando a $\begin{pmatrix}1&-5&0&3&-1\\0&-1&8&10&-2\\0&0&2&3&-1\\0&0&0&-5&6\end{pmatrix}$. Luego $R_3\leftarrow R_3+\tfrac35R_4$, $R_2\leftarrow R_2+2R_4$, $R_1\leftarrow R_1+\tfrac35R_4$ anulan la cuarta columna superior; $R_2\leftarrow R_2-4R_3$, $R_1\leftarrow R_1-5R_2$ y escalar filas 2, 3 y 4 por $-1,1/2,-1/5$ llevan a $\begin{pmatrix}1&0&0&0&23/5\\0&1&0&0&2/5\\0&0&1&0&13/10\\0&0&0&1&-6/5\end{pmatrix}$. Hay cuatro pivotes: $r(A)=4$. La matriz ya escalonada $\begin{pmatrix}0&5&2&5&-1\\0&0&0&8&3\\0&0&0&0&0\end{pmatrix}$ tiene rango 2.

En el segundo ejemplo $A=\begin{pmatrix}0&2&0&0&1&0\\0&5&-1&0&5&-5\\0&7&-17&0&32&-57\\0&-5&-1&0&-4&3\end{pmatrix}$. Primero $R_2\leftarrow R_2-2R_1$, $R_1\leftrightarrow R_2$; después se anula bajo la primera posición pivote con $R_2\leftarrow R_2-2R_1$, $R_3\leftarrow R_3-7R_1$, $R_4\leftarrow R_4+5R_1$. Así se llega a $\begin{pmatrix}0&1&-1&0&3&-5\\0&0&2&0&-5&10\\0&0&-10&0&11&-22\\0&0&-6&0&11&-22\end{pmatrix}$. Con $R_3\leftarrow R_3+5R_2$, $R_4\leftarrow R_4+3R_2$, $R_3\leftarrow-\tfrac1{14}R_3$ y $R_4\leftarrow R_4+4R_3$ aparece $B=\begin{pmatrix}0&1&-1&0&3&-5\\0&0&2&0&-5&10\\0&0&0&0&1&-2\\0&0&0&0&0&0\end{pmatrix}$, de rango 3. Hacia arriba: $R_2\leftarrow R_2+5R_3$, $R_1\leftarrow R_1-3R_3$, $R_2\leftarrow\tfrac12R_2$, $R_1\leftarrow R_1+R_2$ dan la única reducida $C=\begin{pmatrix}0&1&0&0&0&1\\0&0&1&0&0&0\\0&0&0&0&1&-2\\0&0&0&0&0&0\end{pmatrix}$.

Fuentes primarias: [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/ALGA-2026-27-AulasTeo-slides-aula4-FormaEscada-impressao.pdf|FCUL, aula 4, pp. 13–17]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/ALGA-2026-27-AulasTeo-slides-aula5-TransfElem-impressao.pdf|aula 5]] y [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/ALGA-2026-27-AulasTeo-slides-aula6-CaractMatrizesInv-impressao.pdf|aula 6, pp. 2–10]].

## Condiciones de validez y errores frecuentes

El escalado exige un factor no nulo. Al sumar un múltiplo de otra fila, la fila fuente debe permanecer intacta durante esa operación. Las operaciones se aplican a toda la fila ampliada, incluido el término independiente; cambiar sólo la parte de coeficientes altera el sistema. Un pivote cero no autoriza dividir: se intercambian filas o se deja esa columna sin pivote. La eliminación preserva el conjunto de soluciones, pero puede cambiar la apariencia y el orden de las ecuaciones.[^2]

El siguiente paso interpreta el número de pivotes para decidir si el sistema es compatible y cuántas soluciones tiene; esa conexión conduce a [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa|compatibilidad, rango e inversa]].

## 📚 Fuentes

### Material base aportado

- [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/ALGA-2026-27-AulasTeo-slides-aula4-FormaEscada-impressao.pdf|FCUL, aula 4, pp. 13–17]], [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/ALGA-2026-27-AulasTeo-slides-aula5-TransfElem-impressao.pdf|aula 5]] y [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/ALGA-2026-27-AulasTeo-slides-aula6-CaractMatrizesInv-impressao.pdf|aula 6, pp. 2–10]]. Diapositivas docentes FCUL 2026/27.

### Alcance curricular

[^3]: [Faculdade de Ciências, Universidade de Lisboa, *Álgebra Linear e Geometria Analítica*, programa 2025/2026](https://fenix.ciencias.ulisboa.pt/courses/algana-2817829258658182/programa). Incluye transformaciones elementales, matrices elementales y métodos de Gauss y Gauss–Jordan.

### Ampliación académica

[^1]: [MIT OpenCourseWare, Gilbert Strang, *Elimination with Matrices*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/elimination-with-matrices/). Eliminación como método matricial y su organización algorítmica.

[^2]: [Jim Hefferon, *Linear Algebra*, texto universitario abierto](https://hefferon.net/linearalgebra/). Sistemas lineales, eliminación y álgebra matricial.

## 🧑‍🏫 Prompt para tutor conversacional

Comprueba que el estudiante identifica las tres operaciones elementales, justifica su reversibilidad, distingue forma escalonada de reducida y aplica Gauss-Jordan sobre la matriz ampliada completa. Si aparece un pivote nulo, pregunta qué operación preserva el conjunto de soluciones. No generes ejercicios; utiliza ejemplos funcionales breves y pide que cada respuesta se compruebe en el sistema original.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
