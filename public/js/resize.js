const textarea = document.querySelector('.form-text')
const input = document.querySelector('.form-input')

function autoSize(event) {
    this.style.height = `auto`
    let autoHeight = event.target.scrollHeight
    this.style.height = `${autoHeight}px`
}

textarea.addEventListener('keyup', autoSize)
input.addEventListener('keyup', autoSize)
