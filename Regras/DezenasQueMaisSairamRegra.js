function DezenasQueMaisSairamRegra(numeros)
{
	this.nome = 'Dezenas que mais sairam (1, 2 e 24)';
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