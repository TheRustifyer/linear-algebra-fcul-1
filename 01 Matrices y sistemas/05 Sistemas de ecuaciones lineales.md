---
title: Sistemas de ecuaciones lineales
asignatura: Álgebra Lineal y Geometría Analítica
capa: curricular
tipo:
  - teoría
  - procedimiento
nivel: universitario-introductorio
estado: completo
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices y operaciones|Matrices y operaciones]]"
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Eliminación y matrices elementales|Eliminación y matrices elementales]]"
fsrs_goal: Traduce un sistema a AX=B, comprueba soluciones, clasifica los casos por pivotes y resuelve mediante Gauss o Gauss–Jordan; expresa la solución compatible como particular más núcleo y verifica cada vector obtenido.
simbolos:
  - AX=B
  - "[A\\mid B]"
tags:
  - matemáticas
  - álgebra-lineal
  - sistemas-lineales
  - curricular
---

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

# Sistemas de ecuaciones lineales

> [!important] Alcance y fuente
> Desarrollo en castellano de las aulas 8 y 10 de FCUL. La nota conserva el recorrido y las reducciones del aula 8 (31 diapositivas) y añade el cierre del capítulo: homogéneos y solución general (aula 10, diap. 2–7), sistemas cuadrados e inversas (diap. 8–10, desarrollados en la nota de [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa|rango e inversa]]) y la convención de vectores columna (diap. 11). Conviene estudiar antes [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices y operaciones|operaciones matriciales]] y [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Eliminación y matrices elementales|eliminación]].

## Ecuaciones lineales y su geometría (diapositivas 2–6)

> [!definicion] Ecuación lineal
> Sobre $K=\mathbb R$ o $\mathbb C$, una ecuación lineal en $x_1,\ldots,x_n$ tiene la forma $a_1x_1+\cdots+a_nx_n=b$, con coeficientes $a_i$ y término independiente $b$ en $K$. Si $b=0$ se llama homogénea.

En $\mathbb R^2$, $2x-3y=-6$ equivale a $y=2+\tfrac23x$, es decir,
$$ (x,y)=(0,2)+x(1,2/3)=(0,2)+\alpha(1,2/3),\quad\alpha\in\mathbb R. $$
Es la recta que pasa por $(0,2)$ con vector director $(1,2/3)$. En $\mathbb R^3$, $x-3y+z=5$ equivale a $x=5+3y-z$ y
$$ (x,y,z)=(5,0,0)+y(3,1,0)+z(-1,0,1). $$
Es el plano por $(5,0,0)$ generado por dos direcciones no colineales. En general, $a_1x+a_2y=b$ con $(a_1,a_2)\ne(0,0)$ define una recta del plano, y $a_1x+a_2y+a_3z=b$ con coeficientes no todos nulos define un plano espacial.

Son lineales $3x+5y=-1$, $\tfrac14x+\sqrt2y-z=0$ (homogénea, coeficientes $1/4,\sqrt2,-1$) y $-2x_1+x_2-7x_3-x_4=5$ (coeficientes $-2,1,-7,-1$; término independiente $5$). No son lineales $3x^2-y=8$ ni $x-3y-5xz=0$: aparecen el cuadrado y un producto de incógnitas.

## Sistemas, soluciones y equivalencia (diapositivas 7–15)

### Ecuación lineal, sistema y homogeneidad

> [!definicion] Sistema y homogeneidad
> Un sistema lineal es una colección finita de $m$ ecuaciones lineales en $n$ incógnitas: $\sum_{j=1}^n a_{ij}x_j=b_i$ para $i=1,\ldots,m$. $a_{ij}$ es el coeficiente de $x_j$ en la ecuación $i$. Es homogéneo si todos los $b_i$ son cero.

Las diapositivas muestran tres sistemas: uno con cinco ecuaciones y cuatro incógnitas,
$$\begin{cases}2x_1-7x_2+6x_3+x_4=1\\x_1+x_2-5x_3-3x_4=0\\-3x_1-3x_2-3x_3+x_4=-2\\-5x_1+4x_2+9x_3+8x_4=-1\\-6x_1+3x_2-4x_3+3x_4=-3;\end{cases}$$
otro con tres ecuaciones y cuatro incógnitas,
$$\begin{cases}2x_1-x_2+2x_3+x_4=0\\5x_2-x_3-\sqrt5x_4=-6\\x_1+3x_2+2x_4=-1,\end{cases}$$
donde son cero el coeficiente de $x_1$ en la segunda y el de $x_3$ en la tercera; y uno de dos incógnitas: $2x-4y=-1$, $3x+y=0$. Una incógnita ausente tiene coeficiente **cero**, no desaparece de la estructura del sistema.

