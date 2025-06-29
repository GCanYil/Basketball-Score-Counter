let home = document.getElementById("homeScore")
let guest = document.getElementById("guestScore")

function highlight() {
    let homeInt = Number(home.textContent);
    let guestInt = Number(guest.textContent);
    if (homeInt > guestInt) {
        let winner = document.getElementById("homez");
        let loser = document.getElementById("guestz");
        winner.style.color = "green";
        loser.style.color = "white"
    }
    else if (guestInt > homeInt) {
        let winner = document.getElementById("guestz");
        let loser = document.getElementById("homez");
        winner.style.color = "green";
        loser.style.color = "white"
    }
}

function increaseHome1() {
    let homeInt = Number(home.textContent);
    homeInt += 1;
    home.textContent = homeInt;
    highlight();
}
function increaseHome2() {
    let homeInt = Number(home.textContent);
    homeInt += 2;
    home.textContent = homeInt;
    highlight();
}
function increaseHome3() {
    let homeInt = Number(home.textContent);
    homeInt += 3;
    home.textContent = homeInt;
    highlight();
}
function increaseGuest1() {
    let guestInt = Number(guest.textContent);
    guestInt += 1;
    guest.textContent = guestInt;
    highlight();
}
function increaseGuest2() {
    let guestInt = Number(guest.textContent);
    guestInt += 2;
    guest.textContent = guestInt;
    highlight();
}
function increaseGuest3() {
    let guestInt = Number(guest.textContent);
    guestInt += 3;
    guest.textContent = guestInt;
    highlight();
}

