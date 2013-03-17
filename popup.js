var checkelem = document.getElementById("noemailinputactive")

//wait for changes
checkelem.addEventListener('change',changestate,false)

//initial state
window.onload = loadstate

//change state
function changestate() {
    enabled = checkelem.checked;
    savestate(enabled);
}


//load state
function loadstate() {

    chrome.storage.sync.get("noemailinputstate", function(items) {
                   enabled = items['noemailinputstate'];
                   checkelem.checked = enabled;
     });

}


//save state
function savestate(state) {
    
    chrome.storage.sync.set({'noemailinputstate':state}, function() { })

}
