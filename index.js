document.getElementById("bd").addEventListener("click", roll);
document.getElementById("co").addEventListener("click", recon);
document.getElementById("ab").addEventListener("click", recona);

function roll(){
    var result =Math.floor(6*(Math.random()))+1
    document.getElementById("dimg").classList.add("shake")
    let timeout = setTimeout(function(){
        document.getElementById("dimg").classList.remove("shake")
    }, 500);
    let timeout2 = setTimeout(function(){
        document.getElementById("dimg").src="sprites/"+result+".png"

    },600)
}

function recon(){
    window.location="contact.html"
}

function recona(){
    window.location="about.html"
}