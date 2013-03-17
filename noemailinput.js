
function loadstate() {

    chrome.storage.sync.get("noemailinputstate", function(items) {
        enabled = items['noemailinputstate'];
        if(enabled)
            wipeEmail()
    });

}

window.onload = loadstate;

function wipeEmail() {
        var inputelems = document.getElementsByTagName("input")

        for(var i = 0; i < inputelems.length; i++) {
            if (inputelems[i].type == "email") {
                inputelems[i].type = "text"
            }
        }
}
