---
schema: nabla-phi-note/v1
title: Propiedades derivadas de los axiomas
aliases:
  - Consecuencias de los axiomas de espacio vectorial
  - Propiedades de los espacios vectoriales
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
tipo:
  - lección
  - demostración
nivel: universitario-introductorio
estado: borrador
capa: curricular
requiere:
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/01 Espacios vectoriales — definición y axiomas|Espacios vectoriales: definición y axiomas]]"
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/01 Espacios vectoriales y axiomas|Espacios vectoriales y axiomas]]"
desbloquea:
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/02 Subespacios vectoriales|Subespacios vectoriales]]"
fsrs_goal: Justifica desde los axiomas la unicidad del cero y del opuesto, la cancelación, las reglas de signo y la propiedad de producto nulo, indicando qué resultados previos usa cada demostración y evitando circularidad.
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
  - demostracion
  - fcul
---

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

# Propiedades derivadas de los axiomas

En un espacio vectorial se usan continuamente igualdades como $0_Kv=0_V$, $\lambda 0_V=0_V$ y $(-1_K)v=-v$. No son reglas añadidas a la definición: cada una se deduce de los axiomas de la suma y de la multiplicación por escalares.[^1] Para que la lógica no dé vueltas sobre sí misma, hay que establecer el orden de dependencia antes de empezar. La nota de [[Matemáticas/Álgebra lineal/Espacios vectoriales/01 Espacios vectoriales — definición y axiomas|espacios vectoriales y axiomas]] fija las hipótesis. Su estructura es un grupo conmutativo $(V,+)$ sobre un cuerpo $K$, con una acción externa compatible.[^2] Escribiremos $0_V$ para el neutro vectorial y $0_K$ para el escalar cero; $-v$ es el opuesto de $v$ en $V$.

## Axioma, definición y teorema

Un **axioma** es una condición asumida en la definición de una estructura. En este contexto, las leyes de grupo conmutativo y las cuatro reglas de escalares son axiomas. Una **definición** fija qué significa un término —por ejemplo, «espacio vectorial»— mediante datos y propiedades. Un **teorema** es una afirmación que se demuestra a partir de axiomas, definiciones y resultados previamente establecidos. La distinción importa en una prueba: citar un axioma es legítimo; citar como obvia una propiedad que todavía no se ha demostrado puede ocultar circularidad. Por ejemplo, antes de probar $0_Kv=0_V$, no debe usarse esa igualdad para demostrar otra propiedad.

## Orden lógico de las demostraciones

Las pruebas de este capítulo siguen una cadena deliberada:

1. De los axiomas de grupo se obtiene la unicidad del neutro y del opuesto.
2. Con el opuesto ya disponible se demuestra la cancelación aditiva.
3. La distributividad escalar y la cancelación permiten probar $0_Kv=0_V$ y $\lambda0_V=0_V$.
4. La unicidad del opuesto y esas dos reglas de cero permiten deducir signos y producto nulo.

La cancelación se establece sólo con la estructura aditiva; por tanto, no depende de ninguna propiedad escalar derivada. Este es el punto que evita usar $0_Kv=0_V$ antes de haberlo probado.

## Unicidad del neutro y del opuesto

### Teorema: el vector cero es único

Supongamos que $e$ y $e'$ son neutros aditivos en $V$. Por ser $e'$ neutro, $e+e'=e$; por ser $e$ neutro, $e+e'=e'$. Luego

$$
e=e+e'=e'.
$$

Así que el neutro no es sólo existente: es único. Podemos llamarlo sin ambigüedad $0_V$.

### Teorema: cada vector tiene un único opuesto

Fijemos $v\in V$. Sean $u$ y $w$ dos opuestos de $v$, es decir, $u+v=0_V$ y $v+w=0_V$. Entonces, usando el neutro, la asociatividad y las igualdades de opuesto,

$$
u=u+0_V=u+(v+w)=(u+v)+w=0_V+w=w.
$$

Por tanto $u=w$. El opuesto existe por el axioma de grupo y es único por esta demostración; se denota $-v$.

### Cancelación aditiva

Si $x+z=y+z$, sumamos el opuesto $-z$ a ambos lados. La asociatividad y el axioma de neutro dan

