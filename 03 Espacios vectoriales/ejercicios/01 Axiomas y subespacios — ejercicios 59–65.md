---
title: Ejercicios 59–65 — axiomas y subespacios
asignatura: Álgebra Lineal y Geometría Analítica
capa: curricular
tipo:
  - ejercicios
  - preparatoria
nivel: universitario-introductorio
estado: revisado
fsrs_goal: Comprueba estructuras vectoriales con sus ocho axiomas, justifica las tres cancelaciones y decide si conjuntos de vectores, matrices, polinomios y funciones son subespacios mediante cierre o contraejemplos explícitos.
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/01 Espacios vectoriales y axiomas|Espacios vectoriales y axiomas]]"
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/02 Propiedades derivadas de los axiomas|Propiedades derivadas de los axiomas]]"
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/03 Subespacios y espacio generado|Subespacios y espacio generado]]"
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
  - ejercicios
  - fcul
---

# Axiomas y subespacios · ejercicios 59–65

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

Cambiar las operaciones obliga a comprobar la estructura completa de un [[Matemáticas/Álgebra lineal/Espacios vectoriales/01 Espacios vectoriales — definición y axiomas|espacio vectorial]]. Cuando las operaciones son las de un espacio conocido, el [[Matemáticas/Álgebra lineal/Espacios vectoriales/02 Subespacios vectoriales|criterio de subespacio]] reduce el trabajo a tres preguntas: ¿pertenece el vector cero?, ¿la suma conserva la condición?, ¿la conserva cualquier multiplicación por un escalar del cuerpo fijado?[^axiomas][^subespacios]

> [!tip] Procedencia de las respuestas
> 🤖 identifica las resoluciones y comprobaciones propias. Los enunciados proceden del boletín de FCUL. La marca «S» del original remite a una ficha separada; la versión disponible de esa ficha corresponde a ejercicios anteriores.

## Operaciones y cancelación

### Ejercicio 59 · Comprobar las operaciones dadas 🤖

#### Enunciado

Decide si cada conjunto, con las operaciones indicadas, es un espacio vectorial real.[^59]

**a)** $\mathbb R^+=(0,\infty)$, con

$$
x\oplus y=xy,\qquad \alpha\otimes x=x^\alpha
\quad(x,y>0,\ \alpha\in\mathbb R).
$$

**b)** $\mathbb R$, con suma usual y $\alpha\otimes x=\alpha^2x$, para $x,\alpha\in\mathbb R$.

**c)** $\mathbb R^2$, con suma usual y $\alpha\otimes(x,y)=(\alpha x,0)$, para $x,y,\alpha\in\mathbb R$.

**d)** $\mathbb R^2$, con suma usual y $\alpha\otimes(x,y)=(\alpha x,y)$, para $x,y,\alpha\in\mathbb R$.

**e)** El conjunto $\mathbb R^{\mathbb N}$ de todas las sucesiones reales, con

$$
(x_n)_{n\in\mathbb N}+(y_n)_{n\in\mathbb N}=(x_n+y_n)_{n\in\mathbb N},
\qquad
\alpha(x_n)_{n\in\mathbb N}=(\alpha x_n)_{n\in\mathbb N}.
$$

