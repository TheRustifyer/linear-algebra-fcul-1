---
title: Ejercicios 16–19 — escalonamiento y transformaciones elementales
asignatura: Álgebra Lineal y Geometría Analítica
capa: curricular
tipo: ejercicios
nivel: universitario-introductorio
estado: revisado
fsrs_goal: Distinguir formas escalonadas, reducir matrices por filas, construir matrices elementales y discutir rangos con parámetros.
tags:
  - matematicas
  - algebra-lineal
  - matrices
  - eliminacion
  - ejercicios
  - fcul
---

# Escalonamiento y transformaciones elementales · ejercicios 16–19

> [!tip] Procedencia
> 🤖 identifica los apartados resueltos o comprobados por IA. 📘 identifica los resultados y desarrollos de las fichas del curso. Se conserva la numeración original.

## Reconocer la forma escalonada

### Ejercicio 16 · Forma escalonada y forma reducida 🤖

#### Enunciado

Indica cuáles de las siguientes matrices están en **forma escalonada por filas** y cuáles están en **forma escalonada reducida**.

**a–e**

$$
A=\begin{pmatrix}1&1&5\\0&-1&1\\0&0&1\end{pmatrix},\qquad
B=\begin{pmatrix}1&0&0\\0&1&0\\5&1&1\end{pmatrix}.
$$

$$
C=\begin{pmatrix}1&5&-4\\0&0&1\\0&0&1\end{pmatrix},\qquad
D=\begin{pmatrix}1&0&-4\\0&0&1\\0&0&0\end{pmatrix},\qquad
E=\begin{pmatrix}1&5&0\\0&0&1\\0&0&0\end{pmatrix}.
$$

**f–j**

$$
F=\begin{pmatrix}1&0&0\\0&0&1\\0&0&0\end{pmatrix},\qquad
G=\begin{pmatrix}0&0&0\\1&5&0\\0&0&1\end{pmatrix}.
$$

$$
H=\begin{pmatrix}0&2&4&0\\0&0&8&3\\0&0&0&0\\0&0&0&0\end{pmatrix},\qquad
I=\begin{pmatrix}1&5&0\\0&0&0\\0&0&1\end{pmatrix},\qquad
J=\begin{pmatrix}1&5&0\\0&0&0\\0&0&0\end{pmatrix}.
$$

**k–o**

$$
K=\begin{pmatrix}1&0&-2&0\\0&0&0&1\\0&0&0&0\\0&0&0&0\end{pmatrix},\qquad
L=\begin{pmatrix}0&1&-7\\0&0&0\\0&0&0\end{pmatrix}.
$$

$$
M=\begin{pmatrix}0&1&-7\end{pmatrix},\qquad
N=\begin{pmatrix}1\\1\\0\end{pmatrix},\qquad
O=\begin{pmatrix}0&0&0\\0&0&0\\0&0&0\end{pmatrix}.
$$

> [!example]- Resolución
>
> Una forma escalonada coloca las filas nulas al final y desplaza estrictamente a la derecha el primer elemento no nulo de cada fila. Para que sea **reducida**, cada pivote debe valer $1$ y ser el único elemento no nulo de su columna.
>
> - **Escalonadas, pero no reducidas:** $A$, $D$ y $H$.
> - **Escalonadas reducidas:** $E$, $F$, $J$, $K$, $L$, $M$ y $O$.
> - **No escalonadas:** $B$, $C$, $G$, $I$ y $N$.
>
> En $A$, el pivote $-1$ es admisible para la forma escalonada, pero impide que sea reducida. En $D$ queda un $-4$ encima del pivote de la tercera columna. En $H$, los pivotes valen $2$ y $8$. Las matrices $G$ e $I$ tienen una fila nula antes de otra no nula; $C$ y $N$ repiten columna pivote; $B$ tiene un elemento no nulo bajo el primer pivote.

> [!success]- Comprobación
>
> Marca en cada fila el índice de la primera entrada no nula. En las escalonadas debe aumentar estrictamente. Luego revisa, solo para las candidatas reducidas, el valor de cada pivote y el resto de su columna. La matriz cero cumple las condiciones vacíamente.

---

## Reducción por filas

### Ejercicio 17 · Forma escalonada, rango y forma reducida 📘🤖

#### Enunciado

Para cada matriz, realiza transformaciones elementales por filas hasta obtener una forma escalonada equivalente, indica su **rango** y continúa hasta una forma escalonada reducida equivalente.

$$
A=\begin{pmatrix}2&4&0&3\\0&0&2&3\\1&2&0&2\\-1&4&0&4\end{pmatrix},\qquad
B=\begin{pmatrix}0&0&1\\4&1&0\\1&2&-1\end{pmatrix}.
$$

