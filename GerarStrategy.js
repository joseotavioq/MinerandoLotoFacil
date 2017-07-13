function GerarStrategy()
{
	_regras = [];
};

GerarStrategy.prototype.AdicionarRegra = function (regra)
{
	_regras.push(regra);
};

GerarStrategy.prototype.Executar = function (numeros)
{
	var novosNumeros = numeros;
	for(var i = 0; i < _regras.length; i++)
	{
		var qtdNumerosAntesDaRegra = novosNumeros.length; 
		novosNumeros = _regras[i].Regra(novosNumeros);
		console.log('[' + _regras[i].nome + ']: ' + novosNumeros.length + ' | Retirados: ' + (qtdNumerosAntesDaRegra - novosNumeros.length));
	}

	return novosNumeros;
};

module.exports = GerarStrategy;