$$
(x+z)+(-z)=(y+z)+(-z)
\quad\Longrightarrow\quad
x+(z+(-z))=y+(z+(-z))
\quad\Longrightarrow\quad x=y.
$$

La ley de grupo garantiza que existe $-z$, mientras que $z+(-z)=0_V$ y $x+0_V=x$. Esta propiedad de **cancelación** se refiere a la suma vectorial; no autoriza a cancelar un vector en una expresión de producto escalar.

```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
  - demostracion
---
> [!note] Pregunta
> ¿Qué hipótesis bastan para demostrar la cancelación $x+z=y+z\Rightarrow x=y$?
===
> [!important] Respuesta
> Sólo los axiomas de grupo aditivo: sumar $-z$ a ambos lados, reagrupar por asociatividad y usar $z+(-z)=0_V$ y el neutro. No se requiere ningún axioma de multiplicación escalar.
```

## El escalar cero y el vector cero

### Teorema: $0_Kv=0_V$

Sean $v\in V$. Como $0_K+0_K=0_K$, la distributividad respecto de la suma de escalares da

$$
0_Kv=(0_K+0_K)v=0_Kv+0_Kv.
$$

Aplicamos cancelación aditiva a $a=a+a$, con $a=0_Kv$: al sumar $-a$ a ambos lados queda $0_V=a$. Así,

$$
0_Kv=0_V.
$$

En esta prueba no se ha supuesto la conclusión. La igualdad $0_K+0_K=0_K$ procede del cuerpo; la distributividad produce la suma repetida; la cancelación ya fue demostrada sólo con los axiomas de grupo.

### Teorema: $\lambda0_V=0_V$

Para $\lambda\in K$, se usa que $0_V+0_V=0_V$ y la distributividad respecto de la suma vectorial:

$$
\lambda0_V=\lambda(0_V+0_V)=\lambda0_V+\lambda0_V.
$$

Por la misma cancelación aditiva aplicada al vector $\lambda0_V$, se concluye

$$
\lambda0_V=0_V.
$$

Las dos fórmulas de cero son distintas: en la primera el escalar es cero y el vector es cualquiera; en la segunda el vector es cero y el escalar es cualquiera.

## Opuestos y reglas de signo

### Teorema: $(-\lambda)v=-(\lambda v)$

Para $\lambda\in K$ y $v\in V$, distributividad respecto de la suma escalar y la regla $0_Kv=0_V$ dan

$$
(\lambda+(-\lambda))v
=\lambda v+(-\lambda)v
=0_Kv
=0_V.
$$

El lado izquierdo es $0_Kv$. Por tanto $(-\lambda)v$ es un opuesto de $\lambda v$. La unicidad del opuesto prueba que

$$
(-\lambda)v=-(\lambda v).
$$

### Teorema: $\lambda(-v)=-(\lambda v)$

La distributividad respecto de la suma vectorial y la regla $\lambda0_V=0_V$ implican

$$
\lambda v+\lambda(-v)=\lambda(v+(-v))=\lambda0_V=0_V.
$$

Así, $\lambda(-v)$ es el opuesto de $\lambda v$; por unicidad,

$$
\lambda(-v)=-(\lambda v).
$$

Estas dos reglas describen en qué argumento aparece el signo menos: se puede trasladar entre escalar y vector porque ambos lados son el único opuesto de $\lambda v$.

### Corolario: $(-1_K)v=-v$

En el teorema anterior tomamos $\lambda=1_K$. La compatibilidad unitaria da $1_Kv=v$, así que

$$
(-1_K)v=-(1_Kv)=-v.
$$

La identidad no se incorpora como un axioma separado: se sigue de distributividad, de las reglas del cero y de la unicidad del opuesto.

### Ejemplo trabajado: trasladar el signo en $\mathbb R^2$

Sean $\lambda=-2$ y $v=(3,-1)$. Entonces

$$
(-\lambda)v=2(3,-1)=(6,-2),\qquad
-(\lambda v)=-((-6,2))=(6,-2).
$$

La igualdad ilustra la regla demostrada: cambiar el signo del escalar produce el opuesto del vector escalado. El cálculo verifica el caso concreto; la prueba anterior garantiza que vale en cualquier espacio vectorial.

