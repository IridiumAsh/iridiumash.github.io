$(document).ready(function() {
  $("#copyright").click(function(){ 
  $(this).css('color','purple'); 
});


document.getElementById('copyright').onclick = function () { 
   this.style.color = 'purple';
}