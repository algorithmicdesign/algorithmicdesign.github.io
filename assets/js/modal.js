////////////// FOR A LIMITED NUMBER OF MODALS

//// Get the modal
// var modal = document.getElementsByClassName('modal');
//// Get the button that opens the modal
// var btn = document.getElementsByClassName("textmodal");
//// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close");

// //// When the user clicks the button, open the modal 
// btn[0].onclick = function() {
//     modal[0].style.display = "block";
// }

// btn[1].onclick = function() {
//     modal[1].style.display = "block";
// }

// //// When the user clicks on <span> (x), close the modal
// span[0].onclick = function() {
//     modal[0].style.display = "none";
// }

// span[1].onclick = function() {
//     modal[1].style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal[0]) {
//          modal[0].style.display = "none";
//      }
//     if (event.target == modal[1]) {
//          modal[1].style.display = "none";
//      }  
// }

//////////////// MULTIPLE MODALS

// When the user clicks the button/link, open the modal
function openModal(id) {
    modal = document.getElementById(id);
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal(id) {
    modal = document.getElementById(id);
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = document.getElementsByClassName('modal');
    if (event.target.classList.contains('modal')) {
     for (var index in modal) {
      if (typeof modal[index].style !== 'undefined') modal[index].style.display = "none";    
     }
    }
}
