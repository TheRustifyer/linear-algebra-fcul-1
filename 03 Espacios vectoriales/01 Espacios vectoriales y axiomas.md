---
schema: nabla-phi-note/v1
title: Espacios vectoriales y axiomas
aliases:
  - Espacio vectorial
  - Axiomas de espacio vectorial
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
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/01 Espacios vectoriales — definición y axiomas|Espacios vectoriales: definición y axiomas]]"
desbloquea:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/02 Propiedades derivadas de los axiomas|Propiedades derivadas de los axiomas]]"
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/02 Subespacios vectoriales|Subespacios vectoriales]]"
relacionado:
  - "[[Matemáticas/Álgebra lineal/Matrices|Matrices]]"
fsrs_goal: Comprueba si un conjunto con operaciones dadas es un espacio vectorial sobre un cuerpo especificado, enumera los ocho axiomas y usa un ejemplo o contraejemplo para identificar la condición decisiva.
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

# Espacios vectoriales y axiomas

Una lista de coordenadas, una matriz o un polinomio pueden combinarse sumándolos y multiplicándolos por números. Cuando esas operaciones obedecen las mismas reglas, se pueden estudiar con un lenguaje común aunque los objetos tengan apariencias distintas. Un espacio vectorial formaliza esa estructura de combinación lineal.

La expresión «vector» designa aquí cualquier elemento de la colección estudiada. La propiedad central no es su forma geométrica, sino que las operaciones elegidas satisfagan los axiomas sobre el cuerpo de escalares indicado. La formulación canónica de [[Matemáticas/Álgebra lineal/Espacios vectoriales/01 Espacios vectoriales — definición y axiomas|espacio vectorial]] recoge la estructura con más detalle; aquí fijamos su definición y aprendemos a reconocerla.[^1]

## Conjunto, escalares y operaciones

Sea $K$ un cuerpo, por ejemplo $\mathbb R$ o $\mathbb C$, y sea $V$ un conjunto. Hay dos operaciones que deben estar definidas:

- una **suma interna** $+:V\times V\to V$, que combina dos elementos de $V$ y devuelve otro elemento de $V$;
- una **multiplicación externa por escalares** $\odot:K\times V\to V$, que combina un escalar y un vector y devuelve un vector.

En la notación habitual la suma interna se escribe $u+v$ y la multiplicación externa $\lambda\odot v$, abreviada como $\lambda v$. Los símbolos recuerdan operaciones distintas: $+$ suma vectores o escalares según el contexto, mientras que $\lambda v$ aplica un escalar a un vector. El dominio de cada operación evita sumar, por ejemplo, un número y un vector sin haber definido tal operación.

### Qué leyes puede cumplir una operación

Que una regla sea una operación binaria interna sólo asegura que recibe dos elementos y devuelve uno del mismo conjunto. No dice todavía si el orden de los argumentos importa ni cómo se agrupan tres elementos. Para la suma vectorial se exigen, además, asociatividad, conmutatividad, un neutro y un opuesto para cada vector. Esas leyes convierten $(V,+)$ en un grupo conmutativo. La nota canónica de [[Matemáticas/Estructuras algebraicas/Operaciones algebraicas|operaciones algebraicas]] desarrolla esta distinción y otros ejemplos.[^a17-operaciones]

Por ejemplo, en $\mathbb R$ la suma es asociativa y conmutativa, tiene neutro $0$ y cada real $x$ tiene opuesto $-x$. En un espacio vectorial esas mismas leyes deben valer para los elementos de $V$, cualquiera que sea su naturaleza. La multiplicación externa por escalares tiene otro tipo de entrada; sus compatibilidades se fijan por separado en los axiomas 5–8.

```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - operaciones
---
> [!note] Pregunta
> ¿Qué debe cumplir la suma interna de $V$ además de ser una operación binaria?
===
> [!important] Respuesta
> Ser asociativa y conmutativa, tener neutro y un opuesto para cada vector. La multiplicación externa por escalares tiene cuatro axiomas propios.
```

