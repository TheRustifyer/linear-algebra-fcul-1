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
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/02 Propiedades derivadas de los axiomas|Propiedades derivadas de los axiomas]]"
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

```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - subespacios
---
> [!note] Pregunta
> ¿Qué significa que $W$ sea subespacio de $V$?
===
> [!important] Respuesta
> Que $W$ usa las operaciones heredadas de $V$ y, con ellas, también es un espacio vectorial sobre el mismo cuerpo.
```

### Criterio de cierre por combinaciones lineales

> [!definicion] Criterio de subespacio
> Un subconjunto $W\subseteq V$ es subespacio si y sólo si no está vacío y, para todos $u,v\in W$ y $\alpha,\beta\in K$, se cumple
> $$
> \alpha u+\beta v\in W.
> $$

La condición incluye los casos particulares necesarios. Si $W$ no está vacío, toma un $u\in W$ y elige $\alpha=\beta=0$ para obtener $0_V\in W$. Con $\alpha=\beta=1$ se obtiene el cierre bajo suma; con $\beta=0$ y un escalar arbitrario se obtiene el cierre bajo producto escalar. A la inversa, si el cero está en $W$ y hay cierre bajo ambas operaciones, toda combinación de dos vectores permanece en $W$.[^1]

Para conjuntos no vacíos también se suele enunciar el criterio con dos condiciones: $u+v\in W$ y $\lambda u\in W$ para todo $u,v\in W$ y $\lambda\in K$. En las diapositivas se explicita además la versión de tres condiciones: $W$ no vacío, cerrado bajo suma y cerrado bajo escalares. Si ya se sabe que $0_V\in W$, la condición de no vaciedad queda garantizada. A la inversa, partiendo de un elemento de $W$, el cierre escalar con $0_K$ da $0_V$; usa aquí $0_Ku=0_V$, deducido en [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/02 Propiedades derivadas de los axiomas|Propiedades derivadas de los axiomas]].[^a18-criterio]

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
```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - subespacios
---
> [!note] Pregunta
> ¿Cuáles son las dos versiones habituales del criterio de subespacio?
===
> [!important] Respuesta
> (1) No vacío y cerrado bajo suma y producto escalar; o (2) contiene $0_V$ y cumple esos mismos cierres. También puede usarse el criterio equivalente de combinaciones lineales.
```

### Dos subespacios que siempre están presentes

Para cualquier espacio $V$, tanto el subespacio nulo $\{0_V\}$ como el espacio completo $V$ son subespacios. En el primero, sumar ceros o multiplicar el cero por un escalar devuelve $0_V$; en el segundo, las operaciones ya permanecen en $V$. Son los extremos entre los que se sitúan los demás subespacios.[^a18-criterio]

## Ejemplos que conservan las operaciones

La condición decisiva es que las operaciones heredadas sigan dentro del subconjunto. Varios ejemplos lo muestran en objetos distintos.[^a18-ejemplos]

- **Escalares reales dentro de complejos.** Como espacio vectorial sobre $\mathbb R$, $\mathbb R^n$ es subespacio de $\mathbb C^n$. Si el cuerpo ambiente es $\mathbb C$, deja de serlo: para $e_1=(1,0,\ldots,0)\in\mathbb R^n$, el múltiplo $ie_1$ no es real.
- **Polinomios.** Los polinomios de grado a lo sumo $n$, $P_n(\mathbb R)$, forman un subespacio de $\mathbb R[x]$: sumar dos polinomios de ese grado no lo aumenta, y multiplicar por un real tampoco. El polinomio cero pertenece al conjunto.
- **Funciones.** Las funciones continuas $C(\mathbb R)$ forman un subespacio del espacio $F(\mathbb R)$ de todas las funciones reales, porque suma y producto por escalares preservan continuidad.[^a17-ejemplos]
- **Matrices.** Las matrices triangulares superiores $TS_n(K)$ forman un subespacio de $M_n(K)$; las diagonales $D_n(K)$ son subespacio de ambos. Las entradas que deben ser cero siguen siéndolo al sumar o multiplicar por escalares.
- **Geometría.** Toda recta o plano que pasa por el origen es un subespacio del espacio euclídeo correspondiente. Una recta o plano desplazado puede fallar ya por no contener el origen.

