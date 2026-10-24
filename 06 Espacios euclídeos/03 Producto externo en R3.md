---
schema: nabla-phi-note/v1
title: Producto externo en R³
aliases:
  - Producto vectorial en R3
  - Producto cruz
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
  - Geometría
tipo:
  - lección
  - procedimiento
nivel: universitario-introductorio
estado: borrador
capa: curricular
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/06 Espacios euclídeos/01 Producto interno, norma y ángulo|Producto interno, norma y ángulo]]"
desbloquea:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/06 Espacios euclídeos/05 Rectas, planos y distancias|Rectas, planos y distancias]]"
relacionado:
  - "[[Matemáticas/Geometría/Vectores/Producto vectorial|Producto vectorial]]"
  - "[[Matemáticas/Geometría/Vectores/Producto mixto|Producto mixto]]"
fsrs_goal: Calcula e interpreta productos vectoriales en R³, determina su orientación y área, verifica perpendicularidad y usa el producto mixto para volumen y coplanaridad.
tags:
  - matematicas
  - algebra-lineal
  - geometria
  - producto-vectorial
  - producto-mixto
  - fcul
---
```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```
# Producto externo en R³
El producto interno de dos vectores devuelve un escalar y mide su alineación. El [[Matemáticas/Geometría/Vectores/Producto vectorial|producto vectorial]] devuelve un vector perpendicular a ambos y codifica el área orientada que generan. Esta operación depende de la geometría y de la orientación de $\mathbb R^3$.[^1]

## Definición y fórmula por componentes
> [!definicion] Producto vectorial
> Para $u,v\in\mathbb R^3$, el **producto vectorial** $u\times v$ es el vector perpendicular a $u$ y $v$ cuyo módulo es
> $$
> \|u\times v\|=\|u\|\,\|v\|\sin\theta,
> $$
> donde $\theta\in[0,\pi]$ es el ángulo entre ellos, y cuyo sentido se fija por la orientación dextrógira o regla de la mano derecha.[^1]

Si
$$
u=(u_1,u_2,u_3),
\qquad
v=(v_1,v_2,v_3),
$$
entonces
$$
u\times v=
\bigl(
u_2v_3-u_3v_2,
u_3v_1-u_1v_3,
u_1v_2-u_2v_1
\bigr).
$$

La escritura simbólica
$$
u\times v=
\begin{vmatrix}
e_1&e_2&e_3\\
u_1&u_2&u_3\\
v_1&v_2&v_3
\end{vmatrix}
$$
es una regla mnemotécnica para esa expansión; la primera fila contiene vectores, por lo que no es un determinante escalar ordinario.

```anki
deck: Física::Álgebra Lineal::Espacios euclídeos
tags:
  - matematicas
  - algebra-lineal
  - producto-vectorial
---
> [!note] Pregunta
> ¿Qué tipo de objeto es $u\times v$ y cómo se determina su sentido?
===
> [!important] Respuesta
> Es un vector perpendicular a $u$ y $v$; su sentido se fija mediante la orientación dextrógira o regla de la mano derecha.
```

## Orientación y orden de los factores
En la base canónica orientada positivamente,
$$
e_1\times e_2=e_3,
\qquad
e_2\times e_3=e_1,
\qquad
e_3\times e_1=e_2.
$$
Invertir el orden invierte el sentido:
$$
v\times u=-(u\times v).
$$
Por ello $e_2\times e_1=-e_3$. El producto vectorial es antisimétrico y, en particular, $u\times u=0$.

Una base ordenada $(u,v,w)$ tiene orientación positiva cuando
$$
\det\begin{pmatrix}u&v&w\end{pmatrix}>0.
$$
El vector $u\times v$ se elige en la dirección normal para la cual $(u,v,u\times v)$ tiene orientación positiva cuando $u$ y $v$ son independientes.

## Ortogonalidad y dependencia
La fórmula por componentes permite comprobar
$$
(u\times v)\cdot u=0,
\qquad
(u\times v)\cdot v=0.
$$
Por ejemplo, en el primer producto los términos se cancelan por pares:
$$
u_1(u_2v_3-u_3v_2)
+u_2(u_3v_1-u_1v_3)
+u_3(u_1v_2-u_2v_1)=0.
$$

> [!teorema] Producto nulo y paralelismo
> $u\times v=0$ si y sólo si $u$ y $v$ son linealmente dependientes.

Si uno es múltiplo del otro, la bilinealidad y $u\times u=0$ dan producto nulo. Recíprocamente, la fórmula del módulo implica $\|u\|\|v\|\sin\theta=0$; si ambos son no nulos, $\theta$ es $0$ o $\pi$ y son paralelos.

## Área y la identidad de Lagrange
> [!teorema] Identidad de Lagrange
> Para $u,v\in\mathbb R^3$,
> $$
> \|u\times v\|^2
> =\|u\|^2\|v\|^2-(u\cdot v)^2.
> $$

Como $u\cdot v=\|u\|\|v\|\cos\theta$, el miembro derecho es
$$
\|u\|^2\|v\|^2(1-\cos^2\theta)
=\|u\|^2\|v\|^2\sin^2\theta,
$$
que coincide con el cuadrado del módulo definido antes.[^2]

