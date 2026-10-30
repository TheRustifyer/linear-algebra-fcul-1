---
title: Ejercicios 66–77 — combinaciones lineales y espacio generado
asignatura: Álgebra Lineal y Geometría Analítica
capa: curricular
tipo:
  - ejercicios
  - preparatoria
nivel: universitario-introductorio
estado: revisado
fsrs_goal: Decide pertenencias mediante sistemas de coeficientes en vectores, polinomios, matrices y funciones; compara espacios generados, distingue todos los casos de parámetros y transforma generadores en ecuaciones para calcular intersecciones.
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/03 Subespacios y espacio generado|Subespacios y espacio generado]]"
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/03 Combinaciones lineales y espacio generado|Combinaciones lineales y espacio generado]]"
relacionado:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/ejercicios/01 Axiomas y subespacios — ejercicios 59–65|Ejercicios 59–65]]"
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
  - combinaciones-lineales
  - ejercicios
  - fcul
---

# Combinaciones lineales y espacio generado · ejercicios 66–77

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

Para decidir si un vector pertenece a un [[Matemáticas/Álgebra lineal/Espacios vectoriales/03 Combinaciones lineales y espacio generado|espacio generado]], se busca una combinación que lo reproduzca por completo. La igualdad se comprueba comparando coordenadas en $\mathbb R^n$, coeficientes en polinomios y entradas en matrices. En funciones debe valer para todos los puntos del dominio. Una sola contradicción descarta la combinación; los coeficientes encontrados deben satisfacer todas las condiciones.[^generado]

> [!tip] Procedencia de las respuestas
> 🤖 identifica las resoluciones y comprobaciones propias. Los enunciados proceden del boletín de FCUL. Sus marcas «S» remiten a una ficha separada; las fichas de soluciones y resoluciones disponibles corresponden a ejercicios anteriores.

## Encontrar una combinación o demostrar que no existe

### Ejercicio 66 · Combinaciones en $\mathbb R^3$ 🤖

#### Enunciado

En el espacio vectorial real $\mathbb R^3$, decide, justificando, si cada vector es combinación lineal de la familia indicada:[^66]

**a)** $(-8,5,-7)$ de $\bigl((2,-1,1),(2,0,-2)\bigr)$.

**b)** $(-8,5,-7)$ de $\bigl((2,-1,1),(1,0,-2)\bigr)$.

**c)** $(2,-10,-17)$ de $\bigl((4,-6,1),(1,-2,-1),(-1,0,-4)\bigr)$.

**d)** $(-5,3,-5)$ de $\bigl((4,-6,1),(1,-2,-1),(-1,0,-4)\bigr)$.

**e)** $(-5,3,-5)$ de $\bigl((1,0,1),(0,1,-1),(1,0,-1),(2,-1,1)\bigr)$.

**f)** $(0,1,-1)$ de la misma familia de e).

**g)** $(1,1,0)$ de la misma familia de e).

**h)** $(0,0,0)$ de la misma familia de e).

**i)** $(-6,3,12)$ de $\bigl((2,-1,-4)\bigr)$.

**j)** $(4,6,-8)$ de $\bigl((2,-1,-4)\bigr)$.

**k)** Sean

$$
u=\left(\frac{\sqrt5}{\sqrt3},\frac{\sqrt5}{\sqrt2},\frac5{\sqrt2}\right),
\qquad
v=\frac15\left(\sqrt{10},\sqrt{15},5\sqrt3\right).
$$

¿Es $u$ combinación lineal de $(v)$? ¿Es también $v$ combinación lineal de $(u)$?

> [!resolucion]- Resolución
> **a)** Buscamos $r,s\in\mathbb R$ con $r(2,-1,1)+s(2,0,-2)=(-8,5,-7)$. Igualar coordenadas da
>
> $$
> 2r+2s=-8,\qquad-r=5,\qquad r-2s=-7.
> $$
>
> La segunda ecuación da $r=-5$; la primera da $s=1$. La tercera se cumple: $-5-2=-7$. **Sí**, con coeficientes $(-5,1)$.
>
> **b)** La segunda coordenada obliga a $r=-5$ y la primera, $2r+s=-8$, obliga a $s=2$. Pero la tercera sería $r-2s=-9\ne-7$. **No** existe combinación.
>
> **c)** Para coeficientes $r,s,t$, el sistema es
>
> $$
> 4r+s-t=2,\qquad -6r-2s=-10,\qquad r-s-4t=-17.
> $$
>
> De la segunda, $3r+s=5$. Restándola de la primera se obtiene $r-t=-3$, luego $r=t-3$ y $s=14-3t$. Al sustituir en la tercera, el miembro izquierdo es siempre $-17$. Basta elegir $t=0$: **sí**, porque
>
> $$
> -3(4,-6,1)+14(1,-2,-1)=(2,-10,-17).
> $$
>
> **d)** Una ecuación lineal homogénea satisfecha por los tres generadores permite comprobar si el vector pedido puede pertenecer a su generado. En este caso, los tres cumplen $-8x-5y+2z=0$, y cualquier combinación conserva esa igualdad por la distributividad. Sin embargo, para el vector pedido,
>
> $$
> -8(-5)-5(3)+2(-5)=15\ne0.
> $$
>
> Por tanto, **no** es combinación: incumple una condición que satisface todo vector del generado.
>
> **e)** Llamemos $v_1,v_2,v_3,v_4$ a los cuatro vectores, en el orden del enunciado. Para demostrar que el vector pertenece basta encontrar una combinación. Buscamos primero una que sólo use los tres primeros: $rv_1+sv_2+tv_3$, con coeficiente de $v_4$ igual a cero.
>
> La segunda coordenada exige $s=3$; la primera y la tercera dan $r+t=-5$ y $r-s-t=-5$. Sustituyendo $s=3$ en esta última, $r-t=-2$. Al resolver junto con $r+t=-5$, resulta $r=-7/2$, $t=-3/2$. Por tanto, **sí**:
>
> $$
> (-5,3,-5)=-\frac72v_1+3v_2-\frac32v_3+0v_4.
> $$
>
> **f) Sí:** el vector es $v_2$, luego los coeficientes $(0,1,0,0)$ sirven.
>
> **g) Sí:** $v_1+v_2=(1,1,0)$; sirven $(1,1,0,0)$.
>
> **h) Sí:** elegir los cuatro coeficientes cero produce $(0,0,0)$.
>
> **i) Sí:** $(-6,3,12)=-3(2,-1,-4)$.
>
> **j) No:** la primera coordenada exigiría $r=2$, pero la segunda sería $-2$, no $6$.
>
> **k)** En la primera coordenada, el único coeficiente posible para $u=cv$ es
>
> $$
> c=\frac{\sqrt5/\sqrt3}{\sqrt{10}/5}=\frac5{\sqrt6}.
> $$
>
> Es preciso verificar las otras dos. En la segunda,
>
> $$
> \frac5{\sqrt6}\,\frac{\sqrt{15}}5
> =\sqrt{\frac{15}6}=\frac{\sqrt5}{\sqrt2}.
> $$
>
> La tercera coordenada de $v$ es $\sqrt3$; multiplicarla por el mismo coeficiente da $(5/\sqrt6)\sqrt3=5/\sqrt2$. Por tanto,
>
> $$
> \boxed{u=\frac5{\sqrt6}v,\qquad v=\frac{\sqrt6}5u.}
> $$
>
> Ambas respuestas son afirmativas; el segundo coeficiente existe porque el primero es no nulo.

