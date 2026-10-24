---
schema: nabla-phi-note/v1
title: Sumas y espacios asociados a una matriz
aliases:
  - Espacios fila y columna
  - Suma directa y fórmula de Grassmann
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
tipo:
  - lección
  - teorema
nivel: universitario-introductorio
estado: borrador
capa: curricular
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/03 Subespacios y espacio generado|Subespacios y espacio generado]]"
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/04 Independencia, bases y coordenadas|Independencia, bases y coordenadas]]"
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/08 Suma, intersección y suma directa|Suma, intersección y suma directa]]"
desbloquea:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/06 Cuatro subespacios fundamentales|Cuatro subespacios fundamentales]]"
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/07 Núcleo, imagen, rango y nulidad|Núcleo, imagen, rango y nulidad]]"
relacionado:
  - "[[Matemáticas/Álgebra lineal/Matrices|Matrices]]"
fsrs_goal: Calcula sumas e intersecciones, decide si una suma es directa, aplica Grassmann con sus hipótesis y obtiene espacios fila y columna y el rango de una matriz mediante bases.
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
  - fcul
  - leccion
---

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

# Sumas y espacios asociados a una matriz

Dos subespacios de $V$ pueden tener direcciones en común o contribuir direcciones distintas. La intersección registra lo compartido; la suma reúne todas las combinaciones que se obtienen tomando un vector de cada subespacio. La dimensión de la suma debe descontar aquello que se contó dos veces: eso es lo que expresa la fórmula de Grassmann.

Una matriz también define subespacios naturales. Sus columnas viven en el codominio, sus filas en el dominio de coordenadas; ambos espacios describen aspectos diferentes de la misma información lineal. Estas ideas preparan los cuatro subespacios fundamentales.

## Suma e intersección de subespacios

Sean $U,W$ subespacios de un mismo espacio vectorial $V$ sobre $K$.

### Definición de suma

> [!definicion] Suma de subespacios
> La suma de $U$ y $W$ es
> $$
> U+W=\{u+w:u\in U,\ w\in W\}.
> $$

Es el menor subespacio que contiene a $U$ y a $W$, o equivalentemente, el espacio generado por su unión: $U+W=\operatorname{span}(U\cup W)$. No debe confundirse con la unión $U\cup W$, que usualmente no es subespacio.

### Definición de intersección

> [!definicion] Intersección
> La intersección es
> $$
> U\cap W=\{v\in V:v\in U\text{ y }v\in W\}.
> $$

La intersección es un subespacio: contiene $0_V$, y si $x,y$ pertenecen a ambos espacios, toda combinación $\alpha x+\beta y$ pertenece a cada uno y, por tanto, a la intersección.

### Ejemplo trabajado: dos direcciones que generan el plano

En $V=\mathbb R^2$, toma $U=\operatorname{span}\{(1,0)\}$ y $W=\operatorname{span}\{(0,1)\}$. Se tiene $U\cap W=\{(0,0)\}$ y

$$
U+W=\{(x,0)+(0,y):x,y\in\mathbb R\}=\mathbb R^2.
$$

Las dos direcciones no se solapan salvo en el origen y, juntas, cubren todo el plano.

## Suma directa y unicidad de descomposición

### Definición de suma directa

> [!definicion] Suma directa
> La suma $U+W$ es **directa**, y se escribe $U\oplus W$, si cada vector de la suma se expresa de forma única como $u+w$, con $u\in U$ y $w\in W$.

La descomposición única equivale a que $U\cap W=\{0_V\}$. En efecto, si un vector tiene dos expresiones, $u_1+w_1=u_2+w_2$, entonces

$$
u_1-u_2=w_2-w_1\in U\cap W.
$$

Si la intersección es trivial, ambos lados son cero y las componentes coinciden. Recíprocamente, si $z\in U\cap W$, entonces $z=z+0=0+z$ son dos descomposiciones del mismo vector. La unicidad obliga a $z=0_V$.

