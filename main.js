//qidiruv uchun funkisya

async function searchPhotos(qiymat) {
    const data = await fetch(`https:api.pexels.com/v1/search?query=${qiymat}`,{
        method: "GET",
        headers: {
        Accept: "application/json",
        Authorization: API_KEY
    }
    })

const response = await data.json()

console.log(response)
displayImages(response)
}

// hodisalar

input.addEventListener('input', (e) => {
    e.preventDefault();
    searchText = e.target.value;
})

btn.addEventListener('click', () => {
    if (input.value == "") {
        document.querySelector(".alert").innerHTML = "Hech narsa kiritmading, nimadir kirit!"
    } else {
        document.querySelector(".alert").innerHTML = "";
        tozalash();
        search = true;
        searchPhotos(searchText)
    }
})

function tozalash() {
    document.querySelector('.display_images').innerHTML = "";
}

defaultPhotos();