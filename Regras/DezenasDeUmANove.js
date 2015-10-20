function DezenasDeUmANove(numeros)
{
	this.nome = 'Dezenas de 1 a 9 >= 3';
};

DezenasDeUmANove.prototype.Regra = function (numeros)
{
	var novosNumeros = [];
	for(var i = 0; i < numeros.length; i++)
	{
		var qtd = 0;
		for(var j = 0; j < numeros[i].length; j++)
		{
			if(numeros[i][j] >= 1 && numeros[i][j] <= 9)
			{
				qtd++;
			}
		}

		if(qtd >= 3)
		{
			novosNumeros.push(numeros[i]);
		}
	}
	return novosNumeros;
};

module.exports = DezenasDeUmANove;