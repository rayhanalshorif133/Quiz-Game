window.onload = function(){
    let preloader = document.getElementById('pre_loader');
    preloader.style.display = 'none';
        Low_show(0);
     
    }

   


// High level Questions

let questions_all = [
    {
        id:1,
        question:"A group of ………………... is commonly called as one byte.",
        answer:"Eight bits",
        options:[
            "Six bits",
            "Eight bits",
            "Twelve bits",
            "Fifteen bits"
        ]
    },
    {
        id:2,
        question:"Which among the following is incorrectly matched?",
        answer:"MAN",
        options:[
            "LAN",
            "WAN",
            "MAN",
            "IP"   
        ]
    },
    {
        id:3,
        question:"Which among the following period is known as the era of third generation computer?",
        answer:"- 1965 to 1971",
        options:[
            "- 1951 to 1959",
            "- 1959 to 1965",
            "- 1965 to 1971",
            "- 1981 to 1991"
            
        ]
    },

    {
        id:4,
        question:"What is the older high-level(non-assembler) programming language?",
        answer:"Fortan",
        options:[
        "C",
        "Lisp",
        "Fortan",
        "Basic"
        ]
        },
        {
        id:5,
        question:"The primary progenitor of COBOL was the programming language known as:",
        answer:"flow-matic",
        options:[
        "Pseudocode",
        "short Code",
        "speedcode",
        "flow-matic"
        
        ]
        },
        {
        id:6,
        question:"The C++ programming language is very popular because it is:",
        answer:"object-oriented",
        options:[
        "backward compatible with C",
        "widely available",
        "object-oriented",
        "all of the above"
        
        ]
        },
        {
        id:7,
        question:"What innovation introduced in ALGOL68 is ofter credited to pascal?",
        answer:"block statement",
        options:[
        "user-defined data types",
        "block statement",
        "select statement",
        "bit-string"
        
        ]
        },
        
        
        {
        id:8,
        question:"The most common programming languages ,dating back to the 1940s are called:",
        answer:"imperative",
        options:[
        "functional",
        "rule-based",
        "object-oriented",
        "imperative"
        
        ]
        },
        
        {
        id:9,
        question:"When did the first ANSI programming language stander d come out?",
        answer:"1958",
        options:[
        "1949",
        "1975",
        "1958",
        "1966"
        ]
        },

        {
        id:10,
        question:"List in chronological order, when these languages become officially recognized as a standard",
        answer:"ANSI Cobol",
        options:[
        "ANSI C",
        "ANSI COMMON LISP",
        "ANSI Cobol",
        "ANSI ADA"
        
        ]
        },

        {
            id:11,
            question:"A group of 1 Megabyte (Mb) =   is commonly called as one byte.",
            answer:"1,024 kb",
            options:[
                "1,024 kb",
                "1,000 kb",
                "1,200 kb",
                "1,275 kb"
            ]
        },
        {
            id:12,
            question:"A group of  Which among the following is used in creating a chart? is commonly called as one byte.",
            answer:"Chart wizard",
            options:[
                "Chart wizard",
                "Computing wizard",
                "Calculating wizard",
                "Data wizard"
            ]
        },

        {
            id:13,
            question:"A group of Who among the following has invented cut/copy and paste? is commonly called as one byte.",
            answer:"Input, process, output, storage",
            options:[
                "Data, input, output, storage",
                "Input, process, output, storage",
                "Input, storage, process, output",
                "Input, display, process, output"
            ]
        },
        {
            id:14,
            question:"A group of The storage device, which retains data even after power cut, is known as … is commonly called as one byte.",
            answer:"Non-volatile storage",
            options:[
                "Direct storage",
                "In-direct storage",
                "Volatile storage",
                "Non-volatile storage"
            ]
        },
        {
            id:15,
            question:"A group of Which among the following correctly explains the term ‘internet? is commonly called as one byte.",
            answer:"International network",
            options:[
                "Internet network",
                "International network",
                "Intercontinental network",
                "Information network"
            ]
        },
     
]


// medium level Questions

