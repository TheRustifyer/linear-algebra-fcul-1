---
title: Ejercicios 78–88 — independencia, bases y coordenadas
asignatura: Álgebra Lineal y Geometría Analítica
capa: curricular
tipo:
  - ejercicios
  - preparatoria
nivel: universitario-introductorio
estado: revisado
fsrs_goal: Decide la independencia de familias de vectores, matrices, polinomios y funciones; extrae bases por filas y por columnas originales, justifica generación e independencia y calcula coordenadas respetando el cuerpo y las operaciones del espacio.
requiere:
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/04 Dependencia e independencia lineal|Dependencia e independencia lineal]]"
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/05 Bases y dimensión|Bases y dimensión]]"
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/06 Coordenadas y cambio de base|Coordenadas y cambio de base]]"
relacionado:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/ejercicios/01 Axiomas y subespacios — ejercicios 59–65|Ejercicios 59–65]]"
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/ejercicios/02 Combinaciones lineales y espacio generado — ejercicios 66–77|Ejercicios 66–77]]"
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
  - independencia-lineal
  - bases
  - ejercicios
  - fcul
---

# Independencia, bases y coordenadas · ejercicios 78–88

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

Si un vector de una familia es combinación de los demás, puede eliminarse sin cambiar el subespacio que generan. Ese vector es redundante. Para extraer una [[Matemáticas/Álgebra lineal/Espacios vectoriales/05 Bases y dimensión|base]] de una familia generadora finita, se eliminan las redundancias hasta conservar una familia que genere todo el subespacio y sea [[Matemáticas/Álgebra lineal/Espacios vectoriales/04 Dependencia e independencia lineal|linealmente independiente]]. La comprobación emplea siempre los escalares y las operaciones del espacio indicado: cambiar el cuerpo o la suma, como sucede en 87 y 88, puede cambiar la base.[^bases]

> [!tip] Procedencia de las respuestas
> Los enunciados proceden del boletín de FCUL. Las resoluciones marcadas con 🤖 son propias; las fichas oficiales disponibles no incluyen las respuestas a 78–88.

## De la independencia a una base

### Ejercicio 78 · Independencia y bases de familias de vectores 🤖

#### Enunciado

Para cada familia, comprueba si es linealmente independiente en el espacio indicado. Cuando sea dependiente, escribe uno de sus vectores como combinación de los restantes. Usa las conclusiones para determinar una base del subespacio generado.[^78]

**a)** $\bigl((1,2),(-2,-4)\bigr)$ en $\mathbb R^2$.

**b)** $\bigl((1,1),(-1,-2)\bigr)$ en $\mathbb R^2$.

**c)** $\bigl((1,2)\bigr)$ en $\mathbb R^2$.

**d)** $\bigl((2,-1,2),(2,2,2),(4,1,4)\bigr)$ en $\mathbb R^3$.

**e)** $\bigl((2,-1,2),(2,2,2),(1,1,-1)\bigr)$ en $\mathbb R^3$.

**f)** $\bigl((0,1,2,0),(2,0,1,1),(-2,4,8,-1)\bigr)$ en $\mathbb R^4$.

**g)** En $M_2(\mathbb R)$:

$$
\left(
\begin{pmatrix}2&-1\\1&1\end{pmatrix},
\begin{pmatrix}0&1\\1&0\end{pmatrix},
\begin{pmatrix}2&2\\2&2\end{pmatrix}
\right).
$$

**h)** En $M_{2\times3}(\mathbb R)$:

$$
\left(
\begin{pmatrix}4&2&2\\-2&0&2\end{pmatrix},
\begin{pmatrix}-2&-1&1\\1&0&-1\end{pmatrix}
\right).
$$

**i)** $\bigl(2x,x^2+3x,x^2+3x+2\bigr)$ en $\mathbb R_2[x]$.

**j)** $\bigl(x^3-2x+1,5,x^3+3x^2-1,-2x^3+3x^2-3x\bigr)$ en $\mathbb R_3[x]$.

Los espacios de polinomios $\mathbb R_n[x]$ admiten grado a lo sumo $n$, incluido el polinomio cero. Todos los escalares de este ejercicio son reales.

> [!resolucion]- Resolución
> En cada apartado, $v_1,v_2,\ldots$ designan los objetos en su orden de aparición. Para probar independencia, partimos de una combinación igual a cero y demostramos que sus coeficientes son todos nulos. Para probar dependencia, basta una relación con algún coeficiente no nulo. Si la familia es independiente, ella misma es una base de su generado y la dimensión es su número de vectores.[^independencia][^bases]
>
> **a)** $v_2=-2v_1$, así que la familia es **dependiente**. Eliminar $v_2$ conserva el generado. Como $v_1\ne0$, $\{(1,2)\}$ es base y la dimensión es $1$.
>
> **b)** Si $av_1+bv_2=0$, las coordenadas dan $a-b=0$ y $a-2b=0$. Al restarlas, $b=0$; entonces $a=0$. Los dos vectores son **independientes** y la dimensión del generado es $2$.
>
> **c)** De $a(1,2)=(0,0)$, la primera coordenada da $a=0$. Este único vector no nulo forma una base de la recta que genera, de dimensión $1$.
>
> **d)** $v_3=v_1+v_2$, una dependencia explícita. Los dos primeros son independientes: $av_1+bv_2=0$ da $2a+2b=0$ y $-a+2b=0$; de $a=-b$ resulta $3b=0$, luego $a=b=0$. Por tanto,
>
> $$
> B=\{(2,-1,2),(2,2,2)\},\qquad \dim\langle v_1,v_2,v_3\rangle=2.
> $$
>
> **e)** La relación $av_1+bv_2+cv_3=0$ exige
>
> $$
> 2a+2b+c=0,\qquad -a+2b+c=0,\qquad2a+2b-c=0.
> $$
>
> La primera menos la tercera da $2c=0$. Con $c=0$, las otras dos ecuaciones son las de d), por lo que $a=b=0$. La dimensión del generado es $3$, pues los tres vectores son **independientes**.
>
> **f)** Las cuatro coordenadas de $av_1+bv_2+cv_3=0$ son
>
> $$
> 2b-2c=0,\quad a+4c=0,\quad2a+b+8c=0,\quad b-c=0.
> $$
>
> Las dos primeras dan $b=c$ y $a=-4c$. Sustituirlas en la tercera deja $-8c+c+8c=c=0$. Por tanto, $a=b=c=0$: la familia es **independiente** y su generado tiene dimensión $3$.
>
> **g)** Supongamos $aA_1+bA_2+cA_3=0_{2\times2}$. Las entradas $(1,1)$ y $(2,2)$ dan $2a+2c=0$ y $a+2c=0$. De $a=-c$ resulta $c=0$, luego $a=0$. La entrada $(1,2)$, $-a+b+2c=0$, da $b=0$. No hay una relación no trivial entre las tres matrices: son **independientes** y la dimensión es $3$.
>
> **h)** Si $aA+bB=0$, la entrada $(1,1)$ da $4a-2b=0$, luego $b=2a$. La entrada $(1,3)$ da $2a+b=0$, de donde $4a=0$ y $a=b=0$. Las dos matrices forman una base de su generado, de dimensión $2$.
>
> **i)** En la identidad polinómica
>
> $$
> a(2x)+b(x^2+3x)+c(x^2+3x+2)=0,
> $$
>
> el término independiente obliga a $2c=0$; el de $x^2$, a $b+c=0$; el de $x$, a $2a+3b+3c=0$. En ese orden se obtiene $c=b=a=0$. Los tres polinomios son **independientes** y generan un subespacio de dimensión $3$.
>
> **j)** Denotemos los cuatro polinomios por $p_1,p_2,p_3,p_4$. Igualar los coeficientes de $ap_1+bp_2+cp_3+dp_4=0$ da
>
> $$
> a+c-2d=0,\quad3c+3d=0,\quad-2a-3d=0,\quad a+5b-c=0.
> $$
>
> Las ecuaciones de $x^2$ y $x$ dan $c=-d$ y $a=-3d/2$. La de $x^3$ queda $-9d/2=0$, por lo que $d=0$ y también $a=c=0$. La última da $5b=0$. Los cuatro polinomios forman una base de su generado y la dimensión es $4$.
>
> En b), c) y e–j), la base es la familia completa del enunciado. En a) y d), las relaciones encontradas reconstruyen los vectores eliminados; por eso las subfamilias propuestas siguen generando el mismo subespacio.[^bases]

