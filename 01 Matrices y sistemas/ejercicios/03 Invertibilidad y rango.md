---
title: Ejercicios 20–30 — invertibilidad y rango
asignatura: Álgebra Lineal y Geometría Analítica
capa: curricular
tipo: ejercicios
nivel: universitario-introductorio
estado: revisado
fsrs_goal: Justificar la invertibilidad, calcular inversas por eliminación o propiedades y demostrar la conservación del rango por matrices invertibles.
tags:
  - matematicas
  - algebra-lineal
  - matrices
  - inversa
  - rango
  - ejercicios
  - fcul
---

# Invertibilidad y rango · ejercicios 20–30

> [!tip] Procedencia
> 🤖 señala una resolución añadida por IA, que termina con una comprobación reproducible. 📘 señala un resultado suministrado en la ficha de soluciones del curso. En cada ejercicio, las letras de las matrices vuelven a empezar.

## Propiedades de las inversas

### Ejercicio 20 · Inversa y producto de matrices 🤖

#### Enunciado

Sean

$$
A=\begin{pmatrix}3&5\\1&2\end{pmatrix},\qquad
B=\begin{pmatrix}2&-5\\-1&3\end{pmatrix},\qquad
C=\begin{pmatrix}0&-1\\1&-1\end{pmatrix}.
$$

1. Verifica que $B$ es la inversa de $A$.
2. Decide, con justificación, si $D=\begin{pmatrix}2&-5\\-1&2\end{pmatrix}$ es la inversa de $A$.
3. Calcula $(5A)^{-1}$ y $(A^T)^{-1}$.
4. Calcula $C^3$. ¿Es invertible $C$? Halla su inversa.
5. ¿Es invertible $AC$? Halla $(AC)^{-1}$ si existe.

> [!example]- Resolución
>
> **a)** El producto en ambos órdenes es la identidad:
>
> $$
> AB=BA=I_2.
> $$
>
> Por tanto, $A^{-1}=B$.
>
> **b)** $D$ no es la inversa: $(AD)_{22}=1(-5)+2(2)=-1$, mientras $(I_2)_{22}=1$.
>
> **c)** Como $5\ne0$ y la transposición invierte el orden del producto,
>
> $$
> (5A)^{-1}=\frac15B
> =\begin{pmatrix}2/5&-1\\-1/5&3/5\end{pmatrix},
> \qquad
> (A^T)^{-1}=B^T
> =\begin{pmatrix}2&-1\\-5&3\end{pmatrix}.
> $$
>
> **d)** Se obtiene
>
> $$
> C^2=\begin{pmatrix}-1&1\\-1&0\end{pmatrix},
> \qquad C^3=I_2.
> $$
>
> Luego $C$ es invertible y $C^{-1}=C^2$.
>
> **e)** Como $A$ y $C$ son invertibles,
>
> $$
> (AC)^{-1}=C^{-1}A^{-1}=C^2B
> =\begin{pmatrix}-3&8\\-2&5\end{pmatrix}.
> $$

> [!success]- Comprobación
>
> Multiplica $AC$ por la última matriz, en ambos órdenes: debe salir $I_2$. Comprueba también $C\,C^2=I_2$; esto controla a la vez el apartado d) y el orden de los factores en e).

---

### Ejercicio 21 · Matrices diagonales 🤖

#### Enunciado

Sean $A=\operatorname{diag}(a_1,\ldots,a_n)$ y $B=\operatorname{diag}(b_1,\ldots,b_n)$. Calcula $AB$. Determina cuándo $A$ es invertible y, en tal caso, su inversa.

> [!example]- Resolución
>
> El único sumando posiblemente no nulo de la entrada diagonal $i$ del producto es $a_ib_i$:
>
> $$
> AB=\operatorname{diag}(a_1b_1,\ldots,a_nb_n).
> $$
>
> La matriz $A$ es invertible **si y solo si** todos los $a_i$ son no nulos. Entonces
>
> $$
> A^{-1}=\operatorname{diag}\!\left(\frac1{a_1},\ldots,\frac1{a_n}\right).
> $$

> [!success]- Comprobación
>
> Multiplica las diagonales para obtener $I_n$. Si algún $a_i=0$, el vector básico $e_i\ne0$ cumple $Ae_i=0$, lo que impide la invertibilidad.