let questions_medium = [
    {
        id:1,
        question:"What is the maximun number of dimensions an array in C may have?",
        answer:"Theoratically no limit. The only practical limits are memory size and compilers.",
        options:[
            "Two",
            "Eight",
            "Theoratically no limit. The only practical limits are memory size and compilers."
        ]
    },
    {
        id:2,
        question:"If x is an array of interger, then the value of &x[i] is same as",
        answer:"&x[i-1] + sizeof (int)",
        options:[
            "&x[i-1] + sizeof (int)",
           "x + sizeof (int)* i",
            "x+i"
        ]
    },
    {
        id:3,
        question:"A group of ………………... is commonly called as one byte.",
        answer:"Eight bits",
        options:[
            "Six bits",
            "Eight bits",
            "Twelve bits"
            
        ]
    },
    {
        id:4,
        question:"Minimum number of interchange needed to convert the array 89,19,40,14,17,12,10,2,5,7,11,6,9,70, into a heap with the maximum element at the root ",
        answer:"2",
        options:[
            "0",
            "1",
            "2"
            
        ]
    },
    {
        id:5,
        question:"Minimun number of comparison required to compute the largest and second largest element in array is",
        answer:"n+[log₂n-2]",
        options:[
            "n-[log₂n]-2",
           "n+[log₂n-2]",
            "log₂n"
        ]
    },
    {   
        id:6,
        question:"All the following hidden surface algorithms employ image space approach except",
        answer:"back face removal",
        options:[
            "back face removal",
            "depth buffer method",
            "scan line method"
        
        ]
    },
    {
        id:7,
        question:"Which of the following devices has a relative origin?",
        answer:"Mouse",
        options:[
            "Joystick",
            "Mouse",
            "None of the above"
        ]
    },
    {
        id:8,
        question:"A person who writes a program for running the hardware of a computer is called",
        answer:"programmer",
        options:[
            "system analyst",
            "data processor",
            "programmer"
        ]
    },
    {
        id:9,
        question:"System implementation phase entails...",
        answer:"system checkouts",
        options:[
            "system checkouts",
            "pilot run",
            "all of these"
        ]
    },
    {
        id:10,
        question:"Maintenance, conversion, training and business position are examples. Select one answer",
        answer:"IS service",
        options:[
            "IS service",
            "end user resistance",
            "conversion methods"
        ]
    },
    {
        id:11,
        question:"The first step of the implementation phase is",
        answer:"implementation planning",
        options:[
            "select the computer",
            "announce the implementation project",
            "implementation planning"
        ]
    },
    {
        id:12,
        question:"At the time of system study, flow of charts are drawn using",
        answer:"general symbols",
        options:[
            "non standard symbols",
            "general symbols",
            "abbreviated symbols"
        ]
    },
    {
        id:13,
        question:"Corporate locations for computer system operations, is....",
        answer:"data center",
        options:[
            "operations management",
            "data center",
            "development center"
          
        ]
    },
    {
        id:14,
        question:"A company's use of the internet, intnmets, and extranets must be developed, administered, and maintained. The best fit will be",
        answer:"telecommunications network management",
        options:[
            "technology management",
            "out sourcing IS operations",
            "telecommunications network management"
        ]
    },
    {
        id:15,
        question:"Software that helps monitor and control computer system in a data center. The best fit will be",
        answer:"system performance monitor",
        options:[
            "technology management",
            "out sourcing IS operations",
            "system performance monitor"
        ]
    },

]

// Low level Questions

