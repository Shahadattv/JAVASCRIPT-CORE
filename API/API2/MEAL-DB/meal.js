//  ===================================part 01 get input field and fetch url by dynamic ==========================================
function main() {
    const search = document.getElementById('inputField');
    const searchText = search.value;

    search.value = '';

    if (searchText === '') {
        const displayError = document.getElementById('error');
        const div = document.createElement('div');
        div.innerHTML = `
        <div >
            <h3 class="text-center ">TRAY AGAIN LETER</h>
        </div>
        `;
        displayError.appendChild(div);
    } else {
        // LOAD DATA FROM API
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => searchResult(data.meals))
    }
};

//  ===================================part 02 add to display dynamic  card by bootstrap ==========================================

/*
const searchResult = meals => {

    const display = document.getElementById('displayCard');

     // clear old search data from HTML 
    display.textContent='';

    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList = ('col');
        div.innerHTML = `
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
                </div>
            </div>
        `;
        display.appendChild(div);
    });

};

*/



// ===============================================finish dynamic search bar ====================================

// =============================================== part 03  search by id dynamic url============================

const searchResult = meals => {
    const display = document.getElementById('displayCard');
    // clear old search data from HTML 
    display.textContent = '';

    if (meals.length === 0) {
        console.log('data ny');

    }
    meals.forEach(meal => {

        const div = document.createElement('div');
        div.classList = ('col');
        div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
                </div>
            </div>
            `;
        display.appendChild(div);
        const displayError = document.getElementById('error');
        displayError.style.display = 'none';
    });





};

// ================ LOAD DATA  DYNAMIC ID============================= AND SHOW PER PRODUCT DETAILS ===================
const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayProductDetail(data.meals[0]))
};
const displayProductDetail = meal => {
    // console.log(meal);
    const productDetail = document.getElementById('mealDetail');
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    productDetail.appendChild(div);

    // console.log(meal);
};