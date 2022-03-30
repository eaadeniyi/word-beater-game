//variables
const input = document.querySelector(".wordInput");
const button = document.querySelector(".button");
const generateButton = document.querySelector(".generate");

let randomWord = document.querySelector(".randomWord");
let countDown = document.querySelector(".countdown");
countDown.style.color = "orange";

//let inputValue = input.ariaValueMax;
//let randomName;

function inputGame(){
    generateButton.addEventListener("click", (e)=>{
       e.preventDefault();
       input.value="";

        const wordArray =[
            "january",
            "pretty",
            "locket",
            "brother",
            "byzantine",
            "supreme",
            "support",
            "realize",
            "descriptive",
            "contain",
            "resounding",
            "periscope",
            "debauchery",
            "acclimatize",
            "furniture",
            "nappy",
            "schmuck",
            "divestment",
            "camouflage",
            "achilles",
            "choreography",
            "laudanum",
            "progressive",
            "consider",
            "appreciate",
            "punishment",
            "homeless",
            "imbroglio",
            "centennial",
            "axiomatic",
        ];

        const randomNumber = Math.floor(Math.random()* wordArray.length);
        const randomArray = wordArray[randomNumber];
        randomWord.innerHTML = randomArray;
        randomWord.style.color = "green";
   
        //countdown  
        let count =5;
        let responseTime;
       responseTime = setInterval(()=>{
           if(count > 0){
               count--;
               countDown.innerHTML = "Countdown: " + count;
            }
            if(count === 0){
                countDown.innerHTML = "Time Up";
                countDown.style.color= "red";
            }
        
        }, 1000);

        //user live input
        input.addEventListener("keyup", ()=>{
            if(input.value === randomArray && count != 0){
                randomWord.innerHTML = "You Won!!!";
                clearInterval(responseTime);
                document.querySelector(".wordInput").disabled = true;
            }
            if(count === 0 && input.value === randomArray) {
                document.querySelector(".wordInput").disabled = true;
                randomWord.innerHTML = "You Lost."; 
                randomWord.style.color = "red";
                
            }
            if(count === 0 && input.value != randomArray) {
                document.querySelector(".wordInput").disabled = true;
                randomWord.innerHTML = "You Lost."; 
                randomWord.style.color = "red";
                
            }
        });

    }) ; 
}
inputGame();

//cancelling copying of the randomword


//document.getElementById("wordInput").disabled = true;