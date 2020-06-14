export const insertar = data =>{
    return{
        type:    'INSERTAR',
        payLoad: data
    }
}

export const actualizar = data =>{
    return{
        type:    'ACTUALIZAR',
        payLoad: data
    }
}

export const eliminar = index =>{
    return{
        type:    'ELIMINAR',
        payLoad: index
    }
}

export const actualizarIndex = index =>{
    return{
        type:    'ACTUALIZAR-INDEX',
        payLoad: index
    }
}