### Definición de espacio vectorial

> [!definicion] Espacio vectorial sobre $K$
> Un **espacio vectorial sobre $K$** es un conjunto $V$ equipado con una suma interna y una multiplicación externa por escalares, tales que $(V,+)$ es un grupo conmutativo y se cumplen los cuatro axiomas de compatibilidad entre escalares y vectores indicados abajo. Los elementos de $V$ se llaman **vectores** y los de $K$, **escalares**.[^2]

La parte «grupo conmutativo» aporta cuatro condiciones. Las otras cuatro expresan que la acción de escalares respeta las sumas y el producto de $K$. En total son ocho axiomas. La pertenencia de los resultados al conjunto ya está incluida en los tipos de las operaciones: $u+v\in V$ y $\lambda v\in V$.

```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
---
> [!note] Pregunta
> ¿Qué datos y condiciones definen un espacio vectorial sobre $K$?
===
> [!important] Respuesta
> Un conjunto $V$, una suma interna que lo hace grupo conmutativo y una acción $K\times V\to V$ que cumple las dos distributividades, la compatibilidad con el producto escalar y la acción de $1_K$.
```

## Los ocho axiomas

En las fórmulas siguientes $u,v,w\in V$ y $\lambda,\mu\in K$. El símbolo $0_V$ denota el vector neutro de la suma; $0_K$ es el escalar cero. La distinción es importante porque pertenecen a conjuntos diferentes.

### Axiomas de la suma

La suma de vectores debe cumplir:

1. **Asociatividad:** $(u+v)+w=u+(v+w)$.
2. **Conmutatividad:** $u+v=v+u$.
3. **Neutro aditivo:** existe $0_V\in V$ tal que $u+0_V=u$ para todo $u$.
4. **Opuesto aditivo:** para cada $u$ existe $-u\in V$ con $u+(-u)=0_V$.

Estos axiomas hacen de $(V,+)$ un grupo conmutativo. El cero vectorial no tiene por qué parecerse al número cero: para matrices es la matriz cuyas entradas son cero; para polinomios es el polinomio nulo.

### Axiomas de multiplicación por escalares

La acción de los escalares debe satisfacer:

5. **Distributividad respecto a la suma vectorial:** $\lambda(u+v)=\lambda u+\lambda v$.
6. **Distributividad respecto a la suma escalar:** $(\lambda+\mu)v=\lambda v+\mu v$.
7. **Compatibilidad con el producto de escalares:** $(\lambda\mu)v=\lambda(\mu v)$.
8. **Acción de la unidad:** $1_Kv=v$.

La primera distributividad descompone una suma de vectores; la segunda descompone una suma de escalares. En la séptima, el producto $\lambda\mu$ se calcula en $K$. La última condición impide que la unidad del cuerpo cambie al vector.

## Cómo comprobar una estructura

Para decidir si los datos forman un espacio vectorial, se especifican primero $K$, $V$, la suma y el producto escalar. Después se comprueba que ambas operaciones estén bien definidas y se verifican las ocho propiedades. En un conjunto amplio puede bastar un contraejemplo: una sola propiedad fallida descarta la estructura.

Las consecuencias como $0_Kv=0_V$ o $(-1_K)v=-v$ no sustituyen a los axiomas. Se deducen de ellos y pueden usarse después de justificarlas. La demostración paso a paso de estas consecuencias se desarrolla en [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/02 Propiedades derivadas de los axiomas|Propiedades derivadas de los axiomas]].

## Ejemplos de espacios vectoriales

### Coordenadas sobre un cuerpo

Para cualquier entero $n\ge 1$, $K^n$ es el conjunto de $n$-tuplas $(x_1,\dots,x_n)$ con componentes en $K$. Se suman y escalan componente a componente:

$$
(x_1,\dots,x_n)+(y_1,\dots,y_n)=(x_1+y_1,\dots,x_n+y_n),\qquad
\lambda(x_1,\dots,x_n)=(\lambda x_1,\dots,\lambda x_n).
$$

