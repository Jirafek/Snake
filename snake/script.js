const cont = document.querySelector('.container');
const input = document.querySelector('.number_inp');
const spans = document.querySelectorAll('span');
let cubix = 400

const colors = ['#CB49F5', '#5FE8FA', '#5BF0AC', '#F54C3D', '#ACF05B', '#FA5FDF', '#44FAF5', '#076BF6']

function checkColor() {
    for(let i=0;i<cubix;i++) {
        cont.innerHTML = ''
    }
    for(let i=0;i<cubix;i++) {

        const cub = document.createElement('div')
        cub.classList.add('cub')
    
        cub.addEventListener('mouseover', () => setColor(cub))
        cub.addEventListener('mouseleave', () => removeColor(cub))
    
      cont.append(cub)
    }
}
checkColor()

function setColor(elem) {
    elem.style.transition = '0s'
    elem.style.backgroundColor = colors[getColor()]
    elem.style.boxShadow = `0 0 30px ${colors[getColor()]}`
}
function removeColor(elem) {
    elem.style.transition = '5s ease'
    elem.style.backgroundColor = '#1d1d1d'
    elem.style.boxShadow = `0 0 0`
}
function getColor() {
    return Math.floor(Math.random()*colors.length)
}

input.addEventListener('keydown', (event) => {
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true) || (event.keyCode >= 35 && event.keyCode <= 39)) {
		return;
	} else {
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
	}
});
input.addEventListener('change', () => {
    cubix = input.value;
    checkColor()
})
for(let i=0;i<spans.length;i++) {
    spans[i].addEventListener('mouseover', () => {
        spans[i].style.color = colors[getColor()]
    })
}