> [!recuerda]- Comprobación
> Las combinaciones de a), c) y e–i) se comprueban multiplicando y sumando en las tres coordenadas. En b) y j), las primeras ecuaciones fijan un candidato que falla en otra coordenada; esa contradicción es la que descarta la combinación. En d), sustituir los tres generadores en $-8x-5y+2z$ debe dar cero. En k), el producto $(5/\sqrt6)(\sqrt6/5)=1$ confirma que los dos coeficientes son inversos.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - combinaciones-lineales
---
> [!note] Pregunta
> ¿Cómo se decide si $b$ es combinación lineal de $v_1,\ldots,v_m\in K^n$?
===
> [!important] Respuesta
> Se plantea $r_1v_1+\cdots+r_mv_m=b$ y se igualan todas las coordenadas. Hay combinación exactamente si el sistema para los coeficientes $r_j\in K$ es compatible; una solución debe verificarse en todas las coordenadas.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - combinaciones-lineales
---
> [!note] Pregunta
> ¿Qué se concluye si un vector incumple una ecuación lineal homogénea que satisfacen todos los generadores?
===
> [!important] Respuesta
> Que no pertenece al espacio generado, porque toda combinación conserva esa ecuación. En cambio, cumplirla sólo permite probar pertenencia si se sabe que las ecuaciones utilizadas describen todo el generado.
```

### Ejercicio 67 · Igualar todos los coeficientes de un polinomio 🤖

#### Enunciado

En el espacio vectorial real $\mathbb R[x]$, decide si

$$
p(x)=-12x^3-5x^2+2x-4
$$

es combinación lineal de cada familia:[^67]

**a)** $\bigl(2x^3+3x-1,\ -x^2+4x-2\bigr)$.

**b)** $\bigl(-2x^3-x^2+x-3,\ 2x^3+\tfrac12x^2+x-4\bigr)$.

**c)** $\bigl(-2x^3-x^2+x-1,\ 2x^3+x^2+2x+2,\ -4x^3-x^2+4x-2\bigr)$.

**d)** $\bigl(2x^3-x^2+2x-2,\ -3x^3-4x^2+4x-5,\ -7x^3-2x^2-9,\ -x^3-5x^2+6x-7\bigr)$.

> [!resolucion]- Resolución
> Comparamos los coeficientes de $x^3,x^2,x$ y del término independiente. Una combinación reproduce $p$ si satisface simultáneamente esas cuatro igualdades.[^generado]
>
> **a)** Sean $r,s$ los coeficientes de la familia. Se exige
>
> $$
> \begin{cases}
> 2r=-12,\\
> -s=-5,\\
> 3r+4s=2,\\
> -r-2s=-4.
> \end{cases}
> $$
>
> Las primeras dos ecuaciones dan $r=-6,s=5$. Las restantes dan $-18+20=2$ y $6-10=-4$, así que **sí**.
>
> **b)** El sistema es
>
> $$
> \begin{cases}
> -2r+2s=-12,\\
> -r+\frac12s=-5,\\
> r+s=2,\\
> -3r-4s=-4.
> \end{cases}
> $$
>
> De $r+s=2$ y $-r+s=-6$ se obtiene $r=4,s=-2$. Las otras condiciones dan $-4-1=-5$ y $-12+8=-4$. **Sí**, con coeficientes $(4,-2)$.
>
> **c)** Para $r,s,t$, los coeficientes de $x^3,x^2,x$ exigen
>
> $$
> \begin{cases}
> -2r+2s-4t=-12,\\
> -r+s-t=-5,\\
> r+2s+4t=2.
> \end{cases}
> $$
>
> Restando dos veces la segunda ecuación de la primera, resulta $-2t=-2$, luego $t=1$. La segunda da $s=r-4$; la tercera da $3r-4=2$, luego $r=2,s=-2$. Pero el término independiente de esa combinación es
>
> $$
> -r+2s-2t=-2-4-2=-8\ne-4.
> $$
>
> Las tres primeras igualdades obligan a elegir $(r,s,t)=(2,-2,1)$, pero esa terna produce término independiente $-8$ en lugar de $-4$. Por tanto, **no** es combinación.
>
> **d)** Con coeficientes $r,s,t,u$, las cuatro ecuaciones son
>
> $$
> \begin{cases}
> 2r-3s-7t-u=-12,\\
> -r-4s-2t-5u=-5,\\
> 2r+4s+6u=2,\\
> -2r-5s-9t-7u=-4.
> \end{cases}
> $$
>
> Para probar existencia basta encontrar una solución. Tomamos $t=u=0$. De las ecuaciones de $x$ y $x^3$ quedan $r+2s=1$ y $2r-3s=-12$, que dan $s=2,r=-3$. Las otras dos se cumplen: $3-8=-5$ y $6-10=-4$. Por tanto, **sí**, con coeficientes $(-3,2,0,0)$.

> [!recuerda]- Comprobación
> Si $p_j$ denota el polinomio que ocupa la posición $j$ de cada familia, las combinaciones $-6p_1+5p_2$ en a), $4p_1-2p_2$ en b) y $-3p_1+2p_2$ en d) producen los coeficientes $(-12,-5,2,-4)$. En c), la combinación forzada es $-12x^3-5x^2+2x-8$: la discrepancia está en el término independiente.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - polinomios
---
> [!note] Pregunta
> ¿Por qué no basta ajustar los coeficientes de mayor grado al buscar una combinación de polinomios?
===
> [!important] Respuesta
> Deben coincidir todos los coeficientes, también los nulos y el término independiente. Si algunas ecuaciones determinan los coeficientes de la combinación, todavía hay que sustituirlos en las ecuaciones restantes.
```

