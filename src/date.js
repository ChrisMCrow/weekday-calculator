
export function thisDate() {
    let today = new Date(2018, 9, 10);
    console.log(`${today.getFullYear()} ${today.getMonth()} ${today.getDate()} ${dateToDay(today)}`);

    return today.getDay();
}

export function dateToDay(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let returnDay = days[date.getUTCDay()];
    return returnDay;
}