// //zmienne
// let $moviesCounter;
// let $moviesCounterAll;
// let $moviesCounterSeen;
// let $moviesList;
// let $btnSeen;
// let $toggle;
//
// let $newMovieItem;
// let $idCounter = 0;
// let $counterViewd = 0;
//
// //wywołanie
// const script = () => {
//     prepareDomElements();
//     prepareDomEvents();
// }
//
// //pobieranie elementów
// const prepareDomElements = () => {
//     $moviesCounter = document.querySelector(".moviesCounter");
//     $moviesCounterAll = document.querySelector("#moviesCounterAll");
//     $moviesCounterSeen = document.querySelector("#moviesCounterSeen");
//     $moviesList = document.querySelector("#moviesList");
//     $btnSeen = document.querySelectorAll('button');
//     $toggle = document.getElementById('toggle');
// }
//
// //listening
// const prepareDomEvents = () => {
//     readFromFile();
//     addMovieCount();
// }
//
// const readFromFile = () => {
//     $newMovieItem = data.map(element => {
//         $idCounter++;
//         return `<li id="moviesItem-${$idCounter}">
//                     <img alt="" class="bg" src="${element.url}">
//                     <h2> ${element.title} </h2>
//                     <p class="summary">${element.summary}</p>
//                     <div class="factorGroup">
//                         <p class="factor factorParagraph">${element.year}</p>
//                         <p class="factor factorParagraph">${element.genre}</p>
//                         <button class="factor btnSeen"><i class="fas fa-plus" id="toggle"></i>&nbsp Add to Viewed</button>
//                     </div>
//                 </li>`;
//     }).join(' ');
//     $moviesList.innerHTML = $newMovieItem;
//     $moviesCounterAll.innerText = $idCounter;
// }
//
// const addMovieCount = () => {
//     $btnSeen.map( item => {
//         item.addEventListener('click', (e) => {
//             if(e.target.classList.contains('btnSeen')){
//                 movieAddToSee();
//                 item.innerHTML = `<i class="fas fa-check"></i>&nbsp Viewed`;
//             }
//             else if (e.target.classList.contains('btnViewed')) {
//                 movieViewed();
//                 item.innerHTML = `<i class="fas fa-plus"></i>&nbsp Add to Viewed`;
//             }
//         });
//     })
// }
//
// const movieAddToSee = (e) => {
//     e.target.classList.add('btnViewed');
//     e.target.classList.remove('btnSeen');
//     $counterViewd++;
//     $toggle.classList.toggle("is-active");
//     $moviesCounterSeen.innerText = $counterViewd;
// }
//
// const movieViewed = (e) => {
//     e.target.classList.remove('btnViewed');
//     e.target.classList.add('btnSeen');
//     $counterViewd--;
//     $moviesCounterSeen.innerText = $counterViewd;
// }
//
// document.addEventListener('DOMContentLoaded', script);







