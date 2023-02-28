
window.onload = function(){
  let preloader = document.getElementById('pre_loader');
    preloader.style.display = 'none';
  added();
   
}
function restart(){
    
  location.href = "main_quiz_page.html";
}
let setvalue = 0;
let Q = 1;
function  addtocart(){
    setvalue = setvalue+1;
     var json_str = getCookie('questions'+[setvalue]);
    var arr = JSON.parse(json_str);
    
    document.querySelector(".quesnCart").innerHTML += `
    <h4>Q${Q}: ${arr.question}</h4>
    <h5>Ans : ${arr.answer}</h5>
    `;
    
    document.querySelector(".cart_number_count").innerHTML = Q;
    Q= Q+1;
    }


  
  function  added(){
    for(let i = 0 ; i<=10 ;i++){
        addtocart();
    }
    
  }




 function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

