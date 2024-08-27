import './style.css'
import { modalOpen, modalClose } from './modal.js'

/**Open when clicked on click me button */
const btn = document.querySelector(`.btn`)
btn.addEventListener(`click`, function(){
  modalOpen(`modal1`)
})

/**Close Modal when clicked on x button */
document.querySelectorAll(`.page .close-btn`).forEach(function(closeIcon){
  closeIcon.addEventListener(`click`, function(){
    modalClose(`modal1`)
 })
})

document.querySelectorAll(`.page`).forEach(function(fullModal){
  fullModal.addEventListener(`click`, function(e){
    const isContainer = e.target.classList.contains("page");
    if(isContainer){
    modalClose(e.target.dataset.modal)
    }
 })
})