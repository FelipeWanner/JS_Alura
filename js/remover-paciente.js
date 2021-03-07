var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function(){
		var alvoEvento = event.target;
		var paiDoAlvo = alvoEvento.parentNode;
		paiDoAlvo.remove();
		//tbm pode ser feito da seguinte forma:
		//event.target.parentNode.remove();
		//essa é exatamente a mesma instrução, porém mais sucinta!
	},500);	
});