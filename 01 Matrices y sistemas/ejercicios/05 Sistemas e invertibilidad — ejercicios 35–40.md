---
title: Ejercicios 35–40 — sistemas e invertibilidad
asignatura: Álgebra Lineal y Geometría Analítica
capa: curricular
tipo:
  - ejercicios
  - preparatoria
nivel: universitario-introductorio
estado: revisado
fsrs_goal: Clasifica sistemas con dos parámetros sin dividir por posibles ceros, reconstruye sus familias de soluciones y justifica la invertibilidad de matrices triangulares y complejas.
tags:
  - matematicas
  - algebra-lineal
  - sistemas-lineales
  - matrices
  - ejercicios
  - fcul
---

# Sistemas e invertibilidad · ejercicios 35–40

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

Una ecuación que contiene parámetros puede perder un pivote para ciertos valores. La [[Matemáticas/Álgebra lineal/Eliminación de Gauss-Jordan|eliminación de Gauss–Jordan]] permite separar esos valores antes de dividir y distinguir una variable libre de una ecuación imposible. El [[Matemáticas/Álgebra lineal/Teorema de Rouché-Capelli|criterio de compatibilidad por rangos]] y la [[Matemáticas/Álgebra lineal/Matriz inversa|invertibilidad]] dan dos lecturas de esa misma reducción.[^teoria]

> [!tip] Procedencia de las respuestas
> 📘🤖 señala una respuesta parcialmente contrastada con la ficha de soluciones; 🤖, una resolución propia. Las comprobaciones son independientes del desarrollo principal y pueden repetirse con el enunciado.

## Discusión y construcción de sistemas

### Ejercicio 35 · Dos parámetros y sistema homogéneo 📘🤖

#### Enunciado

Para cada $a,b\in\mathbb R$, considera el sistema en las incógnitas $x,y,z$:[^35]

$$
(S_{a,b}):\quad
\begin{cases}
-x+ay+bz=b,\\
x-y+z=2,\\
x-ay+z=1.
\end{cases}
$$

**a)** Discute el sistema según $a$ y $b$. **b)** Indica para qué valores el sistema homogéneo asociado tiene una solución no nula. **c)** Indica para qué valores su matriz de coeficientes es invertible. **d)** Resuelve $S_{-3,-1}$ por Gauss–Jordan.

> [!resolucion]- Resolución
> **a) Separar los valores que anulan los coeficientes decisivos.** Restar la tercera ecuación de la segunda y sumar la primera con la tercera da, respectivamente,
>
> $$
> (a-1)y=1,\qquad (b+1)z=b+1.
> $$
>
> Conservando la tercera ecuación, estas dos combinaciones forman un sistema equivalente al original: de ellas se recuperan la primera y la segunda. La ecuación restante es $x-ay+z=1$.
>
> Si **$a=1$**, aparece $0=1$. El sistema es **incompatible para todo $b$**. Esta conclusión se toma antes de estudiar $b$.
>
> Supongamos **$a\ne1$**. Entonces $y=1/(a-1)$.
>
> - Si **$b\ne-1$**, la segunda igualdad permite dividir por $b+1$ y obtener $z=1$. La tercera determina $x=a/(a-1)$. Hay una única solución:
>
> $$
> (x,y,z)=\left(\frac a{a-1},\frac1{a-1},1\right).
> $$
>
> - Si **$b=-1$**, la ecuación de $z$ se convierte en $0=0$. Escribiendo $z=t$, queda una familia con un parámetro libre:
>
> $$
> (x,y,z)=\left(\frac{2a-1}{a-1}-t,\frac1{a-1},t\right),
> \qquad t\in\mathbb R.
> $$
>
> Por tanto, el sistema es compatible determinado si $a\ne1$ y $b\ne-1$; compatible indeterminado de grado $1$ si $a\ne1$ y $b=-1$; e incompatible si $a=1$. El caso $a=1,b=-1$ pertenece a la última categoría, pues sigue conteniendo $0=1$.
>
> **b) Homogéneo asociado.** Al sustituir los términos independientes por cero, las mismas operaciones producen
>
> $$
> (a-1)y=0,\qquad (b+1)z=0,\qquad x-ay+z=0.
> $$
>
> Si $a\ne1$ y $b\ne-1$, fuerzan $y=z=x=0$. Si $a=1$, el vector $(1,1,0)$ es una solución no nula, para cualquier $b$. Si $b=-1$, el vector $(-1,0,1)$ lo es, para cualquier $a$. Así,
>
> $$
> \boxed{\text{Hay solución homogénea no nula}\iff a=1\ \text{o}\ b=-1.}
> $$
>
> Un sistema homogéneo siempre admite la solución cero; no puede ser incompatible. La anotación de la ficha rotulada «35 b)» no corresponde a esta pregunta.[^sol35]
>
> **c)** Una matriz cuadrada es invertible exactamente cuando su sistema homogéneo sólo tiene la solución cero. Por b),
>
> $$
> \boxed{A_{a,b}\text{ es invertible}\iff a\ne1\ \text{y}\ b\ne-1.}
> $$
>
> **d) Gauss–Jordan para $a=-3,b=-1$.** Partimos de
>
> $$
> \left[\begin{array}{rrr|r}-1&-3&-1&-1\\1&-1&1&2\\1&3&1&1\end{array}\right].
> $$
>
> Intercambiamos $R_1$ y $R_3$; después hacemos $R_2\leftarrow R_2-R_1$ y $R_3\leftarrow R_3+R_1$:
>
> $$
> \left[\begin{array}{rrr|r}1&3&1&1\\0&-4&0&1\\0&0&0&0\end{array}\right].
> $$
>
> Con $R_2\leftarrow-\frac14R_2$ y $R_1\leftarrow R_1-3R_2$, la forma reducida es
>
> $$
> \left[\begin{array}{rrr|r}1&0&1&7/4\\0&1&0&-1/4\\0&0&0&0\end{array}\right].
> $$
>
> Luego $(x,y,z)=(7/4-t,-1/4,t)$, con $t\in\mathbb R$.