let questions_low = [
    {
        id:1,
        question:"Summation of 35+32 is=?",
        answer:"67",
        options:[
            "65",
            "67"
        ]
    },
    {
        id:2,
        question:"What is right way to Initialize array?",
        answer:"int n{} = { 2, 4, 12, 5, 45, 5 };",
        options:[
            "int num[6] = { 2, 4, 12, 5, 45, 5 };",
            "int n{} = { 2, 4, 12, 5, 45, 5 };"
        ]
    },
    {
        id:3,
        question:"An array elements are always stored in ________ memory locations.",
        answer:"Random",
        options:[
            "Sequential",
            "Random"
        ]
    },
    {
        id:4,
        question:"From what location are the 1st computer instructions available on boot up?",
        answer:"ROM BIOS",
        options:[
            "ROM BIOS",
            "CPU"
        ]
    },
    {
        id:5,
        question:"What could cause a fixed disk error?",
        answer:"Incorrect CMOS settings",
        options:[
            "Incorrect CMOS settings",
            "Slow processor"
        ]
    },
    {
        id:6,
        question:"Missing slot covers on a computer can cause?",
        answer:"Over heat",
        options:[
            "Power surges",
            "Over heat"
        ]
    },
    {
        id:7,
        question:"What is the highest binary number that can be referred to on a three position jumper block?",
        answer:"1",
        options:[
            "1",
            "F"
        ]
    },
    {
        id:8,
        question:"IRQ6 is typically reserved for:",
        answer:"The floppy",
        options:[
            "LPT2",
            "The floppy"
        ]
    },
    {
        id:9,
        question:"During the normal PC boot process, which of the following is active first?",
        answer:"ROM BIOS",
        options:[
            "ROM BIOS",
            "CMOS"
        ]
    },
    {
        id:10,
        question:"Which device should not be plugged into a standard ups?",
        answer:"Laser printer",
        options:[
            "Laser printer",
            "Ink-jet printer"
        ]
    },
    {
        id:11,
        question:"Which of the following languages is more suited to a structured program?",
        answer:"PASCAL",
        options:[
            "FORTRAN",
            "PASCAL"
        ]
    },
    {
        id:12,
        question:"A computer assisted method for the recording and analyzing of existing or hypothetical systems is...",
        answer:"Data flow",
        options:[
            "Data transmission",
            "Data flow"
        ]
    },
    {
        id:13,
        question:"The brain of any computer system is...",
        answer:"Control unit",
        options:[
            "CPU",
            "Control unit"
        ]
    },
    {
        id:14,
        question:"Which of the following computer language is used for artificial intelligence?",
        answer:"PROLOG",
        options:[
            "FORTRAN",
            "PROLOG"
        ]
    },
    {
        id:15,
        question:"Which of the following is the 1's complement of 10?",
        answer:"01",
        options:[
            "10",
            "01"
        ]
    },



]




let levelClick= 0;
sessionStorage.setItem("Level","Low");
function low_level(){
    levelClick = levelClick+1;
    if(levelClick ==1){
        document.querySelector(".lowlevel").innerHTML = "Medium";
        sessionStorage.setItem("Level","Medium");
        Medium_show(0);
        levelClick = 1;
    }
    else if(levelClick == 2){
        document.querySelector(".lowlevel").innerHTML = "High";
        sessionStorage.setItem("Level","High");
        high_show(0);
        levelClick = 2;
    }
    else if(levelClick == 3){
        document.querySelector(".lowlevel").innerHTML = "Low";
        sessionStorage.setItem("Level","Low");
        Low_show(0);
        levelClick = 0;
    }
   
    
}

function submitForm(e){
    e.preventDefault();
    let name = document.forms["welcome_name"]["userName"].value;
    
    //Store Player Name
    sessionStorage.setItem("name",name);
    
    location.href="main_quiz_page.html";
   
}

let question_count = 0;

let quiz_point = 0;
document.querySelector(".showPoint").innerHTML= quiz_point;
let high_score = 0;

localStorage.setItem("highpoints_for_session",high_score);

let cartCount = 0;

