---
title: Ejercicios 41–48 — cálculo y propiedades de determinantes
asignatura: Álgebra Lineal y Geometría Analítica
capa: curricular
tipo:
  - ejercicios
  - preparatoria
nivel: universitario-introductorio
estado: revisado
fsrs_goal: Calcula determinantes por Sarrus, Laplace y eliminación, elige filas y columnas convenientes y justifica cada factor y signo introducido por operaciones elementales.
tags:
  - matematicas
  - algebra-lineal
  - determinantes
  - ejercicios
  - fcul
---

# Cálculo y propiedades · ejercicios 41–48

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

Antes de desarrollar un [[Matemáticas/Álgebra lineal/Determinantes|determinante]], conviene mirar la matriz. Una fila con muchos ceros reduce el trabajo de Laplace; una matriz triangular sólo exige multiplicar su diagonal. Cuando esa estructura aún no aparece, las operaciones de filas o columnas pueden hacerla visible, siempre que se lleve la cuenta de cómo cambia el determinante.[^teoria]

> [!tip] Práctica
> 🤖 identifica las resoluciones y comprobaciones añadidas por IA. La letra «S» del boletín indica que existe una respuesta oficial; los desarrollos de este cuaderno son propios.

## Fórmulas directas y estructura de la matriz

### Ejercicio 41 · Determinantes de orden dos y tres 🤖

#### Enunciado

Calcula los determinantes de las siguientes matrices, con $\theta\in\mathbb R$ en c):[^41]

$$
\text{a) }\begin{pmatrix}3&1\\2&4\end{pmatrix}.
$$

$$
\text{b) }\begin{pmatrix}6&-12\\-2&4\end{pmatrix}.
$$

$$
\text{c) }\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}.
$$

$$
\text{d) }\begin{pmatrix}0&2&2\\1&0&3\\2&1&1\end{pmatrix}.
$$

> [!resolucion]- Resolución
> Para una matriz $2\times2$, el determinante es el producto de la diagonal principal menos el de la otra diagonal:
>
> $$
> \det\begin{pmatrix}p&q\\r&s\end{pmatrix}=ps-qr.
> $$
>
> **a)** $3\cdot4-1\cdot2=\boxed{10}$.
>
> **b)** $6\cdot4-(-12)(-2)=24-24=\boxed0$. El producto de dos números negativos es positivo; por eso se resta $24$.
>
> **c)** La fórmula da
>
> $$
> \cos^2\theta-(-\sin\theta)\sin\theta
> =\cos^2\theta+\sin^2\theta=\boxed1,
> $$
>
> por la identidad trigonométrica $\cos^2\theta+\sin^2\theta=1$.
>
> **d)** Llamemos $A$ a la matriz de este apartado. Desarrollamos por la primera fila, cuyo primer elemento es cero:
>
> $$
> \det A=-2\begin{vmatrix}1&3\\2&1\end{vmatrix}
> +2\begin{vmatrix}1&0\\2&1\end{vmatrix}
> =-2(1-6)+2(1-0)=\boxed{12}.
> $$

