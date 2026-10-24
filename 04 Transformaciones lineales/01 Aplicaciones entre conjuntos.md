---
schema: nabla-phi-note/v1
title: Aplicaciones entre conjuntos
aliases:
  - Funciones entre conjuntos
  - Imágenes y preimágenes
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
  - "[[Matemáticas/Fundamentos/Funciones|Funciones]]"
  - "[[Matemáticas/Fundamentos/Inyectividad|Inyectividad]]"
desbloquea:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/04 Transformaciones lineales/02 Transformaciones, núcleo e imagen|Transformaciones, núcleo e imagen]]"
relacionado:
  - "[[Matemáticas/Álgebra lineal/Aplicaciones lineales|Aplicaciones lineales]]"
fsrs_goal: Analiza una aplicación identificando dominio, codominio, imagen y preimagen; prueba las reglas de imágenes y preimágenes de conjuntos; decide inyectividad, sobreyectividad, biyectividad y propiedades de composiciones e inversas.
tags:
  - matematicas
  - algebra-lineal
  - funciones
  - aplicaciones
  - fcul
---

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

# Aplicaciones entre conjuntos

Una función asigna a cada entrada permitida exactamente una salida. Para describirla no basta una fórmula: hay que especificar de dónde se parte y en qué conjunto se considera que cae el resultado. Esa distinción determina la imagen, las preimágenes y propiedades como sobreyectividad.

Las aplicaciones entre conjuntos son el lenguaje previo a las [[Matemáticas/Álgebra lineal/Aplicaciones lineales|aplicaciones lineales]]. Primero fijamos qué significan dominio, codominio e imagen; después estudiamos cómo se comportan las funciones al actuar sobre subconjuntos, componerse o invertirse.

## Aplicación, dominio y codominio

### Definición de aplicación

> [!definicion] Aplicación
> Una **aplicación** $f:X\to Y$ entre conjuntos $X$ e $Y$ asigna a cada elemento $x\in X$ un único elemento $f(x)\in Y$.

El conjunto $X$ es el **dominio** y $Y$ el **codominio**. La aplicación incluye esa elección como parte de sus datos. La misma regla puede definir funciones distintas si cambia el dominio o el codominio declarado.[^1]

Por ejemplo, la regla $f(x)=x^2$ define una aplicación $\mathbb R\to\mathbb R$ y también una aplicación $\mathbb R\to[0,\infty)$. La fórmula y el dominio coinciden; el codominio indicado cambia y afecta a la sobreyectividad.

### Imagen de un elemento e imagen de la aplicación

> [!definicion] Imagen
> La **imagen de $x$** es el elemento $f(x)$. La **imagen de $f$** es el subconjunto del codominio
> $$
> f(X)=\operatorname{Im}(f)=\{f(x):x\in X\}\subseteq Y.
> $$

La imagen siempre está contenida en el codominio, pero no tiene por qué coincidir con él. Para $f:\mathbb R\to\mathbb R$, $f(x)=x^2$, se tiene $\operatorname{Im}(f)=[0,\infty)$.

### Imagen directa de un subconjunto

> [!definicion] Imagen directa
> Para $A\subseteq X$, la **imagen directa** es $f(A)=\{f(a):a\in A\}\subseteq Y$.

Se aplica la función a cada elemento de $A$ y se recogen los resultados. Distintos elementos pueden tener la misma imagen; por eso $f$ no necesariamente conserva el número de elementos.

### Preimagen de un subconjunto

> [!definicion] Preimagen
> Para $B\subseteq Y$, la **preimagen** de $B$ es
> $$
> f^{-1}(B)=\{x\in X:f(x)\in B\}\subseteq X.
> $$

La notación $f^{-1}(B)$ nombra una operación sobre subconjuntos y tiene sentido aunque $f$ no sea invertible. Sólo si existe una función inversa, $f^{-1}$ también puede denotar esa aplicación inversa.[^1]

En el ejemplo cuadrático, $f^{-1}([1,4])=[-2,-1]\cup[1,2]$: buscamos todas las entradas cuyos cuadrados están entre $1$ y $4$.

```anki
deck: Física::Álgebra Lineal::Transformaciones lineales
tags:
  - matematicas
  - funciones
  - imagen-preimagen
---
> [!note] Pregunta
> ¿Qué conjunto describe la preimagen $f^{-1}(B)$ cuando $f:X\to Y$ y $B\subseteq Y$?
===
> [!important] Respuesta
> Los elementos $x\in X$ tales que $f(x)\in B$; no requiere que exista una función inversa.
```

## Cómo actúan imagen y preimagen sobre conjuntos

Imagen y preimagen no obedecen las mismas reglas. La imagen directa avanza desde el dominio y puede identificar entradas distintas; la preimagen reúne todas las entradas que llegan a una región elegida del codominio.