> [!resolucion]- Resolución
> **a) Sí.** Las dos operaciones devuelven números positivos: $xy>0$ para $x,y>0$, y $x^\alpha>0$ para cualquier $\alpha\in\mathbb R$. La positividad de la base garantiza además que la potencia real esté definida. Fijemos $x,y,z>0$ y $\alpha,\beta\in\mathbb R$ para comprobar los axiomas. Respecto de la suma vectorial:
>
> 1. **Conmutatividad:** $x\oplus y=xy=yx=y\oplus x$.
> 2. **Asociatividad:** $(x\oplus y)\oplus z=(xy)z=x(yz)=x\oplus(y\oplus z)$.
> 3. **Neutro:** es $1$, pues $x\oplus1=x\cdot1=x$. Por tanto, $0_V=1$.
> 4. **Opuesto:** es $1/x$, que pertenece a $\mathbb R^+$ y satisface $x\oplus(1/x)=1=0_V$.
>
> Para las cuatro propiedades de la multiplicación escalar se aplican las leyes de las potencias de base positiva:[^potencias]
>
> **Distributividad respecto de los vectores:**
>
> $$
> \alpha\otimes(x\oplus y)=(xy)^\alpha=x^\alpha y^\alpha=(\alpha\otimes x)\oplus(\alpha\otimes y).
> $$
>
> **Distributividad respecto de los escalares:**
>
> $$
> (\alpha+\beta)\otimes x=x^{\alpha+\beta}=x^\alpha x^\beta=(\alpha\otimes x)\oplus(\beta\otimes x).
> $$
>
> **Compatibilidad con el producto de escalares:**
>
> $$
> \alpha\otimes(\beta\otimes x)=(x^\beta)^\alpha=x^{\alpha\beta}=(\alpha\beta)\otimes x.
> $$
>
> **Acción del escalar unidad:**
>
> $$
> 1\otimes x=x^1=x.
> $$
>
> Por tanto, $\mathbb R^+$ con estas operaciones es un espacio vectorial real cuyo vector cero es el número $1$.
>
> **b) No.** Falla la distributividad respecto de la suma de escalares. Con $\alpha=\beta=1$ y $x=1$,
>
> $$
> (1+1)\otimes1=2^2\cdot1=4,
> \qquad (1\otimes1)+(1\otimes1)=1+1=2.
> $$
>
> **c) No.** El escalar $1$ no conserva todos los vectores: $1\otimes(0,1)=(0,0)\ne(0,1)$. Falla el axioma $1u=u$.
>
> **d) No.** De nuevo falla la distributividad respecto de la suma de escalares. Para $u=(0,1)$ y $\alpha=\beta=1$,
>
> $$
> (1+1)\otimes u=(0,1),
> \qquad (1\otimes u)+(1\otimes u)=(0,2).
> $$
>
> **e) Sí.** Sumar dos sucesiones o multiplicar una por un real produce otra sucesión real, sin ninguna condición de convergencia. Sean $X=(x_n)$, $Y=(y_n)$, $Z=(z_n)$ y $\alpha,\beta\in\mathbb R$. Dos sucesiones son iguales si lo son sus términos para todo $n\in\mathbb N$. Para un índice arbitrario $n$:
>
> 1. $(X+Y)_n=x_n+y_n=y_n+x_n=(Y+X)_n$.
> 2. $((X+Y)+Z)_n=(x_n+y_n)+z_n=x_n+(y_n+z_n)=(X+(Y+Z))_n$.
> 3. La sucesión $O=(0)_{n\in\mathbb N}$ cumple $(X+O)_n=x_n+0=x_n$.
> 4. La sucesión $-X=(-x_n)$ cumple $(X+(-X))_n=x_n-x_n=0=O_n$.
> 5. $(\alpha(X+Y))_n=\alpha(x_n+y_n)=\alpha x_n+\alpha y_n=(\alpha X+\alpha Y)_n$.
> 6. $((\alpha+\beta)X)_n=(\alpha+\beta)x_n=\alpha x_n+\beta x_n=(\alpha X+\beta X)_n$.
> 7. $(\alpha(\beta X))_n=\alpha(\beta x_n)=(\alpha\beta)x_n=((\alpha\beta)X)_n$.
> 8. $(1X)_n=1x_n=x_n$.
>
> Cada paso usa una propiedad de los números reales. Al valer para todo índice, las ocho igualdades son igualdades de sucesiones. Así, $\mathbb R^{\mathbb N}$ es un espacio vectorial real.[^axiomas]

> [!recuerda]- Comprobación
> En a), las identidades $0\otimes x=x^0=1=0_V$ y $(-1)\otimes x=x^{-1}$ recuperan el neutro y el opuesto. Los fallos de b–d se localizan, respectivamente, en $4\ne2$, $(0,0)\ne(0,1)$ y $(0,1)\ne(0,2)$ al aplicar las operaciones definidas.
>
> En e), el índice $n$ es arbitrario: cada identidad debe valer en todos los términos de la sucesión. Las verificaciones sólo usan operaciones entre números reales y se aplican a sucesiones convergentes y a sucesiones que no convergen.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - espacios-vectoriales
---
> [!note] Pregunta
> ¿Qué debe comprobarse para afirmar que un conjunto con operaciones nuevas es un espacio vectorial?
===
> [!important] Respuesta
> El cierre de ambas operaciones y los ocho axiomas: conmutatividad y asociatividad de la suma, neutro y opuestos, dos distributividades, compatibilidad del producto escalar y $1u=u$.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - espacios-vectoriales
---
> [!note] Pregunta
> ¿Cuál es el vector cero en $\mathbb R^+$ con $x\oplus y=xy$ y $\alpha\otimes x=x^\alpha$?
===
> [!important] Respuesta
> Es $1$, porque $x\oplus1=x\cdot1=x$ para todo $x>0$.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - espacios-vectoriales
---
> [!note] Pregunta
> ¿Cuál es el opuesto de $x>0$ en la suma vectorial $x\oplus y=xy$ de $\mathbb R^+$?
===
> [!important] Respuesta
> Es $1/x$, porque $x\oplus(1/x)=1$ y $1$ es el neutro de esa suma.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - espacios-vectoriales
---
> [!note] Pregunta
> ¿Cómo se comprueban los axiomas en el conjunto de todas las sucesiones reales con operaciones término a término?
===
> [!important] Respuesta
> Se fija un índice arbitrario y se demuestra allí cada igualdad mediante las leyes del cuerpo. Como vale para todo índice, las sucesiones son iguales; no se exige convergencia.
```

### Ejercicio 60 · Tres leyes de cancelación 🤖

#### Enunciado

Sea $V$ un espacio vectorial sobre $K$, con $u,v,w\in V$ y $\alpha,\beta\in K$. Demuestra:[^60]

**a)** Si $u+w=v+w$, entonces $u=v$.

**b)** Si $\alpha u=\alpha v$ y $\alpha\ne0$, entonces $u=v$.

**c)** Si $\alpha u=\beta u$ y $u\ne0_V$, entonces $\alpha=\beta$.

> [!demostracion]- Demostración
> **a)** Sumamos el opuesto $-w$ a ambos miembros. La asociatividad permite reagrupar $w+(-w)=0_V$ y la propiedad del neutro da
>
> $$
> (u+w)+(-w)=u+(w-w)=u,
> \qquad (v+w)+(-w)=v.
> $$
>
> La igualdad inicial se reduce así a $u=v$.
>
> **b)** La hipótesis $\alpha\ne0_K$ garantiza que existe $\alpha^{-1}\in K$. Multiplicamos la igualdad por ese escalar. La compatibilidad del producto escalar y $1_Ku=u$ dan
>
> $$
> \alpha^{-1}(\alpha u)=(\alpha^{-1}\alpha)u=u,
> \qquad \alpha^{-1}(\alpha v)=v.
> $$
>
> Al multiplicar por $\alpha^{-1}$, la igualdad se reduce a $u=v$.
>
> **c)** Restando $\beta u$ y usando la distributividad respecto de los escalares se obtiene $(\alpha-\beta)u=0_V$. La propiedad de producto nulo en un espacio vectorial afirma que el escalar es cero o el vector es cero. Como $u\ne0_V$, debe ser $\alpha-\beta=0_K$, es decir, $\alpha=\beta$.[^axiomas]

> [!recuerda]- Comprobación
> Las hipótesis de b) y c) son necesarias: si $\alpha=0_K$, entonces $\alpha u=\alpha v$ para cualesquiera $u,v$; si $u=0_V$, entonces $\alpha u=\beta u$ para cualesquiera $\alpha,\beta$. En ambos casos se pierde la conclusión de cancelación.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - espacios-vectoriales
---
> [!note] Pregunta
> ¿Qué operación justifica pasar de $u+w=v+w$ a $u=v$ en un espacio vectorial?
===
> [!important] Respuesta
> Sumar $-w$ a ambos miembros, reagrupar por asociatividad y usar $w-w=0_V$ y el neutro aditivo.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - espacios-vectoriales
---
> [!note] Pregunta
> ¿Cuándo permite $\alpha u=\alpha v$ concluir $u=v$ y por qué?
===
> [!important] Respuesta
> Si $\alpha\ne0_K$: existe $\alpha^{-1}$ y multiplicar por él recupera $u=v$. Con $\alpha=0_K$ la igualdad se cumple para todos $u,v$.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - espacios-vectoriales
---
> [!note] Pregunta
> ¿Por qué $\alpha u=\beta u$ con $u\ne0_V$ implica $\alpha=\beta$?
===
> [!important] Respuesta
> Porque $(\alpha-\beta)u=0_V$ y la propiedad de producto nulo fuerza $\alpha-\beta=0_K$ al ser $u\ne0_V$.
```

