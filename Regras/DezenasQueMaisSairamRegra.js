function DezenasQueMaisSairamRegra(numeros)
{

};

DezenasQueMaisSairamRegra.prototype.Regra = function (numeros)
{
	var novosNumeros = [];
	for(var i = 0; i < numeros.length; i++)
	{
		if(numeros[i].indexOf(24) > -1 && numeros[i].indexOf(2) > -1 && numeros[i].indexOf(1) > -1)
		{
			novosNumeros.push(numeros[i]);
		}
	}
	return novosNumeros;
};

module.exports = DezenasQueMaisSairamRegra;