> [!recuerda]- Comprobación
> En el caso determinado, sustituye $x=a/(a-1)$, $y=1/(a-1)$ y $z=1$: los tres miembros izquierdos resultan $b,2,1$. Para $b=-1$, sustituye la familia con $t$ y obtendrás $-1,2,1$ independientemente de $t$. En d), esta sustitución produce también $(-1,2,1)$.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - sistemas-lineales
---
> [!note] Pregunta
> ¿Cómo se trata una ecuación $c(a)y=d(a)$ al discutir un sistema con parámetros?
===
> [!important] Respuesta
> Se separan $c(a)\ne0$, donde se puede dividir, y $c(a)=0$: si $d(a)\ne0$ hay contradicción; si $d(a)=0$, esa ecuación no impone restricción.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - sistemas-lineales
---
> [!note] Pregunta
> Para una matriz cuadrada $A$, ¿cuándo tiene $AX=0$ una solución no nula?
===
> [!important] Respuesta
> Exactamente cuando $A$ no es invertible, o equivalentemente cuando su rango es menor que su orden. El sistema homogéneo siempre es compatible.
```

### Ejercicio 36 · Una solución particular y todas las restantes 📘🤖

#### Enunciado

Sean[^36]

$$
A=\begin{pmatrix}1&2&2&-1\\2&4&-2&2\\0&0&6&-4\end{pmatrix},
\qquad B=\begin{pmatrix}-1\\4\\-6\end{pmatrix}.
$$

Considera $AX=B$ en $x_1,x_2,x_3,x_4$.

**a)** Sin resolverlo, comprueba que $(2,0,-3,-3)$ es solución y $(2,0,0,-3)$ no lo es. **b)** Resuelve el homogéneo asociado por Gauss–Jordan. **c)** Da la solución general de $AX=B$. **d)** Da dos soluciones distintas de la de a).

> [!resolucion]- Resolución
> **a)** Basta evaluar los dos productos, sin calcular incógnitas:
>
> $$
> A\begin{pmatrix}2\\0\\-3\\-3\end{pmatrix}
> =\begin{pmatrix}2-6+3\\4+6-6\\-18+12\end{pmatrix}
> =B,
> \qquad
> A\begin{pmatrix}2\\0\\0\\-3\end{pmatrix}
> =\begin{pmatrix}5\\-2\\12\end{pmatrix}\ne B.
> $$
>
> **b)** En $[A\mid0]$, hacemos $R_2\leftarrow R_2-2R_1$, y después $R_3\leftarrow R_3+R_2$:
>
> $$
> \left[\begin{array}{rrrr|r}1&2&2&-1&0\\0&0&-6&4&0\\0&0&0&0&0\end{array}\right].
> $$
>
> Escalar $R_2$ por $-1/6$ y hacer $R_1\leftarrow R_1-2R_2$ da
>
> $$
> \left[\begin{array}{rrrr|r}1&2&0&1/3&0\\0&0&1&-2/3&0\\0&0&0&0&0\end{array}\right].
> $$
>
> Son libres $x_2=s$ y $x_4=t$. Por ello,
>
> $$
> X_h=\begin{pmatrix}-2s-t/3\\s\\2t/3\\t\end{pmatrix},
> \qquad s,t\in\mathbb R.
> $$
>
> **c)** Si $P=(2,0,-3,-3)^T$, entonces $A(P+X_h)=AP+AX_h=B$. Recíprocamente, cualquier solución $X$ satisface $A(X-P)=0$, por lo que toda solución se obtiene así:
>
> $$
> \boxed{X=\begin{pmatrix}2-2s-t/3\\s\\-3+2t/3\\-3+t\end{pmatrix},
> \quad s,t\in\mathbb R.}
> $$
>
> **d)** Con $(s,t)=(1,0)$ se obtiene $(0,1,-3,-3)$; con $(s,t)=(0,3)$, $(1,0,-1,0)$. Son distintas entre sí y de $P$.

> [!recuerda]- Comprobación
> Multiplica $A$ por los dos vectores directores $(-2,1,0,0)^T$ y $(-1/3,0,2/3,1)^T$: ambos productos son cero. Las dos soluciones de d) producen, cada una, $(-1,4,-6)^T$.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - sistemas-lineales
---
> [!note] Pregunta
> Conocida una solución particular $P$ de $AX=B$, ¿cómo se describen todas las soluciones?
===
> [!important] Respuesta
> Son $P+X_h$, donde $X_h$ recorre todas las soluciones de $AX_h=0$: sumar una solución homogénea conserva el término independiente, y toda diferencia $X-P$ es homogénea.
```

