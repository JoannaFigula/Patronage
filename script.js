document.addEventListener("DOMContentLoaded", function () {

    class Movie {
        constructor(movie, parent) {
            this.movie = movie;
            this.parent = parent;
            this.render()
        }
//    2.   Stworzy nowy element listy „moviesList” dla każdego elementu
//         tablicy „moviesData”. Elementy listy „moviesList” powinny zawierać
//         wszystkie podstawowe informacje o filmie oraz symbol graficzny
//         reprezentujący informację czy film był lub nie był obejrzany.
        render() {
            const isSeen = this.movie.seen;
            let btnText;
            if (!isSeen) {
                btnText= `<i class="fas fa-plus"></i> Add to viewed`;
            } else {
                btnText = `<i class="fas fa-check"></i> Viewed`
            }
            const li = document.createElement('li');
            li.classList.add('movieItem', this.movie.seen && 'greenBorder')
            li.innerHTML = `
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <img alt="" class="bg" src="${this.movie.url}"/>
                    <h2> ${this.movie.title} </h2> <p class="summary">${this.movie.summary}</p>
                    <div class="factorGroup">
                        <p class="factor factorParagraph">${this.movie.year}</p>
                        <p class="factor factorParagraph">${this.movie.genre}</p>
                        <button id="moviesItem-${this.movie.id}" class="factor btnSeen ${this.movie.seen && 'btnViewed'}">${btnText}</button>
                    </div>
            `
            this.parent.appendChild(li);
        }
    }

    class Movies {
        constructor(selector, movies) {
            this.updateMovies = this.updateMovies.bind(this);
            this.handleChangeSeen = this.handleChangeSeen.bind(this)
            this.root = document.querySelector(selector);
            this.movies = movies;
            this.init();
            this.serializeData();
            this.render();
            this.addListeners();
            this.updateCounterAll();
            this.updateCounterSeen();
        }

        serializeData() {
            const changeSeen = movie => ({
                ...movie,
                seen: movie.seen === 'T'
            })

            this.movies = this.movies.map(changeSeen);
        }

//    1.   Zliczy wszystkie oraz obejrzane filmy z tablicy „moviesData”, oraz
//         wyświetli te informacje w elementach „moviesCounterSeen” i
//         „moviesCounterAll”.

        updateCounterAll() {
            this.totalCount = this.movies.length;
            this.counterAllEl.innerText = this.totalCount;
        }

        updateCounterSeen() {
            this.seenCounter = this.movies
                .filter(el => el.seen)
                .length;
            this.counterSeenEl.innerText = this.seenCounter;
        }

        setButtonValue(el) {
            const isSeen = el.classList.contains('btnViewed');
            if (isSeen) {
                el.innerHTML = `<i class="fas fa-plus"></i>&nbsp Add to Viewed`;
            } else {
                el.innerHTML = `<i class="fas fa-check"></i>&nbsp Viewed`
            }
        }

        updateMovies(id, e) {
            const index = this.movies.findIndex(el => el.id == id);
            const copyMovies = [...this.movies];
            copyMovies[index].seen = !copyMovies[index].seen;
            this.movies = copyMovies;
            const li = e.currentTarget.parentElement.parentElement;
            li.classList.toggle('greenBorder');

            this.setButtonValue(e.currentTarget);
            e.currentTarget.classList.toggle('btnViewed');
            this.updateCounterSeen();
        }

        handleChangeSeen(e) {
            const {currentTarget: {id}} = e;
            const elId = id.split('-')[1];
            this.updateMovies(elId, e);
            this.updateCounterAll();
        }

        addListeners() {
            this.moviesListEl.querySelectorAll('button').forEach(el => {
                el.addEventListener('click', this.handleChangeSeen)
            })
        }

        render() {
        this.movies.forEach(element => {
                new Movie(element, this.moviesListEl)
        })
        }

        init() {
            this.moviesListEl = this.root.querySelector('#moviesList');
            this.counterAllEl = document.querySelector("#moviesCounterAll");
            this.counterSeenEl = document.querySelector('#moviesCounterSeen');
        }
    }


    const movie = new Movies('#moviesListContainer', moviesData);

})
// 6. W pliku script.js umieść kod zgodny ze standardem ES6 który:


//    3.    Obsłuży kliknięcie symbolu graficznego:
//      a. Przełączy wartość atrybutu „seen” w „moviesData” dla
//         danego filmu
//      b. Zaktualizuje symbol na liście
//      c. Zaktualizuje licznik obejrzanych filmów