## Subespacios de coordenadas y matrices

### Ejercicio 61 · Condiciones en $\mathbb R^3$ 🤖

#### Enunciado

Decide, justificando cada caso, cuáles de los siguientes conjuntos son subespacios del espacio vectorial real $\mathbb R^3$:[^61]

**a)** $V_1=\{(x,y,z):x-y+z=0\}$.

**b)** $V_2=\{(x,y,z):x-y+z=0,\ x+y-2z=0\}$.

**c)** $V_3=\{(x,y,z):x-y+z=0,\ x+y-2z=1\}$.

**d)** $V_4=\{(x,y,z):x\in\mathbb Q\}$.

**e)** $V_5=\{(x,y,z):|x|=|y|\}$.

**f)** $V_6=\{(x,y,z):xy\ge0\}$.

**g)** $V_7=\{(0,a,b):a,b\in\mathbb R\}$.

**h)** $V_8=\{(1,a,b):a,b\in\mathbb R\}$.

**i)** $V_9=\{(0,0,0),(0,1,0),(0,-1,0)\}$.

**j)** $V_{10}=\{(2a,b,-3a):a,b\in\mathbb R\}$.

**k)** $V_{11}=\{(x,y,z):x+2y=0\ \wedge\ z=0\}$.

**l)** $V_{12}=\{(x,y,z):x+2y=0\ \vee\ z=0\}$.

En todos los casos las coordenadas no restringidas son reales. Los símbolos $\wedge$ y $\vee$ significan «y» y «o», respectivamente.

