$(document).ready(function() {
    function fadeLoadingAnimation() {
      $('#loading-animation').fadeIn(100, function() {
        $(this).fadeOut(1000, function() {
          // After fading out, make the main-site visible
          $('.main-site').css('display', 'block');
        });
      });
    }


    function addLoremIpsumText() {
       var loremIpsum1 = "EGIRL.DEV";
      var loremIpsum2 = "is NOT built for mobile devices!";
      var loremIpsum3 = "JS reads your User-Agent.";
      var loremIpsum4 = "Have a nice day.";

      // Insert Lorem Ipsum text letter by letter
      insertTextLetterByLetter('#loading-text-1', loremIpsum1);
      insertTextLetterByLetter('#loading-text-2', loremIpsum2);
      insertTextLetterByLetter('#loading-text-3', loremIpsum3);
      insertTextLetterByLetter('#loading-text-4', loremIpsum4);
    }

    // Function to insert text letter by letter
    function insertTextLetterByLetter(elementId, text) {
      var index = 0;
      var interval = setInterval(function() {
        if (index < text.length) {
          $(elementId).append(text[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Adjust the interval for typing speed DO NOT CHANGE DO NOT CHANGE DO NOT CHANGE
    }


    setTimeout(function() {
      $('#no-phones-svg').fadeIn(500);
    }, 3000); // I fucking hate this

    // Call the functions after a certain delay
    setTimeout(addLoremIpsumText, 2000); // Add Lorem Ipsum text after 2 seconds
    setTimeout(fadeLoadingAnimation, 10000); // Fade loading animation after 10 seconds
  });
  

  $(document).ready(function() {
    $("#fadeinout").fadeIn(2000).delay(6000).fadeOut(1000);
});