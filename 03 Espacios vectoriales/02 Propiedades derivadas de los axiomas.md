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

> [!demostracion] Demostración
> **Hipótesis.** Sean $e$ y $e'$ dos neutros aditivos en $V$.
>
> Como $e'$ es neutro, $e+e'=e$. Como $e$ también lo es, $e+e'=e'$. Por tanto,
>
> $$
> e=e+e'=e'.
> $$
>
> El neutro aditivo es único y puede denotarse sin ambigüedad por $0_V$.

### Teorema: cada vector tiene un único opuesto

> [!demostracion] Demostración
> **Hipótesis.** Fijemos $v\in V$ y supongamos que $u$ y $w$ son opuestos suyos: $u+v=0_V$ y $v+w=0_V$.
>
> Por el neutro, la asociatividad y esas dos igualdades,
>
> $$
> u=u+0_V=u+(v+w)=(u+v)+w=0_V+w=w.
> $$
>
> Así $u=w$. El opuesto existe por el axioma de grupo y es único por esta prueba; se denota $-v$.

### Cancelación aditiva

> [!demostracion] Demostración
> **Hipótesis.** Sean $x,y,z\in V$ y supongamos $x+z=y+z$.
>
> Sumamos $-z$ a ambos lados, reagrupamos por asociatividad y usamos que $z+(-z)=0_V$:
>
> $$
> (x+z)+(-z)=(y+z)+(-z)
> \Longrightarrow x+(z+(-z))=y+(z+(-z))
> \Longrightarrow x+0_V=y+0_V
> \Longrightarrow x=y.
> $$
>
> La cancelación demostrada aquí es aditiva; no autoriza a cancelar un vector en un producto escalar.

## El escalar cero y el vector cero

### Teorema: $0_Kv=0_V$

> [!demostracion] Demostración · Aula 18, diapositiva p. 3
> **Objetivo.** Para un $v\in V$ arbitrario, probar que $0_Kv=0_V$.
>
> **Herramientas.** Usaremos $0_K+0_K=0_K$ en el cuerpo, la distributividad respecto de la suma escalar y la cancelación aditiva, ya demostrada sólo a partir de los axiomas de grupo.
>
> Como $0_K+0_K=0_K$,
>
> $$
> 0_Kv=(0_K+0_K)v=0_Kv+0_Kv.
> $$
>
> Si $a=0_Kv$, esta igualdad es $a=a+a$. Al sumar $-a$ a ambos lados y reagrupar, obtenemos $0_V=a$. Por tanto,
>
> $$
> 0_Kv=0_V.
> $$
>
> No se ha supuesto la conclusión: la suma repetida sale de la distributividad y se elimina mediante cancelación.

### Teorema: $\lambda0_V=0_V$

> [!demostracion] TPC resuelto · Aula 18, diapositiva p. 3
> **Objetivo.** Para un escalar $\lambda\in K$ arbitrario, probar que $\lambda0_V=0_V$.
>
> Como $0_V+0_V=0_V$, la distributividad respecto de la suma vectorial da
>
> $$
> \lambda0_V=\lambda(0_V+0_V)=\lambda0_V+\lambda0_V.
> $$
>
> Aplicando la cancelación aditiva ya probada a esta suma repetida, se obtiene
>
> $$
> \lambda0_V=0_V.
> $$
>
> Las dos fórmulas de cero son distintas: aquí el vector es cero y el escalar es cualquiera; en $0_Kv=0_V$, el escalar es cero y el vector es cualquiera.

## Opuestos y reglas de signo

### Teorema: $(-\lambda)v=-(\lambda v)$

> [!demostracion] Demostración · Aula 18, diapositiva p. 4
> **Objetivo.** Probar que cambiar el signo del escalar produce el opuesto de $\lambda v$.
>
> Sean $\lambda\in K$ y $v\in V$. Por distributividad respecto de la suma escalar y la regla $0_Kv=0_V$,
>
> $$
> (\lambda+(-\lambda))v
> =\lambda v+(-\lambda)v
> =0_Kv
> =0_V.
> $$
>
> Así, $(-\lambda)v$ es un opuesto de $\lambda v$. Como el opuesto es único,
>
> $$
> (-\lambda)v=-(\lambda v).
> $$