> [!resolucion]- Resolución
> Las ecuaciones lineales homogéneas se conservan al combinar dos soluciones. Si $L$ representa su miembro izquierdo y $L(u)=L(v)=0$, entonces, para $\lambda,\mu\in\mathbb R$,
>
> $$
> L(\lambda u+\mu v)=\lambda L(u)+\mu L(v)=0.
> $$
>
> El vector cero también satisface la ecuación. Cuando se exigen varias ecuaciones a la vez, este argumento se aplica a cada una.[^subespacios]
>
> **a) Sí.** Para $L(x,y,z)=x-y+z$, el argumento anterior prueba el cierre; $(0,0,0)$ cumple $L=0$.
>
> **b) Sí.** Se aplica a $L_1=x-y+z$ y $L_2=x+y-2z$. La suma y cualquier múltiplo conservan las dos igualdades a la vez, y cero cumple ambas.
>
> **c) No.** Cero incumple $x+y-2z=1$.
>
> **d) No.** $(1,0,0)\in V_4$, pero $\sqrt2(1,0,0)=(\sqrt2,0,0)\notin V_4$. El cuerpo es $\mathbb R$, por lo que también se exige cierre bajo escalares irracionales.
>
> **e) No.** Los vectores $(1,1,0)$ y $(1,-1,0)$ cumplen $|x|=|y|$, pero su suma $(2,0,0)$ no la cumple.
>
> **f) No.** $(2,1,0)$ y $(-1,-2,0)$ pertenecen, porque sus productos $xy$ valen $2$. La suma $(1,-1,0)$ tiene producto $-1<0$.
>
> **g) Sí.** Contiene cero. Para cualesquiera $a,b,c,d,\lambda,\mu\in\mathbb R$,
>
> $$
> \lambda(0,a,b)+\mu(0,c,d)=(0,\lambda a+\mu c,\lambda b+\mu d),
> $$
>
> que vuelve a tener la forma exigida.
>
> **h) No.** Cero no tiene primera coordenada $1$.
>
> **i) No.** $(0,1,0)\in V_9$, pero $2(0,1,0)=(0,2,0)$ no es ninguno de sus tres elementos.
>
> **j) Sí.** Con $a=b=0$ se obtiene cero. Para dos elementos y dos escalares,
>
> $$
> \lambda(2a,b,-3a)+\mu(2c,d,-3c)
> =\bigl(2(\lambda a+\mu c),\lambda b+\mu d,-3(\lambda a+\mu c)\bigr).
> $$
>
> Es otro elemento de $V_{10}$, con parámetros $\lambda a+\mu c$ y $\lambda b+\mu d$.
>
> **k) Sí.** Las condiciones $x+2y=0$ y $z=0$ son lineales homogéneas y deben cumplirse simultáneamente; se aplica el criterio de b).
>
> **l) No.** Sean $u=(-2,1,1)$ y $v=(1,0,0)$. El primero cumple $x+2y=0$; el segundo cumple $z=0$. Ambos pertenecen a $V_{12}$. Sin embargo, $u+v=(-1,1,1)$ satisface $x+2y=1\ne0$ y $z=1\ne0$, de modo que no cumple ninguna de las dos alternativas.
>
> En conclusión, son subespacios exactamente $V_1,V_2,V_7,V_{10},V_{11}$.

> [!recuerda]- Comprobación
> En las fórmulas de cierre de los casos afirmativos, $\lambda=\mu=1$ produce la suma y $\mu=0$ produce cualquier múltiplo escalar. En cada contraejemplo hay dos comprobaciones: que el vector de partida pertenece y que el resultado de la operación queda fuera. Así, $V_9$ contiene cero y $(0,1,0)$, pero no contiene $2(0,1,0)=(0,2,0)$: la pertenencia de cero por sí sola no garantiza el cierre.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - subespacios
---
> [!note] Pregunta
> ¿Qué tres condiciones permiten comprobar que $U\subseteq V$ es subespacio sobre $K$?
===
> [!important] Respuesta
> $0_V\in U$, cierre de $u+v$ para $u,v\in U$ y cierre de $\lambda u$ para todo $\lambda\in K$ y $u\in U$. Para refutarlo basta que falle una condición.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - subespacios
---
> [!note] Pregunta
> ¿Por qué el conjunto de soluciones de varias ecuaciones lineales homogéneas es un subespacio?
===
> [!important] Respuesta
> Cero satisface todas; cada miembro izquierdo $L$ cumple $L(\lambda u+\mu v)=\lambda L(u)+\mu L(v)=0$ si $u,v$ son soluciones. Así se conservan simultáneamente todas las ecuaciones.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - subespacios
---
> [!note] Pregunta
> Si dos condiciones lineales homogéneas definen subespacios, ¿qué diferencia hay entre exigirlas con «y» y con «o»?
===
> [!important] Respuesta
> «Y» define su intersección, que es subespacio. «O» define su unión, que puede fallar el cierre bajo suma: un sumando puede cumplir sólo una condición y el otro sólo la otra.
```

### Ejercicio 62 · Restricciones sobre entradas de matrices 🤖

#### Enunciado

En el espacio vectorial real $M_3(\mathbb R)$, decide cuáles de estos conjuntos son subespacios:[^62]

**a)**

$$
W_1=\left\{\begin{pmatrix}0&x&y\\-x&2y&0\\2x&0&-y\end{pmatrix}:x,y\in\mathbb R\right\}.
$$

**b)**

$$
W_2=\left\{\begin{pmatrix}0&x&y\\-x&2y&1\\2x&0&-y\end{pmatrix}:x,y\in\mathbb R\right\}.
$$

**c)** $W_3=\{[a_{ij}]\in M_3(\mathbb R):a_{11}+a_{23}=0,\ a_{21}-5a_{33}=0\}$.

**d)** $W_4=\{[a_{ij}]\in M_3(\mathbb R):a_{11}=a_{12}=a_{13}\}$.

**e)** $W_5=\{[a_{ij}]\in M_3(\mathbb R):a_{21}\ge a_{23}\}$.

> [!resolucion]- Resolución
> **a) Sí.** Escribamos $A(x,y)$ para la matriz del enunciado. Se tiene $A(0,0)=0_{3\times3}$ y, comparando las nueve entradas,
>
> $$
> \lambda A(x,y)+\mu A(s,t)=A(\lambda x+\mu s,\lambda y+\mu t).
> $$
>
> Los nuevos parámetros $\lambda x+\mu s$ y $\lambda y+\mu t$ son reales, por lo que cualquier combinación de dos matrices de $W_1$ vuelve a pertenecer a $W_1$.
>
> **b) No.** Toda matriz del conjunto tiene entrada $(2,3)$ igual a $1$. La matriz cero no pertenece.
>
> **c) Sí.** Sean $A=[a_{ij}]$, $B=[b_{ij}]\in W_3$, $\lambda,\mu\in\mathbb R$ y $C=\lambda A+\mu B=[c_{ij}]$. Entonces
>
> $$
> c_{11}+c_{23}=\lambda(a_{11}+a_{23})+\mu(b_{11}+b_{23})=0,
> $$
>
> $$
> c_{21}-5c_{33}=\lambda(a_{21}-5a_{33})+\mu(b_{21}-5b_{33})=0.
> $$
>
> Cero también cumple las dos ecuaciones. Por tanto, es subespacio.
>
> **d) Sí.** La condición equivale a exigir simultáneamente $a_{11}-a_{12}=0$ y $a_{12}-a_{13}=0$. Son dos ecuaciones lineales homogéneas: la matriz cero las satisface y cualquier combinación de matrices que las cumplen vuelve a cumplirlas.
>
> **e) No.** La matriz
>
> $$
> E=\begin{pmatrix}0&0&0\\1&0&0\\0&0&0\end{pmatrix}
> $$
>
> pertenece, pues $1\ge0$. En $-E$, esas entradas son $-1$ y $0$, y $-1\not\ge0$. Falla el cierre por el escalar $-1$.
>
> Son subespacios exactamente $W_1,W_3,W_4$.[^subespacios]

> [!recuerda]- Comprobación
> En a), la igualdad $A(x,y)=xA(1,0)+yA(0,1)$ reconstruye cada matriz a partir de dos matrices fijas. En c–d, las restricciones se comprueban sustituyendo las entradas $c_{ij}=\lambda a_{ij}+\mu b_{ij}$ en cada ecuación. El fallo de e) aparece al multiplicar por $-1$, un escalar admitido en $\mathbb R$.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - subespacios
---
> [!note] Pregunta
> ¿Cómo se prueba el cierre de una familia matricial $A(s,t)$ que depende linealmente de sus parámetros?
===
> [!important] Respuesta
> Se comprueba por entradas que $\lambda A(s,t)+\mu A(u,v)=A(\lambda s+\mu u,\lambda t+\mu v)$; además se verifica $A(0,0)=0$. Los nuevos parámetros deben seguir en el cuerpo fijado.
```

