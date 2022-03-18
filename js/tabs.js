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
        logo.forEach((view, indexView) => {
            if (index === indexView) {
                view.classList.remove('hidden')
                document.title = view.innerHTML
            } else {
                view.classList.add('hidden')
            }
        })

        changeContent(tabDescription, dataValue)
        changeContent(tabImages, dataValue)
        changeContent(leftBlock, dataValue)

        //отображение и скрытие подчеркивания при нажатии на кнопку
        tabButtons.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add('design-list__item_active')
            } else {
                btn.classList.remove('design-list__item_active')
            }
        })
    })

    //tabButton.addEventListener('click', () => {
    //    console.log('click2')
    //})
    //tabButton.onclick = () => {
    //    console.log('click');
})