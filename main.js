function myFunction()
{
    var element = document.body;
    element.classList.toggle("dark-mode");
}

let input = prompt("Are you trying to access this page?", "yes");
alert("You accessed the page");


    /*var messa = '<div class =\"header\"> <a id=\"close\" href="#">close</a></div>';
    messa += 'new things added';
    
    var enote = document.createElement('div');
    enote.setAttribute('id','note');
    enote.innerHTML = messa;
    document.body.appendChild(enote);


    function closed(){
        document.body.removeChild(enote);
    }
    var eclose = document.getElementById('close');
    eclose.addEventListener('click',closed,false);
*/