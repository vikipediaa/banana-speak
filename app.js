var  btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";
function getTranslationURL(input)
{
    return serverURL + "?" + "text="  + input
};
function errorHandler(error){
    // console.log("error occured",console.error);
    alert("something went worng");
}

function clickHandler()
{
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var tralatedText = json.contents.translated;
        outputDiv.innerText = tralatedText;
    }

    )
    .catch(errorHandler)
};
btnTranslate.addEventListener("click",clickHandler)
