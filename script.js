document.addEventListener("DOMContentLoaded", function () {

//zmienne
    let $moviesCounterSeen;
    let $moviesCounterAll;
    let $moviesList;
    let $btnSeen;
    let $toggle;

    let $newMovieItem;
    let $idCounter = 0;
    let $counterViewed = 0;

// wyświetlanie obiektów na ekranie
    $moviesList = document.getElementById('moviesList');
    $moviesCounterAll = document.getElementById("moviesCounterAll");

    $newMovieItem = moviesData.map(element => {
        $idCounter++;
        return `<li class="movieItem" id="moviesItem-${$idCounter}">
                <img alt="" class="bg" src="${element.url}">
                <h2> ${element.title} </h2>
                    <p class="summary">${element.summary}</p>
                    <div class="factorGroup">
                        <p class="factor factorParagraph">${element.year}</p>
                        <p class="factor factorParagraph">${element.genre}</p>
                        <button class="factor btnSeen"><i class="fas fa-plus toggle"></i>&nbsp Add to Viewed</button>
                    </div>
                </li>`;
    }).join(' ');

    $moviesList.innerHTML = $newMovieItem;
    $moviesCounterAll.innerText = $idCounter;

// listening counting viewed movies
    $btnSeen = document.querySelectorAll('.btnSeen');
    $toggle = document.querySelector('.toggle');
    $moviesCounterSeen = document.getElementById('moviesCounterSeen');

    $btnSeen.forEach(item => {
        item.addEventListener('click', (e) => {
            const target =  e.target;
            if (target.classList.contains('btnSeen')) {
                target.classList.add('btnViewed');
                target.classList.remove('btnSeen');
                $counterViewed++;
                $toggle.classList.toggle("is-active");
                $moviesCounterSeen.innerText = $counterViewed;
                item.innerHTML = `<i class="fas fa-check"></i>&nbsp Viewed`;
            } else if (target.classList.contains('btnViewed')) {
                target.classList.remove('btnViewed');
                target.classList.add('btnSeen');
                $counterViewed--;
                $moviesCounterSeen.innerText = $counterViewed;
                item.innerHTML = `<i class="fas fa-plus"></i>&nbsp Add to Viewed`;
            }
        });
    })
});


// 6. W pliku script.js umieść kod zgodny ze standardem ES6 który:
//    1.   Zliczy wszystkie oraz obejrzane filmy z tablicy „moviesData”, oraz
//         wyświetli te informacje w elementach „moviesCounterSeen” i
//         „moviesCounterAll”.
//    2.   Stworzy nowy element listy „moviesList” dla każdego elementu
//         tablicy „moviesData”. Elementy listy „moviesList” powinny zawierać
//         wszystkie podstawowe informacje o filmie oraz symbol graficzny
//         reprezentujący informację czy film był lub nie był obejrzany.
//    3.    Obsłuży kliknięcie symbolu graficznego:
//      a. Przełączy wartość atrybutu „seen” w „moviesData” dla
//         danego filmu
//      b. Zaktualizuje symbol na liście
//      c. Zaktualizuje licznik obejrzanych filmów

