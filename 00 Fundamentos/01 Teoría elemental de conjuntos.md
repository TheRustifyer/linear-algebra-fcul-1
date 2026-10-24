---
title: Teoría elemental de conjuntos
aliases:
  - Conjuntos y operaciones
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Fundamentos
tipo:
  - teoría
  - definición
nivel: universitario-introductorio
estado: borrador
capa: curricular
fsrs_goal: Interpretar pertenencia e inclusión, construir conjuntos mediante operaciones y producto cartesiano, y demostrar una igualdad de conjuntos mediante doble inclusión o equivalencias de pertenencia.
simbolos:
  - x\in A
  - A\subseteq B
  - \varnothing
  - \mathcal P(A)
  - A\cup B
  - A\cap B
  - A\setminus B
  - A\times B
tags:
  - matemáticas
  - fundamentos
  - conjuntos
  - curricular
---

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

# Teoría elemental de conjuntos

## Elementos, pertenencia e inclusión

Un conjunto reúne objetos considerados como una unidad. La afirmación $x\in A$ dice que $x$ es un elemento de $A$; $x\notin A$ niega esa pertenencia. La notación por comprensión describe los elementos que cumplen una propiedad:

$$
A=\{x\in E\mid P(x)\},
$$

donde $E$ fija el universo de referencia y $P(x)$ es una condición. Por ejemplo, $\{x\in\mathbb Z\mid x^2=4\}=\{-2,2\}$. En una lista, el orden y las repeticiones no crean elementos nuevos: $\{1,2,1\}=\{2,1\}$.

> [!definicion] Subconjunto
> $A$ es subconjunto de $B$, escrito $A\subseteq B$, si todo elemento de $A$ pertenece también a $B$:
> $$
> A\subseteq B\iff \forall x\,(x\in A\Rightarrow x\in B).
> $$
> La inclusión puede ser igualdad. Se llama subconjunto propio cuando además $A\ne B$.

El símbolo $\in$ relaciona un objeto con un conjunto; $\subseteq$ relaciona dos conjuntos. Así, $2\in\{1,2,3\}$, mientras que $\{2\}\subseteq\{1,2,3\}$. Confundir ambos niveles cambia el significado de la expresión.

## Igualdad de conjuntos y demostración

La igualdad se determina por los elementos, no por la forma en que se describen ni por el orden de una lista:

> [!definicion] Igualdad de conjuntos
> $A=B$ si y sólo si tienen exactamente los mismos elementos. Equivalentemente,
> $$
> A=B\iff (A\subseteq B\text{ y }B\subseteq A).
> $$

Para demostrar una igualdad, se toma un elemento arbitrario y se prueba que pertenecer al primer conjunto equivale a pertenecer al segundo. Otra forma es establecer las dos inclusiones. En ambos casos, el argumento debe valer para cualquier elemento, no sólo para los que aparecen en un ejemplo finito.[^2]

```anki
deck: Matemáticas::Fundamentos::Conjuntos
tags:
  - matemáticas
  - conjuntos
  - definición
---
> [!note] Pregunta
> ¿Qué hay que probar para establecer que dos conjuntos $A$ y $B$ son iguales?
===
> [!important] Respuesta
> Que tienen los mismos elementos: equivalentemente, probar $A\subseteq B$ y $B\subseteq A$.
```

## Vacío y conjunto de partes

### Conjunto vacío

> [!definicion] Conjunto vacío
> El conjunto vacío $\varnothing$ no tiene elementos. Es subconjunto de todo conjunto, porque no existe un elemento suyo que pueda incumplir la condición de inclusión.

### Conjunto de partes

> [!definicion] Conjunto de partes
> El conjunto de partes de $A$, denotado $\mathcal P(A)$, es el conjunto cuyos elementos son todos los subconjuntos de $A$:
> $$
> \mathcal P(A)=\{X\mid X\subseteq A\}.
> $$

Si $A=\{a,b\}$, entonces $\mathcal P(A)=\{\varnothing,\{a\},\{b\},\{a,b\}\}$. Para un conjunto finito con $n$ elementos, hay $2^n$ subconjuntos: cada elemento se incluye o se excluye de una parte. El conjunto vacío es un elemento de $\mathcal P(A)$, pero $\varnothing$ no es lo mismo que $\{\varnothing\}$.

## Operaciones entre conjuntos

Sean $A,B$ subconjuntos de un universo $U$. Cada operación se define mediante una condición de pertenencia; leer esa condición conecta el álgebra de conjuntos con los conectivos lógicos.[^2]

> [!definicion] Unión
> $A\cup B=\{x\in U\mid x\in A\text{ o }x\in B\}$. Basta pertenecer a uno de los conjuntos, y pertenecer a ambos también cuenta.

> [!definicion] Intersección
> $A\cap B=\{x\in U\mid x\in A\text{ y }x\in B\}$. Se conservan exactamente los elementos comunes.

> [!definicion] Diferencia
> $A\setminus B=\{x\in U\mid x\in A\text{ y }x\notin B\}$. Se retienen los elementos de $A$ que no están en $B$; en general, $A\setminus B\ne B\setminus A$.

