function generate(){
    var randomNumber = Math.floor(Math.random() * 20) + 4;
    alert(randomNumber)
    for(var number = 4 ; number <= randomNumber; number += 2)
        if(number % 2 == 0){         
            alert(number)
        }
        else if(number = Math.floor(randomNumber - 1)){
            break
        }
}