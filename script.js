function getUserInfo () {

    let ttpRequist = new XMLHttpRequest()

    ttpRequist.addEventListener('load', function(){
        let incomingInfo = this.responseText
        let incomingInfoJs = JSON.parse(incomingInfo)
        console.log(incomingInfoJs)

        let ul = document.createElement('ul')

        incomingInfoJs.data.forEach(function(item){

            let li = document.createElement('li')
            li.textContent = `NAME: ${item.first_name}, SURNAME: ${item.last_name},  EMALE: ${item.email}`
            ul.appendChild(li)
        })

        document.getElementById('User-Info').appendChild(ul)

    })

    ttpRequist.open('get', 'https://reqres.in/api/users?page=2')
    ttpRequist.send()

}

getUserInfo()