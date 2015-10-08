function NaoPodeConterSomenteParesRegra(numeros)
{

};

NaoPodeConterSomenteParesRegra.prototype.Regra = function (numeros)
{
	var novosNumeros = [];
	for(var i = 0; i < numeros.length; i++)
	{
		for(var j = 0; j < numeros[i].length; j++)
		{
			if(numeros[i][j] % 2 != 0)
			{
				novosNumeros.push(numeros[i]);
				break;
			}
		}
	}

	console.log('Total apos aplicar regra NaoPodeConterSomenteParesRegra: ' + novosNumeros.length);

	return novosNumeros;
};

module.exports = NaoPodeConterSomenteParesRegra;