> [!recuerda]- Comprobación
> En b), la segunda fila es $-1/3$ de la primera, por lo que el determinante debe ser cero. En c), $\theta=0$ produce la identidad, de determinante $1$. En d), Sarrus da $(0+12+2)-(0+2+0)=12$.

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
---
> [!note] Pregunta
> ¿Cómo se calcula el determinante de $\begin{pmatrix}a&b\\c&d\end{pmatrix}$?
===
> [!important] Respuesta
> $ad-bc$: producto de la diagonal principal menos producto de la otra diagonal.
```

### Ejercicio 42 · Tres métodos para el mismo determinante 🤖

#### Enunciado

Sea[^42]

$$
A=\begin{pmatrix}0&2&1\\2&-1&3\\0&1&4\end{pmatrix}.
$$

Calcula $\det A$: **a)** por Sarrus; **b)** por Laplace sobre la segunda fila; **c)** por Laplace sobre la primera columna.

> [!resolucion]- Resolución
> **a) Sarrus.** Agrupamos por separado los tres productos que se suman y los tres que se restan:
>
> $$
> S_+=0(-1)4+2\cdot3\cdot0+1\cdot2\cdot1=2,
> $$
>
> $$
> S_-=1(-1)0+2\cdot2\cdot4+0\cdot3\cdot1=16.
> $$
>
> Por tanto,
>
> $$
> \det A=S_+-S_-=2-16=\boxed{-14}.
> $$
>
> **b) Laplace por la segunda fila.** Cada entrada se multiplica por su cofactor,
>
> $$
> C_{ij}=(-1)^{i+j}\det A_{ij},
> $$
>
> donde $A_{ij}$ se obtiene eliminando la fila $i$ y la columna $j$. En la segunda fila, los signos de los cofactores son $-,+,-$:
>
> $$
> \det A=-2\begin{vmatrix}2&1\\1&4\end{vmatrix}
> +(-1)\begin{vmatrix}0&1\\0&4\end{vmatrix}
> -3\begin{vmatrix}0&2\\0&1\end{vmatrix}.
> $$
>
> Los dos últimos menores tienen una columna nula. Queda $-2(8-1)=\boxed{-14}$.
>
> **c) Laplace por la primera columna.** Sólo contribuye $a_{21}=2$. El signo de su cofactor es $(-1)^{2+1}=-1$:
>
> $$
> \det A=2C_{21}=-2\begin{vmatrix}2&1\\1&4\end{vmatrix}=\boxed{-14}.
> $$
>
> Los tres métodos coinciden, pero la columna con dos ceros exige menos cálculos.

> [!recuerda]- Comprobación
> Intercambia las dos primeras filas y elimina la entrada inferior $1$ de la segunda columna usando el pivote $2$. La matriz resultante tiene diagonal $2,2,7/2$, de producto $14$. Hubo un intercambio, de modo que el determinante original es $-14$.

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
---
> [!note] Pregunta
> ¿Para qué orden de matriz sirve la regla de Sarrus?
===
> [!important] Respuesta
> Para orden $3$: suma tres productos diagonales cíclicos y resta los tres del sentido contrario. No se extiende repitiendo diagonales a órdenes mayores.
```

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - cofactores
---
> [!note] Pregunta
> ¿Cómo se obtiene el cofactor $C_{ij}$ de una entrada de una matriz cuadrada?
===
> [!important] Respuesta
> Se eliminan la fila $i$ y la columna $j$ y se multiplica el determinante restante por $(-1)^{i+j}$.
```

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - laplace
---
> [!note] Pregunta
> ¿Cómo se aplica el desarrollo de Laplace y qué fila o columna conviene elegir?
===
> [!important] Respuesta
> Se suman los productos de cada entrada por su cofactor a lo largo de una fila o columna. Conviene elegir una con muchos ceros, pues sus términos se anulan.
```

### Ejercicio 43 · Diagonales y filas o columnas nulas 🤖

#### Enunciado

Determina el determinante de cada matriz:[^43]

$$
A=\begin{pmatrix}1&0&0&0\\1&-2&0&0\\2&3&0&0\\1&5&6&7\end{pmatrix}.
$$

$$
B=\begin{pmatrix}1&0&0&0\\0&4&0&0\\0&0&9&0\\0&0&0&-6\end{pmatrix}.
$$

$$
C=\begin{pmatrix}-6&9&-7\\0&2&11\\0&0&4\end{pmatrix}.
$$

$$
D=\begin{pmatrix}3&-4&12&\sqrt2&6\\12&-2&6&-7&4\\0&0&0&0&0\\1&\sqrt3&5&5&9\\1&-3&5&-6&7\end{pmatrix}.
$$

$$
E=\begin{pmatrix}5&0&-7\\0&0&12\\-8&0&9\end{pmatrix}.
$$

> [!resolucion]- Resolución
> **a)** $A$ es triangular inferior. Su determinante es el producto de su diagonal: $1(-2)0\cdot7=\boxed0$.
>
> **b)** $B$ es diagonal: $\det B=1\cdot4\cdot9(-6)=\boxed{-216}$.
>
> **c)** $C$ es triangular superior: $\det C=(-6)2\cdot4=\boxed{-48}$.
>
> **d)** La tercera fila de $D$ es nula. Desarrollar por ella produce una suma de términos cero, luego $\boxed{\det D=0}$.
>
> **e)** La segunda columna de $E$ es nula. Laplace por esa columna da $\boxed{\det E=0}$.