> [!recuerda]- Comprobación
> Verifica por coordenadas $v_2=-2v_1$ en a) y $v_3=v_1+v_2$ en d). En f), las coordenadas primera, segunda y cuarta permiten los coeficientes $(-4,1,1)$: basta elegir $c=1$, $b=c$ y $a=-4c$. Al usarlos en la combinación completa se obtiene $(0,0,1,0)$; la tercera coordenada es la que impide esa relación no trivial. En h), comparar la entrada $(1,3)$ confirma que $B$ no es $-A/2$. Para j), la matriz de coeficientes, con filas en el orden $x^3,x^2,x,1$ y columnas $p_1,p_2,p_3,p_4$, tiene determinante $-135\ne0$, lo que confirma la independencia por otro método.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - independencia-lineal
---
> [!note] Pregunta
> ¿Qué debe obtenerse al resolver $a_1v_1+\cdots+a_mv_m=0_V$ para demostrar que una familia es independiente?
===
> [!important] Respuesta
> Que toda solución tiene $a_1=\cdots=a_m=0$. Para refutar la independencia basta una solución con algún coeficiente no nulo.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - bases
---
> [!note] Pregunta
> ¿Qué dos condiciones deben justificarse para que una subfamilia de generadores sea una base del mismo subespacio?
===
> [!important] Respuesta
> Que los vectores conservados sean independientes y que reconstruyan todos los generadores originales. Esta última condición prueba que no cambia el espacio generado.
```

### Ejercicio 79 · Bases mediante filas y mediante columnas 🤖

#### Enunciado

Determina una base de cada subespacio de dos maneras: mediante el espacio fila y mediante el espacio columna de una matriz.[^79]

**a)** $V=\langle(1,2,-1),(-3,0,-3),(4,2,-2),(-1,4,-1)\rangle\subseteq\mathbb R^3$.

**b)** $W=\langle(2,-2,4,2),(-2,8,2,1),(-1,1,-2,-1),(0,4,8,3)\rangle\subseteq\mathbb R^4$.

> [!resolucion]- Resolución
> Las operaciones elementales por filas son reversibles: conservan el espacio generado por las filas. Por eso las filas no nulas de una forma escalonada dan una base del espacio fila. Para una base del espacio columna, la reducción identifica los índices de las columnas pivote y se eligen las columnas **originales** con esos índices. Escribiremos $\operatorname{rref}(A)$ para la forma escalonada reducida de una matriz $A$.[^gauss]
>
> **a) Método por filas.** Escribimos los generadores como filas:
>
> $$
> R_a=\begin{pmatrix}1&2&-1\\-3&0&-3\\4&2&-2\\-1&4&-1\end{pmatrix}.
> $$
>
> Hacemos cero las entradas situadas debajo del primer pivote mediante $F_2\leftarrow F_2+3F_1$, $F_3\leftarrow F_3-4F_1$ y $F_4\leftarrow F_4+F_1$:
>
> $$
> R_a\sim\begin{pmatrix}1&2&-1\\0&6&-6\\0&-6&2\\0&6&-2\end{pmatrix}.
> $$
>
> Ahora $F_3\leftarrow F_3+F_2$ y $F_4\leftarrow F_4-F_2$ dejan las últimas dos filas $(0,0,-4)$ y $(0,0,4)$. Con $F_4\leftarrow F_4+F_3$, la cuarta queda nula. Dividimos la tercera por $-4$ y eliminamos las entradas de su columna en las dos primeras; después dividimos la segunda por $6$ y eliminamos la entrada situada encima. Se obtiene
>
> $$
> \operatorname{rref}(R_a)=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\\0&0&0\end{pmatrix}.
> $$
>
> Las tres filas no nulas son una base: $B_{\rm filas}=\{(1,0,0),(0,1,0),(0,0,1)\}$. En particular, $V=\mathbb R^3$ y $\dim V=3$.
>
> **a) Método por columnas.** Los mismos generadores como columnas dan
>
> $$
> C_a=\begin{pmatrix}1&-3&4&-1\\2&0&2&4\\-1&-3&-2&-1\end{pmatrix}.
> $$
>
> Con $F_2\leftarrow F_2-2F_1$ y $F_3\leftarrow F_3+F_1$:
>
> $$
> C_a\sim\begin{pmatrix}1&-3&4&-1\\0&6&-6&6\\0&-6&2&-2\end{pmatrix}
> \sim\begin{pmatrix}1&0&0&3\\0&1&0&0\\0&0&1&-1\end{pmatrix}.
> $$
>
> Para el último paso se suma la segunda fila a la tercera, se normaliza el pivote $-4$ y se eliminan las entradas por encima. Los pivotes están en las columnas $1,2,3$. Por tanto,
>
> $$
> B_{\rm columnas}=\{(1,2,-1),(-3,0,-3),(4,2,-2)\}.
> $$
>
> Estas columnas originales son independientes y generan: la cuarta cumple $v_4=3v_1-v_3$.
>
> **b) Método por filas.** La matriz de generadores es
>
> $$
> R_b=\begin{pmatrix}2&-2&4&2\\-2&8&2&1\\-1&1&-2&-1\\0&4&8&3\end{pmatrix}.
> $$
>
> Primero $F_2\leftarrow F_2+F_1$ y $F_3\leftarrow F_3+F_1/2$; después $F_4\leftarrow F_4-(2/3)F_2$. Queda
>
> $$
> R_b\sim\begin{pmatrix}2&-2&4&2\\0&6&6&3\\0&0&0&0\\0&0&4&1\end{pmatrix}.
> $$
>
> Intercambiamos las dos últimas filas y dividimos las tres filas no nulas por $2,6,4$, respectivamente. Eliminamos las entradas situadas encima del tercer pivote y después la que queda encima del segundo. La forma reducida es
>
> $$
> \operatorname{rref}(R_b)=\begin{pmatrix}1&0&0&3/4\\0&1&0&1/4\\0&0&1&1/4\\0&0&0&0\end{pmatrix}.
> $$
>
> Sus filas no nulas forman la base
>
> $$
> B_{\rm filas}=\left\{\left(1,0,0,\frac34\right),\left(0,1,0,\frac14\right),\left(0,0,1,\frac14\right)\right\}.
> $$
>
> **b) Método por columnas.** Transponemos la disposición inicial:
>
> $$
> C_b=\begin{pmatrix}2&-2&-1&0\\-2&8&1&4\\4&2&-2&8\\2&1&-1&3\end{pmatrix}.
> $$
>
> Las operaciones $F_2\leftarrow F_2+F_1$, $F_3\leftarrow F_3-2F_1$ y $F_4\leftarrow F_4-F_1$ dan
>
> $$
> C_b\sim\begin{pmatrix}2&-2&-1&0\\0&6&0&4\\0&6&0&8\\0&3&0&3\end{pmatrix}.
> $$
>
> Restando la segunda fila de la tercera y la mitad de la segunda de la cuarta, aparecen las filas $(0,0,0,4)$ y $(0,0,0,1)$. Dividimos la tercera por $4$ y hacemos $F_4\leftarrow F_4-F_3$, con lo que la cuarta queda nula. Eliminamos la cuarta entrada de la segunda fila, la dividimos por $6$ y usamos los dos pivotes para eliminar las entradas correspondientes de la primera. Finalmente dividimos la primera por $2$. Resulta
>
> $$
> \operatorname{rref}(C_b)=\begin{pmatrix}1&0&-1/2&0\\0&1&0&0\\0&0&0&1\\0&0&0&0\end{pmatrix}.
> $$
>
> Las columnas pivote son $1,2,4$. La base obtenida de la matriz original es
>
> $$
> B_{\rm columnas}=\{(2,-2,4,2),(-2,8,2,1),(0,4,8,3)\}.
> $$
>
> La tercera columna original es $v_3=-v_1/2$, así que no amplía el generado. Los tres pivotes prueban la independencia de las elegidas. Ambas técnicas dan $\dim W=3$, aunque producen bases distintas.

> [!recuerda]- Comprobación
> En a), calcula el determinante de las tres columnas elegidas: vale $-24\ne0$; verifica además $3v_1-v_3=v_4$. En b), todos los generadores y las tres filas de la base satisfacen $3x_1+x_2+x_3-4x_4=0$. Las filas de la base permiten reconstruir cualquier solución de esa ecuación con coeficientes $x_1,x_2,x_3$. Comprueba también $v_3=-v_1/2$ y los tres pivotes de $C_b$.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - espacio-fila
---
> [!note] Pregunta
> ¿Cómo se obtiene una base del espacio fila mediante operaciones elementales por filas?
===
> [!important] Respuesta
> Se reduce la matriz y se toman sus filas no nulas en forma escalonada. Las operaciones conservan el espacio fila y los pivotes hacen independientes esas filas.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - espacio-columna
---
> [!note] Pregunta
> Después de reducir una matriz por filas, ¿de dónde se toman los vectores de una base de su espacio columna?
===
> [!important] Respuesta
> Se localizan las columnas pivote en la reducida y se toman las columnas con esos mismos índices de la matriz original. Las operaciones por filas conservan las relaciones de dependencia entre columnas, pero pueden cambiar el espacio columna.
```

