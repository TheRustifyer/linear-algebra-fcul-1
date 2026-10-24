---
title: Resumen - Síntesis de contenidos
aliases:
  - Síntesis ALGA FCUL 2026-2027
asignatura: Álgebra Linear e Geometria Analítica
institución: Faculdade de Ciências da Universidade de Lisboa
curso: 2026/2027
capa: curricular
tipo: resumen
nivel: universitario-introductorio
estado: completo
fsrs_goal: Clasifica sistemas por rango, resuelve y verifica sistemas AX=B con variables libres, conecta sus soluciones compatibles con el núcleo y determina cuándo una matriz cuadrada permite obtener una solución única mediante su inversa.
tags:
  - matematicas
  - algebra-lineal
  - alga
  - fcul
  - resumen
---

# ALGA · Resumen — Síntesis de contenidos

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

> [!important] Alcance
> Secuencia de las **aulas 1–10** de ALGA, FCUL, 2026/27: el aula 1 presenta el programa; las aulas 2–10 desarrollan vectores, matrices, eliminación, inversas y sistemas. El aula 10 cierra la unidad de matrices y sistemas. Aquí $K$ significa siempre $\mathbb R$ o $\mathbb C$. «Característica» es la denominación portuguesa del **rango** $r(A)$.

## Aula 1 · Mapa del curso

El programa anunciado tiene siete bloques, en este orden: **matrices y sistemas reales y complejos; determinantes; espacios vectoriales abstractos; transformaciones lineales; valores y vectores propios; espacios euclídeos; formas cuadráticas**. Las slides disponibles hasta el aula 10 desarrollan el primero. *(Aula 1, diap. 3; aulas 2–10.)*

## Aula 2 · Vectores coordenados y tipos de matrices

### Vectores de $K^n$

> [!definition] Vector coordenado
> Un vector de $K^n$ es una **tupla ordenada** $u=(x_1,\ldots,x_n)$, con cada $x_i\in K$. Su dimensión coordenada es $n$: cada posición tiene un significado propio.

- Convenciones del curso: $\mathbb N=\{1,2,\ldots\}$, $\mathbb N_0=\{0,1,\ldots\}$, $\mathbb R^1=\mathbb R$ y $\mathbb R^n\subseteq\mathbb C^n$.
- Igualdad: $(x_1,\ldots,x_n)=(y_1,\ldots,y_p)$ **si y solo si** $n=p$ y $x_i=y_i$ para todo $i$.
- En $\mathbb R^2$, la tupla se representa como flecha desde el origen; el orden de las componentes fija sus direcciones. *(Aula 2, diap. 3–4.)*

### Operaciones y reglas de los vectores

> [!definition] Suma y producto por escalar
> Para $u=(x_i),v=(y_i)\in K^n$ y $\lambda\in K$, se define $u+v=(x_i+y_i)$ y $\lambda u=(\lambda x_i)$. Se actúa **componente a componente**; la suma exige la misma longitud.

> [!definition] Vector nulo y opuesto
> El **nulo** de $K^n$ es $0=(0,\ldots,0)$; el **simétrico u opuesto** de $u$ es $-u=(-x_1,\ldots,-x_n)$. Satisfacen $u+0=u$ y $u+(-u)=0$.

- La suma es conmutativa y asociativa. Además, $(\alpha\beta)u=\alpha(\beta u)$, $\alpha(u+v)=\alpha u+\alpha v$, $(\alpha+\beta)u=\alpha u+\beta u$, $1u=u$ y $0_Ku=0_{K^n}$.
- Estas reglas hacen de $\mathbb R^n$ un espacio vectorial sobre $\mathbb R$ y de $\mathbb C^n$ uno sobre $\mathbb C$. En $\mathbb R^2$, sumar corresponde a la regla del paralelogramo.

