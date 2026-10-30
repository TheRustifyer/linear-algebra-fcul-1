---
title: Ejercicios 89–90 — dimensión, intersección y suma
asignatura: Álgebra Lineal y Geometría Analítica
capa: curricular
tipo:
  - ejercicios
  - preparatoria
nivel: universitario-introductorio
estado: revisado
fsrs_goal: Discute la dimensión y construye bases en todos los valores singulares de una familia con parámetro; obtiene bases de dos subespacios, su intersección y su suma, y comprueba el recuento con la fórmula de Grassmann.
requiere:
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/05 Bases y dimensión|Bases y dimensión]]"
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/08 Suma, intersección y suma directa|Suma, intersección y suma directa]]"
relacionado:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/ejercicios/03 Independencia, bases y coordenadas — ejercicios 78–88|Ejercicios 78–88]]"
tags:
  - matematicas
  - algebra-lineal
  - espacios-vectoriales
  - dimensión
  - intersección
  - ejercicios
  - fcul
---

# Dimensión, intersección y suma · ejercicios 89–90

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

La [[Matemáticas/Álgebra lineal/Espacios vectoriales/05 Bases y dimensión|dimensión]] es el número de vectores de una base. Al variar un parámetro, algunos generadores pueden pasar a ser combinaciones de los demás y la dimensión puede disminuir. Al sumar dos subespacios, el recuento también depende de las direcciones que comparten.[^bases][^suma]

> [!tip] Procedencia de las respuestas
> Los dos enunciados proceden del fascículo 1–90 de FCUL, p. 22. Las resoluciones marcadas con 🤖 son propias; las fichas oficiales disponibles no incluyen las respuestas a 89–90.

## Dimensión de una familia con parámetro

### Ejercicio 89 · Dimensión según el parámetro $\lambda$ 🤖

#### Enunciado

Discute, en función del parámetro real $\lambda$, la dimensión del subespacio de $\mathbb R^4$[^89]

$$
V=\langle(1,2,1,\lambda),(0,\lambda,-1,1),(-\lambda,0,-1,1),(-2,-4,-2,\lambda^2)\rangle.
$$

> [!resolucion]- Resolución
> Llamamos $v_1,v_2,v_3,v_4$ a los generadores en el orden dado. Para detectar cuándo pueden perder independencia, los colocamos como columnas:
>
> $$
> A(\lambda)=\begin{pmatrix}
> 1&0&-\lambda&-2\\2&\lambda&0&-4\\1&-1&-1&-2\\\lambda&1&1&\lambda^2
> \end{pmatrix}.
> $$
>
> **Detectar los valores excepcionales.** La operación $C_4\leftarrow C_4+2C_1$ conserva el determinante y convierte la cuarta columna en $(0,0,0,\lambda^2+2\lambda)^T$. Desarrollar por ella da
>
> $$
> \det A(\lambda)=\lambda(\lambda+2)
> \det\begin{pmatrix}1&0&-\lambda\\2&\lambda&0\\1&-1&-1\end{pmatrix}.
> $$
>
> En el menor, restamos dos veces la primera fila de la segunda y la primera de la tercera. Su determinante queda
>
> $$
> \det\begin{pmatrix}1&0&-\lambda\\0&\lambda&2\lambda\\0&-1&\lambda-1\end{pmatrix}
> =\lambda(\lambda-1)+2\lambda=\lambda(\lambda+1).
> $$
>
> Por tanto,
>
> $$
> \boxed{\det A(\lambda)=\lambda^2(\lambda+1)(\lambda+2).}
> $$
>
> Si $\lambda\notin\{0,-1,-2\}$, el determinante es no nulo: las cuatro columnas son independientes y forman una base de $\mathbb R^4$. En ese caso $V=\mathbb R^4$ y $\dim V=4$.[^independencia]
>
> En los otros tres valores el determinante sólo indica que no hay cuatro vectores independientes; es necesario calcular cuántos quedan.
>
> **Caso $\lambda=0$.** Los generadores son
>
> $$
> v_1=(1,2,1,0),\quad v_2=(0,0,-1,1),\quad
> v_3=v_2,\quad v_4=-2v_1.
> $$
>
> Por estas relaciones, $V=\langle v_1,v_2\rangle$. Si $av_1+bv_2=0$, la primera coordenada da $a=0$ y la tercera, $b=0$. Así,
>
> $$
> B_0=\{(1,2,1,0),(0,0,-1,1)\},\qquad\dim V=2.
> $$
>
> **Caso $\lambda=-1$.** Se tiene
>
> $$
> v_1=(1,2,1,-1),\quad v_2=(0,-1,-1,1),\quad
> v_3=v_1+2v_2,\quad v_4=(-2,-4,-2,1).
> $$
>
> La relación de $v_3$ prueba que $v_1,v_2,v_4$ generan $V$. Para estudiar independencia, observamos que
>
> $$
> v_4+2v_1=-e_4,\qquad e_4=(0,0,0,1).
> $$
>
> Los vectores $v_1,v_2,e_4$ son independientes: si $av_1+bv_2+ce_4=0$, la primera coordenada da $a=0$, la segunda da $b=0$ y la cuarta da $c=0$. Además, al sustituir $v_4=-2v_1-e_4$, una relación
>
> $$
> rv_1+sv_2+tv_4=0
> $$
>
> se transforma en $(r-2t)v_1+sv_2-te_4=0$. La independencia recién probada fuerza $t=s=r=0$. Por tanto,
>
> $$
> B_{-1}=\{(1,2,1,-1),(0,-1,-1,1),(-2,-4,-2,1)\},\qquad\dim V=3.
> $$
>
> **Caso $\lambda=-2$.** Ahora $v_4=-2v_1$, de modo que los primeros tres generan $V$. Su menor formado por las primeras tres coordenadas vale $\lambda(\lambda+1)=2\ne0$, según el cálculo anterior. Si una combinación de los tres vectores fuera cero en $\mathbb R^4$, sus primeras tres coordenadas formarían un sistema cuadrado invertible y los tres coeficientes serían cero. Son independientes y, por tanto,
>
> $$
> B_{-2}=\{(1,2,1,-2),(0,-2,-1,1),(2,0,-1,1)\},\qquad\dim V=3.
> $$
>
> La dimensión queda, por tanto,
>
> $$
> \boxed{\dim V=\begin{cases}
> 4,&\lambda\notin\{0,-1,-2\},\\
> 2,&\lambda=0,\\
> 3,&\lambda=-1\text{ o }\lambda=-2.
> \end{cases}}
> $$

