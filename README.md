# POKEMON GO

## Índice

* [1. Pokemon Go](#1-pokemon-go)
* [2. Definición del producto](#2-definición-del-producto)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Diseño de la interfaz de usuario](#4-diseño-de-la-interfaz-de-usuario)
* [5. Testeos de usabilidad](#5-testeos-de-usabilidad)
* [6. CheckList](#6-checklist)
* [7. Producto Final](#7-producto-final)
* [8. Fuente](#8-fuente)
* [9. Autores](#9-autores)

***

<div align=center><img src="https://github.com/MerlyAnco/LIM016-data-lovers/blob/main/src/img/logo.png?raw=true" width=30%></div>

# 1. Pokemon Go

Pokémon GO es una experiencia de juego internacional que cuenta con más de mil millones de descargas y ha sido nombrada "el mejor juego para móviles" por Game Developers Choice Awards y "la mejor aplicación del año" por TechCrunch (tomado de Google Play). Los usuarios del juego se convierten en "Maestros/ entrenadores de Pokémon" y pueden:

  * Descubrir el mundo Pokémon: explorar y descubrir nuevos Pokémon allá donde vayan.
  * Atrapar distintos Pokémon para completar su Pokédex.
  * Pelear contra Pokémon de otros entrenadores y conquistar un gimnasio.
  * Competir en épicos combates contra otros entrenadores.
  * Hacer equipo con otros entrenadores para atrapar poderosos Pokémon durante las
    incursiones.

***

## 2. Definición del producto 🤓

### 2.1. ¿Quiénes son los principales usuarios del producto?

El producto está dirigido tanto para nuevos y antiguos jugadores de Pokemon Go. 👫

### 2.2. ¿Cuáles son los objetivos de los usuarios al usar el producto?

El producto tiene como objetivo ser una web informativa que da  a conocer la variedad de pokemones existentes en el mundo de PokemoGo .Los usuarios podrán visualizar la información acerca de los ataques, poderes, línea de evolución , debilidades y fortalezas de los pokemones  además de poder tener acceso a enlaces de las películas .Asimismo se tiene una sección de estadísticas donde se visualiza los datos acerca de las regiones, tipos y km por recorrer .

***

## 3. Historias de usuario 👫

### 3.1. ¿Cuáles son los datos que quisieran ver los usuarios?

Para entender mejor qué necesidades complementarias a la app tienen los usuarios, hicimos una rápida investigación (research) y estos son algunos de los hallazgos.

     ❥ Mostrar las imagenes de los pokemons con su información
     ❥ Una página dinamica y ambientada de inicio a fin con pokemon
     ❥ Estadisticas Pokemon
     ❥ Ranking de pokemon por aparición
     ❥ Curiosidades sobre cada pokemon
     ❥ Información sobre las evoluciones y los caramelos que necesitan
     ❥ Sección peliculas

### 3.2. ¿Qué dicen los usuarios?

Se ha consultado a 5 personas que usan o se animarian a descargar y usar el aplicativo Pokemon Go y mencionan lo que necesitarian lo siguiente en una página informativa:

#### Usuario 1: Alex <img src="https://cdn-icons-png.flaticon.com/512/287/287226.png" width=18px> (jugador activo de Pokemon Go)

 >Yo como usuario me gustaría poder visualizar toda la información necesaria de mi        pokemon (ataques, fortalezas, debilidades, tipo, cp, hp ) para una batalla pokemon.
 >#### Definición de Terminado
 >✅ Visualización detallada de cada pokémon en cards
 >
 >✅ Información clara y ordenada en secciones.
 >
 >✅ Visualización de ataques y poderes detallados en las cards.
 >
 >✅ Diseño responsive.

#### Usuario 2: Ana <img src="https://cdn-icons-png.flaticon.com/512/188/188979.png" width=18px> (jugadora activo de Pokemon Go)

 >Yo como usuario quiero realizar una búsqueda específica de algún pokémon y poder ver su información detallada.

 >#### Definición de Terminado
 >✅ Diseño responsive.
 >
 >✅El usuario puede visualizar la barra de búsqueda.
 >
 >✅Se van filtrando los pokemones de acuerdo a lo especificado por el usuario en la barra de búsqueda.
 >
 >✅Se visualiza la información detallada de cada pokémon buscado.


 #### Usuario 3: Miguel <img src="https://cdn-icons-png.flaticon.com/512/287/287226.png" width=18px> (jugador nuevo)

 >Yo como usuario nuevo quisiera poder ordenar (numéricamente  y alfabéticamente) a los pokemones para hacer más óptima mi búsqueda; también poder saber que pokemons podría recibir en caso  el aplicativo me regale un huevo pokémon.

 >#### Definición de Terminado
 >✅ El filtro de “orden” ( numérico y alfabético ) se ubica en cada  sección  en la parte superior y es de fácil visualización.
 >
 >✅ El filtro es  desplegable y le permite al usuario elegir el orden que desee filtrar los pokemones.
 >
 >✅ Al cambiar de sección el  filtrado de “orden”  se resetea.
 >
 >✅ Se implementó el filtrado por tipos de huevo y la cantidad de  kilómetros a caminar.

 #### Usuario 4: Joel <img src="https://cdn-icons-png.flaticon.com/512/287/287226.png" width=18px> (jugador activo de PokemonGo)

 >Yo como jugador me sería útil saber cuántos kilómetros debería recorrer para evolucionar un huevo pokémon.

 >#### Definición de Terminado
 >✅ El filtro de “egg”(“2km”, “5km”, “7km”, “10km”) se ubica en cada sección  en la parte superior y es de fácil visualización.
 >
 >✅ El filtro es  desplegable y le permite al usuario poder clasificar a los  pokemones por los km que debe de recorrer.
 >
 >✅ Al cambiar de sección el  filtrado de “egg”  se resetea.
 >
 >✅ El diseño es responsive.

 #### Usuario 5:  Max <img src="https://cdn-icons-png.flaticon.com/512/287/287226.png" width=18px> (jugador nuevo de Pokemon Go)

 >Yo como usuario me resultaría muy útil poder visualizar a los pokemones por secciones (tipo , región , rareza ) para así poder optimizar mi búsqueda.
 >#### Definición de Terminado
 >✅ Las secciones se encuentran definidas y son de fácil visualización para el usuario.
 >
 >✅ De acuerdo a la sección seleccionada , se cuenta con filtros gráficos para una mejor experiencia .
 >
 >✅ Cada sección cuenta a la vez con filtros de ‘orden’ , ‘Cp’ y ‘Egg’ .
 >
 >✅ El diseño es responsive.

 #### Usuario 6: Lucía  <img src="https://cdn-icons-png.flaticon.com/512/188/188979.png" width=18px> (jugador activo de Pokemon Go)

 >Yo como usuario sería útil poder visualizar estadísticas de los pokemones de acuerdo a los tipos , región , rareza y km por recorrer , para así tener una mejor investigación del mundo de PokemonGo.
 >#### Definición de Terminado
 >✅ Se cuenta con una sección  específica de las estadísticas del mundo de PokémonGo.
 >
 >✅ Las gráficas estadísticas se encuentran diferenciadas y en cada una se señala su significado
 >
 >✅ El diseño es responsive y se puede visualizar en cualquier dispositivo.


 #### Usuario 7: Roxana <img src="https://cdn-icons-png.flaticon.com/512/188/188979.png" width=18px> (jugadora nueva de Pokemon Go)

 >Yo como usuario me gustaría saber cuántos caramelos necesito para evolucionar y cuáles son sus pre evoluciones y siguientes evoluciones de cada pokémon para así conocer la línea de  evolución de cada uno.

 >#### Definición de Terminado
 >✅ Las cards de cada pokémon contienen los caramelos que necesita para evolucionar.
 >
 >✅ Las cards contienen información de las pre y siguientes evoluciones de cada pokemon .
 >
 >✅ El diseño es responsive y se puede visualizar en cualquier dispositivo.

***

## 4. Diseño de la Interfaz de Usuario<img src="https://cdn-icons-png.flaticon.com/512/188/188937.png" width=40px>

### Prototipo de baja fidelidad

### Prototipo de alta fidelidad

***

## 5. Testeos de Usabilidad
### La interfaz pasa el 100% de los test.
![image](https://user-images.githubusercontent.com/87873460/142967623-8963457e-87d3-4f76-8059-aa5e5a1149c1.png)

***

## 6. Checklist

* ✅ Usa VanillaJS.
* ✅ Pasa linter (`npm run pretest`)
* ✅ Pasa tests (`npm test`)
* ✅ Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* ✅ Incluye _Definición del producto_ clara e informativa en `README.md`.
* ✅ Incluye historias de usuario en `README.md`.
* ✅ Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* ✅ Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* ✅ Incluye link a Zeplin en `README.md`.
* ✅ Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* ✅ UI: Muestra lista y/o tabla con datos y/o indicadores.
* ✅ UI: Permite ordenar data por uno o más campos (asc y desc).
* ✅ UI: Permite filtrar data en base a una condición.
* ✅ UI: Es _responsive_.

***

## 7. Producto final <img src="https://cdn-icons-png.flaticon.com/512/188/188931.png" width=20px>

<div align="center">
<img  src=""  width="800">

<img  src=""  width="800">

<img  src=""  width="800">

</div>

## 8. Fuente 📄

Data Lovers del [Repositorio de Laboratoria](https://github.com/Laboratoria/LIM016-data-lovers) 

## 9. Autores

- [Nicol Mendoza](https://github.com/nicolmendoza) <img src="https://cdn-icons-png.flaticon.com/512/2570/2570280.png" width=20px>
- [Merly Anco](https://github.com/MerlyAnco) <img src="https://cdn-icons-png.flaticon.com/512/2570/2570280.png" width=20px>
