function NumerosJaSorteadosRegra(numeros)
{
    //adicionar todos os jogos neste array
    _jogos = [];
};

NumerosJaSorteadosRegra.prototype.Regra = function (numeros)
{
    var novosNumeros = [];
    for(var i = 0; i < numeros.length; i++)
    {
        var existeEsteJogo = false;

        for(var j = 0; j < _jogos.length; j++)
        {
            if(numeros[i].equals(_jogos[j]))
            {
                existeEsteJogo = true;
                break;
            }
        }

        if(!existeEsteJogo)
        {
            novosNumeros.push(numeros[i]);
        }
    }
    return novosNumeros;
};

module.exports = NumerosJaSorteadosRegra;


Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}  