> [!warning] Operación no definida
> Con estas definiciones, no se suma un escalar aislado a un vector ni se «multiplican dos vectores» sin definir antes qué producto se quiere usar. *(Aula 2, diap. 5–10.)*

### Matriz, tamaño e igualdad

> [!definition] Matriz $m\times n$
> Una matriz $A=(a_{ij})\in M_{m\times n}(K)$ es una tabla de $m$ **filas** y $n$ **columnas**, con $a_{ij}\in K$ en la fila $i$, columna $j$. $M_n(K)=M_{n\times n}(K)$.

> [!definition] Matrices fila, columna, cuadrada y nula
> Una **matriz fila** tiene tamaño $1\times n$; una **columna**, $m\times1$; una **cuadrada de orden $n$**, $n\times n$. La **matriz nula** $0_{m\times n}$ tiene todas sus entradas cero.

- $A=B$ exige **el mismo tamaño** e igualdad de todas las entradas correspondientes. *(Aula 2, diap. 13–17.)*

### Formas notables

> [!definition] Diagonal, escalar e identidad
> En una matriz cuadrada, la **diagonal principal** es $(a_{11},\ldots,a_{nn})$. Es **diagonal** si $a_{ij}=0$ para $i\ne j$; **escalar** si además todas las entradas diagonales valen $\lambda$, es decir, $A=\lambda I_n$; la **identidad** $I_n$ es el caso $\lambda=1$.

> [!definition] Triangulares
> Una matriz cuadrada es **triangular superior** si $a_{ij}=0$ cuando $i>j$ (ceros debajo de la diagonal), e **inferior** si $a_{ij}=0$ cuando $i<j$ (ceros encima).

- Una diagonal es simultáneamente triangular superior e inferior; las definiciones permiten ceros en la propia diagonal. *(Aula 2, diap. 18–22.)*

## Aula 3 · Operaciones con matrices

### Suma, opuesto y producto por escalar

> [!definition] Operaciones entrada a entrada
> Si $A=(a_{ij})$ y $B=(b_{ij})$ tienen el mismo tamaño, $(A+B)_{ij}=a_{ij}+b_{ij}$ y $(-A)_{ij}=-a_{ij}$. Para $\lambda\in K$, $(\lambda A)_{ij}=\lambda a_{ij}$; $A-B=A+(-B)$.

- La suma requiere tamaños iguales; es conmutativa y asociativa, tiene neutro $0_{m\times n}$ y opuesto $-A$.
- Rigen las distributividades $\lambda(A+B)=\lambda A+\lambda B$ y $(\alpha+\beta)A=\alpha A+\beta A$, junto con $(\alpha\beta)A=\alpha(\beta A)$, $0_KA=0_{m\times n}$ y $(-1)A=-A$.
- **Terminología del curso:** la «matriz simétrica de $A$» en el aula 3 es $-A$; no significa que $A$ sea *simétrica* en el sentido $A=A^T$. *(Aula 3, diap. 2–6; aula 4, diap. 7.)*

### Producto de matrices

> [!definition] Producto fila por columna
> Si $A\in M_{m\times n}(K)$ y $B\in M_{n\times p}(K)$, entonces $AB\in M_{m\times p}(K)$ y $(AB)_{ij}=\sum_{k=1}^{n}a_{ik}b_{kj}$. La entrada $(i,j)$ combina la fila $i$ de $A$ con la columna $j$ de $B$.

- Regla de tamaño: $(m\times n)(n\times p)\to m\times p$. Si no coinciden las dimensiones interiores, el producto no existe.
- $I_mA=A=AI_n$; $(AB)C=A(BC)$; $A(B+C)=AB+AC$, $(A+B)C=AC+BC$ y $\lambda(AB)=(\lambda A)B=A(\lambda B)$, con tamaños compatibles.
- Los ceros tienen tamaño: $0_{p\times m}A=0_{p\times n}$ y $A0_{n\times p}=0_{m\times p}$.