> [!definicion] Complemento
> El complemento de $A$ relativo a $U$ es $A^{\complement}=U\setminus A=\{x\in U\mid x\notin A\}$. El universo debe estar fijado: sin él, “estar fuera de $A$” no determina un conjunto único.

### Ejemplo trabajado: operaciones en un conjunto finito

Si $U=\{1,2,3,4,5\}$, $A=\{1,2,4\}$ y $B=\{2,3,4\}$, entonces $A\cup B=\{1,2,3,4\}$, $A\cap B=\{2,4\}$, $A\setminus B=\{1\}$ y $A^{\complement}=\{3,5\}$. La diferencia no es conmutativa: $B\setminus A=\{3\}$.

## Producto cartesiano

> [!definicion] Producto cartesiano
> El producto cartesiano de $A$ por $B$ es el conjunto de pares ordenados
> $$
> A\times B=\{(a,b)\mid a\in A,\ b\in B\}.
> $$
> El orden de las coordenadas importa: en general, $(a,b)\ne(b,a)$ y $A\times B\ne B\times A$.

Para $A=\{0,1\}$ y $B=\{r,s\}$, $A\times B=\{(0,r),(0,s),(1,r),(1,s)\}$. Si ambos conjuntos son finitos, $|A\times B|=|A|\,|B|$. Esta construcción organiza pares de datos y será la base para describir coordenadas y funciones entre conjuntos.

## Leyes, lógica y límites de uso

Las operaciones obedecen leyes análogas a las de los conectivos: la unión corresponde a “o” inclusivo; la intersección, a “y”; el complemento, a la negación. Para cualesquiera conjuntos $A,B,C\subseteq U$ se cumplen:

$$
\begin{aligned}
A\cup B&=B\cup A,& A\cap B&=B\cap A &&\text{(conmutatividad)},\\
(A\cup B)\cup C&=A\cup(B\cup C),& (A\cap B)\cap C&=A\cap(B\cap C) &&\text{(asociatividad)},\\
A\cup(B\cap C)&=(A\cup B)\cap(A\cup C),& A\cap(B\cup C)&=(A\cap B)\cup(A\cap C) &&\text{(distributividad)},\\
A\cup(A\cap B)&=A,& A\cap(A\cup B)&=A &&\text{(absorción)}.
\end{aligned}
$$

También $A\cup\varnothing=A$, $A\cap U=A$, $A\cup U=U$ y $A\cap\varnothing=\varnothing$. Las leyes de De Morgan describen cómo cambia una operación al tomar complementos:

$$
(A\cup B)^{\complement}=A^{\complement}\cap B^{\complement},\qquad
(A\cap B)^{\complement}=A^{\complement}\cup B^{\complement}.
$$

Por ejemplo, $x\in(A\setminus B)$ equivale a $x\in A$ y $x\notin B$, de modo que $A\setminus B=A\cap B^{\complement}$. Para comprobar la primera ley de De Morgan, se toma $x\in U$ arbitrario:

$$
x\in(A\cup B)^{\complement}
\iff x\notin A\cup B
\iff (x\notin A\text{ y }x\notin B)
\iff x\in A^{\complement}\cap B^{\complement}.
$$

Como la equivalencia vale para todo $x\in U$, los conjuntos son iguales. Las leyes de conjuntos expresan equivalencias lógicas universales; los diagramas de Venn sirven para visualizar, pero por sí solos no justifican una identidad general.[^1][^2]

Las condiciones de validez del complemento exigen que el universo esté declarado. Además, una igualdad de conjuntos no se demuestra comprobando unos cuantos elementos: hace falta un argumento universal. Estas distinciones serán útiles al razonar sobre conjuntos de soluciones de un [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices y operaciones|sistema lineal]].

## 📚 Fuentes

### Material base aportado

- Ninguno aportado. El índice fija el alcance, pero no constituye fuente matemática.

### Ampliación académica

[^1]: [Florent Baudier, *Introduction to Elementary Set Theory*, apuntes de curso, Texas A&M University](https://people.tamu.edu/~florent/teaching/lecture_notes/220lecture_notes.pdf). Pertenencia, inclusión, operaciones, leyes algebraicas y pruebas por doble inclusión.

[^2]: [Universitat Politècnica de València, *Demostración elemento a elemento*, recurso audiovisual enlazado en el itinerario](https://riunet.upv.es/handle/10251/64151). Apoyo para justificar equivalencias y escribir demostraciones elementales.

## 🧑‍🏫 Prompt para tutor conversacional

Comprueba que el estudiante distingue pertenencia de inclusión, interpreta correctamente el conjunto vacío y el conjunto de partes, traduce unión, intersección, diferencia y complemento a condiciones lógicas, y entiende por qué el complemento depende del universo. Pídele que explique una igualdad por doble inclusión y que ordene los pares de un producto cartesiano. No generes ejercicios nuevos; usa ejemplos breves y diagnostica con precisión cada paso.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
