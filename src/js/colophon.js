import $ from 'jquery'; 
$(document).ready(function(){  

    /* STANDARD */ 
    
    $(window).on('resize',function(){
        if ($(window).width() < 860) {   
          
        }
        else {  
          // width more than 768px for PC  
        }
    });
    
    if ($(window).width() < 860) {
    
    $('.bxslider').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 470,
        slideMargin: 10,
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: '&nbsp;',
        prevText: '&nbsp;',
        responsive: true
    });
    
    /* VIDEOS */
    $('.bxslider1').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 470,
        slideMargin: 10,
        nextSelector: '#slider-next1',
        prevSelector: '#slider-prev1',
        nextText: '&nbsp;',
        prevText: '&nbsp;'  
    });
    
    } else {
    
    /* VIDEOS */
    $('.bxslider1').bxSlider({
        minSlides: 2,
        maxSlides: 2,
        slideWidth: 450,
        slideMargin: 10,
        nextSelector: '#slider-next1',
        prevSelector: '#slider-prev1',
        nextText: '&nbsp;',
        prevText: '&nbsp;'  
    });
    
    $('.bxslider').bxSlider({
        minSlides: 2,
        maxSlides: 2,
        slideWidth: 450,
        slideMargin: 10,
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: '&nbsp;',
        prevText: '&nbsp;',
        responsive: true
    });
    
    }
    
    /* LOGO HOMEPAGE */
    $('.bxslider3').bxSlider({
        auto: true,
        minSlides: 8,
        maxSlides: 8,
        slideWidth: 0,
        slideMargin: 0,
        moveSlides: 1,
        adaptiveHeight: true,
        slideWidth: 200,
    });
    
    $('.questions dl.first').click(function() {
        $(this).removeClass('first');
        $(this).toggleClass('out');
    });
    
    $('.productlist dl.first').click(function() {
        $(this).removeClass('first');
        $(this).toggleClass('out');
    });
    
    $('.questions dl dd').hide();
    $('.questions dl.first dd').show();
    $('.productlist dl dd').hide();
    $('.productlist dl.first dd').show();
    
    $('.questions dl dt').click(
        function() {
            var toggle = $(this).nextUntil('dt');
           // toggle.slideToggle();
            $('.questions dl dd').not(toggle).slideUp();
           // $(this).toggleClass('active'); 
    });
    
    $('.productlist dl dt').click(
        function() {
            var toggle = $(this).nextUntil('dt');
            toggle.slideToggle();
            $('.productlist dl dd').not(toggle).slideUp();
            $(this).toggleClass('active'); 
    });
    
    /* SIDEBAR */
    
    $('.categorybar').click(function() {
        $('.catbox').toggle();
        //$(this).toggleClass('catup'); 
    });
    
    
    $('.catbar').click(function() {
        $('.showcatbox').toggle();
        $('.catbar').toggleClass('catup'); 
    });
    
    
    $('a.ham').click(function() {
        $('.tablet.tabletmenu').toggle();
        $('.pagehide').hide();
        $('body').addClass('mobilebg');
    });
    
    $('.tabletclose').click(function() {
        $('.tablet.tabletmenu').hide();
        $('.pagehide').show();
        $('body').removeClass('mobilebg');
    });
        
        $('.contactlink').click(function() {
        $('.tablet.tabletmenu').hide();
        $('.pagehide').show();
        $('body').removeClass('mobilebg');
    });
        
    /* EBOOK */
    
    $('a.downloadit17004').click(function() {
        $('.ebooktrans.ebooktrans17004').toggle();
    });
    $('a.downloadit7073').click(function() {
        $('.ebooktrans.ebooktrans7073').toggle();
    });
    
    $('a.downloadit7078').click(function() {
        $('.ebooktrans.ebooktrans7078').toggle();
    });
    
    $('a.downloadit7076').click(function() {
        $('.ebooktrans.ebooktrans7076').toggle();
    });
    
    $('a.downloadit7074').click(function() {
        $('.ebooktrans.ebooktrans7074').toggle();
    });
    
    $('a.downloadit7071').click(function() {
        $('.ebooktrans.ebooktrans7071').toggle();
    });
    
    $('a.downloadit7069').click(function() {
        $('.ebooktrans.ebooktrans7069').toggle();
    });
        
    $('a.downloadit12835').click(function() {
        $('.ebooktrans.ebooktrans12835').toggle();
    });
    
    $('.closeebook').click(function() {
        $('.ebooktrans').hide();
    });
    
    $('.closeebook').click(function() {
        $('.ebooktransthankyou').hide();
    });
    
    /* PERSONAL TRAINING */
    
    $("a.plus").click(function () {
        $(".aboutnav").addClass('show');
    }); 
        
    $("a.closeplus").click(function () {
        $(".aboutnav").removeClass('show');
    }); 
        
    $(".aboutnav ul li a").click(function () {
        $(".aboutnav").removeClass('show');
    }); 
    
    /* fixed */
    
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
         //console.log(scroll);
        if (scroll >= 380) {
            //console.log('a');
            $(".sharing").addClass("fixed");
            $(".blogside").addClass("fixed");
        } else {
            //console.log('a');
            $(".sharing").removeClass("fixed");
            $(".blogside").removeClass("fixed");
        }
    });
        
    });