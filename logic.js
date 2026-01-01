let val;
let randomnumber;
function generateRandomNumber(){
    let min = 1;
    let max = 100;
    randomnumber = Math.floor(Math.random()*(max-min+1))+min;
    console.log(randomnumber);
}
document.getElementById("userInput")
        .addEventListener("keydown",function(event){
            if(event.key === "Enter"){
                val = this.value;
                 result();     
            }
        });
function getValue(){
    val = document.getElementById("userInput").value;
    result();
}
generateRandomNumber()
function result(){
    if(val === '')console.log('invalid input');
    else{
        val=Number(val);
        let output = document.getElementById("output");
        if(val == randomnumber){
             output.textContent="correct";
             output.classList.remove('wrong');
             output.classList.add('right');
        }
        else{
            output.textContent="Incorrect";
            output.classList.remove('right');
            output.classList.add('wrong');
        }
    }
}