### Ejercicio 68 · Combinaciones lineales de matrices 🤖

#### Enunciado

En $M_{2\times3}(\mathbb R)$, decide si la matriz

$$
C=\begin{pmatrix}1&-2&3\\-4&5&-6\end{pmatrix}
$$

es combinación lineal de cada familia:[^68]

**a)**

$$
A_1=\begin{pmatrix}3&2&3\\4&5&6\end{pmatrix},\qquad
A_2=\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}.
$$

**b)**

$$
B_1=\begin{pmatrix}3&-2&2\\-5&0&-3\end{pmatrix},\qquad
B_2=\begin{pmatrix}0&-3&1\\4&0&5\end{pmatrix},\qquad
B_3=\begin{pmatrix}-1&1&0\\2&1&1\end{pmatrix}.
$$

**c)**

$$
D_1=\begin{pmatrix}3&2&2\\-5&1&-3\end{pmatrix},\qquad
D_2=\begin{pmatrix}-4&-8&2\\2&8&-6\end{pmatrix},\qquad
D_3=\begin{pmatrix}2&4&-6\\8&-10&-12\end{pmatrix}.
$$

> [!resolucion]- Resolución
> La combinación debe ser igual a $C$ entrada a entrada.
>
> **a)** En una combinación $rA_1+sA_2$, las entradas $(1,2)$ y $(2,2)$ serían $2(r+s)$ y $5(r+s)$. La primera exige $r+s=-1$, mientras que la segunda exige $r+s=1$. Son incompatibles: **no**.
>
> **b)** Supongamos $C=rB_1+sB_2+tB_3$. La entrada $(2,2)$ obliga a $t=5$. La entrada $(1,1)$ da $3r-t=1$, luego $r=2$. La entrada $(1,2)$ da $-2r-3s+t=-2$, luego $s=1$. Sin embargo, la entrada $(1,3)$ sería $2r+s=5$ y debería valer $3$. **No** existe combinación.
>
> **c)** Para coeficientes $r,s,t$, las entradas $(1,1)$ y $(1,2)$ exigen
>
> $$
> 3r-4s+2t=1,\qquad 2r-8s+4t=-2.
> $$
>
> Restar dos veces la primera de la segunda da $-4r=-4$, de donde $r=1$ y $t=2s-1$. La entrada $(1,3)$ impone $2r+2s-6t=3$; al sustituir, $8-10s=3$, luego $s=1/2,t=0$. Comprobamos las tres entradas de la segunda fila:
>
> $$
> -5+\frac12(2)=-4,\qquad 1+\frac12(8)=5,\qquad-3+\frac12(-6)=-6.
> $$
>
> Por tanto, **sí**:
>
> $$
> \boxed{C=D_1+\frac12D_2+0D_3.}
> $$

> [!recuerda]- Comprobación
> El cálculo directo de $D_1+D_2/2$ en c) debe dar las seis entradas de $C$. En a), dos entradas exigen valores incompatibles de $r+s$; en b), el candidato $(2,1,5)$ falla en la entrada $(1,3)$. Los coeficientes obtenidos con algunas entradas deben satisfacer también todas las restantes.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - matrices
  - combinaciones-lineales
---
> [!note] Pregunta
> ¿Qué sistema se plantea para decidir si una matriz $C\in M_{m\times n}(K)$ es combinación de matrices $A_1,\ldots,A_s$ del mismo tamaño?
===
> [!important] Respuesta
> $C=r_1A_1+\cdots+r_sA_s$, comparando las $mn$ entradas con los mismos coeficientes $r_j\in K$. Cada entrada aporta una ecuación y todas deben ser compatibles.
```

### Ejercicio 69 · Identidades entre funciones 🤖

#### Enunciado

En el espacio vectorial real $\mathcal F(\mathbb R)$, decide si:[^69]

**a)** $\cos(2x)$ es combinación lineal de $\bigl(\sin^2x,\cos^2x\bigr)$.

**b)** $\cos x$ es combinación lineal de esa misma familia.

> [!resolucion]- Resolución
> Los coeficientes han de ser números reales fijos, independientes de $x$; la igualdad debe valer en todo $\mathbb R$.[^generado]
>
> **a) Sí.** La [[Matemáticas/Preuniversitario/1 Bachillerato/05 Trigonometría/04 Identidades y ecuaciones trigonométricas — ampliación|identidad del ángulo doble]] da[^trigonometria]
>
> $$
> \cos(2x)=\cos^2x-\sin^2x
> =(-1)\sin^2x+1\cos^2x.
> $$
>
> **b) No.** Supongamos que existen $r,s\in\mathbb R$ con $\cos x=r\sin^2x+s\cos^2x$ para todo real $x$. Al evaluar en $x=0$, se obtiene $1=s$. Al evaluar en $x=\pi$, se obtiene $-1=s$. Un mismo escalar no puede valer $1$ y $-1$. La identidad es imposible.

> [!recuerda]- Comprobación
> En a), la fórmula de suma $\cos(x+x)=\cos x\cos x-\sin x\sin x$ demuestra la identidad para todo $x$. En b), tanto $\sin^2x$ como $\cos^2x$ tienen el mismo valor en $0$ y $\pi$. Cualquier combinación debe conservar esa igualdad, mientras que $\cos x$ vale $1$ y $-1$, respectivamente. Evaluar en puntos concretos permite refutar una identidad; demostrarla exige una igualdad válida en todo el dominio.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - funciones
---
> [!note] Pregunta
> ¿Cómo se usan evaluaciones puntuales al decidir si $f$ es combinación lineal de funciones $g_1,\ldots,g_s$?
===
> [!important] Respuesta
> Los mismos escalares deben satisfacer $f(x)=\sum_jr_jg_j(x)$ en todos los puntos del dominio. Las evaluaciones pueden determinar esos escalares o producir una contradicción; una respuesta afirmativa debe justificar la igualdad para todo $x$.
```

## Qué contiene un espacio generado

### Ejercicio 70 · Construir elementos de un espacio generado 🤖

#### Enunciado

En $\mathbb R^4$, sea $F=\langle(0,1,3,1),(1,0,0,-1)\rangle$. Indica cuatro elementos de $F$.[^70]

