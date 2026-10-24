---
schema: nabla-phi-note/v1
title: Subespacios y espacio generado
aliases:
  - Subespacio vectorial
  - Combinaciones lineales y span
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
tipo:
  - lección
  - definición
nivel: universitario-introductorio
estado: borrador
capa: curricular
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/01 Espacios vectoriales y axiomas|Espacios vectoriales y axiomas]]"
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/01 Espacios vectoriales — definición y axiomas|Espacios vectoriales: definición y axiomas]]"
desbloquea:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/04 Independencia, bases y coordenadas|Independencia, bases y coordenadas]]"
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/03 Combinaciones lineales y espacio generado|Combinaciones lineales y espacio generado]]"
relacionado:
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/02 Subespacios vectoriales|Subespacios vectoriales]]"
fsrs_goal: Comprueba el criterio de subespacio para un subconjunto dado, expresa su espacio generado mediante combinaciones lineales y justifica por qué una intersección sí es subespacio mientras que una unión puede no serlo.
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

# Subespacios y espacio generado

Un espacio vectorial puede contener colecciones menores que conservan las mismas operaciones. Por ejemplo, una recta que pasa por el origen es un espacio dentro de $\mathbb R^2$: sumar dos de sus vectores o multiplicar uno por un escalar no saca el resultado de la recta. Una recta desplazada que no pasa por el origen no tiene esa propiedad.

El criterio de subespacio convierte esta intuición en una prueba breve. Las combinaciones lineales permiten expresar todos los vectores que se pueden formar con un conjunto; su colección es el menor subespacio que contiene a ese conjunto. La exposición canónica de [[Matemáticas/Álgebra lineal/Espacios vectoriales/02 Subespacios vectoriales|subespacios vectoriales]] desarrolla el criterio con más detalle.

## Subespacios: estructura heredada

Sea $V$ un espacio vectorial sobre un cuerpo $K$, y sea $W\subseteq V$. En $W$ consideramos las operaciones que ya tiene $V$; no inventamos una suma nueva. Queremos decidir si $W$ es un espacio vectorial por derecho propio.

### Definición de subespacio

> [!definicion] Subespacio vectorial
> Un subconjunto $W$ de un $K$-espacio vectorial $V$ es un **subespacio** de $V$ si, con la suma y la multiplicación por escalares heredadas de $V$, también es un $K$-espacio vectorial.

Esta definición exige que el vector cero ambiente pertenezca a $W$ y que $W$ sea cerrado bajo suma y producto escalar. En vez de volver a revisar los ocho axiomas, se usa un criterio equivalente que empaqueta esos requisitos.

### Criterio de cierre por combinaciones lineales

> [!definicion] Criterio de subespacio
> Un subconjunto $W\subseteq V$ es subespacio si y sólo si no está vacío y, para todos $u,v\in W$ y $\alpha,\beta\in K$, se cumple
> $$
> \alpha u+\beta v\in W.
> $$

La condición incluye los casos particulares necesarios. Si $W$ no está vacío, toma un $u\in W$ y elige $\alpha=\beta=0$ para obtener $0_V\in W$. Con $\alpha=\beta=1$ se obtiene el cierre bajo suma; con $\beta=0$ y un escalar arbitrario se obtiene el cierre bajo producto escalar. A la inversa, si el cero está en $W$ y hay cierre bajo ambas operaciones, toda combinación de dos vectores permanece en $W$.[^1]

Para conjuntos no vacíos también se suele enunciar el criterio con dos condiciones: $u+v\in W$ y $\lambda u\in W$ para todo $u,v\in W$ y $\lambda\in K$. El criterio combinado es más compacto, pero requiere mencionar que $W$ no está vacío.

```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - subespacios
---
> [!note] Pregunta
> ¿Cuál es el criterio de combinación lineal para que $W\subseteq V$ sea subespacio?
===
> [!important] Respuesta
> $W$ debe ser no vacío y cumplir $\alpha u+\beta v\in W$ para todo $u,v\in W$ y $\alpha,\beta\in K$.
```

## Cómo comprobar un subespacio

La prueba se organiza en un orden que hace visibles las hipótesis:

1. Comprueba que $W$ contiene al menos un elemento. Si es vacío, no es subespacio.
2. Toma vectores arbitrarios de $W$, no sólo ejemplos particulares.
3. Toma escalares arbitrarios de $K$.
4. Verifica que cualquier combinación lineal de esos vectores sigue en $W$.

Si una condición falla, basta un testigo concreto para refutar la afirmación. En cambio, para demostrar cierre hay que comenzar con elementos arbitrarios y terminar probando la pertenencia del resultado.

### Ejemplo trabajado: un plano que pasa por el origen

Considera

$$
W=\{(x,y,z)\in\mathbb R^3:x+y-z=0\}.
$$

