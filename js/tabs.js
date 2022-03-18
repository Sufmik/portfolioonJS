const tabButtons = document.querySelectorAll('.design-list__item')
const tabDescription = document.querySelectorAll('.design__descr')
const tabImages = document.querySelectorAll('.design-images')
const leftBlock = document.querySelectorAll('.design-block__img')
const logo = document.querySelectorAll('.design__title')

const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden')
        } else {
            elem.classList.add('hidden')
        }
    })
}

tabButtons.forEach((tabButton, index) => {
    tabButton.addEventListener('click', (event) => {
        const dataValue = tabButton.dataset.tabsHandler

        //отображение и скрытие блока лого
        logo.forEach((view, indexView) => {                     //ДОМАШНЕЕ ЗАДАНИЕ ДЕНЬ 1
            if (index === indexView) {
                view.classList.remove('hidden')
                document.title = view.innerText                 // УСЛОЖНЕННОЕ ЗАДАНИЕ ДЕНЬ 1
            } else {
                view.classList.add('hidden')
            }
        })

        changeContent(tabDescription, dataValue)
        changeContent(tabImages, dataValue)
        changeContent(leftBlock, dataValue)                     //ДОМАШНЕЕ ЗАДАНИЕ ДЕНЬ 1

        //отображение и скрытие подчеркивания при нажатии на кнопку
        tabButtons.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add('design-list__item_active')
            } else {
                btn.classList.remove('design-list__item_active')
            }
        })
    })
})