$$
C=\begin{pmatrix}0&0&3&3i&-15\\i&3&2&0&3\\2&-6i&-5i&1&2\end{pmatrix},\qquad i^2=-1.
$$

$$
D=\begin{pmatrix}2&0&2&-2\\0&0&0&0\\4&-4&4&4\\0&2&0&0\end{pmatrix},\qquad
E=\begin{pmatrix}0&1&2&3\\0&2&1&0\\0&-1&-1&1\\0&1&1&1\end{pmatrix}.
$$

$$
F=\begin{pmatrix}3&0&0&-21&24\\4&1&0&-25&34\\-2&3&0&22&-2\end{pmatrix}.
$$

$$
G=\begin{pmatrix}3\\0\\-1\\0\end{pmatrix},\qquad
H=\begin{pmatrix}3&0&-1&0&1\end{pmatrix},\qquad
I=\begin{pmatrix}5\end{pmatrix}.
$$

> [!example]- Resolución de a) y b) 📘🤖
>
> Para $A$, comienza con $L_3\leftarrow L_3-\tfrac12L_1$ y $L_4\leftarrow L_4+\tfrac12L_1$; permuta después $L_2,L_4$ y $L_3,L_4$. Para $B$, permuta $L_1,L_2$, realiza $L_3\leftarrow L_3-\tfrac14L_1$ y permuta $L_2,L_3$. Las formas escalonadas obtenidas son
>
> $$
> A\sim\begin{pmatrix}2&4&0&3\\0&6&0&11/2\\0&0&2&3\\0&0&0&1/2\end{pmatrix},
> \qquad
> B\sim\begin{pmatrix}4&1&0\\0&7/4&-1\\0&0&1\end{pmatrix}.
> $$
>
> Hay cuatro y tres pivotes respectivamente. Al normalizar y eliminar por encima de cada pivote,
>
> $$
> \operatorname{rref}(A)=I_4,
> \qquad
> \operatorname{rref}(B)=I_3;
> \qquad r(A)=4,\quad r(B)=3.
> $$

> [!example]- Resolución de c) 📘🤖
>
> Permuta $L_1,L_2$ y después aplica $L_3\leftarrow L_3+2iL_1$ y $L_3\leftarrow L_3+\tfrac i3L_2$. Sale una forma escalonada con tres pivotes:
>
> $$
> C\sim\begin{pmatrix}
> i&3&2&0&3\\
> 0&0&3&3i&-15\\
> 0&0&0&0&2+i
> \end{pmatrix}.
> $$
>
> Normalizar pivotes y eliminar hacia arriba da la forma reducida de la ficha:
>
> $$
> \operatorname{rref}(C)=
> \begin{pmatrix}
> 1&-3i&0&-2&0\\
> 0&0&1&i&0\\
> 0&0&0&0&1
> \end{pmatrix},
> \qquad r(C)=3.
> $$

> [!example]- Resolución de d), e) y f) 📘🤖
>
> En $D$, haz $L_3\leftarrow L_3-2L_1$, permuta $L_2,L_3$, haz $L_4\leftarrow L_4+\tfrac12L_2$ y coloca la fila nula al final. En $E$, aplica sucesivamente
>
> $$
> \begin{aligned}
> &L_2\leftarrow L_2-2L_1,\quad L_3\leftarrow L_3+L_1,\quad L_4\leftarrow L_4-L_1,\\
> &L_3\leftarrow L_3+\tfrac13L_2,\quad L_4\leftarrow L_4-\tfrac13L_2.
> \end{aligned}
> $$
>
> En $F$, aplica $L_2\leftarrow L_2-\tfrac43L_1$, $L_3\leftarrow L_3+\tfrac23L_1$ y $L_3\leftarrow L_3-3L_2$.
>
> Se obtienen, por ejemplo, las siguientes formas escalonadas:
>
> $$
> D\sim\begin{pmatrix}2&0&2&-2\\0&-4&0&8\\0&0&0&4\\0&0&0&0\end{pmatrix},
> \qquad
> E\sim\begin{pmatrix}0&1&2&3\\0&0&-3&-6\\0&0&0&2\\0&0&0&0\end{pmatrix}.
> $$
>
> $$
> F\sim\begin{pmatrix}3&0&0&-21&24\\0&1&0&3&2\\0&0&0&-1&8\end{pmatrix}.
> $$
>
> Las tres tienen rango $3$. Las formas reducidas indicadas por la ficha son
>
> $$
> \operatorname{rref}(D)=\begin{pmatrix}1&0&1&0\\0&1&0&0\\0&0&0&1\\0&0&0&0\end{pmatrix},
> \qquad
> \operatorname{rref}(E)=\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix}.
> $$
>
> $$
> \operatorname{rref}(F)=\begin{pmatrix}1&0&0&0&-48\\0&1&0&0&26\\0&0&0&1&-8\end{pmatrix}.
> $$