Por ejemplo, en $\mathbb R^2$, $(1,2)+(-3,4)=(-2,6)$ y $2(1,2)=(2,4)$. Las ocho propiedades se verifican coordenada por coordenada usando las leyes del cuerpo $K$. El vector cero es $(0_K,\dots,0_K)$.

### Matrices de tamaño fijo

El conjunto $M_{m\times n}(K)$ de matrices $m$ por $n$ con entradas en $K$ es un espacio vectorial con la suma y producto escalar entrada a entrada. La suma conserva el tamaño; el vector cero es la matriz nula y el opuesto se obtiene cambiando el signo de cada entrada. Cada axioma se reduce a la propiedad correspondiente en $K$.[^3]

Por ejemplo, para estas matrices $3\times3$,

$$
A=\begin{pmatrix}
1&0&2\\
-1&3&1\\
2&1&0
\end{pmatrix},
\qquad
B=\begin{pmatrix}
0&2&-1\\
4&1&0\\
-2&3&5
\end{pmatrix},
$$

la suma y el producto por $2$ se calculan entrada a entrada:

$$
A+B=\begin{pmatrix}
1&2&1\\
3&4&1\\
0&4&5
\end{pmatrix},
\qquad
2A=\begin{pmatrix}
2&0&4\\
-2&6&2\\
4&2&0
\end{pmatrix}.
$$

Ambas matrices resultantes siguen en $M_{3\times3}(K)$ cuando las entradas pertenecen a $K$.[^a17-ejemplos]

### Polinomios de grado acotado

Sea $P_d(K)$ el conjunto de polinomios con coeficientes en $K$ y grado menor o igual que $d$, junto con el polinomio nulo. La suma y el producto por escalares habituales no elevan el grado por encima de $d$; por tanto permanecen en $P_d(K)$. El neutro es el polinomio nulo, y los axiomas se heredan de las operaciones sobre coeficientes.

Por ejemplo, en $P_2(\mathbb R)$,

$$
(x^2+2x+1)+(-x^2+3)=2x+4,\qquad 3(x^2+2x+1)=3x^2+6x+3.
$$

Ambos resultados siguen teniendo grado a lo sumo $2$.

### Funciones con dominio y codominio fijos

Si $X$ es un conjunto, el conjunto de funciones $f:X\to K$ es un espacio vectorial al definir $(f+g)(x)=f(x)+g(x)$ y $(\lambda f)(x)=\lambda f(x)$ para cada $x\in X$. Las igualdades de funciones se comprueban punto a punto. El vector cero es la función que vale $0_K$ en todo $X$.

Este ejemplo muestra que los vectores no tienen por qué ser listas finitas: una función puede tratarse como un único elemento, siempre que las operaciones permanezcan dentro del conjunto. En particular, el conjunto $F(\mathbb R)$ de todas las funciones reales de variable real es un espacio vectorial, y también lo es $C(\mathbb R)$, el subconjunto de funciones continuas: la suma de continuas y su producto por un real siguen siendo continuos. Por tanto, $C(\mathbb R)$ es además un subespacio de $F(\mathbb R)$.[^a17-ejemplos]

### Dos casos que ponen a prueba la definición

El espacio vectorial más pequeño tiene un solo elemento: $V=\{0_V\}$. La suma y cualquier producto por escalares devuelven ese mismo elemento, así que todos los axiomas se cumplen. No se exige que haya vectores distintos del cero.[^a17-ejemplos]

En cambio, el círculo unidad

$$
S^1=\{(x,y)\in\mathbb R^2:x^2+y^2=1\}
$$

no es un espacio vectorial con las operaciones habituales. Contiene $(1,0)$ y $(0,1)$, pero su suma $(1,1)$ no pertenece a $S^1$, porque $1^2+1^2\ne1$. Falla el cierre bajo suma.[^a17-circulo]

