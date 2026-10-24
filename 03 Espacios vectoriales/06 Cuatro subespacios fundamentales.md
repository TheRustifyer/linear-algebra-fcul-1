---
schema: nabla-phi-note/v1
title: Cuatro subespacios fundamentales
aliases:
  - Los cuatro subespacios fundamentales de una matriz
  - Espacio nulo izquierdo
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
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/05 Sumas y espacios asociados a una matriz|Sumas y espacios asociados a una matriz]]"
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/07 Núcleo, imagen, rango y nulidad|Núcleo, imagen, rango y nulidad]]"
desbloquea:
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/09 Aplicaciones lineales|Aplicaciones lineales]]"
relacionado:
  - "[[Matemáticas/Álgebra lineal/Matrices|Matrices]]"
fsrs_goal: Identifica los cuatro subespacios de una matriz y sus espacios ambiente, calcula sus dimensiones y ortogonalidades, justifica la igualdad de rangos y determina cuándo A^T A es invertible y cuál es la única solución en Row(A) para un sistema compatible.
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
  - ampliacion
  - fcul
---

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

# Cuatro subespacios fundamentales

Una matriz $A$ organiza una transformación entre espacios de coordenadas. Sus columnas describen los vectores que pueden alcanzarse; su núcleo identifica las entradas que desaparecen. Al transponer la matriz aparecen las dos estructuras complementarias: espacio fila y núcleo izquierdo. Las cuatro dimensiones se rigen por un mismo número, el rango.

> [!nota] Ampliación curricular externa
> Los cuatro subespacios fundamentales amplían el núcleo curricular. Se presentan aquí como una síntesis que conecta rango, soluciones de sistemas y ortogonalidad.

En esta nota se trabaja sobre $\mathbb R$ con el producto escalar euclídeo. Para matrices complejas, las relaciones ortogonales se escriben usando el producto hermítico y se sustituye el transpuesto $A^T$ por el adjunto $A^*$ donde corresponda.

## Definición y espacios ambiente

Sea $A\in M_{m\times n}(\mathbb R)$. La matriz define una aplicación $x\mapsto Ax$ de $\mathbb R^n$ a $\mathbb R^m$. Sus cuatro subespacios son:

### Espacio columna

> [!definicion] Espacio columna
> $\operatorname{Col}(A)$ es el subespacio de $\mathbb R^m$ generado por las columnas de $A$; equivale a la imagen de $x\mapsto Ax$.

Sus vectores son las salidas posibles de la transformación. El sistema $Ax=b$ tiene solución si y sólo si $b\in\operatorname{Col}(A)$.

### Espacio nulo

> [!definicion] Espacio nulo
> $\operatorname{Nul}(A)=\{x\in\mathbb R^n:Ax=0\}$ es el conjunto de soluciones del sistema homogéneo.

Vive en el dominio $\mathbb R^n$: sus vectores son entradas que la matriz transforma en cero.

### Espacio fila

> [!definicion] Espacio fila
> $\operatorname{Row}(A)$ es el subespacio de $\mathbb R^n$ generado por las filas de $A$, interpretadas como vectores de coordenadas.

Vive en el mismo espacio que el núcleo. Esto permite compararlos mediante ortogonalidad.

### Núcleo izquierdo

> [!definicion] Núcleo izquierdo
> $\operatorname{Nul}(A^T)=\{y\in\mathbb R^m:A^Ty=0\}$ es el espacio nulo de la matriz transpuesta.

También se describe como el conjunto de vectores $y$ tales que $y^TA=0$. Vive en el codominio $\mathbb R^m$ y mide las relaciones lineales entre las filas de $A$.

El nombre «izquierdo» procede de que esos vectores pueden multiplicar a $A$ por la izquierda como vectores fila. Los cuatro espacios son subespacios con las operaciones habituales.

## Dimensiones y rango

Sea $r=\operatorname{rank}(A)$, el número de pivotes de una forma escalonada de $A$. El espacio columna y el espacio fila tienen dimensión $r$. El teorema rango–nulidad y su aplicación a $A^T$ dan las cuatro dimensiones:

$$
\begin{array}{c|c|c}
\text{subespacio}&\text{ambiente}&\text{dimensión}\\\hline
\operatorname{Col}(A)&\mathbb R^m&r\\
\operatorname{Nul}(A)&\mathbb R^n&n-r\\
\operatorname{Row}(A)&\mathbb R^n&r\\
\operatorname{Nul}(A^T)&\mathbb R^m&m-r
\end{array}
$$