> [!recuerda]- Comprobación
> Sustituye $\lambda=0,-1,-2$ en los cuatro generadores originales antes de verificar las relaciones empleadas en cada caso. En $\lambda=-1$, comprueba las cuatro coordenadas de $v_3=v_1+2v_2$ y $v_4+2v_1=-e_4$. Para un valor ordinario, por ejemplo $\lambda=1$, el determinante vale $1^2(2)(3)=6\ne0$. Cada base especial debe generar los cuatro vectores originales y ser independiente; ambas comprobaciones son necesarias para fijar su dimensión.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - dimensión
  - parámetros
---
> [!note] Pregunta
> Si los generadores de un subespacio forman una matriz cuadrada $A(t)$, ¿qué pasos permiten discutir la dimensión según $t$?
===
> [!important] Respuesta
> Se hallan los ceros de $\det A(t)$. Fuera de ellos hay dimensión completa. En cada cero se sustituye el parámetro y se calcula el rango o se exhibe una familia independiente que reconstruya todos los generadores.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - rango
  - determinantes
---
> [!note] Pregunta
> ¿Qué permite concluir $\det A=0$ sobre la dimensión del generado por las columnas de $A\in M_n(K)$?
===
> [!important] Respuesta
> Que es menor que $n$, pero no cuál es su valor. Para determinarlo hay que calcular el rango o justificar una base del espacio columna.
```

## Bases de una intersección y una suma

### Ejercicio 90 · Describir primero cada subespacio 🤖

#### Enunciado

Sean los subespacios de $\mathbb R^4$[^90]

$$
F=\{(x_1,x_2,x_3,x_4):x_1=x_3,\ x_4=2x_2\}
$$

y

$$
G=\langle(2,2,2,1),(0,2,0,1),(-1,2,-1,1)\rangle.
$$

Determina las dimensiones y bases de $F$, $G$, $F\cap G$ y $F+G$.

> [!resolucion]- Resolución
> **Base de $F$.** De sus ecuaciones, todo vector tiene la forma
>
> $$
> (s,t,s,2t)=s f+t h,\qquad
> f=(1,0,1,0),\quad h=(0,1,0,2).
> $$
>
> Los dos vectores satisfacen las ecuaciones y generan todas sus soluciones. Una combinación $af+bh=0$ obliga a $a=0$ por la primera coordenada y a $b=0$ por la segunda. Por tanto,
>
> $$
> B_F=\{f,h\},\qquad\dim F=2.
> $$
>
> **Base de $G$.** Escribamos $j=(0,2,0,1)$ y llamemos $g_1,g_2,g_3$ a los generadores originales. Se cumple
>
> $$
> g_1=2f+j,\qquad g_2=j,\qquad g_3=-f+j.
> $$
>
> Así, todos los generadores de $G$ están en $\langle f,j\rangle$. Recíprocamente, $j=g_2\in G$ y $f=(g_1-g_2)/2\in G$, por lo que ambos espacios coinciden. La primera y la cuarta coordenada de $af+bj=0$ fuerzan $a=b=0$. En consecuencia,
>
> $$
> B_G=\{f,j\},\qquad\dim G=2.
> $$
>
> Su parametrización es $(s,2u,s,u)$; por tanto, también admite la descripción
>
> $$
> G=\{(x_1,x_2,x_3,x_4):x_1=x_3,\ x_2=2x_4\}.
> $$
>
> **Intersección.** Un vector de $F\cap G$ debe cumplir simultáneamente las ecuaciones de ambos subespacios.[^suma] Además de $x_1=x_3$, se exige
>
> $$
> x_4=2x_2,\qquad x_2=2x_4.
> $$
>
> Sustituir la primera en la segunda da $x_2=4x_2$, luego $x_2=0$ y $x_4=0$. Así, todo vector de la intersección es $(s,0,s,0)=sf$. Recíprocamente, todos esos vectores cumplen las ecuaciones de $F$ y $G$. Como $f\ne0$,
>
> $$
> B_{F\cap G}=\{f\},\qquad\dim(F\cap G)=1.
> $$
>
> **Suma.** Como $F=\langle f,h\rangle$ y $G=\langle f,j\rangle$, toda suma de un vector de $F$ y otro de $G$ es combinación de $f,h,j$. A su vez, cualquier $af+bh+cj$ es $(af+bh)+cj$, con el primer sumando en $F$ y el segundo en $G$. Por tanto, $F+G=\langle f,h,j\rangle$.[^suma]
>
> Para probar independencia, supongamos $af+bh+cj=0$. Comparar las coordenadas primera, segunda y cuarta da
>
> $$
> a=0,\qquad b+2c=0,\qquad2b+c=0.
> $$
>
> De $b=-2c$, la última ecuación da $-3c=0$; por tanto, $b=c=0$. Concluimos
>
> $$
> B_{F+G}=\{f,h,j\},\qquad\dim(F+G)=3.
> $$
>
> Todos sus vectores cumplen $x_1=x_3$. Esa condición también basta: si $e_2=(0,1,0,0)$ y $e_4=(0,0,0,1)$, entonces
>
> $$
> e_2=\frac{2j-h}{3},\qquad e_4=\frac{2h-j}{3}.
> $$
>
> Por ello, cualquier $(s,t,s,u)=sf+te_2+ue_4$ pertenece a $F+G$. Queda establecida la descripción exacta
>
> $$
> F+G=\{(x_1,x_2,x_3,x_4):x_1=x_3\}.
> $$
>
> También puede elegirse la base $\{f,e_2,e_4\}$. Si $af+be_2+ce_4=0$, la primera coordenada da $a=0$, la segunda da $b=0$ y la cuarta da $c=0$, lo que prueba su independencia.

> [!recuerda]- Comprobación
> Sustituye $f,h$ en las ecuaciones de $F$; expresa $f,j$ con los generadores de $G$; verifica que $f$ cumple ambas familias de ecuaciones. Las relaciones de $e_2,e_4$ permiten reconstruir cualquier vector de la suma. Finalmente, la [[Matemáticas/Álgebra lineal/Espacios vectoriales/08 Suma, intersección y suma directa#La fórmula de Grassmann|fórmula de Grassmann]] da[^grassmann]
>
> $$
> \dim(F+G)=\dim F+\dim G-\dim(F\cap G)=2+2-1=3.
> $$
>
> El resultado coincide con los tres vectores de la base construida y confirma que las cuatro dimensiones son coherentes. Las bases se han obtenido mediante las parametrizaciones y las relaciones entre los generadores; Grassmann relaciona sus dimensiones.

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - intersección
---
> [!note] Pregunta
> ¿Cómo se obtiene una base de $U\cap W$ a partir de ecuaciones de ambos subespacios?
===
> [!important] Respuesta
> Se resuelven simultáneamente todas sus ecuaciones y se parametrizan las soluciones. Los vectores asociados a los parámetros libres deben generar esas soluciones y ser independientes.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - suma-de-subespacios
---
> [!note] Pregunta
> Si se conocen bases de $U$ y $W$, ¿cómo se obtiene una base de $U+W$?
===
> [!important] Respuesta
> Se reúnen sus vectores para generar $U+W$ y se eliminan los redundantes conservando el generado. La familia restante debe ser independiente.
```