```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
  - reglas-de-signos
---
> [!note] Pregunta
> ¿Por qué $(-1_K)v=-v$ en todo espacio vectorial?
===
> [!important] Respuesta
> Porque $(-1_K)v+v=((-1_K)+1_K)v=0_Kv=0_V$; por tanto $(-1_K)v$ es el opuesto aditivo de $v$, que es único.
```

## Propiedad de producto nulo

### Teorema: $\lambda v=0_V$ implica $\lambda=0_K$ o $v=0_V$

Sean $\lambda\in K$ y $v\in V$. Si $\lambda=0_K$, la primera regla de cero asegura $\lambda v=0_V$. Si $v=0_V$, la segunda regla de cero da el mismo resultado. Recíprocamente, supongamos $\lambda v=0_V$.

Si $\lambda=0_K$, la disyunción ya se cumple. Si $\lambda\ne0_K$, existe el inverso multiplicativo $\lambda^{-1}$ en el cuerpo. Aplicándolo a la igualdad y usando compatibilidad escalar,

$$
v=1_Kv=(\lambda^{-1}\lambda)v
=\lambda^{-1}(\lambda v)
=\lambda^{-1}0_V=0_V.
$$

Concluimos la equivalencia

$$
\lambda v=0_V\quad\Longleftrightarrow\quad
\lambda=0_K\ \text{o}\ v=0_V.
$$

La condición de cuerpo es decisiva: en un anillo sin inversos para todos los elementos no nulos, el argumento de multiplicar por $\lambda^{-1}$ puede no estar disponible. Tampoco se «cancela el vector»; la prueba usa el inverso del escalar.

## Cadena de dependencias y errores de prueba

El orden lógico puede resumirse así:

$$
\text{axiomas aditivos}\Rightarrow
\text{opuesto único y cancelación}\Rightarrow
0_Kv=0_V,\ \lambda0_V=0_V\Rightarrow
\text{reglas de signo}\Rightarrow
\text{producto nulo}.
$$

Un error frecuente es «cancelar» $v$ en $\lambda v=0_V$. La cancelación demostrada arriba se aplica a sumas $x+z=y+z$; aquí se tiene una acción escalar, no una suma con factor común. El resultado correcto se obtiene separando los casos $\lambda=0_K$ y $\lambda\ne0_K$.

La frase «cero por cualquier cosa es cero» es cierta aquí, pero debe justificarse mediante distributividad y cancelación antes de utilizarse.

## Alcance

Estas propiedades se cumplen en cualquier espacio vectorial, sin importar si sus vectores son coordenadas, matrices, polinomios o funciones. Sus pruebas sólo usan los axiomas y las propiedades de cuerpo que se han señalado. Las herramientas permiten simplificar cálculos y estudiar combinaciones lineales; los subconjuntos cerrados bajo esas combinaciones llevan al concepto de [[Matemáticas/Álgebra lineal/Espacios vectoriales/02 Subespacios vectoriales|subespacio vectorial]].

## 📚 Fuentes

### Material base

- [[Matemáticas/Álgebra lineal/Espacios vectoriales/01 Espacios vectoriales — definición y axiomas|Espacios vectoriales: definición y axiomas]], nota canónica del Vault; en particular, sus axiomas y la distinción entre $0_K$ y $0_V$.

### Ampliación académica

[^1]: Jim Hefferon, [*Linear Algebra*](https://hefferon.net/linearalgebra/), texto abierto, capítulos sobre espacios vectoriales y demostraciones de consecuencias de los axiomas.
[^2]: MIT OpenCourseWare, [*Algebra I Student Notes*](https://ocw.mit.edu/courses/res-18-011-algebra-i-student-notes-fall-2021/mit18_701f21_full_lec_new.pdf), apuntes universitarios abiertos sobre cuerpos y estructuras vectoriales.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como tutor universitario de Álgebra Lineal y pide al estudiante reconstruir las demostraciones a partir de los axiomas, sin ofrecer de inmediato la cadena completa. Si usa una propiedad antes de probarla, pregunta qué hipótesis la justifica. Haz que distinga cancelación aditiva de inversión de un escalar y que identifique cuándo se usa que $K$ es un cuerpo.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
