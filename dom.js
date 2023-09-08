document.querySelector('button').addEventListener("click", ()=>{alert("Hello world")})
function validateForm(){
    let i = document.forms.myForm.fname.value
    if (i == ""){
        alert("there is no value to submit")
        return false
    }
    myMove()
    return true
}
function upperCase(){
    const x = document.getElementsByName('fname')
    for (let i of x){
        i.value = i.value.toUpperCase();
    }
   
}
function mOver(obj){
    obj.innerhtml = "mouse over"
}
function mout(obj){
    obj.innerhtml = "mouse out"
}
function myMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }