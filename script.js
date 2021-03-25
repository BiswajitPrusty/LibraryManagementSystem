function submit(){
    var option = document.getElementById("box").value;
    // var type = document.getElementById("addLink").getAttribute("href");
    if(option ==1  ){
        document.getElementById("addLink").setAttribute("href","addBookDetails.html");
        document.getElementById("addLink").setAttribute("target","black");
    }
    else if(option ==2 ){
        document.getElementById("addLink").setAttribute("href","searchBook.html");
        document.getElementById("addLink").setAttribute("target","black");


    }
    else if(option ==3 ){
        document.getElementById("addLink").setAttribute("href","updatebook.html");
        document.getElementById("addLink").setAttribute("target","black");

    }
    else if(option ==4 ){
        document.getElementById("addLink").setAttribute("href","removeBook.html");
        document.getElementById("addLink").setAttribute("target","black");

    }
    else{

        document.getElementById("msg").innerHTML="Please Select From Above Options".fontcolor("red");
        document.getElementById("addLink").removeAttribute("href");
    }
}