---
schema: nabla-phi-note/v1
title: Bases ortogonales y Gram–Schmidt
aliases:
  - Ortonormalización de Gram-Schmidt
  - Complemento ortogonal
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
tipo:
  - lección
  - procedimiento
  - teorema
nivel: universitario-introductorio
estado: borrador
capa: curricular
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/06 Espacios euclídeos/01 Producto interno, norma y ángulo|Producto interno, norma y ángulo]]"
desbloquea:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/06 Espacios euclídeos/04 Proyecciones matriciales y mínimos cuadrados|Proyecciones matriciales y mínimos cuadrados]]"
relacionado:
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/11 Producto escalar y Gram–Schmidt|Producto escalar y Gram–Schmidt]]"
fsrs_goal: Reconoce y construye bases ortonormales, aplica Gram–Schmidt conservando el subespacio generado y calcula complementos ortogonales y descomposiciones V=U⊕U^⊥.
tags:
  - matematicas
  - algebra-lineal
  - espacios-euclideos
  - gram-schmidt
  - complemento-ortogonal
  - fcul
---
```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```
# Bases ortogonales y Gram–Schmidt
La ortogonalidad convierte una base en un sistema de coordenadas especialmente transparente: cada coeficiente se recupera mediante un producto interno. Gram–Schmidt construye ese sistema a partir de cualquier familia independiente sin cambiar el subespacio generado.[^1]

## Familias ortogonales y ortonormales
> [!definicion] Familia ortogonal
> Una familia $(u_1,\ldots,u_r)$ es **ortogonal** si
> $$
> \langle u_i,u_j\rangle=0
> \qquad\text{cuando }i\neq j.
> $$

> [!definicion] Familia ortonormal
> Una familia es **ortonormal** si es ortogonal y cada vector tiene norma $1$:
> $$
> \langle e_i,e_j\rangle=\delta_{ij},
> $$
> donde $\delta_{ij}$ vale $1$ si $i=j$ y $0$ en otro caso.

Una base ortogonal u ortonormal es una familia de ese tipo que además genera todo el espacio considerado.

### Ortogonalidad e independencia
> [!teorema] Independencia de una familia ortogonal
> Toda familia ortogonal de vectores no nulos es linealmente independiente.[^1]

Si $\sum_j a_ju_j=0$, se toma el producto interno con $u_i$:
$$
0=\left\langle\sum_j a_ju_j,u_i\right\rangle
=a_i\|u_i\|^2.
$$
Como $u_i\neq0$, su norma al cuadrado es positiva y $a_i=0$. El argumento vale para cada índice.

## Coordenadas en una base ortonormal
Sea $(e_1,\ldots,e_n)$ una base ortonormal de $V$. Si $v=\sum_i a_ie_i$, entonces
$$
\langle v,e_j\rangle
=\sum_i a_i\langle e_i,e_j\rangle
=a_j.
$$
Por tanto,
$$
v=\sum_{j=1}^{n}\langle v,e_j\rangle e_j.
$$
No es necesario resolver un sistema lineal: los productos internos separan directamente las coordenadas.[^2]

Para una base meramente ortogonal $(u_1,\ldots,u_n)$,
$$
v=\sum_{j=1}^{n}
\frac{\langle v,u_j\rangle}{\langle u_j,u_j\rangle}u_j.
$$

```anki
deck: Física::Álgebra Lineal::Espacios euclídeos
tags:
  - matematicas
  - algebra-lineal
  - base-ortonormal
---
> [!note] Pregunta
> ¿Cómo se obtiene la coordenada de $v$ asociada a $e_j$ en una base ortonormal?
===
> [!important] Respuesta
> Es $\langle v,e_j\rangle$.
```

## Procedimiento de Gram–Schmidt
> [!procedimiento] Ortogonalización
> Dada una familia independiente $(v_1,\ldots,v_r)$, se define
> $$
> u_1=v_1
> $$
> y, para $k\geq2$,
> $$
> u_k=v_k-
> \sum_{j=1}^{k-1}
> \frac{\langle v_k,u_j\rangle}{\langle u_j,u_j\rangle}u_j.
> $$
> Finalmente se normaliza cada vector:
> $$
> e_k=\frac{u_k}{\|u_k\|}.
> $$
> La familia $(e_1,\ldots,e_r)$ es ortonormal y genera el mismo subespacio que la familia inicial.[^2]

### Por qué cada paso produce ortogonalidad
Para $i<k$,
$$
\langle u_k,u_i\rangle
=\langle v_k,u_i\rangle-
\sum_{j=1}^{k-1}
\frac{\langle v_k,u_j\rangle}{\langle u_j,u_j\rangle}
\langle u_j,u_i\rangle.
$$
Como los $u_j$ anteriores son ortogonales, sólo sobrevive el término $j=i$, que cancela el primero. Por tanto $u_k\perp u_i$.

### Por qué se conserva el subespacio generado
Cada $u_k$ es $v_k$ menos una combinación de los vectores anteriores, y cada $v_k$ puede recuperarse sumando esa combinación a $u_k$. Por inducción,
$$
\operatorname{span}\{u_1,\ldots,u_k\}
=\operatorname{span}\{v_1,\ldots,v_k\}.
$$
Ningún $u_k$ es cero: de serlo, $v_k$ sería combinación de sus predecesores, contra la independencia inicial.

