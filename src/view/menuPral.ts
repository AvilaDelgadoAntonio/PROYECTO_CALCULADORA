import { leerTeclado } from '../view/entradaTeclado'

export const menuPral = async () => {
    let op: number
    console.log('\n')
    console.log('1.- Sumar')
    console.log('2.- Multiplicar')
    console.log('3.- Restar')
    console.log('0.- Salir')
    op = parseInt( await leerTeclado('opción: ') )
    return op
}