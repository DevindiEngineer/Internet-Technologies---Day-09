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


            document.getElementById("lblResponce").innerHTML=result.candidates[0].content.parts[0].text;
        })
        .catch((error) => console.error(error));
}