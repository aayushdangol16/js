let a;
let b;
let c;

document.getElementById("button").onclick=function(){
    a=document.getElementById("atext").value;
    b=document.getElementById("btext").value;
    c=Math.round(Math.sqrt(Math.pow(a,2)+Math.pow(a,2)));
    document.getElementById("c").innerHTML="Side C= "+c;
} 