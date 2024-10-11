document.querySelectorAll('.movie').forEach(movie => {
    movie.addEventListener('click', () => {
        const url = movie.getAttribute('data-url');
        const name = movie.getAttribute('data-name');
        document.getElementById('movieEmbed').src = url;
        document.getElementById('movieModal').style.display = 'flex'; // Show modal

        // Call this when the movie is watched
        if (userLoggedIn) {
            let movieName = encodeURIComponent(name);
            fetch(`/watch/${movieName}`, { method: 'GET' });
        }
    });
});

function closeModal() {
    document.getElementById('movieModal').style.display = 'none';
    document.getElementById('movieEmbed').src = ''; // Clear source
}

function filterMovies() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const movies = document.querySelectorAll('.movie');
    movies.forEach(movie => {
        const title = movie.innerText.toLowerCase();
        movie.style.display = title.includes(query) ? 'block' : 'none';
    });
}

// Ensure to add userLoggedIn variable to check if the user is logged in or not.