> [!definicion] Solución, conjunto solución y equivalencia
> Una solución es una $n$-upla ordenada $(s_1,\ldots,s_n)\in K^n$ que satisface simultáneamente todas las ecuaciones. El conjunto solución contiene todas esas tuplas. Dos sistemas en las mismas incógnitas son equivalentes sobre $K$ si tienen el mismo conjunto solución sobre $K$. Resolver un sistema significa determinar dicho conjunto.

### Solución y conjunto solución

Para $5x_1-x_2+2x_3-x_4=8$, las tuplas $(1,0,1,-1)$ y $(3,6,-2,-3)$ son soluciones porque dan respectivamente $5+2+1=8$ y $15-6-4+3=8$; $(3,6,-2,0)$ no lo es porque da $5\ne8$. Para el sistema homogéneo $2x+y-4z=0$, $x+2y+z=0$, sirven $(0,0,0)$ y $(3,-2,1)$: la segunda da $3-4+1=0$; $(1,2,1)$ no sirve, pues en la segunda ecuación da $1+4+1=6\ne0$. Todo sistema homogéneo admite al menos la solución nula.

El cuerpo de resolución importa. Para $2x-3y=-6$ se obtiene $(0,2)+\alpha(1,2/3)$ tanto sobre $\mathbb R$ como sobre $\mathbb C$, pero el parámetro recorre el cuerpo elegido y los conjuntos solución son distintos. Salvo indicación contraria, un sistema con coeficientes reales se entiende y resuelve sobre $\mathbb R$.

Geométricamente, un sistema de rectas en $\mathbb R^2$ tiene por solución su intersección: puede ser una recta, un punto o el vacío. Un sistema de planos en $\mathbb R^3$ puede dar un plano, una recta, un punto o el vacío. La descripción presupone ecuaciones geométricas no degeneradas (vectores de coeficientes no nulos).

## Forma matricial y prueba de una solución (diapositivas 16–20)

Para un sistema $m\times n$, se define $A=(a_{ij})\in M_{m\times n}(K)$ (matriz de coeficientes o «simple»), $B=(b_1,\ldots,b_m)^T\in M_{m\times1}(K)$ y $X=(x_1,\ldots,x_n)^T\in M_{n\times1}(K)$. La matriz ampliada $[A\mid B]$ tiene tamaño $m\times(n+1)$; la barra separa coeficientes y términos independientes. Como la entrada $i$ de $AX$ es $\sum_j a_{ij}x_j$, el sistema equivale exactamente a $AX=B$. Una tupla $(\alpha_1,\ldots,\alpha_n)$ es solución si y sólo si $A(\alpha_1,\ldots,\alpha_n)^T=B$.

Ejemplo de la diapositiva 20: $x_1+2x_3-x_4=-3$, $-x_1+3x_2-x_3+x_4=2$, $2x_1+3x_2+6x_3=-4$. Entonces
$$\begin{pmatrix}1&0&2&-1\\-1&3&-1&1\\2&3&6&0\end{pmatrix}\begin{pmatrix}1\\0\\-1\\2\end{pmatrix}=\begin{pmatrix}-3\\2\\-4\end{pmatrix};$$
por ello $(1,0,-1,2)$ satisface el sistema. La comprobación matricial evita olvidar los coeficientes nulos.

## Operaciones equivalentes y algoritmos (diapositivas 21–23)

Permutar dos ecuaciones, multiplicar ambos miembros de una ecuación por un escalar no nulo o sumarle un múltiplo de otra conservan el conjunto solución porque son reversibles. Son exactamente las tres operaciones elementales sobre las filas **completas** de $[A\mid B]$. Por ejemplo, el sistema $x-y+2z=1$, $-2x+3y-3z=-1$, $-3x+4y-4z=1$ corresponde a $\left[\begin{array}{ccc|c}1&-1&2&1\\-2&3&-3&-1\\-3&4&-4&1\end{array}\right]$. Gauss transforma la matriz ampliada en escalonada y resuelve por sustitución; Gauss–Jordan continúa hasta la reducida. Cada sistema intermedio es equivalente al inicial.

