

//if enabled then ...

var inputelems = document.getElementsByTagName("input")

for(var i = 0; i < inputelems.length; i++) {
    if (inputelems[i].type == "email") {
        inputelems[i].type = "text"
    }
}

// else nothing ...
