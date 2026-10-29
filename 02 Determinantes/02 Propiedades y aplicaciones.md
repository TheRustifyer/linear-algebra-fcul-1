---
title: Propiedades y aplicaciones de determinantes
aliases:
  - Propiedades del determinante
  - Regla de Cramer y adjunta
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
  - Determinantes
tipo:
  - teoría
  - propiedad
  - procedimiento
nivel: universitario-introductorio
estado: borrador
capa: curricular
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/01 Definición y cálculo de determinantes|Definición y cálculo de determinantes]]"
  - "[[Matemáticas/Álgebra lineal/Determinantes|Determinantes]]"
relacionado:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa|Compatibilidad, rango e inversa]]"
  - "[[Matemáticas/Álgebra lineal/Matrices|Matrices]]"
fsrs_goal: Justificar por desarrollo de Laplace la aditividad y homogeneidad del determinante en una fila o columna fija, probar por inducción su compatibilidad con conjugación y deducir la anulación para filas o columnas proporcionales; usar transposición, triangularidad, escala y producto; decidir invertibilidad y analizar sistemas singulares; definir un sistema de Cramer, identificar A, B y sus columnas C_j, construir A_j(B), aplicar la fórmula bajo det(A)≠0 para hallar la solución o una coordenada aislada y comprobar por sustitución; construir la adjunta y obtener A^{-1} o una de sus entradas.
simbolos:
  - \det(A)
  - A^T
  - \overline{A}
  - B
  - C_j
  - A_j(B)
  - \widehat A_{ij}
  - \operatorname{adj}(A)
  - A^{-1}
tags:
  - matemáticas
  - álgebra-lineal
  - determinantes
  - regla-de-cramer
  - adjunta
  - curricular
---

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

# Propiedades y aplicaciones de determinantes

El [[Matemáticas/Álgebra lineal/Determinantes|determinante]] cambia de manera controlada cuando se modifican las filas o columnas de una matriz. La definición recursiva y el [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/01 Definición y cálculo de determinantes|desarrollo de Laplace]] permiten calcularlo mediante menores y cofactores; las propiedades relacionan el escalar $\det(A)$ con la invertibilidad, la solución de sistemas y la matriz adjunta.

Sea $\mathbb K=\mathbb R$ o $\mathbb C$.

## Linealidad por filas y columnas

La fórmula del determinante por permutaciones selecciona exactamente una entrada de cada fila y de cada columna. En lo que sigue, $A_{i\leftarrow L}$ denota la matriz que coincide con $A$ salvo que su fila $i$ se sustituye por $L$; $A_{j\leftarrow C}$ se define de modo análogo para la columna $j$. Usaremos las filas $L=(\ell_1,\ldots,\ell_n)$ y $K=(k_1,\ldots,k_n)$ en $\mathbb K^{1\times n}$ y las columnas $C=(c_1,\ldots,c_n)^T$ y $D=(d_1,\ldots,d_n)^T$ en $\mathbb K^{n\times1}$. Al sustituir una fila o columna por una suma, cada producto de la fórmula se distribuye en dos; al multiplicarla por un escalar, el mismo escalar aparece en todos los productos. De ahí se obtienen las cuatro propiedades siguientes. (Aula 14, pp. 11–14)[^a14]

### Aditividad respecto de una fila

> [!teorema] Linealidad en una fila
> Si la fila $i$ de una matriz cuadrada es $L+K$, entonces
> $$
> \det(A_{i\leftarrow L+K})=\det(A_{i\leftarrow L})+\det(A_{i\leftarrow K}).
> $$
> (Aula 14, diap. 12; TPC.)[^a14]

#### Demostración paso a paso

**1. Caso $n=1$.** La matriz es $[u]$ y la definición da $\det([u])=u$. Para las filas escalares $[\ell_1]$ y $[k_1]$,

$$
\det([\ell_1+k_1])=\ell_1+k_1=\det([\ell_1])+\det([k_1]).
$$

**2. Caso $n\ge2$.** Fijemos todas las filas salvo la fila $i$. Las filas $L=(\ell_1,\ldots,\ell_n)$ y $K=(k_1,\ldots,k_n)$ tienen longitud $n$, así que la fila reemplazada $L+K$ tiene entrada $\ell_j+k_j$ en la columna $j$.

Al borrar la fila $i$ y la columna $j$, desaparece la fila reemplazada. La submatriz resultante es $A(i|j)$ en las tres variantes. Denotemos su cofactor común por

$$
q_j=(-1)^{i+j}\det\bigl(A(i|j)\bigr).
$$

**Desarrollar por la fila modificada.** Laplace expresa el determinante como la suma de cada entrada de esa fila multiplicada por su cofactor común:

$$
\det(A_{i\leftarrow L+K})=\sum_{j=1}^{n}(\ell_j+k_j)q_j.
$$

**Distribuir cada producto.** Para cada $j$, la distributividad escalar da

$$
\sum_{j=1}^{n}(\ell_j+k_j)q_j
=\sum_{j=1}^{n}(\ell_jq_j+k_jq_j).
$$

**Reagrupar y reconocer los desarrollos.** La asociatividad y conmutatividad de la suma finita permiten reunir primero los términos con $\ell_j$ y luego los que contienen $k_j$:

$$
\sum_{j=1}^{n}(\ell_jq_j+k_jq_j)
=\sum_{j=1}^{n}\ell_jq_j+\sum_{j=1}^{n}k_jq_j.
$$

Cada suma es el desarrollo de Laplace por la fila $i$ en la matriz con esa fila reemplazada. Por tanto,

$$
\det(A_{i\leftarrow L+K})=\det(A_{i\leftarrow L})+\det(A_{i\leftarrow K}).
$$

### Aditividad respecto de una columna

> [!teorema] Linealidad en una columna
> Si la columna $j$ de una matriz cuadrada es $C+D$, entonces
> $$
> \det(A_{j\leftarrow C+D})=\det(A_{j\leftarrow C})+\det(A_{j\leftarrow D}).
> $$
> (Aula 14, diap. 13; TPC.)[^a14]

#### Demostración paso a paso

**1. Caso $n=1$.** La matriz es $[u]$ y $\det([u])=u$. Para las columnas escalares $[c_1]$ y $[d_1]$,

$$
\det([c_1+d_1])=c_1+d_1=\det([c_1])+\det([d_1]).
$$

**2. Caso $n\ge2$.** Fijemos todas las columnas salvo la columna $j$. Las columnas $C=(c_1,\ldots,c_n)^T$ y $D=(d_1,\ldots,d_n)^T$ tienen longitud $n$; la entrada de $C+D$ en la fila $i$ es $c_i+d_i$.

Al borrar la columna $j$ y la fila $i$, desaparece la columna reemplazada. La submatriz resultante es $A(i|j)$ en las tres variantes. Llamemos $r_i$ al cofactor común correspondiente a la fila $i$:

$$
r_i=(-1)^{i+j}\det\bigl(A(i|j)\bigr).
$$

**Desarrollar por la columna modificada.** El desarrollo de Laplace multiplica cada entrada de esa columna por el cofactor común:

$$
\det(A_{j\leftarrow C+D})=\sum_{i=1}^{n}(c_i+d_i)r_i.
$$

**Distribuir cada producto.** La distributividad escalar da

$$
\sum_{i=1}^{n}(c_i+d_i)r_i
=\sum_{i=1}^{n}(c_ir_i+d_ir_i).
$$

**Reagrupar y reconocer los desarrollos.** La asociatividad y conmutatividad de la suma finita permiten reunir por separado los términos con $c_i$ y con $d_i$:

$$
\sum_{i=1}^{n}(c_ir_i+d_ir_i)
=\sum_{i=1}^{n}c_ir_i+\sum_{i=1}^{n}d_ir_i.
$$

