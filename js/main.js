
// var name='Petya';
// var surname= 'Vasechkein';
// var age= 25;
// var c='Privet, mir'

// a=456;


// a = prompt('напиште значение переменной a');

// if(a==6){
//     alert('a=6');
// }
//  else{
//      alert('что то другое')
//  }

//  for (var i=0; i < 5; i++)
//  {
//      alert (i);
//  }


var user = {
    'name': 'pet',
    'surname': 'Васичкин',
    'age': 25
}

// alert ( user.name )

var mas = ['Петья', 'Васичкин', 25];
// alert (mas[2])

function doMagic ( a,b  ) {
    alert ( a + b );
}

// doMagic( 50, 50  );

var btn = document.getElementById ( 'btn' )

btn.onclick = function ( e ) {
    e.preventDefault();
    var text = document.querySelector ( 'p.intro' );
    text.classList.add('red');
    var img = document.querySelector ( '.desktop'  );
    img.style.display = 'none';
    document.querySelector('.sec-title').style.marginLeft = '450px';
    

} 


$(function () {
	$(window).scroll(function() {
	    $('#trip .sec-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});

    $(window).scroll(function() {
	    $('.future').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
	
});
