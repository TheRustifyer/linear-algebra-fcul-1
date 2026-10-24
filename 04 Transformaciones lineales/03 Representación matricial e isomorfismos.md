---
schema: nabla-phi-note/v1
title: Representación matricial e isomorfismos
aliases:
  - Matriz de una transformación lineal
  - Isomorfismos y cambio de base
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
tipo:
  - lección
  - procedimiento
  - teorema
nivel: universitario-introductorio
estado: borrador
capa: curricular
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/04 Transformaciones lineales/02 Transformaciones, núcleo e imagen|Transformaciones, núcleo e imagen]]"
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/04 Independencia, bases y coordenadas|Independencia, bases y coordenadas]]"
desbloquea:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/04 Transformaciones lineales/04 Transformaciones geométricas y composición|Transformaciones geométricas y composición]]"
relacionado:
  - "[[Matemáticas/Álgebra lineal/Aplicaciones lineales|Aplicaciones lineales]]"
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/10 Isomorfismos|Isomorfismos]]"
fsrs_goal: Construye la matriz de una transformación respecto de bases dadas, decide inyectividad, sobreyectividad e isomorfía y deriva correctamente la matriz transformada al cambiar las bases del dominio y del codominio.
tags:
  - matematicas
  - algebra-lineal
  - representacion-matricial
  - isomorfismos
  - cambio-de-base
  - fcul
---
```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```
# Representación matricial e isomorfismos
Una transformación lineal es un objeto independiente de las coordenadas. Al elegir una base en el dominio y otra en el codominio, su acción queda codificada por una matriz. Cambiar de bases modifica las entradas de esa matriz, pero no altera propiedades como el rango, la inyectividad o la sobreyectividad.[^1]

Sean $V$ y $W$ espacios vectoriales de dimensiones finitas sobre un mismo cuerpo $K$.

## Matriz de una transformación respecto de bases
### Definición
> [!definicion] Matriz de una transformación lineal
> Sean $B=(v_1,\ldots,v_n)$ una base de $V$, $C=(w_1,\ldots,w_m)$ una base de $W$ y $T:V\to W$ lineal. La matriz de $T$ respecto de $B$ y $C$ es
> $$
> [T]_{C\leftarrow B}
> =\begin{pmatrix}[T(v_1)]_C&\cdots&[T(v_n)]_C\end{pmatrix}\in M_{m\times n}(K).
> $$
> La columna $j$ contiene las coordenadas en $C$ de la imagen del vector $v_j$.[^1]

La flecha recuerda que la matriz recibe coordenadas en $B$ y devuelve coordenadas en $C$:
$$
[T(v)]_C=[T]_{C\leftarrow B}[v]_B.
$$
El tamaño $m\times n$ queda determinado por las dimensiones del codominio y del dominio, respectivamente.

### Procedimiento de construcción
Para construir $[T]_{C\leftarrow B}$ se siguen tres pasos:

1. calcular $T(v_j)$ para cada vector de la base $B$;
2. expresar cada resultado como combinación de los vectores de $C$;
3. colocar esos vectores de coordenadas como columnas, en el orden de $B$.

El orden forma parte de la base: permutar sus vectores permuta filas o columnas de la representación.

### Ejemplo trabajado
Sea $T:P_2(\mathbb R)\to\mathbb R^2$ definida por
$$
T(p)=(p(0),p(1)).
$$
Con $B=(1,x,x^2)$ y la base canónica $E$ de $\mathbb R^2$,
$$
T(1)=(1,1),\qquad T(x)=(0,1),\qquad T(x^2)=(0,1).
$$
Por tanto,
$$
[T]_{E\leftarrow B}
=\begin{pmatrix}1&0&0\\1&1&1\end{pmatrix}.
$$
Si $p(x)=a+bx+cx^2$, la multiplicación matricial produce $(a,a+b+c)$, que coincide con $(p(0),p(1))$.

```anki
deck: Física::Álgebra Lineal::Transformaciones lineales
tags:
  - matematicas
  - algebra-lineal
  - matriz-transformacion
---
> [!note] Pregunta
> ¿Qué contiene la columna $j$ de $[T]_{C\leftarrow B}$?
===
> [!important] Respuesta
> El vector de coordenadas $[T(v_j)]_C$, donde $v_j$ es el $j$-ésimo vector de la base $B$ del dominio.
```

