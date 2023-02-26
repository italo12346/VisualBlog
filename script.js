const checkBox = document.querySelector('#dark-mode')
const page = document.querySelector('body')
const container = document.querySelector('.container')
let cont = 0
let next = 1
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


setInterval(
    ()=>{
        nextImage();
    },2000
)

function nextImage(){
    document.getElementById("slide"+next).checked=true;
    next++
    if(next > 3){
        next=1;
    }
}
