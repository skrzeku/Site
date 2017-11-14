(function() {
  var monitor = '#monitor';
  var image = '#image_ON';
    var lorem = '#lorem';
    var image1 = "#facebuk";
    var lorem1 = "#lorem1";
    var lorem2 = "#lorem2";
    var lorem3 = "#lorem3";
    var lorem4 = "#lorem4";
    var text = "#show_text";
    var paramonit = "#monitor p"
    
  var timeline;
    
    var tictext = 'Gra okienkowa kółko i krzyżyk napisana w języku java w środowisku IDE przy użyciu Eclipse. W grze dokładnie widzimy który gracz wybiera pole w tym momencie, został ułożony mechanizm zwycięstwa oraz możliwość zrestartowania gry w dowolnym momencie jak i po jej zakończeniu. Kod źródłowy z grą znajduje się w linku "java-game" po lewej stronie';
    var sitetext = 'Strona została wykonana przy użyciu Html5, CSS3 oraz Javascriptu z biblioteką Jquery. Strona dostosowana jest również do wszystkich urządzeń mobilnych poprzez użycie  bibliotek Bootstrap 3, który umożliwia tworzenie responsywnych stron. Zostało zaczerpnięte również kilka ogólno dostępnych pluginów m.in. TwinLite oraz translate.js. Kod źródłowy do strony znajduje się w linku "Site" po lewej stronie';
  function buildTimeline() {
      
    timeline = new TimelineMax({
      paused: true
    }); 
    
    timeline
    .to(image, .2, {
      width: '100%',
      height: '2px',
        marginLeft: '0%',
        marginTop: '90%',
      background: '#ffffff',
      ease: Power2.easeOut
    })
    .to(image, .2, {
      width: '0',
      height: '0',
      background: '#ffffff'
    });
  }
  
  function toggleSwitcherTV() {
    
      timeline.play();
   
  }
    
    
    var tl = new TimelineLite({paused:true});
     tl.staggerFrom(lorem, 0.3, {top:"-=30px", rotation:"-20deg", alpha:0, scale:1.8, ease:Back.easeOut}, 0.2);
    
    var tl2 = new TimelineLite({paused:true});
     tl2.staggerFrom("#monitor p", 0.6, {top:"-=30px", rotation:"-20deg", alpha:0, scale:1.8, ease:Back.easeOut}, 0.2);
    
    var tl3 = new TimelineLite({paused:true});
     tl3.staggerFrom("#my_image", 0.3, {top:"-=30px", rotation:"-20deg", alpha:0, scale:1.8, ease:Back.easeOut}, 0.2);
    
    var tl4 = new TimelineLite({paused:true});
     tl4.staggerFrom(text, 0.3, {top:"-=30px", rotation:"-20deg", alpha:0, scale:1.8, ease:Back.easeOut}, 0.2);
    
    var tl5 = new TimelineLite({paused:true});
     tl5.staggerFrom("#lorem2", 0.3, {top:"-=30px", rotation:"-20deg", alpha:0, scale:1.8, ease:Back.easeOut}, 0.2);
    
    
    
  // Initialize
  $(document).ready(buildTimeline);
  
  // index $ omnie 
 $(document).on('click', image, function() {
       
      toggleSwitcherTV();
      
      $("#image_ON").fadeOut(1000, function() {
          
          $(lorem).fadeIn(1000, function(ev) {
              tl.play();
              ev.preventDefault();
          });
          
          
          
      });
    
  });
    
    
    $(image).on("click", function() {
       
      toggleSwitcherTV();
      
      $(this).fadeOut(1000, function() {
          
          $("#my_image").fadeIn(1000, function(ev) {
              tl3.play();
              ev.preventDefault();
          });
          
          
          
      });
    
  });
    
    // kontakt
    $(".fa").click(function(ev) {
    var media = $(this).attr("id");
      if (media =="face") {
      
      $(text).fadeOut(1000, function() {
          $(text).text("/pawelskrzeszewski92");
$(this).wrap('<a href="https://www.facebook.com/pawelskrzeszewski92"><a/>');
          
          $(text).fadeIn(1000, function() {
              tl2.play();
          });
          
      }); 
      }
      if (media =="gmail"){
          
      $(text).fadeOut(2000, function() {
          
          $(text).text("pawelskrzeszewski92@gmail.com");
$(this).wrap('<a href="https://www.gmail.com"><a/>');
          //$(this).css("padding-top", "10vh");
          $(this).fadeIn(1000, function() {
              tl2.play();
          });
      });
      };
        if (media =="git") {
           $(text).fadeOut(2000, function() {
          
          $(text).text("github.com/skrzeku");
$(this).wrap('<a href="https://github.com/skrzeku"><a/>');
          $(text).fadeIn(1000, function() {
              tl2.play();
          });
      });
        };
         if (media =="linked") {
            $(text).fadeOut(2000, function() {
          $(text).text("in/pawelskrzeszewski");
$(this).wrap('<a href="https://www.linkedin.com/in/pawe%C5%82-skrzeszewski-847a3413a/"><a/>');
          $(text).fadeIn(1000, function() {
              tl2.play();
          });
      });
        };
        if (media =="tictactoe") {
             
            $(monitor).children().fadeOut(2000, function() {
               
                $(monitor).children().remove();
                var txt5 =  $("<p></p>").text(tictext);
                $(monitor).append(txt5);
    
               $(paramonit).attr('id', 'showin_text').hide();
                 $(paramonit).addClass("trn");
                checkcookies();
               // $(paramonit).append( '<a href="https://github.com/skrzeku/java-game">java game</a>' );
               var inside_monitor = $(monitor).children();
                var tl4 = new TimelineLite({paused:true});
     tl4.staggerFrom(inside_monitor, 0.3, {top:"-=30px", rotation:"-20deg", alpha:0, scale:1.8, ease:Back.easeOut}, 0.2);
                $(inside_monitor).fadeIn(2000, function() {
              tl4.play();
          });
      });
        };
        if (media =="site") {
            $(monitor).children().fadeOut(2000, function() {
                $(monitor).children().remove();
                var txt5 =  $("<p></p>").text(sitetext);
                $(monitor).append(txt5);
               $(paramonit).attr('id', 'showin_text').hide();
                 $(paramonit).addClass("trn");
                checkcookies();
               //$(paramonit).append( '<a href="https://github.com/skrzeku/java-game" class="trn">site</a>' );
               var inside_monitor = $(monitor).children();
                var tl4 = new TimelineLite({paused:true});
     tl4.staggerFrom(inside_monitor, 0.3, {top:"-=30px", rotation:"-20deg", alpha:0, scale:1.8, ease:Back.easeOut}, 0.2);
                $(inside_monitor).fadeIn(2000, function() {
              tl4.play();
          });
      });
        };
      
    
     ev.preventDefault(); 
  });
    
})();
