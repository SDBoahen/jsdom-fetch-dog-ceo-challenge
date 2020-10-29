console.log('%c HI', 'color: firebrick')




//  Deliverable 1 ----------


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


fetch(imgUrl)
.then(response => response.json())
.then(dogs => {

 const images = dogs.message
    
    images.forEach(imageUrl => {
      renderImage(imageUrl)
    })

})
function renderImage(imageUrl){

    const img = document.createElement("img")
    img.src = imageUrl

    const imageContain = document.querySelector('#dog-image-container')
    imageContain.append(img)
}








//  Deliverable 2 ----------


const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
.then(response => response.json())
.then(breed => {

    const allBreeds = breed.message
        // console.log(breed.message)
    Object.keys(allBreeds).forEach(breedList => {

        renderList(breedList)

    })
            console.log(Object.keys(allBreeds))

})
function renderList(breedList){

    const dogUl = document.querySelector('#dog-breeds')
    const dogLi = document.createElement("li")
    dogLi.textContent = breedList
    dogUl.append(dogLi)
    

}



/**
 * 
 * // CHALLENGE 1 CODE
 
 function renderImage(imageUrl) {
  const img = document.createElement("img")
  img.src = imageUrl
  const imageContainer = document.querySelector("#dog-image-container")
  imageContainer.append(img)
}
// when the page loads
// make a GET request


fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(data => {
    
    // when we have the data
    const images = data.message
    
    // append to the DOM
    images.forEach(imageUrl => {
      renderImage(imageUrl)
    })
  })
 */








 //  Deliverable 3 ----------


//  const dogUl = document.querySelector('#dog-breeds')

const breedListLis = document.querySelector('#dog-breeds')

            console.log(document.querySelectorAll('#dog-breeds li'))

breedListLis.addEventListener('click', function(event){

            console.log(event.target)
            
        if(event.target.matches("li")){

            event.target.style.color = "red"

        }

})




// lis = document.querySelectorAll('#dog-breeds li')
// lis.forEach( function(li) {

//     li.addEventListener("click", function() {

//         console.log("hi or some shit like that")

//         li.target.style.color = "red"
//         // li.style.color = "red"
//     })

// })


// lis = document.querySelectorAll("li")
// lis.forEach( function(li) {
//     li.addEventListener("click", function() {
//         li.style.color = "red"
//     })
// })








//  Deliverable 4 ----------


// filter ?
// sort ?
// startsWith()

const dropDown = document.querySelector('#breed-dropdown')

dropDown.addEventListener('change', function(e){
    

        console.log(e.target)

    const allLis = document.querySelectorAll("li")
    allLis.forEach(breed => {

        if(breed.innerText[0] != e.target.value){

        }
        
    })


    // if(e.target.matches('b')){

    //     e.target.startsWith('b')

    //     return `${e.target}`

    // }


})