Los vectores $u$ y $v$ generan un paralelogramo de área
$$
\operatorname{Área}_{\parallel}=\|u\times v\|.
$$
El triángulo correspondiente tiene la mitad de esa área. Si las componentes representan longitudes, el módulo del producto vectorial tiene unidades de longitud cuadrada.

## Propiedades algebraicas esenciales
El producto vectorial es bilineal:
$$
(au+bv)\times w=a(u\times w)+b(v\times w),
$$
$$
u\times(av+bw)=a(u\times v)+b(u\times w).
$$
También es antisimétrico, pero no es asociativo. En general,
$$
(u\times v)\times w\neq u\times(v\times w).
$$

Las identidades del producto vectorial triple son
$$
u\times(v\times w)
=v(u\cdot w)-w(u\cdot v),
$$
$$
(u\times v)\times w
=v(u\cdot w)-u(v\cdot w).
$$
Los paréntesis determinan qué producto se calcula primero y no pueden omitirse.

## Ejemplo trabajado
Sean
$$
u=(1,2,0),
\qquad
v=(3,0,1).
$$
Entonces
$$
u\times v
=(2\cdot1-0\cdot0,\,0\cdot3-1\cdot1,\,1\cdot0-2\cdot3)
=(2,-1,-6).
$$
Las comprobaciones de perpendicularidad son
$$
(2,-1,-6)\cdot(1,2,0)=2-2=0,
$$
$$
(2,-1,-6)\cdot(3,0,1)=6-6=0.
$$
El área del paralelogramo es
$$
\|u\times v\|=\sqrt{4+1+36}=\sqrt{41}.
$$
Al invertir los factores se obtiene $v\times u=(-2,1,6)$: cambia la orientación, pero no el área.

## Ampliación opcional: producto mixto
> [!definicion] Producto mixto
> El **producto mixto** de $u,v,w\in\mathbb R^3$ es el escalar
> $$
> [u,v,w]=u\cdot(v\times w).
> $$

En la base canónica,
$$
u\cdot(v\times w)
=\det\begin{pmatrix}u&v&w\end{pmatrix}.
$$
Su valor absoluto es el volumen del paralelepípedo generado por los tres vectores; el signo registra la orientación. El producto mixto es cero exactamente cuando los tres vectores son linealmente dependientes, es decir, coplanarios si ninguno de los casos degenerados altera esa lectura.[^2]

Las permutaciones cíclicas conservan el valor:
$$
u\cdot(v\times w)
=v\cdot(w\times u)
=w\cdot(u\times v).
$$
Intercambiar dos factores cambia el signo. La nota [[Matemáticas/Geometría/Vectores/Producto mixto|Producto mixto]] registra el concepto canónico pendiente de desarrollo; aquí se usa únicamente esta frontera curricular.

```anki
deck: Física::Álgebra Lineal::Espacios euclídeos
tags:
  - matematicas
  - algebra-lineal
  - producto-mixto
---
> [!note] Pregunta
> ¿Qué interpreta geométricamente $|u\cdot(v\times w)|$?
===
> [!important] Respuesta
> El volumen del paralelepípedo generado por $u$, $v$ y $w$.
```

## Condiciones de validez y errores frecuentes
El producto vectorial con resultado vectorial pertenece específicamente a un espacio euclídeo tridimensional orientado. Para vectores de $\mathbb R^2$ puede aplicarse tras identificarlos con $(x,y,0)$, pero el resultado vive en $\mathbb R^3$.

El producto no es conmutativo ni asociativo. Un resultado perpendicular pero con signo opuesto suele indicar que se invirtió el orden de los factores. Las dos comprobaciones escalares de ortogonalidad detectan errores de componentes, pero no distinguen por sí solas el sentido correcto.

## 📚 Fuentes
### Material base
- Faculdade de Ciências da Universidade de Lisboa, [*Álgebra Linear e Geometria Analítica — programa 2026/27*](https://fenix.ciencias.ulisboa.pt/courses/algana-2817829258658182/programa), alcance curricular del producto externo en $\mathbb R^3$.

### Ampliación académica
[^1]: OpenStax, [*Calculus Volume 3 — The Cross Product*](https://openstax.org/books/calculus-volume-3/pages/2-4-the-cross-product), definición, orientación, cálculo y propiedades del producto vectorial.
[^2]: OpenStax, [*University Physics Volume 1 — Products of Vectors*](https://openstax.org/books/university-physics-volume-1/pages/2-4-products-of-vectors), interpretaciones geométricas de áreas, volúmenes y triple producto escalar.

## 🧑‍🏫 Prompt para tutor conversacional
Actúa como tutor universitario de Álgebra Lineal y Geometría. Da dos vectores de $\mathbb R^3$ y pide calcular su producto vectorial, justificar el sentido, comprobar perpendicularidad y hallar el área generada. Introduce después un tercer vector para interpretar el producto mixto y decidir coplanaridad. Usa pistas graduadas y exige distinguir siempre resultado escalar, resultado vectorial y efecto de intercambiar factores.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
