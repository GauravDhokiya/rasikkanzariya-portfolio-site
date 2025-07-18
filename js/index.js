document.addEventListener("DOMContentLoaded", function () {
    let activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
    const toggleButton = document.querySelector(".menu-burger");
    let isOpen = false;

    gsap.set(".menu-item p", { y: 255 });

    const timeline = gsap.timeline({ paused: true });
    timeline.to(".overlay", {
        duration: 1.5,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power4.inOut",
    });
    timeline.to(".menu-item p", {
        duration: 1.5,
        y: 0,
        stagger: 0.2,
        ease: "power4.out",
    }, "-=1");
    timeline.to(activeItemIndicator, {
        width: "100%",
        duration: 1,
        ease: "power4.out",
        delay: 0.5,
    }, "<");

    toggleButton.addEventListener("click", function () {
        isOpen ? timeline.reverse() : timeline.play();
        isOpen = !isOpen;
    });
});

function updateNavSpacerHeight() {
    const nav = document.querySelector('.nav-wrapper');
    const spacer = document.querySelector('.nav-spacer');
    if (nav && spacer) {
        spacer.style.height = `${nav.offsetHeight}px`;
    }
}

// Run on load
window.addEventListener('DOMContentLoaded', updateNavSpacerHeight);

// Run on resize (in case of breakpoint changes)
window.addEventListener('resize', updateNavSpacerHeight);