### Ejercicio 63 · Antisimetría real y antihermiticidad compleja 🤖

#### Enunciado

Justifica si:[^63]

**a)** $V=\{A\in M_3(\mathbb R):A+A^T=0\}$ es subespacio real de $M_3(\mathbb R)$.

**b)** $W=\{A\in M_3(\mathbb C):A+\overline A^{\,T}=0\}$ es subespacio **complejo** de $M_3(\mathbb C)$.

La barra de b) conjuga las entradas; $\overline A^{\,T}$ es la [[Matemáticas/Álgebra lineal/Conjugada transpuesta de una matriz|conjugada transpuesta]] $A^*$. La condición $A^*=-A$ caracteriza las [[Matemáticas/Álgebra lineal/Matriz antihermítica|matrices antihermíticas]].[^antihermitica]

> [!resolucion]- Resolución
> **a) Sí.** La matriz cero satisface $0+0^T=0$. Sean $A,B\in V$ y $\lambda,\mu\in\mathbb R$. La transposición conserva sumas y escalares, de modo que
>
> $$
> (\lambda A+\mu B)+(\lambda A+\mu B)^T
> =\lambda(A+A^T)+\mu(B+B^T)=0.
> $$
>
> La combinación satisface la misma condición que $A$ y $B$. Así, las [[Matemáticas/Álgebra lineal/Matriz antisimétrica|matrices antisimétricas reales]] forman un subespacio.
>
> **b) No.** Consideremos $A=iI_3$. Como $A^*=-iI_3$, se cumple $A+A^*=0$ y $A\in W$. El escalar $i$ es admisible sobre $\mathbb C$, pero $iA=-I_3$. Para esa matriz,
>
> $$
> (-I_3)+(-I_3)^*=-2I_3\ne0.
> $$
>
> Luego $iA\notin W$: falla el cierre bajo escalares complejos. La causa es que $(\lambda A)^*=\overline\lambda A^*$, y la conjugación también afecta al escalar.[^antihermitica]
>
> Al considerar únicamente escalares reales, $W$ sí es un subespacio. La matriz cero pertenece y, para $A,B\in W$ y $r,s\in\mathbb R$, se tiene $\overline r=r$ y $\overline s=s$. Por ello,
>
> $$
> (rA+sB)+(rA+sB)^*=r(A+A^*)+s(B+B^*)=0.
> $$
>
> El cambio de cuerpo explica la diferencia entre las dos respuestas: el contraejemplo anterior necesita el escalar complejo $i$.

> [!recuerda]- Comprobación
> En a), escribe una matriz antisimétrica real como
>
> $$
> \begin{pmatrix}0&a&b\\-a&0&c\\-b&-c&0\end{pmatrix}.
> $$
>
> La suma y cualquier múltiplo real conservan esa forma. En b), la conjugación cambia las tres entradas diagonales de $iI_3$ de $i$ a $-i$, mientras que deja las de $-I_3$ iguales a $-1$. Por eso $iI_3$ satisface $A+A^*=0$ y $-I_3$ la incumple.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - subespacios
  - matrices
