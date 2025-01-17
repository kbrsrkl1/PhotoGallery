const btnEl = document.getElementById("btn");
const errorMessageEl = document.getElementById("errorMessage");
const galleryEl = document.getElementById("gallery")


async function fetchImage(){
    const inputValue = document.getElementById("input").value

    if(inputValue > 10 || inputValue < 2){
        errorMessageEl.style.display = "block"
        errorMessageEl.innerText = "Number should be between 1 and 11"
        galleryEl.innerHTML = "";
        return
    }

    let imgs = ""

    try {
    btnEl.style.display = "none"
    await fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random() * 1000)}&client_id=zKDQH2BYariVm15JjBNreBHQC6ohRNVy6bxX9PcIRYg
    `).then((res) => res.json().then((data) => {
        if(data){
            data.forEach((pic) => {
                imgs += `
                <img src = "${pic.urls.small}" alt="image"/>
                `;
                galleryEl.style.display = "block";
                galleryEl.innerHTML = imgs;
            })
        }
    })
);

    errorMessageEl.style.display = "none"
}        
    catch (error) {
        errorMessageEl.style.display = "block"
        errorMessageEl.innerText = "An error happend , try again later"
    }
    btnEl.style.display = "block";
}


btnEl.addEventListener("click", fetchImage)