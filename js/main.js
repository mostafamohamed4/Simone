let about = $('#About').offset().top;
let services = $('#services').offset().top;
let Resume = $('#Resume').offset().top;
let Portfolio = $('#Portfolio').offset().top;
let Client = $('#Client').offset().top;
let Contact = $('#Contact').offset().top;
console.log(about);
$(window).scroll(() => {
    let scroll = $(window).scrollTop();
    if (scroll >= about - 50) {
        $('.navbar').css('background-color', 'black')
        document.querySelector(".active").classList.remove('active')
        $('#myAbout').addClass('active')
    } else {
        $('.navbar').css('background-color', 'transparent')
        document.querySelector(".active").classList.remove("active")
        $("#myhome").addClass("active")
    }
    if(scroll >= services){
        document.querySelector(".active").classList.remove('active')
        $('#myservices').addClass('active')
    }
    if(scroll >= Resume){
        document.querySelector(".active").classList.remove('active')
        $('#myResume').addClass('active')
    }
    if(scroll >= Portfolio){
        document.querySelector(".active").classList.remove('active')
        $('#myPortfolio').addClass('active')
    }
    if(scroll >= Client){
        document.querySelector(".active").classList.remove('active')
        $('#myClient').addClass('active')
    }
    if(scroll >= Contact){
        document.querySelector(".active").classList.remove('active')
        $('#myContact').addClass('active')
    }
    
})
