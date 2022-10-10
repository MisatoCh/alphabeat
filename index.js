function scrollTo(element) {
	window.scroll({
	  left: 0, 
	  top: 0, 
	  behavior: 'smooth'
	})
  }
  
  var button = document.querySelector('.top_button');
  var header = document.querySelector('#header');
  
  button.addEventListener('click', () => {
	scrollTo(header);
  })

  var minOffset = 50;
  window.onscroll = function() { 
    let has_class = document.body.classList.contains("is_scrolled");
 
    if (minOffset < document.documentElement.scrollTop ) {
      if (!has_class) {
          document.body.classList.add("is_scrolled");
      } 
    } else if (has_class) {
      document.body.classList.remove("is_scrolled")
 
    } 
  }
  
  let bg = document.querySelector('.mouse-parallax-bg');
  window.addEventListener('mousemove', function(e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;  
      bg.style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
  });