> [!warning] El orden importa
> $BA$ puede no estar definido; aun si lo está, puede tener otro tamaño o valer algo distinto de $AB$. En general, **$AB\ne BA$**. *(Aula 3, diap. 7–11.)*

### Potencias

> [!definition] Potencia de una matriz cuadrada
> Para $A\in M_n(K)$, $A^1=A$ y $A^p=A^{p-1}A$ si $p>1$: son $p$ factores $A$, y la asociatividad elimina la ambigüedad de los paréntesis.

- Sólo se define aquí para matrices cuadradas y exponentes $p\in\mathbb N$. Una matriz no nula puede satisfacer $A^2=0$; no se puede cancelar $A$ en productos arbitrarios. *(Aula 3, diap. 12–13.)*

## Aula 4 · Transposición, traza y forma de escada

### Transpuesta, conjugada y transconjugada

> [!definition] Tres operaciones distintas
> Para $A=(a_{ij})\in M_{m\times n}(K)$: la **transpuesta** $A^T\in M_{n\times m}(K)$ cumple $(A^T)_{ij}=a_{ji}$; la **conjugada** $\overline A\in M_{m\times n}(K)$ cumple $(\overline A)_{ij}=\overline{a_{ij}}$; la **transconjugada** $A^*=\overline A^{,T}$ cumple $(A^*)_{ij}=\overline{a_{ji}}$.

- Trasponer intercambia filas y columnas; conjugar cambia $a+bi$ por $a-bi$ sin cambiar posiciones. Si $A$ es real, $\overline A=A$ y $A^*=A^T$.
- $(A^T)^T=A$, $(A+B)^T=A^T+B^T$, $(\lambda A)^T=\lambda A^T$ y **$(AB)^T=B^TA^T$**.
- $\overline{\overline A}=A$, $\overline{A+B}=\overline A+\overline B$, $\overline{\lambda A}=\overline\lambda\,\overline A$, $\overline{AB}=\overline A\,\overline B$ y $\overline{A^T}=(\overline A)^T$. Por tanto, $(AB)^*=B^*A^*$.

> [!warning] Conjugación y escalar complejo
> En general, $\overline{\lambda A}\ne\lambda\overline A$: el escalar también se conjuga. *(Aula 4, diap. 2–5 y 9–10.)*

### Simetría y hermiticidad

> [!definition] Matriz simétrica y hermítica
> Una matriz cuadrada es **simétrica** si $A=A^T$, es decir, $a_{ij}=a_{ji}$. Es **hermítica** si $A=A^*$, es decir, $a_{ij}=\overline{a_{ji}}$.

- En una hermítica, las entradas diagonales son reales: $a_{ii}=\overline{a_{ii}}$. En matrices reales, *hermítica* equivale a *simétrica*.
- No confundir «$A$ es simétrica» ($A=A^T$) con «el simétrico de $A$» ($-A$). *(Aula 4, diap. 6–8.)*

### Traza

> [!definition] Traza
> Para $A\in M_n(K)$, $\operatorname{tr}(A)=\sum_{i=1}^n a_{ii}$: se suman **sólo** las entradas de la diagonal principal.

- $\operatorname{tr}(I_n)=n$; $\operatorname{tr}(A^T)=\operatorname{tr}(A)$; $\operatorname{tr}(A+B)=\operatorname{tr}(A)+\operatorname{tr}(B)$ y $\operatorname{tr}(\lambda A)=\lambda\operatorname{tr}(A)$.
- Si $A$ es $m\times n$ y $B$ es $n\times m$, ambos productos son cuadrados y $\operatorname{tr}(AB)=\operatorname{tr}(BA)$, aunque sus tamaños pueden ser distintos. *(Aula 4, diap. 11–12.)*

### Pivotes y formas escalonadas

> [!definition] Pivote de una fila
> El **pivote** de una fila no nula es su primera entrada no nula desde la izquierda; su lugar es la **posición-pivot**. Las filas nulas no tienen pivote.

