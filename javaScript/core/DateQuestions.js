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