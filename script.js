const checkBox = document.querySelector('#dark-mode')
const page = document.querySelector('body')
let cont = 0
checkBox.addEventListener('change', () => {
    if (cont == 0) {
        cont++;
        console.log(cont);
        page.style.cssText =
            'background-color: #000;'
    }else{
        cont=0;
        console.log(cont);
        page.style.cssText =
            'background-color: #fff;'
    }
})