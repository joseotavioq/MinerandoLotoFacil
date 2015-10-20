var Combinacao = require('./Combinacao.js');
var GerarStrategy = require('./GerarStrategy.js');

//Include das Regras
var DezenasQueMaisSairamRegra = require('./Regras/DezenasQueMaisSairamRegra.js');
var SomenteParesRegra = require('./Regras/SomenteParesRegra.js');
var SomenteImparesRegra = require('./Regras/SomenteImparesRegra.js');
var DezenasSequenciaisRegra = require('./Regras/DezenasSequenciaisRegra.js');
var NumerosJaSorteadosRegra = require('./Regras/NumerosJaSorteadosRegra.js');
var DezenasDeUmANove = require('./Regras/DezenasDeUmANove.js');
var DezenasDeDezADezenove = require('./Regras/DezenasDeDezADezenove.js');
var DezenasDeVinteAVinteCinco = require('./Regras/DezenasDeVinteAVinteCinco.js');

//Geracao de todas as combinacoes possiveis
var jogosPossiveis = new Combinacao().Criar(15);

//Aplicacao das regras
var gerenciadorDeRegras = new GerarStrategy();
gerenciadorDeRegras.AdicionarRegra(new SomenteParesRegra());
gerenciadorDeRegras.AdicionarRegra(new SomenteImparesRegra());
gerenciadorDeRegras.AdicionarRegra(new DezenasQueMaisSairamRegra());
gerenciadorDeRegras.AdicionarRegra(new DezenasSequenciaisRegra());
gerenciadorDeRegras.AdicionarRegra(new DezenasDeUmANove());
gerenciadorDeRegras.AdicionarRegra(new DezenasDeDezADezenove());
gerenciadorDeRegras.AdicionarRegra(new DezenasDeVinteAVinteCinco());
gerenciadorDeRegras.AdicionarRegra(new NumerosJaSorteadosRegra());
var numerosMinerados = gerenciadorDeRegras.Executar(jogosPossiveis);

for(var i = 0; i < 3; i++)
{
	var index = Math.floor(Math.random() * (numerosMinerados.length - 1) + 1);
	console.log(numerosMinerados[index]);
}

//Analise
//var analise = new NumerosJaSorteadosRegra()
//analise.QtdMaxParesImpares();