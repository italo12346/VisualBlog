const checkBox = document.querySelector('#dark-mode')
const page = document.querySelector('body')
const container = document.querySelector('.container')
let cont = 0
checkBox.addEventListener('change', () => {
    if (cont == 0) {
        cont++;
        console.log(cont);
        page.style.cssText =
            'background-color: #000;' +
            'color:#fff;'
        container.style.cssText =
            'background-color: #274360 ;'
    } else {
        cont = 0;
        console.log(cont);
        page.style.cssText =
            'background-color: #fff;'+
            'color:#000'
            ;
        container.style.cssText =
            'background-color: antiquewhite;'
            ;
    }
})