> [!definition] Forma de escada / escalonada
> Una matriz está **escalonada** si las filas nulas quedan abajo y el pivote de cada fila no nula aparece **más a la derecha** que el de la fila anterior. Está en **forma de escada reduzida** si además cada pivote es $1$ y es el único elemento no nulo de su columna.

- En la escalonada, las entradas **debajo** de cada pivote son cero por la posición del pivote siguiente; en la reducida también lo son las de **encima**.
- Escalonar un sistema triangulariza sus dependencias y permite sustitución regresiva. En el ejemplo del aula 4 se llega a $x=9$, $y=2$, $z=-3$. *(Aula 4, diap. 13–17.)*

## Aula 5 · Transformações elementares

### Operaciones por filas y equivalencia

> [!definition] Tres transformaciones elementales
> Sobre filas $L_i$: **permuta** $L_i\leftrightarrow L_j$; **escala** $L_i\leftarrow\lambda L_i$ con $\lambda\ne0$; **suma** $L_i\leftarrow L_i+\lambda L_j$ con $j\ne i$.

- Todas son reversibles: repetir la permuta; escalar por $1/\lambda$; sumar $-\lambda L_j$. La exigencia $\lambda\ne0$ evita destruir información.

> [!definition] Equivalencia por filas
> Dos matrices del mismo tamaño son **equivalentes** si una se obtiene de la otra mediante un número finito de transformaciones elementales por filas. Al ser reversibles, puede recorrerse la secuencia en ambos sentidos. *(Aula 5, diap. 2–5.)*

### Matrices elementales y multiplicación izquierda

> [!definition] Matriz elemental
> Es una matriz obtenida de $I_m$ mediante **una** operación elemental: $P_{ij}$ permuta filas; $D_i(\lambda)$ escala la fila $i$ ($\lambda\ne0$); $E_{ij}(\lambda)$ suma $\lambda$ veces la fila $j$ a la $i$.

- Si la operación transforma $A\in M_{m\times n}(K)$ en $B$, su matriz elemental $E\in M_m(K)$ satisface **$B=EA$**: se multiplica por la izquierda.
- Si se aplican $E_1,\ldots,E_p$ en ese orden, $B=QA$ con $Q=E_p\cdots E_1$. Reducir simultáneamente $[A\mid I_m]$ a $[B\mid Q]$ registra la transformación total.
- Inversas de las tres operaciones: $P_{ij}^{-1}=P_{ij}$, $D_i(\lambda)^{-1}=D_i(1/\lambda)$, $E_{ij}(\lambda)^{-1}=E_{ij}(-\lambda)$. *(Aula 5, diap. 6–11; aula 6, diap. 14.)*

## Aula 6 · Característica, Gauss–Jordan e inversa

### Forma reducida única y rango

> [!important] Dos invariantes de la equivalencia
> Cada matriz es equivalente a **una única** forma escalonada reducida. Sus formas escalonadas pueden ser distintas, pero todas tienen el **mismo número de filas no nulas**.

> [!definition] Característica o rango
> $r(A)$ (también $c(A)$ en las slides) es el número de filas no nulas de cualquier forma escalonada equivalente a $A$; equivale al número de pivotes.

- Las operaciones elementales conservan $r(A)$; para una matriz $m\times n$, $0\le r(A)\le\min(m,n)$.
- **Gauss** reduce hasta forma escalonada, anulando entradas bajo los pivotes. **Gauss–Jordan** continúa hasta forma reducida, normalizando pivotes y anulando también encima. Hay diferentes secuencias válidas, pero la reducida final es única. *(Aula 6, diap. 2–10; aula 9, diap. 11.)*

### Invertibilidad

> [!definition] Matriz invertible e inversa
> Una matriz $A\in M_n(K)$ es **invertible** si existe $B\in M_n(K)$ tal que $AB=BA=I_n$. Ese $B$, necesariamente único, se denota $A^{-1}$.

