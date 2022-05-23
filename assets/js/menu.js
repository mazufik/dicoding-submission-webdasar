//fungsi untuk load file sejarah
function loadSejarah() {
    fetch('../../module/sejarah.html')
    .then(Response=>Response.text())
    .then(text=>document.getElementById('content').innerHTML = text);
}

//fungsi untuk load file geografis
function loadGeografi() {
    fetch('../../module/geografi.html')
    .then(Response=>Response.text())
    .then(text=>document.getElementById('content').innerHTML = text);
}

//fungsi untuk load file pemerintahan
function loadPemerintahan() {
    fetch('../../module/pemerintahan.html')
    .then(Response=>Response.text())
    .then(text=>document.getElementById('content').innerHTML = text);
}

//fungsi untuk load file demografi
function loadDemografi() {
    fetch('../../module/demografi.html')
    .then(Response=>Response.text())
    .then(text=>document.getElementById('content').innerHTML = text);
}

//fungsi untuk load file ekonomi
function loadEkonomi() {
    fetch('../../module/ekonomi.html')
    .then(Response=>Response.text())
    .then(text=>document.getElementById('content').innerHTML = text);
}

//fungsi untuk load file pariwisata
function loadPariwisata() {
    fetch('../../module/pariwisata.html')
    .then(Response=>Response.text())
    .then(text=>document.getElementById('content').innerHTML = text);
}