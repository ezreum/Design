function imageZoom(imgID, resultID) {
    var img, lens, result;
    img = document.getElementById(imgID);
    result = $('#'+resultID);
    /* Create lens: */
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /* Insert lens: */
    img.parentElement.prepend(lens);

    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    
    
    function moveLens(e) {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      /* Calculate the position of the lens: */
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      /* Prevent the lens from being positioned outside the image: */
      if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
      if (x < 0) {x = 0;}
      if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
      if (y < 0) {y = 0;}
      /* Set the position of the lens: */
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /* Display what the lens "sees": */
      //result.background = url(imgID) (x) + "px ," + (y) + "px";
      var imageUrl = $("img").attr("src"); 
      result.css( "background-image", 'url('+imageUrl + ')');
      if (x>265 && y>175) {
        result.css( "translate", "265 px, 175px" );
      }
      else if(x>265 && y<175){
        //result.css( "transform-origin", "" );
      } else {
        
      }
      //result.css( "transform-origin", "" );
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  } 