import BagsFootwear from "./data/Bags&Footwear.js"
import BeautyHealth from "./data/BeautyHealth.js"
import Electronics from "./data/Electronics.js"
import HomeAndKitchen from "./data/Home&Kitchen.js"
import JewelleryAccessories from "./data/Jewellery&Accessiores.js"
import Kids from "./data/Kids.js"
import Men from "./data/Men.js"
import WomenEthnic from "./data/WomenEthnic.js"
import WomenWestern from "./data/WomenWestern.js"


let inputSearchE1 = document.querySelector(".inputSearch")
let recentInput = []
let formInputE1 = document.getElementById("inputForm")
const listofRecentE1 = document.querySelector(".listofRecent")


inputSearchE1.addEventListener("keydown", () => {
    // console.log(inputSearchE1)
    if (inputSearchE1.value) {
        document.getElementById("closeSearch").style.display = "block"
    }
    else {
        document.getElementById("closeSearch").style.display = "none"
    }
})

formInputE1.addEventListener("submit", (e) => {
    e.preventDefault()
    let listofRecentHTMLE1 = ""
    recentInput.unshift(inputSearchE1.value)
    console.log(recentInput);

    if (recentInput.length > 0) {
        for (let i = 0; i < recentInput.length; i++) {
            listofRecentHTMLE1 +=`
            <div class="recentItem">
            <div class="recentIcon">
                <img src="./images/recent.png" alt="">
            </div>
            <p>${recentInput[i]}</p>
           </div>`

        }
        listofRecentE1.innerHTML=listofRecentHTMLE1
    }
    

})

//function reuseable
function renderSubMenu(id,data) {
    let temp = document.getElementById(id)

function tempFunc() {
    return data.map(e1 => {
        let list ="";
        list = e1.data.map(element => `<p>${element}</p>`).join(" ")
        return`
        <div class="column">
            <h4>${e1.heading}</h4>
            ${list}
        </div>
        `
    }).join("")
}
temp.innerHTML=tempFunc()
    
    
}

// womenEthic
 renderSubMenu("womenEthic",WomenEthnic)


//WomenWestern
renderSubMenu("womenWestern",WomenWestern)


//Men
renderSubMenu("men",Men)


//kids
renderSubMenu("kids",Kids)


//home & Kitchen
renderSubMenu("HomeAndKitchen",HomeAndKitchen)


//Beauty & Health
renderSubMenu("beautyAndHealth",BeautyHealth)


//Jewllery & Accessiores
renderSubMenu("jewlleryAndAccessories",JewelleryAccessories)


//BagsFootwear
renderSubMenu("BagsFootwearid",BagsFootwear)

//Electronics
renderSubMenu("electronics",Electronics)






