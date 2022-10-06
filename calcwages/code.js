document.getElementById("btn1").addEventListener('click' , onClick );

function onClick() {
    
    var normalhr = Number (document.getElementById("i1").value);
    var wage = Number (document.getElementById("i2").value);
    var overwage = Number (document.getElementById("i3").value);
    var hoursworked = Number (document.getElementById("i4").value);
    var totalwage;
    
    if (hoursworked<= normalhr){
        totalwage = (hoursworked * wage)
    } else
    {
        totalwage = (hoursworked - normalhr) * overwage;
        totalwage += normalhr * wage;
    }
   
    
    document.getElementById("output").innerHTML = totalwage + "Dollars";
}



