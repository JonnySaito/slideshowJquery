$(document).ready(function(){
    var slideContainer = $('.slideContainer');
    setInterval(function() {

        slideContainer.addClass('transition').css('transform', 'translateX(-800px)');

        setTimeout(function(){
            var firstSlide = $('.slide').first();
            slideContainer.append(firstSlide);
            slideContainer.removeClass('transition').css('transform', 'translateX(0)');
        }, 700);

    }, 3000);


});



// $('#nextButton').click(function(){
//     var firstSlide = $('.slide').first();
//     // var clonedSlide = firstSlide.clone();
//     // firstSlide.remove();
//     // slideContainer.append(clonedSlide);
//     slideContainer.append(firstSlide);



// });

// $('#prevButton').click(function(){
//
//     console.log("previous button is clicked");
// })
