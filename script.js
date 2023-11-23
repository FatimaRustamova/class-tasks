//---1---
// let btn =  document.querySelector("#btn");
// let body = document.querySelector("body");

// let myFunction = ()=>{
//     let newDiv = document.createElement("div");
//     body.append(newDiv);
//     newDiv.style.backgroundColor = "cyan";
//     newDiv.style.width = "200px";
//     newDiv.style.height = "200px";
// }

// btn.addEventListener("click", myFunction);



//---2---

// let myArray = [
//     {
//         Name : "Fatime",
//         Age : 19
//     },
//     {
//         Name : "Xedice",
//         Age : 19
//     },
//     {
//         Name : "Amaliya",
//         Age : 20
//     }
// ];

// let btn =  document.querySelector("#btn");
// let body = document.querySelector("body");
    
// let ul = document.createElement("ul");

// for (let i = 0; i < myArray.length; i++) {
//     let li = document.createElement("li");
//     li.innerHTML += myArray[i].Name + "-" + myArray[i].Age;
//     ul.append(li);
// }

// body.append(ul);   



//---3---

// let btn =  document.querySelector("#btn");
// let body = document.querySelector("body");
// let input1 = document.querySelector("#input1");
// let input2 = document.querySelector("#input2");

// let myFunc = ()=>{
//     let div = document.createElement("div");

//     body.append(div);
//     div.append(input1.value + " " + input2.value);
// }

// btn.addEventListener("click", myFunc);



//---4---

// let nav = document.querySelector("nav");

// console.log(nav.children[1].children[0]);
// console.log(nav.lastElementChild);
// console.log(nav.children[1].children[2].firstElementChild);
// console.log(nav.children[1].children[1].firstElementChild.innerText);


//---5---

let body = document.querySelector("body");

let radio1 = document.createElement("input");
let radio2 = document.createElement("input");
let radio3 = document.createElement("input");

radio1.setAttribute('type', 'radio');
radio2.setAttribute('type', 'radio');
radio3.setAttribute('type', 'radio');

radio1.value = "Yaslilar ucun";
radio2.value = "Boyukler ucun";
radio3.value = "Kicikler ucun";

radio1.setAttribute('name', 'exam');
radio2.setAttribute('name', 'exam');
radio3.setAttribute('name', 'exam');

body.append(radio1, radio2, radio3);

let myFunc = ()=>{
    let amaliya = document.querySelector('input[name="exam"]:checked');
    console.log(amaliya.value);
}

btn.addEventListener("click", myFunc);

