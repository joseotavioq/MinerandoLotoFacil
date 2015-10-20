function DezenasDeDezADezenove(numeros)
{
	this.nome = 'Dezenas de 10 a 19 >= 3';
};

DezenasDeDezADezenove.prototype.Regra = function (numeros)
{
	var novosNumeros = [];
	for(var i = 0; i < numeros.length; i++)
	{
		var qtd = 0;
		for(var j = 0; j < numeros[i].length; j++)
		{
			if(numeros[i][j] >= 10 && numeros[i][j] <= 19)
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

module.exports = DezenasDeDezADezenove;