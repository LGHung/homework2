function report(n){
    var flag = true;
     if (n < 2){
        flag = false;
    }
    else if (n == 2){
        flag = true;
    }
    else if (n % 2 == 0){
      flag = false;
    }
    else{
        for (var i = 3; i < n-1; i+=2){
              if (n % i == 0){
                  flag = false;
                  break;
              }
        }
    }
    if (flag == true){
        alert(n + " là số nguyên tố");
    }
    else{
        alert(n + " không phải là số nguyên tố");
    }
}
function check(){
    var a = Number(document.getElementById("va").value)
    report(a);
}