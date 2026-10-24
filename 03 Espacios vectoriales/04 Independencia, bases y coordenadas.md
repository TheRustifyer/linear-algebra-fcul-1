---
schema: nabla-phi-note/v1
title: Independencia, bases y coordenadas
aliases:
  - Independencia lineal
  - Bases, dimensión y cambio de base
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
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/03 Subespacios y espacio generado|Subespacios y espacio generado]]"
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/03 Combinaciones lineales y espacio generado|Combinaciones lineales y espacio generado]]"
desbloquea:
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/08 Suma, intersección y suma directa|Suma, intersección y suma directa]]"
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/06 Coordenadas y cambio de base|Coordenadas y cambio de base]]"
relacionado:
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/04 Dependencia e independencia lineal|Dependencia e independencia lineal]]"
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/05 Bases y dimensión|Bases y dimensión]]"
fsrs_goal: Decide si una lista es linealmente independiente, construye o extrae una base, determina la dimensión, justifica la unicidad de coordenadas y transforma coordenadas con una matriz de cambio de base según una convención explícita de columnas.
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

# Independencia, bases y coordenadas

Un conjunto de vectores puede generar todo un espacio y aun así contener información repetida. Por ejemplo, añadir dos veces el mismo vector no amplía las combinaciones posibles. La independencia lineal distingue listas sin redundancia; una base combina dos requisitos: generar todos los vectores y no tener redundancia.[^2]

Una base convierte cada vector abstracto en una lista ordenada de escalares. Esa lista son sus coordenadas en la base elegida. Las coordenadas cambian al cambiar de base, aunque el vector mismo permanece; una matriz de cambio de base traduce sistemáticamente entre esas descripciones. La red canónica desarrolla por separado [[Matemáticas/Álgebra lineal/Espacios vectoriales/04 Dependencia e independencia lineal|independencia]], [[Matemáticas/Álgebra lineal/Espacios vectoriales/05 Bases y dimensión|bases y dimensión]] y [[Matemáticas/Álgebra lineal/Espacios vectoriales/06 Coordenadas y cambio de base|coordenadas y cambio de base]].

## Dependencia e independencia lineal

Sea $V$ un espacio vectorial sobre $K$, y sean $v_1,\ldots,v_k\in V$. Una combinación lineal igual a cero pregunta si los vectores pueden compensarse entre sí.

### Definición de independencia lineal

> [!definicion] Independencia lineal
> La lista $(v_1,\ldots,v_k)$ es **linealmente independiente** si la única solución de
> $$
> \alpha_1v_1+\cdots+\alpha_kv_k=0_V
> $$
> con $\alpha_i\in K$ es $\alpha_1=\cdots=\alpha_k=0_K$.

Si existe una solución con algún coeficiente no nulo, los vectores son **linealmente dependientes**. En tal caso, se puede despejar un vector con coeficiente no nulo como combinación lineal de los demás; por ello uno de ellos es redundante para generar el mismo espacio.

Una lista independiente no contiene el vector cero y no repite vectores. Recíprocamente, evitar ceros y repeticiones no basta para independencia: en $\mathbb R^2$, $(1,0),(0,1),(1,1)$ son tres vectores distintos y no nulos, pero el tercero es suma de los dos primeros.

### Ejemplos trabajados

**Dependencia.** Para $v_1=(1,2)$ y $v_2=(3,6)$ en $\mathbb R^2$, la igualdad $3v_1-v_2=0$ tiene coeficientes no todos nulos. La lista es dependiente y $v_2=3v_1$.

**Independencia.** Para $e_1=(1,0)$ y $e_2=(0,1)$, la ecuación

$$
\alpha e_1+\beta e_2=(\alpha,\beta)=(0,0)
$$

implica $\alpha=\beta=0$. La lista es independiente. Las coordenadas dejan ver el argumento: cada componente fuerza su coeficiente.

### Decisión mediante una matriz

Coloca los vectores como columnas de $A=[v_1\ \cdots\ v_k]$. Entonces

$$
\alpha_1v_1+\cdots+\alpha_kv_k=0_V
\quad\Longleftrightarrow\quad A\boldsymbol\alpha=0.
$$

La lista es independiente exactamente cuando el sistema homogéneo sólo tiene la solución nula, es decir, cuando cada columna aporta una dirección nueva. Las columnas pivote de una matriz reducida permiten decidirlo; las columnas no pivote se pueden expresar mediante las pivote.[^1]

```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - independencia
---
> [!note] Pregunta
> ¿Qué condición sobre las soluciones de $\alpha_1v_1+\cdots+\alpha_kv_k=0_V$ expresa independencia lineal?
===
> [!important] Respuesta
> La única solución debe ser la trivial: todos los coeficientes $\alpha_i$ son cero.
```