---

### Ejercicio 22 · Inversa de un producto 🤖

#### Enunciado

Sean $A_1,\ldots,A_n$ matrices cuadradas invertibles del mismo orden. Expresa $(A_1A_2\cdots A_n)^{-1}$ mediante $A_1^{-1},\ldots,A_n^{-1}$.

> [!example]- Resolución
>
> El orden se invierte:
>
> $$
> (A_1A_2\cdots A_n)^{-1}=A_n^{-1}A_{n-1}^{-1}\cdots A_1^{-1}.
> $$
>
> Al multiplicar ambos lados, la pareja $A_nA_n^{-1}$ se cancela primero; después se cancelan las parejas restantes de derecha a izquierda. El producto en el orden contrario también da $I$.

> [!success]- Comprobación
>
> Para $n=2$, verifica $(A_1A_2)(A_2^{-1}A_1^{-1})=A_1IA_1^{-1}=I$. El mismo paso se repite por inducción.

---

### Ejercicio 23 · Conjugación de una inversa 🤖

#### Enunciado

Demuestra que, si $A\in M_n(\mathbb K)$ es invertible, entonces $\overline A$ también lo es y

$$
(\overline A)^{-1}=\overline{A^{-1}}.
$$

> [!example]- Resolución
>
> La conjugación se distribuye sobre las sumas y los productos. Por tanto, al conjugar las dos identidades que definen la inversa se obtiene
>
> $$
> \overline A\,\overline{A^{-1}}
> =\overline{AA^{-1}}=I_n,
> \qquad
> \overline{A^{-1}}\,\overline A
> =\overline{A^{-1}A}=I_n.
> $$
>
> La matriz $\overline{A^{-1}}$ es así la inversa de $\overline A$.

> [!success]- Comprobación
>
> Para cualesquiera matrices $A=(a_{ij})$ y $B=(b_{ij})$ de tamaños compatibles, la propiedad usada es
>
> $$
> \overline{\sum_k a_{ik}b_{kj}}
> =\sum_k\overline{a_{ik}}\,\overline{b_{kj}}.
> $$
>
> Para matrices reales, la afirmación se reduce a $A^{-1}=A^{-1}$.

---

### Ejercicio 24 · Inversa a partir de una identidad polinómica 🤖

#### Enunciado

Sea $A\in M_n(\mathbb K)$ tal que $A^3+A=5I_n$.

1. Justifica que $A$ es invertible y expresa $A^{-1}$ en función de $A$.
2. Justifica que $7A$ es invertible y expresa $(7A)^{-1}$ en función de $A$.

> [!example]- Resolución
>
> Se factoriza la identidad por ambos lados, pues $A$ conmuta con $A^2+I_n$:
>
> $$
> A(A^2+I_n)=(A^2+I_n)A=5I_n.
> $$
>
> En el cuerpo real o complejo del curso, $5\ne0$. Así,
>
> $$
> A^{-1}=\frac{A^2+I_n}{5},
> \qquad
> (7A)^{-1}=\frac{A^{-1}}7=\frac{A^2+I_n}{35}.
> $$

> [!success]- Comprobación
>
> Multiplica $A$ por la primera expresión y $7A$ por la segunda: ambas operaciones se reducen a $(A^3+A)/5=I_n$.

---

### Ejercicio 25 · Cancelación cuando una matriz es invertible 🤖

#### Enunciado

Sea $A\in M_n(\mathbb K)$ invertible. Demuestra:

1. Si $B\in M_{n\times m}(\mathbb K)$ y $AB=0_{n\times m}$, entonces $B=0_{n\times m}$.
2. Si $B\in M_{m\times n}(\mathbb K)$ y $BA=0_{m\times n}$, entonces $B=0_{m\times n}$.
3. Si $B,C\in M_{n\times m}(\mathbb K)$ y $AB=AC$, entonces $B=C$.
4. Si $B,C\in M_{m\times n}(\mathbb K)$ y $BA=CA$, entonces $B=C$.

