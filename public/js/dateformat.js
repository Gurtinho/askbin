function dateFormat() {
    const dateHour = document.querySelector('.card-p').value
    const stringHour = dateHour.slice(0, 24)
    dateHour.innerText = stringHour
}
dateFormat()