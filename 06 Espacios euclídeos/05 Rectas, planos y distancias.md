---
schema: nabla-phi-note/v1
title: Rectas, planos y distancias
aliases:
  - Geometría analítica en R3
  - Ecuaciones de rectas y planos
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
  - Geometría analítica
tipo:
  - lección
  - ampliación
nivel: universitario-introductorio
estado: borrador
capa: curricular
alcance: ampliación curricular externa
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/06 Espacios euclídeos/01 Producto interno, norma y ángulo|Producto interno, norma y ángulo]]"
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/06 Espacios euclídeos/03 Producto externo en R3|Producto externo en R³]]"
desbloquea: []
relacionado:
  - "[[Matemáticas/Geometría/Geometría analítica/Recta en el espacio|Recta en el espacio]]"
  - "[[Matemáticas/Geometría/Geometría analítica/Ecuación del plano|Ecuación del plano]]"
fsrs_goal: Construye ecuaciones vectoriales y paramétricas de rectas y ecuaciones punto-normal y cartesianas de planos, clasifica posiciones relativas y calcula distancias a planos y entre planos paralelos.
tags:
  - matematicas
  - algebra-lineal
  - geometria-analitica
  - rectas
  - planos
  - distancias
  - ampliacion
  - fcul
---
```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```
# Rectas, planos y distancias
Una recta queda determinada por un punto y una dirección; un plano, por un punto y dos direcciones independientes o, de manera equivalente, por un punto y una dirección normal. Estas descripciones convierten preguntas geométricas en sistemas lineales y productos internos.[^1]

> [!nota] Ampliación curricular externa
> La geometría analítica de rectas y planos refuerza la interpretación espacial de subespacios, sistemas y ortogonalidad en $\mathbb R^3$.

## Recta en forma vectorial
> [!definicion] Recta determinada por punto y dirección
> Sean $p\in\mathbb R^3$ y $d\in\mathbb R^3$ con $d\neq0$. La recta que pasa por $p$ con vector director $d$ es
> $$
> L=\{p+td:t\in\mathbb R\}.
> $$
> Su ecuación vectorial es $r(t)=p+td$.[^1]

El parámetro $t$ recorre todos los múltiplos de la dirección. Sustituir $d$ por cualquier múltiplo no nulo produce la misma recta. Cambiar $p$ por otro punto de $L$ tampoco cambia el conjunto.

### Ecuaciones paramétricas
Si $p=(x_0,y_0,z_0)$ y $d=(a,b,c)$, la ecuación vectorial equivale a
$$
x=x_0+at,
\qquad
y=y_0+bt,
\qquad
z=z_0+ct.
$$
Estas son las ecuaciones paramétricas. Permiten comprobar pertenencia buscando un mismo valor de $t$ que satisfaga las tres coordenadas.

### Ejemplo trabajado
La recta que pasa por $p=(1,-1,2)$ y tiene dirección $d=(2,1,-1)$ es
$$
r(t)=(1,-1,2)+t(2,1,-1).
$$
En forma paramétrica,
$$
x=1+2t,
\qquad y=-1+t,
\qquad z=2-t.
$$
El punto $(3,0,1)$ pertenece a la recta porque las tres ecuaciones se satisfacen con $t=1$.

```anki
deck: Física::Álgebra Lineal::Espacios euclídeos
tags:
  - matematicas
  - geometria-analitica
  - recta
---
> [!note] Pregunta
> ¿Qué datos determinan una recta en $\mathbb R^3$ y cuál es su ecuación vectorial?
===
> [!important] Respuesta
> Un punto $p$ y un vector director no nulo $d$; la ecuación es $r(t)=p+td$.
```

## Plano en forma punto-normal
> [!definicion] Plano determinado por punto y normal
> Sean $p\in\mathbb R^3$ y $n\in\mathbb R^3$ con $n\neq0$. El plano que pasa por $p$ y tiene vector normal $n$ es
> $$
> \Pi=\{x\in\mathbb R^3:n\cdot(x-p)=0\}.
> $$

La condición afirma que el desplazamiento desde $p$ hasta cualquier punto $x$ del plano es ortogonal a $n$.

### Ecuación cartesiana
Si $n=(a,b,c)$ y $p=(x_0,y_0,z_0)$, al desarrollar se obtiene
$$
a(x-x_0)+b(y-y_0)+c(z-z_0)=0.
$$
Equivalentemente,
$$
ax+by+cz=d,
\qquad
d=ax_0+by_0+cz_0.
$$
Esta es la ecuación cartesiana del plano.

> [!definicion] Normal recuperada de una ecuación
> En el plano $ax+by+cz=d$, con $(a,b,c)\neq(0,0,0)$, el vector
> $$
> n=(a,b,c)
> $$
> es normal al plano.

Multiplicar toda la ecuación por un escalar no nulo no cambia el plano; sólo cambia el representante elegido para la normal.

### Plano a partir de dos direcciones
Si $u$ y $v$ son direcciones independientes del plano, entonces
$$
n=u\times v
$$
es una normal no nula. Un plano que pasa por $p$ puede escribirse también
$$
x=p+su+tv,
\qquad s,t\in\mathbb R.
$$

### Ejemplo trabajado
El plano que pasa por $p=(1,0,2)$ y tiene normal $n=(2,-1,1)$ satisface
$$
2(x-1)-y+(z-2)=0,
$$
es decir,
$$
2x-y+z=4.
$$
El punto $(2,1,1)$ pertenece al plano porque $4-1+1=4$.