## Ejemplo trabajado de Gram–Schmidt
Sean
$$
v_1=(1,1,0),
\qquad
v_2=(1,0,1).
$$
Se toma $u_1=v_1$. Como $\langle v_2,u_1\rangle=1$ y $\langle u_1,u_1\rangle=2$,
$$
u_2=v_2-\frac12u_1
=\left(\frac12,-\frac12,1\right).
$$
La comprobación $\langle u_1,u_2\rangle=0$ confirma la ortogonalidad. Las normas son
$$
\|u_1\|=\sqrt2,
\qquad
\|u_2\|=\sqrt{\frac32}.
$$
Por tanto,
$$
e_1=\frac1{\sqrt2}(1,1,0),
\qquad
e_2=\frac1{\sqrt6}(1,-1,2).
$$
Ambos vectores tienen norma $1$, son ortogonales y generan el mismo plano que $v_1,v_2$.

## Proyección sobre un subespacio
Sea $(e_1,\ldots,e_r)$ una base ortonormal de un subespacio $U\subseteq V$.

> [!definicion] Proyección ortogonal sobre $U$
> La proyección de $v$ sobre $U$ es
> $$
> \operatorname{proj}_U(v)
> =\sum_{j=1}^{r}\langle v,e_j\rangle e_j.
> $$

El residuo $v-\operatorname{proj}_U(v)$ es ortogonal a cada $e_i$ y, por linealidad, a todo vector de $U$. La fórmula no depende de la base ortonormal concreta elegida porque caracteriza el único vector $p\in U$ cuyo residuo $v-p$ es ortogonal a $U$.

## Complemento ortogonal
> [!definicion] Complemento ortogonal
> Para un subespacio $U\subseteq V$,
> $$
> U^\perp=\{v\in V:\langle v,u\rangle=0\text{ para todo }u\in U\}.
> $$

El conjunto $U^\perp$ es un subespacio. Basta comprobar el cero y el cierre: si $x,y\in U^\perp$, entonces para $a,b\in\mathbb R$ y $u\in U$,
$$
\langle ax+by,u\rangle
=a\langle x,u\rangle+b\langle y,u\rangle=0.
$$

Si $U=\operatorname{span}\{u_1,\ldots,u_r\}\subseteq\mathbb R^n$, basta imponer
$$
x\cdot u_i=0
$$
para cada generador. Estas ecuaciones lineales calculan $U^\perp$ como un núcleo.

### Ejemplo trabajado
Para $U=\operatorname{span}\{(1,1,0),(0,1,1)\}\subseteq\mathbb R^3$, un vector $(x,y,z)$ pertenece a $U^\perp$ si
$$
x+y=0,
\qquad
y+z=0.
$$
Tomando $y=t$, resulta $(x,y,z)=t(-1,1,-1)$ y
$$
U^\perp=\operatorname{span}\{(-1,1,-1)\}.
$$

## Descomposición ortogonal
> [!teorema] Descomposición $V=U\oplus U^\perp$
> Si $V$ es un espacio euclídeo de dimensión finita y $U\subseteq V$ es un subespacio, entonces
> $$
> V=U\oplus U^\perp.
> $$
> Además, $\dim U+\dim U^\perp=\dim V$.[^1]

Se elige una base ortonormal $(e_1,\ldots,e_r)$ de $U$ y se extiende a una base ortonormal $(e_1,\ldots,e_n)$ de $V$. Los vectores añadidos generan $U^\perp$. Así, cada $v\in V$ se escribe de forma única como
$$
v=\underbrace{\sum_{i=1}^{r}\langle v,e_i\rangle e_i}_{\in U}
+\underbrace{\sum_{i=r+1}^{n}\langle v,e_i\rangle e_i}_{\in U^\perp}.
$$
La intersección es trivial: si $x\in U\cap U^\perp$, entonces $\langle x,x\rangle=0$ y $x=0$.

## Condiciones de validez y errores frecuentes
Gram–Schmidt requiere una familia independiente. Si aparece $u_k=0$, la familia inicial era dependiente y no puede normalizarse sin eliminar la redundancia. El orden de los vectores puede cambiar la base ortonormal obtenida, aunque el subespacio final sea el mismo.

El complemento ortogonal depende del espacio ambiente y del producto interno. Un mismo subespacio puede tener complementos distintos si cambia cualquiera de esos datos.

## 📚 Fuentes
### Material base
- Faculdade de Ciências da Universidade de Lisboa, [*Álgebra Linear e Geometria Analítica — programa 2026/27*](https://fenix.ciencias.ulisboa.pt/courses/algana-2817829258658182/programa), alcance curricular de bases ortogonales, Gram–Schmidt y complementos ortogonales.

### Ampliación académica
[^1]: Jim Hefferon, [*Linear Algebra*](https://hefferon.net/linearalgebra/), texto universitario abierto; bases ortonormales y complementos ortogonales.
[^2]: MIT OpenCourseWare, [*Orthogonal Matrices and Gram-Schmidt*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/orthogonality/orthogonal-matrices-and-gram-schmidt/), coordenadas ortogonales, proyección y procedimiento de Gram–Schmidt.

## 🧑‍🏫 Prompt para tutor conversacional
Actúa como tutor universitario de Álgebra Lineal. Da una familia independiente y pide aplicar Gram–Schmidt justificando cada proyección, comprobar productos cruzados y normalizar al final. Después solicita una proyección sobre el subespacio obtenido y el cálculo de su complemento ortogonal. Exige cerrar con la descomposición de un vector como suma de sus componentes en $U$ y $U^\perp$, usando pistas graduadas.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