> [!example]- Resolución de g), h) e i) 🤖
>
> En cada caso hay un solo pivote, por lo que el rango es $1$:
>
> $$
> G\sim\begin{pmatrix}3\\0\\0\\0\end{pmatrix}
> \sim\operatorname{rref}(G)=\begin{pmatrix}1\\0\\0\\0\end{pmatrix}.
> $$
>
> $$
> \operatorname{rref}(H)=\begin{pmatrix}1&0&-1/3&0&1/3\end{pmatrix},
> \qquad
> \operatorname{rref}(I)=\begin{pmatrix}1\end{pmatrix}.
> $$
>
> La propia $H$ y la propia $I$ ya están escalonadas; basta dividir su fila no nula por $3$ o por $5$. En $G$, normaliza la primera entrada y elimina el $-1$ de la tercera fila.

> [!success]- Comprobación 🤖
>
> Cuenta los pivotes en las formas escalonadas y verifica que cada forma reducida tiene pivotes $1$, solos en sus columnas. Las operaciones de fila indicadas son reversibles y no cambian el rango. Para c), evita dividir por $i$ como si fuera real: $1/i=-i$.

---

## Matrices elementales

### Ejercicio 18 · Describir operaciones de fila mediante matrices 📘🤖

#### Enunciado

Sean

$$
A=\begin{pmatrix}1&0&1&1\\1&2&3&1\\-2&-1&-1&0\end{pmatrix},\qquad
B=\begin{pmatrix}1&2&3&1\\1&0&1&1\\-2&-1&-1&0\end{pmatrix}.
$$

$$
C=\begin{pmatrix}1&0&1&1\\-1&1&2&1\\-2&-1&-1&0\end{pmatrix},\qquad
D=\begin{pmatrix}1&0&1&1\\-2&-4&-6&-2\\-2&-1&-1&0\end{pmatrix}.
$$

1. Determina matrices elementales $H,J,K$ tales que $HA=B$, $JA=C$ y $KA=D$.
2. Determina una sucesión de matrices elementales $E_p,\ldots,E_1$ cuyo producto por la izquierda transforme $A$ en cada una de las matrices siguientes:

$$
M_1=\begin{pmatrix}1&0&1&1\\0&-1&1&2\\0&2&2&0\end{pmatrix},\qquad
M_2=\begin{pmatrix}1&0&1&1\\0&3&-3&-6\\0&0&7&7\end{pmatrix}.
$$

3. Determina $Q$ tal que $QA=F$, donde

$$
F=\begin{pmatrix}-2&4&2&-2\\0&2&2&0\\0&3&9&6\end{pmatrix}.
$$

> [!example]- Resolución de a) 🤖
>
> Las tres transformaciones son, respectivamente, intercambiar filas 1 y 2, sumar la fila 3 a la 2 y multiplicar la fila 2 por $-2$. Aplicarlas a $I_3$ da
>
> $$
> H=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix},\qquad
> J=\begin{pmatrix}1&0&0\\0&1&1\\0&0&1\end{pmatrix},\qquad
> K=\begin{pmatrix}1&0&0\\0&-2&0\\0&0&1\end{pmatrix}.
> $$

> [!example]- Resolución de b) 📘🤖
>
> Para $M_1$, una cadena válida es
>
> $$
> L_2\leftarrow L_2-L_1,qquad
> L_3\leftarrow L_3+2L_1,qquad
> L_2\leftrightarrow L_3.
> $$
>
> Si $E_1,E_2,E_3$ son las matrices elementales de esas operaciones en ese orden, entonces $E_3E_2E_1A=M_1$.
>
> Para $M_2$, la resolución de la ficha continúa la misma cadena con
>
> $$
> L_3\leftarrow L_3+2L_2,qquad
> L_2\leftarrow-3L_2,qquad
> L_3\leftarrow\frac74L_3.
> $$
>
> Así, con las seis matrices elementales correspondientes, $E_6E_5E_4E_3E_2E_1A=M_2$.

> [!example]- Resolución de c) 📘
>
> La ficha aplica a $[A\mid I_3]$ las operaciones
>
> $$
> \begin{aligned}
> &L_2\leftarrow L_2-L_1,\quad L_3\leftarrow L_3+2L_1,\\
> &L_1\leftarrow L_1-L_2,\quad L_3\leftarrow L_3+L_2,\\
> &L_1\leftarrow-2L_1,\quad L_3\leftarrow3L_3.
> \end{aligned}
> $$
>
> La mitad izquierda termina en $F$ y la derecha en
>
> $$
> Q=\begin{pmatrix}-4&2&0\\-1&1&0\\3&3&3\end{pmatrix}.
> $$

