document.addEventListener("DOMContentLoaded", function() {
    const shortDescription = document.querySelector('.short-description');
    const fullDescription = document.querySelector('.full-description');
    const seeMoreBtn = document.querySelector('.see-more-btn');

    seeMoreBtn.addEventListener('click', function() {
        if (fullDescription.style.display === 'none') {
            fullDescription.style.display = 'block';
            seeMoreBtn.textContent = 'See Less';
        } else {
            fullDescription.style.display = 'none';
            seeMoreBtn.textContent = 'See More';
        }
    });
});
