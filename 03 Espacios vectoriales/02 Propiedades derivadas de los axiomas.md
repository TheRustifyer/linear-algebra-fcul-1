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

El [[Matemáticas/Estructuras algebraicas/Operaciones algebraicas#Inverso|axioma del opuesto]] permite deshacer una suma. Para resolver $x+z=y+z$, sumamos $-z$ a ambos miembros y reagrupamos hasta obtener $x=y$. Esa [[Matemáticas/Estructuras algebraicas/Operaciones algebraicas#6. Cancelación|cancelación]] bastará para demostrar las reglas del cero; después podremos justificar las reglas de signos y despejar un escalar no nulo.[^aditivos]

Trabajamos en un [[Matemáticas/Álgebra lineal/Espacios vectoriales/01 Espacios vectoriales — definición y axiomas|espacio vectorial]] $V$ sobre un [[Matemáticas/Estructuras algebraicas/Cuerpos|cuerpo]] $K$. Distinguimos $0_K$, el escalar cero, de $0_V$, el vector cero.

## Axiomas, definiciones y resultados

### Axioma

> [!definicion] Axioma
> Un **axioma** es una condición que se asume al definir la estructura que se estudia.

Aquí asumimos, por ejemplo, $1_Kv=v$; no tenemos que deducirlo de los otros axiomas. Para comprobar que unas operaciones concretas definen un espacio vectorial sí debemos verificar que satisfacen esa condición.

```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
---
> [!note] Pregunta
> ¿Se demuestra un axioma dentro de la estructura que define?
===
> [!important] Respuesta
> Se asume como condición de esa estructura. Al proponer un ejemplo concreto, hay que verificar que sus operaciones lo cumplen.
```

### Definición

> [!definicion] Definición matemática
> Una **definición** fija el significado de un término o de una notación.

Así, $u-v=u+(-v)$ define la resta a partir de suma y opuesto.

```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
---
> [!note] Pregunta
> ¿Qué función cumple una definición matemática?
===
> [!important] Respuesta
> Fija el significado de un término o una notación; por ejemplo, $u-v=u+(-v)$ define la resta.
```

### Teorema

> [!definicion] Teorema
> Un **teorema** es una afirmación que se deduce de las hipótesis, definiciones y resultados disponibles mediante una demostración.

Probar $0_Kv=0_V$ exige usar los axiomas: no podemos utilizar esa misma igualdad como premisa de su prueba. El orden que seguiremos es

$$
\text{axiomas aditivos}\ \Longrightarrow\ \text{cancelación}
\ \Longrightarrow\ \text{reglas del cero}\ \Longrightarrow\ \text{signos y producto nulo}.
$$

```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
---
> [!note] Pregunta
> ¿Qué distingue un teorema de un axioma?
===
> [!important] Respuesta
> El teorema se demuestra a partir de hipótesis y resultados disponibles; el axioma se asume al definir la estructura.
```


![Dependencias de las pruebas: axiomas aditivos, cancelación, reglas del cero, signos y producto nulo.](assets/02-dependencias-de-propiedades.svg)

*La cancelación se obtiene sin emplear ninguna regla escalar del cero.* [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/assets/02-dependencias-de-propiedades.excalidraw|Dibujo editable]].

## Unicidad y cancelación

### Unicidad del vector cero

#### Propiedad

> [!teorema] Unicidad del vector cero
> Si $e,e'\in V$ son neutros aditivos, entonces $e=e'$.[^aditivos]
>

#### Demostración

> [!demostracion] Demostración
> Como $e'$ es neutro, $e+e'=e$. Como $e$ es neutro, esa misma suma vale $e'$. Así,
>
> $$
> \boxed{e=e+e'=e'.}\qquad\blacksquare
> $$


```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
---
> [!note] Pregunta
> ¿Cómo se prueba que el vector cero es único?
===
> [!important] Respuesta
> Si $e$ y $e'$ son neutros, la suma $e+e'$ vale $e$ por la neutralidad de $e'$ y $e'$ por la de $e$.
```

### Unicidad del opuesto

#### Propiedad

> [!teorema] Unicidad del opuesto
> Cada $v\in V$ tiene un único opuesto aditivo.[^aditivos]
>

#### Demostración

> [!demostracion] Demostración
> Sean $u,w$ dos opuestos de $v$, de modo que $u+v=0_V$ y $v+w=0_V$. Sustituimos el cero por $v+w$ y aplicamos asociatividad:
>
> $$
> u=u+0_V=u+(v+w)=(u+v)+w=0_V+w=w.
> $$
>
> Por tanto, los dos candidatos coinciden. Denotamos este único vector por $-v$. $\blacksquare$


```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
---
> [!note] Pregunta
> ¿Qué permite probar que dos vectores son el mismo opuesto de $v$?
===
> [!important] Respuesta
> Si ambos sumados a $v$ dan $0_V$, la unicidad del opuesto obliga a que coincidan.
```

### Cancelación aditiva

#### Propiedad

> [!teorema] Cancelación aditiva
> Para $x,y,z\in V$,[^cancelacion]
>
> $$
> \boxed{x+z=y+z\ \Longrightarrow\ x=y.}
> $$

#### Demostración

> [!demostracion] Demostración
> Sumamos $-z$ a ambos miembros. Por asociatividad,
>
> $$
> x+(z+(-z))=y+(z+(-z)).
> $$
>
> El paréntesis es $0_V$ por la definición de opuesto. La neutralidad del cero da $x=y$. Sólo se han usado axiomas aditivos. $\blacksquare$


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

### Multiplicar el vector cero

#### Propiedad

> [!teorema] Multiplicar el vector cero
> Para $\lambda\in K$,[^cero-vector]
>
> $$
> \boxed{\lambda0_V=0_V.}
> $$

#### Demostración

> [!demostracion] Demostración
> Por neutralidad, $0_V+0_V=0_V$. Al multiplicar por $\lambda$ y distribuir sobre la suma de vectores,
>
> $$
> \lambda0_V=\lambda(0_V+0_V)=\lambda0_V+\lambda0_V.
> $$
>
> Llamemos $a=\lambda0_V$. Hemos obtenido $a=a+a$, es decir, $0_V+a=a+a$. Cancelando el sumando $a$ resulta $0_V=a$. Por tanto,
>
> $$
> \boxed{\lambda0_V=0_V.}\qquad\blacksquare
> $$


```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
---
> [!note] Pregunta
> ¿Qué resultado permite deducir $\lambda0_V=0_V$ de $\lambda0_V=\lambda0_V+\lambda0_V$?
===
> [!important] Respuesta
> La cancelación aditiva: si $a=\lambda0_V$, de $0_V+a=a+a$ se obtiene $0_V=a$.
```

### Multiplicar por el escalar cero

#### Propiedad

> [!teorema] Multiplicar por el escalar cero
> Para $v\in V$,[^cero-escalar]
>
> $$
> \boxed{0_Kv=0_V.}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> En el cuerpo, $0_K+0_K=0_K$. Distribuyendo ahora sobre la suma de **escalares**,
>
> $$
> 0_Kv=(0_K+0_K)v=0_Kv+0_Kv.
> $$
>
> Con $a=0_Kv$, la igualdad vuelve a ser $0_V+a=a+a$. La [[#Cancelación aditiva|cancelación]] da $a=0_V$ y concluye
>
> $$
> \boxed{0_Kv=0_V.}\qquad\blacksquare
> $$


```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
---
> [!note] Pregunta
> ¿En qué se distinguen $0_Kv=0_V$ y $\lambda0_V=0_V$?
===
> [!important] Respuesta
> En la primera, el escalar es cero y el vector es arbitrario; en la segunda, el vector es cero y el escalar es arbitrario. Ambas se deducen por distributividad y cancelación.
```

## Opuestos y reglas de signo

### Cambiar el signo del escalar

#### Propiedad

> [!teorema] Cambiar el signo del escalar
> Para $\lambda\in K$ y $v\in V$,[^signos]
>
> $$
> \boxed{(-\lambda)v=-(\lambda v).}
> $$

#### Demostración

> [!demostracion] Demostración
> Para identificar el opuesto de $\lambda v$, basta encontrar un vector que sumado a él dé cero. La distributividad sobre escalares y la regla $0_Kv=0_V$ dan
>
> $$
> \lambda v+(-\lambda)v=(\lambda+(-\lambda))v=0_Kv=0_V.
> $$
>
> Así, $(-\lambda)v$ es el opuesto de $\lambda v$. Por su unicidad,
>
> $$
> \boxed{(-\lambda)v=-(\lambda v).}\qquad\blacksquare
> $$


```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - reglas-de-signos
---
> [!note] Pregunta
> ¿Qué relación hay entre cambiar el signo de un escalar y tomar el opuesto del vector resultante?
===
> [!important] Respuesta
> $(-\lambda)v=-(\lambda v)$, pues $\lambda v+(-\lambda)v=0_V$.
```

### Cambiar el signo del vector

#### Propiedad

> [!teorema] Cambiar el signo del vector
> Para $\lambda\in K$ y $v\in V$,[^signos]
>
> $$
> \boxed{\lambda(-v)=-(\lambda v).}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Distribuimos sobre la suma de vectores $v+(-v)=0_V$:
>
> $$
> \lambda v+\lambda(-v)=\lambda(v+(-v))=\lambda0_V=0_V.
> $$
>
> Por tanto, $\lambda(-v)$ también es el opuesto de $\lambda v$. Su unicidad concluye la igualdad. $\blacksquare$


```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - reglas-de-signos
---
> [!note] Pregunta
> ¿Por qué $\lambda(-v)=-(\lambda v)$?
===
> [!important] Respuesta
> Porque $\lambda v+\lambda(-v)=\lambda(v+(-v))=\lambda0_V=0_V$; ambos son opuestos de $\lambda v$.
```

### Multiplicar por menos uno

#### Propiedad

> [!teorema] Multiplicar por menos uno
> Para $v\in V$,[^signos]
>
> $$
> \boxed{(-1_K)v=-v.}
> $$

#### Demostración

> [!demostracion] Demostración
> Aplicamos la regla de cambio de signo del escalar con $\lambda=1_K$. Por el axioma de la unidad,
>
> $$
> (-1_K)v=-(1_Kv)=-v.\qquad\blacksquare
> $$


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

### Ejemplo — trasladar el signo en $\mathbb R^2$

Con $\lambda=-2$ y $v=(3,-1)$, el signo de $\lambda$ cambia al tomar $-\lambda=2$:

$$
(-\lambda)v=2(3,-1)=(6,-2).
$$

Por otro lado, $\lambda v=(-6,2)$ y su opuesto es $(6,-2)$. Los dos cálculos dan el mismo vector, como asegura la propiedad para cualquier $V$.

## Distributividad sobre diferencias
### Diferencia de vectores

#### Propiedad

> [!teorema] Diferencia de vectores
> Para $u,v\in V$ y $\alpha\in K$,[^diferencias]
>
> $$
> \boxed{\alpha(u-v)=\alpha u-\alpha v.}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> La resta significa suma con el opuesto. Distribuimos sobre esa suma y aplicamos $\alpha(-v)=-(\alpha v)$:
>
> $$
> \begin{aligned}
> \alpha(u-v)&=\alpha(u+(-v))\\
> &=\alpha u+\alpha(-v)\\
> &=\alpha u-(\alpha v).
> \end{aligned}
> $$
>
> El último miembro es, por definición, $\alpha u-\alpha v$. $\blacksquare$


```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - distributividad
---
> [!note] Pregunta
> ¿Cómo se distribuye un escalar sobre una diferencia de vectores?
===
> [!important] Respuesta
> $\alpha(u-v)=\alpha u-\alpha v$, para $\alpha\in K$ y $u,v\in V$.
```

### Diferencia de escalares

#### Propiedad

> [!teorema] Diferencia de escalares
> Para $\alpha,\beta\in K$ y $u\in V$,[^diferencias]
>
> $$
> \boxed{(\alpha-\beta)u=\alpha u-\beta u.}
> $$

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> En el cuerpo, $\alpha-\beta=\alpha+(-\beta)$. La distributividad sobre escalares y la regla de signos dan
>
> $$
> \begin{aligned}
> (\alpha-\beta)u&=(\alpha+(-\beta))u\\
> &=\alpha u+(-\beta)u\\
> &=\alpha u-(\beta u)=\alpha u-\beta u.
> \end{aligned}
> $$
>
> Aquí se descompone una diferencia calculada en $K$; en la propiedad anterior se descomponía una diferencia en $V$. $\blacksquare$


```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - distributividad
---
> [!note] Pregunta
> ¿Cómo se distribuye una diferencia de escalares al multiplicar un vector?
===
> [!important] Respuesta
> $(\alpha-\beta)u=\alpha u-\beta u$, para $\alpha,\beta\in K$ y $u\in V$.
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

## Producto nulo

### Condición de producto nulo

#### Propiedad

> [!teorema] Condición de producto nulo
> Para $\lambda\in K$ y $v\in V$,[^producto-nulo]
>
> $$
> \boxed{\lambda v=0_V\iff\lambda=0_K\ \text{o}\ v=0_V.}
> $$

#### Demostración

> [!demostracion] Demostración
> Si $\lambda=0_K$ o $v=0_V$, las [[#El escalar cero y el vector cero|reglas del cero]] ya demostradas dan $\lambda v=0_V$.
>
> Para la otra implicación, supongamos $\lambda v=0_V$. Si $\lambda=0_K$, se cumple la conclusión. Si $\lambda\ne0_K$, existe $\lambda^{-1}\in K$. Multiplicamos por ese escalar y usamos la [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/01 Espacios vectoriales y axiomas#E1. Compatibilidad con el producto de escalares|compatibilidad E1]]:
>
> $$
> \lambda^{-1}(\lambda v)=(\lambda^{-1}\lambda)v=1_Kv=v.
> $$
>
> El mismo miembro, usando la hipótesis y la regla del vector cero, vale
>
> $$
> \lambda^{-1}(\lambda v)=\lambda^{-1}0_V=0_V.
> $$
>
> Por tanto $v=0_V$. Los dos casos cubren todos los escalares y concluyen la equivalencia. $\blacksquare$


```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
---
> [!note] Pregunta
> ¿Cuándo es cero el producto de un escalar por un vector?
===
> [!important] Respuesta
> En un espacio vectorial sobre un cuerpo, $\lambda v=0_V$ si y sólo si $\lambda=0_K$ o $v=0_V$.
```

> [!warning] Condiciones de validez: producto nulo
> De $\lambda v=0_V$ no se obtiene $\lambda=0_K$ sin saber que $v\ne0_V$. La prueba utiliza el inverso del **escalar no nulo**; no existe una división general por vectores.

Las pruebas han utilizado las operaciones de $V$, sin recurrir a componentes. Por eso se aplican también cuando $v$ es una matriz, un polinomio o una función.

```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
---
> [!note] Pregunta
> ¿Qué se puede concluir de $\lambda v=0_V$ si además $v\ne0_V$?
===
> [!important] Respuesta
> Que $\lambda=0_K$, por la condición de producto nulo. No se divide por el vector.
```

## Práctica graduada

1. En la demostración de $\lambda0_V=0_V$, identifica la distributividad usada y el resultado que permite concluir que el vector es cero.
2. Reconstruye $\alpha(u-v)=\alpha u-\alpha v$ indicando dónde se usa la regla de signos.
3. Si $\lambda v=0_V$ y $\lambda\ne0_K$, ¿qué propiedad del cuerpo permite concluir $v=0_V$?

## Soluciones razonadas

1. Se usa distributividad respecto de la suma vectorial: $\lambda(0_V+0_V)=\lambda0_V+\lambda0_V$. La cancelación aditiva, probada antes sólo con los axiomas de grupo, elimina el término repetido y da $\lambda0_V=0_V$.
2. Como $u-v=u+(-v)$, distributividad da $\alpha u+\alpha(-v)$. La regla ya probada $\alpha(-v)=-(\alpha v)$ transforma el segundo término y queda $\alpha u-\alpha v$.
3. El cuerpo contiene el inverso $\lambda^{-1}$. Al aplicarlo, $v=1_Kv=(\lambda^{-1}\lambda)v=\lambda^{-1}(\lambda v)=\lambda^{-1}0_V=0_V$. No se cancela el vector.

## 📚 Fuentes

### Material base

[^aditivos]: FCUL, *ALGA 2026/27*, Aula 17, 26/10/2026, diapositivas 9 y 11. Pruebas de unicidad del neutro y del opuesto. Adaptación a la suma vectorial; coinciden con los argumentos de IST, pp. 37–38 y solución del ejercicio 3.51.8(iv), p. 228.
[^cero-vector]: Aula 18, 28/10/2026, diapositivas 2–3, propiedad 1: prueba incluida en las slides, adaptada usando la cancelación previamente demostrada; también publicada en IST, solución del ejercicio 3.51.8(iii), p. 228.
[^cero-escalar]: Misma fuente, diapositiva 3, propiedad 2: TPC resuelto. Adaptación de IST, solución del ejercicio 3.51.8(ii), p. 228; mismo argumento en Nicholson, teorema 6.1.3(1).
[^signos]: Misma fuente, diapositiva 4, propiedad 3. La primera igualdad se demuestra en la fuente; la igualdad con $\lambda(-v)$ se deja como TPC. Aquí se desarrolla por distributividad y unicidad del opuesto.
[^diferencias]: Misma fuente, diapositiva 4, propiedades 4–5: ambos TPC resueltos mediante definición de resta, distributividad y reglas de signos.
[^producto-nulo]: Misma fuente, diapositiva 5: prueba incluida. Adaptación del argumento por inverso escalar, también publicado por Nicholson, teorema 6.1.3(3).

### Contraste y procedencia de los desarrollos

[^cancelacion]: W. Keith Nicholson, [*Linear Algebra with Applications*, §6.1](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_(Nicholson)/06:_Vector_Spaces/6.01:_Examples_and_Basic_Properties), teorema 6.1.1 y demostración completa de cancelación. Los teoremas 6.1.3(1), (3) y (4) contienen pruebas de cero escalar, producto nulo y menos uno. Algunas otras identidades se proponen allí como ejercicio: los desarrollos de signos y diferencias de esta nota completan esos pasos desde los axiomas y no se presentan como transcripciones del libro.

Instituto Superior Técnico, ULisboa, [*Álgebra Linear*](https://fenix.tecnico.ulisboa.pt/downloadFile/563568428979297/ApontamentosInteg.pdf), pp. 37–38: definición 3.1 y demostraciones de unicidad del neutro y del opuesto. Se adapta la notación y se separan las razones de las igualdades.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como tutor universitario en español. Reconstruye una prueba cada vez y espera cada respuesta. El orden disponible es: unicidad del cero y del opuesto; cancelación $x+z=y+z\Rightarrow x=y$; $\lambda0_V=0_V$; $0_Kv=0_V$; $(-\lambda)v=-(\lambda v)=\lambda(-v)$; distributividades sobre diferencias; $\lambda v=0_V\iff\lambda=0_K$ o $v=0_V$. Ante una cadena, pregunta qué definición o axioma justifica el paso. Para producto nulo separa $\lambda=0_K$ de $\lambda\ne0_K$ y pide introducir $\lambda^{-1}$ sólo en el segundo caso. Usa las pruebas y la práctica existente, sin generar ejercicios nuevos. Ofrece una pista antes de mostrar la transición que falte.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
