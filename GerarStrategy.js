function GerarStrategy()
{
	this._regras = [];
};

GerarStrategy.prototype.AdicionarRegra = function (regra)
{
	this._regras.push(regra);
};

GerarStrategy.prototype.Executar = function (numeros)
{
	var novosNumeros = numeros;
	for(var i = 0; i < this._regras.length; i++)
	{
		 novosNumeros = this._regras[i](novosNumeros);
	}

	console.log('Total minerado: ' + novosNumeros.length);
};

module.exports = GerarStrategy;