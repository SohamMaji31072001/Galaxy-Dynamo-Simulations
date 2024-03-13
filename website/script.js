// script.js

document.addEventListener("DOMContentLoaded", function() {
    var blocks = document.querySelectorAll(".interactive-block");

    blocks.forEach(function(block) {
        block.addEventListener("click", function() {
            this.querySelector(".details").classList.toggle("visible");
        });
    });
});