> [!example]- Resolución
>
> En a), se multiplica **por la izquierda**:
>
> $$
> B=A^{-1}(AB)=A^{-1}0=0.
> $$
>
> En b), se multiplica **por la derecha**:
>
> $$
> B=(BA)A^{-1}=0A^{-1}=0.
> $$
>
> Para c), $A(B-C)=0$ y el caso a) da $B-C=0$. Para d), $(B-C)A=0$ y el caso b) da $B-C=0$.

> [!success]- Comprobación
>
> Comprueba los tamaños: $A^{-1}$ solo puede colocarse a la izquierda en a), c) y a la derecha en b), d). Sin inversa, la cancelación puede fallar: una matriz no nula $N$ con $N^2=0$ da un contraejemplo.

---

## Cálculo de inversas

### Ejercicio 26 · Once matrices concretas 📘

#### Enunciado

Para cada matriz, decide si es invertible y calcula su inversa cuando exista:

$$
A=\begin{pmatrix}1&2\\4&8\end{pmatrix},\qquad
B=\begin{pmatrix}1&1\\1&-2\end{pmatrix},\qquad
C=\begin{pmatrix}5&0&0\\0&-4&0\\0&0&7\end{pmatrix}.
$$

$$
D=\begin{pmatrix}0&0&5\\0&-4&0\\7&0&0\end{pmatrix},\qquad
E=\begin{pmatrix}1&0&4\\0&1&0\\0&0&1\end{pmatrix},\qquad
F=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}.
$$

$$
G=\begin{pmatrix}0&3&1\\-1&3&1\\0&1&1\end{pmatrix},\qquad
H=\begin{pmatrix}2&-1&4\\1&-1&2\\-1&0&-2\end{pmatrix}.
$$

$$
I=\begin{pmatrix}2&-1&4\\1&-1&2\\-1&0&-3\end{pmatrix},\qquad
J=\begin{pmatrix}3&1&0\\1&2&1\\2&-1&-1\end{pmatrix}.
$$

$$
K=\begin{pmatrix}
1&-1&1&2\\
2&-2&1&1\\
1&-1&0&1\\
-2&0&2&-2
\end{pmatrix}.
$$

> [!example]- Resolución de la ficha
>
> **No son invertibles:** $A$, $H$ y $J$. En $A$, la segunda fila es cuatro veces la primera; en $H$ y $J$, la eliminación deja una fila nula.
>
> **Inversas de $B$, $C$ y $D$:**
>
> $$
> B^{-1}=\begin{pmatrix}2/3&1/3\\1/3&-1/3\end{pmatrix},
> \qquad
> C^{-1}=\begin{pmatrix}1/5&0&0\\0&-1/4&0\\0&0&1/7\end{pmatrix}.
> $$
>
> $$
> D^{-1}=\begin{pmatrix}0&0&1/7\\0&-1/4&0\\1/5&0&0\end{pmatrix}.
> $$
>
> **Inversas de $E$, $F$ y $G$:**
>
> $$
> E^{-1}=\begin{pmatrix}1&0&-4\\0&1&0\\0&0&1\end{pmatrix},
> \qquad F^{-1}=F.
> $$
>
> $$
> G^{-1}=\begin{pmatrix}1&-1&0\\1/2&0&-1/2\\-1/2&0&3/2\end{pmatrix}.
> $$
>
> **Inversas de $I$ y $K$:**
>
> $$
> I^{-1}=\begin{pmatrix}3&-3&2\\1&-2&0\\-1&1&-1\end{pmatrix}.
> $$
>
> $$
> K^{-1}=\begin{pmatrix}
> 0&1&-2&-1/2\\
> 1/2&1/2&-5/2&-1/2\\
> 1/2&1/2&-3/2&0\\
> 1/2&-1/2&1/2&0
> \end{pmatrix}.
> $$
>
> Para reproducir los cálculos, se reduce por filas la matriz ampliada $[M\mid I]$. Cuando la mitad izquierda llega a $I$, la derecha es $M^{-1}$; si queda una fila nula a la izquierda, $M$ no es invertible. En $C$ se invierten las entradas diagonales, $D$ combina permutación y escala, $E$ deshace una suma de filas, y $F$ intercambia dos coordenadas.

---

### Ejercicio 27 · Matriz con parámetro 📘

#### Enunciado

