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

Al resolver un sistema con parámetros, una división puede dejar fuera precisamente los casos que hay que estudiar. La [[Matemáticas/Álgebra lineal/Eliminación de Gauss-Jordan|eliminación de Gauss–Jordan]] permite reconocerlos: cuando desaparece un pivote, hay que comprobar si queda una ecuación redundante o una contradicción. El [[Matemáticas/Álgebra lineal/Teorema de Rouché-Capelli|criterio de compatibilidad por rangos]] distingue esas dos situaciones; para una matriz cuadrada, el rango completo equivale a la [[Matemáticas/Álgebra lineal/Matriz inversa|invertibilidad]].[^teoria]

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
> **a)** Las dos últimas ecuaciones tienen el mismo coeficiente de $x$, por lo que restarlas elimina esa incógnita. Sumar la primera y la tercera también elimina $x$ y, además, cancela $y$. Se obtiene, respectivamente,
>
> $$
> (a-1)y=1,\qquad (b+1)z=b+1.
> $$
>
> Conservamos $x-ay+z=1$ junto con esas dos ecuaciones. El sistema sigue siendo equivalente al original: sumar la ecuación conservada a la primera diferencia recupera la segunda ecuación original, y restarla de la suma recupera la primera.
>
> Si **$a=1$**, la ecuación de $y$ se convierte en $0=1$. El sistema es **incompatible para todo $b$**, incluido $b=-1$.
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
> La clasificación completa queda así:
>
> | Condiciones | Tipo de sistema |
> | --- | --- |
> | $a=1$, cualquier $b$ | Incompatible |
> | $a\ne1$, $b\ne-1$ | Compatible determinado |
> | $a\ne1$, $b=-1$ | Compatible indeterminado, con un parámetro libre |
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
> El homogéneo admite la solución cero en todos los casos; los valores hallados indican cuándo aparecen además soluciones no nulas.[^sol35]
>
> **c)** Denotemos por $A_{a,b}$ la matriz de coeficientes del sistema. Una matriz cuadrada es invertible exactamente cuando su sistema homogéneo sólo tiene la solución cero. Por b),
>
> $$
> \boxed{A_{a,b}\text{ es invertible}\iff a\ne1\ \text{y}\ b\ne-1.}
> $$
>
> **d) Gauss–Jordan para $a=-3,b=-1$.** La matriz ampliada es
>
> $$
> \left[\begin{array}{rrr|r}-1&-3&-1&-1\\1&-1&1&2\\1&3&1&1\end{array}\right].
> $$
>
> Intercambiamos $R_1$ y $R_3$ para empezar con un pivote $1$. Después, $R_2\leftarrow R_2-R_1$ y $R_3\leftarrow R_3+R_1$ anulan las otras dos entradas de la primera columna:
>
> $$
> \left[\begin{array}{rrr|r}1&3&1&1\\0&-4&0&1\\0&0&0&0\end{array}\right].
> $$
>
> Convertimos el pivote de la segunda fila en $1$ mediante $R_2\leftarrow-\frac14R_2$. La operación $R_1\leftarrow R_1-3R_2$ elimina el $3$ situado encima y deja la forma reducida:
>
> $$
> \left[\begin{array}{rrr|r}1&0&1&7/4\\0&1&0&-1/4\\0&0&0&0\end{array}\right].
> $$
>
> Las dos filas no nulas dicen $x+z=7/4$ e $y=-1/4$. Como $z$ es libre, escribimos $z=t$ y obtenemos $(x,y,z)=(7/4-t,-1/4,t)$, con $t\in\mathbb R$.

> [!recuerda]- Comprobación
> En el caso determinado, sustituye $x=a/(a-1)$, $y=1/(a-1)$ y $z=1$: los tres miembros izquierdos resultan $b,2,1$. Para $b=-1$, sustituye la familia con $t$ y obtendrás $-1,2,1$ independientemente de $t$. En d), esta sustitución produce también $(-1,2,1)$.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - sistemas-lineales
---
> [!note] Pregunta
> Antes de dividir $c(a)y=d(a)$ por $c(a)$ en un sistema con parámetro $a$, ¿qué casos hay que distinguir?
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
A=\begin{pmatrix}1&2&2&-1\\2&4&-2&2\\0&0&6&-4\end{pmatrix}.
$$