> [!recuerda]- Comprobación
> En a), la relación $R_3=\frac72R_1-\frac32R_2$ permite obtener una fila nula y confirma el determinante cero sin utilizar la diagonal.
>
> En b), desarrollar sucesivamente por las primeras columnas deja los factores $1,4,9,-6$. En c), la primera columna sólo tiene una entrada no nula:
>
> $$
> \det C=-6\begin{vmatrix}2&11\\0&4\end{vmatrix}=-6\cdot8=-48.
> $$

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
---
> [!note] Pregunta
> ¿Cuál es el determinante de una matriz triangular?
===
> [!important] Respuesta
> El producto de sus entradas diagonales, tanto si es triangular superior como inferior. El caso diagonal está incluido.
```

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
---
> [!note] Pregunta
> ¿Qué permite concluir una fila o una columna nula sobre un determinante?
===
> [!important] Respuesta
> Que vale cero: el desarrollo de Laplace por esa fila o columna sólo tiene términos nulos.
```

## Transformaciones que simplifican el cálculo

### Ejercicio 44 · Eliminación y parámetros que desaparecen 🤖

#### Enunciado

Calcula los determinantes, con $\alpha,\beta\in\mathbb R$:[^44]

$$
A=\begin{pmatrix}
2&1&0&3\\1+2\alpha&2+\alpha&1&1+3\alpha\\2+\beta&1+2\beta&\beta&\beta\\-4&-2&5&0
\end{pmatrix}.
$$

$$
B=\begin{pmatrix}-1&1&2&0&1\\-1&1&1&-1&2\\-1&3&9&-1&2\\1&1&6&7&2\\2&0&4&3&0\end{pmatrix}.
$$

> [!resolucion]- Resolución
> **a)** Los términos con $\alpha$ de la segunda fila son exactamente $\alpha$ veces la primera. Los eliminamos con $R_2\leftarrow R_2-\alpha R_1$ y obtenemos $R_2=(1,2,1,1)$.
>
> Esa nueva fila permite eliminar $\beta$ de la tercera: $R_3\leftarrow R_3-\beta R_2$ deja $(2,1,0,0)$. Restamos ahora $R_1$ y queda $(0,0,0,-3)$. Por último, $R_4\leftarrow R_4+2R_1$ anula las dos primeras entradas de la cuarta fila. Todas estas sumas de múltiplos de otras filas conservan el determinante:
>
> $$
> A' =\begin{pmatrix}2&1&0&3\\1&2&1&1\\0&0&0&-3\\0&0&5&6\end{pmatrix},\qquad \det A'=\det A.
> $$
>
> Laplace por la tercera fila tiene un único término. La posición $(3,4)$ tiene signo negativo:
>
> $$
> \det A=(-3)(-1)\begin{vmatrix}2&1&0\\1&2&1\\0&0&5\end{vmatrix}
> =3\cdot5(4-1)=\boxed{45}.
> $$
>
> El resultado vale para todos los $\alpha,\beta\in\mathbb R$, pues las operaciones realizadas eliminan ambos parámetros sin dividir por ellos.
>
> **b)** Usamos el $-1$ de la primera fila como pivote para anular las otras entradas de su columna. Las operaciones son $R_2\leftarrow R_2-R_1$, $R_3\leftarrow R_3-R_1$, $R_4\leftarrow R_4+R_1$ y $R_5\leftarrow R_5+2R_1$. La nueva segunda fila empieza con dos ceros; intercambiarla con la tercera sitúa un pivote $2$ en la segunda columna:
>
> $$
> \begin{pmatrix}-1&1&2&0&1\\0&2&7&-1&1\\0&0&-1&-1&1\\0&2&8&7&3\\0&2&8&3&2\end{pmatrix}.
> $$
>
> El intercambio cambia el signo, de modo que el determinante de esta matriz es $-\det B$. Restamos $R_2$ de $R_4$ y $R_5$ para anular su segunda entrada. En ambas queda un $1$ en la tercera columna, que se elimina sumando $R_3$:
>
> $$
> \begin{pmatrix}-1&1&2&0&1\\0&2&7&-1&1\\0&0&-1&-1&1\\0&0&0&7&3\\0&0&0&3&2\end{pmatrix}.
> $$
>
> Con $R_5\leftarrow R_5-\frac37R_4$, la última entrada diagonal es $2-9/7=5/7$. El producto diagonal vale $(-1)2(-1)7(5/7)=10$. Como sólo hubo un intercambio, $\boxed{\det B=-10}$.

