const click = document.getElementById('clickMe')
const checkbox = document.getElementById('check')

click.addEventListener('click', e => {
    checkbox.checked = !checkbox.checked;
    console.log(e)
})



