// estas funciones son de ejemplo

// Filtro de personas, vehiculo, ubicaciones para mostrar los elementos
exportar  const  filterItems  =  ( propiedad ,  matriz )  =>  {
  let  arrayPeople  =  [ ] ;
  para ( dejo  i = 0 ;  i < array . longitud ; i ++ ) {
      arrayPeople . empujar ( matriz [ i ] [ propiedad ] )
  }
    return  arrayPeople
} ;

// Barra de navegacion
/ * exportar const filterItems = (textInputSearch, array) => {
  const searchInput = array.forEach ((el) => {
   return el.toLowerCase (). indexOf (textInputSearch.toLowerCase ())> -1
  });
  retorno searchInput
} * /

// Ordenar alfabticamente ascendente y descendente
export  const  sortOrdenAlfabeticoAsc  =  ( matriz , parámetro )  =>  {
  const  compareTitle  =  matriz . ordenar ( ( a ,  b  )  =>  {
    if  (  a [ parametro ] . toLowerCase ( )  <  b [ parametro ] . toLowerCase ( ) ) {
      retorno  - 1 ;
    }
    else  {
      return  0 ;
    }
} )
return  compareTitle
}

export  const  sortOrdenAlfabeticoDesc  =  ( matriz , parámetro )  =>  {
  const  compareTitle  =  matriz . ordenar ( ( a ,  b  )  =>  {
    if  (  a [ parametro ] . toLowerCase ( )  >  b [ parametro ] . toLowerCase ( ) ) {
      retorno  - 1 ;
    }
    else  {
      return  0 ;
    }
} )
return  compareTitle
}

// Filtrar por productores y directores
exportar  const  filterData  =  ( matriz , propiedad , parámetro )  =>  {  
  const  propiedad de  matriz =  matriz . filter ( ( arrayItem ) =>  {
     return  arrayItem [ parametro ] ===  propiedad
  } ) ;
  return  arrayProperty
} ;

// Filtrar por Score y Año de Lanzamiento ascendente
export  const  sortOrdenNumericoAsc  =  ( matriz , parámetro )  =>  {
  const  compareNumber  =  matriz . ordenar ( ( a ,  b )  =>  {
    return  b [ parametro ]  -  a [ parametro ] ;
  } ) ;
  return  compareNumber
}
// Filtrar por Score y Año de Lanzamiento descendente
export  const  sortOrdenNumericoDesc  =  ( matriz , parámetro )  =>  {
  const  compareNumber  =  matriz . ordenar ( ( a ,  b )  =>  {
    devuelve  a [ parametro ]  -  b [ parametro ] ;
  } ) ;
  return  compareNumber
}


  / * const compareNumber = sortArray.flat (1) .sort ((a, b) => {
   if (a.parametro! == "NA")
    return b [parametro] - a [parametro];
  });
  return compareNumber
  


   exportar  const  filterPeopleLocationsVehicles  =  ( matriz , llave , propiedad , parámetro )  =>  { 
    deje  sortArray  =  [ ] ;
    para ( dejo  i = 0 ;  i < array . longitud ; i ++ ) {
      sortArray . empujar ( matriz [ i ] [ llave ] )
    }
    const  arrayProperty  =  sortArray . plano ( 2 ) . filter ( ( arrayItem ) =>  {
     return  arrayItem [ parametro ] ===  propiedad 
  } ) ;
      return  arrayProperty
    }