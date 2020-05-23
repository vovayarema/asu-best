const requestURL = 'https://raw.githubusercontent.com/VladIsLaugh/json/master/data.json';
const container = document.getElementsByClassName("features-wrap")[0]

document.getElementById("getMore").addEventListener("click", (e)=>{
    e.preventDefault()
    draw()
})



async function draw(){

    let response = await fetch(requestURL);

    if (response.ok) { 
       let json = await response.json();
       json.forEach(el => {  
        createBlock(el)
       });

       
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
    
} 

function generateImg(){
    let id = Math.floor(Math.random() * 5)+1;
    return `<img src="images/feature-icon-0${id}.svg" alt="Feature ${id}">`
}



function createBlock(el){
    var block = document.createElement("div");
    block.classList.add("feature")
    block.classList.add("text-center")
    block.classList.add("is-revealing")
    block.setAttribute('style', "visibility: visible;");

    block.innerHTML =` <div class="feature-inner">
        <div class="feature-icon">
            ${generateImg()}
        </div>
        <h4 class="feature-title mt-24">${el.title}</h4>
        <p class="text-sm mb-0">${el.description}</p>
    </div>`
    container.appendChild(block)

}