Sean $u=(x_1,y_1,z_1)$ y $v=(x_2,y_2,z_2)$ elementos de $W$. Entonces $x_1+y_1-z_1=0$ y $x_2+y_2-z_2=0$. Para $\alpha,\beta\in\mathbb R$,

$$
(\alpha x_1+\beta x_2)+(\alpha y_1+\beta y_2)-(\alpha z_1+\beta z_2)
=\alpha(x_1+y_1-z_1)+\beta(x_2+y_2-z_2)=0.
$$

Así, $\alpha u+\beta v\in W$ y el conjunto no es vacío porque contiene $(0,0,0)$. Luego $W$ es subespacio. Despejando $z=x+y$, sus vectores son $(x,y,x+y)=x(1,0,1)+y(0,1,1)$; por tanto

$$
W=\operatorname{span}\{(1,0,1),(0,1,1)\}.
$$

La ecuación homogénea y la descripción por combinaciones representan la misma superficie.

### Contraejemplo trabajado: recta desplazada

Sea $A=\{(x,y)\in\mathbb R^2:x+y=1\}$. El vector cero no pertenece a $A$, pues $0+0\ne1$. Por tanto $A$ no es subespacio. También se ve el fallo con dos elementos: $(1,0),(0,1)\in A$, pero su suma $(1,1)$ no pertenece a $A$ porque sus coordenadas suman $2$.

No basta que un conjunto sea una recta o un plano geométrico: debe contener el origen y ser cerrado bajo las operaciones lineales.

## Combinaciones lineales y conjuntos generadores

Sea $S\subseteq V$. Una **combinación lineal finita** de elementos de $S$ es una suma

$$
\alpha_1v_1+\cdots+\alpha_kv_k,
\qquad \alpha_i\in K,\quad v_i\in S,
$$

donde $k$ es finito. Se permite que algún coeficiente sea cero, y también que haya repeticiones entre los $v_i$; ambas cosas no alteran la colección obtenida.

### Definición de espacio generado

> [!definicion] Espacio generado o envolvente lineal
> El **espacio generado** por $S$, escrito $\operatorname{span}(S)$ o $\langle S\rangle$, es el conjunto de todas las combinaciones lineales finitas de elementos de $S$.

Un conjunto $S$ **genera** $W$ si $\operatorname{span}(S)=W$. En ese caso cada vector de $W$ puede construirse combinando finitamente elementos de $S$. Si $S$ es finito, $S=\{v_1,\ldots,v_k\}$, se escribe $\operatorname{span}\{v_1,\ldots,v_k\}$.

Tanto $S=\varnothing$ como $S=\{0_V\}$ generan $\{0_V\}$. De hecho, el subespacio generado por el conjunto vacío se define como $\{0_V\}$: es el menor subespacio del espacio ambiente que lo contiene.

## El generado es el menor subespacio que contiene a $S$

Este resultado justifica que el generado sea una construcción fundamental y no sólo una notación para sumas.

### Teorema: propiedad mínima del espacio generado

Para todo $S\subseteq V$, $\operatorname{span}(S)$ es un subespacio de $V$, contiene a $S$ y está contenido en cualquier subespacio que contenga a $S$.

**Demostración.** La combinación vacía o $0_V$ pertenece al generado. Si $x$ e $y$ son combinaciones lineales finitas de elementos de $S$, entonces $x+y$ también lo es: se concatenan las dos listas de términos. Si $\lambda\in K$, $\lambda x$ vuelve a ser una combinación finita al multiplicar cada coeficiente por $\lambda$. Por el criterio de cierre, el generado es subespacio.

Cada $s\in S$ pertenece al generado porque $s=1_Ks$. Ahora sea $U$ un subespacio con $S\subseteq U$. Todo vector de $\operatorname{span}(S)$ es una combinación finita de elementos de $S$; como $U$ es cerrado bajo combinaciones lineales, ese vector pertenece a $U$. Por tanto $\operatorname{span}(S)\subseteq U$. Esto prueba minimalidad. $\square$

### Ejemplo trabajado: una recta generada por un vector

En $\mathbb R^2$, si $S=\{(2,-1)\}$, entonces

$$
\operatorname{span}(S)=\{\lambda(2,-1):\lambda\in\mathbb R\}
=\{(2\lambda,-\lambda):\lambda\in\mathbb R\}.
$$

Es la recta que pasa por el origen con dirección $(2,-1)$. Si un subespacio contiene a $(2,-1)$, necesariamente contiene todos sus múltiplos; por ello contiene esta recta entera.

### Ejemplo trabajado: dos generadores en $\mathbb R^3$

Para $S=\{(1,0,1),(0,1,1)\}$, toda combinación tiene la forma