### Teorema: $\lambda(-v)=-(\lambda v)$

> [!demostracion] Demostración
> **Objetivo.** Probar que cambiar el signo del vector produce el opuesto de $\lambda v$.
>
> Sean $\lambda\in K$ y $v\in V$. Por distributividad respecto de la suma vectorial y la regla $\lambda0_V=0_V$,
>
> $$
> \lambda v+\lambda(-v)
> =\lambda(v+(-v))
> =\lambda0_V
> =0_V.
> $$
>
> Por unicidad del opuesto,
>
> $$
> \lambda(-v)=-(\lambda v).
> $$

Estas dos reglas describen en qué argumento aparece el signo menos: se puede trasladar entre escalar y vector porque ambos lados son el único opuesto de $\lambda v$.

### Corolario: $(-1_K)v=-v$

> [!demostracion] Demostración
> Tomamos $\lambda=1_K$ en la regla anterior. Por el axioma de la unidad, $1_Kv=v$, y por tanto
>
> $$
> (-1_K)v=-(1_Kv)=-v.
> $$
>
> La identidad no es un axioma adicional: se sigue de distributividad, las reglas del cero y la unicidad del opuesto.

### Ejemplo trabajado: trasladar el signo en $\mathbb R^2$

Sean $\lambda=-2$ y $v=(3,-1)$. Entonces

$$
(-\lambda)v=2(3,-1)=(6,-2),\qquad
-(\lambda v)=-((-6,2))=(6,-2).
$$

La igualdad ilustra la regla demostrada: cambiar el signo del escalar produce el opuesto del vector escalado. El cálculo verifica el caso concreto; la prueba anterior garantiza que vale en cualquier espacio vectorial.

## Dos distributividades de diferencia

Las leyes distributivas también permiten separar diferencias. En ambas pruebas el signo menos se entiende como el opuesto ya definido en $K$ o en $V$; las reglas de signos demostradas arriba justifican trasladarlo a través del producto escalar.[^a18-diferencias]

### Teorema: $\alpha(u-v)=\alpha u-\alpha v$

> [!demostracion] TPC resuelto · Aula 18, diapositiva p. 4
> **Objetivo.** Para $u,v\in V$ y $\alpha\in K$, probar la distributividad respecto de una diferencia vectorial.
>
> Por definición, $u-v=u+(-v)$. Aplicamos distributividad respecto de la suma vectorial y la identidad $\alpha(-v)=-(\alpha v)$, demostrada antes:
>
> $$
> \begin{aligned}
> \alpha(u-v)
> &=\alpha(u+(-v))\\
> &=\alpha u+\alpha(-v)\\
> &=\alpha u-(\alpha v)\\
> &=\alpha u-\alpha v.
> \end{aligned}
> $$
>
> Así queda establecida la primera identidad sin añadir un axioma nuevo.

### Teorema: $(\alpha-\beta)u=\alpha u-\beta u$

> [!demostracion] TPC resuelto · Aula 18, diapositiva p. 4
> **Objetivo.** Para $u\in V$ y $\alpha,\beta\in K$, separar la diferencia de escalares.
>
> La diferencia es $\alpha+(-\beta)$ en el cuerpo. Usaremos distributividad respecto de la suma escalar y $(-\beta)u=-(\beta u)$, ya probado:
>
> $$
> \begin{aligned}
> (\alpha-\beta)u
> &=(\alpha+(-\beta))u\\
> &=\alpha u+(-\beta)u\\
> &=\alpha u-(\beta u)\\
> &=\alpha u-\beta u.
> \end{aligned}
> $$
>
> El escalar diferencia se calcula en $K$; la salida de cada producto sigue siendo un vector de $V$.

## Propiedad de producto nulo

### Teorema: $\lambda v=0_V$ implica $\lambda=0_K$ o $v=0_V$

