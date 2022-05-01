
//carrusel anidado
if ($(window).width() > 800) 
{

    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots:true,
        arrows:true,
        autoplay:true,
        autoplaySpeed:2000,
        infinite: true,
    });
}
else{
    if ($(window).width() < 800) 
    {

        $('.slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots:true,
            arrows:true,
            autoplay:true,
            autoplaySpeed:2000,
            infinite: true,
        });
    }
    else
    {
        if ($(window).width() < 500) 
        {
            $('.slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
                arrows:true,
                autoplay:true,
                autoplaySpeed:2000,
                infinite: true,
            });
        }
    }
}

// solo para pc
$(function(){
    
    if ($(window).width() > 800){
		$('header nav').css({
            'top': '-200px',
			opacity: 0,
			marginTop: 0
		});

		$('header nav').animate({
			opacity: 1,
			marginTop: '0px'
		},3500);
	}

    if ($(window).width() > 800){
		$('header img').css({
			opacity: 0,
			marginTop: 0
		});

		$('header img').animate({
			opacity: 1,
			marginTop: '-55px'
		},3500);
	}


    //scroll con el carrusel 
    if ($(window).width() > 800){
		$('#cb').click(function(){

            $('html, body').animate({scrollTop:740},'1000')
        });
    
        
        $('#st').click(function(){
    
            $('html, body').animate({scrollTop:2250},'1000')
    
        });
        
        
        $('#lp').click(function(){
    
            $('html, body').animate({scrollTop:3690},'1000')
        });
    
    
        $('#or').click(function(){
    
            $('html, body').animate({scrollTop:5200},'1000')
    
        });
        
    
        $('#pt').click(function(){
    
            $('html, body').animate({scrollTop:6635},'1000')
    
        });
        
        
        $('#bn').click(function(){
    
            $('html, body').animate({scrollTop:8010},'1000')
        });
    
    
        $('#pd').click(function(){
    
            $('html, body').animate({scrollTop:9220},'1000')
    
        });
    
        
        $('#tj').click(function(){
    
            $('html, body').animate({scrollTop:10516},'1000')
    
        });
        
        
        $('#cq').click(function(){
    
            $('html, body').animate({scrollTop:11755},'1000')
        });
	}

});