/**Funtion of modal close */
export function modalClose(modalNumber){
   const fullModal = document.querySelector(`[data-modal="${modalNumber}"]`)
     fullModal.closest("[data-modal]").classList.add(`modal-close`);
   }
   
   /**Function of modal open */
   export function modalOpen(modalNumber){
    const  fullModal = document.querySelector(`[data-modal="${modalNumber}"]`)
      fullModal.classList.remove(`modal-close`);
    }