$$
B=\begin{pmatrix}-1\\4\\-6\end{pmatrix}.
$$

Considera $AX=B$ en $x_1,x_2,x_3,x_4$.

**a)** Sin resolverlo, comprueba que $(2,0,-3,-3)$ es solución y $(2,0,0,-3)$ no lo es. **b)** Resuelve el homogéneo asociado por Gauss–Jordan. **c)** Da la solución general de $AX=B$. **d)** Da dos soluciones distintas de la de a).

> [!resolucion]- Resolución
> **a)** Para comprobar un candidato, se sustituye en las tres ecuaciones; no hace falta resolver el sistema. Con el primero,
>
> $$
> A\begin{pmatrix}2\\0\\-3\\-3\end{pmatrix}
> =\begin{pmatrix}2-6+3\\4+6-6\\-18+12\end{pmatrix}
> =B.
> $$
>
> El segundo vector no reproduce $B$:
>
> $$
> A\begin{pmatrix}2\\0\\0\\-3\end{pmatrix}
> =\begin{pmatrix}5\\-2\\12\end{pmatrix}\ne B.
> $$
>
> **b)** Las dos primeras entradas de $R_2$ son el doble de las de $R_1$. En $[A\mid0]$, hacemos $R_2\leftarrow R_2-2R_1$ para anularlas. La fila obtenida es la opuesta de $R_3$, así que $R_3\leftarrow R_3+R_2$ elimina la tercera fila:
>
> $$
> \left[\begin{array}{rrrr|r}1&2&2&-1&0\\0&0&-6&4&0\\0&0&0&0&0\end{array}\right].
> $$
>
> Dividimos $R_2$ por $-6$ para que su pivote sea $1$ y lo usamos en $R_1\leftarrow R_1-2R_2$ para anular la entrada situada encima:
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
> **c)** Ya conocemos una solución particular, $P=(2,0,-3,-3)^T$. Sumarle cualquiera de las soluciones homogéneas no cambia el término independiente, porque
>
> $$
> A(P+X_h)=AP+AX_h=B+0=B.
> $$
>
> También se obtienen de esta manera todas las soluciones: si $AX=B$, entonces $A(X-P)=B-B=0$, de modo que $X-P$ es una solución del homogéneo. Por tanto,
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
> El sistema buscado debe conservar los coeficientes de $(S)$ y tener a $(2,-1,0,-1)$ como solución. Por eso sus términos independientes se obtienen sustituyendo ese vector en los tres miembros izquierdos:
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
> Al escribir la familia original por coordenadas, se obtiene
>
> $$
> x=2+\alpha+\beta,\qquad w=\alpha+\beta,
> $$
>
> $$
> y=1+3\alpha,\qquad z=-1.
> $$
>
> Por tanto, todos sus elementos satisfacen $z=-1$ y $x-w=2$. Recíprocamente, si se cumplen esas dos igualdades, se recuperan los parámetros con $\alpha=(y-1)/3$ y $\beta=w-\alpha$. Así, esas dos ecuaciones describen exactamente la familia.
>
> **a)** El vector cero no pertenece a la familia, porque su tercera coordenada sería $0$, no $-1$. Todo sistema homogéneo admite cero como solución, luego éste no es homogéneo.
>
> **b)** Los vectores $u,v$ permanecen iguales: sólo cambia el punto desde el que se suman sus múltiplos. Si el nuevo punto $Q$ ya pertenece a la familia, cambiar $P$ por $Q$ sólo cambia los valores de los parámetros que representan cada solución. En concreto, si $Q=P+\alpha_0u+\beta_0v$, entonces
>
> $$
> Q+\alpha u+\beta v=P+(\alpha_0+\alpha)u+(\beta_0+\beta)v.
> $$
>
> Como los parámetros recorren todos los reales, las dos familias coinciden. Si $Q$ no pertenece a la original, basta tomar $\alpha=\beta=0$: la nueva familia contiene entonces un elemento que no es solución.
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
> Una solución general se escribe $P+\sum_jt_ju_j$, con los $t_j$ libres. ¿Cuándo se puede cambiar $P$ por $Q$ y conservar los mismos vectores $u_j$?
===
> [!important] Respuesta
> Cuando $Q-P$ es combinación de los $u_j$, es decir, cuando $Q$ ya pertenece a la familia. Entonces el cambio sólo desplaza los parámetros.
```

## Invertibilidad mediante pivotes y conjugación

### Ejercicio 39 · Matriz triangular y casos singulares 🤖

#### Enunciado

Para $a,b\in\mathbb R$, sean[^39]

$$
A=\begin{pmatrix}8&-2&1&3\\0&a^2-4&a-2&6\\0&0&a^2-4&b\\0&0&0&a\end{pmatrix}.
$$

$$
B=\begin{pmatrix}b\\1\\2\\2b\end{pmatrix}.
$$

**a)** Discute el sistema de matriz ampliada $[A\mid B]$. **b)** Determina los valores de $a,b$ para los que $A-5I_4$ es invertible. **c)** Para esos valores, decide si existe una columna no nula $C\in M_{4\times1}(\mathbb R)$ tal que $AC=5C$.

> [!resolucion]- Resolución
> **a)** Llamemos $x,y,z,w$ a las cuatro incógnitas. La última ecuación sólo contiene $w$; una vez conocida, la anterior permite hallar $z$, y así sucesivamente. Escribimos las ecuaciones en ese orden:
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
> w=\frac{2b}a,\qquad z=\frac{2-bw}{a^2-4}.
> $$
>
> Sustituyendo esos valores en las dos ecuaciones restantes,
>
> $$
> y=\frac{1-(a-2)z-6w}{a^2-4},\qquad
> x=\frac{b+2y-z-3w}{8}.
> $$
>
> Si **$a=0$**, la última ecuación exige $0=2b$. Para $b\ne0$ es incompatible. Para $b=0$, esa ecuación no impone ninguna restricción a $w$, mientras que la tercera da $z=-1/2$. Sustituyendo en la segunda,
>
> $$
> -4y-2\left(-\frac12\right)+6w=1
> \quad\Longrightarrow\quad y=\frac32w.
> $$
>
> En la primera, los términos que contienen $w$ se cancelan y queda $8x-1/2=0$, de donde $x=1/16$. Tomando $w=t$,
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
> **a)** Dividir la igualdad dada por $3$ proporciona una candidata a inversa:
>
> $$
> A\left(\frac13A^*\right)=I_n.
> $$
>
> Cada columna de este producto es una combinación de las columnas de $A$. Como el producto es $I_n$, las columnas de $A$ generan las $n$ columnas de la identidad; por tanto, $\operatorname{rg}A=n$. Al ser cuadrada y tener rango completo, $A$ es invertible.[^teoria]
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

Actúa como profesor de Álgebra Lineal de primer curso y trabaja con los ejercicios 35–40. Formula una pregunta cada vez y espera mi intento antes de dar pistas o mostrar una solución. Si me equivoco, localiza la primera igualdad injustificada y deja que la corrija.

Pide que justifique las divisiones por parámetros, identifique las variables libres y compruebe cada solución en las ecuaciones originales. Para comparar familias, utiliza el hecho de que todas las soluciones de $AX=B$ son $P+X_h$, con $AP=B$ y $AX_h=0$. Comprueba que distingo la solución particular $P$ de los vectores que multiplican los parámetros.

En las preguntas de invertibilidad, pide relacionar los pivotes con el rango y verificar los dos productos de la inversa propuesta. Como referencia, $S_{-3,-1}$ tiene la familia $(7/4-t,-1/4,t)$; debo poder obtenerla y sustituirla en las tres ecuaciones. Alterna cálculo y justificación, ajusta la dificultad y retoma más adelante los errores para comprobar que los he corregido.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