- La unicidad se obtiene de $B=BI_n=B(AC)=(BA)C=C$ para dos supuestas inversas $B,C$.
- $I_n^{-1}=I_n$. Una matriz cuadrada con fila o columna nula no es invertible. Toda matriz elemental sí lo es, pues la operación de filas admite inversa. *(Aula 6, diap. 11–14.)*

## Aula 7 · Propiedades y cálculo de la inversa

### Álgebra de inversas

> [!important] Reglas de inversión
> Si $A,B\in M_n(K)$ son invertibles y $\alpha\in K\setminus\{0\}$, entonces $(A^{-1})^{-1}=A$, $(AB)^{-1}=B^{-1}A^{-1}$ y $(\alpha A)^{-1}=\alpha^{-1}A^{-1}$. También $(A^T)^{-1}=(A^{-1})^T$ y $(A^*)^{-1}=(A^{-1})^*$.

- El orden de los factores se invierte: $(AB)(B^{-1}A^{-1})=I_n$.
- En $BA=C$, si $B$ es invertible, **$A=B^{-1}C$**; multiplicar a la derecha por $B^{-1}$ no despeja $A$ en general. *(Aula 7, diap. 2–5.)*

### Test y método de Gauss–Jordan

> [!important] Criterios equivalentes para $A\in M_n(K)$
> $A$ es invertible $\Longleftrightarrow r(A)=n\Longleftrightarrow$ su forma reducida es $I_n\Longleftrightarrow A$ es producto de matrices elementales.

> [!definition] Cálculo de $A^{-1}$
> Se aplican **las mismas operaciones de filas a ambos bloques** de $[A\mid I_n]$. Si el izquierdo llega a $I_n$, el derecho es $A^{-1}$: $[A\mid I_n]\sim[I_n\mid A^{-1}]$. Si la reducida izquierda no es $I_n$, $A$ no es invertible.

- Razón: la secuencia equivale a multiplicar por una matriz invertible $Q$; el resultado es $[QA\mid Q]$. Si $QA=I_n$, entonces $Q=A^{-1}$.
- Comprobación rápida del cálculo: multiplicar $A$ por la candidata y obtener $I_n$. *(Aula 7, diap. 6–9.)*

## Aula 8 · Sistemas de equações lineares

### Ecuación, sistema y soluciones

> [!definition] Ecuación lineal y sistema
> Una **ecuación lineal** sobre $K$ es $a_1x_1+\cdots+a_nx_n=b$, con $a_j,b\in K$. Un **sistema** reúne finitamente $m$ de esas ecuaciones, con coeficientes $a_{ij}$ y términos $b_i$. Es **homogéneo** si todos los $b_i$ son cero.

- Un coeficiente ausente es **cero**; $x^2$ o $xz$ hacen no lineal una ecuación. Una ecuación lineal puede tener todos los $a_j=0$; entonces expresa $0=b$.
- En $\mathbb R^2$, una ecuación no degenerada representa una recta; en $\mathbb R^3$, un plano. Un sistema representa la intersección de esas rectas o planos.

> [!definition] Solución y sistemas equivalentes
> Una solución es una tupla $(s_1,\ldots,s_n)\in K^n$ que satisface **todas** las ecuaciones. El **conjunto solución** reúne todas esas tuplas; dos sistemas son equivalentes sobre $K$ si tienen exactamente el mismo conjunto solución.

- **Resolver** significa determinar el conjunto completo, no sólo hallar una solución. Un sistema homogéneo siempre admite la solución nula.
- El cuerpo importa: una misma parametrización con $\alpha\in\mathbb R$ y con $\alpha\in\mathbb C$ da conjuntos solución diferentes. Para coeficientes reales, el curso resuelve sobre $\mathbb R$ salvo indicación contraria. *(Aula 8, diap. 2–15.)*