```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
---
> [!note] Pregunta
> ¿Por qué el círculo unidad de $\mathbb R^2$ no es un espacio vectorial con las operaciones habituales?
===
> [!important] Respuesta
> No es cerrado bajo suma: $(1,0)$ y $(0,1)$ pertenecen a la circunferencia, pero su suma $(1,1)$ no.
```

## El mismo conjunto con cuerpos distintos: $\mathbb C$

Los escalares son parte de la estructura. El conjunto $\mathbb C$ es un espacio vectorial sobre sí mismo: la suma y la multiplicación escalar son las operaciones complejas habituales, y $1\in\mathbb C$ es la unidad escalar. Una base consta de $\{1\}$, así que su dimensión sobre $\mathbb C$ es $1$.

También es un espacio vectorial sobre $\mathbb R$ cuando sólo se permite multiplicar por reales. Todo complejo tiene forma única $a+bi$, con $a,b\in\mathbb R$, por lo que $\{1,i\}$ es una base real y la dimensión sobre $\mathbb R$ es $2$. No hay contradicción: la dimensión depende del cuerpo de escalares.

Más generalmente, $\mathbb C^n$ es espacio vectorial sobre $\mathbb R$ usando escalares reales; su dimensión real es $2n$. El producto por un escalar complejo también está definido dentro de $\mathbb C^n$, por lo que además es un espacio vectorial complejo, de dimensión compleja $n$. En cambio, $\mathbb R^n$ no es subespacio de $\mathbb C^n$ si esta última se considera sobre $\mathbb C$: el vector $e_1=(1,0,\ldots,0)$ es real, pero $ie_1=(i,0,\ldots,0)$ ya no pertenece a $\mathbb R^n$. La misma inclusión sí es de subespacios cuando ambas se consideran sobre $\mathbb R$.[^a17-ejemplos]

## Contraejemplo: una operación que no respeta la unidad

En $V=\mathbb R^2$ conservemos la suma habitual, pero definamos la operación externa por

$$
\lambda\odot(x,y)=(\lambda x,0).
$$

La operación está bien definida y devuelve un par real. Sin embargo, si $v=(1,2)$, entonces $1\odot v=(1,0)\ne(1,2)=v$. Falla el axioma de acción de la unidad. Por tanto estos datos no forman un espacio vectorial, aunque la suma habitual sí cumpla los cuatro axiomas aditivos.

El ejemplo localiza el criterio: no basta con que las operaciones tengan nombres familiares o produzcan resultados del tipo correcto; deben satisfacer cada regla exigida por la definición.

## Lectura y continuidad

La lista de ocho axiomas define la estructura, pero muchas propiedades útiles se deducen de ella. Entre ellas están la unicidad del vector cero, la unicidad del opuesto, las reglas de signos y la condición de producto nulo. Esas demostraciones no son axiomas adicionales: usan las leyes de grupo y las propiedades del cuerpo.

Al analizar una estructura, conviene registrar primero el conjunto, el cuerpo y las dos operaciones. Luego se comprueba que la suma y la acción escalar devuelvan elementos de $V$. Finalmente se revisan las leyes aditivas y las cuatro compatibilidades escalares. Si una igualdad falla para un solo elemento, ese testigo basta para descartar la estructura.

Esta estrategia también hace visible por qué el cuerpo importa: una operación escalar puede estar cerrada para $\mathbb R$ y dejar de estarlo si se admiten escalares de un cuerpo mayor. La prueba de pertenencia precede a la comprobación de identidades.

Una vez establecida la estructura total, se estudian subconjuntos que también son espacios vectoriales con las operaciones heredadas. Ese tema se formula en la nota de [[Matemáticas/Álgebra lineal/Espacios vectoriales/02 Subespacios vectoriales|subespacios vectoriales]]. La relación entre espacio, combinación lineal y matrices enlaza además con sistemas lineales, pero no altera la definición abstracta.

## Práctica graduada