El último punto no es una regla basada sólo en el dibujo: se comprueba con el criterio. Una ecuación lineal homogénea describe un subespacio; un término independiente no nulo suele sacar al cero del conjunto.

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

> [!demostracion] Demostración
> **Objetivo.** Probar que $W$ es subespacio de $\mathbb R^3$.
>
> **No vaciedad.** $(0,0,0)\in W$, pues $0+0-0=0$.
>
> **Cierre.** Sean $u=(x_1,y_1,z_1)$ y $v=(x_2,y_2,z_2)$ arbitrarios de $W$. Entonces $x_1+y_1-z_1=0$ y $x_2+y_2-z_2=0$. Para $\alpha,\beta\in\mathbb R$,
>
> $$
> (\alpha x_1+\beta x_2)+(\alpha y_1+\beta y_2)-(\alpha z_1+\beta z_2)
> =\alpha(x_1+y_1-z_1)+\beta(x_2+y_2-z_2)=0.
> $$
>
> Por tanto $\alpha u+\beta v\in W$, y el criterio de combinación lineal concluye que $W$ es subespacio.

Despejando $z=x+y$, sus vectores son $(x,y,x+y)=x(1,0,1)+y(0,1,1)$; por tanto

$$
W=\operatorname{span}\{(1,0,1),(0,1,1)\}.
$$

La ecuación homogénea y la descripción por combinaciones representan la misma superficie.

### Sistemas de ecuaciones: homogéneo, no homogéneo y no lineal

Considera el conjunto que satisface simultáneamente dos ecuaciones homogéneas:

$$
F=\{(x,y,z)\in\mathbb R^3:x+y=0,\quad y+2z=0\}.
$$

> [!demostracion] Demostración
> **Objetivo.** Verificar el cierre de $F$ bajo combinaciones lineales.
>
> Sean $u=(x,y,z)$ y $v=(a,b,c)$ elementos de $F$. Entonces
>
> $$
> x+y=0,\qquad y+2z=0,\qquad
> a+b=0,\qquad b+2c=0.
> $$
>
> Para $\alpha,\beta\in\mathbb R$, la primera ecuación del vector $\alpha u+\beta v$ se verifica porque
>
> $$
> (\alpha x+\beta a)+(\alpha y+\beta b)
> =\alpha(x+y)+\beta(a+b)=0.
> $$
>
> La segunda también:
>
> $$
> (\alpha y+\beta b)+2(\alpha z+\beta c)
> =\alpha(y+2z)+\beta(b+2c)=0.
> $$
>
> Así, $\alpha u+\beta v\in F$. Además, el vector cero cumple ambas ecuaciones, luego $F$ no es vacío y es un subespacio.[^a18-fgh]

Si se cambia la segunda ecuación a $y+2z=1$, se obtiene

$$
G=\{(x,y,z)\in\mathbb R^3:x+y=0,\quad y+2z=1\}.
$$

El cero no pertenece a $G$, porque $0+2\cdot0\ne1$. Este único fallo basta para descartar que sea subespacio.[^a18-fgh]

No todas las condiciones que contienen variables producen subespacios. Para

$$
H=\{(x,y,z)\in\mathbb R^3:xy-y=0\},
$$

el vector $(1,1,1)$ pertenece a $H$, pero $2(1,1,1)=(2,2,2)$ no, pues $2\cdot2-2=2\ne0$. Aquí sí hay que comprobar el cierre: el conjunto contiene el cero, pero no es cerrado bajo escalares.[^a18-fgh]

El ejemplo de una recta desplazada tiene el mismo primer obstáculo: no contiene el origen. Una recta o un plano geométrico sólo es subespacio cuando pasa por el origen y conserva las operaciones lineales.

```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - subespacios
---
> [!note] Pregunta
> ¿Qué diferencia el ejemplo homogéneo $F$ del conjunto $G$ con ecuación $y+2z=1$?
===
> [!important] Respuesta
> $F$ contiene el cero y es cerrado bajo combinaciones lineales; $G$ no contiene el cero, así que falla de inmediato el criterio de subespacio.
```

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

```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - subespacios
---
> [!note] Pregunta
> ¿Qué elementos forman $\operatorname{span}(S)$?
===
> [!important] Respuesta
> Todas las combinaciones lineales finitas de elementos de $S$.
```

