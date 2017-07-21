 $(document).ready(function () {
            
            var $url = window.location.href;
            var $ver = $url.split("/")[2].split(".com")[0];

            console.log($ver);

            if ($ver == "houseshop.vtexcommercestable" || $ver == "www.houseshop" || $ver == "www.houseshop.vtexcommercestable"){
             $("title").html("House Shop");
             $(".link-logo.cadeira, footer .col-facebook, footer .col-social").hide();
             $(".link-logo.house").show();
             $("body").addClass("houseshop");
             $(".content-news .texto").show();
             $("head").find("link[rel='shortcut icon']").attr("href", "/arquivos/h-favicon.ico");
            }else{
            	$(".link-logo.cadeira").show();
                return
            }
      });