## Ejemplo 1: solución única, por Gauss y Gauss–Jordan (diapositivas 24–27)

El sistema es $x_2+x_3-x_4=-7$, $4x_1+x_2+2x_3-x_4=-7$, $3x_1+x_3+x_4=1$, $-5x_1+2x_2+2x_3-x_4=-5$. Su ampliada inicial es
$$M_0=\begin{pmatrix}0&1&1&-1&-7\\4&1&2&-1&-7\\3&0&1&1&1\\-5&2&2&-1&-5\end{pmatrix}.$$
Tras $R_1\leftrightarrow R_2$ y $R_1\leftarrow R_1-R_3$ queda $\begin{pmatrix}1&1&1&-2&-8\\0&1&1&-1&-7\\3&0&1&1&1\\-5&2&2&-1&-5\end{pmatrix}$. Aplicando $R_3\leftarrow R_3-3R_1$ y $R_4\leftarrow R_4+5R_1$ se obtiene $\begin{pmatrix}1&1&1&-2&-8\\0&1&1&-1&-7\\0&-3&-2&7&25\\0&7&7&-11&-45\end{pmatrix}$. Después $R_3\leftarrow R_3+3R_2$, $R_4\leftarrow R_4-7R_2$ y $R_4\leftarrow-\tfrac14R_4$ llevan a
$$M_E=\begin{pmatrix}1&1&1&-2&-8\\0&1&1&-1&-7\\0&0&1&4&4\\0&0&0&1&-1\end{pmatrix}.$$
Es escalonada y representa $x_1+x_2+x_3-2x_4=-8$, $x_2+x_3-x_4=-7$, $x_3+4x_4=4$, $x_4=-1$. Sustitución regresiva: $x_4=-1$, $x_3=8$, $x_2=-16$, $x_1=-2$. La solución única es $(-2,-16,8,-1)$.

Alternativamente, desde $M_E$, $R_3\leftarrow R_3-4R_4$, $R_2\leftarrow R_2+R_4$, $R_1\leftarrow R_1+2R_4$ dan $\begin{pmatrix}1&1&1&0&-10\\0&1&1&0&-8\\0&0&1&0&8\\0&0&0&1&-1\end{pmatrix}$. Con $R_2\leftarrow R_2-R_3$ y $R_1\leftarrow R_1-R_3$ se llega a $\begin{pmatrix}1&1&0&0&-18\\0&1&0&0&-16\\0&0&1&0&8\\0&0&0&1&-1\end{pmatrix}$; $R_1\leftarrow R_1-R_2$ produce $[I_4\mid(-2,-16,8,-1)^T]$. Ambas vías dan el mismo conjunto solución; la segunda evita la sustitución regresiva.

## Ejemplo 2: dos variables libres (diapositivas 28–31)