### Ejercicio 37 · Construir el término independiente 🤖

#### Enunciado

Considera el sistema homogéneo[^37]

$$
(S):\quad\begin{cases}
x+2y-2z-w=0,\\2x+y-z+4w=0,\\-x-y+z-w=0.
\end{cases}
$$

Indica un sistema cuyo homogéneo asociado sea $(S)$ y que admita la solución $(2,-1,0,-1)$.

> [!resolucion]- Resolución
> El homogéneo asociado conserva todos los coeficientes. Sólo pueden cambiar los miembros derechos. Para que el vector propuesto sea solución, éstos deben ser los valores de los miembros izquierdos en ese vector:
>
> $$
> 2-2+0+1=1,\qquad4-1-0-4=-1,\qquad-2+1+0+1=0.
> $$
>
> Por tanto, sirve el sistema
>
> $$
> \boxed{\begin{cases}x+2y-2z-w=1,\\2x+y-z+4w=-1,\\-x-y+z-w=0.\end{cases}}
> $$
>
> Con los miembros izquierdos fijados, esos tres términos independientes están determinados de forma única por la solución exigida.

> [!recuerda]- Comprobación
> Sustituir cero en los miembros derechos recupera exactamente $(S)$. Sustituir $(2,-1,0,-1)$ en el nuevo sistema satisface sus tres ecuaciones.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - sistemas-lineales
---
> [!note] Pregunta
> Fijada una matriz de coeficientes $A$, ¿qué término independiente hace que $P$ sea solución?
===
> [!important] Respuesta
> Necesariamente $B=AP$; el sistema buscado es $AX=AP$.
```

### Ejercicio 38 · Comparar parametrizaciones 🤖

#### Enunciado

Un sistema real en $x,y,z,w$ tiene por solución general[^38]

$$
(x,y,z,w)=P+\alpha u+\beta v,\qquad\alpha,\beta\in\mathbb R,
$$

con $P=(2,1,-1,0)$, $u=(1,3,0,1)$ y $v=(1,0,0,1)$.

**a)** Justifica que no es homogéneo. **b)** Decide si se obtiene la misma solución general al conservar $u,v$ y sustituir $P$ por **i)** $(3,1,-1,1)$, **ii)** $(1,4,-1,-1)$ o **iii)** $(3,1,-1,0)$. **c)** Justifica que

$$
(x,y,z,w)=P+\alpha(3,4,-1,1)+\beta v,\qquad\alpha,\beta\in\mathbb R,
$$

no es una solución general del sistema.

> [!resolucion]- Resolución
> En la familia original se cumple
>
> $$
> x=2+\alpha+\beta,\quad y=1+3\alpha,\quad z=-1,\quad w=\alpha+\beta.
> $$
>
> Por tanto, todos sus elementos satisfacen $z=-1$ y $x-w=2$. Recíprocamente, si se cumplen esas dos igualdades, se recuperan los parámetros con $\alpha=(y-1)/3$ y $\beta=w-\alpha$. Así, esas dos ecuaciones describen exactamente la familia.
>
> **a)** La solución cero no pertenece a ella, porque su tercera coordenada sería $0$, no $-1$. Todo sistema homogéneo admite cero, luego éste no es homogéneo.
>
> **b)** Como no cambian los vectores $u,v$, basta comprobar si el nuevo punto base $Q$ pertenece a la familia original. En efecto, si $Q=P+\alpha_0u+\beta_0v$, desplazar los parámetros por $\alpha_0,\beta_0$ no cambia el conjunto recorrido. Si $Q$ no pertenece, la nueva familia ya contiene una solución ajena al sistema al tomar ambos parámetros cero.
>
> - **i) Sí:** $Q-P=(1,0,0,1)=v$.
> - **ii) Sí:** $Q-P=(-1,3,0,-1)=u-2v$.
> - **iii) No:** $Q-P=(1,0,0,0)$ no puede ser combinación de $u,v$, pues toda combinación de ellos tiene iguales la primera y la cuarta coordenadas. Equivalentemente, para este $Q$ se tiene $x-w=3$, en lugar de $2$.
>
> **c)** El nuevo vector director altera la coordenada $z$. Con $\alpha=1,\beta=0$ produce $P+(3,4,-1,1)=(5,5,-2,1)$, que incumple $z=-1$. Por contener un elemento que no es solución, esa familia no puede ser la solución general.

> [!recuerda]- Comprobación
> El sistema $z=-1$, $x-w=2$ permite contrastar cada familia sin resolver parámetros. Las de b-i y b-ii satisfacen ambas ecuaciones para todos sus parámetros; b-iii falla la segunda y c) falla la primera si $\alpha\ne0$.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - sistemas-lineales
---
> [!note] Pregunta
> Si una solución general es $P+\sum_jt_ju_j$, ¿cuándo puede sustituirse $P$ por $Q$ conservando los mismos directores y parámetros libres?
===
> [!important] Respuesta
> Cuando $Q-P$ es combinación de los $u_j$, es decir, cuando $Q$ ya pertenece a la familia. Entonces el cambio sólo desplaza los parámetros.
```

