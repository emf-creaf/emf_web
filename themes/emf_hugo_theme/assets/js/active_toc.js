window.addEventListener('DOMContentLoaded', () => {
    const observerForTableOfContentActiveState = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');

            if (entry.intersectionRatio > 0) {
                clearActiveStatesInTableOfContents();
                document.querySelector(`aside nav li a[href="#${id}"]`).parentElement.classList.add('active');
            }
        });
    });
    document.querySelectorAll('h1[id],h2[id]').forEach((section) => {
        observerForTableOfContentActiveState.observe(section);
    });
});

function clearActiveStatesInTableOfContents() {
    document.querySelectorAll('aside nav li').forEach((section) => {
        section.classList.remove('active');
    });
}