El sistema de cinco incógnitas es
$$\begin{cases}4x_1+9x_2-2x_3-5x_4-12x_5=-9\\5x_1+11x_2-3x_3-5x_4-10x_5=-10\\3x_1+7x_2-x_3-3x_4-8x_5=-6\\2x_1+3x_2-4x_3-6x_4-9x_5=-8.\end{cases}$$
Su ampliada es $M_0=\begin{pmatrix}4&9&-2&-5&-12&-9\\5&11&-3&-5&-10&-10\\3&7&-1&-3&-8&-6\\2&3&-4&-6&-9&-8\end{pmatrix}$. Con $R_1\leftarrow R_1-R_3$ se obtiene la primera fila $(1,2,-1,-2,-4,-3)$. Con $R_2\leftarrow R_2-5R_1$, $R_3\leftarrow R_3-3R_1$, $R_4\leftarrow R_4-2R_1$ queda
$$\begin{pmatrix}1&2&-1&-2&-4&-3\\0&1&2&5&10&5\\0&1&2&3&4&3\\0&-1&-2&-2&-1&-2\end{pmatrix}.$$
Después $R_3\leftarrow R_3-R_2$, $R_4\leftarrow R_4+R_2$ dan las filas tercera y cuarta $(0,0,0,-2,-6,-2)$ y $(0,0,0,3,9,3)$. Escalarlas por $-1/2$ y $1/3$, y hacer $R_4\leftarrow R_4-R_3$, produce
$$M_E=\begin{pmatrix}1&2&-1&-2&-4&-3\\0&1&2&5&10&5\\0&0&0&1&3&1\\0&0&0&0&0&0\end{pmatrix}.$$
La eliminación hacia arriba usa $R_2\leftarrow R_2-5R_3$ y $R_1\leftarrow R_1+2R_3$, con resultado $\begin{pmatrix}1&2&-1&0&2&-1\\0&1&2&0&-5&0\\0&0&0&1&3&1\\0&0&0&0&0&0\end{pmatrix}$. Finalmente $R_1\leftarrow R_1-2R_2$ deja
$$M_R=\begin{pmatrix}1&0&-5&0&12&-1\\0&1&2&0&-5&0\\0&0&0&1&3&1\\0&0&0&0&0&0\end{pmatrix}.$$
Las columnas pivote son 1, 2 y 4, por lo que $x_1,x_2,x_4$ son básicas; $x_3,x_5$ son libres. Las ecuaciones reducidas son $x_1-5x_3+12x_5=-1$, $x_2+2x_3-5x_5=0$, $x_4+3x_5=1$. Tomando $x_3=a$, $x_5=b$ de manera independiente, la solución general es
$$(-1+5a-12b,-2a+5b,a,1-3b,b)=(-1,0,0,1,0)+a(5,-2,1,0,0)+b(-12,5,0,-3,1),\quad a,b\in\mathbb R.$$
El conjunto solución contiene **todas** esas tuplas y ninguna otra. Las dos direcciones vectoriales se obtienen separando coeficientes de $a$ y $b$; el vector fijo es una solución particular. Sustituyendo la expresión en el sistema original se comprueba que funciona para cualquier $a,b$.

## Aula 10 · Homogéneo asociado y solución general

### Sistema homogéneo asociado

> [!definicion] Sistema homogéneo asociado
> Dado $S: AX=B$, su **sistema homogéneo asociado** es $S': AX=0$, con la misma matriz de coeficientes y todos los términos independientes sustituidos por cero. $S'$ siempre es compatible porque $X=0$ es solución; esto no implica que $S$ sea compatible.

Si $S$ es compatible y $u$ es una solución particular, entonces

