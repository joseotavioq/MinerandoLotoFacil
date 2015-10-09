var Combinacao = require('./Combinacao.js');
var GerarStrategy = require('./GerarStrategy.js');
//Include das Regras
var DezenasQueMaisSairamRegra = require('./Regras/DezenasQueMaisSairamRegra.js');
var SomenteParesRegra = require('./Regras/SomenteParesRegra.js');
var SomenteImparesRegra = require('./Regras/SomenteImparesRegra.js');
var DezenasSequenciaisRegra = require('./Regras/DezenasSequenciaisRegra.js');
var NumerosJaSorteadosRegra = require('./Regras/NumerosJaSorteadosRegra.js');

var jogosPossiveis = new Combinacao().Criar(15);

var gerenciadorDeRegras = new GerarStrategy();
gerenciadorDeRegras.AdicionarRegra(new DezenasQueMaisSairamRegra().Regra);
gerenciadorDeRegras.AdicionarRegra(new SomenteParesRegra().Regra);
gerenciadorDeRegras.AdicionarRegra(new SomenteImparesRegra().Regra);
gerenciadorDeRegras.AdicionarRegra(new DezenasSequenciaisRegra().Regra);
gerenciadorDeRegras.AdicionarRegra(new NumerosJaSorteadosRegra().Regra);
var numerosMinerados = gerenciadorDeRegras.Executar(jogosPossiveis);

/*
for(var i = 0; i < numerosMinerados.length; i++)
{
	if(numerosMinerados[i].indexOf(1) > -1 && numerosMinerados[i].indexOf(2) > -1
		 && numerosMinerados[i].indexOf(3) > -1 && numerosMinerados[i].indexOf(15) > -1
		  && numerosMinerados[i].indexOf(6) > -1 && numerosMinerados[i].indexOf(17) > -1
		   && numerosMinerados[i].indexOf(7) > -1 && numerosMinerados[i].indexOf(18) > -1
		    && numerosMinerados[i].indexOf(8) > -1 && numerosMinerados[i].indexOf(21) > -1
		     && numerosMinerados[i].indexOf(11) > -1 && numerosMinerados[i].indexOf(22) > -1
		      && numerosMinerados[i].indexOf(12) > -1 && numerosMinerados[i].indexOf(24) > -1
		       && numerosMinerados[i].indexOf(13) > -1)
	{
		console.log('Seu jogo esta entre os minerados!!!');
	}
}
/*
01  02  03  06  07
08  11  12  13  15
17  18  21  22  24
*/