## Posiciones relativas de rectas
Sean $L_1:p+td$ y $L_2:q+se$.

### Rectas paralelas o coincidentes
Si $d$ y $e$ son linealmente dependientes, las rectas tienen la misma dirección. Son coincidentes si además $q-p$ es múltiplo de $d$; en caso contrario, son paralelas distintas.

### Rectas secantes o alabeadas
Si las direcciones no son paralelas, se resuelve
$$
p+td=q+se.
$$
Si el sistema tiene solución, las rectas se cortan en el punto correspondiente. Si es incompatible, son **alabeadas**: no son paralelas, pero tampoco se intersectan porque no están contenidas en un mismo plano.[^1]

## Posiciones de recta y plano
Sea $L:p+td$ y $\Pi:n\cdot(x-q)=0$. Al sustituir la recta,
$$
n\cdot(p-q)+t(n\cdot d)=0.
$$

Si $n\cdot d\neq0$, existe un único valor de $t$ y la recta corta al plano. Si $n\cdot d=0$, la dirección es paralela al plano: la recta está contenida cuando $p$ satisface la ecuación del plano y es paralela distinta cuando no la satisface.

## Posiciones relativas de planos
Sean
$$
\Pi_1:n_1\cdot x=d_1,
\qquad
\Pi_2:n_2\cdot x=d_2.
$$
Si $n_1$ y $n_2$ no son proporcionales, los planos se cortan en una recta cuya dirección es $n_1\times n_2$.

Si las normales son proporcionales, los planos son paralelos o coincidentes. Para decidirlo se comparan las ecuaciones después de expresar ambas con la misma normal: si también coincide el término independiente, representan el mismo plano.

## Distancia de un punto a un plano
> [!teorema] Fórmula punto-plano
> Para el plano
> $$
> \Pi:ax+by+cz=d
> $$
> y el punto $p=(x_0,y_0,z_0)$,
> $$
> \operatorname{dist}(p,\Pi)
> =\frac{|ax_0+by_0+cz_0-d|}{\sqrt{a^2+b^2+c^2}}.
> $$

Sea $q\in\Pi$ y $n=(a,b,c)$. La distancia es el módulo de la componente de $p-q$ en la dirección unitaria $n/\|n\|$:
$$
\left|\left(p-q\right)\cdot\frac n{\|n\|}\right|
=\frac{|n\cdot p-d|}{\|n\|}.
$$
La expresión no depende del punto $q$ elegido en el plano.[^2]

### Ejemplo trabajado
Para $p=(1,2,0)$ y $\Pi:2x-y+2z=3$,
$$
\operatorname{dist}(p,\Pi)
=\frac{|2-2+0-3|}{\sqrt{4+1+4}}
=1.
$$

## Distancia entre planos paralelos
Si dos planos paralelos se escriben con la misma normal,
$$
\Pi_1:n\cdot x=d_1,
\qquad
\Pi_2:n\cdot x=d_2,
$$
entonces
$$
\operatorname{dist}(\Pi_1,\Pi_2)
=\frac{|d_2-d_1|}{\|n\|}.
$$
Se obtiene tomando cualquier punto del primer plano y aplicando la fórmula punto-plano al segundo.

Para $2x-y+2z=3$ y $2x-y+2z=9$, la distancia es
$$
\frac{|9-3|}{3}=2.
$$

## Condiciones de validez y errores frecuentes
Un vector director de recta y una normal de plano deben ser no nulos. Las ecuaciones paramétricas de una recta comparten un único parámetro; elegir parámetros independientes para cada coordenada describiría un conjunto mayor.

La fórmula entre planos sólo se usa después de escribirlos con la misma normal. Si las normales no son proporcionales, los planos se intersectan y su distancia mínima es cero.

Una [[Matemáticas/Geometría/Geometría analítica/Recta en el espacio|recta en el espacio]] requiere un punto y una dirección, mientras que la [[Matemáticas/Geometría/Geometría analítica/Ecuación del plano|ecuación de un plano]] se organiza mediante una normal o dos direcciones independientes. Distinguir esos datos evita intercambiar sus ecuaciones.

## 📚 Fuentes
### Material base
- Faculdade de Ciências da Universidade de Lisboa, [*Álgebra Linear e Geometria Analítica — programa 2026/27*](https://fenix.ciencias.ulisboa.pt/courses/algana-2817829258658182/programa), contexto de geometría analítica; rectas, planos y distancias como ampliación externa.

### Ampliación académica
[^1]: OpenStax, [*Calculus Volume 3 — Equations of Lines and Planes in Space*](https://openstax.org/books/calculus-volume-3/pages/2-5-equations-of-lines-and-planes-in-space), ecuaciones vectoriales, paramétricas y posiciones relativas.
[^2]: OpenStax, [*Calculus Volume 3 — Equations of Lines and Planes in Space*](https://openstax.org/books/calculus-volume-3/pages/2-5-equations-of-lines-and-planes-in-space), distancias mediante proyección sobre una normal.

## 🧑‍🏫 Prompt para tutor conversacional
Actúa como tutor universitario de Geometría Analítica. Da datos mínimos para construir una recta y un plano y exige justificar qué vector actúa como dirección o normal. Pide convertir entre formas vectoriales, paramétricas y cartesianas, clasificar una posición relativa mediante un sistema o un producto interno y calcular una distancia punto-plano o entre planos paralelos. Usa pistas graduadas y exige una comprobación por sustitución.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