## El generado es el menor subespacio que contiene a $S$

Este resultado justifica que el generado sea una construcción fundamental y no sólo una notación para sumas.

### Teorema: propiedad mínima del espacio generado

Para todo $S\subseteq V$, $\operatorname{span}(S)$ es un subespacio de $V$, contiene a $S$ y está contenido en cualquier subespacio que contenga a $S$.

> [!demostracion] Demostración
> **El generado es subespacio.** La combinación vacía, es decir, $0_V$, pertenece a $\operatorname{span}(S)$. Si $x$ e $y$ son combinaciones lineales finitas de elementos de $S$, entonces $x+y$ también lo es: se concatenan las dos listas de términos. Para $\lambda\in K$, $\lambda x$ vuelve a ser una combinación finita al multiplicar cada coeficiente por $\lambda$. Por el criterio de cierre, el generado es subespacio.
>
> **Contiene a $S$.** Cada $s\in S$ pertenece al generado porque $s=1_Ks$.
>
> **Es el menor.** Sea $U$ un subespacio con $S\subseteq U$. Todo vector de $\operatorname{span}(S)$ es una combinación finita de elementos de $S$; como $U$ es cerrado bajo combinaciones lineales, ese vector pertenece a $U$. Por tanto $\operatorname{span}(S)\subseteq U$. Esto prueba minimalidad. $\square$

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

> [!demostracion] TPC resuelto · Aula 18, diapositiva p. 14
> **Hipótesis.** Sean $W_1,W_2$ subespacios de un mismo espacio vectorial $V$.
>
> **No vaciedad.** Como ambos son subespacios, $0_V\in W_1$ y $0_V\in W_2$. Por tanto $0_V\in W_1\cap W_2$.
>
> **Cierre.** Sean $u,v\in W_1\cap W_2$ y $\alpha,\beta\in K$. Los dos vectores pertenecen a $W_1$ y a $W_2$. Cada subespacio es cerrado bajo combinaciones lineales, así que $\alpha u+\beta v$ pertenece a ambos y, por tanto, a $W_1\cap W_2$.
>
> El criterio de subespacio concluye que $W_1\cap W_2$ es subespacio.

El mismo argumento vale para la intersección de cualquier familia no vacía de subespacios del mismo espacio ambiente: el cero es común y cualquier combinación lineal de elementos de la intersección permanece en cada miembro de la familia.

### La unión no es subespacio en general

En $\mathbb R^3$, toma los dos planos coordenados

$$
W_1=\{(x,y,z):y=0\},\qquad
W_2=\{(x,y,z):z=0\}.
$$

Ambos son subespacios. Sin embargo, $(1,0,1)\in W_1$ y $(1,1,0)\in W_2$, mientras que

$$
(1,0,1)+(1,1,0)=(2,1,1)\notin W_1\cup W_2,
$$

porque la segunda y la tercera coordenadas son distintas de cero. La unión no es cerrada bajo suma y, por tanto, no es subespacio.[^a18-union]

> [!demostracion] Criterio para la unión de dos subespacios
> Para dos subespacios, $W_1\cup W_2$ es subespacio si y sólo si uno está contenido en el otro.
>
> Si, por ejemplo, $W_1\subseteq W_2$, la unión es $W_2$ y es subespacio. Ahora supongamos que ninguno contiene al otro y elijamos $u\in W_1\setminus W_2$ y $v\in W_2\setminus W_1$. Si la unión fuese subespacio, $u+v$ pertenecería a una de las dos partes. Si $u+v\in W_1$, entonces $v=(u+v)-u\in W_1$, contradicción. Si $u+v\in W_2$, entonces $u=(u+v)-v\in W_2$, también contradicción. Por tanto la unión no es subespacio.

## Errores frecuentes y conexiones

No se debe confundir la suma de conjuntos con la suma vectorial: $W_1\cup W_2$ reúne elementos de uno u otro, mientras que $u+v$ combina dos vectores. La unión puede fallar el cierre; la intersección de subespacios sí lo conserva.

Tampoco debe omitirse la condición de no vaciedad en el criterio combinado. El conjunto vacío satisface vacíamente la afirmación «para todos sus elementos...» y, sin embargo, no contiene el vector cero, así que no es subespacio.