> [!resolucion]- Resolución
> Sean $u=(0,1,3,1)$ y $v=(1,0,0,-1)$. Todo elemento tiene la forma
>
> $$
> ru+sv=(s,r,3r,r-s),\qquad r,s\in\mathbb R.
> $$
>
> Elegimos los pares $(r,s)=(0,0),(1,0),(0,1),(1,1)$. Producen, respectivamente, los cuatro elementos distintos
>
> $$
> (0,0,0,0),\quad(0,1,3,1),\quad(1,0,0,-1),\quad(1,1,3,0).
> $$

> [!recuerda]- Comprobación
> Todos satisfacen $z=3y$ y $w=y-x$. Recíprocamente, si un vector satisface esas dos ecuaciones, basta tomar $r=y,s=x$ para reconstruirlo como $ru+sv$; así, la parametrización describe todo $F$.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - espacio-generado
---
> [!note] Pregunta
> ¿Qué es $\langle v_1,\ldots,v_s\rangle$ y cómo se obtienen elementos suyos?
===
> [!important] Respuesta
> Es el conjunto de todas las sumas $r_1v_1+\cdots+r_sv_s$ con escalares del cuerpo. Cualquier elección de los coeficientes produce un elemento, incluidos cero y los propios generadores.
```

### Ejercicio 71 · Pertenencia, inclusión e igualdad de generados 🤖

#### Enunciado

En $\mathbb R^3$, decide si cada afirmación es verdadera o falsa y justifica:[^71]

**a)** $(4,4,4)$ es combinación lineal de $\bigl((1,2,1),(1,0,1)\bigr)$.

**b)** $(1,2,2)$ es combinación lineal de $\bigl((1,2,1),(1,0,1)\bigr)$.

**c)** $\langle(1,2,1),(1,0,1)\rangle=\{(1,2,1),(1,0,1)\}$.

**d)** $\langle(1,2,1),(1,0,1)\rangle\subseteq\{(1,2,1),(1,0,1)\}$.

**e)** $\langle(1,2,1),(1,0,1)\rangle\supseteq\{(1,2,1),(1,0,1)\}$.

**f)** $\langle(3,0,-1)\rangle=\{(3,0,-1)\}$.

**g)** $\langle(0,0,0)\rangle=\{(0,0,0)\}$.

**h)** $(4,4,4)\in\langle(1,2,1),(1,0,1)\rangle$.

**i)** $(1,2,2)\in\langle(1,2,1),(1,0,1)\rangle$.

**j)** $(0,0,0)\in\langle(1,2,1),(1,0,1)\rangle$.

**k)** $\langle(4,4,4),(1,2,2)\rangle=\langle(1,2,1),(1,0,1)\rangle$.

**l)** $\langle(1,1,-1),(0,0,0)\rangle=\langle(2,2,-2)\rangle$.

**m)** $\langle(1,1,-1),(2,2,0)\rangle=\langle(0,0,-2),(3,3,3),(3,3,-1)\rangle$.

**n)** $\langle(1,1,-1),(2,2,0)\rangle=\langle(3,3,3),(3,3,-1),(1,2,-1)\rangle$.

**o)** $\langle(1,1,1),(1,-1,-1)\rangle=\langle(1,1,-1),(1,-1,1)\rangle$.

> [!resolucion]- Resolución
> Sean $a=(1,2,1)$, $b=(1,0,1)$ y $P=\langle a,b\rangle$. Una combinación genérica es
>
> $$
> ra+sb=(r+s,2r,r+s).
> $$
>
> Por tanto, todo elemento de $P$ cumple $x=z$. Recíprocamente, si $x=z$, tomando $r=y/2$ y $s=x-y/2$ se reconstruye $(x,y,z)$. Así, $P=\{(x,y,z):x=z\}$.
>
> **a) Verdadera.** $(4,4,4)=2a+2b$.
>
> **b) Falsa.** $(1,2,2)$ incumple $x=z$.
>
> **c) Falsa.** Cero pertenece a $P$, con $r=s=0$, pero no es ninguno de los dos elementos del conjunto de la derecha.
>
> **d) Falsa.** El mismo vector cero refuta la inclusión propuesta.
>
> **e) Verdadera.** $a=1a+0b$ y $b=0a+1b$; todo generador pertenece a su generado.
>
> **f) Falsa.** El generado contiene cero, que es distinto de $(3,0,-1)$.
>
> **g) Verdadera.** Todo múltiplo de cero es cero, y cero se obtiene; ambos conjuntos contienen exactamente ese vector.
>
> **h) Verdadera.** Es la misma pertenencia demostrada en a).
>
> **i) Falsa.** Es la pertenencia descartada en b).
>
> **j) Verdadera.** Los coeficientes $r=s=0$ lo producen.
>
> **k) Falsa.** El generado izquierdo contiene su generador $(1,2,2)$, que no pertenece al derecho. Un elemento que pertenece a un conjunto y no al otro basta para refutar su igualdad.
>
> **l) Verdadera.** El cero no añade combinaciones. Además, $(2,2,-2)=2(1,1,-1)$ y $(1,1,-1)=\tfrac12(2,2,-2)$, de modo que se generan exactamente los mismos múltiplos.
>
> **m) Verdadera.** Denotemos por $c=(1,1,-1)$ y $d=(2,2,0)$ los generadores de la izquierda, y por $r=(0,0,-2)$, $s=(3,3,3)$ y $t=(3,3,-1)$ los de la derecha. Aquí las cinco letras representan vectores. Para expresar los generadores derechos mediante los izquierdos, se tiene
>
> $$
> r=2c-d,\qquad s=-3c+3d,\qquad t=c+d.
> $$
>
> Por tanto, cualquier combinación de $r,s,t$ pertenece a $\langle c,d\rangle$. En el sentido contrario,
>
> $$
> c=r+\frac13s,\qquad d=r+\frac23s.
> $$
>
> Estas dos igualdades muestran que cualquier combinación de $c,d$ pertenece a $\langle r,s,t\rangle$. Quedan demostradas las dos inclusiones.[^generado]
>
> **n) Falsa.** Todo vector del generado izquierdo tiene $x=y$, porque sus dos generadores lo cumplen. El generador derecho $(1,2,-1)$ incumple esa ecuación, de modo que no pertenece al izquierdo.
>
> **o) Falsa.** Toda combinación de los dos generadores izquierdos tiene $y=z$. El primer generador derecho $(1,1,-1)$ no cumple esa igualdad. Por tanto, los espacios difieren.
>
> En el orden a–o: **V, F, F, F, V, F, V, V, F, V, F, V, V, F, F**.

> [!recuerda]- Comprobación
> Para a–k, sustituye cada vector en $x=z$ o escribe la combinación indicada. En m), calcula coordenada a coordenada las cinco identidades: prueban las dos inclusiones, no sólo una. Para o), el generado derecho cumple $y=-z$, mientras que el izquierdo cumple $y=z$; por ejemplo, $(1,1,-1)$ distingue ambos conjuntos.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - espacio-generado
---
> [!note] Pregunta
> ¿Qué diferencia hay entre una familia finita $S$ de generadores y $\langle S\rangle$?
===
> [!important] Respuesta
> $S$ contiene los vectores enumerados; $\langle S\rangle$ contiene todas sus combinaciones. Siempre $S\subseteq\langle S\rangle$ y $0\in\langle S\rangle$, pero generalmente $S\ne\langle S\rangle$.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - espacio-generado
---
> [!note] Pregunta
> ¿Qué basta comprobar para demostrar $\langle S\rangle=\langle T\rangle$?
===
> [!important] Respuesta
> Cada generador de $S$ debe ser combinación de los de $T$, y cada generador de $T$, combinación de los de $S$. Son las dos inclusiones; comprobar sólo una no demuestra igualdad.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - espacio-generado
---
> [!note] Pregunta
> ¿Por qué añadir el vector cero a una familia no cambia su generado?
===
> [!important] Respuesta
> Porque su contribución a cualquier combinación es $\lambda0=0$. Se obtienen exactamente las mismas combinaciones con o sin ese generador.
```

