var Combinacao = require('./Combinacao.js');
var GerarStrategy = require('./GerarStrategy.js');
//Include das Regras
var DezenasQueMaisSairamRegra = require('./Regras/DezenasQueMaisSairamRegra.js');
var NaoPodeConterSomenteParesRegra = require('./Regras/NaoPodeConterSomenteParesRegra.js');
var NaoPodeConterSomenteImparesRegra = require('./Regras/NaoPodeConterSomenteImparesRegra.js');

var jogosPossiveis = new Combinacao().Criar(15);

var gerenciadorDeRegras = new GerarStrategy();
gerenciadorDeRegras.AdicionarRegra(new DezenasQueMaisSairamRegra().Regra);
gerenciadorDeRegras.AdicionarRegra(new NaoPodeConterSomenteParesRegra().Regra);
gerenciadorDeRegras.AdicionarRegra(new NaoPodeConterSomenteImparesRegra().Regra);
gerenciadorDeRegras.Executar(jogosPossiveis);