## Invertibilidad mediante pivotes y conjugación

### Ejercicio 39 · Matriz triangular y casos singulares 🤖

#### Enunciado

Para $a,b\in\mathbb R$, sean[^39]

$$
A=\begin{pmatrix}8&-2&1&3\\0&a^2-4&a-2&6\\0&0&a^2-4&b\\0&0&0&a\end{pmatrix},
\qquad B=\begin{pmatrix}b\\1\\2\\2b\end{pmatrix}.
$$

**a)** Discute el sistema de matriz ampliada $[A\mid B]$. **b)** Determina los valores de $a,b$ para los que $A-5I_4$ es invertible. **c)** Para esos valores, decide si existe una columna no nula $C\in M_{4\times1}(\mathbb R)$ tal que $AC=5C$.

> [!resolucion]- Resolución
> **a)** Llamemos $x,y,z,w$ a las cuatro incógnitas. La forma triangular aconseja leer desde la última ecuación:
>
> $$
> aw=2b,\qquad (a^2-4)z+bw=2,
> $$
>
> $$
> (a^2-4)y+(a-2)z+6w=1,\qquad8x-2y+z+3w=b.
> $$
>
> Si **$a\notin\{0,2,-2\}$**, los cuatro coeficientes diagonales son no nulos. Se determina sucesivamente $w$, $z$, $y$ y $x$, sin ninguna ecuación sobrante: el sistema es **compatible determinado para todo $b$**. La solución puede obtenerse de
>
> $$
> w=\frac{2b}a,\quad z=\frac{2-bw}{a^2-4},\quad
> y=\frac{1-(a-2)z-6w}{a^2-4},\quad
> x=\frac{b+2y-z-3w}{8}.
> $$
>
> Si **$a=0$**, la última ecuación exige $0=2b$. Para $b\ne0$ es incompatible. Para $b=0$, la tercera ecuación da $z=-1/2$; la segunda, $-4y-2z+6w=1$, da $y=3w/2$; la primera da $x=1/16$. Queda
>
> $$
> (x,y,z,w)=\left(\frac1{16},\frac32t,-\frac12,t\right),
> \qquad t\in\mathbb R.
> $$
>
> Es compatible indeterminado de grado $1$.
>
> Si **$a=2$**, la última ecuación da $w=b$. La tercera exige $b^2=2$, mientras que la segunda se reduce a $6w=1$, de donde $b=1/6$. Como $(1/6)^2\ne2$, ambas condiciones son incompatibles. No hay solución para ningún $b$.
>
> Si **$a=-2$**, la última ecuación da $w=-b$ y la tercera exige $-b^2=2$, imposible para $b\in\mathbb R$. Tampoco hay solución para ningún $b$.
>
> Los casos son exhaustivos: los únicos valores que anulan alguno de los pivotes diagonales son $0,2,-2$.
>
> **b)** Restar $5I_4$ conserva la forma triangular y cambia la diagonal a $3,a^2-9,a^2-9,a-5$. Una matriz triangular es invertible exactamente cuando todos sus elementos diagonales son no nulos: en ese caso la sustitución regresiva resuelve cualquier término independiente de forma única; si alguno se anula, su rango no alcanza $4$.
>
> $$
> \boxed{A-5I_4\text{ es invertible}\iff a\notin\{-3,3,5\},\quad b\in\mathbb R.}
> $$
>
> **c)** La igualdad pedida equivale a $(A-5I_4)C=0$. Bajo las condiciones de b), multiplicar por $(A-5I_4)^{-1}$ fuerza $C=0$. **No existe una columna no nula** con la propiedad pedida.

