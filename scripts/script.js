//////////data base//////////
let buildings = [
    building001 = {
        meters: 310,
        price: 2340000000,
        region: 1,
        picture: "./imgs/bu-001.jpg"
    },
    building002 = {
        meters: 400,
        price: 6700000000,
        region: 2,
        picture: "./imgs/bu-002.jpg"
    },
    building003 = {
        meters: 210,
        price: 195000000,
        region: 2,
        picture: "./imgs/bu-003.jpg"
    },
    building004 = {
        meters: 350,
        price: 4200000000,
        region: 1,
        picture: "./imgs/bu-004.jpeg"
    },
    building005 = {
        meters: 250,
        price: 4000000000,
        region: 1,
        picture: "./imgs/bu-005.jpg"
    },
    building006 = {
        meters: 150,
        price: 980000000,
        region: 6,
        picture: "./imgs/bu-006.jpg"
    },
    building007 = {
        meters: 700,
        price: 10600000000,
        region: 4,
        picture: "./imgs/bu-007.jpg"
    },
    building008 = {
        meters: 350,
        price: 6700000000,
        region: 4,
        picture: "./imgs/bu-008.jpg"
    },
    building009 = {
        meters: 350,
        price: 980000000,
        region: 5,
        picture: "./imgs/bu-009.png"
    },
    building010 = {
        meters: 350,
        price: 4000000000,
        region: 4,
        picture: "./imgs/bu-010.jpeg"
    },
    building011 = {
        meters: 430,
        price: 700000000,
        region: 3,
        picture: "./imgs/bu-011.jpg"
    },
    building012 = {
        meters: 120,
        price: 11000000000,
        region: 3,
        picture: "./imgs/bu-012.jpg"
    },
    building013 = {
        meters: 150,
        price: 4000000000,
        region: 1,
        picture: "./imgs/bu-013.jpg"
    },
    building014 = {
        meters: 500,
        price: 4000000000,
        region: 6,
        picture: "./imgs/bu-014.jpg"
    },
    building015 = {
        meters: 120,
        price: 700000000,
        region: 5,
        picture: "./imgs/bu-015.jpg"
    },
    building016 = {
        meters: 120,
        price: 4000000000,
        region: 6,
        picture: "./imgs/bu-016.jpg"
    },
]
//////////data base-end//////////


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
let index = 0;
function changeSlider(getTarget) {
    let target = getTarget;
    let content = target.parentElement.querySelector(".content-slider");
    let translateX;
    let i
    for (i = 0; i < (content.children.length); i++) content.children[i].style.display = "none";
    if (target.classList.contains("selector-prev")) {
        index--;
        translateX = 100
    }
    if (target.classList.contains("selector-next")) {
        index++;
        translateX = -100
    };
    if (index < 0) index = content.children.length - 1;
    if (index > content.children.length - 1) index = 0;
    content.children[index].style.display = "block";
    content.children[index].style.transform = `translateX(${translateX}%)`;
    setTimeout(() => {
        translateX = 0
        content.children[index].style.transform = `translateX(${translateX}%)`;
    }, 1);
}
addEventListener('click', (e) => {
    let target = e.target
    if (target.classList.contains("selector-prev") || target.classList.contains("selector-next")) changeSlider(target);
})
//////////click slider-end//////////


//////////home btn//////////
if (location.pathname.includes('home'))
    document.querySelector('#navbar1').firstElementChild.style.display = "none";
else document.querySelector('#navbar1').firstChild.style.display = "block";
//////////home btn-end//////////


//////////point number//////////
function pointNumber(valueNumber) {
    let value = valueNumber
    let refreshValue = value.split('.').join('').split('')
    let dotePlace = []
    let finalValue
    for (let i = 1; i < refreshValue.length; i++) {
        i % 3 == 0 ? dotePlace.push(i + dotePlace.length) : null;
    }
    for (let z = 0; z < dotePlace.length; z++) {
        refreshValue.splice(refreshValue.length - (dotePlace[z]), 0, `.`)
    }
    finalValue = refreshValue.join('')
    return finalValue || value
}
//////////point number-end//////////
// addEventListener('sele')

//////////input point number//////////
addEventListener('input', inputBehavior)
function inputBehavior(e) {
    e.target.value = pointNumber(e.target.value)
}
//////////input point number-end//////////


//////////search//////////
addEventListener('click', (e) => { if (e.target.id == "search-btn-results") SearchResults(e) })
addEventListener('DOMContentLoaded', (e) => {
    let buildingsResultRandom = []
    for (let i = 0; i < buildings.length; i++) {
        let price = buildings[i].price
        let meters = buildings[i].meters
        let region = buildings[i].region
        let pic = buildings[i].picture
        buildingsResultRandom.push({ price, meters, region, pic })
    }
    MakeResults(buildingsResultRandom)
})

function SearchResults(e) {
    this.searchPrices = e.target.parentElement.querySelector("#search-prices").value.split('.').join('');
    this.searchMeters = e.target.parentElement.querySelector("#search-meters").value.split('.').join('');
    this.searchRegions = e.target.parentElement.querySelector('#search-regions').selectedIndex;
    console.log(searchRegions)
    document.querySelector('#search-results').innerHTML = ''
    this.buildingsResult = []
    buildings.forEach((building) => {
        if ((this.searchPrices > building.price || !this.searchPrices) &&
            (this.searchMeters > building.meters || !this.searchMeters) &&
            (this.searchRegions == building.region || this.searchRegions == 0 || this.searchRegions == -1)) {
            let price = building.price;
            let meters = building.meters;
            let region = building.region
            let pic = building.picture;
            this.buildingsResult.push({ price, meters, region, pic })
        }
    })
    MakeResults(this.buildingsResult)
}

function MakeResults(buildingsResult) {
    buildingsResult.forEach((result) => {
        let divRes = document.createElement('div')
        divRes.className = "search-card"
        divRes.innerHTML =
            `<img class="search-card-img" src=${result.pic} alt="">
                <div class="search-card-detail">
                    <div class="search-card-txt"><span class="t"></span>متراژ:<span class="d point-number">${result.meters}</span></div>
                    <div class="search-card-txt"><span class="t"></span>قیمت:<span class="d point-number">${result.price}</span></div>
                    <div class="search-card-txt"><span class="t"></span>منطقه:<span class="d">${result.region}</span></div>
                    <div class="send-suggestion">ارسال پیشنهاد</div>
                </div>`
        document.querySelector('#search-results').appendChild(divRes)
    })
    Array.from(document.querySelectorAll('.point-number')).forEach((pn) => {
        pn.innerHTML = pointNumber(pn.innerHTML);
    })
}
//////////search-end//////////