## Bases de subespacios ya identificados

### Ejercicio 80 · Parametrizar las condiciones del ejercicio 61 🤖

#### Enunciado

Determina una base de cada uno de los subespacios del [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/ejercicios/01 Axiomas y subespacios — ejercicios 59–65#Ejercicio 61 · Condiciones en $\mathbb R^3$ 🤖|ejercicio 61]].[^80]

> [!resolucion]- Resolución
> Los conjuntos que son subespacios reales son exactamente $V_1,V_2,V_7,V_{10},V_{11}$. Para cada uno se expresan todos sus vectores mediante parámetros libres y se comprueba que los vectores que multiplican a esos parámetros son independientes.[^bases]
>
> **$V_1$: condición $x-y+z=0$.** Al despejar $x=y-z$,
>
> $$
> (x,y,z)=y(1,1,0)+z(-1,0,1).
> $$
>
> Esta expresión incluye todo $V_1$ y ambos vectores satisfacen la condición. Si $a(1,1,0)+b(-1,0,1)=0$, las coordenadas segunda y tercera dan $a=b=0$. Así,
>
> $$
> B_1=\{(1,1,0),(-1,0,1)\},\qquad\dim V_1=2.
> $$
>
> **$V_2$: condiciones $x-y+z=0$, $x+y-2z=0$.** Sustituir $x=y-z$ en la segunda da $2y=3z$. Tomando $z=2t$, resulta $y=3t$ y $x=t$; por tanto,
>
> $$
> V_2=\{t(1,3,2):t\in\mathbb R\}.
> $$
>
> Si $r(1,3,2)=0$, la primera coordenada da $r=0$. Por tanto, $B_2=\{(1,3,2)\}$ es base y $\dim V_2=1$.
>
> **$V_7=\{(0,a,b):a,b\in\mathbb R\}$.** La parametrización ya está dada:
>
> $$
> (0,a,b)=a(0,1,0)+b(0,0,1).
> $$
>
> En una combinación nula de esos dos vectores, la segunda coordenada es el primer coeficiente y la tercera, el segundo. Ambos deben ser cero. Así, $B_7=\{(0,1,0),(0,0,1)\}$ y $\dim V_7=2$.
>
> **$V_{10}=\{(2a,b,-3a):a,b\in\mathbb R\}$.** Se tiene
>
> $$
> (2a,b,-3a)=a(2,0,-3)+b(0,1,0).
> $$
>
> En una combinación nula, la primera coordenada da $2a=0$, luego $a=0$; la segunda da $b=0$. Luego $B_{10}=\{(2,0,-3),(0,1,0)\}$ y $\dim V_{10}=2$.
>
> **$V_{11}$: condiciones $x+2y=0$, $z=0$.** Todo vector es $y(-2,1,0)$. Si un múltiplo de $(-2,1,0)$ es cero, su segunda coordenada obliga al coeficiente a ser cero. Por tanto, $B_{11}=\{(-2,1,0)\}$ y $\dim V_{11}=1$.
>
> Los demás conjuntos de 61 fallan alguna de las condiciones de subespacio; los cinco casos anteriores son todos los que admiten la base solicitada.

> [!recuerda]- Comprobación
> Sustituye cada vector de $B_1,B_2,B_{11}$ en sus ecuaciones originales. En los conjuntos parametrizados, sustituye $(a,b)=(1,0)$ y $(0,1)$ para recuperar la base. Comprueba además que la combinación con parámetros arbitrarios satisface todas las restricciones, no sólo una de ellas.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - bases
  - parametrización
---
> [!note] Pregunta
> Si al resolver un sistema homogéneo se obtiene $x=t_1u_1+\cdots+t_ru_r$, ¿qué falta comprobar antes de afirmar que los $u_i$ forman una base?
===
> [!important] Respuesta
> Que la parametrización describe todas las soluciones y que los $u_i$ son independientes. Esta última comprobación suele hacerse leyendo las coordenadas que representan los parámetros libres.
```

### Ejercicio 81 · Leer una base en los parámetros de una matriz 🤖

#### Enunciado

Determina una base de cada uno de los subespacios del [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/ejercicios/01 Axiomas y subespacios — ejercicios 59–65#Ejercicio 62 · Restricciones sobre entradas de matrices 🤖|ejercicio 62]].[^81]

> [!resolucion]- Resolución
> Son subespacios $W_1,W_3,W_4$. Para escribir sus bases, $E_{ij}\in M_3(\mathbb R)$ denota la matriz con un $1$ en la posición $(i,j)$ y ceros en las otras ocho entradas, para $1\le i,j\le3$.
>
> **$W_1$.** La matriz general se separa según sus dos parámetros:
>
> $$
> \begin{pmatrix}0&x&y\\-x&2y&0\\2x&0&-y\end{pmatrix}=xX+yY,
> $$
>
> donde
>
> $$
> X=\begin{pmatrix}0&1&0\\-1&0&0\\2&0&0\end{pmatrix},\qquad
> Y=\begin{pmatrix}0&0&1\\0&2&0\\0&0&-1\end{pmatrix}.
> $$
>
> Las matrices $X,Y$ pertenecen a $W_1$, y la expresión reconstruye todas sus matrices. Si $aX+bY=0$, las entradas $(1,2)$ y $(1,3)$ dan $a=b=0$. Luego $\{X,Y\}$ es base y $\dim W_1=2$.
>
> **$W_3$.** Sus condiciones son $a_{11}=-a_{23}$ y $a_{21}=5a_{33}$. Quedan libres las entradas $a_{12},a_{13},a_{22},a_{23},a_{31},a_{32},a_{33}$, y toda matriz se escribe
>
> $$
> A=\begin{pmatrix}-s&p&q\\5w&r&s\\t&u&w\end{pmatrix},
> \qquad p,q,r,s,t,u,w\in\mathbb R.
> $$
>
> Separar cada parámetro da
>
> $$
> A=pE_{12}+qE_{13}+rE_{22}+s(E_{23}-E_{11})
> +tE_{31}+uE_{32}+w(E_{33}+5E_{21}).
> $$
>
> Cada una de las siete matrices de esta expresión cumple las dos restricciones. Para probar independencia, suponemos que la combinación es la matriz cero. Sus entradas $(1,2),(1,3),(2,2),(2,3),(3,1),(3,2),(3,3)$ son, respectivamente, $p,q,r,s,t,u,w$; todas deben ser cero. Por tanto,
>
> $$
> B_3=\{E_{12},E_{13},E_{22},E_{23}-E_{11},E_{31},E_{32},E_{33}+5E_{21}\},
> \qquad\dim W_3=7.
> $$
>
> **$W_4$.** La igualdad de las tres entradas de la primera fila permite escribir
>
> $$
> A=\begin{pmatrix}s&s&s\\p&q&r\\t&u&w\end{pmatrix}.
> $$
>
> Así,
>
> $$
> A=s(E_{11}+E_{12}+E_{13})+pE_{21}+qE_{22}+rE_{23}+tE_{31}+uE_{32}+wE_{33}.
> $$
>
> Las siete matrices cumplen la restricción y la expresión reconstruye cualquier matriz de $W_4$. En una combinación nula, la entrada $(1,1)$ da $s=0$ y las entradas de las dos últimas filas dan $p=q=r=t=u=w=0$. Son independientes, de modo que una base es
>
> $$
> B_4=\{E_{11}+E_{12}+E_{13},E_{21},E_{22},E_{23},E_{31},E_{32},E_{33}\},
> \qquad\dim W_4=7.
> $$
>
> En 62, $W_2$ no contiene la matriz cero y $W_5$ falla el cierre por escalares negativos. Por eso los tres subespacios anteriores son los únicos casos afirmativos.

> [!recuerda]- Comprobación
> Para $W_3$, toma de uno en uno los siete parámetros iguales a $1$ y los demás a cero: se recupera cada miembro de $B_3$ y se pueden verificar $a_{11}+a_{23}=0$ y $a_{21}-5a_{33}=0$. Haz lo mismo para $W_4$ y comprueba que no se omite ninguna entrada libre.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - matrices
  - bases
---
> [!note] Pregunta
> ¿Cómo se extrae una base de un subespacio matricial descrito con entradas libres?
===
> [!important] Respuesta
> Se escribe la matriz general como suma de cada parámetro por una matriz fija. Esas matrices generan; para probar independencia, se recupera cada coeficiente en una entrada libre de una combinación nula.
```

### Ejercicio 82 · Bases a partir de restricciones polinómicas 🤖

#### Enunciado

Determina una base de cada uno de los subespacios del [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/ejercicios/01 Axiomas y subespacios — ejercicios 59–65#Ejercicio 64 · Condiciones sobre coeficientes de polinomios 🤖|ejercicio 64]].[^82]

> [!resolucion]- Resolución
> Los casos que son subespacios son $E_1$ y $E_4$.
>
> **$E_1$.** Para $p(x)=ax^3+bx^2+cx+d$, se exige $2a-5c=0$ y $b-c+d=0$. La primera da $c=2a/5$; la segunda, $b=2a/5-d$. Sustituyendo,
>
> $$
> p(x)=\frac a5(5x^3+2x^2+2x)+d(1-x^2).
> $$
>
> Ambos polinomios de la expresión satisfacen las restricciones y reconstruyen todo $E_1$. Si
>
> $$
> r(5x^3+2x^2+2x)+s(1-x^2)=0,
> $$
>
> el coeficiente de $x^3$ da $5r=0$ y el término independiente da $s=0$. La familia es independiente. Así,
>
> $$
> B_1=\{5x^3+2x^2+2x,1-x^2\},\qquad\dim E_1=2.
> $$
>
> **$E_4$.** Todo polinomio del conjunto tiene la forma $ax^3+bx^2+c$. Por ello $\{x^3,x^2,1\}$ genera. Una combinación nula obliga a $a=b=c=0$ por igualdad de coeficientes. Es base y $\dim E_4=3$.
>
> En 64, $E_2$ y $E_5$ no contienen el polinomio cero, y $E_3$ falla el cierre por escalares negativos. Los subespacios para los que se pide una base son, por tanto, $E_1$ y $E_4$.

> [!recuerda]- Comprobación
> El primer polinomio de $B_1$ tiene coeficientes $(5,2,2,0)$ y cumple $2(5)-5(2)=0$, $2-2+0=0$. El segundo tiene $(0,-1,0,1)$ y cumple ambas ecuaciones. Para $E_4$, verifica que el coeficiente de $x$ sigue siendo cero en cualquier combinación de $x^3,x^2,1$.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - polinomios
  - bases
---
> [!note] Pregunta
> ¿Cómo se comprueba que unos polinomios generadores son independientes?
===
> [!important] Respuesta
> Se iguala a cero una combinación con coeficientes desconocidos y se comparan los coeficientes de todas las potencias. La única solución debe ser la nula.
```

## Bases de todo el espacio y bases de un subespacio

### Ejercicio 83 · ¿Es una base de todo $\mathbb R^3$? 🤖

#### Enunciado

Comprueba si cada familia es una base de $\mathbb R^3$:[^83]

**a)** $\bigl((0,0,1),(1,1,0),(1,1,1)\bigr)$.

**b)** $\bigl((1,2,-1),(-1,1,1),(2,-8,-2)\bigr)$.

**c)** $\bigl((1,-1,1),(1,1,7),(1,1,-1)\bigr)$.

**d)** $\bigl((1,0,0),(0,1,1)\bigr)$.

**e)** $\bigl((0,1,1),(0,1,0),(1,1,1),(2,1,3)\bigr)$.

> [!resolucion]- Resolución
> Una base de $\mathbb R^3$ tiene exactamente tres vectores. Para una familia de tres, basta probar independencia: entonces también genera todo $\mathbb R^3$.[^bases] Denotamos sus vectores por $v_1,v_2,\ldots$.
>
> **a) No.** $v_3=v_1+v_2$. Existe la relación no trivial $v_1+v_2-v_3=0$.
>
> **b) No.** Se cumple $v_3=-2v_1-4v_2$, pues
>
> $$
> -2(1,2,-1)-4(-1,1,1)=(2,-8,-2).
> $$
>
> La familia es dependiente.
>
> **c) Sí.** Con los vectores como columnas,
>
> $$
> A=\begin{pmatrix}1&1&1\\-1&1&1\\1&7&-1\end{pmatrix}.
> $$
>
> Las operaciones $F_2\leftarrow F_2+F_1$ y $F_3\leftarrow F_3-F_1$ conservan el determinante y dan
>
> $$
> \det A=\det\begin{pmatrix}1&1&1\\0&2&2\\0&6&-2\end{pmatrix}
> =2(-2)-2(6)=-16\ne0.
> $$
>
> Por el criterio de determinante, las tres columnas son independientes y forman base de $\mathbb R^3$.[^independencia]
>
> **d) No.** Los dos vectores son independientes, pero sus combinaciones tienen la forma $(a,b,b)$ y no alcanzan, por ejemplo, $(0,1,0)$. Forman base de un plano, no de todo $\mathbb R^3$.
>
> **e) No.** Cuatro vectores de $\mathbb R^3$ no pueden ser independientes. Una relación concreta es $v_4=v_1-2v_2+2v_3$; al sustituir se obtiene $(2,1,3)$.

> [!recuerda]- Comprobación
> Reproduce las relaciones de a), b) y e) en las tres coordenadas. En c), la reducción equivalente $F_3\leftarrow F_3-3F_2$ deja diagonal $(1,2,-8)$, cuyo producto es $-16$. En d), comprueba que el vector excluido tiene distintas coordenadas segunda y tercera.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - bases
  - dimensión
---
> [!note] Pregunta
> En un espacio $V$ de dimensión finita $n$, ¿qué permite concluir que una familia de exactamente $n$ vectores es base?
===
> [!important] Respuesta
> Basta probar que es independiente, o bien que genera $V$. La equivalencia requiere que su número de vectores sea exactamente $n$.
```

### Ejercicio 84 · Ecuaciones, imágenes, filas y columnas 🤖

#### Enunciado

Determina una base de cada subespacio:[^84]

**a)** En $\mathbb R^4$,

$$
V_1=\left\{(x,y,z,w)\in\mathbb R^4:
\begin{array}{l}
x+y+2w=0,\\
2x+y+z+2w=0,\\
2x+3y-z+6w=0,\\
-x-z=0
\end{array}\right\}.
$$

**b)** En $\mathbb R^4$,