```anki
deck: Matemáticas::Álgebra lineal::Espacios vectoriales
tags:
  - matemáticas
  - grassmann
---
> [!note] Pregunta
> ¿Qué relación permite comprobar las dimensiones de dos subespacios de dimensión finita, su suma y su intersección?
===
> [!important] Respuesta
> $\dim(U+W)=\dim U+\dim W-\dim(U\cap W)$. Las direcciones comunes se descuentan porque se contaron en los dos subespacios.
```

Los [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/03 Espacios vectoriales/ejercicios/03 Independencia, bases y coordenadas — ejercicios 78–88|ejercicios de independencia y bases]] proporcionan el criterio que justifica cada recuento: una base debe generar todo el subespacio y no contener vectores redundantes. Para la intersección se reúnen condiciones; para la suma se reúnen generadores.

## 📚 Fuentes

- FCUL, *ALGA 2026/2027 — Exercícios: Enunciados para as aulas teórico-práticas*, fascículo 1–90, p. 22, ejercicios 89–90.
- [[Matemáticas/Álgebra lineal/Espacios vectoriales/04 Dependencia e independencia lineal|Dependencia e independencia lineal]]: criterio de determinante y comprobación por relaciones homogéneas.
- [[Matemáticas/Álgebra lineal/Espacios vectoriales/05 Bases y dimensión|Bases y dimensión]]: generación, independencia y dimensión como cardinal de una base.
- [[Matemáticas/Álgebra lineal/Espacios vectoriales/08 Suma, intersección y suma directa|Suma, intersección y suma directa]]: pertenencia simultánea, reunión de generadores y fórmula de Grassmann.

