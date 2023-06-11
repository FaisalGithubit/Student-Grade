function grade(){

    let student=document.querySelector("#Student");
    let total=+document.querySelector("#Total").value;
    let Obnum=+document.querySelector("#Obnum").value;
        res=((Obnum/total)*100).toFixed(0);
    document.querySelector("#Percentage").innerHTML=`Your Percantage is ${res}%`
    alert(`Your Percantage is ${res}%`)

    if(res<100 && res>=90 ){
        document.querySelector("#Grade").innerHTML=`Your Grade is A+`;
     } else  if(res<89 && res>=80 ){
        document.querySelector("#Grade").innerHTML=`Your Grade is A`;
    } else  if(res<79 && res>=70 ){
        document.querySelector("#Grade").innerHTML=`Your Grade is B`;
    } else  if(res<69 && res>=60 ){
        document.querySelector("#Grade").innerHTML=`Your Grade is C`;
    } else  if(res<60 && res>=45 ){
        document.querySelector("#Grade").innerHTML=`Your Grade is D`;
    } else  if(res<45 && res>=30 ){
        document.querySelector("#Grade").innerHTML=`Your Grade is E`;
    } else  if(res<30 && res>=0 ){
        document.querySelector("#Grade").innerHTML=`Your Grade is F`;
    } 
    }

