// El algoritmo de ordenamiento por inserccion
// Se construye una matriz ordenada insertando
// elementos uno por uno en su posicion correcta 

// Ejemplo de uso de este algoritmo

// function insertionSort(array){
//     for(let i=1; i<array.length; i++){
//         const currentElement = array[i]
//         let j = i - 1
//         while(j>=0&&array[j]>currentElement){
//             array[j+1]=array[j]
//             j--
//         }
//         array[j+1]=currentElement
//     }
//     return array
// }

// const arrayDesordenado = [7,3,1,5,9,2]
// const arrayOrdenado = insertionSort(arrayDesordenado)
// console.log(arrayOrdenado)

// Entre las caracteristicas de este algoritmo están
// El algoritmo modifica el array original en lugar de crear uno nuevo
// Al editar esta linea de codigo array[j]<currentElement ordena en modo descendente