$$
X\in\operatorname{Sol}(S)\Longleftrightarrow X=u+v\text{ para algún }v\in\operatorname{Sol}(S').
$$

En efecto, $A(u+v)=Au+Av=B+0=B$. Recíprocamente, si $AX=B=Au$, entonces $A(X-u)=0$. Por tanto,

$$
\operatorname{Sol}(AX=B)=u+\operatorname{Sol}(AX=0)=u+\ker(A).
$$

Si una base del núcleo es $v_1,\ldots,v_p$, la forma paramétrica es $u+\alpha_1v_1+\cdots+\alpha_pv_p$, con parámetros independientes $\alpha_i\in K$. La clase y el número de direcciones se relacionan con el rango en [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa|Compatibilidad, rango e inversa]]. *(Aula 10, diap. 2–4.)*[^1][^2]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - solucion-general
---
> [!note] Pregunta
> Si $Au=b$ y $Av=0$, ¿por qué $u+v$ también resuelve $Ax=b$? ¿Cómo se obtienen todas las soluciones?
===
> [!important] Respuesta
> $A(u+v)=Au+Av=b$. Si $x$ es otra solución, $A(x-u)=b-b=0$; por tanto, $x=u+v$ con $v\in\ker(A)$.
```

### Ejemplo del aula: homogéneo y sistema compatible

El sistema homogéneo es

$$
H:\quad
\begin{cases}
x_1-2x_2-x_4=0,\\
-3x_1+4x_2-2x_3-x_4=0,\\
-x_1-2x_3-3x_4=0.
\end{cases}
$$

Su forma reducida impone $x_1+2x_3+3x_4=0$ y $x_2+x_3+2x_4=0$. Con $x_3=\alpha$ y $x_4=\beta$,

$$
\operatorname{Sol}(H)=\left\{\alpha(-2,-1,1,0)+\beta(-3,-2,0,1):\alpha,\beta\in K\right\}.
$$

Para el mismo $A$ y $B=(1,3,5)^T$, $u=(-7,-4,1,0)^T$ es particular. Así,

$$
\operatorname{Sol}(AX=B)=(-7,-4,1,0)+\alpha(-2,-1,1,0)+\beta(-3,-2,0,1).
$$

Como $r(A)=2$ y hay cuatro incógnitas, cualquier término independiente compatible produce dos parámetros libres; uno incompatible no tiene soluciones. *(Aula 10, diap. 5–7.)*

### Identificación de vectores con columnas

Las diapositivas identifican $u=(a_1,\ldots,a_n)\in K^n$ con la columna de sus coordenadas. Con esa identificación puede escribirse $Au$; la expresión directa $A(a_1,\ldots,a_n)$ no respeta las dimensiones matriciales. En consecuencia,

$$
\operatorname{Sol}(AX=B)=\{u\in K^n:Au=B\},
$$

entendiendo $Au$ y $B$ como columnas de $K^m$. *(Aula 10, diap. 11.)*

## Comprobaciones, condiciones de validez y errores frecuentes

En cada paso de Gauss se opera también la columna de términos independientes. Una fila $(0,\ldots,0\mid c)$ con $c\ne0$ revelaría incompatibilidad; una fila nula no impone restricción. Una columna sin pivote de la **matriz de coeficientes** designa variable libre; la última columna ampliada nunca es una incógnita. El aula 8 desarrolla dos sistemas compatibles (uno con solución única y otro con infinitas). Para un sistema incompatible no existe $u$ particular, así que no se puede aplicar la forma $u+\ker(A)$; el homogéneo asociado, en cambio, sí es siempre compatible. El criterio general de compatibilidad se expone en [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa|rango e inversa]].

## Práctica graduada

1. Si $Au=b$ y $Av=0$, demuestra que $u+v$ es solución y que toda solución $x$ se escribe $u+(x-u)$.
2. En el ejemplo del aula, toma $u=(-7,-4,1,0)$ y las dos direcciones de $H$. Escribe una solución distinta de $u$ y explica por qué también satisface el sistema.

### Soluciones razonadas

1. Por linealidad, $A(u+v)=Au+Av=b+0=b$. Si $Ax=b=Au$, entonces $A(x-u)=0$, de modo que $x-u$ es una solución del homogéneo asociado. Esto prueba inclusión en ambos sentidos.
2. Con $\alpha=1$ y $\beta=0$ se obtiene $x=(-9,-5,2,0)$. Se verifica: $-9-2(-5)=1$; $-3(-9)+4(-5)-2(2)=3$; $-(-9)-2(2)=5$.

## 📚 Fuentes

### Material base aportado

- [FCUL, *Álgebra Linear e Geometria Analítica*, aula 8, 2 de octubre de 2026, 31 diapositivas](<file:///Users/therustifyer/Seafile/Fi%CC%81sica%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-Aula8-Sistemas-impressao.pdf>). Fuente primaria de las definiciones y cálculos iniciales.
- [FCUL, *Álgebra Linear e Geometria Analítica*, aula 10, 9 de octubre de 2026, 11 diapositivas](<file:///Users/therustifyer/Seafile/Fi%CC%81sica%20%28Completo%29/Carrera/1%C2%BA/ULisboa/ALGA/01%20-%20Matrizes%20e%20sistemas/ALGA-2026-27-AulasTeo-slides-Aula10-Sistemas-impressao.pdf>). Fuente primaria del homogéneo asociado, la solución general y los vectores columna.

### Ampliación académica

[^1]: Gilbert Strang, [*Solving Ax = b: Row Reduced Form R*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/resources/solving-ax-b-row-reduced-form-r/), MIT OpenCourseWare. Solución completa como particular más homogéneo.
[^2]: Jim Hefferon, [*Linear Algebra*, § I.3, “General = Particular + Homogeneous”](https://hefferon.net/linearalgebra/). Texto introductorio que desarrolla el conjunto solución.


## 🧑‍🏫 Prompt para tutor conversacional

Comprueba, usando los ejemplos de esta nota, que el estudiante distingue ecuación de sistema, solución de conjunto solución y escalonada de reducida. Pídele verificar una tupla por sustitución o producto matricial y justificar por qué $x_3$ y $x_5$ son independientes en el ejemplo 2. No presupongas que una fila nula implica incompatibilidad; exige identificar una fila $0=c\ne0$.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