Estas dos sumas son los desarrollos de Laplace por la columna $j$ de las matrices correspondientes. Así,

$$
\det(A_{j\leftarrow C+D})=\det(A_{j\leftarrow C})+\det(A_{j\leftarrow D}).
$$

### Homogeneidad respecto de una fila

> [!teorema] Homogeneidad en una fila
> Para $\lambda\in\mathbb K$, si la fila $i$ es $\lambda L$, entonces
> $$
> \det(A_{i\leftarrow\lambda L})=\lambda\det(A_{i\leftarrow L}).
> $$
> (Aula 14, diap. 14; TPC.)[^a14]

#### Demostración paso a paso

**1. Caso $n=1$.** La matriz es $[u]$, y $\det([u])=u$. Para cualquier $\lambda\in\mathbb K$,

$$
\det([\lambda\ell_1])=\lambda\ell_1=\lambda\det([\ell_1]).
$$

**2. Caso $n\ge2$.** Fijemos las demás filas y desarrollemos por la fila $i$. Al borrar esa fila y la columna $j$, se elimina la parte que cambiaba; la submatriz resultante es $A(i|j)$ para $L$ y para $\lambda L$. Denotemos el cofactor común por

$$
q_j=(-1)^{i+j}\det\bigl(A(i|j)\bigr).
$$

La entrada de $\lambda L$ en la columna $j$ es $\lambda\ell_j$. El desarrollo por la fila $i$ da

$$
\det(A_{i\leftarrow\lambda L})=\sum_{j=1}^{n}\lambda\ell_jq_j.
$$

La distributividad permite extraer el factor común $\lambda$ de la suma finita, sin dividir por él; por eso el paso también vale para $\lambda=0$. Reconocemos entonces el desarrollo de $A_{i\leftarrow L}$:

$$
\sum_{j=1}^{n}\lambda\ell_jq_j
=\lambda\sum_{j=1}^{n}\ell_jq_j
=\lambda\det(A_{i\leftarrow L}).
$$

### Homogeneidad respecto de una columna

> [!teorema] Homogeneidad en una columna
> Para $\lambda\in\mathbb K$, si la columna $j$ es $\lambda C$, entonces
> $$
> \det(A_{j\leftarrow\lambda C})=\lambda\det(A_{j\leftarrow C}).
> $$
> (Aula 14, diap. 14; TPC.)[^a14]

#### Demostración paso a paso

**1. Caso $n=1$.** La matriz es $[u]$, y $\det([u])=u$. Para cualquier $\lambda\in\mathbb K$,

$$
\det([\lambda c_1])=\lambda c_1=\lambda\det([c_1]).
$$

**2. Caso $n\ge2$.** Fijemos las demás columnas y desarrollemos por la columna $j$. Al borrar esa columna y la fila $i$, se elimina la parte que cambiaba; la submatriz resultante es $A(i|j)$ para $C$ y para $\lambda C$. Denotemos el cofactor común por

$$
r_i=(-1)^{i+j}\det\bigl(A(i|j)\bigr).
$$

La entrada de $\lambda C$ en la fila $i$ es $\lambda c_i$. Laplace por la columna $j$ da

$$
\det(A_{j\leftarrow\lambda C})=\sum_{i=1}^{n}\lambda c_ir_i.
$$

La distributividad permite extraer el factor común $\lambda$ de la suma finita sin dividir por él; el paso también vale para $\lambda=0$. Reconocemos el desarrollo de $A_{j\leftarrow C}$:

$$
\sum_{i=1}^{n}\lambda c_ir_i
=\lambda\sum_{i=1}^{n}c_ir_i
=\lambda\det(A_{j\leftarrow C}).
$$

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - linealidad
---
> [!note] Pregunta
> ¿Qué reglas de linealidad satisface el determinante respecto de cada fila y de cada columna?
===
> [!important] Respuesta
> Es aditivo y homogéneo por separado en cada fila y en cada columna: sustituir una fila o columna por una suma separa el determinante en dos; multiplicarla por $\lambda$ multiplica el determinante por $\lambda$.
```

## Efecto de las operaciones elementales

Sea $A\in M_n(\mathbb K)$. Las reglas de aditividad y homogeneidad por filas y columnas permiten calcular los efectos de escalar o reemplazar filas y columnas. Falta justificar el cambio de signo al intercambiar dos filas o columnas; lo haremos por inducción y desarrollo de Laplace, conservando el intercambio dentro de cada menor. (Aula 15, pp. 2–5)[^a15]

### Intercambio de dos filas o columnas

Si se intercambian dos filas (o dos columnas), el determinante cambia de signo:

$$
\det(\ldots,R_i,\ldots,R_j,\ldots)=-\det(\ldots,R_j,\ldots,R_i,\ldots),
$$

con la misma regla para columnas. Así, un número par de intercambios conserva el signo y uno impar lo invierte.

#### Demostración por inducción

**Caso $n=2$.** Partimos de

$$
A=\begin{pmatrix}a&b\\c&d\end{pmatrix},\qquad \det(A)=ad-bc.
$$

Al intercambiar las filas queda

$$
A'=\begin{pmatrix}c&d\\a&b\end{pmatrix},\qquad \det(A')=cb-da.
$$

La conmutatividad de la multiplicación de escalares permite escribir $cb=bc$ y $da=ad$; por tanto,

$$
\det(A')=bc-ad=-(ad-bc)=-\det(A).
$$

Al intercambiar las columnas se obtiene

$$
A''=\begin{pmatrix}b&a\\d&c\end{pmatrix},\qquad \det(A'')=bc-ad=-\det(A).
$$

**Estrategia del paso inductivo.** Para las filas, desarrollaremos por una fila $t$ que no se intercambia; para las columnas, por una columna $s$ que no se intercambia. Así, las entradas y los signos de la expansión quedan iguales. Al borrar la fila o columna elegida, el menor todavía contiene las dos filas o columnas originales intercambiadas; la hipótesis inductiva se aplica a ese menor de orden $n-1$.

**Paso inductivo para filas.** Sea $n\ge3$ y supongamos probada la regla para intercambios de filas y columnas en orden $n-1$. Intercambiemos las filas distintas $i,j$ de $A$. Elijamos una fila $t$ distinta de ambas; existe porque $n\ge3$. Si $A'$ es la matriz con esas filas intercambiadas, los desarrollos por la fila $t$ son

$$
\det(A)=\sum_{k=1}^n(-1)^{t+k}a_{tk}\det(A(t|k)),
$$

$$
\det(A')=\sum_{k=1}^n(-1)^{t+k}a_{tk}\det(A'(t|k)).
$$

Las entradas de la fila $t$ y los signos son iguales. Al borrar esa fila y la columna $k$, los índices locales de las filas pueden cambiar, pero las filas originales $i$ y $j$ siguen presentes en el menor; sus posiciones locales cambian del mismo modo en los dos menores y permanecen intercambiadas. Por la hipótesis inductiva, los determinantes de $A(t|k)$ y $A'(t|k)$ son opuestos. Así, cada sumando de la segunda expansión es el opuesto del correspondiente sumando de la primera, y el determinante completo cambia de signo.

**Paso inductivo para columnas.** Para intercambiar las columnas $i,j$, elijamos una columna $s$ distinta de ambas y llamemos $A'$ a la matriz intercambiada. Los desarrollos por la columna $s$ son

$$
\det(A)=\sum_{k=1}^n(-1)^{k+s}a_{ks}\det(A(k|s)),
$$

$$
\det(A')=\sum_{k=1}^n(-1)^{k+s}a_{ks}\det(A'(k|s)).
$$

Las entradas de esa columna y los signos coinciden. Al borrar la columna $s$ y la fila $k$, los índices locales pueden cambiar, pero las columnas originales $i$ y $j$ siguen presentes en el menor y permanecen intercambiadas. Por la hipótesis inductiva, sus determinantes son opuestos, así que también lo son las dos sumas. El caso base y los dos pasos prueban ambas reglas para todo $n\ge2$.

### Multiplicación de una fila o columna por un escalar

Si una fila o columna se multiplica por $\lambda$, el determinante también se multiplica por $\lambda$. En particular, multiplicarla por cero produce determinante cero; si $\lambda\ne0$, el determinante original es $1/\lambda$ veces el nuevo. Esta regla se aplica a una fila o columna cada vez.

### Suma de un múltiplo de otra fila o columna

Reemplazar $R_i$ por $R_i+\lambda R_j$, con $i\ne j$, no cambia el determinante. Por aditividad y homogeneidad en la fila $i$,

$$
\det(\ldots,R_i+\lambda R_j,\ldots)
=\det(\ldots,R_i,\ldots)+\lambda\det(\ldots,R_j,\ldots).
$$

El segundo determinante tiene dos filas iguales y vale cero, como se prueba en el resultado siguiente. La misma demostración se aplica a columnas. (Aula 15, pp. 2–5, 9)[^a15]

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - operaciones-elementales
---
> [!note] Pregunta
> ¿Cómo cambia el determinante al intercambiar, escalar o sumar a una fila o columna un múltiplo de otra?
===
> [!important] Respuesta
> Intercambiar dos filas o columnas cambia el signo; multiplicar una por $\lambda$ multiplica el determinante por $\lambda$; sumar a una fila o columna un múltiplo de otra distinta no lo cambia.
```