[^89]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, fascículo 1–90, p. 22, ejercicio 89. La cuarta coordenada del cuarto generador es $\lambda^2$.
[^90]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 22, ejercicio 90. Se solicitan tanto dimensiones como bases de los cuatro subespacios.
[^bases]: Premisas consultadas en *Bases y dimensión*: una base genera y es independiente; su cardinal define la dimensión y cualquier base de un mismo espacio finito-dimensional tiene el mismo cardinal.
[^independencia]: Premisas consultadas en *Dependencia e independencia lineal*: una familia es independiente si su única relación homogénea es la trivial; para una matriz cuadrada, sus columnas son independientes exactamente cuando el determinante es no nulo.
[^suma]: Premisas consultadas en *Suma, intersección y suma directa*: $U\cap W$ exige pertenecer a ambos subespacios; $U+W$ está formado por sumas y se genera reuniendo generadores de ambos.
[^grassmann]: Premisa consultada en *Suma, intersección y suma directa*, apartado «La fórmula de Grassmann»: para subespacios finito-dimensionales, $\dim(U+W)=\dim U+\dim W-\dim(U\cap W)$.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como profesor de Álgebra Lineal de primer curso. Examina una pregunta cada vez, espera mi respuesta y permite corregir la primera inferencia errónea antes de mostrar el resto. Distingue errores de datos, álgebra, pertenencia y demostración; adapta la dificultad mediante recuperación activa y repetición espaciada, sin revelar la respuesta antes del intento.

Para una familia con parámetro, pide colocar sus generadores como columnas y hallar los ceros del determinante. Fuera de esos ceros hay dimensión completa; en cada valor excepcional exige sustituir, probar qué relaciones aparecen y construir una familia independiente que siga generando todo. En el ejercicio 89, comprueba por separado $\lambda=0,-1,-2$ y el caso general. Si el determinante es cero, pide continuar hasta obtener el rango o una base que determine la dimensión.

Para el ejercicio 90, obtén primero bases de $F$ y $G$. Distingue $x_4=2x_2$ de $x_2=2x_4$: al intersectar deben cumplirse ambas condiciones; al sumar se reúnen los generadores. Pide justificar generación e independencia de cada base y usa Grassmann después para comprobar la coherencia de las dimensiones.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
