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