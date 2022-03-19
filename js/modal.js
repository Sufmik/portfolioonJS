const modalButton = document.querySelectorAll('.more')
const modal = document.querySelector('.modal ')
const overlay = modal.querySelector('.overlay ')
const closeBtn = modal.querySelector('.modal__close ')

modalButton.forEach((button) => {                           //ДОМАШНЕ ЗАДАНИЕ ДЕНЬ 2
    button.addEventListener('click', () => {                //ДОМАШНЕ ЗАДАНИЕ ДЕНЬ 2
        modal.classList.remove('hidden')                    //ДОМАШНЕ ЗАДАНИЕ ДЕНЬ 2
    })                                                      //ДОМАШНЕ ЗАДАНИЕ ДЕНЬ 2
})                                                          //ДОМАШНЕ ЗАДАНИЕ ДЕНЬ 2

//modalButton.addEventListener('click', () => {
//    modal.classList.remove('hidden')
//})

overlay.addEventListener('click', () => {
    modal.classList.add('hidden')
})

closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden')
})