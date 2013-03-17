var enabled;

var checkelem = document.getElementById("noemailinputactive")

//wait for changes
checkelem.addEventListener('change',changestate,false)

//initial state
window.onload = loadstate

//change state
function changestate() {
    enabled = checkelem.value;
    savestate();
}


//load state
function loadstate() {

    chrome.storage.sync.get("noemailinputstate", function(object items) {
                enabled = items;
     });

}


//save state
function savestate() {
    
    chrome.storage.sync.set({'noemailinputstate':enabled}, function() { }

}
