# My Accessible Photo Gallery

This is an **interactive and accessible photo gallery** built with HTML, CSS, and JavaScript. It features six images, each with descriptive alternative text (`alt`) for accessibility.

## Features

* **Semantic HTML**: Uses `<figure>` and `<figcaption>` for images and captions.
* **Accessibility**:

  * `tabindex="0"` added to figures for keyboard navigation.
  * `onfocus` and `onblur` events for keyboard users.
  * `onmouseover` and `onmouseleave` events for mouse interaction.
* **Interactive Console Logs**: Logs events for mouse and keyboard interactions.
* **Page Load Event**: Initializes gallery features on load.
* **Validation**: Designed to pass **W3C**, **Wave**, and **aXe** accessibility checks.

## How to Use

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Navigate the gallery using your mouse or keyboard (Tab key).
4. Check the console to see event logs when interacting with images.

## Notes

* All images are placeholders and can be replaced with your own images.
* CSS includes focus outlines to highlight selected images for keyboard users.
* The project demonstrates good practices in **web accessibility** and **interactive UI**.