$$
V_2=\left\{\begin{pmatrix}
x+y+2w\\2x+y+z+2w\\2x+3y-z+6w\\-x-z
\end{pmatrix}:x,y,z,w\in\mathbb R\right\}.
$$

**c)** $V_3=\langle v_1,v_2,v_3,v_4,v_5\rangle\subseteq\mathbb R^5$, donde

$$
v_1=(-9,-3,12,-6,3),\qquad v_2=(6,2,-8,4,-2),
$$

$$
v_3=(6,2,-6,1,1),\qquad v_4=(3,1,-2,-1,2),\qquad v_5=(3,1,6,-7,7).
$$

**d)** $C(M)\subseteq\mathbb R^5$, el espacio columna de la matriz $M$ cuyas **filas** son los vectores de c), en ese orden.

> [!resolucion]- Resolución
> **a) Soluciones de ecuaciones.** La matriz de coeficientes es
>
> $$
> H=\begin{pmatrix}1&1&0&2\\2&1&1&2\\2&3&-1&6\\-1&0&-1&0\end{pmatrix}.
> $$
>
> Buscamos los vectores que $H$ envía a cero. Aplicando $F_2\leftarrow F_2-2F_1$, $F_3\leftarrow F_3-2F_1$ y $F_4\leftarrow F_4+F_1$ se obtiene
>
> $$
> H\sim\begin{pmatrix}1&1&0&2\\0&-1&1&-2\\0&1&-1&2\\0&1&-1&2\end{pmatrix}.
> $$
>
> Las últimas dos filas son opuestas de la segunda. Eliminarlas, cambiar el signo de la segunda y restarla de la primera produce
>
> $$
> \operatorname{rref}(H)=\begin{pmatrix}1&0&1&0\\0&1&-1&2\\0&0&0&0\\0&0&0&0\end{pmatrix}.
> $$
>
> Por tanto, $x=-z$ y $y=z-2w$. Con $z=s,w=t$ libres,
>
> $$
> (x,y,z,w)=s(-1,1,1,0)+t(0,-2,0,1).
> $$
>
> Las operaciones son reversibles, así que la parametrización describe exactamente todas las soluciones. Los dos generadores satisfacen las ecuaciones originales y son independientes: las coordenadas tercera y cuarta de una combinación nula fuerzan $s=t=0$. Así,
>
> $$
> B_{V_1}=\{(-1,1,1,0),(0,-2,0,1)\},\qquad\dim V_1=2.
> $$
>
> **b) Espacio columna de $H$.** La expresión del enunciado es $H(x,y,z,w)^T$. En a) se buscaban entradas que produjeran cero; ahora se buscan todas las salidas que puede producir $H$. Éstas forman su espacio columna. La reducción de a) tiene pivotes en las columnas $1,2$, así que tomamos esas columnas de la matriz original:[^gauss]
>
> $$
> B_{V_2}=\{(1,2,2,-1),(1,1,3,0)\},\qquad\dim V_2=2.
> $$
>
> Para comprobar directamente que generan, llamemos $c_1,\ldots,c_4$ a las columnas de $H$. Se cumple
>
> $$
> c_3=c_1-c_2,\qquad c_4=2c_2.
> $$
>
> Además, $ac_1+bc_2=0$ obliga a $a=0$ por la cuarta coordenada y después a $b=0$ por la primera. Se han probado generación e independencia.
>
> **c) Generado por los cinco vectores.** Las relaciones
>
> $$
> v_2=-\frac23v_1,\qquad v_4=\frac13v_1+v_3
> $$
>
> muestran que $V_3=\langle v_1,v_3,v_5\rangle$. Para comprobar que esta familia es independiente, una relación $av_1+bv_3+cv_5=0$ implica, por las coordenadas primera, tercera y cuarta,
>
> $$
> -9a+6b+3c=0,\qquad12a-6b+6c=0,\qquad-6a+b-7c=0.
> $$
>
> La primera da $b=(3a-c)/2$. En la segunda queda $3a+9c=0$, luego $a=-3c$ y $b=-5c$. La tercera se convierte en $18c-5c-7c=6c=0$. De ahí $a=b=c=0$. Por tanto,
>
> $$
> B_{V_3}=\{v_1,v_3,v_5\},\qquad\dim V_3=3.
> $$
>
> **d) Espacio columna de $M$.** Escribimos los cinco vectores del enunciado como filas:
>
> $$
> M=\begin{pmatrix}
> -9&-3&12&-6&3\\6&2&-8&4&-2\\6&2&-6&1&1\\3&1&-2&-1&2\\3&1&6&-7&7
> \end{pmatrix}.
> $$
>
> La eliminación por filas da
>
> $$
> \operatorname{rref}(M)=\begin{pmatrix}
> 1&1/3&0&0&1/9\\0&0&1&0&-1/4\\0&0&0&1&-7/6\\0&0&0&0&0\\0&0&0&0&0
> \end{pmatrix}.
> $$
>
> Los pivotes están en las columnas $1,3,4$. Por tanto, una base de $C(M)$ se obtiene de las columnas originales con esos índices:
>
> $$
> B_{C(M)}=\{(-9,6,6,3,3),(12,-8,-6,-2,6),(-6,4,1,-1,-7)\},
> \qquad\dim C(M)=3.
> $$
>
> También se comprueba sin repetir la reducción. Si $m_j$ denota la columna $j$ de $M$, se tiene
>
> $$
> m_2=\frac13m_1,\qquad m_5=\frac19m_1-\frac14m_3-\frac76m_4.
> $$
>
> Así, las tres elegidas generan todas las columnas. Su menor formado por las filas $1,3,5$ vale $-108\ne0$, lo que prueba independencia. En c) se extrajo una base de los vectores **fila**; en d) se pide una base de los vectores **columna**. La igualdad de dimensiones no identifica ambos subespacios.[^gauss]

