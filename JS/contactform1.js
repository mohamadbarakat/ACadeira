val();

    var jsonCO =    {
                    "client": co_client.replace("CL-",""),
                    "description": co_description,
                    "type": co_type
                    };

    var urlCO = "http://api.vtexcrm.com.br/" + storeName + "/dataentities/" + dataEntity + "/documents/";

    $.ajax({
        headers: {
            "Accept": "application/vnd.vtex.ds.v10+json",
            "Content-Type": "application/json"
        },
        data: JSON.stringify(jsonCO),
        type: 'PATCH',
        url: urlCO,
        success: function (data) {
          console.log(data);
          ResetMessages()
          $("#co_message_success").show();
          $("#cl_first_name").val("");
          $("#cl_last_name").val("");
          $("#cl_email").val("");
          $("#cl_home_phone").val("");
          $("#cl_phone").val("");
          $("#co_type").val("");
          $("#co_description").val("");
        },
        error: function (data) {
          console.log(data);
          ResetMessages()
          $("#co_message_error").show();
        }
    });
}


function ResetMessages()
{
    $("#co_message_loading").hide();
    $("#co_message_validate").hide();
    $("#co_message_success").hide();
    $("#co_message_error").hide();
}

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function FormValidate()
{
    var isFormValidate = true;

    if($("#cl_first_name").val() == ""){
        isFormValidate = false;
        $("#cl_first_name").focus();
    }
    if((isFormValidate) && ($("#cl_last_name").val() == "")){
        isFormValidate = false;
        $("#cl_last_name").focus();
    }
    if((isFormValidate) && ($("#cl_email").val() == "")){
        isFormValidate = false;
        $("#cl_email").focus();
    }
    if((isFormValidate) && (!IsEmail($("#cl_email").val()))){
        isFormValidate = false;
        $("#cl_email").val("");
        $("#cl_email").focus();
    }
    if((isFormValidate) && ($("#cl_home_phone").val() == "")){
        isFormValidate = false;
        $("#cl_home_phone").focus();
    }
    if((isFormValidate) && ($("#co_type").val() == "")){
        isFormValidate = false;
        $("#co_type").focus();
    }
    if((isFormValidate) && ($("#co_description").val() == "")){
        isFormValidate = false;
        $("#co_description").focus();
    }
    
    if(isFormValidate){
        ResetMessages()
        $("#co_message_loading").show();
    }else{
        ResetMessages()
        $("#co_message_validate").show();
    }

    return false;
}

function FormCreate(storeName, dataEntity, htmlElementId, messageLoading, messageValidation, messageSuccess, messageError){
    var htmlContent = '';
    
    htmlContent += '<div id="co_message_loading" class="alert alert-info" style="display:none;">' + messageLoading + '</div>';
    htmlContent += '<div id="co_message_validate" class="alert alert-warning" style="display:none;">' + messageValidation + '</div>';
    htmlContent += '<div id="co_message_success" class="alert alert-success" style="display:none;">' + messageSuccess + '</div>';
    htmlContent += '<div id="co_message_error" class="alert alert-danger" style="display:none;">' + messageError + '</div>';
    htmlContent += '<form id="co_form" action="javascript:FormValidate();" method="post">';
    htmlContent += '<input type="hidden" id="master_data_store_name" name="master_data_store_name" value="' + storeName + '" />';
    htmlContent += '<input type="hidden" id="master_data_data_entity" name="master_data_data_entity" value="' + dataEntity + '" />';
    htmlContent += '<div class="form-field string required cl_first_name">';
    htmlContent +=      '<label for="cl_first_name">Nome *</label>';
    htmlContent +=      '<input id="cl_first_name" placeholder="Nome" maxlength="100" name="cl_first_name" type="text" class="form-control" />';
    htmlContent += '</div>';
    htmlContent += '<div class="form-field string required cl_last_name">';
    htmlContent +=      '<label for="cl_last_name">Sobrenome *</label>';
    htmlContent +=      '<input id="cl_last_name" placeholder="Sobrenome" maxlength="100" name="cl_last_name" type="text" class="form-control"  />';
    htmlContent += '</div>';
    htmlContent += '<div class="form-field string required cl_email">';
    htmlContent +=      '<label for="cl_email">E-mail *</label>';
    htmlContent +=      '<input id="cl_email" placeholder="E-mail" maxlength="100" name="cl_email" type="text" class="form-control" >';
    htmlContent += '</div>';
    htmlContent += '<div class="form-field string required cl_home_phone">';
    htmlContent +=      '<label for="cl_home_phone">Telefone *</label>';
    htmlContent +=      '<input id="cl_home_phone" placeholder="Telefone" maxlength="100" name="cl_home_phone" type="text" class="form-control"  />';
    htmlContent += '</div>';
    htmlContent += '<div class="form-field string required cl_phone">';
    htmlContent +=      '<label for="cl_phone">Celular</label>';
    htmlContent +=      '<input id="cl_phone" placeholder="Celular" maxlength="100" name="cl_phone" type="text" class="form-control"  />';
    htmlContent += '</div>';
    htmlContent += '<div class="form-field string required co_type">';
    htmlContent +=      '<label for="co_type">Tipo *</label>';
    htmlContent +=      '<select name="co_type" id="co_type" class="form-control" >'
    htmlContent +=          '<option value="">Selecione</option>'
    htmlContent +=          '<option value="Sugestão">Sugestão</option>'
    htmlContent +=          '<option value="Dúvida">Dúvida</option>'
    htmlContent +=          '<option value="Reclamação">Reclamação</option>'
    htmlContent +=      '</select>'
    htmlContent += '</div>';
    htmlContent += '<div class="form-field string required co_description">';
    htmlContent +=      '<label for="co_description">Descrição *</label>';
    htmlContent +=      '<textarea id="co_description" name="co_description" placeholder="Mensagem" class="form-control" ></textarea>';
    htmlContent += '</div><br><br>';
    htmlContent += '<div class="form-field submit"><input id="commit" name="commit" type="submit" value="Enviar"  class="btn btn-danger"></div>';
    htmlContent += '</form>';
    
    $("#"+htmlElementId).html(htmlContent);
}
