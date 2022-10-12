$(document).ready(function(){

        
    $('.arrow_up').click(function() {
        $('html, body').animate({scrollTop:0},300)
    })
    $(window).scroll(function(){
        sc = $(window).scrollTop(); //현재 스크롤 위치
        $('#box').text(sc)

        // home scroll event 
        if(sc >= $('#home').offset().top+1){
            $('header').css({'position':'fixed','z-index':'2','top':'0','background-color':'#222'})
        }
        else{
            $('header').css({'position':'absolute','backgroundColor':'transparent'})
        }
        if(sc >= 0 && sc < 1650){
            $('.menu > li:nth-child(1)').css({'color':'#f00009'}).siblings().css({'color':'#fff'})
        }
        else if(sc >= 1650 && sc < 2450){
            $('.menu > li:nth-child(2)').css({'color':'#f00009'}).siblings().css({'color':'#fff'})
        }
        else if(sc >= 2450 && sc < 3250){
            $('.menu > li:nth-child(3)').css({'color':'#f00009'}).siblings().css({'color':'#fff'})
        }
        else if(sc >= 3250 && sc < 3900){
            $('.menu > li:nth-child(4)').css({'color':'#f00009'}).siblings().css({'color':'#fff'})
        }
        else if(sc >= 3900){
            $('.menu > li:nth-child(5)').css({'color':'#f00009'}).siblings().css({'color':'#fff'})
        }

//  section event //
        if(sc >= 500){
            $('.about_left').animate({'left':'0' , 'opacity':'1'},1500)
            $('.about_right').animate({'right':'0' , 'opacity':'1'},1500)
        }

        if(sc >= 1200){
            $('.skill_list > li').animate({'opacity':'1'},1500)
            $('.skill_tit').animate({'opacity' : '1'},1500)
            $('.skill_list>li>p').animate({'marginTop':'30px' , 'opacity':'1'},1500)
        }

        if(sc >= 2200){
            $('.mobile_left').animate({'left':'0' , 'opacity':'1'},1500)
            $('.mobile_right').animate({'right':'0' , 'opacity':'1'},1500)
        }

        if(sc >= 2800){
            $('.coding_menu').animate({'marginLeft':'0px' , 'opacity':'1'},1500)
            $('.coding_showbox').animate({'marginRight':'0' , 'opacity':'1'},1500)
        }
    })

// header menu btn //
    $('.menu > li:nth-child(1)').click(function(){
        $('body,html').stop().animate({'scrollTop':0},500)
    })
    $('.menu > li:nth-child(2)').click(function(){
        $('body,html').stop().animate({'scrollTop':1650},500)
    })
    $('.menu > li:nth-child(3)').click(function(){
        $('body,html').stop().animate({'scrollTop':2450},500)
    })
    $('.menu > li:nth-child(4)').click(function(){
        $('body,html').stop().animate({'scrollTop':3250},500)
    })
    $('.menu > li:nth-child(5)').click(function(){
        $('body,html').stop().animate({'scrollTop':3950},500)
    })

// home apple mockup btn//
    $('.home_num > li:nth-child(1)').click(function(){
        $('.imac_img > li').hide()
        $('.ipad_img > li').hide()
        $('.imac_img > li:nth-child(1)').fadeIn()
        $('.ipad_img > li:nth-child(1)').fadeIn()
        $(this).css({'color':'#f00009'})
        $(this).siblings().css({'color':'#fff'})
    })
    $('.home_num > li:nth-child(2)').click(function(){
        $('.imac_img > li').hide()
        $('.ipad_img > li').hide()
        $('.imac_img > li:nth-child(2)').fadeIn()
        $('.ipad_img > li:nth-child(2)').fadeIn()
        $(this).css({'color':'#f00009'})
        $(this).siblings().css({'color':'#fff'})
    })
    $('.home_num > li:nth-child(3)').click(function(){
        $('.imac_img > li').hide()
        $('.ipad_img > li').hide()
        $('.imac_img > li:nth-child(3)').fadeIn()
        $('.ipad_img > li:nth-child(3)').fadeIn()
        $(this).css({'color':'#f00009'})
        $(this).siblings().css({'color':'#fff'})
    })
    $('.home_num > li:nth-child(4)').click(function(){
        $('.imac_img > li').hide()
        $('.ipad_img > li').hide()
        $('.imac_img > li:nth-child(4)').fadeIn()
        $('.ipad_img > li:nth-child(4)').fadeIn()
        $(this).css({'color':'#f00009'})
        $(this).siblings().css({'color':'#fff'})
    })

    // coding click event 
    $('.coding_menu > li:nth-child(1)').click(function(){
        $(this).css({'color':'#f00009'})
        $(this).siblings().css({'color':'#fff'})
        $('.coding_showbox > li').fadeOut()
        $('.coding_showbox > li:nth-child(1)').fadeIn()
    })
    $('.coding_menu > li:nth-child(2)').click(function(){
        $(this).css({'color':'#f00009'})
        $(this).siblings().css({'color':'#fff'})
        $('.coding_showbox > li').fadeOut()
        $('.coding_showbox > li:nth-child(2)').fadeIn()
    })
    $('.coding_menu > li:nth-child(3)').click(function(){
        $(this).css({'color':'#f00009'})
        $(this).siblings().css({'color':'#fff'})
        $('.coding_showbox > li').fadeOut()
        $('.coding_showbox > li:nth-child(3)').fadeIn()
    })
    $('.coding_menu > li:nth-child(4)').click(function(){
        $(this).css({'color':'#f00009'})
        $(this).siblings().css({'color':'#fff'})
        $('.coding_showbox > li').fadeOut()
        $('.coding_showbox > li:nth-child(4)').fadeIn()
    })
    $('.coding_menu > li:nth-child(5)').click(function(){
        $(this).css({'color':'#f00009'})
        $(this).siblings().css({'color':'#fff'})
        $('.coding_showbox > li').fadeOut()
        $('.coding_showbox > li:nth-child(5)').fadeIn()
    })
    // web publishing //
    $('.web_menu>li:nth-child(1)').click(function(){
        $(this).css({'color':'#f00009'}).siblings().css({'color':'#fff'})
        $('.web_inner>li').fadeOut()
        $('.web_inner>li:nth-child(1)').fadeIn()
    })
    $('.web_menu>li:nth-child(2)').click(function(){
        $(this).css({'color':'#f00009'}).siblings().css({'color':'#fff'})
        $('.web_inner>li').fadeOut()
        $('.web_inner>li:nth-child(2)').fadeIn()
    })
    $('.web_menu>li:nth-child(3)').click(function(){
        $(this).css({'color':'#f00009'}).siblings().css({'color':'#fff'})
        $('.web_inner>li').fadeOut()
        $('.web_inner>li:nth-child(3)').fadeIn()
    })
    $('.web_menu>li:nth-child(4)').click(function(){
        $(this).css({'color':'#f00009'}).siblings().css({'color':'#fff'})
        $('.web_inner>li').fadeOut()
        $('.web_inner>li:nth-child(4)').fadeIn()
    })
    $('.web_menu>li:nth-child(5)').click(function(){
        $(this).css({'color':'#f00009'}).siblings().css({'color':'#fff'})
        $('.web_inner>li').fadeOut()
        $('.web_inner>li:nth-child(5)').fadeIn()
    })
    $('.web_menu>li:nth-child(6)').click(function(){
        $(this).css({'color':'#f00009'}).siblings().css({'color':'#fff'})
        $('.web_inner>li').fadeOut()
        $('.web_inner>li:nth-child(6)').fadeIn()
    })
    $('.web_menu>li:nth-child(7)').click(function(){
        $(this).css({'color':'#f00009'}).siblings().css({'color':'#fff'})
        $('.web_inner>li').fadeOut()
        $('.web_inner>li:nth-child(7)').fadeIn()
    })
    $('.web_menu>li:nth-child(8)').click(function(){
        $(this).css({'color':'#f00009'}).siblings().css({'color':'#fff'})
        $('.web_inner>li').fadeOut()
        $('.web_inner>li:nth-child(8)').fadeIn()
    })
    $('.web_menu>li:nth-child(9)').click(function(){
        $(this).css({'color':'#f00009'}).siblings().css({'color':'#fff'})
        $('.web_inner>li').fadeOut()
        $('.web_inner>li:nth-child(9)').fadeIn()
    })
    $('.web_menu>li:nth-child(10)').click(function(){
        $(this).css({'color':'#f00009'}).siblings().css({'color':'#fff'})
        $('.web_inner>li').fadeOut()
        $('.web_inner>li:nth-child(10)').fadeIn()
    })

    


    
})