> [!demostracion] Demostración · Aula 18, diapositiva p. 5
> **Objetivo.** Probar, para $\lambda\in K$ y $v\in V$, que $\lambda v=0_V$ equivale a $\lambda=0_K$ o $v=0_V$.
>
> **Primero, la implicación directa.** Si $\lambda=0_K$, entonces $\lambda v=0_V$ por la primera regla de cero. Si $v=0_V$, la segunda regla da la misma conclusión.
>
> **Ahora, supongamos $\lambda v=0_V$.** Si $\lambda=0_K$, ya se cumple la disyunción. Si $\lambda\ne0_K$, como $K$ es un cuerpo existe $\lambda^{-1}$. Aplicando ese escalar y usando compatibilidad,
>
> $$
> v=1_Kv=(\lambda^{-1}\lambda)v
> =\lambda^{-1}(\lambda v)
> =\lambda^{-1}0_V=0_V.
> $$
>
> Concluimos
>
> $$
> \lambda v=0_V\quad\Longleftrightarrow\quad
> \lambda=0_K\ \text{o}\ v=0_V.
> $$
>
> El cuerpo es esencial en este argumento porque todo escalar no nulo tiene inverso. No se cancela el vector: se aplica el inverso del escalar.

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

## Práctica graduada

1. En la demostración de $\lambda0_V=0_V$, identifica la distributividad usada y el resultado que permite concluir que el vector es cero.
2. Reconstruye $\alpha(u-v)=\alpha u-\alpha v$ indicando dónde se usa la regla de signos.
3. Si $\lambda v=0_V$ y $\lambda\ne0_K$, ¿qué propiedad del cuerpo permite concluir $v=0_V$?

## Soluciones razonadas

1. Se usa distributividad respecto de la suma vectorial: $\lambda(0_V+0_V)=\lambda0_V+\lambda0_V$. La cancelación aditiva, probada antes sólo con los axiomas de grupo, elimina el término repetido y da $\lambda0_V=0_V$.
2. Como $u-v=u+(-v)$, distributividad da $\alpha u+\alpha(-v)$. La regla ya probada $\alpha(-v)=-(\alpha v)$ transforma el segundo término y queda $\alpha u-\alpha v$.
3. El cuerpo contiene el inverso $\lambda^{-1}$. Al aplicarlo, $v=1_Kv=(\lambda^{-1}\lambda)v=\lambda^{-1}(\lambda v)=\lambda^{-1}0_V=0_V$. No se cancela el vector.

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
```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
  - distributividad
---
> [!note] Pregunta
> ¿Qué dos identidades permiten separar diferencias en un espacio vectorial?
===
> [!important] Respuesta
> $\alpha(u-v)=\alpha u-\alpha v$ y $(\alpha-\beta)u=\alpha u-\beta u$. Se deducen de las dos distributividades y de las reglas de signo.
```

## 📚 Fuentes

### Material base

- [[Matemáticas/Álgebra lineal/Espacios vectoriales/01 Espacios vectoriales — definición y axiomas|Espacios vectoriales: definición y axiomas]], nota canónica del Vault; en particular, sus axiomas y la distinción entre $0_K$ y $0_V$.
- FCUL, *ALGA 2026/27, Aulas Teóricas*, Aula 18, «Subespaços vetoriais», 28/10/2026, diapositivas pp. 2–5. Los localizadores se indican junto a las demostraciones; no se enlaza directamente el PDF.

### Ampliación académica

[^1]: Jim Hefferon, [*Linear Algebra*](https://hefferon.net/linearalgebra/), texto abierto, capítulos sobre espacios vectoriales y demostraciones de consecuencias de los axiomas.
[^2]: MIT OpenCourseWare, [*Algebra I Student Notes*](https://ocw.mit.edu/courses/res-18-011-algebra-i-student-notes-fall-2021/mit18_701f21_full_lec_new.pdf), apuntes universitarios abiertos sobre cuerpos y estructuras vectoriales.
[^a18-diferencias]: FCUL, Aula 18, 28/10/2026, diapositiva p. 4: identidades distributivas para una diferencia vectorial y una diferencia de escalares.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como tutor universitario de Álgebra Lineal y pide al estudiante reconstruir las demostraciones a partir de los axiomas, sin ofrecer de inmediato la cadena completa. Si usa una propiedad antes de probarla, pregunta qué hipótesis la justifica. Haz que distinga cancelación aditiva de inversión de un escalar y que identifique cuándo se usa que $K$ es un cuerpo.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