### Ejercicio 72 · Interpretación geométrica 🤖

#### Enunciado

Interpreta geométricamente estos subespacios:[^72]

**a)** $\langle(2,-3)\rangle$ de $\mathbb R^2$.

**b)** $\langle(2,-3),(-4,6)\rangle$ de $\mathbb R^2$.

**c)** $\langle(2,-3,1)\rangle$ de $\mathbb R^3$.

**d)** $\langle(1,0,0),(0,1,0)\rangle$ de $\mathbb R^3$.

> [!resolucion]- Resolución
> **a)** Es el conjunto $\{(2t,-3t):t\in\mathbb R\}$: la recta por el origen con vector director $(2,-3)$. Su ecuación es $3x+2y=0$. En efecto, la parametrización la satisface; recíprocamente, de la ecuación se obtiene $y=-3x/2$ y se toma $t=x/2$.
>
> **b)** Como $(-4,6)=-2(2,-3)$, cualquier combinación es
>
> $$
> r(2,-3)+s(-4,6)=(r-2s)(2,-3).
> $$
>
> Todos los múltiplos se obtienen eligiendo $s=0$. Es **la misma recta** de a).
>
> **c)** Es $\{(2t,-3t,t):t\in\mathbb R\}$: una recta por el origen en el espacio, de dirección $(2,-3,1)$. También se describe por $x=2z$, $y=-3z$: la parametrización las satisface y cualquier solución se recupera tomando $t=z$.
>
> **d)** Una combinación tiene la forma $(r,s,0)$ con $r,s\in\mathbb R$. Por tanto, es el **plano $z=0$**, el plano coordenado $xy$: todos sus puntos se obtienen con esos dos coeficientes.[^generado]

> [!recuerda]- Comprobación
> Las rectas de a–c contienen el origen y todos los múltiplos reales de una dirección no nula. En d), $(1,1,0)$ y $(2,-3,0)$ se obtienen, pero ningún vector con tercera coordenada distinta de cero puede aparecer. Dos generadores proporcionales, como en b), conservan una única dirección.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - espacio-generado
---
> [!note] Pregunta
> ¿Qué describe geométricamente $\langle v\rangle$ para un vector real no nulo $v$ de $\mathbb R^2$ o $\mathbb R^3$?
===
> [!important] Respuesta
> La recta por el origen de dirección $v$, formada por todos los múltiplos $tv$ con $t\in\mathbb R$. Añadir un múltiplo de $v$ como generador no cambia esa recta.
```

### Ejercicio 73 · Espacio columna y espacio fila 🤖

#### Enunciado

En $\mathbb R^4$, sean[^73]

$$
u=(3,0,-2,1),\qquad v=(0,-2,1,0),\qquad w=(2,-3,0,2).
$$

**a)** Indica matrices $A,B$ tales que $\langle u,v,w\rangle=C(A)=L(B)$.

**b)** Decide si $(0,-7,3,4)$ pertenece a $\langle u,v,w\rangle$. ¿Y $(3,0,0,1)$?

> [!resolucion]- Resolución
> **a)** $C(A)$ es el espacio generado por las columnas de $A$ y $L(B)$ el generado por las filas de $B$. Colocamos los vectores como columnas de una matriz $4\times3$:
>
> $$
> A=\begin{pmatrix}3&0&2\\0&-2&-3\\-2&1&0\\1&0&2\end{pmatrix}.
> $$
>
> Y como filas de una matriz $3\times4$:
>
> $$
> B=A^T=\begin{pmatrix}3&0&-2&1\\0&-2&1&0\\2&-3&0&2\end{pmatrix}.
> $$
>
> Las columnas de $A$ y las filas de $B$ son precisamente $u,v,w$; por eso $C(A)=\langle u,v,w\rangle=L(B)$. Los tres vectores tienen cuatro coordenadas, lo que explica los tamaños de ambas matrices.[^generado]
>
> **b)** La combinación genérica es
>
> $$
> ru+sv+tw=(3r+2t,-2s-3t,-2r+s,r+2t).
> $$
>
> Para $(0,-7,3,4)$, restar la ecuación de la cuarta coordenada de la primera da $2r=-4$, luego $r=-2$. La cuarta da $t=3$ y la segunda, $s=-1$. La tercera se cumple: $-2(-2)-1=3$. Por tanto,
>
> $$
> (0,-7,3,4)=-2u-v+3w\in\langle u,v,w\rangle.
> $$
>
> Para $(3,0,0,1)$, las coordenadas primera y cuarta dan $2r=2$, luego $r=1$ y $t=0$. La segunda obliga a $s=0$. La tercera sería $-2r+s=-2\ne0$. Por ello, este vector **no pertenece**.

> [!recuerda]- Comprobación
> Multiplica $A(-2,-1,3)^T$ y verifica que produce $(0,-7,3,4)^T$. Para el segundo vector, comprueba las cuatro coordenadas del único candidato $(r,s,t)=(1,0,0)$: reproduce tres de ellas, pero falla la tercera.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - espacio-generado
---
> [!note] Pregunta
> Si $v_1,\ldots,v_s\in K^n$, ¿qué matriz $A$ cumple $C(A)=\langle v_1,\ldots,v_s\rangle$?
===
> [!important] Respuesta
> La matriz $n\times s$ cuyas columnas son esos vectores; $C(A)$ es, por definición, el espacio generado por sus columnas.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - espacio-generado
---
> [!note] Pregunta
> Si $v_1,\ldots,v_s\in K^n$, ¿qué matriz $B$ cumple $L(B)=\langle v_1,\ldots,v_s\rangle$?
===
> [!important] Respuesta
> La matriz $s\times n$ cuyas filas son esos vectores; $L(B)$ es el espacio generado por las filas. Si $A$ los tiene como columnas, puede elegirse $B=A^T$.
```