### La preimagen conserva unión, intersección y complemento

Sean $B,C\subseteq Y$. Un elemento $x$ pertenece a $f^{-1}(B\cup C)$ exactamente cuando $f(x)\in B$ o $f(x)\in C$. Por tanto,

$$
f^{-1}(B\cup C)=f^{-1}(B)\cup f^{-1}(C).
$$

Reemplazando «o» por «y» se obtiene

$$
f^{-1}(B\cap C)=f^{-1}(B)\cap f^{-1}(C).
$$

Además, el complemento se toma respecto del codominio $Y$ a la derecha y del dominio $X$ a la izquierda:

$$
f^{-1}(Y\setminus B)=X\setminus f^{-1}(B).
$$

En particular, $f^{-1}(\varnothing)=\varnothing$ y $f^{-1}(Y)=X$. Estas igualdades resultan directamente de la definición de preimagen como condición de pertenencia.

### La imagen conserva uniones

Para $A,D\subseteq X$,

$$
f(A\cup D)=f(A)\cup f(D).
$$

En efecto, $y$ pertenece al miembro izquierdo si existe $x\in A\cup D$ con $f(x)=y$. Ese $x$ está en $A$ o en $D$, que es exactamente la condición para pertenecer al miembro derecho.

### La imagen de una intersección

Siempre se cumple

$$
f(A\cap D)\subseteq f(A)\cap f(D).
$$

Si $y=f(x)$ para algún $x\in A\cap D$, entonces $x$ pertenece a cada conjunto, de modo que $y$ pertenece a ambas imágenes. La inclusión puede ser estricta porque una entrada de $A$ y otra distinta de $D$ podrían tener la misma imagen.

Si $f$ es inyectiva, la inclusión es igualdad para todos $A,D\subseteq X$. Para ver la otra inclusión, toma $y\in f(A)\cap f(D)$. Hay $a\in A$ y $d\in D$ con $f(a)=y=f(d)$. La inyectividad da $a=d$, así que $a\in A\cap D$ y $y\in f(A\cap D)$.

Para un par fijo $A,D$, la igualdad se da exactamente cuando todo elemento común de las imágenes tiene algún representante en $A\cap D$. La inyectividad global es una condición suficiente que garantiza esa igualdad simultáneamente para cualquier par de subconjuntos.

### Ejemplo trabajado: cuándo la inclusión es estricta

Sea $f:\mathbb R\to\mathbb R$, $f(x)=x^2$, y toma $A=[-2,0]$, $D=[0,2]$. Entonces $A\cap D=\{0\}$, de modo que

$$
f(A\cap D)=\{0\},\qquad f(A)\cap f(D)=[0,4].
$$

La inclusión es estricta: $1$ tiene un representante $-1$ en $A$ y otro, $1$, en $D$, pero ningún representante común salvo $0$.

## Inyectividad, sobreyectividad y biyectividad

### Definición de inyectividad

> [!definicion] Aplicación inyectiva
> $f:X\to Y$ es **inyectiva** si $f(x_1)=f(x_2)$ implica $x_1=x_2$ para cualesquiera $x_1,x_2\in X$.

Entradas distintas no pueden compartir salida. Equivalentemente, cada elemento de la imagen tiene una sola preimagen.[^2]

### Definición de sobreyectividad

> [!definicion] Aplicación sobreyectiva
> $f:X\to Y$ es **sobreyectiva** si para cada $y\in Y$ existe al menos un $x\in X$ tal que $f(x)=y$.

La sobreyectividad equivale a $f(X)=Y$. Se refiere al codominio declarado, no a una fórmula aislada.

### Definición de biyectividad

> [!definicion] Aplicación biyectiva
> $f$ es **biyectiva** si es inyectiva y sobreyectiva; cada elemento del codominio tiene exactamente una preimagen.

La función $f:\mathbb R\to[0,\infty)$ dada por $x\mapsto x^2$ es sobreyectiva, pero no inyectiva. La función $g:[0,\infty)\to[0,\infty)$, $g(x)=x^2$, sí es biyectiva.

La inyectividad se vincula con [[Matemáticas/Fundamentos/Inyectividad|el lenguaje general de aplicaciones inyectivas]].

## Identidad, restricción y composición

### Aplicación identidad

Para cualquier conjunto $X$, la identidad $\operatorname{id}_X:X\to X$ se define por $\operatorname{id}_X(x)=x$. Es biyectiva y satisface $f\circ\operatorname{id}_X=f$ y $\operatorname{id}_Y\circ f=f$ para toda $f:X\to Y$.

### Restricción