---
> [!note] Pregunta
> ¿Por qué las matrices con $A^*=-A$ forman un subespacio real pero no, en general, complejo?
===
> [!important] Respuesta
> La conjugada transpuesta satisface $(\lambda A)^*=\overline\lambda A^*$. Para escalares reales conserva la condición; para complejos puede fallar: $iI\in W$ pero $i(iI)=-I\notin W$.
```

## Polinomios y funciones

### Ejercicio 64 · Condiciones sobre coeficientes de polinomios 🤖

#### Enunciado

En $\mathbb R_3[x]$, el espacio real de polinomios de grado a lo sumo $3$, decide cuáles de estos conjuntos son subespacios:[^64]

**a)** $E_1=\{ax^3+bx^2+cx+d:2a-5c=0,\ b-c+d=0\}$.

**b)** $E_2=\{ax^3+bx^2+cx+d:2a-5c=-1,\ b-c+d=0\}$.

**c)** $E_3=\{ax^3+bx^2+cx+d:2a-5c\ge-1\}$.

**d)** $E_4=\{ax^3+bx^2+c:a,b,c\in\mathbb R\}$.

**e)** $E_5=\{ax^3+bx^2+x+c:a,b,c\in\mathbb R\}$.

Todos los coeficientes son reales. Dos polinomios son iguales cuando coinciden los coeficientes de cada potencia, completando con ceros las potencias ausentes; este criterio incluye el polinomio cero.[^64]

> [!resolucion]- Resolución
> **a) Sí.** Representemos cada polinomio por su lista de coeficientes $(a,b,c,d)$ en el orden $x^3,x^2,x,1$. La suma de polinomios suma esas listas y la multiplicación escalar multiplica cada coeficiente. Cero cumple las dos ecuaciones homogéneas. Si $p,q\in E_1$, los coeficientes de $\lambda p+\mu q$ cumplen
>
> $$
> 2(\lambda a_p+\mu a_q)-5(\lambda c_p+\mu c_q)
> =\lambda(2a_p-5c_p)+\mu(2a_q-5c_q)=0,
> $$
>
> y la misma distribución da cero en la condición $b-c+d=0$. Por tanto, es subespacio.
>
> **b) No.** En el polinomio cero, $2a-5c=0$, que no es $-1$. No contiene cero.
>
> **c) No.** El polinomio $p(x)=x^3$ pertenece, pues $2a-5c=2\ge-1$. Su múltiplo $-p(x)=-x^3$ da $-2<-1$, así que deja de pertenecer. Falla el cierre por $-1$.
>
> **d) Sí.** La condición es que el coeficiente de $x$ sea cero. El polinomio cero pertenece, y una combinación de dos polinomios de esa forma tiene la forma
>
> $$
> \lambda(ax^3+bx^2+c)+\mu(rx^3+sx^2+t)
> =(\lambda a+\mu r)x^3+(\lambda b+\mu s)x^2+(\lambda c+\mu t).
> $$
>
> Por tanto, sigue en $E_4$.
>
> **e) No.** El coeficiente de $x$ está fijado a $1$, así que el polinomio cero no pertenece. Por ejemplo, $x\in E_5$ pero $0x=0\notin E_5$.
>
> Son subespacios exactamente $E_1$ y $E_4$.[^subespacios]

> [!recuerda]- Comprobación
> Para a), las igualdades dan $a=5c/2$ y $d=c-b$, de donde
>
> $$
> p(x)=b(x^2-1)+c\left(\frac52x^3+x+1\right).
> $$
>
> Los coeficientes de esta expresión satisfacen $2a-5c=0$ y $b-c+d=0$. En d), el coeficiente de $x$ en una combinación es $\lambda\cdot0+\mu\cdot0=0$. Los fallos de b), c) y e) se comprueban en las restricciones de sus coeficientes, tal como están escritas en el enunciado.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - polinomios
---
> [!note] Pregunta
> ¿Cómo se convierte una igualdad de polinomios en un sistema lineal para hallar coeficientes de una combinación?
===
> [!important] Respuesta
> Se igualan los coeficientes de cada potencia en un mismo orden, completando con ceros las potencias ausentes. La igualdad debe cumplirse en todas las potencias, incluido el término independiente.
```

### Ejercicio 65 · Condiciones sobre funciones reales 🤖

#### Enunciado

Sea $\mathcal F(\mathbb R)$ el espacio real de todas las funciones $f:\mathbb R\to\mathbb R$, con suma y multiplicación escalar puntuales. Decide cuáles de los conjuntos siguientes son subespacios:[^65]

**a)** $F_1=\{f:\forall x\in\mathbb R,\ f(-x)=-f(x)\}$, las funciones impares.

**b)** $F_2=\{f:\forall x\in\mathbb R,\ f(x)=f(x+2\pi)\}$.

**c)** $F_3=\{f:f\text{ es derivable en }\mathbb R\}$.

**d)**

$$
F_4=\{f:f\text{ tiene segunda derivada en }\mathbb R,
\ \forall x\in\mathbb R,\ f''(x)-3f'(x)+2f(x)=0\}.
$$

Verifica también que $f(x)=ae^x+be^{2x}$ pertenece a $F_4$ para cualesquiera $a,b\in\mathbb R$.

**e)**