## Pertenencia con parámetros

### Ejercicio 74 · Pertenencia con dos parámetros 🤖

#### Enunciado

Determina los valores reales de $a,b$ para los que $(-a,1,b)$ es combinación lineal de[^74]

$$
\bigl((a,1,2a),(0,1,2a),(2a,-1,a+2)\bigr)
$$

en el espacio vectorial real $\mathbb R^3$.

> [!resolucion]- Resolución
> Sean $r,s,u$ los coeficientes buscados. Igualar las tres coordenadas da
>
> $$
> a(r+2u+1)=0,\qquad r+s-u=1,
> \qquad 2ar+2as+(a+2)u=b.
> $$
>
> De la segunda, $r+s=1+u$. Al sustituirlo en la tercera, el sistema queda equivalentemente
>
> $$
> a(r+2u+1)=0,\qquad r+s-u=1,
> \qquad (3a+2)u=b-2a.
> $$
>
> Las divisiones posibles dependen de $a$ y de $3a+2$, por lo que separamos sus ceros antes de dividir.[^sistemas]
>
> **Si $a\notin\{0,-2/3\}$**, ambas cantidades son no nulas. Existe solución para **todo $b$**, dada por
>
> $$
> u=\frac{b-2a}{3a+2},\qquad r=-1-2u,\qquad s=2+3u.
> $$
>
> **Si $a=0$**, la primera ecuación es $0=0$ y la tercera da $2u=b$. Para **todo $b$**, se puede tomar
>
> $$
> u=\frac b2,\qquad r=q,\qquad s=1-q+\frac b2,
> \qquad q\in\mathbb R.
> $$
>
> **Si $a=-2/3$**, la tercera ecuación se convierte en $0=b+4/3$. Hay solución **exactamente cuando $b=-4/3$**. En ese caso,
>
> $$
> u=q,\qquad r=-1-2q,\qquad s=2+3q,
> \qquad q\in\mathbb R.
> $$
>
> Para $a=-2/3$ y $b\ne-4/3$, la ecuación $0=b+4/3$ es contradictoria. Por tanto, los valores que permiten la combinación son
>
> $$
> \boxed{a\ne-\frac23\ \text{con cualquier }b,
> \quad\text{o bien}\quad a=-\frac23,\ b=-\frac43.}
> $$

> [!recuerda]- Comprobación
> Sustituye cada familia en las tres ecuaciones originales para los coeficientes. En el caso general, las coordenadas obtenidas son $a(r+2u)=-a$, $r+s-u=1$ y $2a+(3a+2)u=b$. Para $a=0$ se obtiene $(0,1,2u)=(0,1,b)$; para $a=-2/3$, la tercera coordenada queda siempre $-4/3$, cualquiera que sea $q$.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - combinaciones-lineales
  - parámetros