### Determinante con dos filas iguales

> [!teorema] Dos filas iguales
> Si una matriz cuadrada tiene dos filas iguales, su determinante es cero.

#### Demostración paso a paso

**1. Intercambiar las dos filas.** Sea $d=\det(A)$. Como las filas son iguales, intercambiarlas no cambia la matriz; la matriz resultante sigue siendo $A$. Pero el intercambio de dos filas cambia el signo del determinante, de modo que

$$
d=-d.
$$

**2. Concluir que el determinante es cero.** Sumando $d$ a ambos lados obtenemos

$$
2d=0.
$$

Como trabajamos sobre $\mathbb R$ o $\mathbb C$, el escalar $2$ tiene inverso. Multiplicamos ambos lados por $1/2$:

$$
d=\frac12(2d)=\frac12\cdot0=0.
$$

Así, el determinante se anula. (Aula 15, diap. 2, propiedad 1; caso incluido en el corolario de diap. 9.)[^a15]

### Determinante con dos columnas iguales

> [!teorema] Dos columnas iguales
> Si una matriz cuadrada tiene dos columnas iguales, su determinante es cero.

#### Demostración paso a paso

**1. Intercambiar las columnas iguales.** El intercambio deja fija la matriz. Si $d$ es su determinante, la regla de intercambio de columnas también da

$$
d=-d.
$$

**2. Despejar $d$.** Sumando $d$ a los dos lados,

$$
2d=0.
$$

Multiplicamos por $1/2$, que existe en $\mathbb R$ y en $\mathbb C$:

$$
d=\frac12(2d)=\frac12\cdot0=0.
$$

Así, el determinante se anula. (Aula 15, diap. 2, propiedad 1; caso incluido en el corolario de diap. 9.)[^a15]

### Filas proporcionales

> [!consecuencia] Una fila múltiplo de otra
> Si $R_i=\lambda R_j$ para filas distintas $i,j$ y algún $\lambda\in\mathbb K$, entonces el determinante es cero. (Aula 15, diap. 9.)[^a15]

#### Demostración paso a paso

**1. Reemplazar la fila por la fila proporcional sin dividir por $\lambda$.** Sea $B$ la matriz que coincide con $A$ salvo que su fila $i$ se reemplaza por $R_j$. Entonces $A$ se obtiene de $B$ multiplicando esa fila por $\lambda$. La homogeneidad, válida también para $\lambda=0$, da

$$
\det(A)=\lambda\det(B).
$$

**2. Anular el determinante restante.** En $B$, las filas $i$ y $j$ son iguales; por el resultado anterior, $\det(B)=0$. Así,

$$
\det(A)=\lambda\cdot0=0.
$$

El razonamiento incluye $\lambda=0$ (fila nula) y $\lambda=1$ (filas iguales), sin dividir por el factor de proporcionalidad.

### Columnas proporcionales

> [!consecuencia] Una columna múltiplo de otra
> Si $C_i=\lambda C_j$ para columnas distintas $i,j$ y algún $\lambda\in\mathbb K$, entonces el determinante es cero. (Aula 15, diap. 9.)[^a15]

#### Demostración paso a paso

**1. Reemplazar la columna por la otra sin dividir por $\lambda$.** Sea $B$ la matriz que coincide con $A$ salvo que su columna $i$ se reemplaza por $C_j$. La matriz $A$ se obtiene de $B$ multiplicando esa columna por $\lambda$. Por homogeneidad en una columna,

$$
\det(A)=\lambda\det(B).
$$

**2. Usar las columnas iguales de $B$.** Las columnas $i$ y $j$ de $B$ son iguales, así que el resultado anterior da $\det(B)=0$. Por consiguiente,

$$
\det(A)=\lambda\cdot0=0.
$$

