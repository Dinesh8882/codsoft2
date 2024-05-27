const menuOpen = () => {
    const menu = document.querySelector("#menu");
    const list = document.querySelector(".left ul");
    let bool = true

    menu.addEventListener("click", function () {
        if (bool == true) {
            gsap.to(list, {
                height: "200px"
            })
            bool = false
        }
        else {
            gsap.to(list, {
                height: "0px"
            })
            bool = true
        }
    })
}
menuOpen();


const seafunk = ()=>{
    const search = document.querySelector(".hero .right .btn")
    const input = document.querySelector('.hero .right .form-input')
    const logo = document.querySelector('.left span');
    const menuIcon = document.querySelector('#menu');
    
    
    input.addEventListener('focus', () => {
    
        let innerWidth = window.innerWidth
    
        console.log(innerWidth)
        if (innerWidth < 550) {
    
            gsap.to(input, {
                width: 200
            })
            gsap.to(logo, {
                width: "0px",
                overflow: "hidden"
            })
    
        }
    
    })
    
    input.addEventListener('blur', () => {
        let innerWidth = window.innerWidth
    
        if (innerWidth < 550) {
            gsap.to(input, {
                width: 50
            })
    
            gsap.to(logo, {
                width: "100px",
                // overflow:"visible"
            })
        }
    })
    
}
seafunk()

