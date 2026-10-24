---
schema: nabla-phi-note/v1
title: Transformaciones geométricas y composición
aliases:
  - Matrices de transformaciones geométricas
  - Composición de transformaciones lineales
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
tipo:
  - lección
  - ampliación
nivel: universitario-introductorio
estado: borrador
capa: curricular
alcance: ampliación curricular externa
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/04 Transformaciones lineales/03 Representación matricial e isomorfismos|Representación matricial e isomorfismos]]"
desbloquea:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/05 Valores propios y diagonalización/01 Espectro y subespacios propios|Espectro y subespacios propios]]"
relacionado:
  - "[[Matemáticas/Álgebra lineal/Aplicaciones lineales|Aplicaciones lineales]]"
  - "[[Matemáticas/Álgebra lineal/Matrices|Matrices]]"
fsrs_goal: Modela escalados, reflexiones, rotaciones y proyecciones mediante matrices, determina imágenes y preimágenes de conjuntos sencillos y calcula composiciones justificando el orden de los factores.
tags:
  - matematicas
  - algebra-lineal
  - transformaciones-geometricas
  - composicion
  - ampliacion
  - fcul
---
```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```
# Transformaciones geométricas y composición
Una matriz puede leerse como una regla geométrica: sus columnas muestran dónde terminan los vectores de la base canónica y, por linealidad, determinan el destino de cualquier vector. Esta lectura permite modelar deformaciones y movimientos que fijan el origen, y hace visible por qué componer transformaciones equivale a multiplicar matrices en un orden determinado.[^1]

> [!nota] Ampliación curricular externa
> Las transformaciones geométricas y su composición desarrollan una interpretación que refuerza la representación matricial. El marco es $\mathbb R^2$ o $\mathbb R^3$ con sus bases canónicas, salvo indicación contraria.

## Leer una matriz como transformación
Sea $A\in M_{m\times n}(\mathbb R)$. La regla
$$
T_A:\mathbb R^n\to\mathbb R^m,
\qquad T_A(x)=Ax
$$
es lineal. Si $e_1,\ldots,e_n$ es la base canónica, entonces $Ae_j$ es la columna $j$ de $A$. Como $x=\sum_jx_je_j$,
$$
Ax=\sum_{j=1}^{n}x_jAe_j.
$$
Las columnas son, por tanto, las imágenes de las direcciones coordenadas. En el plano, conocer el destino de $(1,0)$ y $(0,1)$ determina la deformación de toda recta, paralelogramo y combinación lineal.[^1]

> [!definicion] Transformación geométrica lineal
> Una **transformación geométrica lineal** es una aplicación lineal entre espacios de coordenadas interpretada por su efecto sobre direcciones, longitudes, ángulos, áreas u orientación. Toda transformación lineal fija el origen.

## Escalados y reflexiones
### Escalado
> [!definicion] Escalado respecto de los ejes
> Para $a,b\in\mathbb R$, el escalado $S_{a,b}:\mathbb R^2\to\mathbb R^2$ se define por
> $$
> S_{a,b}(x,y)=(ax,by),
> \qquad
> [S_{a,b}]=\begin{pmatrix}a&0\\0&b\end{pmatrix}.
> $$

Si $a=b=\lambda$, se trata de una homotecia de centro en el origen. Un factor de módulo mayor que $1$ estira la dirección correspondiente; uno entre $0$ y $1$ la contrae; un factor cero colapsa esa dirección y hace que la transformación deje de ser inyectiva.

### Reflexiones coordenadas
> [!definicion] Reflexión respecto de un eje
> La reflexión respecto del eje $x$ es $F_x(x,y)=(x,-y)$ y la reflexión respecto del eje $y$ es $F_y(x,y)=(-x,y)$:
> $$
> [F_x]=\begin{pmatrix}1&0\\0&-1\end{pmatrix},
> \qquad
> [F_y]=\begin{pmatrix}-1&0\\0&1\end{pmatrix}.
> $$

Ambas conservan longitudes y ángulos, pero invierten la orientación. La reflexión respecto de la recta $y=x$ intercambia las coordenadas y tiene matriz
$$
\begin{pmatrix}0&1\\1&0\end{pmatrix}.
$$

