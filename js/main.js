function dc(){
    var date=new Date();
    var text;
    var zs;
    zs=date.getDay();
    if (zs!==0 && zs!==6)
    {document.getElementById(zs).style.backgroundColor="rgba(186, 231, 245, 0.8)";}
    if(date.getDate()>9)
    {text=date.getDate()}
    else {text="0"+date.getDate();}
    if(date.getMonth()+1>9)
    {text=text+"."+(date.getMonth()+1);}
    else {text=text+"."+"0"+(date.getMonth()+1);}
    text=text+"."+date.getFullYear();
    document.getElementById("text-data").innerHTML=text;
}
dc();
function show(){
    document.getElementById("cal").classList.toggle("show");
}