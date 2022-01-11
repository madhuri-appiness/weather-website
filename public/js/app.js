const weatherForm = document.querySelector('form');
const input = document.querySelector('input');
const id = document.querySelector('#message');
const locationId= document.querySelector('#location')


weatherForm.addEventListener('submit',(e)=>{
e.preventDefault();
const location = input.value;
id.textContent = 'Loading...'

fetch(`/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
        if(data.err){
            id.textContent = data.err
            
        }
        else{
            locationId.textContent=data.location
            id.textContent = data.forecast
            console.log(data)
        }
        console.log(data)
    })
})
})