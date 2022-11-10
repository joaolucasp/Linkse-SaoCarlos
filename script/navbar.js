const buttonCollapsed = document.getElementById("buttonCollapsed");
var header = document.getElementById("mainNavBar")

window.addEventListener("scroll", function (){
    if(header.classList.contains("collapsed-background")) return;

    stickyFunction();
});

function stickyFunction() {
    header.classList.toggle("sticky", window.scrollY > 0);

    let logo = document.getElementById("logoMain");
    let logoSecondary = document.getElementById("logoSecondary");

    if(this.window.scrollY == 0){
        logo.classList.remove("d-none");
        logoSecondary.classList.add("d-none");
    } else {
        logo.classList.add("d-none");
        logoSecondary.classList.remove("d-none");
    }
}

buttonCollapsed.addEventListener('click', event => {
    // Disable Dark Navbar
    if(header.classList.contains("open-collapsed")){
        header.classList.remove("open-collapsed")

        header.classList.remove("collapsed-background");
        stickyFunction();
        return
    }

    //Enable Dark Navbar
    header.classList.add("open-collapsed");

    if(!(header.classList.contains("collapsed-background")) && window.scrollY == 0 ){
        header.classList.add("collapsed-background");
    }
 })

