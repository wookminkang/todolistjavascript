



const API_KEY = "259f979ef574808b0a644b8c954c43d4";


function req(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`


    axios.get(api_url)
    .then((res)=>{
        
        const { data } = res;

        const locationName = document.querySelector("#weather");
        const locationNameSpan = document.querySelector("#weather span:nth-of-type(1)");
        const locationNameSpan2 = document.querySelector("#weather span:nth-of-type(2)");

        locationNameSpan.innerText = data.name;
        locationNameSpan2.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        console.log(data.name, data.weather[0].main);
    })
    .catch((err)=>{
        console.log(err);
    })
}

function err(){
    alert(`실패입니다`);
}




navigator.geolocation.getCurrentPosition(req,err);