## Criterios matriciales de inyectividad y sobreyectividad
Sea $A=[T]_{C\leftarrow B}\in M_{m\times n}(K)$. La igualdad
$$
[T(v)]_C=A[v]_B
$$
traduce el núcleo en el sistema homogéneo $Ax=0$ y la imagen en el espacio columna de $A$.

### Inyectividad
> [!teorema] Criterios de inyectividad
> $T$ es inyectiva si y sólo si $\ker T=\{0_V\}$; equivalentemente, $Ax=0$ sólo tiene la solución trivial, las columnas de $A$ son independientes y $\operatorname{rank}A=n$.[^2]

Por rango–nulidad, una transformación inyectiva $V\to W$ en dimensión finita exige $n\leq m$.

### Sobreyectividad
> [!teorema] Criterios de sobreyectividad
> $T$ es sobreyectiva si y sólo si $\operatorname{Im}T=W$; equivalentemente, las columnas de $A$ generan $K^m$ y $\operatorname{rank}A=m$.[^2]

Una transformación sobreyectiva $V\to W$ exige $n\geq m$. Si $n=m$, inyectividad, sobreyectividad y rango completo son condiciones equivalentes.

## Isomorfismos
### Definición
> [!definicion] Isomorfismo
> Un **isomorfismo** $T:V\to W$ es una transformación lineal biyectiva. Si existe, se escribe $V\cong W$; ambos espacios poseen la misma estructura lineal aunque sus elementos tengan naturalezas distintas.[^3]

En dimensión finita,
$$
V\cong W\quad\Longleftrightarrow\quad \dim V=\dim W.
$$
Si las dimensiones coinciden, basta enviar una base de $V$ a una base de $W$ y extender linealmente. La implicación contraria se obtiene porque un isomorfismo lleva bases a bases.

### Ejemplo de isomorfismo
La aplicación de coordenadas
$$
\Phi:P_2(\mathbb R)\to\mathbb R^3,
\qquad
\Phi(a+bx+cx^2)=(a,b,c)
$$
es lineal y biyectiva. El polinomio y su terna de coordenadas no son el mismo objeto, pero toda suma y todo producto por escalares se corresponden exactamente.

### La inversa es lineal
Sea $T:V\to W$ un isomorfismo. Para $y_1=T(x_1)$, $y_2=T(x_2)$ y escalares $a,b$,
$$
ay_1+by_2=T(ax_1+bx_2).
$$
Al aplicar $T^{-1}$,
$$
T^{-1}(ay_1+by_2)=aT^{-1}(y_1)+bT^{-1}(y_2).
$$
Así, la inversa de un isomorfismo también es lineal. Respecto de bases compatibles, su matriz es la inversa de la matriz de $T$.

> [!teorema] Teorema de la matriz invertible para transformaciones
> Si $\dim V=\dim W=n$, las siguientes condiciones son equivalentes: $T$ es inyectiva; $T$ es sobreyectiva; $T$ es un isomorfismo; $[T]_{C\leftarrow B}$ es invertible; su rango es $n$.[^2]

