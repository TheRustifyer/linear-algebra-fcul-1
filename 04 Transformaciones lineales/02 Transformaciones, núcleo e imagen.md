---
schema: nabla-phi-note/v1
title: Transformaciones, núcleo e imagen
aliases:
  - Transformaciones lineales
  - Núcleo e imagen de una transformación
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
tipo:
  - lección
  - definición
  - teorema
nivel: universitario-introductorio
estado: borrador
capa: curricular
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/04 Transformaciones lineales/01 Aplicaciones entre conjuntos|Aplicaciones entre conjuntos]]"
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/04 Independencia, bases y coordenadas|Independencia, bases y coordenadas]]"
desbloquea:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/04 Transformaciones lineales/03 Representación matricial e isomorfismos|Representación matricial e isomorfismos]]"
relacionado:
  - "[[Matemáticas/Álgebra lineal/Aplicaciones lineales|Aplicaciones lineales]]"
fsrs_goal: Decide si una aplicación es lineal, la reconstruye a partir de la imagen de una base y calcula bases del núcleo y de la imagen, verificando sus dimensiones mediante rango–nulidad.
tags:
  - matematicas
  - algebra-lineal
  - transformaciones-lineales
  - nucleo
  - imagen
  - fcul
---

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```
# Transformaciones, núcleo e imagen
Una transformación entre espacios vectoriales resulta especialmente útil cuando respeta la manera en que los vectores se combinan. En tal caso, conocer la transformación sobre unas pocas direcciones básicas permite reconstruirla sobre todo el espacio. Las direcciones que desaparecen forman el **núcleo**; las salidas alcanzables forman la **imagen**. Ambos conjuntos son subespacios y sus dimensiones describen cuánto conserva y cuánto pierde la transformación.[^1]

Se consideran espacios vectoriales $V$ y $W$ sobre el mismo cuerpo de escalares $K$, salvo indicación contraria.

## Linealidad
### Definición de transformación lineal
> [!definicion] Transformación lineal
> Una aplicación $T:V\to W$ es **lineal** si, para cualesquiera $u,v\in V$ y $\lambda\in K$,
> $$
> T(u+v)=T(u)+T(v),
> \qquad
> T(\lambda u)=\lambda T(u).
> $$
> La primera igualdad expresa aditividad; la segunda, homogeneidad respecto de los escalares.[^1]

Las dos condiciones equivalen a conservar toda combinación lineal finita:
$$
T\left(\sum_{i=1}^{r}a_iv_i\right)
=\sum_{i=1}^{r}a_iT(v_i),
$$
donde $a_i\in K$ y $v_i\in V$. Esta identidad contiene la idea operativa de linealidad: combinar antes de transformar produce el mismo resultado que transformar primero y combinar después.

### Consecuencias inmediatas
La linealidad obliga a que
$$
T(0_V)=0_W,
\qquad
T(-v)=-T(v),
\qquad
T(u-v)=T(u)-T(v).
$$
Por ejemplo, $T(0_V)=T(0v)=0T(v)=0_W$. Estas propiedades sirven para refutar linealidad, pero ninguna de ellas por separado basta para demostrarla.

### Cómo comprobar linealidad
Para una regla dada $T$, se toman vectores generales $u,v$ y escalares generales $a,b$, y se verifica
$$
T(au+bv)=aT(u)+bT(v).
$$
La función $T:\mathbb R^2\to\mathbb R^2$ dada por $T(x,y)=(x-2y,3x+y)$ es lineal, pues cada componente es una combinación lineal de $x$ e $y$. En cambio, $F(x,y)=(x-2y+1,3x+y)$ no lo es: $F(0,0)=(1,0)$, mientras que toda transformación lineal debe enviar el cero al cero.
```anki
deck: Física::Álgebra Lineal::Transformaciones lineales
tags:
  - matematicas
  - algebra-lineal
  - linealidad