---
> [!note] Pregunta
> Al decidir pertenencia con parámetros, ¿cómo se trata una ecuación $c(a)u=d(a,b)$?
===
> [!important] Respuesta
> Se separa $c(a)\ne0$, donde $u=d/c$, de $c(a)=0$. En este último caso debe cumplirse $d(a,b)=0$; si no, no hay combinación, y si sí, esa ecuación no restringe $u$.
```

### Ejercicio 75 · Pertenencia y casos especiales del parámetro 🤖

#### Enunciado

Determina los reales $t,k$ para los que[^75]

$$
(t,k,-t)\in\langle(1,t,1),(1,2t,-2),(-1,-t,t)\rangle
$$

en $\mathbb R^3$.

> [!resolucion]- Resolución
> Sean $r,s,u$ los coeficientes de los tres generadores. El sistema es
>
> $$
> \begin{cases}
> r+s-u=t,\\
> tr+2ts-tu=k,\\
> r-2s+tu=-t.
> \end{cases}
> $$
>
> De la primera, $r=t-s+u$. Sustituimos en las otras dos, sin dividir:
>
> $$
> ts=k-t^2,\qquad -3s+(t+1)u=-2t.
> $$
>
> Esta transformación es reversible al recuperar $r=t-s+u$.
>
> **Si $t\notin\{0,-1\}$**, se puede dividir sucesivamente por $t$ y por $t+1$. Para cualquier $k$,
>
> $$
> s=\frac{k-t^2}{t},\qquad
> u=\frac{3s-2t}{t+1}=\frac{3k-5t^2}{t(t+1)},\qquad r=t-s+u.
> $$
>
> Luego hay combinación para **todo $k$**.
>
> **Si $t=0$**, la primera ecuación reducida exige $k=0$. Para ese valor, la segunda es $u=3s$, y la primera original da $r=2s$. Todas las ternas
>
> $$
> (r,s,u)=(2q,q,3q),\qquad q\in\mathbb R,
> $$
>
> sirven. Si $k\ne0$, no hay combinación.
>
> **Si $t=-1$**, la primera ecuación reducida da $s=1-k$. La segunda se convierte en $-3s=2$, luego $s=-2/3$ y necesariamente $k=5/3$. Para ese valor, $u=q$ es libre y
>
> $$
> (r,s,u)=\left(q-\frac13,-\frac23,q\right),
> \qquad q\in\mathbb R.
> $$
>
> La condición de pertenencia queda, según el valor de $t$,
>
> $$
> \boxed{\begin{array}{ll}
> t\notin\{0,-1\}:& k\in\mathbb R,\\
> t=0:&k=0,\\
> t=-1:&k=5/3.
> \end{array}}
> $$

> [!recuerda]- Comprobación
> En el caso general, la segunda coordenada de la combinación es $t(r+2s-u)=t(t+s)=k$ y la tercera es $(r+s-u)-3s+(t+1)u=t-2t=-t$. Para $t=0$, cada terna $(2q,q,3q)$ produce cero. Para $t=-1$, sustituir $(q-1/3,-2/3,q)$ produce $(-1,5/3,1)$ para todo $q$.

## De generadores a ecuaciones e intersecciones

### Ejercicio 76 · Describir un subespacio de $\mathbb R^4$ 🤖

#### Enunciado

Sea[^76]

$$
V=\langle(2,2,4,-2),(2,-1,1,-5),(1,-2,-1,-4),(4,5,9,-3)\rangle
\subseteq\mathbb R^4.
$$

**a)** Describe $V$ mediante ecuaciones lineales, es decir, como el conjunto solución de un sistema. Usa esas ecuaciones para decidir si $(5,-4,1,-6)$ pertenece a $V$. ¿Y $(3,2,7,-4)$?

**b)** Sea

$$
W=\{(x,y,z,w)\in\mathbb R^4:3y-2z-w=0,\ x+7y-5z-w=0\}.
$$

Encuentra una familia finita que genere $V\cap W$, usando la respuesta anterior.

> [!resolucion]- Resolución
> **a)** Llamemos $v_1,v_2,v_3,v_4$ a los cuatro vectores dados. Los dos últimos se pueden expresar mediante los dos primeros:
>
> $$
> v_3=v_2-\frac12v_1,\qquad
> v_4=\frac{7v_1-v_2}{3}
> $$
>
> Por estas igualdades, cualquier combinación de los cuatro vectores puede escribirse usando sólo $v_1,v_2$. A su vez, toda combinación de $v_1,v_2$ pertenece a $V$, porque ambos son generadores originales. Por tanto, $V=\langle v_1,v_2\rangle$.[^generado]
>
> Una combinación de ellos tiene coordenadas
>
> $$
> (x,y,z,w)=rv_1+sv_2=(2r+2s,2r-s,4r+s,-2r-5s).
> $$
>
> Al sumar las primeras dos coordenadas se obtiene $z=x+y$; al formar $-2x+y$ se obtiene $w=-2x+y$. Todo vector de $V$ satisface, por tanto,
>
> $$
> z-x-y=0,\qquad w+2x-y=0.
> $$
>
> Para que estas ecuaciones describan todo $V$, también debe poder reconstruirse cualquier solución como combinación de $v_1,v_2$. Si $(x,y,z,w)$ las cumple, tomamos
>
> $$
> r=\frac{x+2y}{6},\qquad s=\frac{x-y}{3}.
> $$
>
> Con esos coeficientes, las dos primeras coordenadas de $rv_1+sv_2$ son $2r+2s=x$ y $2r-s=y$. Las otras dos son $x+y=z$ y $-2x+y=w$. Así se recupera el vector completo y se obtiene
>
> $$
> \boxed{V=\{(x,y,z,w)\in\mathbb R^4:z=x+y,\ w=-2x+y\}.}
> $$
>
> Para $(5,-4,1,-6)$, se cumple $z=x+y=1$, pero $-2x+y=-14\ne-6$. **No pertenece.** Para $(3,2,7,-4)$, se cumple $w=-2x+y=-4$, pero $x+y=5\ne7$. **Tampoco pertenece.** Cada vector cumple sólo una de las dos ecuaciones necesarias.
>
> **b)** En la [[Matemáticas/Álgebra lineal/Espacios vectoriales/08 Suma, intersección y suma directa|intersección]] deben cumplirse simultáneamente las condiciones de $V$ y de $W$.[^interseccion] Sustituimos $z=x+y$ y $w=-2x+y$ en las ecuaciones de $W$:
>
> $$
> 3y-2(x+y)-(-2x+y)=0,
> $$
>
> que es una identidad, y
>
> $$
> x+7y-5(x+y)-(-2x+y)=-2x+y=0.
> $$
>
> Así, $y=2x$, $z=3x$ y $w=0$. Todo vector de la intersección es $x(1,2,3,0)$. Recíprocamente, cualquier múltiplo de $(1,2,3,0)$ satisface las dos ecuaciones de $V$ y las dos de $W$, de modo que pertenece a la intersección. Por tanto,
>
> $$
> \boxed{V\cap W=\langle(1,2,3,0)\rangle.}
> $$

> [!recuerda]- Comprobación
> Sustituye los cuatro generadores originales en $z=x+y$ y $w=-2x+y$. Para el generador de la intersección, verifica las dos ecuaciones de $W$: $6-6-0=0$ y $1+14-15-0=0$. También se reconstruye desde los primeros generadores como $(5/6)v_1-(1/3)v_2=(1,2,3,0)$.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - espacio-generado
---
> [!note] Pregunta
> ¿Qué dos pasos prueban que unas ecuaciones describen exactamente el subespacio generado por una familia?
===
> [!important] Respuesta
> Probar que toda combinación satisface las ecuaciones y que toda solución de las ecuaciones se reconstruye como combinación. La primera inclusión sólo da condiciones necesarias.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - intersección
---
> [!note] Pregunta
> ¿Cómo se calcula $U\cap W$ cuando ambos subespacios están descritos por ecuaciones homogéneas?
===
> [!important] Respuesta
> Se imponen simultáneamente todas las ecuaciones de ambos. Se resuelve el sistema conjunto y se separan los parámetros libres para escribir todas sus soluciones como combinaciones de una familia finita.
```

### Ejercicio 77 · Ecuaciones e intersección en un espacio de matrices 🤖

#### Enunciado

En $M_2(\mathbb R)$, sea[^77]

$$
V=\left\langle
\begin{pmatrix}-1&1\\2&1\end{pmatrix},
\begin{pmatrix}5&-1\\1&2\end{pmatrix}
\right\rangle.
$$

**a)** Describe $V$ mediante condiciones sobre las entradas de sus matrices.

**b)** Sea

$$
W=\left\{\begin{pmatrix}x&y\\z&w\end{pmatrix}\in M_2(\mathbb R):x+2y-2w=0\right\}.
$$

Encuentra una familia finita que genere $V\cap W$, usando la respuesta anterior.

