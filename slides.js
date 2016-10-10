$(function(){
      // Hide all images except the first within your "fade In" <div>
      $('.fadein img:gt(0)').hide();
      // Set an interval to occur every 3 seconds (3000ms)
      setInterval(function(){
        // Fade out the first element and fade in the next and then move the elements
        $('.fadein :first-child').fadeOut()
           .next('img').fadeIn()
           .end().appendTo('.fadein');}, 
        3000);
      });
