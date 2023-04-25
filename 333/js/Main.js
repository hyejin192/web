$('nav ul li').mouseover(function(){
    $(this).find('.SubMenu').stop().slideDown();
})
$('nav ul li').mouseout(function(){
    $(this).find('.SubMenu').stop().slideUp();
})

// Slide 
$('#ImgsBar li a').click(function(event){
    // #에 의해서 새로고침되는 현상을 막아줌(화면을 줄였을 때 SlideBar를 누를 경우 위로 튕기는 현상을 막아줌)
    event.preventDefault();
    // a.attr(b) ==> b의 속성값을 가져와라
    // a.attr(b,c) ==> b가 가진 속성값을 c로 바꿔라
    var ImgLeft=$(this).attr('img-left') 
    console.log(ImgLeft)
    // $('#Imgs').animate({실행문},시간)
    $('#Imgs').animate({
        left:ImgLeft
    },1000)
})

// modal 팝업창
$('.partner_info').click(function(){
    // $('.modal').show()
    // show()는 시간을 줄 수 없음
    $('.modal').fadeIn()
})
$('.modal .close').click(function(){
    // $('.modal').hide()
    // hide() == display:none == 시간을 줄 수 없음
    $('.modal').fadeOut();
})

// window창
$('.contact').click(function(){
    var myWindow = window.open("contact.html", "Window", "width=200,height=100 , left=500 , top=300");
})