1. En $V=M_{2\times2}(\mathbb R)$ con las operaciones habituales, identifica el dominio y el codominio de la suma y del producto por escalares.
2. Decide si $\mathbb R^2$ es un espacio vectorial con la suma habitual y $\lambda\odot(x,y)=(\lambda x,0)$. Señala la condición que decide.
3. Explica por qué $C(\mathbb R)$ es subespacio de $F(\mathbb R)$.

## Soluciones razonadas

1. La suma es interna, $V\times V\to V$: suma dos matrices del mismo tamaño y el resultado conserva sus cuatro entradas. El producto por escalares es externo, $\mathbb R\times V\to V$: combina un real y una matriz y devuelve otra matriz $2\times2$.
2. No. Para $v=(1,2)$, la operación propuesta da $1\odot v=(1,0)\ne v$. Falla el axioma de acción de la unidad, aunque el resultado sí pertenece a $\mathbb R^2$.
3. La función cero es continua, y la suma de dos funciones continuas y el múltiplo real de una función continua siguen siendo continuos. Así $C(\mathbb R)$ contiene el cero y es cerrado bajo ambas operaciones heredadas de $F(\mathbb R)$.

## 📚 Fuentes

### Material base aportado

- [[Matemáticas/Álgebra lineal/Espacios vectoriales/01 Espacios vectoriales — definición y axiomas|Espacios vectoriales: definición y axiomas]], nota canónica del Vault: formalismo completo, terminología y fuente académica asociada.
- FCUL, *ALGA 2026/27, Aulas Teóricas*, Aula 17, «Espaços vetoriais», 26/10/2026, diapositivas pp. 2–21. Localizadores concretos: operaciones de coordenadas y matrices, pp. 2–5; operaciones binarias y sus leyes, pp. 6–13; ejemplos y contraejemplo, pp. 17–21. No se añade un enlace directo al PDF de clase.
- Índice curricular de Álgebra Lineal y Geometría Analítica para Física, FCUL. Determina el alcance de esta unidad; no se usa como fuente de las afirmaciones matemáticas.

### Ampliación académica

[^1]: [[Matemáticas/Álgebra lineal/Espacios vectoriales/01 Espacios vectoriales — definición y axiomas|Espacios vectoriales: definición y axiomas]], formulación canónica del Vault y referencia a los materiales universitarios que fijan el formalismo.
[^2]: Jim Hefferon, [*Linear Algebra*](https://hefferon.net/linearalgebra/), texto abierto, secciones sobre espacios vectoriales y axiomas.
[^3]: MIT OpenCourseWare, [*Algebra I Student Notes*](https://ocw.mit.edu/courses/res-18-011-algebra-i-student-notes-fall-2021/mit18_701f21_full_lec_new.pdf), notas universitarias abiertas sobre estructuras algebraicas y espacios vectoriales.

Los ejemplos finito-dimensionales se verifican componente a componente: las propiedades necesarias son exactamente las leyes del cuerpo en cada coordenada o coeficiente. Esta reducción explica por qué los mismos axiomas sirven para tuplas, matrices y polinomios.

[^a17-operaciones]: FCUL, Aula 17, 26/10/2026, diapositivas pp. 6–13: operaciones binarias internas, conmutatividad, asociatividad, elemento neutro y elemento inverso.
[^a17-ejemplos]: FCUL, Aula 17, 26/10/2026, diapositivas pp. 2–5 y 17–21: operaciones con coordenadas y matrices; polinomios, funciones, dependencia respecto del cuerpo y el espacio vectorial de un solo elemento.
[^a17-circulo]: FCUL, Aula 17, 26/10/2026, diapositiva p. 21: la circunferencia unidad no es cerrada bajo suma.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como tutor universitario de Álgebra Lineal. Comprueba si el estudiante distingue $K$ de $V$, identifica correctamente las dos operaciones y puede explicar los ocho axiomas. Usa preguntas de diagnóstico y ejemplos nuevos breves, pero no des por supuesta ninguna propiedad derivada antes de justificarla. Si hay un error, ofrece una pista graduada y pide que se localice el axioma concreto que decide el caso.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