### Forma matricial y matriz ampliada

> [!definition] $AX=B$ y $[A\mid B]$
> Para $m$ ecuaciones en $n$ incógnitas, $A=(a_{ij})\in M_{m\times n}(K)$ es la **matriz simple o de coeficientes**, $X=(x_j)\in M_{n\times1}(K)$ la columna de incógnitas y $B=(b_i)\in M_{m\times1}(K)$ la de términos independientes. El sistema es $AX=B$ y su **matriz ampliada** $[A\mid B]$ tiene tamaño $m\times(n+1)$.

- La entrada $i$ de $AX$ es $\sum_{j=1}^na_{ij}x_j$; por eso cada fila reproduce una ecuación. Una tupla $s$ es solución si y sólo si $As=B$.
- En operaciones por filas hay que transformar **toda** la fila de $[A\mid B]$, incluido el término independiente. La última columna no representa una incógnita. *(Aula 8, diap. 16–23.)*

### Gauss, Gauss–Jordan y variables libres

> [!definition] Eliminación aplicada a sistemas
> Se escalona $[A\mid B]$ mediante operaciones reversibles: **Gauss** termina en forma de escada y resuelve por sustitución regresiva; **Gauss–Jordan** continúa hasta forma reducida y permite leer directamente las ecuaciones para las variables pivote.

- Si cada columna de $A$ tiene pivote y el sistema es compatible, las variables quedan determinadas. En el ejemplo 1 del aula 8, la reducida es $[I_4\mid(-2,-16,8,-1)^T]$ y hay solución única.
- Una columna **sin pivote de $A$** corresponde a variable libre; se asigna un parámetro por cada una. En el ejemplo 2, las columnas pivote son $1,2,4$ y $x_3=a$, $x_5=b$; las soluciones son

$$
(x_1,x_2,x_3,x_4,x_5)=(-1,0,0,1,0)+a(5,-2,1,0,0)+b(-12,5,0,-3,1),\qquad a,b\in\mathbb R.
$$

- El vector fijo es una solución particular; los vectores multiplicados por parámetros describen los cambios que mantienen satisfechas las ecuaciones. *(Aula 8, diap. 24–31.)*

## Aula 9 · Discusión de sistemas mediante rango

### Clasificación y criterio de compatibilidad

> [!definition] Tipos de sistema
> **Impossível**: sin soluciones. **Possível determinado**: una solución. **Possível indeterminado**: más de una solución. «Possível» significa que existe al menos una.

> [!important] Criterio de rangos para $m$ ecuaciones y $n$ incógnitas
> Sea $A$ la matriz simple y $[A\mid B]$ la ampliada. Entonces $r(A)\le r([A\mid B])\le r(A)+1$ y:
> $$
> \begin{array}{c|c}
> r(A)<r([A\mid B]) & \text{imposible}\\
> r(A)=r([A\mid B])=n & \text{posible determinado}\\
> r(A)=r([A\mid B])<n & \text{posible indeterminado}
> \end{array}
> $$

- La desigualdad estricta detecta una fila $[0\ \cdots\ 0\mid b]$ con $b\ne0$: exige $0=b$, una contradicción. Una fila $[0\ \cdots\ 0\mid0]$ no añade condición.
- La igualdad de rangos significa **compatibilidad**. Si el rango común es $n$, hay pivote para cada incógnita; si es menor, quedan variables libres. *(Aula 9, diap. 2–7.)*

> [!example] Leer la última fila
> $[\,0\quad0\mid3\,]$ expresa $0=3$ y descarta toda solución; $[\,0\quad0\mid0\,]$ expresa $0=0$ y puede eliminarse. La diferencia está en la **columna ampliada**.

### Grado de indeterminación y solución general

> [!definition] Variables básicas, libres y grado
> Las columnas pivote de $A$ señalan las **variables dependientes o básicas**; las demás son **independientes o libres**. En un sistema compatible indeterminado, su número $p=n-r(A)$ es el **grau de indeterminação**.

