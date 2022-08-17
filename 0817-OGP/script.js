(function() {
    var height = $(window).height();
    const fh = document.getElementById('fixed');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 2*height) {
        fh.classList.add('is-show');
        } else {
        fh.classList.remove('is-show');
        }
    });
}());


(function() {
    var height = $(window).height();
    const fh = document.getElementById('fixed');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 6*height) {
        fh.classList.add('isnot-show');
        } else {
        fh.classList.remove('isnot-show');
        }
    });
}());



const hideText = document.querySelectorAll(".hide-text");
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add("view");
    }
});
});
hideText.forEach((item) => {
observer.observe(item);
});