## Generar y ser base

La independencia controla redundancias, mientras que la generación controla cobertura. Una base exige ambas propiedades a la vez.

### Definición de base

> [!definicion] Base
> Una lista ordenada $B=(b_1,\ldots,b_n)$ es una **base** de $V$ si es linealmente independiente y genera $V$; esto es, cada $v\in V$ puede expresarse como combinación lineal de los $b_i$.

El orden se conserva porque determina el orden de las coordenadas y de las columnas de las matrices de cambio de base. Como conjunto, la base no cambia si se reordena; sus listas de coordenadas sí cambian en el mismo orden.

Una lista generadora que es dependiente contiene algún vector que puede eliminarse sin cambiar su generado. Una lista independiente que todavía no genera todo el espacio puede ampliarse incorporando vectores externos a su span. Estas operaciones producen bases cuando el espacio es finito-dimensional.

### Extraer una base de generadores

Considera la lista en $\mathbb R^3$:

$$
v_1=(1,0,1),\quad v_2=(2,0,2),\quad v_3=(0,1,1),\quad v_4=(1,1,2).
$$

Aquí $v_2=2v_1$ y $v_4=v_1+v_3$, de modo que los cuatro vectores generan lo mismo que $v_1,v_3$. Estos dos son independientes: si $a v_1+b v_3=0$, la primera y segunda componentes dan $a=b=0$. La pareja $(v_1,v_3)$ es una base del generado, que es el plano $z=x+y$.

Al organizar los vectores como columnas y reducir la matriz, se conservan como base las columnas pivote **de la matriz original**. Las columnas de la matriz reducida suelen tener otro significado y no se sustituyen automáticamente por las pivote originales.

### Completar una lista independiente

En $\mathbb R^3$, el vector $u_1=(1,1,0)$ es independiente por sí solo. Añade $u_2=(0,1,1)$ y $u_3=(1,0,0)$. La matriz con esas columnas tiene determinante no nulo, así que la lista de tres vectores es independiente y, al contener tres vectores independientes en $\mathbb R^3$, es una base.

En general, se añaden vectores que no estén en el subespacio generado hasta cubrir $V$. Si $V$ ya está generado por una lista finita, el proceso termina en un número finito de pasos.

## Dimensión

### Definición de dimensión

> [!definicion] Dimensión
> Si $V$ tiene una base finita, su **dimensión**, $\dim V$, es el número de vectores de cualquier base de $V$.

Que la cantidad no dependa de la base es un teorema, no parte de la definición sin justificar. En un espacio de dimensión $n$, cualquier lista independiente tiene como máximo $n$ elementos, y cualquier lista generadora tiene al menos $n$. Por tanto toda base tiene exactamente $n$ vectores.

Este principio explica por qué en $\mathbb R^n$ una lista de $n$ vectores es base si y sólo si es independiente, y también si y sólo si genera $\mathbb R^n$. La dimensión cero corresponde al espacio trivial $\{0_V\}$.

### Coordenadas y unicidad

Sea $B=(b_1,\ldots,b_n)$ una base. La generación asegura que para todo $v\in V$ existen escalares $\alpha_i$ tales que $v=\sum_i\alpha_i b_i$. La independencia asegura que esta representación es única.

**Demostración de unicidad.** Supongamos $v=\sum_i\alpha_i b_i=\sum_i\beta_i b_i$. Restando ambas expresiones,

$$
\sum_{i=1}^n(\alpha_i-\beta_i)b_i=0_V.
$$

Por independencia, cada coeficiente es cero: $\alpha_i-\beta_i=0_K$, luego $\alpha_i=\beta_i$ para todo $i$. La existencia y unicidad permiten definir las coordenadas de $v$ respecto de $B$:

$$
[v]_B=\begin{pmatrix}\alpha_1\\\vdots\\\alpha_n\end{pmatrix}.
$$

El vector $v$ no es su columna de coordenadas: $v$ es el objeto; $[v]_B$ depende de la base que se eligió. En la base canónica de $\mathbb R^2$, $(3,1)$ tiene columna $(3,1)^T$; en otra base, sus entradas serán distintas aunque se reconstruya el mismo vector.

## Matrices de cambio de base

Para fijar la convención, si $B=(b_1,\ldots,b_n)$ y $C=(c_1,\ldots,c_n)$ son bases ordenadas, definimos $P_{C\leftarrow B}$ como la matriz que transforma coordenadas **de $B$ a $C$**:

$$
[v]_C=P_{C\leftarrow B}[v]_B.
$$