- Su solución general tiene la forma $u+\alpha_1v_1+\cdots+\alpha_pv_p$, con $\alpha_i\in K$ independientes; $u$ es una solución particular. Para cualquier matriz $m\times n$, $r(A)\le m$ y $r(A)\le n$.

> [!definition] Discutir frente a resolver
> **Discutir** un sistema es clasificarlo por los rangos e indicar $p$ si procede; **resolver** exige hallar todas sus soluciones.

- El homogéneo es siempre posible porque $X=0$ satisface $AX=0$. *(Aula 9, diap. 7–11.)*

## Aula 10 · Homogéneo asociado, solución general e inversa

### La traslación de las soluciones

> [!definicion] Sistema homogéneo asociado
> Para $AX=B$, el sistema homogéneo asociado es $AX=0$, con la misma matriz de coeficientes. Siempre tiene la solución $X=0$, aunque $AX=B$ podría no tener ninguna.

Si $u$ es una solución particular de un sistema compatible, entonces $AX=B$ equivale a $X=u+v$ con $v\in\ker(A)$:

$$
\operatorname{Sol}(AX=B)=u+\operatorname{Sol}(AX=0)=u+\ker(A).
$$

En efecto, $A(u+v)=B+0=B$. A la inversa, para cualquier otra solución $x$, $A(x-u)=B-B=0$. Si $r(A)=r$, hay $n-r$ direcciones libres en un sistema compatible. Esta descripción de la solución completa coincide con la presentación de MIT y Hefferon.[^3][^4]