> [!recuerda]- Comprobación
> Multiplica $H$ por cada vector de $B_{V_1}$ y comprueba que el resultado es cero. En b), verifica las cuatro coordenadas de $c_3=c_1-c_2$ y $c_4=2c_2$. En c), reconstruye $v_2$ y $v_4$ con las combinaciones dadas; en d), reconstruye $m_2$ y $m_5$. Comprueba después los menores que prueban la independencia de las familias conservadas. Los vectores de c) se leen en las filas de $M$ y los de d), en sus columnas.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - núcleo
---
> [!note] Pregunta
> ¿Qué se parametriza para hallar una base del conjunto $\{x\in K^n:Ax=0\}$?
===
> [!important] Respuesta
> Todas las soluciones del sistema homogéneo. Se asigna un parámetro a cada variable libre y se separan sus vectores coeficientes; éstos forman una base del núcleo.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - imagen
---
> [!note] Pregunta
> ¿Por qué $\{Ax:x\in K^n\}$ es el espacio columna de $A\in M_{m\times n}(K)$?
===
> [!important] Respuesta
> Porque $Ax$ es la combinación de las columnas de $A$ con coeficientes las entradas de $x$. Al variar $x$ se obtienen exactamente todas sus combinaciones lineales, en $K^m$.
```

## Coordenadas de matrices y bases de funciones

### Ejercicio 85 · Fijar el orden antes de calcular coordenadas 🤖

#### Enunciado

Sea $F=\langle A_1,A_2,A_3,A_4\rangle\subseteq M_2(\mathbb R)$, donde[^85]

$$
A_1=\begin{pmatrix}1&0\\0&0\end{pmatrix},\qquad
A_2=\begin{pmatrix}1&-1\\1&0\end{pmatrix},
$$

$$
A_3=\begin{pmatrix}1&1\\-1&0\end{pmatrix},\qquad
A_4=\begin{pmatrix}1&1\\1&0\end{pmatrix}.
$$

Determina **a)** una base de $F$; **b)** las coordenadas, respecto de la base elegida en a), de

$$
A=\begin{pmatrix}2&-2\\4&0\end{pmatrix}.
$$

> [!resolucion]- Resolución
> **a)** La igualdad $A_3=2A_1-A_2$ permite eliminar $A_3$ sin cambiar $F$. Para estudiar la independencia de $A_1,A_2,A_4$, sea
>
> $$
> rA_1+sA_2+tA_4=\begin{pmatrix}r+s+t&-s+t\\s+t&0\end{pmatrix}=0_{2\times2}.
> $$
>
> Las entradas $(1,2)$ y $(2,1)$ dan $-s+t=0$ y $s+t=0$. Sumarlas produce $2t=0$; entonces $s=0$ y la entrada $(1,1)$ da $r=0$. La familia es independiente y genera $F$. Fijamos la base **ordenada**
>
> $$
> B=(A_1,A_2,A_4),\qquad\dim F=3.
> $$
>
> **b)** Las [[Matemáticas/Álgebra lineal/Espacios vectoriales/06 Coordenadas y cambio de base|coordenadas respecto de $B$]] son los coeficientes $r,s,t$ que reconstruyen $A$ en ese orden.[^coordenadas] Comparamos las entradas $(1,1),(1,2),(2,1)$; la entrada $(2,2)$ ya es cero en ambos miembros:
>
> $$
> r+s+t=2,\qquad-s+t=-2,\qquad s+t=4.
> $$
>
> Las dos últimas dan $2t=2$, luego $t=1,s=3$; la primera da $r=-2$. Por tanto,
>
> $$
> \boxed{[A]_B=\begin{pmatrix}-2\\3\\1\end{pmatrix}.}
> $$

> [!recuerda]- Comprobación
> Reconstruye la matriz entera:
>
> $$
> -2A_1+3A_2+A_4
> =\begin{pmatrix}-2+3+1&-3+1\\3+1&0\end{pmatrix}
> =\begin{pmatrix}2&-2\\4&0\end{pmatrix}=A.
> $$
>
> Cambiar el orden de $B$ cambia el orden de los tres coeficientes, aunque la matriz $A$ sea la misma.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - coordenadas
---
> [!note] Pregunta
> ¿Cómo se calculan y se comprueban las coordenadas de una matriz $A$ en una base ordenada $(B_1,\ldots,B_r)$?
===
> [!important] Respuesta
> Se resuelve $A=c_1B_1+\cdots+c_rB_r$ por igualdad de entradas. La columna $(c_1,\ldots,c_r)^T$ respeta ese orden y se comprueba reconstruyendo todas las entradas de $A$.
```

