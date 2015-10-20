function DezenasDeVinteAVinteCinco(numeros)
{
	this.nome = 'Dezenas de 20 a 25 <= 3';
};

DezenasDeVinteAVinteCinco.prototype.Regra = function (numeros)
{
	var novosNumeros = [];
	for(var i = 0; i < numeros.length; i++)
	{
		var qtd = 0;
		for(var j = 0; j < numeros[i].length; j++)
		{
			if(numeros[i][j] >= 20 && numeros[i][j] <= 25)
			{
				qtd++;
			}
		}

		if(qtd <= 3)
		{
			novosNumeros.push(numeros[i]);
		}
	}
	return novosNumeros;
};

module.exports = DezenasDeVinteAVinteCinco;