//Modal element
let modal = document.getElementById('modal')
//Open modal element
let showModal = document.getElementById('showModal')
//Close Modal element
let closeModal = document.getElementById('btn-close')

showModal.addEventListener('click', openModal)

closeModal.addEventListener('click', hideModal)

//Window event
window.addEventListener('click', clickOutside)

//function to show modal
function openModal(){
  modal.style.display = 'block'
}

//function to hide modal
function hideModal(){
  modal.style.display = 'none'
}

//function to hid modal on outside click/ window event
function clickOutside(e){
  if(e.target == modal){
    modal.style.display = 'none'
  }
}
