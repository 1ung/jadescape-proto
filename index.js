// Get the modal
var modal = document.getElementById('accessModal');

// Get the button that opens the modal
var btn = document.getElementById("access-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-access")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

var amenModal = document.getElementById('amenModal');

var amenBtn = document.getElementById("amen-btn");

var amenSpan = document.getElementsByClassName("close-amen")[0];

amenBtn.onclick = function() {
    amenModal.style.display = "block";
}

amenSpan.onclick = function() {
    amenModal.style.display = "none";
}

var apartModal = document.getElementById('apartModal');

var apartBtn = document.getElementById("apart-btn");

var apartSpan = document.getElementsByClassName("close-apart")[0];

apartBtn.onclick = function() {
    apartModal.style.display = "block";
}

apartSpan.onclick = function() {
    apartModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    else if (event.target == amenModal) {
        amenModal.style.display = "none";
    }
    else if (event.target == apartModal) {
        apartModal.style.display = "none";;
    }
}