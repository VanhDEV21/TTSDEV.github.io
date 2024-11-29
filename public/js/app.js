console.log('Client side javascript file is loaded!')

// fetch('https://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })



const weatherForm =  document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location = search.value
    // console.log(location)
 messageOne.textContent = 'loading...'
 messageTwo.textContent = ''

    fetch('http://localhost:3002/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error

            }else {
                messageOne.textContent = data.location
                messageTwo.textContent = `Current Weather: ${data.forecast.current_weather}, Feels Like: ${data.forecast.feelslike}°F, Country: ${data.forecast.country}, Region: ${data.forecast.region}`
                
            }
        })
    })
})