### Ejemplo trabajado: coordenadas como suma de subespacios

En $\mathbb R^3$, sea $U=\operatorname{span}\{(1,0,0),(0,1,0)\}$ y $W=\operatorname{span}\{(0,0,1)\}$. Entonces $U\cap W=\{0\}$ y $U+W=\mathbb R^3$. Todo $(x,y,z)$ se descompone de manera única:

$$
(x,y,z)=(x,y,0)+(0,0,z),\qquad (x,y,0)\in U,\ (0,0,z)\in W.
$$

La unicidad se sigue también de que el primer sumando tiene tercera coordenada cero y el segundo sólo puede tener tercera coordenada no nula.

## Fórmula de Grassmann

### Teorema

Si $U,W$ son subespacios de dimensión finita de $V$, entonces

$$
\dim(U+W)=\dim U+\dim W-\dim(U\cap W).
$$

La dimensión de la intersección se resta porque sus direcciones ya están incluidas en ambas dimensiones. La hipótesis de dimensión finita permite hablar de bases finitas y contar sus elementos.[^1]

### Demostración mediante extensión de bases

Sea $(c_1,\ldots,c_r)$ una base de $U\cap W$. Extiéndela a bases

$$
(c_1,\ldots,c_r,u_1,\ldots,u_p)\text{ de }U,
\qquad
(c_1,\ldots,c_r,w_1,\ldots,w_q)\text{ de }W.
$$

La lista combinada $(c_1,\ldots,c_r,u_1,\ldots,u_p,w_1,\ldots,w_q)$ genera $U+W$: cada $u+w$ puede expandirse en las dos bases. Para probar independencia, supongamos que

$$
\sum_i a_i c_i+\sum_j b_j u_j+\sum_k d_k w_k=0.
$$

Entonces $q=\sum_i a_i c_i+\sum_j b_j u_j=-\sum_k d_k w_k$ pertenece a $U\cap W$, así que $q=\sum_i e_i c_i$ para ciertos coeficientes $e_i$. La unicidad de coordenadas en la base extendida de $U$ da $b_j=0$ y $a_i=e_i$; en la base extendida de $W$ da $d_k=0$ y $e_i=0$. Luego todos los coeficientes originales son cero.

Por tanto, la lista es una base de $U+W$, de cardinal $r+p+q$. Pero $\dim U=r+p$, $\dim W=r+q$ y $\dim(U\cap W)=r$. Sustituyendo se obtiene la fórmula. $\square$

### Ejemplo trabajado: comprobar Grassmann

Para los ejes $U,W$ del ejemplo anterior, $\dim U=\dim W=1$ y $\dim(U\cap W)=0$; así, $\dim(U+W)=1+1=2$. En cambio, si $W=U$, la intersección tiene dimensión $1$ y la fórmula da $\dim(U+U)=1+1-1=1$, como debe ser.

## Espacios fila y columna de una matriz

Sea $A\in M_{m\times n}(K)$. Cada columna de $A$ es un vector de $K^m$; cada fila puede leerse como un vector de $K^n$.

### Definición de espacio columna

> [!definicion] Espacio columna
> $\operatorname{Col}(A)$ es el subespacio de $K^m$ generado por las columnas de $A$.

Es la imagen de la aplicación $x\mapsto Ax$. El sistema $Ax=b$ es compatible exactamente cuando $b\in\operatorname{Col}(A)$: el lado izquierdo es una combinación lineal de columnas con coeficientes dados por las componentes de $x$.

### Definición de espacio fila

> [!definicion] Espacio fila
> $\operatorname{Row}(A)$ es el subespacio de $K^n$ generado por las filas de $A$ (representadas como vectores de coordenadas).

El rango de $A$ es la dimensión de su espacio columna. También coincide con la dimensión del espacio fila. La eliminación por filas conserva el espacio fila y revela el número de pivotes; ese mismo número es la dimensión del espacio columna. Por ello,[^2]