---
> [!note] Pregunta
> ¿Qué identidad única permite comprobar simultáneamente aditividad y homogeneidad de $T:V\to W$?
===
> [!important] Respuesta
> $T(au+bv)=aT(u)+bT(v)$ para todos $u,v\in V$ y todos $a,b\in K$.
```
## Una transformación queda determinada por una base
### Existencia y unicidad
> [!teorema] Acción sobre una base
> Sea $B=(v_1,\ldots,v_n)$ una base de $V$ y sean $w_1,\ldots,w_n\in W$. Existe una única transformación lineal $T:V\to W$ tal que $T(v_i)=w_i$ para cada $i$.[^2]

Todo vector $v\in V$ posee coordenadas únicas:
$$
v=a_1v_1+\cdots+a_nv_n.
$$
La linealidad impone entonces
$$
T(v)=a_1w_1+\cdots+a_nw_n.
$$
Esta fórmula define una aplicación lineal. La unicidad de las coordenadas garantiza que la definición es inequívoca, y cualquier aplicación con las imágenes prescritas debe obedecer la misma fórmula. Por tanto, los valores sobre una base contienen toda la información de $T$.

### Ejemplo trabajado: construir la fórmula
Sea $T:\mathbb R^2\to\mathbb R^2$ lineal y supóngase
$$
T(1,1)=(2,0),
\qquad
T(1,-1)=(0,4).
$$
Los vectores $(1,1)$ y $(1,-1)$ forman una base. Para escribir $(x,y)$ en ella se resuelve
$$
(x,y)=a(1,1)+b(1,-1),
$$
de donde $a=(x+y)/2$ y $b=(x-y)/2$. Por linealidad,
$$
T(x,y)=a(2,0)+b(0,4)=(x+y,,2x-2y).
$$
Asignar imágenes arbitrarias a una familia dependiente puede ser imposible: cualquier relación lineal entre los vectores del dominio debe mantenerse entre sus imágenes.

## Núcleo
### Definición
> [!definicion] Núcleo
> El **núcleo** de una transformación lineal $T:V\to W$ es
> $$
> \ker T=\{v\in V:T(v)=0_W\}=T^{-1}(\{0_W\}).
> $$
> Es el conjunto de direcciones del dominio que la transformación anula.[^1]

El núcleo pertenece al dominio. Si $T$ está representada por una matriz $A$, calcularlo equivale a resolver el sistema homogéneo $Ax=0$.

### El núcleo es un subespacio
El vector nulo pertenece a $\ker T$ porque $T(0_V)=0_W$. Si $u,v\in\ker T$ y $a,b\in K$, entonces
$$
T(au+bv)=aT(u)+bT(v)=0_W.
$$
Por tanto, $au+bv\in\ker T$. El criterio de cierre bajo combinaciones lineales demuestra que $\ker T$ es un subespacio de $V$.

### Núcleo e inyectividad
> [!teorema] Criterio de inyectividad
> Una transformación lineal $T:V\to W$ es inyectiva si y sólo si $\ker T=\{0_V\}$.[^1]

Si $T$ es inyectiva y $T(v)=0_W=T(0_V)$, entonces $v=0_V$. Recíprocamente, si el núcleo es trivial y $T(u)=T(v)$, la linealidad da $T(u-v)=0_W$; luego $u-v=0_V$ y $u=v$.

## Imagen y rango
### Definición de imagen
> [!definicion] Imagen
> La **imagen** de $T:V\to W$ es
> $$
> \operatorname{Im}T=\{T(v):v\in V\}\subseteq W.
> $$
> Reúne exactamente las salidas que la transformación puede producir.[^1]

La imagen pertenece al codominio. La transformación es sobreyectiva exactamente cuando $\operatorname{Im}T=W$.

### La imagen es un subespacio
Sean $y_1,y_2\in\operatorname{Im}T$. Existen $u_1,u_2\in V$ con $y_i=T(u_i)$. Para $a,b\in K$,
$$
ay_1+by_2
=aT(u_1)+bT(u_2)
=T(au_1+bu_2).
$$
La combinación vuelve a estar en la imagen; además, $0_W=T(0_V)$ pertenece a ella. Así, $\operatorname{Im}T$ es un subespacio de $W$.

### Rango
> [!definicion] Rango de una transformación
> Si $\operatorname{Im}T$ es de dimensión finita, el **rango** de $T$ es
> $$
> \operatorname{rank}T=\dim(\operatorname{Im}T).
> $$
Si $B=(v_1,\ldots,v_n)$ es una base de $V$, entonces
$$
\operatorname{Im}T
=\operatorname{span}\{T(v_1),\ldots,T(v_n)\}.
$$
Para obtener una base de la imagen basta reducir esa familia generadora a una subfamilia linealmente independiente.

## Teorema rango–nulidad
> [!definicion] Nulidad
> La **nulidad** de $T$ es $\operatorname{nullity}T=\dim(\ker T)$ cuando el núcleo tiene dimensión finita.

> [!teorema] Rango–nulidad
> Si $V$ es de dimensión finita y $T:V\to W$ es lineal, entonces
> $$
> \dim V=\dim(\ker T)+\dim(\operatorname{Im}T).
> $$
> Equivalentemente, $\dim V=\operatorname{nullity}T+\operatorname{rank}T$.[^2]

Para demostrarlo, sea $(k_1,\ldots,k_s)$ una base de $\ker T$ y extiéndase a una base
$$
(k_1,\ldots,k_s,v_1,\ldots,v_r)
$$
de $V$. Los vectores $T(v_1),\ldots,T(v_r)$ generan $\operatorname{Im}T$, porque la parte del núcleo desaparece. También son independientes: si $\sum a_iT(v_i)=0_W$, entonces $\sum a_iv_i\in\ker T$; la independencia de la base extendida fuerza $a_i=0$ para todo $i$. Por ello forman una base de la imagen. Finalmente, $\dim V=s+r$.

## Ejemplo integrador: núcleo, imagen y dimensiones
Considérese
$$
T:\mathbb R^3\to\mathbb R^2,
\qquad
T(x,y,z)=(x+y,,y+z).
$$
Respecto de las bases canónicas, su matriz es
$$
A=\begin{pmatrix}1&1&0\\0&1&1\end{pmatrix}.
$$
El núcleo se obtiene de $x+y=0$ y $y+z=0$. Tomando $y=t$,
$$
(x,y,z)=t(-1,1,-1),
$$
de modo que $\ker T=\operatorname{span}\{(-1,1,-1)\}$ y su nulidad es $1$.

Las dos columnas $(1,0)$ y $(1,1)$ son independientes, por lo que generan $\mathbb R^2$. Así,
$$
\operatorname{Im}T=\mathbb R^2,
\qquad
\operatorname{rank}T=2.
$$
La comprobación dimensional da $3=1+2$, exactamente como establece rango–nulidad. Además, la imagen coincide con el codominio, luego $T$ es sobreyectiva; su núcleo no es trivial, luego no es inyectiva.

## Condiciones de validez y lectura estructural
El núcleo mide las direcciones que se identifican con el cero; la imagen mide las direcciones disponibles como salida. Rango–nulidad afirma que, en dimensión finita, esas dos cuentas consumen toda la dimensión del dominio.

La igualdad rango–nulidad requiere que el dominio tenga dimensión finita en la forma presentada. La imagen puede tener dimensión menor que el codominio, y el rango nunca supera $\min(\dim V,\dim W)$. Una fórmula sólo determina una transformación cuando también se conocen dominio, codominio y cuerpo de escalares.

## 📚 Fuentes
### Material base
- Faculdade de Ciências da Universidade de Lisboa, [*Álgebra Linear e Geometria Analítica — programa 2026/27*](https://fenix.ciencias.ulisboa.pt/courses/algana-2817829258658182/programa), alcance curricular de transformaciones lineales, núcleo, imagen y representación matricial.

### Ampliación académica
[^1]: Jim Hefferon, [*Linear Algebra*](https://hefferon.net/linearalgebra/), texto universitario abierto; aplicaciones lineales, núcleo, imagen e isomorfismos.
[^2]: MIT OpenCourseWare, [*18.06 Linear Algebra — Readings*](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/pages/readings/), tratamiento universitario de transformaciones lineales, bases y rango–nulidad.

## 🧑‍🏫 Prompt para tutor conversacional
Actúa como tutor universitario de Álgebra Lineal. Presenta una aplicación entre espacios de dimensión finita y pide decidir si es lineal justificando ambas condiciones. Después solicita construir su acción desde una base, calcular bases del núcleo y de la imagen y contrastar sus dimensiones mediante rango–nulidad. Da pistas graduadas, exige indicar los espacios ambiente y no reveles el procedimiento completo antes de un segundo intento.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
