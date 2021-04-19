console.log('Client side JS will be loaded here');



const weatherForm = document.querySelector('form');
const input = document.querySelector('input');
const id = document.querySelector('#message');


weatherForm.addEventListener('submit',(e)=>{
e.preventDefault();
const location = input.value;
id.textContent = 'Loading...'

fetch(`http://localhost:5000/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
        if(data.err){
            id.textContent = data.err
            console.log(data.error)
        }
        else{
            id.textContent = data.forecast
            console.log(data)

        }
    })
})
console.log('test',location)
})