En particular, las dimensiones del núcleo y del espacio columna suman $n$, la dimensión del dominio. Las del núcleo izquierdo y del espacio fila suman $m$, la dimensión del espacio de filas de la matriz.[^1]

### Por qué los rangos por filas y columnas coinciden

La eliminación por filas transforma $A$ en una matriz escalonada equivalente. Sus filas no nulas son independientes y generan el mismo espacio fila, por lo que su número es $\dim\operatorname{Row}(A)$. Ese número también es el número de pivotes. Las columnas pivote de la matriz original son independientes y generan $\operatorname{Col}(A)$; por tanto $\dim\operatorname{Col}(A)$ es el mismo número. Así,

$$
\operatorname{rank}(A)=\dim\operatorname{Row}(A)=\dim\operatorname{Col}(A)=\operatorname{rank}(A^T).
$$

Transponer intercambia filas y columnas; la igualdad resultante se llama igualdad de rango fila y rango columna.[^1]

## Ortogonalidad entre los espacios

Para $x,y\in\mathbb R^n$, el producto escalar es $x^Ty$. Un vector es ortogonal a un subespacio si su producto escalar con cada vector del subespacio es cero.

### Núcleo y espacio fila

Si $x\in\operatorname{Nul}(A)$, entonces cada fila $r_i$ de $A$ satisface $r_i x=0$, es decir, es ortogonal a $x$. Por linealidad, $x$ es ortogonal a toda combinación de filas. Así,

$$
\operatorname{Nul}(A)=\operatorname{Row}(A)^\perp.
$$

La inclusión inversa también se sigue de las filas: si $x$ es ortogonal a cada fila, todas las entradas de $Ax$ son cero, luego $x\in\operatorname{Nul}(A)$.

### Núcleo izquierdo y espacio columna

Análogamente, $A^Ty=0$ significa que $y$ es ortogonal a cada columna de $A$. Por tanto

$$
\operatorname{Nul}(A^T)=\operatorname{Col}(A)^\perp.
$$

Las igualdades expresan complementariedad ortogonal dentro de sus espacios ambientes respectivos: Row y Nul están en $\mathbb R^n$; Col y Nul$(A^T)$, en $\mathbb R^m$.[^2]

## El sistema $Ax=b$ y la solución en el espacio fila

Si $Ax=b$ es compatible y $x_0$ es una solución, cualquier otra solución tiene la forma $x_0+z$ con $z\in\operatorname{Nul}(A)$, pues $A(x-x_0)=0$. Entre todas ellas existe una única solución que pertenece a $\operatorname{Row}(A)$.

### Existencia y unicidad

Como $\mathbb R^n=\operatorname{Row}(A)\oplus\operatorname{Nul}(A)$ por la ortogonalidad anterior, descompón $x_0=x_r+x_n$ con $x_r\in\operatorname{Row}(A)$ y $x_n\in\operatorname{Nul}(A)$. Entonces

$$
Ax_r=A(x_0-x_n)=Ax_0-Ax_n=b-0=b,
$$

así que $x_r$ es una solución en el espacio fila. Si $u,v\in\operatorname{Row}(A)$ son ambas soluciones, entonces $A(u-v)=0$ y $u-v\in\operatorname{Nul}(A)$. Pero $u-v$ también está en $\operatorname{Row}(A)$; como ambos espacios son ortogonales, su intersección sólo contiene el cero. Luego $u=v$.

Esta es la solución compatible de norma mínima: cualquier otra solución difiere de $x_r$ por un vector nulo ortogonal a $x_r$, así que $\|x_r+z\|^2=\|x_r\|^2+\|z\|^2\ge\|x_r\|^2$.

## Cuándo $A^TA$ es invertible

La matriz $A^TA$ es $n\times n$ y, para todo $x\in\mathbb R^n$,

$$
x^TA^TAx=(Ax)^T(Ax)=\|Ax\|^2.
$$

Si $Ax=0$, entonces $A^TAx=0$. Recíprocamente, si $A^TAx=0$, la igualdad anterior da $\|Ax\|^2=0$, y por positividad de la norma $Ax=0$. Así,

