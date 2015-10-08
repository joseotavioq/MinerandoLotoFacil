function DezenasSequenciaisRegra(numeros)
{

};

DezenasSequenciaisRegra.prototype.Regra = function (numeros)
{
	var novosNumeros = [];
	for(var i = 0; i < numeros.length; i++)
	{
		var qtdDezenasSequenciais = 0;
		var qtdMaximaDeSequencias = 0;
		for(var j = 0; j < numeros[i].length - 1; j++)
		{
			if(numeros[i][j] == numeros[i][j + 1] - 1)
			{
				qtdDezenasSequenciais++;
			}
			else
			{
				qtdDezenasSequenciais = 0;
			}

			qtdMaximaDeSequencias = Math.max(qtdDezenasSequenciais, qtdMaximaDeSequencias);
		}

		if(qtdMaximaDeSequencias <= 4)
		{
			novosNumeros.push(numeros[i]);
		}
	}
	return novosNumeros;
};

module.exports = DezenasSequenciaisRegra;