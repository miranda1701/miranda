let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  for(let i = 0; i<3;i++){
    sendApiRequest()
  }
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let response = await fetch(`https://dog.ceo/api/breeds/image/random`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
document.querySelector("#content").innerHTML += `
<div class="card" style="width: 18rem;">
  <img src="${data.message}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Random Dog, sucka!</p>
  </div>
</div>
`
}