$$
\alpha(1,0,1)+\beta(0,1,1)=(\alpha,\beta,\alpha+\beta).
$$

Así, el generado es el plano $\{(x,y,z):z=x+y\}$. En la demostración anterior se vio también que este plano es un subespacio. La representación paramétrica exhibe generadores; la ecuación exhibe una condición que cumplen sus elementos. Para matrices, el espacio generado por columnas tiene una lectura paralela como conjunto de valores alcanzables mediante combinaciones lineales de esas columnas.[^2]

## Intersecciones y uniones

### Teorema: la intersección de subespacios es subespacio

Sean $W_1,W_2\le V$. Ambos contienen $0_V$, por lo que $W_1\cap W_2$ no es vacío. Si $u,v\in W_1\cap W_2$, están en cada subespacio; entonces para escalares $\alpha,\beta$, $\alpha u+\beta v$ pertenece tanto a $W_1$ como a $W_2$. Luego pertenece a la intersección y el criterio de cierre prueba que $W_1\cap W_2$ es subespacio.

El mismo argumento vale para la intersección de cualquier familia no vacía de subespacios del mismo espacio ambiente. La intersección conserva exactamente los elementos comunes y hereda el cierre de cada conjunto.

### La unión no es subespacio en general

En $\mathbb R^2$, sean los ejes

$$
W_1=\{(x,0):x\in\mathbb R\},\qquad
W_2=\{(0,y):y\in\mathbb R\}.
$$

Cada uno es subespacio, pero $W_1\cup W_2$ no es cerrado bajo suma: $(1,0)$ y $(0,1)$ pertenecen a la unión, mientras que su suma $(1,1)$ no pertenece a ninguno de los dos ejes. Por tanto la unión no es subespacio.

Para dos subespacios, la unión $W_1\cup W_2$ sí es subespacio exactamente cuando uno está contenido en el otro. Si ninguno contiene al otro, toma $u\in W_1\setminus W_2$ y $v\in W_2\setminus W_1$. Si la unión fuese subespacio, $u+v$ estaría en una de las dos partes. Si está en $W_1$, entonces $v=(u+v)-u\in W_1$, contradicción; si está en $W_2$, entonces $u=(u+v)-v\in W_2$, también contradicción.

```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - subespacios
---
> [!note] Pregunta
> ¿Qué propiedad caracteriza a $\operatorname{span}(S)$ entre los subespacios que contienen $S$?
===
> [!important] Respuesta
> Es el menor subespacio que contiene a $S$: está incluido en todo subespacio que contenga cada elemento de $S$.
```

## Errores frecuentes y conexiones

No se debe confundir la suma de conjuntos con la suma vectorial: $W_1\cup W_2$ reúne elementos de uno u otro, mientras que $u+v$ combina dos vectores. La unión puede fallar el cierre; la intersección de subespacios sí lo conserva.

Tampoco debe omitirse la condición de no vaciedad en el criterio combinado. El conjunto vacío satisface vacíamente la afirmación «para todos sus elementos...» y, sin embargo, no contiene el vector cero, así que no es subespacio.

Las combinaciones lineales conectan esta unidad con independencia y bases: una base es un conjunto que genera todo el espacio sin redundancia. El siguiente paso es estudiar cuándo los generadores son independientes en [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/04 Independencia, bases y coordenadas|independencia, bases y coordenadas]].

## 📚 Fuentes

### Material base aportado

- [[Matemáticas/Álgebra lineal/Espacios vectoriales/02 Subespacios vectoriales|Subespacios vectoriales]] y [[Matemáticas/Álgebra lineal/Espacios vectoriales/03 Combinaciones lineales y espacio generado|Combinaciones lineales y espacio generado]], notas canónicas usadas para contrastar el alcance y mantener consistentes el criterio y la propiedad mínima.
- Índice curricular de Álgebra Lineal y Geometría Analítica para Física, FCUL: alcance de subespacios, combinaciones lineales, espacios generados e intersección.

### Ampliación académica

[^1]: Jim Hefferon, [*Linear Algebra*](https://hefferon.net/linearalgebra/), texto abierto de primer curso universitario, con desarrollo de espacios vectoriales y subespacios.
[^2]: Gilbert Strang, [*Column Space and Nullspace*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/column-space-and-nullspace/), MIT OpenCourseWare. Relaciona subespacios de matrices con conjuntos de soluciones y combinaciones de columnas.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como tutor de Álgebra Lineal. Pide al estudiante identificar el espacio ambiente, formular la prueba de cierre con vectores y escalares arbitrarios, y distinguir pertenencia de generación. Para intersecciones y uniones, solicita una justificación o un contraejemplo concreto; da pistas graduadas y no conviertas la interacción en una lista de ejercicios rutinarios.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
