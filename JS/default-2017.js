$(document).ready( function(){


	 // MONTA MENU PRINCIPAL
        function montaMenu() {
            var a, b, colecao, fade, h3, l, t;
            colecao = $('#prateleiramenu div ul');
            var h = $('#top-menu h3');

            $('#top-menu h3').each(function() {
                $(this).append('<div class="dropdown"></div>');
                $(this).find('.dropdown').prepend($(this).next());
            });
            
            var i = 0;
            $("div#prateleiramenu div.prateleira-menu").each(function() {
                $(this).appendTo("#top-menu .container > h3:eq(" + i + ") .dropdown");
                $(this).find("h2").remove();
                $(this).find(".helperComplement").remove();
                i = i + 1;
             });
            
            $('#top-menu h3.lancamentos .dropdown, #top-menu h3.combos .dropdown, #top-menu h3.corporativos .dropdown').remove();

			if( $(window).width() < 991 ){
    			var $menu = $('#top-menu .container').html();
    				$("#menu-mobile .recebe-menu").html($menu);
			}

            $("#menu-mobile h3").each(function() {
                $(this).find("div.prateleira-menu").remove();
                var $href = $(this).find("a.menu-item-texto").attr("href");
                    $(this).find("ul").append("<li class='all-dept'><a href=" + $href + ">Todos</a></li>");
                    $(this).find("a.menu-item-texto").removeAttr("href");       
            }); 

            $i = "n1";
    		$(".recebe-menu >  h3").click(function(){
        		if ($i == "n1") {
        			$(this).find(".dropdown").slideToggle();
            		$(this).addClass("ativo");

            		$i = "s1";
       			}else {
       				$(this).find(".dropdown").slideToggle();
       				$(this).removeClass("ativo");
          			
           			$i = "n1";
       			}
	   		});

            $('#top-menu').css('visibility', 'visible');
            $("#menu-mobile h3").find(".dropdown").parent("h3").addClass("drop");

        }
    //

     setTimeout(montaMenu, 100); 

	 if( $.fn.Mobilemenu ){
		$(document).Mobilemenu();
	 }

	if( $.fn.ADMAKEadvancedFilter ){
		$(document).ADMAKEadvancedFilter({
            tipoFiltros     : {},
		});
	}

	$('.col-mini-cart').ADMAKEminiCart({
		miniCartQtd : '.mini-cart-qty-admake',
	});

	var $btnComprar = $('.btn-add-buy-button-asynchronous');
	if( $btnComprar.length ){
		$btnComprar.html('<i class="fa fa-cart-plus" aria-hidden="true"></i> Comprar');
	}

	if( $.fn.owlCarousel ){

		var $fullbanner = $(".fullbanner");
		if( $fullbanner.length ){
			$fullbanner.owlCarousel({
			 	items 			: 1,
			    singleItem 		: true,
			    autoPlay 		: true,
			    stopOnHover 	: true,
			    navigation 		: true,
			    navigationText 	: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
			    pagination 	 	: false,
			    autoHeight 		: false,
			});
		}

		var $showCaseOwl = $(".showcase-owl .prateleira > ul");
		if( $showCaseOwl.length ){
			$showCaseOwl.find('.helperComplement').remove();
			$showCaseOwl.owlCarousel({
			 	items 				: 4,
			    autoPlay 			: false,
			    stopOnHover 		: true,
			    pagination 	 		: false,
			    itemsDesktop 		: [1199,3],
			    itemsDesktopSmall 	: [980,3],
			    itemsTablet 		: [768,2],
			    itemsMobile 		: [479,1],
			    navigation 			: true,
			    navigationText 		: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
			});
		}

	}

	$("#main-content .vitrine .prateleira ul").find('.helperComplement').remove();
	

	$i = "n";
    $("#admake-advanced-filter > .box-filtro .sub-titulo").click(function(){
        if ($i == "n") {
            $(this).next(".opcoes").slideToggle();
            $(this).find("h3").addClass("ativo");

            $i = "s";
        }else {
           $(this).next(".opcoes").slideToggle();
           $(this).find("h3").removeClass("ativo");
            $i = "n";
        }
    });



});