> [!success]- Comprobación 🤖
>
> Las filas de $QA$ son $-4L_1+2L_2$, $-L_1+L_2$ y $3(L_1+L_2+L_3)$, todas calculadas con las filas **originales** de $A$. Deben coincidir, en ese orden, con las tres filas de $F$.

---

## Discusión del rango con parámetros

### Ejercicio 19 · Rangos según $\alpha$ y $\beta$ 📘

#### Enunciado

Discute el rango de cada matriz en función de los parámetros reales $\alpha$ y $\beta$:

$$
A=\begin{pmatrix}-5&1&8\\0&\alpha&0\\0&0&\alpha-1\end{pmatrix},\qquad
B=\begin{pmatrix}4&\alpha-1&3\\0&\alpha^2+1&\alpha-1\\0&0&\alpha+5\end{pmatrix}.
$$

$$
C=\begin{pmatrix}-1&1&3\\1&\alpha-1&-\alpha-3\\-1-\alpha&2-\alpha&3\alpha+5\end{pmatrix}.
$$

$$
D=\begin{pmatrix}1&2&-1&2\\3&2\alpha+6&\beta^2-4&\beta^2+9\\-1&-2&\beta^2&\beta-1\end{pmatrix}.
$$

> [!example]- Resolución de a) y b) 📘
>
> Son matrices triangulares. En $A$, el pivote $-5$ nunca se anula; los otros son $\alpha$ y $\alpha-1$:
>
> $$
> r(A)=\begin{cases}2,&\alpha=0\ \text{o}\ \alpha=1,\\3,&\alpha\ne0,1.\end{cases}
> $$
>
> En $B$, $\alpha^2+1>0$ para todo $\alpha\in\mathbb R$; solo puede anularse el último pivote:
>
> $$
> r(B)=\begin{cases}2,&\alpha=-5,\\3,&\alpha\ne-5.\end{cases}
> $$

> [!example]- Resolución de c) 📘
>
> La resolución de la ficha elimina la primera columna con $L_2\leftarrow L_2+L_1$ y $L_3\leftarrow L_3-(1+\alpha)L_1$. Después hace $L_3\leftarrow L_3+2L_2$, permuta $L_2,L_3$ y elimina $L_3\leftarrow L_3-\alpha L_2$. El resultado es
>
> $$
> C\sim\begin{pmatrix}
> -1&1&3\\
> 0&1&2-2\alpha\\
> 0&0&\alpha(2\alpha-3)
> \end{pmatrix}.
> $$
>
> Los dos primeros pivotes nunca se anulan. El último desaparece exactamente si $\alpha=0$ o $\alpha=\frac32$. Por ello,
>
> $$
> r(C)=\begin{cases}
> 2,&\alpha=0\ \text{o}\ \alpha=\frac32,\\
> 3,&\alpha\notin\{0,\frac32\}.
> \end{cases}
> $$
>
> No se divide por $\alpha$ antes de separar el caso $\alpha=0$.

> [!example]- Resolución de d) 📘
>
> Al aplicar $L_2\leftarrow L_2-3L_1$ y $L_3\leftarrow L_3+L_1$, se obtiene
>
> $$
> D\sim
> \begin{pmatrix}
> 1&2&-1&2\\
> 0&2\alpha&\beta^2-1&\beta^2+3\\
> 0&0&\beta^2-1&\beta+1
> \end{pmatrix}.
> $$
>
> La discusión de las dos últimas filas da
>
> $$
> r(D)=\begin{cases}
> 2,&\beta=-1,\\
> 2,&\beta=1\ \text{y}\ \alpha=0,\\
> 3,&\text{en los demás casos}.
> \end{cases}
> $$
>
> Si $\beta=-1$, la última fila es nula y la anterior no lo es, porque $\beta^2+3=4$. Si $\beta=1$, la última fila tiene un $2$ en la cuarta columna; la segunda aporta otro pivote exactamente cuando $\alpha\ne0$. Si $\beta\notin\{-1,1\}$, la última fila tiene pivote en la tercera columna. Incluso con $\alpha=0$, las dos últimas filas son independientes: sus entradas de la cuarta columna diferirían en $-\beta^2+\beta-2$, expresión sin raíces reales porque su discriminante es $-7$.

## 📚 Fuentes

### Material base

- [Ficha de enunciados ALGA 2026/27](../../ALGA-2026-27-Exerc-Aulas-Enunc_1-34.pdf), pp. 4–5.
- [Ficha de soluciones ALGA 2026/27](../../ALGA-2026-27-Exerc-Aulas-Solucoes.pdf), p. 1, para los ejercicios 17 y 19.
- [Ficha de resoluciones ALGA 2026/27](../../ALGA-2026-27-Exerc-Aulas-Resolucoes.pdf), pp. 1–3, para 18 b ii), 18 c) y 19 c)–d).