## Rotaciones y proyecciones
### Rotación en el plano
> [!definicion] Rotación de ángulo $\theta$
> La rotación antihoraria de ángulo $\theta$ alrededor del origen es
> $$
> R_\theta(x,y)
> =(x\cos\theta-y\sin\theta,\,x\sin\theta+y\cos\theta),
> $$
> con matriz
> $$
> [R_\theta]=
> \begin{pmatrix}
> \cos\theta&-\sin\theta\\
> \sin\theta&\cos\theta
> \end{pmatrix}.
> $$

Las columnas son vectores unitarios ortogonales: la primera es la imagen de $(1,0)$ y la segunda, la de $(0,1)$. Por ello la rotación conserva productos escalares, longitudes y ángulos.[^2]

### Proyección sobre un eje
> [!definicion] Proyección coordenada
> La proyección sobre el eje $x$ es
> $$
> P_x(x,y)=(x,0),
> \qquad
> [P_x]=\begin{pmatrix}1&0\\0&0\end{pmatrix}.
> $$

Su imagen es el eje $x$ y su núcleo es el eje $y$. Como $P_x(P_x(v))=P_x(v)$ para todo $v$, satisface $P_x^2=P_x$: proyectar una segunda vez no cambia el resultado. Esta idempotencia caracteriza algebraicamente a las proyecciones, aunque una proyección lineal general no tiene por qué ser ortogonal.

```anki
deck: Física::Álgebra Lineal::Transformaciones lineales
tags:
  - matematicas
  - algebra-lineal
  - transformaciones-geometricas
---
> [!note] Pregunta
> ¿Qué propiedad matricial expresa que una transformación lineal $P$ es una proyección?
===
> [!important] Respuesta
> La idempotencia: $P^2=P$.
```

## Imágenes y preimágenes de conjuntos
> [!definicion] Imagen y preimagen bajo una transformación
> Para $T:V\to W$, $A\subseteq V$ y $B\subseteq W$,
> $$
> T(A)=\{T(a):a\in A\},
> \qquad
> T^{-1}(B)=\{v\in V:T(v)\in B\}.
> $$

La imagen de un subespacio bajo una transformación lineal es un subespacio. La preimagen de un subespacio también lo es. En cambio, la imagen de una figura afín que no pasa por el origen puede ser una figura afín y no un subespacio.

### Ejemplo trabajado: una circunferencia escalada
Sea $S_{2,1}(x,y)=(2x,y)$ y sea
$$
C=\{(x,y):x^2+y^2=1\}.
$$
Si $(u,v)=S_{2,1}(x,y)$, entonces $x=u/2$ y $y=v$. Por tanto,
$$
S_{2,1}(C)
=\left\{(u,v):\frac{u^2}{4}+v^2=1\right\},
$$
una elipse. La transformación es invertible, así que cada punto de la elipse tiene una única preimagen en la circunferencia.

### Ejemplo trabajado: preimagen bajo una proyección
Para la recta vertical $L_c=\{(u,v):u=c\}$,
$$
P_x^{-1}(L_c)=\{(x,y):x=c\}=L_c.
$$
Para un punto $(c,0)$ de la imagen, su preimagen es toda la recta vertical $\{(c,y):y\in\mathbb R\}$. La falta de inyectividad aparece geométricamente como una dirección completa que se colapsa.

## Operaciones con transformaciones
Sean $S,T:V\to W$ lineales y $\lambda\in K$.

> [!definicion] Suma y producto por un escalar
> Se definen punto a punto por
> $$
> (S+T)(v)=S(v)+T(v),
> \qquad
> (\lambda T)(v)=\lambda T(v).
> $$

Ambas operaciones producen nuevas transformaciones lineales. Respecto de bases fijas,
$$
[S+T]=[S]+[T],
\qquad
[\lambda T]=\lambda[T].
$$
La transformación nula actúa como cero para la suma; la identidad $I_V(v)=v$ será el elemento neutro para la composición.

