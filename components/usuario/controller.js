const storage = require('./storage')


function agregarPais( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.agregarPais( dato ) )
    })
}

function obtenerPais( filtro ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtenerPais( filtro ) )
    })
}

function actualizarPais( dato ) {
    return new Promise((resolve, reject) => {
        let pais = {
            codigo: dato.codigo,
            nombre: dato.nombre
        }
        resolve( storage.actualizarPais( pais ) )
    })
}

function eliminarPais( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.eliminarPais( dato ) )
    })    
}


module.exports = {
    
    agregarPais,
    obtenerPais,
    actualizarPais,
    eliminarPais
}