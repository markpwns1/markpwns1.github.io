

function openProject(id) {
    const details = document.getElementById("details-" + id);
    if(details) {
        details.open = true;
        details.scrollIntoView();
    }
}

window.onload = () => {
    const showEmailBtn = document.getElementById("link-show-email");

    showEmailBtn.addEventListener("click", function () {
        this.innerHTML = [ 'com', '.', 'yahoo', '@', 'kaldas', '_', 'mark' ].reverse().join('')
    });

    const tocLinks = document.getElementsByClassName("toc-link");
    for(const link of tocLinks) {
        link.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            openProject(id);
        });
    }

    if (window.location.hash) {
        openProject(window.location.hash.substring(1));
    }
}