El ejemplo del aula usa
$$
A=\begin{pmatrix}1&-2&0&-1\\-3&4&-2&-1\\-1&0&-2&-3\end{pmatrix}.
$$
Para $AX=0$, la reducida da $x_1+2x_3+3x_4=0$ y $x_2+x_3+2x_4=0$, luego
$$
X=\alpha(-2,-1,1,0)+\beta(-3,-2,0,1).
$$
Para $B=(1,3,5)^T$, $u=(-7,-4,1,0)^T$ es particular y todas las soluciones son $u$ más esas dos direcciones. El rango es $2$, así que todo término independiente compatible comparte los mismos dos grados de libertad; si no es compatible, no hay solución. *(Aula 10, diap. 2–7.)*

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - solucion-general
---
> [!note] Pregunta
> ¿Cuándo puede escribirse el conjunto solución de $AX=B$ como $u+\ker(A)$?
===
> [!important] Respuesta
> Sólo cuando $AX=B$ es compatible y se fija una solución particular $u$. Entonces cada solución es $u+v$ con $v\in\ker(A)$.
```

### Sistemas cuadrados y vectores columna

Si $A\in M_n(K)$, el sistema es compatible determinado exactamente cuando $r(A)=n$, lo cual equivale a que $A$ sea invertible. Entonces

$$
AX=B\quad\Longrightarrow\quad X=A^{-1}B.
$$

Si $AB=I_n$, ambos factores son invertibles y $A^{-1}=B$. Para probar que $B$ es invertible, si fuese singular existiría un vector columna $w\in K^n$, $w\ne0$, con $Bw=0$; pero $w=(AB)w=A(Bw)=0$, contradicción. De ahí se sigue que, si $AB$ es invertible, también lo son $A$ y $B$: con $C=(AB)^{-1}$, $A(BC)=I_n$ y $(CA)B=I_n$. *(Aula 10, diap. 8–10.)*

El aula identifica $u=(a_1,\ldots,a_n)\in K^n$ con la columna de sus coordenadas. Por eso se escribe $Au$ bajo esa identificación y el conjunto solución puede expresarse como $\{u\in K^n:Au=B\}$; no se escribe $A(a_1,\ldots,a_n)$ como producto matricial. *(Aula 10, diap. 11.)*

> [!warning] Condición y error frecuente
> $AX=0$ siempre es compatible; esto no autoriza a afirmar que $AX=B$ también lo sea. La forma $u+\ker(A)$ requiere un particular $u$, y $A^{-1}B$ requiere una matriz cuadrada invertible.

## Práctica graduada

1. Explica por qué, si $Au=b$ y $Av=0$, el vector $u+v$ resuelve $Ax=b$, y prueba que la diferencia de dos soluciones pertenece a $\ker(A)$.
2. Resuelve $AX=B$ para $A=\begin{pmatrix}2&1\\1&1\end{pmatrix}$ y $B=(5,3)^T$ mediante la inversa; verifica el producto.

### Soluciones razonadas

1. $A(u+v)=Au+Av=b$. Si $x$ también resuelve $Ax=b$, entonces $A(x-u)=Ax-Au=b-b=0$; por eso $x=u+v$ con $v=x-u\in\ker(A)$.
2. $A^{-1}=\begin{pmatrix}1&-1\\-1&2\end{pmatrix}$, de modo que $X=A^{-1}B=(2,1)^T$. La comprobación es $A(2,1)^T=(5,3)^T$.

## 📚 Fuentes

### Material base

- FCUL, *Álgebra Linear e Geometria Analítica*, slides «impressão» del curso **2026/27**, aulas **1–10** (16/09–09/10/2026), **150 páginas**. Carpeta Seafile: `Física (Completo)/Carrera/1º/ULisboa/ALGA/01 - Matrizes e sistemas/`. Los rangos de diapositivas se indican junto a cada bloque. Archivos, en orden:
  1. `ALGA-2026-27-AulasTeo-slides-aula1-Apresentacao-impressao.pdf` (11 páginas).
  2. `ALGA-2026-27-AulasTeo-slides-aula2-VectMatrizes-impressao.pdf` (22).
  3. `ALGA-2026-27-AulasTeo-slides-aula3-Matrizes-impressao.pdf` (13).
  4. `ALGA-2026-27-AulasTeo-slides-aula4-FormaEscada-impressao.pdf` (17).
  5. `ALGA-2026-27-AulasTeo-slides-aula5-TransfElem-impressao.pdf` (11).
  6. `ALGA-2026-27-AulasTeo-slides-aula6-CaractMatrizesInv-impressao.pdf` (14).
  7. `ALGA-2026-27-AulasTeo-slides-Aula7-MatrizesInv-impressao.pdf` (9).
  8. `ALGA-2026-27-AulasTeo-slides-Aula8-Sistemas-impressao.pdf` (31).
  9. `ALGA-2026-27-AulasTeo-slides-Aula9-Sistemas-impressao.pdf` (11).
  10. `ALGA-2026-27-AulasTeo-slides-Aula10-Sistemas-impressao.pdf` (11).

[^3]: Gilbert Strang, [*Solving Ax = b: Row Reduced Form R*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/resources/solving-ax-b-row-reduced-form-r/), MIT OpenCourseWare. Solución completa como particular más núcleo.
[^4]: Jim Hefferon, [*Linear Algebra*, § I.3, “General = Particular + Homogeneous”](https://hefferon.net/linearalgebra/). Texto universitario de álgebra lineal con el teorema de solución general.

## 🧑‍🏫 Prompt para tutor conversacional

Examina una idea por vez de las aulas 2–10 de ALGA: operaciones y tamaños de matrices; transpuesta, conjugada, transconjugada y traza; pivotes, Gauss y Gauss–Jordan; rango, matrices elementales e inversa; forma $AX=B$, compatibilidad y variables libres. Pide primero una definición o una decisión justificada, espera mi intento y corrige símbolos, condiciones y orden de los factores. Después propón una matriz o sistema pequeño para aplicar el criterio, verificar el resultado y explicar su significado. No adelantes la respuesta.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
