var user_high_score = "userHighScore";
let get_high_score = getCookie(user_high_score);
let get_point =  sessionStorage.getItem("points");



let name = sessionStorage.getItem("name");
let time = sessionStorage.getItem("time");




document.querySelector(".name").innerHTML= name;
document.querySelector(".points").innerHTML= get_point;
document.querySelector(".time").innerHTML = time;
document.querySelector(".highpoints").innerHTML = get_high_score;

function restart(){
    
    location.href = "main_quiz_page.html";
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