function next(){
    cartCount = cartCount+1;
    let user_answer = document.querySelector("li.option.active_ans").innerHTML;
    
    if(question_count == questions_all.length - 1){
        sessionStorage.setItem("time",`${minutes} minutes and ${seconds} seconds`);
        clearInterval(mytime);
        sessionStorage.setItem("points",quiz_point);
      
        location.href= "quiz_result.html";
        
    }
   
    
    document.querySelector(".right_wrong").style.display = "block";
  
   

    let random_point = Math.floor(Math.random()*10)+1;
    let right= 0;
    
    //check answer right or wrong
    
    if(user_answer == questions_all[question_count].answer){
         
       quiz_point = quiz_point + random_point; 
       sessionStorage.setItem("points",quiz_point);
       right=1;
       var user_high_score = "userHighScore";
         var high_point = getCookie(user_high_score);
        
        if(quiz_point > high_point){
            document.cookie = "userHighScore="+quiz_point;
        }



    }
    else if(user_answer == questions_medium[question_count].answer){
        quiz_point = quiz_point + random_point; 
        sessionStorage.setItem("points",quiz_point);
        right=1;
        var user_high_score = "userHighScore";
        var high_point = getCookie(user_high_score);
       
       if(quiz_point > high_point){
           document.cookie = "userHighScore="+quiz_point;
       }

    }
    else if(user_answer == questions_low[question_count].answer){
        quiz_point = quiz_point + random_point; 
        sessionStorage.setItem("points",quiz_point);
        right=1;
        

        var user_high_score = "userHighScore";
         var high_point = getCookie(user_high_score);
        
        if(quiz_point > high_point){
            document.cookie = "userHighScore="+quiz_point;
        }



    }
    if(right==1){
        document.querySelector(".right_wrong").innerHTML = "Right";
        setTimeout(function(){
            document.querySelector(".right_wrong").style.display = "none";
        },3000);
    }
    else{
        document.querySelector(".right_wrong").innerHTML = "Wrong";
        setTimeout(function(){
            document.querySelector(".right_wrong").style.display = "none";
        },3000);
    }
    

   
    document.querySelector(".showPoint").innerHTML= quiz_point;
    question_count++;

    
    
   let read_level = sessionStorage.getItem("Level");
   
   if(read_level == "Low"){
    Low_show(question_count);
   }
   else if(read_level == "Medium"){
    Medium_show(question_count);
   }
   else if(read_level == "High"){
     high_show(question_count);
    
   
   }

   
   
}

function Low_show(count){
    
    let question_id = document.getElementById("questions");
    //question_id.innerHTML = "<h2>"+ questions[count].question+"</h2>" ;
   question_id.innerHTML = `
   <h2>Q${question_count+1}. ${questions_low[count].question}</h2>
    <ul class="option_group">
                <li class="option">${questions_low[count].options[0]}</li>
                <li class="option">${questions_low[count].options[1]}</li>
            </ul>  
    `;
   toggeleActive();
   addtocart(questions_low[count]);
   showCartNumber();
}
function Medium_show(count){
    showCartNumber();
    let question_id = document.getElementById("questions");
    //question_id.innerHTML = "<h2>"+ questions[count].question+"</h2>" ;
   question_id.innerHTML = `
   <h2>Q${question_count+1}. ${questions_medium[count].question}</h2>
    <ul class="option_group">
                <li class="option">${questions_medium[count].options[0]}</li>
                <li class="option">${questions_medium[count].options[1]}</li>
                <li class="option">${questions_medium[count].options[2]}</li>
            </ul>  
    `;
   toggeleActive();
   addtocart(questions_medium[count]);
}


function high_show(count){
    showCartNumber();
    let question_id = document.getElementById("questions");
    //question_id.innerHTML = "<h2>"+ questions[count].question+"</h2>" ;
   question_id.innerHTML = `
   <h2>Q${question_count+1}. ${questions_all[count].question}</h2>
    <ul class="option_group">
                <li class="option">${questions_all[count].options[0]}</li>
                <li class="option">${questions_all[count].options[1]}</li>
                <li class="option">${questions_all[count].options[2]}</li>
                <li class="option">${questions_all[count].options[3]}</li>
            </ul>  
    `;
   toggeleActive();
   addtocart(questions_all[count]);
}

let setvalue = 0;

function  addtocart(value){
  
    setvalue = setvalue+1;

    var json_str = JSON.stringify(value);
    document.cookie = "questions"+[setvalue]+"="+json_str;
    document.cookie = "cartValue="+setvalue;
    
   
    }





let name = sessionStorage.getItem("name");
let points = sessionStorage.getItem("points");


document.querySelector(".name").innerHTML= name;






function toggeleActive(){
    let option = document.querySelectorAll("li.option");
    
    for(let i =0; i< option.length;i++){
        option[i].onclick= function(){
            for(let j=0;j<option.length;j++){
                if(option[j].classList.contains("active_ans")){
                    option[j].classList.remove("active_ans");
                }
            }
            option[i].classList.add("active_ans");
        }
    }
}


function showCartNumber()
{
var json_str = getCookie('cartValue');
var arr= JSON.parse(json_str);
document.querySelector(".cart_number_count").innerHTML = arr-1;


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


 










