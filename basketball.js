let guestCounter = 0
let homeCounter = 0
let scoreGuest = document.getElementById("guest-score")
let scoreHome = document.getElementById("home-score")
function addGuestPoint1() {
    
    scoreGuest.textContent = guestCounter +=1
    
}
function addHomePoint1(){
    scoreHome.textContent = homeCounter +=1
}
function addGuestPoint2() {
    scoreGuest.textContent = guestCounter +=2
}
function addHomePoint2() {
    scoreHome.textContent = homeCounter+=2 
}
function addGuestPoint3() {
    scoreGuest.textContent = guestCounter+=3
}
function addHomePoint3() {
    scoreHome.textContent = homeCounter+=3
}
function newGame() {
    scoreGuest.textContent = guestCounter =0
    scoreHome.textContent = homeCounter = 0
}