Esto incluye $\lambda=0$ y $\lambda=1$; no se divide por $\lambda$.

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - filas-proporcionales
---
> [!note] Pregunta
> ¿Qué ocurre con el determinante si dos filas o columnas son proporcionales? ¿Y si son iguales?
===
> [!important] Respuesta
> Es cero. Si una fila o columna es múltiplo de otra, la homogeneidad la reduce al caso de dos filas o columnas iguales, cuyo determinante se anula; la igualdad es el caso de múltiplo $1$.
```

## Transpuesta, conjugación, triangularidad y escala

### Determinante de la transpuesta

> [!teorema] Invariancia por transposición
> Para toda matriz cuadrada $A$, se cumple $\det(A^T)=\det(A)$.

**Demostración por inducción.** Sea $P(n)$ la afirmación para matrices de orden $n$.

**1. Base $n=1$.** Una matriz $A=[a_{11}]$ coincide con su transpuesta, así que

$$
\det(A^T)=a_{11}=\det(A).
$$

**2. Hipótesis inductiva.** Fijemos $n\ge2$ y supongamos que la igualdad vale para toda matriz de orden $n-1$. Tomemos $A=[a_{ij}]\in M_n(\mathbb K)$.

**3. Expandir $\det(A)$ por la primera fila.**

$$
\det(A)=\sum_{j=1}^n a_{1j}(-1)^{1+j}\det(A(1|j)).
$$

**4. Expandir $\det(A^T)$ por la primera columna.** La entrada de $A^T$ en la posición $(j,1)$ es $a_{1j}$:

$$
\det(A^T)=\sum_{j=1}^n a_{1j}(-1)^{j+1}\det(A^T(j|1)).
$$

Los signos coinciden porque $j+1=1+j$. Además, al borrar la primera fila de $A$ y la columna $j$ queda la misma submatriz que al borrar la fila $j$ y la primera columna de $A^T$, pero transpuesta:

$$
A^T(j|1)=A(1|j)^T.
$$

Ambas submatrices tienen orden $n-1$, así que la hipótesis inductiva dice que sus determinantes son iguales. Por ello, los sumandos de los dos desarrollos coinciden término a término y $\det(A^T)=\det(A)$. La base y el paso prueban el resultado para todo $n\ge1$. (Aula 14, pp. 7–9)[^a14]

### Determinante de la conjugada compleja

> [!teorema] Compatibilidad con conjugación compleja
> Si $A\in M_n(\mathbb C)$, entonces
> $$
> \det(\overline A)=\overline{\det(A)}.
> $$
> (Aula 14, diap. 10; TPC.)[^a14]

#### Demostración paso a paso

Sea $P(n)$ la afirmación de que, para toda matriz compleja cuadrada de orden $n$, el determinante de la matriz conjugada es el conjugado del determinante. La probamos por inducción usando la definición recursiva por la primera fila.

**1. Caso base $n=1$.** Si $A=[a_{11}]$, entonces $\det(A)=a_{11}$ y $\det(\overline A)=\overline{a_{11}}$. Por ello,

$$
\det(\overline A)=\overline{\det(A)},
$$

de modo que $P(1)$ se cumple.

**2. Hipótesis de inducción.** Fijemos $n\ge2$ y supongamos que la propiedad vale para toda matriz compleja cuadrada de orden $n-1$.

**3. Expandir por la primera fila y aplicar la hipótesis a los menores.** Para $A=[a_{ij}]\in M_n(\mathbb C)$, la definición recursiva aplicada a $\overline A$ da

$$
\det(\overline A)=\sum_{j=1}^{n}\overline{a_{1j}}(-1)^{1+j}
\det\bigl(\overline A(1|j)\bigr).
$$

Al suprimir la primera fila y la columna $j$, las entradas que quedan son exactamente las conjugadas de las entradas de $A(1|j)$; por tanto, $\overline A(1|j)=\overline{A(1|j)}$. Cada menor tiene orden $n-1$, así que la hipótesis inductiva permite sustituir

$$
\det\bigl(\overline A(1|j)\bigr)
=\overline{\det\bigl(A(1|j)\bigr)}.
$$

**4. Reconocer el conjugado de la expansión de $\det(A)$.** Sustituimos esta igualdad. Como $(-1)^{1+j}$ es real, conjugar un producto lo conjuga factor a factor; la conjugación también distribuye sobre la suma finita:

$$
\begin{aligned}
\det(\overline A)
&=\sum_{j=1}^{n}\overline{a_{1j}}(-1)^{1+j}\overline{\det\bigl(A(1|j)\bigr)}\\
&=\overline{\sum_{j=1}^{n}a_{1j}(-1)^{1+j}\det\bigl(A(1|j)\bigr)}\\
&=\overline{\det(A)}.
\end{aligned}
$$

La última igualdad es la definición recursiva del determinante de $A$. Queda probado $P(n)$; por inducción, la propiedad vale para todo $n\ge1$. (Aula 14, diap. 10; TPC.)[^a14]

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - transpuesta
---
> [!note] Pregunta
> ¿Qué relación cumplen el determinante y la transpuesta? Si $A$ es compleja, ¿qué relación cumple con la conjugada?
===
> [!important] Respuesta
> $\det(A^T)=\det(A)$; si $A\in M_n(\mathbb C)$, $\det(\overline A)=\overline{\det(A)}$.
```

### Determinante de una matriz triangular

> [!teorema] Producto de la diagonal
> Si $A$ es triangular superior o inferior, entonces
> $$
> \det(A)=a_{11}a_{22}\cdots a_{nn}.
> $$
> En particular, $\det(I_n)=1$.

**Demostración por inducción.** Para $n=1$, $A=[a_{11}]$ y la definición da $\det(A)=a_{11}$, el producto de su diagonal. Supongamos el resultado para orden $n-1$ y tomemos $A$ triangular de orden $n$.

Si $A$ es superior, en la primera columna solo puede ser no nula la entrada $a_{11}$. El desarrollo por esa columna deja el menor superior que se obtiene al borrar la primera fila y la primera columna:

$$
\det(A)=a_{11}\det(A(1|1)).
$$

La hipótesis inductiva convierte el determinante del menor en el producto de $a_{22},\ldots,a_{nn}$.

Si $A$ es inferior, en la última columna solo puede ser no nula $a_{nn}$. Al desarrollar por esa columna, el signo del cofactor es $(-1)^{n+n}=1$, y el menor resultante sigue siendo inferior:

$$
\det(A)=a_{nn}\det(A(n|n)).
$$

La hipótesis inductiva da el producto de $a_{11},\ldots,a_{n-1,n-1}$. En ambos casos resulta el producto de toda la diagonal. Para $I_n$, cada factor diagonal vale $1$, por lo que $\det(I_n)=1$. (Aula 14, pp. 5–6)[^a14]

### Escalar una matriz completa

> [!consecuencia] Escala global
> Para $A\in M_n(\mathbb K)$ y $\lambda\in\mathbb K$,
> $$
> \det(\lambda A)=\lambda^n\det(A).
> $$

**Demostración.** Escalar toda la matriz por $\lambda$ equivale a multiplicar por $\lambda$ cada una de sus $n$ filas. La homogeneidad para una fila permite extraer un factor en el primer paso, otro en el segundo, y así sucesivamente:

Denotemos por $A^{(r)}$ la matriz cuyas primeras $r$ filas son las de $A$ y cuyas restantes $n-r$ filas son las de $\lambda A$. Entonces $A^{(0)}=\lambda A$ y $A^{(n)}=A$.

$$
\det(\lambda A)=\lambda\det(A^{(1)})
=\lambda^2\det(A^{(2)})
=\cdots
=\lambda^n\det(A),
$$

porque en cada paso se extrae $\lambda$ de la siguiente fila escalada. La regla de homogeneidad admite $\lambda=0$, así que el resultado vale para todo escalar. (Aula 15, p. 8)[^a15]

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - triangular
---
> [!note] Pregunta
> ¿Cuál es el determinante de una matriz triangular y de $\lambda A$ cuando $A$ es de orden $n$?
===
> [!important] Respuesta
> El determinante triangular es el producto de la diagonal y $\det(I_n)=1$. Para una matriz completa escalada, $\det(\lambda A)=\lambda^n\det(A)$, pues se escala cada una de sus $n$ filas.
```

## Producto de matrices

> [!teorema] Determinante de un producto
> Para $A,B\in M_n(\mathbb K)$,
> $$
> \det(AB)=\det(A)\det(B).
> $$

**Demostración por reducción por filas.** Fijamos una secuencia de operaciones por filas que lleva $A$ a forma escalonada; cuando $A$ es invertible, podemos continuarla hasta $I_n$. Aplicaremos exactamente la misma secuencia a $AB$. Cada intercambio contribuye un factor $-1$ al determinante, cada escalado permitido por un factor $\lambda\ne0$ contribuye $\lambda$, y cada reemplazo contribuye $1$. Sea $c$ el producto de esos factores para la secuencia fijada; si la secuencia es vacía, $c=1$. Por tanto, $c\ne0$. La matriz que representa la secuencia es

$$
Q=E_s\cdots E_1.
$$

Para cualquier matriz cuadrada $M$ de orden $n$, aplicar esa secuencia equivale a multiplicar por $Q$ a la izquierda, y

$$
\det(QM)=c\det(M).
$$

**1. Caso en que $A$ es invertible.** La reducción puede llevar $A$ hasta $I_n$, de modo que $QA=I_n$. Aplicando la misma secuencia a $AB$ y usando la asociatividad del producto matricial,

$$
Q(AB)=(QA)B=I_nB=B.
$$

La regla del factor $c$ aplicada a $A$ y a $AB$ da

$$
c\det(A)=\det(I_n)=1,
$$

$$
\det(B)=\det(Q(AB))=c\det(AB).
$$

Como $c\ne0$, la primera igualdad da $\det(A)=1/c$ y la segunda da $\det(AB)=\det(B)/c$. Por tanto,

$$
\det(AB)=\frac{\det(B)}{c}=\det(A)\det(B).
$$

**2. Caso en que $A$ no es invertible.** Por el [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa#Relación entre invertibilidad, rango y solución única|criterio de pivotes]], una matriz cuadrada no invertible tiene menos de $n$ pivotes; en forma escalonada eso significa que alguna de sus $n$ filas es nula. La misma secuencia fija transforma $A$ en $QA$, que conserva esa fila nula. Al multiplicar por $B$, la fila sigue siendo nula, así que $Q(AB)=(QA)B$ también tiene una fila nula. Por ello, ambos determinantes reducidos son cero:

$$
\det(QA)=c\det(A)=0,\qquad \det(Q(AB))=c\det(AB)=0.
$$

Puesto que $c\ne0$, se obtiene $\det(A)=0$ y $\det(AB)=0$; ambos miembros de la identidad buscada valen entonces cero. Los dos casos prueban la fórmula. (Aula 15, p. 18)[^a15]

El determinante no es lineal respecto de la suma de matrices. Por ejemplo,

$$
\det(I_2+I_2)=\det(2I_2)=2^2\det(I_2)=4,
\qquad
\det(I_2)+\det(I_2)=1+1=2.
$$

Por tanto, $\det(A+B)$ no es en general $\det(A)+\det(B)$. (Aula 15, p. 18)[^a15]

### Determinante de la inversa

Si $A$ es invertible, multiplicatividad y $\det(I_n)=1$ implican

$$
1=\det(AA^{-1})=\det(A)\det(A^{-1}).
$$
Como el producto vale $1$, necesariamente $\det(A)\ne0$; al dividir la igualdad por $\det(A)$ se obtiene
$$
\det(A^{-1})=\frac1{\det(A)}.
$$
(Aula 15, p. 19)[^a15]

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - producto
---
> [!note] Pregunta
> ¿Cómo se calcula $\det(AB)$ y qué relación cumple $\det(A^{-1})$ si $A$ es invertible?
===
> [!important] Respuesta
> $\det(AB)=\det(A)\det(B)$. Si $A$ es invertible, $\det(A^{-1})=1/\det(A)$.
```

