---
schema: nabla-phi-note/v1
title: Producto interno, norma y ángulo
aliases:
  - Producto escalar y geometría euclídea
  - Norma, distancia y ortogonalidad
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
tipo:
  - lección
  - definición
  - teorema
nivel: universitario-introductorio
estado: borrador
capa: curricular
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/01 Espacios vectoriales y axiomas|Espacios vectoriales y axiomas]]"
desbloquea:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/06 Espacios euclídeos/02 Bases ortogonales y Gram-Schmidt|Bases ortogonales y Gram–Schmidt]]"
relacionado:
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/11 Producto escalar y Gram–Schmidt|Producto escalar y Gram–Schmidt]]"
fsrs_goal: Verifica productos internos reales, calcula normas, distancias, ángulos y proyecciones, y justifica Cauchy–Schwarz, la desigualdad triangular y la propiedad de mejor aproximación.
tags:
  - matematicas
  - algebra-lineal
  - espacios-euclideos
  - producto-interno
  - norma
  - fcul
---
```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```
# Producto interno, norma y ángulo
La estructura de espacio vectorial permite sumar vectores y escalarlos, pero no contiene por sí sola ninguna noción de longitud o perpendicularidad. Un producto interno añade esa geometría y permite definir norma, distancia, ángulo y proyección sin abandonar el lenguaje algebraico.[^1]

## Producto interno real
> [!definicion] Producto interno
> Sea $V$ un espacio vectorial real. Un **producto interno** es una aplicación $\langle\cdot,\cdot\rangle:V\times V\to\mathbb R$ tal que, para $u,v,w\in V$ y $a,b\in\mathbb R$,
> $$
> \langle au+bv,w\rangle=a\langle u,w\rangle+b\langle v,w\rangle,
> $$
> $$
> \langle u,v\rangle=\langle v,u\rangle,
> \qquad
> \langle v,v\rangle\geq0,
> $$
> y $\langle v,v\rangle=0$ si y sólo si $v=0_V$. El par $(V,\langle\cdot,\cdot\rangle)$ es un **espacio euclídeo**.[^1]

La simetría y la linealidad en el primer argumento implican linealidad en el segundo. En $\mathbb R^n$, el producto usual es
$$
\langle x,y\rangle=x^Ty=\sum_{i=1}^{n}x_iy_i.
$$
No es el único: si $M$ es simétrica definida positiva, $\langle x,y\rangle_M=x^TMy$ también define un producto interno. La geometría depende del producto elegido.

### Ejemplo fuera de $\mathbb R^n$
En el espacio $P_2(\mathbb R)$, la regla
$$
\langle p,q\rangle=\int_{-1}^{1}p(t)q(t)\,dt
$$
es un producto interno. Así, $1$ y $t$ son ortogonales porque la integral de la función impar $t$ en $[-1,1]$ es cero.

## Norma, distancia y normalización
### Norma
> [!definicion] Norma inducida
> La **norma** inducida por el producto interno es
> $$
> \|v\|=\sqrt{\langle v,v\rangle}.
> $$

La positividad garantiza que la raíz existe y que $\|v\|=0$ sólo para $v=0_V$. Además, $\|\lambda v\|=|\lambda|\|v\|$.

### Distancia
> [!definicion] Distancia
> La **distancia** entre $u$ y $v$ es
> $$
> d(u,v)=\|u-v\|.
> $$

### Normalización
> [!definicion] Vector unitario y normalización
> Un vector $e$ es **unitario** si $\|e\|=1$. Si $v\neq0$, su normalización es
> $$
> \widehat v=\frac{v}{\|v\|}.
> $$

Normalizar conserva la dirección y, para escalares positivos, el sentido. No se puede normalizar el vector cero.

```anki
deck: Física::Álgebra Lineal::Espacios euclídeos
tags:
  - matematicas
  - algebra-lineal
  - producto-interno
---
> [!note] Pregunta
> ¿Qué norma induce un producto interno real $\langle\cdot,\cdot\rangle$?
===
> [!important] Respuesta
> $\|v\|=\sqrt{\langle v,v\rangle}$.
```

## Desigualdad de Cauchy–Schwarz
> [!teorema] Cauchy–Schwarz
> Para todos $u,v\in V$,
> $$
> |\langle u,v\rangle|\leq\|u\|\,\|v\|,
> $$
> con igualdad si y sólo si $u$ y $v$ son linealmente dependientes.[^2]

Si $v=0$, la afirmación es inmediata. Si $v\neq0$, considérese
$$
w=u-\frac{\langle u,v\rangle}{\|v\|^2}v.
$$
La positividad de $\|w\|^2$ y la expansión por bilinealidad dan
$$
0\leq\|u\|^2-rac{\langle u,v\rangle^2}{\|v\|^2}.
$$
Multiplicando por $\|v\|^2>0$ se obtiene Cauchy–Schwarz. La igualdad equivale a $w=0$, es decir, a que $u$ sea múltiplo de $v$.

## Desigualdad triangular
> [!teorema] Desigualdad triangular
> Para cualesquiera $u,v\in V$,
> $$
> \|u+v\|\leq\|u\|+\|v\|.
> $$