## Matrices de cambio de base
### Definición y dirección
> [!definicion] Matriz de cambio de coordenadas
> Para dos bases $B$ y $B'$ de $V$, la matriz
> $$
> P=[\operatorname{id}_V]_{B\leftarrow B'}
> $$
> convierte coordenadas en $B'$ en coordenadas en $B$:
> $$
> [v]_B=P[v]_{B'}.
> $$
> Sus columnas son los vectores de $B'$ expresados en la base $B$.[^1]

La inversa realiza el cambio opuesto: $[v]_{B'}=P^{-1}[v]_B$.

### Cambio simultáneo en dominio y codominio
Sea
$$
A=[T]_{C\leftarrow B},
\quad
P=[\operatorname{id}_V]_{B\leftarrow B'},
\quad
Q=[\operatorname{id}_W]_{C\leftarrow C'}.
$$
Como $[v]_B=P[v]_{B'}$ y $[T(v)]_{C'}=Q^{-1}[T(v)]_C$, se obtiene
$$
[T]_{C'\leftarrow B'}=Q^{-1}AP.
$$
La posición de cada factor se deduce de la dirección de las coordenadas; no es una regla de productos que deba memorizarse aislada.

### Semejanza para un operador
Si $T:V\to V$ y se usa la misma base en dominio y codominio, entonces
$$
[T]_{B'}=P^{-1}[T]_BP.
$$
Las dos matrices son **semejantes**: representan el mismo operador en bases diferentes.[^1]

### Ejemplo trabajado de semejanza
Considérese la rotación $T(x,y)=(-y,x)$. En la base canónica $E$,
$$
[T]_E=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.
$$
Para $B'=((1,1),(1,-1))$,
$$
P=[\operatorname{id}]_{E\leftarrow B'}
=\begin{pmatrix}1&1\\1&-1\end{pmatrix}.
$$
Como $T(1,1)=-(1,-1)$ y $T(1,-1)=(1,1)$,
$$
[T]_{B'}=P^{-1}[T]_EP
=\begin{pmatrix}0&1\\-1&0\end{pmatrix}.
$$
Las entradas cambian, pero ambas matrices describen la misma rotación.

## Propiedades intrínsecas y datos de coordenadas
La fórmula concreta de las coordenadas, las columnas y las entradas dependen de las bases. También depende de ellas qué vectores aparecen como columnas pivote durante un cálculo particular.

Permanecen invariantes el núcleo y la imagen como subespacios abstractos, sus dimensiones, el rango, la nulidad, la inyectividad, la sobreyectividad y la invertibilidad. Para un operador, matrices semejantes poseen además el mismo determinante y la misma traza; más adelante esta invariancia permitirá estudiar valores propios sin depender de una base.[^1]

> [!advertencia] Coordenadas y vectores
> $v$ es un elemento de $V$; $[v]_B$ es una columna de escalares que depende de $B$. Del mismo modo, $T$ es la transformación y $[T]_{C\leftarrow B}$ es una de sus representaciones. Igualar cada objeto con sus coordenadas oculta qué cambia al sustituir una base.

## Condiciones de validez y casos límite
Las equivalencias entre inyectividad, sobreyectividad e invertibilidad requieren que dominio y codominio tengan la misma dimensión finita. Para una matriz rectangular, rango completo significa rango igual a la menor dimensión, pero sólo garantiza inyectividad cuando todas las columnas son pivote y sobreyectividad cuando todas las filas contienen pivote.

Las fórmulas de cambio de base exigen bases ordenadas completas. Si sólo se dispone de una familia generadora dependiente, las coordenadas no son únicas y no existe una matriz de cambio invertible asociada.

## 📚 Fuentes
### Material base
- Faculdade de Ciências da Universidade de Lisboa, [*Álgebra Linear e Geometria Analítica — programa 2026/27*](https://fenix.ciencias.ulisboa.pt/courses/algana-2817829258658182/programa), alcance curricular de representación matricial, isomorfismos y cambio de base.

### Ampliación académica
[^1]: Jim Hefferon, [*Linear Algebra*](https://hefferon.net/linearalgebra/), texto universitario abierto; representación de homomorfismos y cambio de representación.
[^2]: MIT OpenCourseWare, [*18.06 Linear Algebra — Readings*](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/pages/readings/), criterios de rango, invertibilidad y transformaciones lineales.
[^3]: [[Matemáticas/Álgebra lineal/Espacios vectoriales/10 Isomorfismos|Isomorfismos]], desarrollo canónico del concepto y de su relación con la dimensión.

## 🧑‍🏫 Prompt para tutor conversacional
Actúa como tutor universitario de Álgebra Lineal. Da una transformación lineal y dos bases ordenadas para que el estudiante construya su matriz columna por columna. Pide después decidir inyectividad, sobreyectividad e isomorfía mediante núcleo, imagen y rango. Finalmente cambia una de las bases y exige derivar la fórmula de transformación de la matriz siguiendo la dirección de cada sistema de coordenadas, con pistas graduadas y comprobación final sobre un vector.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