## Invertibilidad y determinante

> [!teorema] Criterio de invertibilidad
> Una matriz cuadrada $A\in M_n(\mathbb K)$ es invertible si y sólo si $\det(A)\ne0$.

Las operaciones elementales por filas llevan $A$ a forma escalonada. Un intercambio cambia el signo del determinante; escalar una fila por $\lambda\ne0$ lo multiplica por un factor no nulo; reemplazar una fila por ella más un múltiplo de otra no lo cambia.

**Si $A$ es invertible**, Gauss–Jordan la reduce a $I_n$. Como cada operación previa cambia el determinante solo por un factor no nulo, el determinante inicial también es no nulo, pues $\det(I_n)=1$.

**Si $\det(A)\ne0$**, la forma escalonada no puede tener una fila nula: tal fila haría nulo el determinante reducido y, por los factores no nulos de las operaciones, también el de $A$. Al ser una matriz cuadrada de orden $n$ con $n$ filas no nulas, hay $n$ pivotes. Sus columnas avanzan estrictamente y solo hay $n$ columnas, de modo que cada columna contiene un pivote. Gauss–Jordan puede entonces reducir $A$ a $I_n$, así que $A$ es invertible. (Aula 15, pp. 10–11)[^a15]

Para $A\in M_n(\mathbb K)$, son equivalentes: $A$ es invertible; $A$ es producto de matrices elementales; $\operatorname{rg}(A)=n$; $\det(A)\ne0$; y para todo $\mathbf b\in\mathbb K^n$, el sistema $A\mathbf x=\mathbf b$ tiene solución única. Por tanto, si $\det(A)=0$, ningún término independiente produce una solución única: para un $\mathbf b$ concreto, el sistema es incompatible si $\mathbf b$ no pertenece al espacio columna de $A$ y tiene varias soluciones si sí pertenece. (Aula 15, pp. 10–11)[^a15]

La implicación de invertibilidad a determinante no nulo también se obtiene por multiplicatividad: si $A$ es invertible, $\det(A)\det(A^{-1})=\det(I_n)=1$, luego $\det(A)\ne0$. Esta caracterización enlaza con [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa|rango e inversa]].

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - invertibilidad
---
> [!note] Pregunta
> ¿Cuál es el criterio determinantal de invertibilidad y qué se puede concluir si $\det(A)=0$ para el sistema $A\mathbf x=\mathbf b$?
===
> [!important] Respuesta
> $A$ es invertible si y sólo si $\det(A)\ne0$. Si $\det(A)=0$, $A$ no es invertible; un sistema concreto puede ser incompatible o compatible indeterminado, pero no tiene solución única.
```

## Regla de Cramer

### Sistema de Cramer

> [!definicion] Sistema de Cramer
> Un [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales|sistema de ecuaciones lineales]] es de Cramer si el número de ecuaciones coincide con el número de incógnitas y es compatible determinado, es decir, tiene una única solución. (Aula 16, p. 2)[^a16]


Para estos sistemas, la [[Matemáticas/Álgebra lineal/Determinantes|regla de Cramer]] expresa cada coordenada mediante determinantes. Si las columnas de la matriz de coeficientes son $C_1,\ldots,C_n\in\mathbb K^{n\times1}$, entonces $A=[C_1\ C_2\ \cdots\ C_n]\in M_n(\mathbb K)$. Denotamos por $B=\mathbf b\in\mathbb K^{n\times1}$ la columna de términos independientes, de modo que el sistema se escribe $A\mathbf x=B$. Por el criterio de invertibilidad, un sistema cuadrado tiene solución única si y solo si $\det(A)\ne0$: si es invertible, $\mathbf x=A^{-1}B$ existe y es única; si el determinante no es cero, la matriz es invertible y se obtiene esa misma solución única. (Aula 16, p. 2)[^a16]

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - regla-de-cramer
---
> [!note] Pregunta
> ¿Qué condiciones definen un sistema de Cramer?
===
> [!important] Respuesta
> Es un sistema cuadrado —igual número de ecuaciones e incógnitas— y compatible determinado: tiene una única solución.
```

### Regla de Cramer

Para una columna $V\in\mathbb K^{n\times1}$, $A_j(V)$ denota la matriz obtenida al sustituir por $V$ la columna $j$ de $A$. En particular, $A_j(B)$ sustituye esa columna por los términos independientes, mientras que $A_j(C_k)$ la sustituye por la columna original $C_k$. Esta segunda forma abrevia los determinantes que aparecen al desarrollar la prueba.

> [!teorema] Regla de Cramer
> Si $A\in M_n(\mathbb K)$ y $\det(A)\ne0$, la única solución de $A\mathbf x=B$ cumple
> $$
> x_j=\frac{\det(A_j(B))}{\det(A)},\qquad j=1,\ldots,n.
> $$
> (Aula 16, p. 3)[^a16]

La fórmula permite calcular una coordenada elegida sin conocer las demás: se construye solo la matriz $A_j(B)$ correspondiente a esa incógnita. (Aula 16, p. 3)[^a16]

**Demostración.** La hipótesis $\det(A)\ne0$ hace invertible a $A$, así que el criterio anterior garantiza que $A\mathbf x=B$ tiene una solución única. Tomemos esa solución y fijemos una coordenada $j$. La igualdad del sistema expresa la columna de términos independientes como combinación de las columnas de $A$:

$$
B=x_1C_1+\cdots+x_nC_n.
$$

La linealidad del determinante respecto de la columna $j$ permite distribuir la suma dentro de $\det(A_j(B))$:

$$
\det(A_j(B))=\sum_{k=1}^{n}x_k\det(A_j(C_k)).
$$

Si $k\ne j$, la matriz $A_j(C_k)$ contiene $C_k$ tanto en la posición $j$ como en la posición $k$. Tiene dos columnas iguales y, por la propiedad ya probada, su determinante es cero. Solo sobrevive el término $k=j$: en ese caso, $A_j(C_j)=A$, porque la columna sustituida vuelve a ser la columna original. Por tanto,

