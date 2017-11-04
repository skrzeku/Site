   function jump_flag1 () {
          var flag = '#flag1';
     var tl2 = new TimelineLite({paused:true});
   tl2.fromTo(flag, 0.5, {top:0}, {top:-20, ease:Back.easeOut}) 
    .to(flag, 0.5, {top:0}, "-=0.25");
   
        tl2.play();
      };
          function jump_flag2 () {
               var flag2 = '#flag2';
     var tl3 = new TimelineLite({paused:true});
   tl3.fromTo(flag2, 0.5, {top:0}, {top:-20, ease:Back.easeOut}) 
    .to(flag2, 0.5, {top:0}, "-=0.25");
   
        tl3.play();
          };
      