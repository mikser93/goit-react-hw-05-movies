const API_KEY = '37deb310e61664139196705f69cb28d6';

export const getTrending = () => {
    return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.status);
            }
            return resp.json();
        });
};

export const searchMovies = (query) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.status);
            }
            return resp.json();
        });
};

export const getMovieDetails = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.status);
            }
            return resp.json();
        });
};

export const getMovieActors = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.status);
            }
            return resp.json();
        });
};

export const getMovieReviews = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.status);
            }
            return resp.json();
        });
};