$$
\det(A_j(B))=x_j\det(A).
$$

La hipótesis $\det(A)\ne0$ autoriza dividir por ese escalar y da la fórmula de Cramer. La prueba usa la linealidad por columnas y la anulación cuando se repiten columnas (Aula 14, pp. 13–14; Aula 15, p. 9)[^a14][^a15].

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - regla-de-cramer
---
> [!note] Pregunta
> ¿Cuándo se puede aplicar la regla de Cramer y qué matriz se usa para hallar $x_j$?
===
> [!important] Respuesta
> Si $A$ es cuadrada y $\det(A)\ne0$, entonces $x_j=\det(A_j(B))/\det(A)$; $A_j(B)$ sustituye la columna $j$ de $A$ por la columna de términos independientes $B$.
```

### Ejemplo trabajado

#### Sistema de tres incógnitas

Resuelve mediante la regla de Cramer el sistema
$$
\begin{cases}
2x+z=-2,\\
x+y-z=0,\\
-2x-y-3z=1,
\end{cases}
$$
y comprueba la solución por sustitución. Su matriz de coeficientes y la columna de términos independientes son
$$
A=\begin{pmatrix}2&0&1\\1&1&-1\\-2&-1&-3\end{pmatrix},\qquad
B=\begin{pmatrix}-2\\0\\1\end{pmatrix}.
$$
Por Sarrus, $\det(A)=-6-1+0+2-2-0=-7\ne0$, de modo que el sistema tiene una única solución y se puede aplicar Cramer. Sustituyendo cada columna por $B$:
$$
\det(A_1(B))=\begin{vmatrix}-2&0&1\\0&1&-1\\1&-1&-3\end{vmatrix}=6+0+0-1+2-0=7.
$$
Por tanto, $x=\dfrac{7}{-7}=-1$.
$$
\det(A_2(B))=\begin{vmatrix}2&-2&1\\1&0&-1\\-2&1&-3\end{vmatrix}=0-4+1-0+2-6=-7.
$$
Por tanto, $y=\dfrac{-7}{-7}=1$.
$$
\det(A_3(B))=\begin{vmatrix}2&0&-2\\1&1&0\\-2&-1&1\end{vmatrix}=2+0+2-4-0-0=0.
$$
Por tanto, $z=\dfrac{0}{-7}=0$ y la solución es $(x,y,z)=(-1,1,0)$. Al sustituir, $2(-1)+0=-2$, $-1+1-0=0$ y $-2(-1)-1-3(0)=1$. (Aula 16, pp. 4–5)[^a16]

## Matriz adjunta e inversa

### Adjunta clásica

Para $A\in M_n(\mathbb K)$ con $n\ge2$, el cofactor en la posición $(i,j)$ es $\widehat A_{ij}=(-1)^{i+j}\det(A(i|j))$, donde $A(i|j)$ se obtiene borrando la fila $i$ y la columna $j$; también se escribe $C_{ij}$. La matriz de cofactores es $\widehat A=[\widehat A_{ij}]$. Para $n=1$, si $A=[a]$, adoptamos explícitamente el convenio $\widehat A=[1]$; es una definición directa que evita introducir determinantes de orden cero. La adjunta clásica no es la conjugada transpuesta $A^*=\overline A^{\,T}$: la primera se construye con cofactores y transposición, la segunda conjuga las entradas y luego transpone.

> [!definicion] Adjunta clásica
> $$
> \operatorname{adj}(A)=\widehat A^{\,T}.
> $$
> [^a15]

### Identidad de la adjunta

> [!teorema] Identidad de la adjunta
> Para toda matriz cuadrada $A$,
> $$
> A\operatorname{adj}(A)=\operatorname{adj}(A)A=\det(A)I_n.
> $$

**Demostración.** Primero tratamos el caso de orden uno. Si $A=[a]$, entonces $\operatorname{adj}(A)=[1]$ y $\det(A)=a$, de modo que

$$
A\operatorname{adj}(A)=\operatorname{adj}(A)A=[a]=\det(A)I_1.
$$

Supongamos ahora $n\ge2$, de modo que los cofactores se definen mediante menores de orden $n-1$.

**1. Calcular las entradas de $A\operatorname{adj}(A)$.** La entrada $(k,j)$ de $\operatorname{adj}(A)=\widehat A^{\,T}$ es $\widehat A_{jk}$; por la regla del producto, la entrada $(i,j)$ es

$$
(A\operatorname{adj}(A))_{ij}=\sum_{k=1}^{n}a_{ik}\widehat A_{jk}.
$$

Si $i=j$, la suma es exactamente el desarrollo de $\det(A)$ por la fila $i$. Por tanto, las entradas diagonales valen $\det(A)$.

Si $i\ne j$, formemos $M$ a partir de $A$ reemplazando la fila $j$ por la fila $i$. Las filas $i$ y $j$ de $M$ son iguales, así que $\det(M)=0$. Al borrar la fila reemplazada $j$ y la columna $k$, queda la misma submatriz que al borrar la fila $j$ y la columna $k$ de $A$; por eso el cofactor de $M$ en $(j,k)$ es $\widehat A_{jk}$. La fila $j$ de $M$ contiene $a_{i1},\ldots,a_{in}$, de modo que su desarrollo de Laplace es

$$
0=\det(M)=\sum_{k=1}^{n}a_{ik}\widehat A_{jk}=(A\operatorname{adj}(A))_{ij}.
$$

Así, las entradas fuera de la diagonal son cero y $A\operatorname{adj}(A)=\det(A)I_n$.

**2. Calcular las entradas de $\operatorname{adj}(A)A$.** La entrada $(i,j)$ de este producto es

$$
(\operatorname{adj}(A)A)_{ij}=\sum_{k=1}^{n}\widehat A_{ki}a_{kj}.
$$

Si $i=j$, esta suma es el desarrollo de Laplace por la columna $i$, así que vale $\det(A)$.

Si $i\ne j$, formemos $N$ reemplazando en $A$ la columna $i$ por la columna $j$. Las columnas $i$ y $j$ de $N$ son iguales, por lo que $\det(N)=0$. Al borrar la columna reemplazada $i$ y la fila $k$, queda la misma submatriz que al borrar la fila $k$ y la columna $i$ de $A$; sus cofactores coinciden. La columna $i$ de $N$ tiene entradas $a_{1j},\ldots,a_{nj}$; su desarrollo da

$$
0=\det(N)=\sum_{k=1}^{n}\widehat A_{ki}a_{kj}=(\operatorname{adj}(A)A)_{ij}.
$$

Por tanto, $\operatorname{adj}(A)A=\det(A)I_n$. Las dos igualdades quedan probadas para todo orden. (Aula 15, pp. 12–14)[^a15]

### Inversa mediante cofactores

Supongamos $\det(A)\ne0$; por ello existe el escalar $1/\det(A)$. Definimos la matriz

$$
C=\frac{1}{\det(A)}\operatorname{adj}(A).
$$

Para comprobar que $C$ es inversa por la derecha, sacamos el escalar del producto matricial:

$$
AC=\frac{1}{\det(A)}\bigl(A\operatorname{adj}(A)\bigr).
$$

La identidad de la adjunta da $A\operatorname{adj}(A)=\det(A)I_n$. Al sustituirla y simplificar el escalar no nulo,

$$
AC=\frac{1}{\det(A)}\bigl(\det(A)I_n\bigr)=I_n.
$$

Para el otro orden, se usa por separado $\operatorname{adj}(A)A=\det(A)I_n$:

$$
CA=\frac{1}{\det(A)}\bigl(\operatorname{adj}(A)A\bigr)
=\frac{1}{\det(A)}\bigl(\det(A)I_n\bigr)=I_n.
$$

Así, $C$ es inversa bilateral y, por definición, $C=A^{-1}$. Por tanto,

$$
A^{-1}=\frac{1}{\det(A)}\operatorname{adj}(A)
=\frac{1}{\det(A)}\widehat A^{\,T}.
$$

En particular, cada entrada se obtiene directamente como

$$
(A^{-1})_{ij}=\frac{\widehat A_{ji}}{\det(A)}.
$$

La transposición de la matriz de cofactores es esencial: la entrada $(i,j)$ de la inversa usa el cofactor $(j,i)$. La fórmula proporciona incluso una entrada aislada sin calcular toda la inversa. (Aula 15, pp. 15–17)[^a15]

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - adjunta
---
> [!note] Pregunta
> ¿Cómo se construye $\operatorname{adj}(A)$ y qué cofactor determina la entrada $(i,j)$ de $A^{-1}$?
===
> [!important] Respuesta
> $\operatorname{adj}(A)=\widehat A^{\,T}$, la transpuesta de la matriz de cofactores. Si $\det(A)\ne0$, $(A^{-1})_{ij}=\widehat A_{ji}/\det(A)$.
```

