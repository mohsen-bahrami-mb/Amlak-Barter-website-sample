//////////navbar top scroll//////////
addEventListener('scroll', () => {
    let navTop = document.querySelector(".nav-top")
    let scrollPage = document.documentElement.scrollTop
    if (scrollPage > 487 && navTop && scrollPage < 576) {
        navTop.style.top = "0.5rem"
        navTop.style.backgroundColor = "var(--Trans-back-color2)"
    }
    if (scrollPage < 487 && navTop && scrollPage < 576) {
        navTop.style.top = "1.5rem"
        navTop.style.backgroundColor = "var(--Trans-back-color1)"
    }
});
//////////navbar top scroll-end//////////


//////////collapse//////////
addEventListener("click", (e) => {
    function ClickBehavior(firstState, lastState) {
        let mytarget
        this.firstState = firstState;
        this.lastState = lastState;
        if (e.target.attributes.mytarget) {
            mytarget = e.target.attributes.mytarget.value;
            e.target.classList.toggle(this.firstState);
            e.target.classList.toggle(this.lastState);
            Array.from(e.target.children).forEach((childTag) => {
                childTag.classList.toggle(this.firstState)
                childTag.classList.toggle(this.lastState)
            })
            let targetTag = document.querySelector(`#${mytarget}`);
            targetTag.classList.toggle("collapse-menu")
            targetTag.classList.toggle("collapse-menu-on")
            Array.from(targetTag.children).forEach((childTag) => {
                childTag.classList.toggle("collapse-item");
            })
        }
        if (e.target.parentElement.attributes.mytarget) {
            mytarget = e.target.parentElement.attributes.mytarget.value;
            e.target.parentElement.classList.toggle(this.firstState);
            e.target.parentElement.classList.toggle(this.lastState);
            Array.from(e.target.parentElement.children).forEach((sibTag) => {
                sibTag.classList.toggle(this.firstState)
                sibTag.classList.toggle(this.lastState)
            })
            let targetTag = document.querySelector(`#${mytarget}`);
            targetTag.classList.toggle("collapse-menu")
            targetTag.classList.toggle("collapse-menu-on")
            Array.from(targetTag.children).forEach((childTag) => {
                childTag.classList.toggle("collapse-item");
            })
        }
    }
    new ClickBehavior("btn", "btn-un");
})
//////////collapse-end//////////


//////////wlcome slider//////////
let numberWelcomeSlider = 1;
let addOpacity = 1
let welcomeSlider = document.querySelector("#wel-slider");
setInterval(() => {
    if (numberWelcomeSlider > 3) numberWelcomeSlider = 1
    welcomeSlider.style.opacity = `${addOpacity}`
    welcomeSlider.style.backgroundImage =
        `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), var(--welcome-cov-img${numberWelcomeSlider})`;
    addOpacity += 0.1;
}, 50)
setInterval(() => {
    if (addOpacity > 1) addOpacity = 0
    numberWelcomeSlider++
}, 6000)
//////////wlcome slider-end//////////

document.querySelector(".active").las
//////////click slider//////////
addEventListener("click", (e) => {
    let clickSlider = e.target.parentElement;
    let childs = Array.from(clickSlider.children);
    if (e.target.className.includes("selector-slider") && e.target.className.includes("selector-left")) {
        childs.forEach((child)=>{
            if(child.className.includes("active") && child.previousElementSibling){
                // console.log(child.className.includes("active"))
                child.classList.remove('active');
                child.previousElementSibling.classList.add('active');
            } 
            else if(child.className.includes("active") && !child.previousElementSibling){
                child.classList.remove('active');
                clickSlider.children[clickSlider.children.length-2].classList.add('active')
            }
        })
    }
    // it has bug & return up result... so shuld create "content div" and (جداکنم) slectors 
    if (e.target.className.includes("selector-slider") && e.target.className.includes("selector-right")) {
        childs.forEach((child)=>{
            if(child.className.includes("active") && child.nextElementSibling != clickSlider.children[3]){
                // console.log(child.className.includes("active"))
                child.classList.remove('active');
                child.nextElementSibling.classList.add('active');
                console.log(child.nextElementSibling)
            } 
            else if(child.className.includes("active") && child.nextElementSibling == clickSlider.children[3]){
                console.log('aaa')
                child.classList.remove('active');
                clickSlider.children[0].classList.add('active')
            }
        })
    }
})
// console.info(document.querySelectorAll('.click-slider')[0].children)
//////////click slider-end//////////