$$
\operatorname{rank}(A)=\dim\operatorname{Col}(A)=\dim\operatorname{Row}(A).
$$

Para hallar una base del espacio columna, se identifican las columnas pivote al reducir $A$ y se toman esas columnas en la matriz original. Para el espacio fila, las filas no nulas de una forma escalonada reducida forman una base.

### Ejemplo trabajado: rango y espacios

Sea

$$
A=\begin{pmatrix}1&0&1\\0&1&1\\1&1&2\end{pmatrix}.
$$

La tercera columna es la suma de las dos primeras, y la tercera fila también es suma de las dos primeras. Las dos primeras columnas son independientes, como también las dos primeras filas. Así, $\operatorname{rank}(A)=2$,

$$
\operatorname{Col}(A)=\operatorname{span}\{(1,0,1),(0,1,1)\},\quad
\operatorname{Row}(A)=\operatorname{span}\{(1,0,1),(0,1,1)\}\subseteq\mathbb R^3.
$$

Los espacios fila y columna viven en copias distintas de espacios coordenados: aquí ambos son subconjuntos de $\mathbb R^3$, pero la igualdad de sus generadores como tuplas no los identifica como subespacios del mismo papel.

```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - rango
---
> [!note] Pregunta
> ¿En qué espacios viven el espacio fila y el espacio columna de $A\in M_{m\times n}(K)$?
===
> [!important] Respuesta
> $\operatorname{Row}(A)\subseteq K^n$ y $\operatorname{Col}(A)\subseteq K^m$; ambos tienen dimensión igual al rango de $A$.
```

## Lectura de las cuatro estructuras

El espacio fila y el espacio columna registran combinaciones de filas y columnas; el núcleo y el núcleo izquierdo recogen soluciones homogéneas de $A$ y $A^T$. La nota de [[Matemáticas/Álgebra lineal/Espacios vectoriales/07 Núcleo, imagen, rango y nulidad|núcleo, imagen, rango y nulidad]] profundiza en esas estructuras y en sus relaciones de dimensión.

La suma y la intersección también se pueden describir mediante generadores y ecuaciones. Cuando se necesitan dimensiones, se buscan bases; cuando se necesita una descomposición única, el primer diagnóstico es comprobar intersección trivial. La fórmula de Grassmann cuantifica cuánto se solapan dos subespacios.

> [!advertencia] Condiciones de validez: Grassmann
> La fórmula de dimensión se enuncia aquí para subespacios finito-dimensionales. En espacios de dimensión infinita no se debe aplicar esta cuenta finita sin precisar cómo se interpretan las dimensiones cardinales.

## 📚 Fuentes

### Material base aportado

- [[Matemáticas/Álgebra lineal/Espacios vectoriales/08 Suma, intersección y suma directa|Suma, intersección y suma directa]], nota canónica para suma, intersección, suma directa y demostración de Grassmann.
- Índice curricular de Álgebra Lineal y Geometría Analítica para Física, FCUL: espacios fila y columna, rango, sumas, intersección y suma directa.

### Ampliación académica

[^1]: Jim Hefferon, [*Linear Algebra*](https://hefferon.net/linearalgebra/), texto abierto, capítulos sobre subespacios, bases y dimensión.
[^2]: Gilbert Strang, [*Column Space and Nullspace*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/column-space-and-nullspace/), MIT OpenCourseWare. Relación entre columnas, sistemas compatibles y subespacios asociados a una matriz.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como tutor universitario. Pide distinguir suma de unión, reconstruir el criterio de suma directa y explicar por qué Grassmann resta la dimensión de la intersección. Para matrices, haz que el estudiante identifique el espacio ambiente de filas y columnas y justifique una base mediante pivotes; ofrece pistas graduadas sin proponer una hoja de ejercicios.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
