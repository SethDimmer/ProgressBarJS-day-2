// i want to be able to click the "next" button and have the progress bar move to the next step
// if i click on "previous" button i want to have it moved to the previous step 

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles  = document.querySelectorAll('.circle');
// the circles are put into a node list because i am using querySelectorAll

// i am wanting to access the progress line,previous button,next button, 
// and the circles.

let currentActive =  1
// this variable represents which index of the circle is active

// i am listening for a click for the next button.
// when i click i want to run a function
next.addEventListener("click", () => {
    //whatever the currentActive is and increment it by 1 
    currentActive++
    // console.log(currentActive)

    // i need to make it to where it does not go past 4

    //circles is a nodeList so i can treat it like an array
    // looping through the node list
    if(currentActive > circles.length) {
        // set the currentActive equal to the the length of the circles node list so it doesnot go past 4
        currentActive = circles.length
    }
    // console.log(currentActive)
    // it stays at 4 when clicking "next button"
    update()

})
prev.addEventListener("click", () => {
    //whatever the currentActive is and decrement it by 1 
    currentActive--
    // console.log(currentActive)


// if the currentActive is less than 1 then i know i am at the beginning
    if(currentActive < 1) {
        // set the currentActive equal to 1 since i do not want to go below 1 
        currentActive = 1
    }

    update()

})

function update() {
    // forEach lets me loop through my circles NodeList
    circles.forEach((circle,index) => {
        // forEach circle i am checking if the index of the PARTICULAR CIRCLE is 
        // less than the currentActive.
        if(index < currentActive) {
            // if so then i am adding the active class
            circle.classList.add('active')
        }
        else {
           circle.classList.remove('active')
        }
    })

    // active class for the progress bar
    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }


}
 