$$
\operatorname{Nul}(A^TA)=\operatorname{Nul}(A).
$$

Como $A^TA$ es cuadrada, es invertible exactamente cuando su núcleo es trivial. Por tanto

$$
A^TA\text{ es invertible}\quad\Longleftrightarrow\quad
\operatorname{Nul}(A)=\{0\}\quad\Longleftrightarrow\quad
\operatorname{rank}(A)=n.
$$

Esto ocurre exactamente cuando las columnas de $A$ son linealmente independientes. Para matrices complejas, el resultado correspondiente usa $A^*A$ y la norma hermítica.

## Ejemplo trabajado: los cuatro espacios de una matriz

Considera

$$
A=\begin{pmatrix}1&1\\2&2\end{pmatrix}.
$$

Su rango es $1$. Las columnas generan $\operatorname{span}\{(1,2)\}$ y las filas generan $\operatorname{span}\{(1,1)\}$. Resolviendo $x_1+x_2=0$,

$$
\operatorname{Nul}(A)=\operatorname{span}\{(-1,1)\}.
$$

Asimismo $A^Ty=0$ equivale a $y_1+2y_2=0$, así que

$$
\operatorname{Nul}(A^T)=\operatorname{span}\{(-2,1)\}.
$$

Las dimensiones son $1,1,1,1$ en los espacios ambiente correspondientes. Se comprueba la ortogonalidad: $(1,1)\cdot(-1,1)=0$ y $(1,2)\cdot(-2,1)=0$. Como el rango no es $2$, $A^TA$ no es invertible.

Ahora toma $b=(3,6)$. El sistema $Ax=b$ se reduce a $x_1+x_2=3$ y tiene soluciones $(t,3-t)$. $\operatorname{Row}(A)=\operatorname{span}\{(1,1)\}$; su única solución en ese espacio es $(3/2,3/2)$, que satisface la ecuación y es ortogonal a la dirección nula $(-1,1)$.

```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - cuatro-subespacios
---
> [!note] Pregunta
> Si $A\in M_{m\times n}(\mathbb R)$ tiene rango $r$, ¿cuáles son las dimensiones de $\operatorname{Nul}(A)$ y $\operatorname{Nul}(A^T)$?
===
> [!important] Respuesta
> $\dim\operatorname{Nul}(A)=n-r$ y $\dim\operatorname{Nul}(A^T)=m-r$.
```

## Síntesis y límites

Los cuatro subespacios separan la acción de una matriz en el dominio y el codominio: dos viven en $\mathbb R^n$, dos en $\mathbb R^m$. El rango cuenta las direcciones conservadas; las nulidades cuentan las direcciones anuladas en cada lado. La ortogonalidad muestra que cada par complementario llena su espacio ambiente.

**Condiciones de validez.** La afirmación de invertibilidad de $A^TA$ requiere trabajar sobre $\mathbb R$ con producto escalar positivo definido. En un cuerpo arbitrario no existe necesariamente una noción de norma con la que valga la prueba $x^TA^TAx=\|Ax\|^2$. Para $A\in M_{m\times n}$ con $m<n$, el rango nunca puede ser $n$, así que $A^TA$ no es invertible.

## 📚 Fuentes

### Material base aportado

- [[Matemáticas/Álgebra lineal/Espacios vectoriales/07 Núcleo, imagen, rango y nulidad|Núcleo, imagen, rango y nulidad]], nota canónica para núcleo, imagen, rango y nulidad.
- Índice curricular de Álgebra Lineal y Geometría Analítica para Física, FCUL: esta nota está marcada como ampliación curricular externa.

### Ampliación académica

[^1]: Jim Hefferon, [*Linear Algebra*](https://hefferon.net/linearalgebra/), texto abierto de primer curso universitario; rango, núcleo y dimensiones.
[^2]: Gilbert Strang, [*Column Space and Nullspace*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/column-space-and-nullspace/), MIT OpenCourseWare; relaciona el espacio columna y el núcleo con la geometría de $Ax=b$.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como tutor de Álgebra Lineal. Para una matriz dada, haz que el estudiante identifique cada espacio y ambiente, justifique las dimensiones por rango y nulidad, y explique una ortogonalidad mediante el producto escalar. Comprueba que distingue las condiciones para compatibilidad de $Ax=b$ y para invertibilidad de $A^TA$.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