> [!resolucion]- Resolución
> Sean $M_1,M_2$ las dos matrices generadoras, en ese orden.
>
> **a)** La combinación $rM_1+sM_2$, con $r,s\in\mathbb R$, es
>
> $$
> \begin{pmatrix}x&y\\z&w\end{pmatrix}
> =\begin{pmatrix}-r+5s&r-s\\2r+s&r+2s\end{pmatrix}.
> $$
>
> De las dos primeras entradas, $x+y=4s$ y $r=y+s$. Por tanto,
>
> $$
> s=\frac{x+y}{4},\qquad r=\frac{x+5y}{4}.
> $$
>
> Sustituir estos valores en $z=2r+s$ y $w=r+2s$ da las condiciones necesarias
>
> $$
> 4z=3x+11y,\qquad4w=3x+7y.
> $$
>
> Recíprocamente, sea una matriz cuyas entradas satisfacen esas dos condiciones. Los coeficientes obtenidos de sus entradas superiores permiten reconstruirla:
>
> $$
> r=\frac{x+5y}{4},\qquad s=\frac{x+y}{4}.
> $$
>
> En $rM_1+sM_2$, las entradas superiores son entonces $x,y$. Las inferiores valen $(3x+11y)/4=z$ y $(3x+7y)/4=w$ por las condiciones supuestas. Se recuperan las cuatro entradas, y por tanto
>
> $$
> \boxed{V=\left\{\begin{pmatrix}x&y\\z&w\end{pmatrix}:
> 4z-3x-11y=0,\ 4w-3x-7y=0\right\}.}
> $$
>
> **b)** Añadimos la condición de $W$. Como $w=(3x+7y)/4$ en $V$,
>
> $$
> x+2y-2w
> =x+2y-\frac{3x+7y}{2}=-\frac{x+3y}{2}.
> $$
>
> Por tanto, dentro de $V$ la condición de $W$ equivale a $x=-3y$. Las demás entradas quedan $z=y/2$ y $w=-y/2$. Toda matriz de la intersección tiene la forma
>
> $$
> \begin{pmatrix}-3y&y\\y/2&-y/2\end{pmatrix}
> =-\frac{y}{2}\begin{pmatrix}6&-2\\-1&1\end{pmatrix}.
> $$
>
> Recíprocamente, la matriz generadora
>
> $$
> H=\begin{pmatrix}6&-2\\-1&1\end{pmatrix}
> $$
>
> satisface las dos ecuaciones de $V$ y la de $W$; cualquier múltiplo también las satisface, al ser homogéneas. Así,
>
> $$
> \boxed{V\cap W=\left\langle\begin{pmatrix}6&-2\\-1&1\end{pmatrix}\right\rangle.}
> $$

> [!recuerda]- Comprobación
> En a), sustituye cada generador en las dos ecuaciones: para $M_1$ se obtienen $8+3-11=0$ y $4+3-7=0$; para $M_2$, $4-15+11=0$ y $8-15+7=0$. En b), $H=M_2-M_1$ y $6+2(-2)-2(1)=0$. La combinación y la condición verifican por separado su pertenencia a $V$ y a $W$.

## 📚 Fuentes

- FCUL, *ALGA 2026/2027 — Exercícios: Enunciados para as aulas teórico-práticas*, fascículo 1–90, pp. 18–20, ejercicios 66–77.
- [[Matemáticas/Álgebra lineal/Espacios vectoriales/03 Combinaciones lineales y espacio generado|Combinaciones lineales y espacio generado]]: definición, pertenencia, comparación de generados, espacios fila y columna, paso entre generadores y ecuaciones.
- [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales|Sistemas de ecuaciones lineales]]: igualdad por coordenadas, eliminación y casos de compatibilidad.
- [[Matemáticas/Álgebra lineal/Espacios vectoriales/08 Suma, intersección y suma directa|Suma, intersección y suma directa]]: pertenencia simultánea y cálculo de intersecciones.
- [[Matemáticas/Preuniversitario/1 Bachillerato/05 Trigonometría/04 Identidades y ecuaciones trigonométricas — ampliación|Identidades y ecuaciones trigonométricas]], apartados «Suma y diferencia de ángulos» y «Ángulo doble y ángulo mitad»: identidad empleada en 69 a).

[^66]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 18, ejercicio 66, apartados a–k. En k), la tercera coordenada de $u$ es $5/\sqrt2$ y el factor $1/5$ multiplica toda la terna que define $v$.
[^67]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 18, ejercicio 67, apartados a–d.
[^68]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 18, ejercicio 68, apartados a–c.
[^69]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 18, ejercicio 69, apartados a–b.
[^70]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 19, ejercicio 70.
[^71]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 19, ejercicio 71, apartados a–o.
[^72]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 19, ejercicio 72, apartados a–d.
[^73]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 19, ejercicio 73, apartados a–b. $C(A)$ y $L(B)$ se conservan como notación de espacio columna y espacio fila.
[^74]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 19, ejercicio 74.
[^75]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 20, ejercicio 75.
[^76]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 20, ejercicio 76, apartados a–b y los dos vectores que deben comprobarse en a).
[^77]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 20, ejercicio 77, apartados a–b.
[^generado]: Premisas consultadas en *Combinaciones lineales y espacio generado*: combinaciones con coeficientes del cuerpo, pertenencia como compatibilidad de un sistema, criterio de igualdad por las dos inclusiones, eliminación de generadores redundantes y descripción paramétrica e implícita. Las identidades de los problemas se comprueban por coordenadas, coeficientes, entradas o valores de funciones, según el objeto.
[^sistemas]: Premisas consultadas en *Sistemas de ecuaciones lineales*, rama *Álgebra*: operaciones reversibles, contradicciones, variables libres y discusión antes de dividir por un parámetro.
[^interseccion]: Premisas consultadas en *Suma, intersección y suma directa*: $U\cap W$ está formado por los vectores que pertenecen simultáneamente a ambos subespacios, por lo que se reúnen sus ecuaciones.
[^trigonometria]: Premisa consultada en *Identidades y ecuaciones trigonométricas*, apartados 2–3: $\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta$ y su especialización $\alpha=\beta=x$.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como profesor de Álgebra Lineal de primer curso. Propón un ejercicio de 66–77 y pide primero escribir la igualdad que define la pertenencia. En vectores, compara todas las coordenadas; en polinomios, incluye los coeficientes nulos y el término independiente; en matrices, verifica todas las entradas. En funciones, exige coeficientes constantes y una identidad válida para todo real.

Para comparar espacios generados, pide las dos inclusiones o un vector concreto que refute una. En 74 y 75, exige separar los ceros de cada posible divisor antes de dividir y comprobar que se han cubierto todos los valores del parámetro. En 76 y 77, pide demostrar que las ecuaciones son necesarias y suficientes; después, impón simultáneamente las condiciones de ambos subespacios para calcular la intersección.

Comprueba la respuesta por sustitución en el enunciado. Si hay un error, permite corregir la primera inferencia que falla antes de mostrar el resto. Formula una pregunta cada vez, espera mi respuesta y adapta la dificultad mediante recuperación activa y repetición espaciada.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
