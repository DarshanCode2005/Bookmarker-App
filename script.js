// class UI

// submit,validation,localstorage,render
const button = document.querySelector('.button-submit')
const siteName = document.querySelector('#sitename')
const siteUrl = document.querySelector('#siteurl')
const container = document.querySelector('.container-card')
var data
class UI{
    static submit(){
            let name = siteName.value
            let url = siteUrl.value
            data = {
                nameofbook:name,
                urlofsite:url
            }

            UI.storage()
            UI.clearInput()
            UI.renderCard()
    }

    static storage(){
        if(localStorage.getItem('listBook') == null){
            localStorage.setItem('listBook',JSON.stringify([data]))
        }
        else{
            let array = JSON.parse(localStorage.getItem('listBook'))
            array.push(data)
            localStorage.setItem('listBook',JSON.stringify(array))
        }
    }

    static renderCard(){
        let arrayOfElem = JSON.parse(localStorage.getItem('listBook'))
        if(arrayOfElem != null){
            container.innerHTML = ''
        arrayOfElem.forEach(element => {
            container.innerHTML += `<div class="card">
                                        <p class="website-name">${element.nameofbook}</p>
                                            <div class="options">
                                                <button onclick = "location.href = '${element.urlofsite}'" class="visit">Visit</button>
                                                <button class="delete">Delete</button>
                                            </div>
                                        </div>`
            console.log(element)
        });
    }

        console.log(arrayOfElem)
    }
    static clearInput(){
        siteName.value = ''
        siteUrl.value = ''
    }
}

button.addEventListener('click',UI.submit)


document.addEventListener('DOMContentLoaded',UI.renderCard)