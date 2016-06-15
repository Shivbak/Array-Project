var event = document.getElementById("button");
    event.addEventListener('click',addname,false);

var event2 = document.getElementById("button2");
    event2.addEventListener('click',addwinner,false);

var winner = [];

function addname()
{
    winner.push(document.getElementById("input").value);
    document.getElementById("demo").innerHTML = winner;
    
}

function addwinner()
{
    var random = Math.floor(Math.random()*winner.length);
    
            document.getElementById("demo2").innerHTML = winner[random];
           
        
}