$$
F_5=\{f:f\text{ tiene segunda derivada en }\mathbb R,
\ \forall x\in\mathbb R,\ f''(x)-f'(x)+f(x)=\sin x\}.
$$

Verifica también que $f(x)=\cos x$ pertenece a $F_5$.

> [!advertencia] Período en el enunciado
> La glosa del PDF dice «período $\pi$», pero la fórmula de b) exige $f(x+2\pi)=f(x)$. Esa igualdad significa que $2\pi$ es un período; no exige que sea el período positivo mínimo. También la satisfacen la función cero y todas las funciones constantes.[^65]

> [!resolucion]- Resolución
> **a) Sí.** La función cero es impar. Sean $f,g\in F_1$, $\lambda,\mu\in\mathbb R$ y $h=\lambda f+\mu g$. Para cada real $x$,
>
> $$
> h(-x)=\lambda f(-x)+\mu g(-x)
> =-\lambda f(x)-\mu g(x)=-h(x).
> $$
>
> Así, $h$ es impar y se cumplen ambos cierres.
>
> **b) Sí.** Cero satisface la condición. Para $f,g\in F_2$ y $h=\lambda f+\mu g$,
>
> $$
> h(x+2\pi)=\lambda f(x+2\pi)+\mu g(x+2\pi)
> =\lambda f(x)+\mu g(x)=h(x)
> $$
>
> para todo $x$. Por tanto, $h\in F_2$.
>
> **c) Sí.** Cero es derivable. Si $f,g$ son derivables en todo $\mathbb R$, entonces $h=\lambda f+\mu g$ también lo es, con $h'=\lambda f'+\mu g'$. La linealidad de la derivada garantiza el cierre.[^derivadas]
>
> **d) Sí.** Cero tiene segunda derivada y cumple la ecuación. Si $f,g\in F_4$, entonces $h=\lambda f+\mu g$ tiene segunda derivada y
>
> $$
> h''-3h'+2h
> =\lambda(f''-3f'+2f)+\mu(g''-3g'+2g)=0.
> $$
>
> Esta igualdad se cumple en cada real $x$, de modo que $h\in F_4$.
>
> Para la función indicada,
>
> $$
> f'=ae^x+2be^{2x},\qquad f''=ae^x+4be^{2x}.
> $$
>
> Sustituyendo, los coeficientes de $ae^x$ y $be^{2x}$ son respectivamente $1-3+2=0$ y $4-6+2=0$. Por ello $f''-3f'+2f=0$ para todo $x$.
>
> **e) No.** La función cero tiene $f''-f'+f=0$, que no coincide con $\sin x$ para todo $x$; por ejemplo, en $x=\pi/2$ el miembro derecho vale $1$. Luego cero no pertenece y $F_5$ no es subespacio.
>
> La función propuesta sí pertenece: para $f=\cos x$ se tiene $f'=-\sin x$ y $f''=-\cos x$, luego
>
> $$
> f''-f'+f=-\cos x+\sin x+\cos x=\sin x.
> $$
>
> Son subespacios exactamente $F_1,F_2,F_3,F_4$.[^subespacios][^derivadas]

