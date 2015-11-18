/*Broswer Height */
$(window).ready(function(){
    $(function(){
        $('nav').css({'height':(($(window).height()))+'px'});

        $(window).resize(function(){
        $('nav').css({'height':(($(window).height()))+'px'});
        });
    });
});

/*Broswer Width */
$(window).ready(function(){
    $(function(){
        $('body').css({'width':(($(window).width()-350))+'px'});

        $(window).resize(function(){
        $('body').css({'width':(($(window).width()-350))+'px'});
        });
    });
});

/*Broswer Height */
$(window).ready(function(){
    $(function(){
        $('.content').css({'height':(($(window).height()-232))+'px'});

        $(window).resize(function(){
        $('.content').css({'height':(($(window).height()-232))+'px'});
        });
    });
});

/*year*/
var currentYear = (new Date).getFullYear();
$(document).ready(function() {
	$("#year").text( (new Date).getFullYear() );
});

/*yearC*/
var currentYear = (new Date).getFullYear();
$(document).ready(function() {
	$("#yearC").text( (new Date).getFullYear() );
});

/*scroll*/
$(document).ready(function() {
 
	$("a.Smooth").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});
 
});

/* blurr */
var content = document.querySelector('.content');
var duplicate = content.cloneNode(true);
var contentBlurred = document.createElement('div');
contentBlurred.className = 'content-blurred';
contentBlurred.appendChild(duplicate);

var header = document.querySelector('header');
header.appendChild(contentBlurred);

var contentWrapper = document.querySelector('.content-wrapper'),
translation;

contentWrapper.addEventListener('scroll',function(){
  translation = 'translate3d(0,' + (-this.scrollTop + 'px') + ',0)';
  duplicate.style['-webkit-transform'] = translation;
  duplicate.style['-moz-transform'] = translation;
  duplicate.style['transform'] = translation;
});

// offset to demo blurring
contentWrapper.scrollTop = 140;
