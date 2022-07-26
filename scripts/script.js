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


//////////click slider//////////

//////////click slider-end//////////