### Ejercicio 86 · Identidades que reducen una familia de funciones 🤖

#### Enunciado

Determina una base de cada subespacio del espacio vectorial real $\mathcal F(\mathbb R)$, cuyas operaciones se realizan punto a punto.[^86]

**a)** $F=\langle f_1,f_2,f_3,f_4\rangle$, con funciones $\mathbb R\to\mathbb R$ dadas, para todo real $x$, por

$$
f_1(x)=1,\qquad f_2(x)=x,\qquad f_3(x)=\cos x,\qquad
f_4(x)=\cos^2\!\left(\frac x2\right).
$$

**b)** $G=\langle g_1,g_2,g_3\rangle$, con funciones $\mathbb R\to\mathbb R$ dadas por

$$
g_1(x)=\cos^2x-\sin^2x,\qquad
 g_2(x)=\cos(2x)-3\sin x,\qquad g_3(x)=\sin x
$$

para todo real $x$.

> [!resolucion]- Resolución
> **a) Generación.** La identidad de ángulo doble $\cos(2u)=2\cos^2u-1$, aplicada a $u=x/2$, da[^trigonometria]
>
> $$
> f_4(x)=\frac{1+\cos x}{2}=\frac12f_1(x)+\frac12f_3(x)
> \qquad(\forall x\in\mathbb R).
> $$
>
> Por tanto, eliminar $f_4$ conserva $F$ y las funciones $1,x,\cos x$ generan todo el subespacio.
>
> **Independencia.** Supongamos que $a,b,c\in\mathbb R$ satisfacen
>
> $$
> a+bx+c\cos x=0\qquad\text{para todo }x\in\mathbb R.
> $$
>
> Al ser una identidad, debe cumplirse en $x=0,\pi,-\pi$. Se obtiene
>
> $$
> a+c=0,\qquad a+b\pi-c=0,\qquad a-b\pi-c=0.
> $$
>
> Restar las dos últimas da $2\pi b=0$, luego $b=0$. Entonces $a-c=0$; junto con $a+c=0$ implica $a=c=0$. Queda probada la independencia. Una base es $B_F=(1,x,\cos x)$ y $\dim F=3$.
>
> **b) Generación.** La identidad $\cos^2x-\sin^2x=\cos(2x)$ da $g_1(x)=\cos(2x)$ y $g_2=g_1-3g_3$ en todo $\mathbb R$.[^trigonometria] Por ello $G=\langle g_1,g_3\rangle$.
>
> **Independencia.** Si $ag_1+bg_3$ es la función cero, entonces
>
> $$
> a\cos(2x)+b\sin x=0\qquad\text{para todo }x\in\mathbb R.
> $$
>
> En $x=0$ se obtiene $a=0$; en $x=\pi/2$, $-a+b=0$, luego $b=0$. Por tanto, $B_G=(g_1,g_3)$ es base y $\dim G=2$.
>
> En ambas pruebas de independencia se supone una igualdad válida para todo real y se eligen puntos que obligan a anular sus coeficientes. Para la generación, las identidades trigonométricas justifican las relaciones entre funciones en todo el dominio.

