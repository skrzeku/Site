$(function showimage () {
var modal = document.getElementById('myModal');

    
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('html');
var img1 = document.getElementById('lol1');

var modalImg = document.getElementById("img01");

    
    /*
img.onclick = function html( event ){
   
    modal.style.display = "block";
    modalImg.src = document.getElementById("myImg1").src;
    captionText.innerHTML = document.getElementById("myImg1").alt;
    event.preventDefault();
    console.log(this);
} 

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
} 
*/



 $(".modals").hover(function (event) {
         var ids = $(this).attr("id");
        if (ids=="html") {
             modal.style.display = "block";
    modalImg.src = document.getElementById("myImg").src;
    event.preventDefault();
            
        }
        if (ids=='bootstrap') {
           modal.style.display = "block";
    modalImg.src = document.getElementById("myImg2").src;
    event.preventDefault();
        }
     if (ids=='css') {
           modal.style.display = "block";
    modalImg.src = document.getElementById("myImg1").src;
    event.preventDefault();
     }
    if (ids=='js') {
           modal.style.display = "block";
    modalImg.src = document.getElementById("myImg3").src;
    event.preventDefault();
     }
    if (ids=='java') {
           modal.style.display = "block";
    modalImg.src = document.getElementById("myImg5").src;
    event.preventDefault();
     }
    if (ids=='c++') {
           modal.style.display = "block";
    modalImg.src = document.getElementById("myImg6").src;
    event.preventDefault();
     }
      
     if (ids=='git') {
           modal.style.display = "block";
    modalImg.src = document.getElementById("myImg7").src;
    event.preventDefault();
     }
    if (ids=='mvc') {
           modal.style.display = "block";
    modalImg.src = document.getElementById("myImg10").src;
    event.preventDefault();
     }  
     if (ids=='php') {
           modal.style.display = "block";
    modalImg.src = document.getElementById("myImg8").src;
    
    event.preventDefault();
     } 
     if (ids=='ps') {
           modal.style.display = "block";
    modalImg.src = document.getElementById("myImg11").src;
    event.preventDefault();
     } 
    if (ids=='angular') {
           modal.style.display = "block";
    modalImg.src = document.getElementById("myImg9").src
    event.preventDefault();
     } 
     
     
    }, function (event) {
     modal.style.display = "none";
     
 });
    
    
  /*  // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
} */

});