const forms = document.querySelectorAll('.form')

forms.forEach((form) => {
    form.addEventListener('submit', (event) => {                        //submit обязателен
        event.preventDefault()


        const formData = new FormData(form)                             //получение данных из заполняемой формы

        const body = {}                                                 //объект

        formData.append('form', form.classList.value)                   //добавляем в объект указание с помощью какой-именно формы пользователь отправил данные

        formData.forEach((value, field) => {                            //получение данных из заполняемой формы  
            body[field] = value                                         //добавляем в объект ключь (field) со значением отправленным пользователем (value)
        })
        fetch('https://jsonplaceholder.typicode.com/posts', {           //отправка данных на сервер, первый аргумент адрес сервера, второй настройки
            method: 'POST',
            body: JSON.stringify(body),                                 //body может сразу принять объект
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => {
                if (response.ok) {                                      //проверка на ошибку при ответе от сервера
                    return response.json();
                } else {
                    throw new Error(response.status)                    //получение инфы в случае ошибки
                }
            })
            .then(data => {                                             //ответ от сервера в случае успеха
                alert('Данные отправленны успешно!')                    //рекомендуется уведомлять пользователя об отправке данных
            })
            .catch(error => {                                           //отработка ошибки
                alert('Данные отправленны с ошибкой ' + error.message)  //уведомление пользователя в случае ошибки
                console.log(error.message);
            })
            .finally(() => {                                            //finally отрабатывает в любом случае
                form.reset()                                            //отчистка формы отправки    
            })
    })
})