> [!recuerda]- Comprobación
> En a), toma $\alpha=\beta=0$ y desarrolla por la tercera columna. El término de la segunda fila es cero, porque su menor tiene la primera columna igual al doble de la segunda. El término de la cuarta fila es $-5$ por un menor de valor $-9$, y da $45$.
>
> En b), se puede detener la eliminación antes de la última operación. El determinante de la matriz con las filas intercambiadas es
>
> $$
> (-1)2(-1)\begin{vmatrix}7&3\\3&2\end{vmatrix}
> =2(14-9)=10.
> $$
>
> Al deshacer el intercambio, se recupera $\det B=-10$.

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
---
> [!note] Pregunta
> ¿Qué efecto tiene $R_i\leftarrow R_i+\lambda R_j$, con $i\ne j$, sobre un determinante?
===
> [!important] Respuesta
> No cambia su valor. La misma propiedad vale para sumar a una columna un múltiplo de otra distinta.
```

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
---
> [!note] Pregunta
> ¿Cómo cambia un determinante al intercambiar dos filas o dos columnas?
===
> [!important] Respuesta
> Cambia de signo. Tras $r$ intercambios, el factor total es $(-1)^r$.
```

### Ejercicio 45 · Restar filas en el orden correcto 🤖

#### Enunciado

Calcula el determinante de[^45]

$$
A=\begin{pmatrix}3&2&0&0&0&0\\3&3&2&0&0&0\\3&3&3&2&0&0\\3&3&3&3&2&0\\3&3&3&3&3&2\\3&3&3&3&3&3\end{pmatrix}.
$$

> [!resolucion]- Resolución
> Las filas consecutivas coinciden en muchas entradas. Hacemos $R_i\leftarrow R_i-R_{i-1}$ **en orden descendente**, desde $i=6$ hasta $i=2$. Así, cada resta utiliza las dos filas originales correspondientes; ninguna fila anterior ha sido modificada todavía.
>
> $$
> A\longrightarrow
> \begin{pmatrix}3&2&0&0&0&0\\0&1&2&0&0&0\\0&0&1&2&0&0\\0&0&0&1&2&0\\0&0&0&0&1&2\\0&0&0&0&0&1\end{pmatrix}.
> $$
>
> Todas las operaciones conservan el determinante. La matriz final es triangular, de diagonal $3,1,1,1,1,1$, por lo que $\boxed{\det A=3}$.

> [!recuerda]- Comprobación
> Expande la matriz final por la primera columna y continúa con las columnas de los menores: sólo sobreviven los factores $3,1,1,1,1,1$. Para comprobar las restas, recupera las filas originales acumulando desde arriba las filas finales.

### Ejercicio 46 · Reconocer una matriz de determinante conocido 🤖

#### Enunciado

Sea[^46]

$$
M=\begin{pmatrix}a&b&c&d\\1&3&4&1\\5&2&0&8\\-1&-1&-3&-4\end{pmatrix},\qquad\det M=5.
$$

Calcula los determinantes de:

$$
A=\begin{pmatrix}3a&3b&3c&3d\\1&3&4&1\\5&2&0&8\\1&1&3&4\end{pmatrix}.
$$

$$
B=\begin{pmatrix}5&2&0&8\\1&3&4&1\\a&b&c&d\\-1&-1&-3&-4\end{pmatrix}.
$$

$$
C=\begin{pmatrix}1&3&4&1\\-1&-1&-3&-4\\5&2&0&8\\a&b&c&d\end{pmatrix}.
$$

$$
D=\begin{pmatrix}-1&-4&-1&-3\\1&1&3&4\\5&8&2&0\\a&d&b&c\end{pmatrix}.
$$

$$
E=\begin{pmatrix}a&b&c&d\\1+\sqrt7a&3+\sqrt7b&4+\sqrt7c&1+\sqrt7d\\5-a&2-b&-c&8-d\\-1&-1&-3&-4\end{pmatrix}.
$$

$$
F=\begin{pmatrix}5&1&a&-1\\2&3&b&-1\\0&4&c&-3\\8&1&d&-4\end{pmatrix}.
$$