Para cada $\alpha\in\mathbb R$, considera

$$
A_\alpha=
\begin{pmatrix}
1&\alpha&\alpha&\alpha\\
0&0&\alpha+3&\alpha+2\\
1&\alpha&\alpha&-1\\
-1&1-\alpha&1&7
\end{pmatrix}.
$$

Determina para qué valores de $\alpha$ es invertible $A_\alpha$ y calcula $A_0^{-1}$.

> [!example]- Resolución de la ficha
>
> La matriz es invertible exactamente cuando
>
> $$
> \alpha\in\mathbb R\setminus\{-3,-1\}.
> $$
>
> Para $\alpha=0$,
>
> $$
> A_0^{-1}=\begin{pmatrix}
> 1&0&0&0\\
> -16/3&-1/3&19/3&1\\
> -2/3&1/3&2/3&0\\
> 1&0&-1&0
> \end{pmatrix}.
> $$
>
> Los valores excluidos son los que hacen perder un pivote en la reducción. Se comprueba la inversa multiplicando $A_0A_0^{-1}=I_4$.

---

### Ejercicio 28 · Inversa compleja 📘

#### Enunciado

Calcula la inversa de

$$
A=\begin{pmatrix}1&0&i\\0&2i&-1\\2&-4&i\end{pmatrix},
\qquad i^2=-1.
$$

> [!example]- Resolución de la ficha
>
> $$
> A^{-1}=\begin{pmatrix}3&2i&-1\\1&i/2&-1/2\\2i&-2&-i\end{pmatrix}.
> $$
>
> El producto $AA^{-1}$ da $I_3$; al hacerlo a mano conviene usar $i^2=-1$ en cada entrada.

---

### Ejercicio 29 · Ecuación matricial 📘

#### Enunciado

Sean

$$
A=\begin{pmatrix}3&2&0\\0&0&1\\0&1&3\end{pmatrix},\qquad
B=\begin{pmatrix}1&2&0\\0&-2&1\\0&1&1\end{pmatrix},\qquad
C=\begin{pmatrix}1&0\\0&2\\-1&0\end{pmatrix}.
$$

Calcula $B^{-1}$ y resuelve $AX=2X+BC+C$ con $X\in M_{3\times2}(\mathbb R)$.

> [!example]- Resolución de la ficha
>
> $$
> B^{-1}=\begin{pmatrix}1&2/3&-2/3\\0&-1/3&1/3\\0&1/3&2/3\end{pmatrix}.
> $$
>
> La ecuación equivale a $(A-2I_3)X=(B+I_3)C$. Se resuelve por columnas y se obtiene
>
> $$
> X=\begin{pmatrix}
> 8/3&4/3\\
> -1/3&4/3\\
> -5/3&2/3
> \end{pmatrix}.
> $$
>
> Como control, sustituir esta $X$ en los dos miembros de la ecuación original produce la misma matriz $3\times2$.

---

## Rango e invertibilidad

### Ejercicio 30 · Multiplicación por una matriz invertible 🤖

#### Enunciado

Sea $A\in M_{m\times n}(\mathbb K)$ y sea $P\in M_m(\mathbb K)$ invertible. Demuestra que

$$
r(PA)=r(A).
$$

> [!example]- Resolución
>
> Cada columna de $PA$ es la imagen por $P$ de una columna de $A$. Como $P:\mathbb K^m\to\mathbb K^m$ es un isomorfismo, transforma biyectivamente el espacio columna de $A$ en el de $PA$ y conserva su dimensión. Esa dimensión es el rango.

> [!success]- Comprobación
>
> La desigualdad $r(XY)\le r(Y)$ da $r(PA)\le r(A)$. Como $A=P^{-1}(PA)$, también $r(A)\le r(PA)$. Ambas desigualdades obligan a la igualdad.

## 📚 Fuentes

### Material base

- [Ficha de enunciados ALGA 2026/27](../../ALGA-2026-27-Exerc-Aulas-Enunc_1-34.pdf), pp. 6–7.
- [Ficha de soluciones ALGA 2026/27](../../ALGA-2026-27-Exerc-Aulas-Solucoes.pdf), pp. 1–2, para los ejercicios 26–29.
