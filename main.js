var Combinacao = require('./Combinacao.js');
var GerarStrategy = require('./GerarStrategy.js');
//Include das Regras
var DezenasQueMaisSairamRegra = require('./Regras/DezenasQueMaisSairamRegra.js');
//var SomenteParesRegra = require('./Regras/SomenteParesRegra.js');
//var SomenteImparesRegra = require('./Regras/SomenteImparesRegra.js');
var DezenasSequenciaisRegra = require('./Regras/DezenasSequenciaisRegra.js');
var NumerosJaSorteadosRegra = require('./Regras/NumerosJaSorteadosRegra.js');

var jogosPossiveis = new Combinacao().Criar(15);

var gerenciadorDeRegras = new GerarStrategy();
//gerenciadorDeRegras.AdicionarRegra(new SomenteParesRegra()); //Nao fez diferenca
//gerenciadorDeRegras.AdicionarRegra(new SomenteImparesRegra()); //Nao fez diferenca
gerenciadorDeRegras.AdicionarRegra(new DezenasQueMaisSairamRegra());
gerenciadorDeRegras.AdicionarRegra(new DezenasSequenciaisRegra());
gerenciadorDeRegras.AdicionarRegra(new NumerosJaSorteadosRegra());
var numerosMinerados = gerenciadorDeRegras.Executar(jogosPossiveis);