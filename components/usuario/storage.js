
const ModelPais = require('../pais/model')


///////
async function agregarPais( dato ) {
    const resultado = await new ModelPais( dato )
    return resultado.save()
}

async function obtenerPais( filtro ) {
    let mi_filtro = {}

    if (filtro.uscodigouario != null) {
        mi_filtro = { codigo: filtro.codigo }
    }
    const resultado = await ModelPais.find( mi_filtro )
    return resultado
}


async function actualizarPais(dato) {
    const nuevo_objeto = await ModelPais.findOne( { codigo: dato.codigo } )

    nuevo_objeto.nombre = dato.codigo
    nuevo_objeto.apellido = dato.nombre
    
    const resultado = await nuevo_objeto.save()
    return resultado
}

async function eliminaPais(dato) {
    const resultado = await ModelPais.deleteOne( {codigo: dato.codigo} )
    return resultado
}
module.exports = {
   
    agregarPais:agregarPais,
    obtenerPais:obtenerPais,
    actualizarPais:actualizarPais,
    eliminaPais:eliminaPais
}