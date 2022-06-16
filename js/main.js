
//modal

var modal = document.querySelector(".modal");
var modalBtn = document.querySelector(".modal-btn");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

modalBtn.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);





//toggle btn

const toggleEl = document.querySelector('.toggle');
const toggleBtn = document.querySelector('.toggle_button');
let isToggle = true;
toggleBtn.addEventListener('click', function(){
    isToggle = !isToggle //!있는 값이 반대가 되도록 반환
    if (isToggle) {
        toggleEl.classList.add('active');
    }else{
        toggleEl.classList.remove('active');
    }
});