> [!recuerda]- Comprobación
> En a–b, las identidades se verifican para un $x$ arbitrario: evaluar unos pocos puntos no bastaría para probarlas. En d), prueba por separado $e^x$ y $e^{2x}$ y usa la linealidad para reconstruir $ae^x+be^{2x}$. En e), $2\cos x$ da $2\sin x$ al sustituir; en $x=\pi/2$ vale $2$ y no $1$, otro fallo explícito del cierre escalar.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - funciones
---
> [!note] Pregunta
> ¿Por qué una combinación lineal de dos funciones impares sigue siendo impar?
===
> [!important] Respuesta
> Si $f$ y $g$ están definidas en un mismo dominio simétrico respecto de cero y $h=\lambda f+\mu g$, su imparidad da $h(-x)=\lambda[-f(x)]+\mu[-g(x)]=-h(x)$ para todo $x$ del dominio. Por tanto, $h$ es impar.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - funciones
---
> [!note] Pregunta
> ¿Qué afirma $f(x+T)=f(x)$ para todo real $x$, con $T>0$? ¿Exige que $T$ sea mínimo?
===
> [!important] Respuesta
> Afirma que $T$ es un período de $f$; no exige que sea el menor período positivo. Las funciones constantes, incluida cero, satisfacen la identidad para todo $T>0$.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - funciones
---
> [!note] Pregunta
> ¿Por qué las funciones derivables en todo $\mathbb R$ forman un subespacio de $\mathcal F(\mathbb R)$?
===
> [!important] Respuesta
> Cero es derivable y cualquier combinación $\lambda f+\mu g$ de funciones derivables también lo es, con derivada $\lambda f'+\mu g'$.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - funciones
---
> [!note] Pregunta
> ¿Por qué las soluciones de $f''-3f'+2f=0$ forman un subespacio real de funciones?
===
> [!important] Respuesta
> Cero resuelve la ecuación y la derivada es lineal: al sustituir $h=\lambda f+\mu g$, el miembro izquierdo es la misma combinación de los miembros izquierdos de $f$ y $g$, por tanto cero.
```

Las condiciones de pertenencia se traducen también en preguntas sobre [[Matemáticas/Álgebra lineal/Espacios vectoriales/03 Combinaciones lineales y espacio generado|combinaciones lineales]]: qué elementos pueden construirse con una familia dada y cómo describir todos los resultados posibles.[^generado]

## 📚 Fuentes

- FCUL, *ALGA 2026/2027 — Exercícios: Enunciados para as aulas teórico-práticas*, fascículo 1–90, pp. 15–17, ejercicios 59–65; fascículo 1–60, p. 15, cotejo de los enunciados 59–60.
- [[Matemáticas/Álgebra lineal/Espacios vectoriales/01 Espacios vectoriales — definición y axiomas|Espacios vectoriales: definición y axiomas]], [[Matemáticas/Álgebra lineal/Espacios vectoriales/02 Subespacios vectoriales|Subespacios vectoriales]] y [[Matemáticas/Álgebra lineal/Espacios vectoriales/03 Combinaciones lineales y espacio generado|Combinaciones lineales y espacio generado]]: premisas algebraicas consultadas.
- [[Matemáticas/Álgebra lineal/Matriz antihermítica|Matriz antihermítica]]: condición $A^*=-A$ y conjugación del escalar.
- [[Matemáticas/Preuniversitario/1 Bachillerato/13 Derivada e iniciación al cálculo diferencial/01 Derivadas|Derivadas]], apartado «Reglas de derivación»: linealidad y reglas usadas en 65.
- [[Matemáticas/Preuniversitario/1 Bachillerato/10 Funciones elementales/04 Logaritmos y función exponencial|Logaritmos]], apartados «Definición formal y mapa de subapartados» y «Propiedades y cambio de base»: equivalencia exponencial-logarítmica y propiedades que respaldan las leyes de potencias reales de base positiva usadas en 59 a).

[^59]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 15, ejercicio 59, apartados a–e; mismo contenido matemático en 1–60, p. 15. En a), $\mathbb R^+$ denota los reales estrictamente positivos.
[^60]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 15, ejercicio 60, apartados a–c; cotejado con 1–60, p. 15.
[^61]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 16, ejercicio 61, apartados a–l.
[^62]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 16, ejercicio 62, apartados a–e.
[^63]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 16, ejercicio 63, apartados a–b. Se conserva la conjugación de b) y el cuerpo complejo de la pregunta.
[^64]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 17, observación «Sobre polinómios» y ejercicio 64, apartados a–e. La observación del boletín sobre grados iguales presupone expresiones de grado efectivo, con coeficientes principales no nulos. La comparación por coeficientes completa con ceros las potencias ausentes y también incluye el polinomio cero.
[^65]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 17, ejercicio 65, apartados a–e y las dos verificaciones de las notas. En b) se sigue la fórmula $f(x+2\pi)=f(x)$ frente a la glosa discordante «período $\pi$».
[^axiomas]: Premisas consultadas en *Espacios vectoriales: definición y axiomas*: ocho axiomas, igualdad componente a componente, distinción entre cuerpo y vectores, cancelación y producto nulo.
[^potencias]: Premisas consultadas en *Logaritmos*, lección curricular de 1.º de Bachillerato, apartados «Definición formal y mapa de subapartados» y «Propiedades y cambio de base»: la exponencial y el logaritmo son inversas, y para argumentos positivos $\ln(xy)=\ln x+\ln y$ y $\ln(x^r)=r\ln x$. Estas propiedades justifican las identidades de potencias reales aplicadas con $x,y>0$ en 59 a).
[^subespacios]: Premisas consultadas en *Subespacios vectoriales*: cero y cierre bajo combinaciones lineales, soluciones de ecuaciones homogéneas e intersección frente a unión.
[^antihermitica]: Premisas consultadas en *Matriz antihermítica*: $A^*=(\overline A)^T$ y $(\lambda A)^*=\overline\lambda A^*$.
[^derivadas]: Premisas consultadas en *Derivadas*, lección curricular de 1.º de Bachillerato, apartado «Reglas de derivación»: suma, constante por función, cadena y derivadas de exponenciales, seno y coseno, aplicadas sucesivamente para la segunda derivada.
[^generado]: Premisas consultadas en *Combinaciones lineales y espacio generado*: una combinación lineal es una suma finita de múltiplos escalares de una familia.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como profesor de Álgebra Lineal de primer curso. Usa los ejercicios 59–65 y pide que decida qué condición comprobar antes de empezar a calcular. Si las operaciones cambian, exige comprobar el cierre y los ocho axiomas. Si son heredadas, pide identificar el vector cero y justificar los dos cierres, o construir un contraejemplo concreto. En el ejercicio 60, pregunta qué hipótesis permite cancelar y qué operación lo justifica.

En matrices, distingue transposición y conjugada transpuesta y fija siempre el cuerpo de escalares. En polinomios, compara todos los coeficientes; en funciones, exige identidades para todo real. En 65 b), conserva la condición escrita $f(x+2\pi)=f(x)$, sin exigir período mínimo, y pide verificar las dos funciones propuestas en 65 d–e.

Formula una pregunta cada vez y espera mi respuesta. Si hay un error, señala la primera inferencia que deba corregirse y permite que la revise antes de mostrar la solución completa. Usa recuperación activa y repetición espaciada, aumentando la dificultad cuando pueda justificar cada paso.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
