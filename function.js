const full_Name = document.getElementById("name");
const startingBid = document.getElementById("startingbid");
const education = document.getElementById("education");
const family_networth = document.getElementById("family_networth");
const skills = document.getElementsByClassName("skills");
const age = document.getElementsByName("age");
const reputation = document.getElementsByClassName("reputation");
const love_letter = document.getElementById("love_letter");

var total = document.getElementById("output");
var btn = document.getElementById("btn");

var calculate = () => {
    let fullName = full_Name.value;
    let price = Number(startingBid.value);
    let loveLetter = love_letter.value;
    console.log(price);
    price = getDropDownListValueEducation(price);
    console.log(price);
    price = getDropDownListValueFamily(price);
    console.log(price);
    price = getCheckboxValuesForLoop(skills, price);
    console.log(price);
    price = getRadioValue(age, price);
    console.log(price);
    price = getReputationValue(reputation, price);
    console.log(price);

    total.innerHTML=price;

    let person = {
        bride_name: fullName,    
        bride_price: price,
        letter_to_bride: love_letter
    }

    document.getElementById("output").innerHTML = `The price for your bride ${person.bride_name} is ${person.bride_price}. Your love letter is "${person.letter_to_bride.value}"`;
}

const getDropDownListValueEducation = (price) => {
    var coefficient = education.value;
    return price * coefficient;
}

const getDropDownListValueFamily = (price) => {
    var coefficient = family_networth.value;
    return price * coefficient;
}

const getRadioValue = (node_list, price) => {  
    node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value)
        }
    })
    return price;
}

const getCheckboxValuesReduce = (html_collection, price) => {
    let list = Array.from(html_collection)
    let result = list.reduce((price, item) => {
        if (item.checked) {
            return price + Number(item.value)
        }
    }, price)
    return result;
}

const getCheckboxValuesForLoop = (html_collection, price) => { 
    for (let i=0; i < html_collection.length; i++) {  
        if (html_collection[i].checked) {
            price = price + Number(html_collection[i].value)
        }
    }
    return price;
}

const getReputationValue = (html_collection, price) => { 
    for (let i=0; i < html_collection.length; i++) {  
        if (html_collection[i].checked) {
            if(i!=2){
                price = price * Number(html_collection[i].value)
            } 
            if(i==2){
                price = price - 200;
            }
        }
    }
    return price;
}

btn.addEventListener("click", function () {
    if (startingBid.value == "" || full_Name.value == ""){
        alert("Name or Starting Bid is empty");
    }
    else {
        calculate();
    }
});