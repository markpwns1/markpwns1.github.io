

function openProject(id) {
    const details = document.getElementById("details-" + id);
    if(details) details.open = true;
}

function onHashChange() {
    if (window.location.hash) {
        openProject(window.location.hash.substring(1));
    }
}

window.onload = () => {
    const showEmailBtn = document.getElementById("link-show-email");

    showEmailBtn.addEventListener("click", function () {
        this.innerHTML = [ 'com', '.', 'yahoo', '@', 'kaldas', '_', 'mark' ].reverse().join('')
    });

    window.onhashchange = onHashChange;

    onHashChange();
}
