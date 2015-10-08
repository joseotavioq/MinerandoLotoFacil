function SomenteImparesRegra(numeros)
{

};

SomenteImparesRegra.prototype.Regra = function (numeros)
{
	var novosNumeros = [];
	for(var i = 0; i < numeros.length; i++)
	{
		for(var j = 0; j < numeros[i].length; j++)
		{
			if(numeros[i][j] % 2 == 0)
			{
				novosNumeros.push(numeros[i]);
				break;
			}
		}
	}
	return novosNumeros;
};

module.exports = SomenteImparesRegra;