Si $A\subseteq X$, la restricción $f|_A:A\to Y$ conserva la regla de $f$ pero reduce su dominio. Su imagen es $f(A)$. Una función no inyectiva puede volverse inyectiva al restringir el dominio: $x\mapsto x^2$ no es inyectiva en $\mathbb R$, pero sí en $[0,\infty)$.

### Composición

Si $f:X\to Y$ y $g:Y\to Z$, su composición $g\circ f:X\to Z$ aplica primero $f$ y luego $g$:

$$
(g\circ f)(x)=g(f(x)).
$$

La composición es asociativa: $h\circ(g\circ f)=(h\circ g)\circ f$ cuando los dominios y codominios encajan. La identidad actúa como elemento neutro a izquierda y derecha.

Si $f$ y $g$ son inyectivas, $g\circ f$ es inyectiva. Si $g(f(x_1))=g(f(x_2))$, la inyectividad de $g$ da $f(x_1)=f(x_2)$ y la de $f$ da $x_1=x_2$. Si la composición es inyectiva, $f$ necesariamente lo es; $g$ no tiene por qué ser inyectiva en todo $Y$, sólo puede serlo en los valores alcanzados por $f$.

Si $f$ y $g$ son sobreyectivas, $g\circ f$ es sobreyectiva: para $z\in Z$, la sobreyectividad de $g$ da $y$ con $g(y)=z$, y la de $f$ da $x$ con $f(x)=y$. Si la composición es sobreyectiva, $g$ necesariamente es sobreyectiva; $f$ no tiene por qué serlo sobre todo $Y$.[^2]

## Funciones inversas e invertibilidad

### Definición de función inversa

> [!definicion] Inversa de una aplicación
> Una aplicación $g:Y\to X$ es inversa de $f:X\to Y$ si $g\circ f=\operatorname{id}_X$ y $f\circ g=\operatorname{id}_Y$.

Si existe, se escribe $g=f^{-1}$. Es única: si $g$ y $h$ son inversas, $g=g\circ\operatorname{id}_Y=g\circ(f\circ h)=(g\circ f)\circ h=h$.

### Teorema: invertible si y sólo si biyectiva

Si $f$ tiene inversa, es inyectiva: de $f(x_1)=f(x_2)$ se aplica $f^{-1}$ y resulta $x_1=x_2$. También es sobreyectiva, porque $y=f(f^{-1}(y))$. Por tanto es biyectiva.

Recíprocamente, si $f$ es biyectiva, para cada $y\in Y$ existe exactamente un $x\in X$ con $f(x)=y$. Define $f^{-1}(y)$ como ese único $x$. Por construcción ambas composiciones son las identidades. Así, una aplicación es invertible exactamente cuando es biyectiva.

Las preimágenes de subconjuntos no deben confundirse con esta inversa: $f^{-1}(B)$ está definida para toda aplicación y todo conjunto $B\subseteq Y$; la función inversa sólo existe si $f$ es biyectiva.

## Errores frecuentes y continuidad

La palabra «imagen» puede nombrar $f(x)$, la salida de un elemento, o $f(A)$, el conjunto de salidas de un subconjunto. La preimagen vive siempre en el dominio, aunque el conjunto inicial esté en el codominio.

No afirmes que la imagen conserva intersecciones sin hipótesis: la igualdad global se garantiza con inyectividad; sin ella sólo se tiene una inclusión. Tampoco concluyas sobreyectividad sin especificar el codominio.

La siguiente nota restringe el tipo de aplicaciones a las que preservan combinaciones lineales: [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/04 Transformaciones lineales/02 Transformaciones, núcleo e imagen|transformaciones lineales, núcleo e imagen]].

## 📚 Fuentes

### Material base

No se aportó material base específico para esta nota. El índice curricular se utilizó exclusivamente para fijar la cobertura de aplicaciones, imágenes, preimágenes, composición e inversas; no se empleó como fuente académica.

### Ampliación académica

[^1]: UNAM, [*Álgebra Lineal Interactiva*](https://prometeo.matem.unam.mx/recursos/VariosNiveles/iCartesiLibri/recursos/Algebra_Lineal_Interactiva/index.html), recurso universitario abierto para lenguaje y aplicaciones matemáticas.
[^2]: Jim Hefferon, [*Linear Algebra*](https://hefferon.net/linearalgebra/), texto universitario abierto que utiliza aplicaciones, composiciones e inversas en álgebra lineal.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como tutor de Álgebra Lineal y comprueba que el estudiante separa dominio, codominio e imagen. Propón una función sencilla con subconjuntos para que explique imágenes y preimágenes, y pida justificar inclusiones y propiedades de composición. Usa pistas graduadas y exige que indique qué hipótesis —como inyectividad— necesita para convertir una inclusión en igualdad.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
