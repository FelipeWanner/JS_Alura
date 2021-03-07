var botãoAdicionar = document.querySelector("#buscar-pacientes");

botãoAdicionar.addEventListener("click", function(event){
	event.preventDefault();

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
	
	xhr.addEventListener("load", function(){
		
		var erroAjax = document.querySelector("#erro-ajax");
		
		if(xhr.status == 200){

			erroAjax.classList.add("invisivel");
			var resposta = xhr.responseText;
		    console.log(resposta);
		    console.log(typeof resposta);

		    var pacientes = JSON.parse(resposta);
		    
		    pacientes.forEach(function(paciente){
		    	adicionaPacienteNaTabela(paciente);
		    });
		}else{
			console.log(xhr.status);
			console.log(xhr.responseText);
			erroAjax.classList.remove("invisivel");
		}
	});

	xhr.send();
});