Las combinaciones lineales conectan esta unidad con independencia y bases: una base es un conjunto que genera todo el espacio sin redundancia. El siguiente paso es estudiar cuándo los generadores son independientes en [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/04 Independencia, bases y coordenadas|independencia, bases y coordenadas]].

## Práctica graduada

1. Decide si $\mathbb R^n$ es subespacio de $\mathbb C^n$ cuando el cuerpo es $\mathbb R$ y cuando es $\mathbb C$.
2. Comprueba si $G=\{(x,y,z):x+y=0,\ y+2z=1\}$ es subespacio de $\mathbb R^3$.
3. Para los planos $W_1=\{y=0\}$ y $W_2=\{z=0\}$ de $\mathbb R^3$, explica por qué su intersección es subespacio pero su unión no.

## Soluciones razonadas

1. Sobre $\mathbb R$, ambas operaciones de $\mathbb C^n$ conservan la realidad de las coordenadas de $\mathbb R^n$, así que sí es subespacio. Sobre $\mathbb C$, $e_1\in\mathbb R^n$ pero $ie_1\notin\mathbb R^n$; falla el cierre escalar.
2. No. El origen no satisface $y+2z=1$, de modo que $0\notin G$. Esto basta para descartar el criterio de subespacio.
3. La intersección es $\{(x,0,0):x\in\mathbb R\}$, que conserva suma y escalares. Para la unión, $(1,0,1)\in W_1$ y $(1,1,0)\in W_2$, pero su suma $(2,1,1)$ no está en ninguno de los planos; falla el cierre bajo suma.

## 📚 Fuentes

### Material base aportado

- [[Matemáticas/Álgebra lineal/Espacios vectoriales/02 Subespacios vectoriales|Subespacios vectoriales]] y [[Matemáticas/Álgebra lineal/Espacios vectoriales/03 Combinaciones lineales y espacio generado|Combinaciones lineales y espacio generado]], notas canónicas usadas para contrastar el alcance y mantener consistentes el criterio y la propiedad mínima.
- Índice curricular de Álgebra Lineal y Geometría Analítica para Física, FCUL: alcance de subespacios, combinaciones lineales, espacios generados e intersección.
- FCUL, *ALGA 2026/27, Aulas Teóricas*, Aula 18, «Subespaços vetoriais», 28/10/2026, diapositivas pp. 2–15. Los localizadores concretos se indican en el texto; no se incluye enlace directo al PDF.
- FCUL, *ALGA 2026/27, Aulas Teóricas*, Aula 17, «Espaços vetoriais», 26/10/2026, diapositivas pp. 20–21: espacios de funciones reales y continuas.

### Ampliación académica

[^1]: Jim Hefferon, [*Linear Algebra*](https://hefferon.net/linearalgebra/), texto abierto de primer curso universitario, con desarrollo de espacios vectoriales y subespacios.
[^2]: Gilbert Strang, [*Column Space and Nullspace*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/column-space-and-nullspace/), MIT OpenCourseWare. Relaciona subespacios de matrices con conjuntos de soluciones y combinaciones de columnas.
[^a18-criterio]: FCUL, Aula 18, 28/10/2026, diapositivas pp. 6–8: definición, criterios equivalentes y subespacios nulo y total.
[^a18-ejemplos]: FCUL, Aula 18, 28/10/2026, diapositivas pp. 9–10: subespacios de coordenadas, polinomios, matrices y geometría.
[^a18-fgh]: FCUL, Aula 18, 28/10/2026, diapositivas pp. 11–13: ejemplos con sistemas homogéneos, no homogéneos y una condición no lineal.
[^a18-union]: FCUL, Aula 18, 28/10/2026, diapositivas pp. 14–15: intersección y ejemplo de unión que no es subespacio.
[^a17-ejemplos]: FCUL, Aula 17, 26/10/2026, diapositivas pp. 20–21: espacios de funciones reales y continuas.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como tutor de Álgebra Lineal. Pide al estudiante identificar el espacio ambiente, formular la prueba de cierre con vectores y escalares arbitrarios, y distinguir pertenencia de generación. Para intersecciones y uniones, solicita una justificación o un contraejemplo concreto; da pistas graduadas y no conviertas la interacción en una lista de ejercicios rutinarios.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
