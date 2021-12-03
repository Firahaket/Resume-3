//a function
function myFunction()
{
    //a variable
    var element = document.body;
    element.classList.toggle("dark-mode");
}


function zoom()
{
    var element = document.getElementById("personal");
    element.classList.toggle("zoom");
}

let input = prompt("Are you trying to access this page?", "yes");
alert("You accessed the page");

//an object
const owner = {firstName:"Fikreta", lastName: "Turanovic", age: 20};

function display()
{
    //an array
    const days = [1,2,3,4,5,6,7];
    //let length = days.length;

    //for statement
    for(let i = 0; i<=days[0]; i++)
    {
        alert("Hello there!");
        //if statement
        if(i==0){
            alert("7th December is the deadline for your project!");

            switch(new Date().getDay()){
                case 0:
                    day = "Sunday";
                    break;
                  case 1:
                    day = "Monday";
                    break;
                  case 2:
                    day = "Tuesday";
                    break;
                  case 3:
                    day = "Wednesday";
                    break;
                  case 4:
                    day = "Thursday";
                    break;
                  case 5:
                    day = "Friday";
                    break;
                  case  6:
                    day = "Saturday";
            }
            document.getElementById("day").innerHTML = day + " is a special day, enjoy it.";
        }
    }
}

function slide(){
    //jQuery animation
     $(document).ready(function(){
        $("#personal").click(function(){
            var ima = $("#personal");
            ima.animate({height: '100px', left: '60px', opacity: '0.3'}, "slow");
            ima.animate({width: '100px', opacity: '0.7'}, "slow");
            ima.animate({height: '60px', opacity: '0.3'}, "slow");
            ima.animate({height: '60px', opacity: '0.7'}, "slow");
        });
        $("#stop").click(function(){
            $("#personal").stop();
        });
     });
    }     

  //one of the content panels  
    var modal = document.getElementById("modalM");
    var button = document.getElementById("myButton");
    var span = document.getElementsByClassName("c")[0];

    button.onclick = function(){
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if(event.target == modal){
            modal.style.display = "none";
        }
    }


//an event
//<button onclick="myFunction()">Dark mode</button> -> part from html code
//<div onmouseover="zoom()"><img src="images\Fikreta Turanovic.jpg" class="photo" id="personal" alt="Resume photo" title="Personal photo"></div>