### Aplicación conjunta de Cramer y la adjunta

#### Ejemplo trabajado: Cramer y adjunta de orden dos

Sea

$$
A=\begin{pmatrix}2&1\\5&3\end{pmatrix},\qquad
\mathbf b=\begin{pmatrix}1\\2\end{pmatrix}.
$$

Su determinante es $\det(A)=6-5=1$, así que $A$ es invertible. Cramer da

$$
x_1=\frac{\begin{vmatrix}1&1\\2&3\end{vmatrix}}{1}=1,
\qquad
x_2=\frac{\begin{vmatrix}2&1\\5&2\end{vmatrix}}{1}=-1.
$$

Los cofactores son $\widehat A=\begin{pmatrix}3&-5\\-1&2\end{pmatrix}$, de modo que

$$
A^{-1}=\operatorname{adj}(A)=\widehat A^T=
\begin{pmatrix}3&-1\\-5&2\end{pmatrix}.
$$

Se comprueba $A(1,-1)^T=(1,2)^T$ y $AA^{-1}=I_2$. El ejemplo verifica las aplicaciones con un determinante no nulo, que es la condición común a Cramer y a la fórmula adjunta. (Ejemplo de elaboración propia.)

## Práctica graduada

Los ejercicios 1, 3, 4, 5 y 7 son de elaboración propia; el ejercicio 2 reproduce el cálculo por reducción de Aula 15 y el ejercicio 6 adapta el ejemplo de entrada aislada de la inversa de Aula 15.

### Ejercicios

#### Ejercicio 1 — transpuesta y conjugación

Para la matriz compleja

$$
A=\begin{pmatrix}1+i&2\\ i&1-i\end{pmatrix},
$$
calcula $\det(A)$, $\det(A^T)$ y $\det(\overline A)$ y comprueba las dos relaciones anteriores.

> [!resolucion]- Resolución
> $$
> \det(A)=(1+i)(1-i)-2i=2-2i.
> $$
> Directamente,
> $$
> \det(A^T)=(1+i)(1-i)-2i=2-2i=\det(A).
> $$
> Además,
> $$
> \det(\overline A)=(1-i)(1+i)-2(-i)=2+2i=\overline{\det(A)}.
> $$
> Se verifican tanto la invariancia por transposición como la compatibilidad con conjugación.

#### Ejercicio 2 — calcular por operaciones elementales

Calcula el determinante de

$$
A=\begin{pmatrix}3&1&9\\-2&0&6\\1&1&-3\end{pmatrix}
$$
reduciendo a una matriz triangular y contabilizando los cambios de signo.

> [!resolucion]- Resolución
> Intercambiamos $L_1$ y $L_3$, lo que cambia el signo. Después sumamos múltiplos de filas para anular las entradas debajo del primer pivote:
> $$
> \det(A)=-\det\begin{pmatrix}1&1&-3\\0&2&0\\0&-2&18\end{pmatrix}
> =-\det\begin{pmatrix}1&1&-3\\0&2&0\\0&0&18\end{pmatrix}.
> $$
> La última operación, $L_3\leftarrow L_3+L_2$, conserva el determinante. La matriz final es triangular, así que
> $$
> \det(A)=-(1\cdot2\cdot18)=-36.
> $$
> Sólo se hizo un intercambio, por eso se conserva un signo negativo. (Aula 15, p. 7)[^a15]

#### Ejercicio 3 — escalar una matriz

Sea

$$
B=\begin{pmatrix}1&0&0\\2&1&0\\-1&4&2\end{pmatrix}.
$$
Calcula $\det(B)$ y $\det(3B)$ de dos maneras: usando triangularidad y usando la fórmula de escala global.

> [!resolucion]- Resolución
> $B$ es triangular inferior y $\det(B)=1\cdot1\cdot2=2$. Como el orden es tres,
> $$
> \det(3B)=3^3\det(B)=27\cdot2=54.
> $$
> Directamente, $3B$ sigue siendo triangular y sus entradas diagonales son $3,3,6$, cuyo producto también es $54$. El factor es $3^3$, no $3$, porque cada una de las tres filas queda escalada.

#### Ejercicio 4 — resolver un sistema con Cramer

Indica si el sistema es de Cramer, resuélvelo mediante esa regla y comprueba la solución:

$$
\begin{cases}
3x+2y=7,\\
x-y=1.
\end{cases}
$$

> [!resolucion]- Resolución
> Hay dos ecuaciones y dos incógnitas; además, la matriz de coeficientes tiene determinante $\Delta=3(-1)-2(1)=-5\ne0$. Por tanto, el sistema es de Cramer y la regla se aplica. Sustituyendo cada columna por los términos independientes:
> $$
> \Delta_x=\begin{vmatrix}7&2\\1&-1\end{vmatrix}=-9,
> \qquad
> \Delta_y=\begin{vmatrix}3&7\\1&1\end{vmatrix}=-4.
> $$
> Así, $x=\Delta_x/\Delta=9/5$ e $y=\Delta_y/\Delta=4/5$. En efecto, $3(9/5)+2(4/5)=7$ y $9/5-4/5=1$.

#### Ejercicio 5 — distinguir incompatibilidad y compatibilidad indeterminada

Considera la matriz singular

$$
A=\begin{pmatrix}1&2\\2&4\end{pmatrix}
$$

y compara los sistemas $A\mathbf x=(3,6)^T$ y $A\mathbf x=(3,5)^T$.

> [!resolucion]- Resolución
> El determinante es $1\cdot4-2\cdot2=0$, así que $A$ no puede producir solución única para ningún término independiente. En el primer sistema, la segunda ecuación es el doble de la primera: $x+2y=3$, por lo que hay varias soluciones, por ejemplo $x=3-2t$, $y=t$. En el segundo, duplicar la primera ecuación daría $2x+4y=6$, en contradicción con $2x+4y=5$; es incompatible. La diferencia depende de si el término independiente pertenece al espacio columna de $A$. (Aula 15, pp. 10–11)[^a15]

#### Ejercicio 6 — obtener una entrada de la inversa

Sea

$$
A=\begin{pmatrix}
2&-1&0&3\\
1&-1&-3&4\\
1&0&2&1\\
-5&2&0&1
\end{pmatrix},\qquad \det(A)=12.
$$
Calcula $(A^{-1})_{23}$ sin calcular toda la inversa.

