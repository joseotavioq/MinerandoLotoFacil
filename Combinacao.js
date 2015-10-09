function Combinacao()
{
	
};

Combinacao.prototype.Criar = function (min)
{
	var a = [];
	for(var i = 1; i <= 25; i++)
		a.push(i);

    var fn = function(n, src, got, all) {
        if (n == 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    }
    var all = [];
    fn(min, a, [], all);

	console.log('Combinacoes p/ ' + min + ' num.: ' + all.length);
    return all;
};

module.exports = Combinacao;