> [!recuerda]- Comprobación
> Sustituye $x=0$ y $x=\pi$ en la relación de $f_4$: se obtienen respectivamente $1=(1+1)/2$ y $0=(1-1)/2$. Después vuelve a deducirla del ángulo doble, que prueba su validez global. Para b), desarrolla $g_1-3g_3$ y comprueba que coincide con la definición de $g_2$ para cualquier $x$.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - funciones
  - independencia-lineal
---
> [!note] Pregunta
> ¿Cómo pueden usarse unos pocos puntos para demostrar que unas funciones son linealmente independientes?
===
> [!important] Respuesta
> Se supone que una combinación es cero en todo el dominio y se eligen puntos cuyas ecuaciones obliguen a que todos los coeficientes sean cero. Comprobar una relación propuesta sólo en esos puntos no demuestra que valga en todo el dominio.
```

## El cuerpo y las operaciones también determinan la base

### Ejercicio 87 · Los mismos complejos con escalares distintos 🤖

#### Enunciado

Indica una base y la dimensión de:[^87]

**a)** $\mathbb C$ como espacio vectorial complejo.

**b)** $\mathbb C$ como espacio vectorial real.

**c)** $\mathbb C^3$ como espacio vectorial complejo.

**d)** $\mathbb C^3$ como espacio vectorial real.

> [!resolucion]- Resolución
> El cuerpo fija qué coeficientes se pueden usar en una combinación. Cuando los coeficientes son reales, las partes real e imaginaria necesitan coeficientes separados.[^bases]
>
> **a) $\mathbb C$ sobre $\mathbb C$.** Todo $z\in\mathbb C$ se escribe $z=z\cdot1$, con un coeficiente complejo permitido. Si $\alpha\cdot1=0$, entonces $\alpha=0$. Así, $B=\{1\}$ es base y $\dim_{\mathbb C}\mathbb C=1$.
>
> **b) $\mathbb C$ sobre $\mathbb R$.** Todo complejo admite una escritura única $z=a+bi$ con $a,b\in\mathbb R$. Esto prueba que $\{1,i\}$ genera. Si $a+bi=0$, las partes real e imaginaria son ambas nulas, luego $a=b=0$. Por tanto,
>
> $$
> B=\{1,i\},\qquad\dim_{\mathbb R}\mathbb C=2.
> $$
>
> **c) $\mathbb C^3$ sobre $\mathbb C$.** Sean $e_1=(1,0,0)$, $e_2=(0,1,0)$ y $e_3=(0,0,1)$. Cada terna satisface
>
> $$
> (z_1,z_2,z_3)=z_1e_1+z_2e_2+z_3e_3,\qquad z_j\in\mathbb C.
> $$
>
> En una combinación nula, cada coordenada obliga a que su coeficiente complejo sea cero. Luego $B=\{e_1,e_2,e_3\}$ es base y $\dim_{\mathbb C}\mathbb C^3=3$.
>
> **d) $\mathbb C^3$ sobre $\mathbb R$.** Escribimos $z_j=a_j+b_ji$, con $a_j,b_j\in\mathbb R$. Entonces
>
> $$
> (z_1,z_2,z_3)=a_1e_1+b_1(ie_1)+a_2e_2+b_2(ie_2)+a_3e_3+b_3(ie_3).
> $$
>
> Los seis vectores generan usando coeficientes reales. Si la combinación es nula, cada coordenada compleja $a_j+b_ji$ es cero; comparar sus partes real e imaginaria obliga a los seis coeficientes a cero. Así,
>
> $$
> B=\{e_1,ie_1,e_2,ie_2,e_3,ie_3\},\qquad\dim_{\mathbb R}\mathbb C^3=6.
> $$

> [!recuerda]- Comprobación
> La terna $(1+i,2-i,3i)$ tiene coordenadas complejas $(1+i,2-i,3i)$ en la base de c), y coordenadas reales $(1,1,2,-1,0,3)$ en el orden de d). Reconstruir ambas produce la misma terna. En b), el conjunto $\{1\}$ no genera $i$ con coeficientes reales.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - cuerpo
  - dimensión
---
> [!note] Pregunta
> ¿Por qué $\mathbb C^n$ tiene dimensión $n$ sobre $\mathbb C$ y $2n$ sobre $\mathbb R$?
===
> [!important] Respuesta
> Sobre $\mathbb C$ basta un vector canónico por coordenada. Sobre $\mathbb R$, cada coordenada compleja requiere dos coeficientes reales; una base es $\{e_1,ie_1,\ldots,e_n,ie_n\}$.
```

### Ejercicio 88 · Una base cuando la suma es un producto 🤖

#### Enunciado

