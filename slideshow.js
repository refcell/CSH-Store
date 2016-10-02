var imgArray = [
                  'images/cshpac.jpg',
                  'images/ColdSpringHarborHighSchool.JPG',
                  'images/csh.jpg'],
                  curIndex = 0;
                  imgDuration = 3000;

              function slideShow() {
                  document.getElementById('imgGallary').className += "fadeOut";
                  setTimeout(function() {
                      document.getElementById('imgGallary').src = imgArray[curIndex];
                      document.getElementById('imgGallary').className = "";
                  },1000);
                  curIndex++;
                  if (curIndex == imgArray.length) { curIndex = 0; }
                  setTimeout(slideShow, imgDuration);
              }
              slideShow();
