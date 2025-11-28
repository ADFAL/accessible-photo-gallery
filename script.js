// Page load event
window.onload = function () {
    console.log("Page loaded");
    addTabIndex();
};

// Add tabindex to all figures for keyboard focus
function addTabIndex() {
    const figures = document.querySelectorAll("figure");
    for (let i = 0; i < figures.length; i++) {
        figures[i].setAttribute("tabindex", "0");
    }
}

// Add event listeners to images
const images = document.querySelectorAll("img");
images.forEach(img => {
    img.onmouseover = () => console.log("Mouse over image: " + img.alt);
    img.onmouseleave = () => console.log("Mouse left image: " + img.alt);
    img.onfocus = () => console.log("Image focused: " + img.alt);
    img.onblur = () => console.log("Image lost focus: " + img.alt);
});