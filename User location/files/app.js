const button = document.querySelector("button");
button.addEventListener("click",() => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess,onError)
    } else {
        button.textContent = "Your browser doesn't support"
    }
});

function onSuccess(position){
    button.innerText = "Detecting your location...";
    let {latitude, longitude} = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=f2ae84c854554fe89726e5f7092e21c8`)
    .then(response => response.json())
    .then(data =>{
        let allDetails = data.results[0].components;
        console.table(allDetails);
        let {continent,country} = allDetails;
        button.innerText = `${continent}, ${country}`;
    }).catch(()=>{
        button.innerText = "Something went wrong";
    });
}
function onError(error){
    if(error.code == 1){
        button.innerText = "You denied the request";
    }else if(error.code == 2){
        button.innerText = "Location is unavailable";
    }else{
        button.innerText = "Something went wrong";
    }
    button.setAttribute("disabled", "true");
}