> [!resolucion]- Resolución
> La entrada requiere el cofactor transpuesto, $\widehat A_{32}$:
> $$
> (A^{-1})_{23}=\frac{\widehat A_{32}}{12}
> =\frac{(-1)^{3+2}}{12}\det\begin{pmatrix}2&0&3\\1&-3&4\\-5&0&1\end{pmatrix}.
> $$
> Por Sarrus, el determinante menor es $-6+0+0-(45+0+0)=-51$. Por ello, $\widehat A_{32}=(-1)(-51)=51$ y
> $$
> (A^{-1})_{23}=\frac{51}{12}=\frac{17}{4}.
> $$
> La posición $(2,3)$ de la inversa usa el cofactor de la posición transpuesta $(3,2)$. (Aula 15, p. 17; el determinante de orden cuatro se había calculado en Aula 14, p. 4)[^a15][^a14]

#### Ejercicio 7 — calcular una coordenada aislada

Sea
$$
A=\begin{pmatrix}2&0&1\\1&1&-1\\-2&-1&-3\end{pmatrix},\qquad
B_s=\begin{pmatrix}-2\\0\\s\end{pmatrix},\qquad s\in\mathbb R.
$$
Esta variación conserva la matriz del sistema resuelto arriba y cambia el tercer término independiente. Calcula únicamente $z(s)$, sin determinar $x$ ni $y$, y comprueba el caso $s=1$. (Variación propia basada en Aula 16, pp. 3–5)[^a16]

> [!resolucion]- Resolución
> Como $\det(A)=-7\ne0$, el sistema es de Cramer para todo $s\in\mathbb R$. Para hallar solo $z$, sustituimos la tercera columna de $A$ por $B_s$:
> $$
> A_3(B_s)=\begin{pmatrix}2&0&-2\\1&1&0\\-2&-1&s\end{pmatrix},\qquad \det(A_3(B_s))=2s+0+2-4-0-0=2s-2.
> $$
> La regla de Cramer da $z(s)=\dfrac{2s-2}{-7}=\dfrac{2-2s}{7}$. Para $s=1$, $z(1)=0$, como en el sistema del ejemplo.


## Condiciones de validez y elección del método

Cramer y la fórmula adjunta para $A^{-1}$ requieren que $A$ sea cuadrada e invertible, esto es, $\det(A)\ne0$. Si el determinante es cero, no se pueden usar para obtener una solución única; el sistema puede ser incompatible o compatible indeterminado. Antes de usar operaciones por filas para calcular un determinante, contabiliza los intercambios y los escalados: sumar múltiplos de otras filas conserva el valor, intercambiar cambia el signo y escalar una fila multiplica el resultado.


El [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/01 Definición y cálculo de determinantes|desarrollo de Laplace]] convierte la definición del determinante en un cálculo mediante menores y cofactores. Las propiedades de las operaciones explican cuándo cambia su valor y cuándo su nulidad impide una solución única; Cramer permite obtener coordenadas de la solución y la adjunta construye la matriz inversa. Queda una pregunta distinta: ¿qué relación tiene el determinante con la geometría? La [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/03 Interpretación geométrica del determinante|interpretación geométrica del determinante]] desarrolla esa conexión.

## 📚 Fuentes

### Material base aportado

- FCUL, *Álgebra Linear e Geometria Analítica*, Aula 14, 19/10/2026, pp. 2–16 ([PDF consultado](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/02%20-%20Determinantes/ALGA-2026-27-AulasTeo-slides-Aula14-Determinantes-impressao.pdf)).
- FCUL, *Álgebra Linear e Geometria Analítica*, Aula 15, 21/10/2026, pp. 2–19 ([PDF consultado](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/02%20-%20Determinantes/ALGA-2026-27-AulasTeo-slides-Aula15-Determinantes-impressao.pdf)).
- FCUL, *Álgebra Linear e Geometria Analítica*, Aula 16, 23/10/2026, pp. 2–5 ([PDF consultado](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/02%20-%20Determinantes/ALGA-2026-27-AulasTeo-slides-Aula16-SistemasCramer-impressao.pdf)). La p. 6 solo remite a los ejercicios 58.b y 58.d (este último, parcialmente), sin sus enunciados; la colección local de problemas consultada llega al 34, por lo que no se reconstruyen.

[^a14]: FCUL, *Álgebra Linear e Geometria Analítica*, Aula 14, 19/10/2026. [PDF consultado](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/02%20-%20Determinantes/ALGA-2026-27-AulasTeo-slides-Aula14-Determinantes-impressao.pdf).

[^a15]: FCUL, *Álgebra Linear e Geometria Analítica*, Aula 15, 21/10/2026. [PDF consultado](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/02%20-%20Determinantes/ALGA-2026-27-AulasTeo-slides-Aula15-Determinantes-impressao.pdf). La diapositiva 12 presenta la definición de la adjunta mediante cofactores y menores; el convenio explícito para orden uno ($\widehat A=[1]$) se establece en esta nota y no se atribuye a la diapositiva.

[^a16]: FCUL, *Álgebra Linear e Geometria Analítica*, Aula 16, 23/10/2026. [PDF consultado](../../../../../../Física%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/02%20-%20Determinantes/ALGA-2026-27-AulasTeo-slides-Aula16-SistemasCramer-impressao.pdf).

### Lecturas académicas opcionales

- MIT OpenCourseWare, [*Properties of Determinants*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/5dd3f8ec0a398fd74264fef3fd591f81_MIT18_06SCF11_Ses2.5sum.pdf). Resumen de clase complementario sobre propiedades de los determinantes.
- MIT OpenCourseWare, [*Cramer's Rule, Inverse Matrix and Volume*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/least-squares-determinants-and-eigenvalues/cramers-rule-inverse-matrix-and-volume/). Sesión complementaria con vídeo, resumen y ejercicios sobre cofactores, la inversa y la regla de Cramer.


## 🧑‍🏫 Prompt para tutor conversacional

Trabaja el tema al nivel de primer curso universitario y presupón el manejo de matrices, determinantes por cofactores, rango y sistemas lineales. Evalúa también la linealidad por filas y columnas, el efecto de las operaciones, la transposición y conjugación, las matrices triangulares, la escala, el producto y el criterio de invertibilidad. Comprueba que el estudiante puede enunciar que un sistema de Cramer es cuadrado y compatible determinado; representar $A=[C_1\ \cdots\ C_n]$, $B=\mathbf b$ y $A\mathbf x=B$; y construir $A_j(B)$ sustituyendo por $B$ la columna $j$. La regla es
$$
x_j=\frac{\det(A_j(B))}{\det(A)},\qquad A\in M_n(\mathbb K),\quad B\in\mathbb K^{n\times1},\quad \det(A)\ne0.
$$
Relaciona el caso $\det(A)=0$ con sistemas incompatibles o compatibles indeterminados, y vincula Cramer con la invertibilidad y la fórmula de la adjunta. Aplica recuperación activa, repetición espaciada y práctica guiada: formula una pregunta cada vez, espera la respuesta, distingue el tipo de error, corrige con precisión y adapta la dificultad. No reveles la solución antes de que el estudiante lo intente. Para comprobar el procedimiento, usa el sistema concreto
$$
\begin{cases}
2x+z=-2,\\
x+y-z=0,\\
-2x-y-3z=1,
\end{cases}
\qquad A=\begin{pmatrix}2&0&1\\1&1&-1\\-2&-1&-3\end{pmatrix},\quad B=\begin{pmatrix}-2\\0\\1\end{pmatrix}.
$$
El resultado es $\det(A)=-7$, $\det(A_1(B))=7$, $\det(A_2(B))=-7$, $\det(A_3(B))=0$ y $(x,y,z)=(-1,1,0)$; exige verificar las tres ecuaciones por sustitución. Para practicar una coordenada aislada, usa $B_s=(-2,0,s)^T$ con $s\in\mathbb R$: basta obtener $z(s)=(2-2s)/7$, sin hallar las otras coordenadas. Al calcular $A^{-1}$, verifica que se transponga la matriz de cofactores; la interpretación geométrica del determinante queda como ampliación externa. No generes ejercicios: usa los sistemas y la práctica incluidos en esta nota.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
