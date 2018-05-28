$(document).ready(function(){
	
	$('#sizePicker').submit(function makeGrid(grid) {
		/* ------- Clear previous grid (if present) ------- */
		$('#pixelCanvas').empty();
		
		/* ------- Select size input ------- */
		let row_input = $('#inputHeight').val();
		let col_input = $('#inputWidth').val();
		for (i = 1; i <= row_input; i++) {
		    $('table').append("<tr></tr>");
		    for (j = 1; j <= col_input; j++) {
				$('tr:last').append("<td></td>");
				$('td').attr("class", 'cells');
		    }
		}
		
		/* ------- Select color input ------- */
		$('.cells').click(function (event) {
			const paint = $('#colorPicker').val();
       if($(this).attr('style')){
    $(this).removeAttr('style');
  }
       else{
      $(this).attr('style','background-color:'+paint);
    }
			// $(event.target).css('background-color', paint);
		});
    
   
		
		return false;
	});
});

function resetCanvas() {
	$('#pixelCanvas').empty(); 
}

function resetColor() {
    $('td').css({"background-color": ""});
  }

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 180,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#4c4cff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