Indica una base y la dimensión del espacio vectorial real $\mathbb R^+$ definido en el [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/ejercicios/01 Axiomas y subespacios — ejercicios 59–65#Ejercicio 59 · Comprobar las operaciones dadas 🤖|ejercicio 59 a)]].[^88] Sus operaciones son

$$
x\oplus y=xy,\qquad\alpha\otimes x=x^\alpha
\quad(x,y>0,\ \alpha\in\mathbb R),
$$

y su vector cero es el número $1$.

> [!resolucion]- Resolución
> Llamamos $V$ a este espacio con las operaciones indicadas. Una combinación de un único vector positivo $b$ es $\alpha\otimes b=b^\alpha$. Elegimos $b=e$, donde $e$ es la base del logaritmo natural.
>
> **Generación.** Para todo $x>0$, existe el real $\ln x$ y la relación inversa entre exponencial y logaritmo da[^logaritmos]
>
> $$
> (\ln x)\otimes e=e^{\ln x}=x.
> $$
>
> Por tanto, $\{e\}$ genera todos los vectores del espacio.
>
> **Independencia.** Una relación homogénea de esta familia es
>
> $$
> \alpha\otimes e=0_V
> \quad\Longleftrightarrow\quad e^\alpha=1.
> $$
>
> Aplicando $\ln$ a ambos miembros se obtiene $\alpha=\ln1=0$. La única relación nula tiene coeficiente cero; $\{e\}$ es independiente. Concluimos
>
> $$
> \boxed{B=\{e\},\qquad\dim_{\mathbb R}V=1.}
> $$
>
> También sirve cualquier $\{b\}$ con $b>0$ y $b\ne1$: cada $x>0$ se escribe $x=b^{\ln x/\ln b}$, y $b^\alpha=1$ implica $\alpha\ln b=0$, luego $\alpha=0$. El valor $b=1$ queda excluido porque es el vector cero y todas sus potencias son $1$.

> [!recuerda]- Comprobación
> Para $x=e^2$, el coeficiente en la base $\{e\}$ es $2$, pues $2\otimes e=e^2$. La suma de los vectores $e^2$ y $e^3$ es $e^2\oplus e^3=e^5$: sus coordenadas $2$ y $3$ se suman a $5$. La coordenada del vector cero $1$ es $0$, porque $0\otimes e=e^0=1$.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - operaciones
  - bases
---
> [!note] Pregunta
> En $\mathbb R^+$, con $x\oplus y=xy$ y $\alpha\otimes x=x^\alpha$ para $x,y>0$ y $\alpha\in\mathbb R$, ¿cómo se comprueba que un vector $b>0$ forma una familia independiente?
===
> [!important] Respuesta
> $b^\alpha=1\Rightarrow\alpha=0$, porque $1$ es el vector cero. Se cumple para $b>0$, $b\ne1$; con $b=1$, la familia contiene al vector cero y es dependiente.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - coordenadas
  - logaritmos
---
> [!note] Pregunta
> En $\mathbb R^+$ con $x\oplus y=xy$ y $\alpha\otimes x=x^\alpha$, ¿qué coordenada tiene $x>0$ en la base ordenada $B=(b)$, con $b>0$ y $b\ne1$?
===
> [!important] Respuesta
> $\ln x/\ln b$, porque $x=b^{\ln x/\ln b}$. En particular, en la base $(e)$ la coordenada es $\ln x$.
```

Las familias del [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/ejercicios/02 Combinaciones lineales y espacio generado — ejercicios 66–77|estudio de combinaciones lineales]] se reducen a bases al eliminar sus vectores redundantes. Los [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/ejercicios/04 Dimensión, intersección y suma — ejercicios 89–90|ejercicios 89–90]] plantean dos preguntas que aprovechan esas bases: cómo cambia la dimensión al variar un parámetro y cómo obtener bases y dimensiones de la intersección y de la suma de dos subespacios.

## 📚 Fuentes

- FCUL, *ALGA 2026/2027 — Exercícios: Enunciados para as aulas teórico-práticas*, fascículo 1–90, pp. 20–22, ejercicios 78–88. Los datos a los que remiten 80–82 y 88 corresponden a 61, 62, 64 y 59 a), respectivamente.
- [[Matemáticas/Álgebra lineal/Espacios vectoriales/04 Dependencia e independencia lineal|Dependencia e independencia lineal]]: relaciones homogéneas, eliminación de un vector redundante y criterio matricial.
- [[Matemáticas/Álgebra lineal/Espacios vectoriales/05 Bases y dimensión|Bases y dimensión]]: generación e independencia, cardinal de una base y dependencia respecto del cuerpo.
- [[Matemáticas/Álgebra lineal/Espacios vectoriales/06 Coordenadas y cambio de base|Coordenadas y cambio de base]]: coeficientes en una base ordenada y reconstrucción del vector.
- [[Matemáticas/Álgebra lineal/Espacios vectoriales/07 Núcleo, imagen, rango y nulidad#Cálculo con eliminación de Gauss|Cálculo con eliminación de Gauss]]: rango, bases del núcleo, filas no nulas y selección de columnas originales.
- [[Matemáticas/Preuniversitario/1 Bachillerato/05 Trigonometría/04 Identidades y ecuaciones trigonométricas — ampliación|Identidades y ecuaciones trigonométricas]], apartados 2–3: coseno del ángulo doble y del medio ángulo.
- [[Matemáticas/Preuniversitario/1 Bachillerato/10 Funciones elementales/04 Logaritmos y función exponencial|Logaritmos y función exponencial]]: equivalencia exponencial, dominio e inversa logarítmica.

[^78]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, fascículo 1–90, p. 20 (a–e) y p. 21 (f–j), ejercicio 78. En f), la tercera coordenada del tercer vector es $8$; en j), el segundo polinomio es la constante $5$.
[^79]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 21, ejercicio 79, apartados a–b; se exigen expresamente ambos métodos, por filas y por columnas.
[^80]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 21, ejercicio 80, con remisión al ejercicio 61 (p. 16).
[^81]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 21, ejercicio 81, con remisión al ejercicio 62 (p. 16).
[^82]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 21, ejercicio 82, con remisión al ejercicio 64 (p. 17).
[^83]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 21, ejercicio 83, apartados a–e.
[^84]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 21 (a–c) y p. 22 (d), ejercicio 84. En d), $C(M)$ denota el espacio columna y los vectores de c) son las filas de $M$.
[^85]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 22, ejercicio 85, apartados a–b.
[^86]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 22, ejercicio 86, apartados a–b. En a), $f_4(x)=\cos^2(x/2)$.
[^87]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 22, ejercicio 87, apartados a–d.
[^88]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 22, ejercicio 88; operaciones definidas en 59 a), p. 15.
[^independencia]: Premisas consultadas en *Dependencia e independencia lineal*: definición mediante una relación homogénea, redundancia equivalente a dependencia, criterio de columnas y determinante en el caso cuadrado. Las relaciones y cálculos concretos de las resoluciones son propios.
[^bases]: Premisas consultadas en *Bases y dimensión*: una base genera y es independiente; su cardinal define la dimensión; en dimensión $n$, una familia de $n$ vectores es base si genera o si es independiente; las combinaciones emplean los escalares del cuerpo fijado.
[^gauss]: Premisas consultadas en *Núcleo, imagen, rango y nulidad*, apartado «Cálculo con eliminación de Gauss»: las operaciones elementales por filas conservan el espacio fila y las relaciones de dependencia entre columnas. Las filas no nulas de una forma escalonada son una base del espacio fila; para el espacio columna se conservan las columnas originales que corresponden a pivotes.
[^coordenadas]: Premisas consultadas en *Coordenadas y cambio de base*: coordenadas como coeficientes únicos de una combinación en una base ordenada y comprobación por reconstrucción.
[^trigonometria]: Premisas consultadas en *Identidades y ecuaciones trigonométricas*, apartados «Suma y diferencia de ángulos» y «Ángulo doble y ángulo mitad»: $\cos(2u)=2\cos^2u-1=\cos^2u-\sin^2u$ para todo $u\in\mathbb R$.
[^logaritmos]: Premisas consultadas en *Logaritmos y función exponencial*, «Definición formal y mapa de subapartados» y «Propiedades y cambio de base»: $\log_bx=\alpha\iff b^\alpha=x$ para $b>0$, $b\ne1$, $x>0$; $\ln(e^\alpha)=\alpha$ y $e^{\ln x}=x$.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como profesor de Álgebra Lineal de primer curso. Trabaja una pregunta cada vez de los ejercicios 78–88, espera mi intento y distingue errores de transcripción, cálculo y justificación. Permite corregir la primera inferencia errónea antes de mostrar el resto; adapta la dificultad y recupera los procedimientos mediante repetición espaciada.

Una familia es independiente si toda combinación igual al vector cero tiene todos sus coeficientes nulos; una base debe además generar el espacio pedido. Exige una relación concreta al afirmar dependencia y pide justificar por qué eliminar ese vector conserva el espacio generado. Para extraer bases por Gauss, distingue las filas no nulas de la reducida de las columnas pivote de la matriz original.

En matrices y polinomios compara todas las entradas o coeficientes; en funciones, las relaciones deben valer para todo punto. Si se usan evaluaciones para probar independencia, pide explicar cómo obligan a anular los coeficientes. Para calcular coordenadas, fija primero el orden de la base y reconstruye el objeto con el resultado.

En $\mathbb C$ y $\mathbb C^3$, pide indicar el cuerpo de escalares. En $\mathbb R^+$ con $x\oplus y=xy$ y $\alpha\otimes x=x^\alpha$, recuerda que el vector cero es $1$ y pide demostrar generación e independencia de $\{e\}$ mediante logaritmos. No reveles la solución antes de mi intento.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
