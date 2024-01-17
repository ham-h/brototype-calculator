function num(c){
    document.getElementById('h').value=document.getElementById('h').value+c
}
function clr(){
    document.getElementById('h').value=''
}
function op(y){
 z=document.getElementById('h').value
 document.getElementById('h').value=''
g=y
}
function eql(){
    b=document.getElementById("h").value
    if(g=='+'){
        e=eval(z)+eval(b)
    }
    
    else if(g=='-'){
        e=eval(z)-eval(b)
    }
    else if(g=='x'){
        e=eval(z)*eval(b)
    }
    else if(g=='/'){
        e=eval(z)/eval(b)
    }
    else{
        e=eval(z)*eval(b)/100
    }
    document.getElementById("h").value=e

}