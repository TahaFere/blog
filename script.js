// IntersectionObserver → sosyal ikonlara kayma efekti
const side = document.getElementById("side-social");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            side.classList.add("stuck");
        } else {
            side.classList.remove("stuck");
        }
    });
});

// Header'ı izliyoruz
observer.observe(document.querySelector("header"));
