var s1=0;
var s2=0;
turn=1
var q="";
var a="";
var qs="";
var qsa="";
function login(){
    localStorage.setItem("Player 1", document.getElementById("name1").value);
    localStorage.setItem("Player 2", document.getElementById("name2").value);
    localStorage.setItem("Score 1", 0);
    localStorage.setItem("Score 2", 0);
    window.location.assign("main.html");
}
function switchf(){
    document.getElementById("a").style.display="block";
    document.getElementById("ca").innerHTML="";
      if(a!="") 
      { 
        if(a==document.getElementById("a").value){
            if(turn==1){
                s1++;
            }else{
                s2++;
            }
        }else{
            document.getElementById("ca").innerHTML="The correct answer was: "+a;
        }
    } 

        if(turn==1){
            turn=2;
        }else{
            turn=1;
        }
        q=document.getElementById("qs").value;
        a=document.getElementById("qsa").value;
        document.getElementById("q").innerHTML=q;
        document.getElementById("score1").innerHTML="Score: "+s1;
        document.getElementById("score2").innerHTML="Score: "+s2;
        document.getElementById("a").value="";
        document.getElementById("qs").value="";
        document.getElementById("qsa").value="";
}