## Composición y producto matricial
### Definición
> [!definicion] Composición
> Si $T:U\to V$ y $S:V\to W$, la composición $S\circ T:U\to W$ se define por
> $$
> (S\circ T)(u)=S(T(u)).
> $$
> Se aplica primero $T$ y después $S$.

La composición es lineal. Para $u,v\in U$ y escalares $a,b$,
$$
(S\circ T)(au+bv)
=S(aT(u)+bT(v))
=aS(T(u))+bS(T(v)).
$$

### Matriz de una composición
Con bases compatibles $B,C,D$ en $U,V,W$,
$$
[S\circ T]_{D\leftarrow B}
=[S]_{D\leftarrow C}[T]_{C\leftarrow B}.
$$
El factor de la derecha actúa primero sobre las coordenadas. La compatibilidad de tamaños reproduce la compatibilidad de dominio y codominio.[^2]

La composición es asociativa, pero en general no es conmutativa. También satisface
$$
S\circ(T_1+T_2)=S\circ T_1+S\circ T_2
$$
y una propiedad distributiva análoga por el otro lado.

## El orden cambia la geometría
Considérese la rotación de $90^\circ$ y la proyección sobre el eje $x$:
$$
R=\begin{pmatrix}0&-1\\1&0\end{pmatrix},
\qquad
P=\begin{pmatrix}1&0\\0&0\end{pmatrix}.
$$
Primero proyectar y después rotar corresponde a
$$
RP=\begin{pmatrix}0&0\\1&0\end{pmatrix},
\qquad
(RP)(x,y)=(0,x).
$$
La salida queda sobre el eje $y$. En el orden inverso,
$$
PR=\begin{pmatrix}0&-1\\0&0\end{pmatrix},
\qquad
(PR)(x,y)=(-y,0),
$$
y la salida queda sobre el eje $x$. Como $RP\neq PR$, las dos secuencias realizan transformaciones distintas.

Si $T$ es invertible, $T^{-1}\circ T=I$ y $T\circ T^{-1}=I$. Para matrices invertibles, $(ST)^{-1}=T^{-1}S^{-1}$: la inversa deshace las operaciones en orden contrario.

## Condiciones de validez y lectura final
Una transformación lineal siempre fija el origen. Una traslación $x\mapsto x+b$ con $b\neq0$ es afín y no puede representarse mediante una matriz ordinaria que actúe sobre las mismas coordenadas; su valor en el origen es $b$.

Las fórmulas de rotación dadas usan una base ortonormal orientada del plano y la convención de ángulos positivos en sentido antihorario. En una base oblicua, la misma transformación tiene otra matriz. La geometría pertenece a la transformación; las entradas pertenecen a su representación.

Escalados, reflexiones, rotaciones y proyecciones muestran cuatro comportamientos estructurales: cambiar magnitudes, invertir orientación, conservar la geometría euclídea y colapsar direcciones. La composición permite construir transformaciones más complejas sin perder el control algebraico de cada etapa.

## 📚 Fuentes
### Material base
- Faculdade de Ciências da Universidade de Lisboa, [*Álgebra Linear e Geometria Analítica — programa 2026/27*](https://fenix.ciencias.ulisboa.pt/courses/algana-2817829258658182/programa), contexto curricular de transformaciones y representación matricial; la interpretación geométrica se incorpora como ampliación.

### Ampliación académica
[^1]: MIT OpenCourseWare, [*18.06 Linear Algebra — Readings*](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/pages/readings/), interpretación de matrices como transformaciones lineales.
[^2]: Jim Hefferon, [*Linear Algebra*](https://hefferon.net/linearalgebra/), texto universitario abierto; composición, representaciones y transformaciones geométricas elementales.

## 🧑‍🏫 Prompt para tutor conversacional
Actúa como tutor universitario de Álgebra Lineal. Presenta una transformación geométrica elemental para que el estudiante deduzca su matriz desde las imágenes de la base canónica. Después combina dos transformaciones y exige predecir primero el efecto geométrico, calcular luego ambos órdenes del producto y comprobar el resultado sobre un vector. Incluye una pregunta sobre imagen o preimagen de un conjunto sencillo y ofrece pistas graduadas sin convertir la sesión en una lista de fórmulas memorizadas.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