> [!resolucion]- Resolución
> Denotemos las filas de $M$ por $r_1,r_2,r_3,r_4$. En cada apartado se reconoce una transformación de esas filas o de las columnas; su efecto sobre el determinante permite usar directamente el dato $\det M=5$.
>
> **a)** Se multiplica $r_1$ por $3$ y $r_4$ por $-1$. Cada factor afecta al determinante una sola vez: $\det A=3(-1)5=\boxed{-15}$.
>
> **b)** El orden de filas es $(r_3,r_2,r_1,r_4)$: un intercambio de la primera y la tercera. Luego $\det B=-5$.
>
> **c)** El orden es $(r_2,r_4,r_3,r_1)$. Se obtiene de $(1,2,3,4)$ intercambiando primero las posiciones $1,2$ y después $2,4$. Dos intercambios conservan el signo: $\boxed{\det C=5}$.
>
> **d)** Primero intercambiamos las filas primera y cuarta de $M$, que pasan a tener el orden $(r_4,r_2,r_3,r_1)$. Ese intercambio cambia el signo del determinante.
>
> Después, las columnas deben quedar en el orden $(1,4,2,3)$. Para llevar la cuarta hasta la segunda posición se hacen dos intercambios: primero con la tercera y después con la segunda. Esos dos cambios de signo se cancelan. El factor total es $(-1)(-1)^2=-1$, de modo que $\boxed{\det D=-5}$.
>
> **e)** Se han efectuado $R_2\leftarrow R_2+\sqrt7R_1$ y $R_3\leftarrow R_3-R_1$. Ambas conservan el determinante: $\boxed{\det E=5}$.
>
> **f)** Las columnas de $F$ son $r_3^T,r_2^T,r_1^T,r_4^T$. Por tanto, se obtiene de $M^T$ intercambiando la primera y la tercera columnas. Como transponer conserva el determinante, $\boxed{\det F=-5}$.

> [!recuerda]- Comprobación
> Deshaz las transformaciones: en a), dividir la primera fila por $3$ y cambiar el signo de la cuarta recupera $M$; en e), restar $\sqrt7R_1$ de $R_2$ y sumar $R_1$ a $R_3$ también. En d), la permutación de filas es impar y la de columnas es par; el factor total debe ser $-1$.

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
---
> [!note] Pregunta
> ¿Qué ocurre al multiplicar una única fila o columna por un escalar $\lambda$?
===
> [!important] Respuesta
> El determinante queda multiplicado por $\lambda$. Si se modifican varias filas o columnas, se multiplican todos sus factores.
```

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
---
> [!note] Pregunta
> ¿Qué relación hay entre $\det(A^T)$ y $\det A$?
===
> [!important] Respuesta
> Son iguales. Por eso las propiedades del determinante para filas tienen su versión correspondiente para columnas.
```

### Ejercicio 47 · Igualdad sin desarrollar los determinantes 🤖

#### Enunciado

Demuestra, sin calcular los determinantes, que[^47]

$$
\begin{vmatrix}a+b&b&3c\\x+y&y&3z\\3&2&9\end{vmatrix}
=
\begin{vmatrix}a+2x&x&3\\b+2y&y&6\\c+2z&z&9\end{vmatrix}.
$$

> [!demostracion]- Demostración
> En el determinante izquierdo, la primera columna contiene a la segunda sumada a otra columna. Restar $C_2$ de $C_1$ elimina los términos $b,y,2$ sin cambiar el valor. Extraemos después el factor $3$ de la tercera columna:
>
> $$
> D_{\mathrm{izq}}=3\begin{vmatrix}a&b&c\\x&y&z\\1&2&3\end{vmatrix}.
> $$
>
> Transponer la matriz no cambia su determinante, así que
>
> $$
> D_{\mathrm{izq}}=3\begin{vmatrix}a&x&1\\b&y&2\\c&z&3\end{vmatrix}.
> $$
>
> En el derecho, $C_1\leftarrow C_1-2C_2$ elimina los términos $2x,2y,2z$. Extraer el factor $3$ de la tercera columna da
>
> $$
> D_{\mathrm{der}}=3\begin{vmatrix}a&x&1\\b&y&2\\c&z&3\end{vmatrix}.
> $$
>
> Los dos determinantes son, por tanto, tres veces el determinante de la misma matriz. Esto prueba la igualdad solicitada sin desarrollar sus productos.

> [!recuerda]- Comprobación
> Toma $(a,b,c)=(1,0,0)$ y $(x,y,z)=(0,1,0)$. El izquierdo queda triangular con diagonal $1,1,9$; el derecho también tiene determinante $9$. Es un control numérico del signo y del factor $3$, no un sustituto de la prueba general.

### Ejercicio 48 · Escala global y una columna repetida 🤖

#### Enunciado

Sea $A$ real con $\det A=2$:[^48]

$$
A=\begin{pmatrix}a&b&c\\d&e&f\\g&h&i\end{pmatrix}.
$$

Calcula los determinantes de

$$
\text{a) }B=\begin{pmatrix}a&2b&c\\3d&6e&3f\\-2g&-4h&-2i\end{pmatrix}.
$$

$$
\text{b) }C=4A.
$$

$$
\text{c) }D=\begin{pmatrix}a&b&b&c\\2&0&3&0\\d&e&e&f\\g&h&h&i\end{pmatrix}.
$$

