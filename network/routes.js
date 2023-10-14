const usuario = require('../components/usuario/interface')
const pais = require('../components/usuario/interface')

const routes = function( server ) {
    server.use('/usuario', usuario)
    server.use('/pais', pais)
}

module.exports = routes