Al elevar al cuadrado,
$$
\|u+v\|^2
=\|u\|^2+2\langle u,v\rangle+\|v\|^2.
$$
Por Cauchy–Schwarz, $\langle u,v\rangle\leq\|u\|\|v\|$, luego
$$
\|u+v\|^2\leq(\|u\|+\|v\|)^2.
$$
Ambos miembros finales son no negativos, así que tomar raíces preserva el orden. Esta desigualdad hace que $d(u,v)=\|u-v\|$ satisfaga la propiedad triangular de una distancia.

## Ángulo y ortogonalidad
> [!definicion] Ángulo
> Para $u,v\neq0$, su ángulo es el único $\theta\in[0,\pi]$ tal que
> $$
> \cos\theta=rac{\langle u,v\rangle}{\|u\|\|v\|}.
> $$

Cauchy–Schwarz asegura que el cociente pertenece a $[-1,1]$. El ángulo no se define mediante esta fórmula si alguno de los vectores es cero.

> [!definicion] Ortogonalidad
> Los vectores $u$ y $v$ son **ortogonales**, escrito $u\perp v$, si $\langle u,v\rangle=0$.

Si $u\perp v$, la expansión anterior produce el teorema de Pitágoras:
$$
\|u+v\|^2=\|u\|^2+\|v\|^2.
$$

### Ejemplo trabajado
Para $u=(1,2,-1)$ y $v=(2,0,2)$ con el producto usual,
$$
\langle u,v\rangle=2+0-2=0.
$$
Son ortogonales. Sus normas son $\sqrt6$ y $2\sqrt2$, y la distancia entre ellos es
$$
d(u,v)=\|(-1,2,-3)\|=\sqrt{14}.
$$

## Proyección sobre una dirección
> [!definicion] Proyección ortogonal sobre una recta
> Si $a\neq0$, la proyección de $v$ sobre $\operatorname{span}\{a\}$ es
> $$
> \operatorname{proj}_a(v)
> =\frac{\langle v,a\rangle}{\langle a,a\rangle}a.
> $$

El residuo
$$
r=v-\operatorname{proj}_a(v)
$$
es ortogonal a $a$, pues al calcular $\langle r,a\rangle$ los dos términos se cancelan. Si $e$ es unitario, la fórmula se reduce a $\operatorname{proj}_e(v)=\langle v,e\rangle e$.[^2]

### Propiedad de mejor aproximación
> [!teorema] Punto más próximo de una recta
> La proyección $p=\operatorname{proj}_a(v)$ es el único vector de $L=\operatorname{span}\{a\}$ que minimiza $\|v-y\|$ entre todos los $y\in L$.

Para cualquier $y\in L$, los vectores $v-p$ y $p-y$ son ortogonales. Por Pitágoras,
$$
\|v-y\|^2
=\|(v-p)+(p-y)\|^2
=\|v-p\|^2+\|p-y\|^2
\geq\|v-p\|^2.
$$
La igualdad sólo ocurre cuando $p-y=0$, de modo que el minimizador es único.

### Ejemplo trabajado
Para $v=(3,4)$ y $a=(2,1)$,
$$
\operatorname{proj}_a(v)
=\frac{10}{5}(2,1)=(4,2).
$$
El residuo es $(-1,2)$ y satisface $(-1,2)\cdot(2,1)=0$. Cualquier otro punto de la recta queda más lejos de $v$.

## Condiciones de validez y límites
Las fórmulas de norma, ángulo y proyección dependen del producto interno especificado. Sustituirlo puede cambiar longitudes, ángulos y vectores proyectados aunque el espacio vectorial subyacente sea el mismo.

La fórmula de proyección exige $a\neq0$ porque divide por $\langle a,a\rangle$. La demostración de mejor aproximación usa positividad definida; una forma bilineal que tome valores negativos sobre $\langle v,v\rangle$ no induce esta geometría.

## 📚 Fuentes
### Material base
- Faculdade de Ciências da Universidade de Lisboa, [*Álgebra Linear e Geometria Analítica — programa 2026/27*](https://fenix.ciencias.ulisboa.pt/courses/algana-2817829258658182/programa), alcance curricular de espacios euclídeos, norma, ángulo y proyecciones.

### Ampliación académica
[^1]: Jim Hefferon, [*Linear Algebra*](https://hefferon.net/linearalgebra/), texto universitario abierto; espacios con producto interno, norma y ortogonalidad.
[^2]: MIT OpenCourseWare, [*18.06SC Linear Algebra — Orthogonality*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/orthogonality/), Cauchy–Schwarz, proyecciones y geometría ortogonal.

## 🧑‍🏫 Prompt para tutor conversacional
Actúa como tutor universitario de Álgebra Lineal. Presenta un producto interno y pide verificar sus axiomas, calcular normas, distancia y ángulo, y normalizar un vector. Haz que el estudiante reconstruya las demostraciones de Cauchy–Schwarz y la desigualdad triangular con pistas graduadas. Termina con una proyección sobre una recta y exige justificar la ortogonalidad del residuo y la propiedad de mejor aproximación.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
