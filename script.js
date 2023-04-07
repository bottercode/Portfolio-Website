$(document).ready(function(){
    $(window).scroll(function(){
       
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
       
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

 
    $('button[type="submit"]').click(function(){
        $('.after-submit-msg').show();
    });

    
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
      
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
     
        $('html').css("scrollBehavior", "smooth");
    });

   
    var typed = new Typed(".typing", {
        strings: ["Full Stack Developer", "Cyber Security Enthusiast", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Full Stack Developer", "Cyber Security Enthusiast", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

  
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

$(document).ready(function() {
    var emailLink = $('.hire-me a');
    emailLink.click(function() {
        emailLink.text('devanshdwivedi68@example.com');
        setTimeout(function() {
            var tempInput = $('<input>');
            tempInput.val(emailLink.text());
            $('body').append(tempInput);
            tempInput.select();
            document.execCommand('copy');
            tempInput.remove();
            alert('Email copied to clipboard!');
            emailLink.text('Hire me');
        }, 1000);
    });
});