$(document).ajaxStop(function() {

	$("#main-content .vitrine .prateleira ul").find('.helperComplement').remove();
	$(".product-info .shipping-box .freight-btn").val("Calcular");
    $('#comprar-flutuante .descricao-preco').each(function() {
  		var $de = $("#comprar-flutuante .descricao-preco .valor-de");
   		var $por = $("#comprar-flutuante .descricao-preco .valor-por");

            $(this).prepend('<div class="por-de"></div>');
            $(this).find('.por-de').prepend($de,$por);
    });
    var $btnComprarProduto = $('.buy-button.buy-button-ref');
	if( $btnComprarProduto.length ){

		if( $('#comprar-flutuante').length ){
			var $comprarFlutuante = $('#comprar-flutuante');
			var btnComprarTop = $('.product-info .price-box').offset().top;
			$(window).scroll( function(){
				if( $(window).width() > 768 ){
					if( $(this).scrollTop() >= btnComprarTop && !$comprarFlutuante.is(':visible') ){
						$comprarFlutuante.fadeIn( function(){
							var urlImage = ( $('#include #image-main').attr('src') != '' ) ? $('#include #image-main').attr('src') : '/arquivos/sem-foto.gif';
							$('#foto-comprar-flutuante').attr('src', urlImage);
							$('body').css('padding-bottom', $comprarFlutuante.height() + 2);
							
						});
					}else if( $(this).scrollTop() < btnComprarTop && $comprarFlutuante.is(':visible') ){
						$comprarFlutuante.fadeOut( function(){
							$('body').css('padding-bottom', 0);
							
						});
					}					
				}
			});
		}


		$btnComprarProduto.html('<i class="fa fa-cart-plus" aria-hidden="true"></i> Comprar');

		$btnComprarProduto.click( function(){
			var $this = $(this);
			var url   = $this.attr('href');
			if( url.indexOf('qty=1') > 0 ){
				$this.attr('href', url.replace('qty=1', 'qty='+ parseInt( $('.buy-button-box .box-qtd .qtd').val() ) ) );
			}
		});

		var $recebeQtyForm = $btnComprarProduto.parents('.buy-button-box');
		if( $recebeQtyForm.length ){
			$recebeQtyForm.append(
				'<div class="pull-left box-qtd">' +
				'	<input type="text" class="qtd pull-left" value="1" />' +
				'	<div class="bts pull-left">' +
				'		<button class="btn btn-mais">+</button>' +
				'		<button class="btn btn-menos">-</button>' +
				' 	</div>' +
				'</div>'
			);
			$(document).on('keypress' , '.buy-button-box .box-qtd .qtd', function(e){
				var tecla = ( window.event ) ? event.keyCode : e.which;   
			    if( ( tecla > 47 && tecla < 58 ) ){
			    	return true;
			    }else{
			    	if ( tecla == 8 || tecla == 0 ){
			    		return true;
			    	}else{
			    		return false;
			    	}
			    }
			});
			$(document).on('keyup' , '.buy-button-box .box-qtd .qtd', function(e){
				$('.buy-button-box .box-qtd .qtd').val( $(this).val() );
			});
			$(document).on('blur' , '.buy-button-box .box-qtd .qtd', function(e){
				var $this = $(this);
				if( $this.val() === '' || parseInt( $this.val() ) < 1 ){
					$('.buy-button-box .box-qtd .qtd').val(1);
				}else{
					$('.buy-button-box .box-qtd .qtd').val( $this.val() );
				}
			});
			$(document).on('click', '.buy-button-box .box-qtd .btn', function(){
				var $this = $(this);
				var $qtd  = $('.buy-button-box .box-qtd .qtd');
				var valor = parseInt( $qtd.val() );
				if( $this.hasClass('btn-mais') ){
					$qtd.val( valor + 1 );
				}else if( $this.hasClass('btn-menos') ){
					if( valor > 1 ){
						$qtd.val( valor - 1 );
					}
				}
			});
		}
	}

	$("div#sidebar-inst h4").click( function(){
		$(this).next("ul").slideToggle();
	});

});
$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
        $('#product-page .zopim').stop().animate({
            "bottom": "75px"
        });
    } else {
        $('#product-page .zopim').stop().animate({
            "bottom": "0px"
        });
    }
});