> [!recuerda]- Comprobación
> Para $a=b=0$, sustituir la familia de a) produce $(0,1,2,0)^T=B$ para todo $t$. Para verificar b) sin rehacer la discusión de a), observa que los valores $a=0,\pm2$ de a) y $a=\pm3,5$ de b) proceden de diagonales de matrices distintas.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
---
> [!note] Pregunta
> ¿Cuándo es invertible una matriz triangular cuadrada?
===
> [!important] Respuesta
> Exactamente cuando todas las entradas de su diagonal son distintas de cero; entonces hay un pivote por incógnita y la sustitución regresiva es única.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
---
> [!note] Pregunta
> Si $A-\lambda I_n$ es invertible, ¿puede existir $C\ne0$ con $AC=\lambda C$?
===
> [!important] Respuesta
> No. La igualdad equivale a $(A-\lambda I_n)C=0$ y la inversa fuerza $C=0$.
```

### Ejercicio 40 · Inversa y conjugación compleja 🤖

#### Enunciado

Sea $A\in M_n(\mathbb C)$ tal que $AA^*=3I_n$.[^40]

**a)** Demuestra que $A$ es invertible y determina su inversa en función de $A$. **b)** Justifica que la matriz conjugada $\overline A$ es invertible y determina su inversa en función de $A$.

Aquí $A^*$ es la [[Matemáticas/Álgebra lineal/Conjugada transpuesta de una matriz|conjugada transpuesta]]; $\overline A$ sólo conjuga las entradas y no cambia sus posiciones.[^conjugada]

> [!demostracion]- Demostración
> **a)** La hipótesis dice que $A(\frac13A^*)=I_n$. Por tanto, el producto tiene rango $n$. Como el rango de $A$ es al menos el del producto y no puede superar $n$, se tiene $\operatorname{rg}A=n$. Para una matriz cuadrada, rango completo implica invertibilidad.[^teoria]
>
> Multiplicar $AA^*=3I_n$ a la izquierda por $A^{-1}$ da $A^*=3A^{-1}$; luego
>
> $$
> \boxed{A^{-1}=\frac13A^*.}
> $$
>
> También se obtiene $A^*A=3I_n$, pues $A^*=3A^{-1}$ y $A^{-1}A=I_n$. Quedan así comprobados los dos órdenes de la inversa.
>
> **b)** Conjugamos las igualdades $AA^{-1}=A^{-1}A=I_n$. La conjugación de entradas conserva el orden de los factores, por lo que
>
> $$
> \overline A\,\overline{A^{-1}}=I_n,
> \qquad \overline{A^{-1}}\,\overline A=I_n.
> $$
>
> Esas igualdades prueban que $\overline A$ es invertible y su inversa es $\overline{A^{-1}}$. Usando a) y $\overline{A^*}=A^T$,
>
> $$
> \boxed{(\overline A)^{-1}=\frac13A^T.}
> $$

> [!recuerda]- Comprobación
> Conjugar $AA^*=3I_n$ da $\overline A A^T=3I_n$. Conjugar $A^*A=3I_n$ da $A^T\overline A=3I_n$. Multiplicar ambas igualdades por $1/3$ comprueba directamente los dos productos requeridos en b).

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
---
> [!note] Pregunta
> Si $A$ es una matriz compleja invertible, ¿cuál es la inversa de $\overline A$?
===
> [!important] Respuesta
> $(\overline A)^{-1}=\overline{A^{-1}}$, porque conjugar $AA^{-1}=A^{-1}A=I$ conserva ambos productos.
```

