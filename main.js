const data = {
    catdata: [
        {
            breed: 'Ragdoll',
            url: 'https://free-classifieds-usa.com/oc-content/uploads/858/72049.jpg'
        },

        {
            breed: 'Bombay',
            url: 'http://www.mochablastburmese.com/yahoo_site_admin/assets/images/Katinka3.340145404_std.jpg'
        },

        {
            breed: 'Munchkin',
            url: 'https://www.zastavki.com/pictures/640x480/2014Animals___Cats_Little_munchkin_kitten_092277_29.jpg'
        },

        {
            breed: 'Russian Blue',
            url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Russian_Blue_kitten.jpg'
        },

        {
            breed: 'Abyssinian',
            url: 'http://www.abessinier.at/fotos/kitten/gross/kitten077.jpg'
        },

        {
            breed: 'Sphynx',
            url:  'https://i.pinimg.com/originals/8e/d5/35/8ed535cbd7dbc55085624bb17c656656.jpg'
        }
    
    ]
}

const catDivs = document.getElementsByClassName('Cats')

for (let index = 0; index < catDivs.length; index++) {
    const catDiv = catDivs[index];

    catDiv.onclick = function(event){
        const clickedCat = event.target.innerText
        const currentCat = data.catdata.find(cat => cat.breed === clickedCat)

        console.log(currentCat.url)
        // create img
        // assign a src with the currentCat url
        // event.target.appendChild(newImg)
    }
    
}

// catDivs.onclick = function(){

    // const catArray = data.catdata
    // for (let index = 0; index < catArray.length; index++) {
    //     const element = catArray[index];
    //     const currentCat = element;
        
    //     const breed = element.breed
    //     console.log(element.url)



        // if (breed === document.getElementsByClassName('Cats').innerHTML)
        // {
        //     displayCatImage(breed)
        // }

        // const firstCatName = document.getElementsByClassName('Cats').innerHTML
        // console.log(firstCatName)
        // const firstCatBreed = data.catdata[0].breed
        // if (firstCatId.innerText === firstCatBreed) {
        // runThis()
        // }
        
    // }
// }


// const firstDiv = document.getElementById('ragdoll')
// firstDiv.onclick = function runThis() {



// // console.log(firstCatId.innerText, firstCatBreed);

// // if (firstCatId.innerText === firstCatBreed) {
// //     displayCatImage()
// //  }
// // }

function displayCatImage(breed) {

    console.log(breed)
    if (breed === document.getElementsByClassName('Cats').innerHTML){

    }



// const firstCatBreed = data.catdata[0].breed
// const firstCatUrl = data.catdata[0].url

// const firstImage = document.createElement('img')
// firstImage.src = firstCatUrl
// firstDiv.appendChild(firstImage)
}
