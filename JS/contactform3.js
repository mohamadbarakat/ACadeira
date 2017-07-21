    $(document).ready(function(){
        $("#enviar").click(function(){
                  var email = $("#email").val();
                  var mensagem = $("#mensagem").val();
            var nome = $("#nome").val();
                        var sobrenome = $("#sobrenome").val();
                        var telefone = $("#telefone").val();
                        var tipo = $("#tipo").val();
            
                        
            console.log(email);
                        console.log(mensagem);
                        console.log(nome);
                        console.log(sobrenome);
                        console.log(telefone);
                        console.log(tipo);
           var dados = {};
 dados.Email = email;
  dados.Mensagem = mensagem;
  dados.Nome = nome;
  dados.Sobrenome = sobrenome;
  dados.Telefone = telefone;
  dados.Tipo = tipo;
 
 
 $.ajax({
   accept: 'application/vnd.vtex.ds.v10 json',
   contentType: 'application/json; charset=utf-8',
   crossDomain: true,
   data: JSON.stringify(dados),
   type: 'POST',
   url: '//api.vtexcrm.com.br/acadeira/dataentities/CO/documents',
   success: function(data) {
   $("#contactForm").html("<p id='sucesso' style='width: 100%;text-align:center;'>AGRADECEMOS SEU CONTATO.</p>");
     console.log(data);
   },
   error: function(error){
  console.log(error);
   }
 });
        
        });
    });