Las condiciones de unicidad obtenidas por pivotes se expresan también mediante un [[Matemáticas/Álgebra lineal/Determinantes|determinante]] no nulo. Los [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/ejercicios/01 Cálculo y propiedades — ejercicios 41–48|ejercicios 41–48]] desarrollan su cálculo y el efecto de las operaciones de filas y columnas.

## 📚 Fuentes

- FCUL, *ALGA 2026/2027 — Exercícios: Enunciados para as aulas teórico-práticas*, fascículo 1–90, pp. 9–10; cotejado con el fascículo 1–60 para estos enunciados.
- FCUL, *ALGA — Exercícios: Soluções*, p. 2: contraste de la clasificación de 35 a) y de la solución homogénea de 36 b). El resto de los desarrollos y las comprobaciones son propios.
- [[Matemáticas/Álgebra lineal/Teorema de Rouché-Capelli|Teorema de Rouché-Capelli]], [[Matemáticas/Álgebra lineal/Matriz inversa|Matriz inversa]] y [[Matemáticas/Álgebra lineal/Conjugada transpuesta de una matriz|Conjugada transpuesta de una matriz]]: premisas algebraicas consultadas.

[^35]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 9, ejercicio 35, apartados a–d.
[^sol35]: FCUL, *ALGA — Exercícios: Soluções*, p. 2, bloque rotulado «35 b)». Su mención de incompatibilidad y de otros casos de parámetros no es aplicable al homogéneo del enunciado 35 b), que siempre contiene la solución cero.
[^36]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 9, ejercicio 36, apartados a–d; *Soluções*, p. 2, contraste de 36 b).
[^37]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 9, ejercicio 37.
[^38]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, pp. 9–10, ejercicio 38, apartados a–c.
[^39]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 10, ejercicio 39, apartados a–c.
[^40]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 10, ejercicio 40. La barra de b) corresponde a $\overline A$.
[^teoria]: Premisas consultadas en las notas canónicas *Teorema de Rouché-Capelli* y *Matriz inversa*: compatibilidad por rangos, variables libres, equivalencia entre rango completo e invertibilidad y verificación bilateral de una inversa.
[^conjugada]: Premisas consultadas en *Conjugada transpuesta de una matriz*: $A^*=(\overline A)^T$, conjugación de productos y relación entre transposición y conjugación.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como profesor de Álgebra Lineal de primer curso. Propón uno de los ejercicios 35–40, deja que intente resolverlo y pide justificar cada división por un parámetro, cada variable libre y cada afirmación de invertibilidad. En las familias de soluciones, comprueba que sé distinguir un punto particular de una dirección homogénea. Si me equivoco, señala la primera igualdad que no se sigue de la anterior y permite corregirla antes de dar la solución. Exige una comprobación por sustitución o por los dos productos de una inversa, según corresponda. Usa como referencias $AX=B$, la familia $P+X_h$ con $AX_h=0$, y el criterio de rango completo para una matriz cuadrada. Por ejemplo, en $S_{-3,-1}$ debo recuperar $(7/4-t,-1/4,t)$ y verificarlo en las tres ecuaciones. Formula una pregunta cada vez, espera la respuesta y adapta la dificultad mediante recuperación activa y repetición espaciada.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
