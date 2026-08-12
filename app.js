/*
function sendPromtOnAction() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application\\json");
    myHeaders.append("X-goog-api-key", "APIKEY");

    let userInput = document.getElementById("txtUserInput").value;

    const raw = JSON.stringify({
        contents: [{
            parts: [{
                text: userInput
            }]
        }]
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent", requestOptions)
        .then((response) => response.json())
        .then((result) => {


            document.getElementById("lblResponce").innerHTML = markdown.default(result.candidates[0].content.parts[0].text);
        })
        .catch((error) => console.error(error));
}
        

//import sum from "./sum.js";
//import getText from "./sum.js";


import {sum,getText,name} from "./sum.js";

let numSum = sum(10,20);
console.log(numSum);

console.log(getText());

//import a variable
console.log(name);
*/


import {addition,substraction,multiplication,division} from "./components/calculator.js";

let numSum1 = addition(10,20);
console.log(numSum1);

let numSum2 = substraction(10,20);
console.log(numSum2);

let numSum3 = multiplication(10,20);
console.log(numSum3);

let numSum4 = division(10,20);
console.log(numSum4);



        

