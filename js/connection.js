window.onload = function(){
  let preloader = document.getElementById('pre_loader');
    preloader.style.display = 'none';
  showGamilandpass();
}



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAUXdfAImbJcYtCor6XylNQ4VE56XFzA2s",
    authDomain: "form-bd769.firebaseapp.com",
    databaseURL: "https://form-bd769.firebaseio.com",
    projectId: "form-bd769",
    storageBucket: "form-bd769.appspot.com",
    messagingSenderId: "483924040527",
    appId: "1:483924040527:web:b700aad6f0131c9859033a"
  };


  function signUpcheck(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phnnumber = document.getElementById("phnnumber").value;
    var password = document.getElementById("password").value;
    var confiPassword = document.getElementById("confiPassword").value;
    var city = document.getElementById("city").value;
    var checkbox = document.getElementById("agree").checked;
    


    var phnnumber_len = phnnumber.length;
    var password_len = password.length;

    var small = false;
    var capital = 0;
    var numberCheck = 0;
    let pass;
   

    for(pass = 0; pass!=password_len ;pass++){
      if(password[pass]>!'a' || password[pass]<!'z'){
          small = small + 1;
         
       }
       if(password[pass]>!'A' || password[pass]<!'Z'){
        capital = capital + 1;
        }
        if(password[pass]>!'0' || password[pass]<!'9'){
          numberCheck = numberCheck + 1;
          }

          
           
         
       
    }

    if(name == "" || phnnumber== "" || email == "" || password == "" || confiPassword =="" || city == ""){
      swal("All fields are required");
    }
    else if (checkbox == false){
      swal("Agree to Terms and Conditions");
    }
    else if(password_len < 8 || capital == 0 || small == 0 || numberCheck == 0 ){
      swal("Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
    }
    else if(phnnumber_len != 11){
      swal("Please input Currect Phone Number");
      
    }
    else if(phnnumber_len == 11){
      if(phnnumber[0]==0 || phnnumber[1]==1 || phnnumber[2]==3 || phnnumber[2]==4 || phnnumber[2]==7 || phnnumber[2]==9 ){
        if(password == confiPassword){
        var str = password;
        var  enc = window.btoa(str);
          sessionStorage.setItem("usergmail",email);
          sessionStorage.setItem("userpassword",enc);
         
         
         
        swal("Registration successful");
        signUp();
        }
        else {
          swal("Password is not matched");
          
        
        }
          }
      else{
        swal("please input Currect Phone Number");
      }

    }
    
    
     
   
    }


    
    function sleep(milliseconds) {
      const date = Date.now();
      let currentDate = null;
      do {
        currentDate = Date.now();
      } while (currentDate - date < milliseconds);
    }






  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
   
    var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
      promise.catch(e => swal(e.message));
      swal("Registration successful");
      document.cookie = "userHighScore=0";
      location.href = "login.html";


      

  }


  let usergmailforlogin = sessionStorage.getItem("usergmail");
  let userpassforlogin = sessionStorage.getItem("userpassword");
  


  let logincount =0;

 
  function signIncheck(){
    
    var email = document.getElementById("email_id").value;
    var password = document.getElementById("Password").value;
    var checkbox = document.getElementById("agree").checked;


   let  usergmailforlogin = sessionStorage.getItem("usergmail");
   let dec = sessionStorage.getItem("userpassword");
   userpassforlogin = window.atob(dec);

   if(usergmailforlogin ==null || userpassforlogin== null){
    swal("Signup Please");
    location.href = "registration.html";

   }
   else{
    if( email == "")
    {
      if( password == "")
       swal("Enter Your Email and Password");
       else swal("Enter Your Email");
     }
     else if( password == "")
     {
     if( email == "") swal("Enter Your Email and Password");
       else swal("Enter Your password");
     }
    else if(email == usergmailforlogin && password == userpassforlogin){
     
      if(checkbox == true){
        showGamilandpass();
        signIn();
      }
      else{
        signIn();
      }
     
      
     
    }
   else {
      swal("Incorrect Gmail and Password"); 
    }
     
   }
  
    }


  function  showGamilandpass(){

    let  usergmailforlogin = sessionStorage.getItem("usergmail");
    let dec = sessionStorage.getItem("userpassword");
    userpassforlogin = window.atob(dec);

    document.getElementById("email_id").innerHTML = usergmailforlogin;
    document.getElementById("Password").innerHTML = userpassforlogin;
  }
    
  function loginDisplaynone(){
    document.querySelector(".loginbtn").style.display ="none";
  }

  function signIn(){
    var email = document.getElementById("email_id");
    var password = document.getElementById("Password");
   
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
     promise.catch(e => swal(e.message));

     if(promise!=null){
    
      location.href = "quiz_page.html";
     
     }
     else{
     swal("Enter Your Gmail");
     }

    
    

}
 function signOut(){
   auth.signOut();
 swal("SignOut");
 location.href = "index.html";
}