### Columnas: vectores de la base de partida expresados en la de llegada

La columna $j$ de $P_{C\leftarrow B}$ es $[b_j]_C$. En efecto, aplicamos la transformación a $v=b_j$: sus coordenadas en $B$ son el vector canónico $e_j$, por lo que $[b_j]_C=P_{C\leftarrow B}e_j$, que selecciona la columna $j$.

### Ejemplo trabajado: coordenadas estándar a una base oblicua

Sea $E=((1,0),(0,1))$ la base estándar y $C=((1,1),(1,-1))$. Para un vector $(x,y)$,

$$
(x,y)=a(1,1)+b(1,-1)=(a+b,a-b),
$$

de donde $a=(x+y)/2$ y $b=(x-y)/2$. Las columnas de $P_{C\leftarrow E}$ son las coordenadas en $C$ de los vectores de $E$:

$$
P_{C\leftarrow E}=\begin{pmatrix}\frac12&\frac12\\[2pt]\frac12&-\frac12\end{pmatrix}.
$$

Así, para $v=(3,1)$,

$$
[v]_C=P_{C\leftarrow E}\begin{pmatrix}3\\1\end{pmatrix}
=\begin{pmatrix}2\\1\end{pmatrix},
$$

y se comprueba que $2(1,1)+(1,-1)=(3,1)$. La matriz actúa sobre columnas de coordenadas y sus columnas son imágenes de vectores de la base de partida.

### Invertir el cambio y cambiar dos veces

La transformación inversa cambia coordenadas de $C$ a $B$, de modo que $P_{B\leftarrow C}=(P_{C\leftarrow B})^{-1}$. Para una base intermedia $D$, la composición satisface

$$
P_{C\leftarrow B}=P_{C\leftarrow D}P_{D\leftarrow B}.
$$

El orden se lee de derecha a izquierda: primero se transforma de $B$ a $D$, después de $D$ a $C$. El subíndice de la derecha indica la base de partida; el de la izquierda, la de llegada.

```anki
deck: Física::Álgebra Lineal::Espacios vectoriales
tags:
  - matematicas
  - algebra-lineal
  - cambio-de-base
---
> [!note] Pregunta
> En $[v]_C=P_{C\leftarrow B}[v]_B$, ¿qué representa la columna $j$ de $P_{C\leftarrow B}$?
===
> [!important] Respuesta
> Las coordenadas en la base de llegada $C$ del vector $b_j$, el $j$-ésimo vector de la base de partida $B$.
```

## Errores frecuentes y continuidad

La ecuación $\sum_i\alpha_i v_i=0$ sólo demuestra dependencia si existe una solución **no trivial**. Todo conjunto tiene la solución trivial con todos los coeficientes cero.

No confundas «generar» con «ser base»: generar permite redundancia; independencia impide redundancia pero no garantiza cubrir $V$. Ambos requisitos son necesarios. Tampoco confundas el vector con sus coordenadas, ni cambies la convención de columnas a mitad de un cálculo.

La siguiente unidad estudia espacios fila y columna, suma e intersección de subespacios y suma directa, que combinan las ideas de generado, independencia y dimensión.

## 📚 Fuentes

### Material base aportado

- [[Matemáticas/Álgebra lineal/Espacios vectoriales/04 Dependencia e independencia lineal|Dependencia e independencia lineal]], [[Matemáticas/Álgebra lineal/Espacios vectoriales/05 Bases y dimensión|Bases y dimensión]] y [[Matemáticas/Álgebra lineal/Espacios vectoriales/06 Coordenadas y cambio de base|Coordenadas y cambio de base]], notas canónicas para comprobar las definiciones, pruebas y convención de cambio.
- Índice curricular de Álgebra Lineal y Geometría Analítica para Física, FCUL: independencia, bases, dimensión, coordenadas y cambio de base.

### Ampliación académica

[^1]: Jim Hefferon, [*Linear Algebra*](https://hefferon.net/linearalgebra/), texto abierto de primer curso universitario; desarrollo de independencia, bases y coordenadas.
[^2]: Gilbert Strang, [*Independence, Basis and Dimension*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/ax-b-and-the-four-subspaces/independence-basis-and-dimension/), MIT OpenCourseWare. Conecta independencia, columnas pivote, bases y dimensión.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como tutor universitario de Álgebra Lineal. Pide al estudiante justificar si una lista es independiente, explicar por qué una base da representación única y reconstruir cómo se leen las columnas de una matriz de cambio de base. Fija siempre qué base es la de partida y cuál la de llegada; ofrece pistas graduadas sin sustituir el razonamiento.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
