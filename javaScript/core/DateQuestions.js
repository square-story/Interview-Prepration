//calculate the number of days remaining until the next New Year

function remainingDays() {
    let today = new Date()
    let nextYear = today.getFullYear() + 1
    let newYearDate = new Date(`${nextYear}-01-01T00:00:00`)
    let differentInTime = newYearDate - today;
    let difference = Math.ceil(differentInTime / (1000 * 60 * 60 * 24))
    return difference
}

console.log('Remaining Days: ' + remainingDays() + " Days")


//Get today's date in YYYY-MM-DD format.

function getDateFormate() {
    return new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }).replace(/ /g, '-')
}

console.log(getDateFormate())

//Find how many days are left until your next birthday.

function getInfoAboutBirthDay(birthday) {
    let today = new Date()
    let getYear = today.getFullYear()

    let nextBirthday = new Date(`${getYear}-${birthday}`)


    //if birthday already passed
    if (today > nextBirthday) {
        nextBirthday = new Date(`${getYear + 1}-${birthday}`)
    }

    let difference = nextBirthday - today
    return Math.ceil(difference / (1000 * 60 * 60 * 24))
}

console.log("🎂 Days left until your next birthday: ", getInfoAboutBirthDay('06-july'))

//Display the current time in HH:mm:ss format (24-hour clock).

function displayTime() {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, "0")
    const minute = String(now.getMinutes()).padStart(2, '0')
    const second = String(now.getSeconds()).padEnd(2, "0")

    return `${hours} - ${minute} - ${second}`
}

//Add 7 days to the current date.

function addDays(days) {
    const now = new Date()
    return new Date(`${now.getDay() + days} / ${now.getMonth()} / ${now.getFullYear()}`).toLocaleString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })
}

console.log("Add 7 days to the current date: ", addDays(7))

console.log(displayTime())

function currentTime12Format() {
    const now = new Date()
    let hour = now.getHours()
    const ampm = hour > 12 ? "PM" : "AM";
    hour = hour % 12 || 12
    const minute = String(now.getMinutes()).padStart(2, "0")
    const second = String(now.getSeconds()).padStart(2, "0")
    return `${String(hour).padStart(2, "0")} - ${minute} - ${second}`
}


console.log(currentTime12Format())


function currentTimeExp() {
    let current = new Date();
    console.log(current.getDate())
    let midnight = new Date(current.getFullYear(), current.getMonth(), current.getDate());
    let difference = current - midnight
    let minutesGone = Math.floor(difference / (1000 * 60 * 60));
    console.log(`Minutes gone after midnight: ${minutesGone}`);
}

currentTimeExp()