> [!resolucion]- Resolución
> **a)** Desde $A$, se multiplica su segunda columna por $2$, su segunda fila por $3$ y su tercera fila por $-2$. Luego
>
> $$
> \det B=2\cdot3(-2)\det A=-12\cdot2=\boxed{-24}.
> $$
>
> **b)** Multiplicar la matriz entera por $4$ multiplica **cada una de sus tres filas** por $4$. Por tanto,
>
> $$
> \det(4A)=4^3\det A=64\cdot2=\boxed{128}.
> $$
>
> **c)** Las columnas segunda y tercera sólo se diferencian en la segunda entrada. Hacemos $C_3\leftarrow C_3-C_2$:
>
> $$
> \det D=\begin{vmatrix}a&b&0&c\\2&0&3&0\\d&e&0&f\\g&h&0&i\end{vmatrix}.
> $$
>
> Laplace por la tercera columna deja la entrada $3$ de posición $(2,3)$, cuyo signo es negativo. El menor restante es exactamente $A$, de modo que
>
> $$
> \det D=-3\det A=\boxed{-6}.
> $$

> [!recuerda]- Comprobación
> Para comprobar los factores y los signos con datos concretos, toma $A=\operatorname{diag}(2,1,1)$, que cumple $\det A=2$. En b), la diagonal de $4A$ es $(8,4,4)$, de producto $128$. En a), la diagonal de $B$ es $(2,6,-2)$, de producto $-24$. En c), desarrollar primero por la primera fila y después por la última deja $2(-3)=-6$.

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
---
> [!note] Pregunta
> Si $A$ tiene orden $n$, ¿cuánto vale $\det(\lambda A)$?
===
> [!important] Respuesta
> $\lambda^n\det A$: el escalar multiplica las $n$ filas, no una sola.
```

El cálculo de un determinante permite decidir si hay inversa sin calcularla. Los [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/ejercicios/02 Productos, invertibilidad y parámetros — ejercicios 49–54|ejercicios 49–54]] aplican esa relación a productos, sistemas homogéneos y matrices con parámetros.

## 📚 Fuentes

- FCUL, *ALGA 2026/2027 — Exercícios: Enunciados para as aulas teórico-práticas*, fascículo 1–90, pp. 10–12, ejercicios 41–48; cotejado con el fascículo 1–60 para esos mismos ejercicios.
- [[Matemáticas/Álgebra lineal/Determinantes|Determinantes]], §§2–3: propiedades elementales, fórmula de orden dos, Laplace, cofactores y transposición. Resoluciones y comprobaciones propias.

[^41]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 10, ejercicio 41, apartados a–d.
[^42]: Misma fuente, p. 10, ejercicio 42, apartados a–c.
[^43]: Misma fuente, p. 11, ejercicio 43, apartados a–e.
[^44]: Misma fuente, p. 11, ejercicio 44, apartados a–b.
[^45]: Misma fuente, p. 11, ejercicio 45.
[^46]: Misma fuente, pp. 11–12, ejercicio 46, apartados a–f.
[^47]: Misma fuente, p. 12, ejercicio 47.
[^48]: Misma fuente, p. 12, ejercicio 48, apartados a–c.
[^teoria]: Nota canónica *Determinantes*, §§2–3: propiedades de filas y columnas, transposición, triangularidad y desarrollo de Laplace. Sus premisas se aplican a los datos de la ficha; los pasos algebraicos y las comprobaciones son propios.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como profesor de Álgebra Lineal de primer curso. Escoge un ejercicio entre 41 y 48 y pregunta qué método conviene usar antes de empezar a calcular. Espera mi respuesta; si hay varias opciones, pide comparar cuántos términos habría que desarrollar.

Para orden dos, comprueba que aplico

$$
\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc.
$$

Pide que limite Sarrus al orden tres. Para Laplace, exige identificar la fila y columna que se eliminan y justificar el signo $(-1)^{i+j}$ de cada cofactor. Una columna con dos ceros en orden tres debe llevarme a un único término, como ocurre en el ejercicio 42.

En las operaciones elementales, exige llevar la cuenta de intercambios y factores. Debo distinguir multiplicar una fila de multiplicar la matriz entera: para $A$ de orden $n$, $\det(\lambda A)=\lambda^n\det A$. Usa también $\det A^T=\det A$ al comparar filas y columnas. Pide una comprobación por otro método, corrige el primer paso incorrecto y retoma más adelante las propiedades que me hayan costado.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
