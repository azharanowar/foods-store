const getFoodsByDynamicURL = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => displayFoods(data))
}

const displayFoods = data => {
    const meals = data.meals;
    const foodsCards = document.getElementById("foodsCard");
    meals.forEach(meal => {
        const mealId = meal.idMeal;
        const mealName = meal.strMeal;
        const mealShortDescription = meal.strInstructions.slice(0, 120);
        const mealImage = meal.strMealThumb;
        const mealCategory = meal.strCategory;
        const mealAvailableArea = meal.strArea;
        
        const newFoodCard = document.createElement('div');
        newFoodCard.classList.add('col');
        newFoodCard.innerHTML = `<div class="card h-100 text-center shadow-sm">
                <img src="${mealImage}" class="card-img-top" alt="${mealName} Image">
                <div class="card-body pb-4 pt-3 px-3">
                    <h5 class="fs-4 card-title">${mealName}</h5>
                    <p class="card-text">${mealShortDescription}</p>
                    <p class="text-muted"><span>Category: ${mealCategory}</span> | <span>Area: ${mealAvailableArea}</span></p>
                    <button type="button" class="btn btn-success rounded-2 py-2 w-100" onclick="displayFoodDetailedInformation()">Learn More</button>
                </div>
            </div>`;
        
        foodsCards.appendChild(newFoodCard);

    });
}

document.getElementById("searchBtn").addEventListener('click', () => {
    const searchKeyword = document.getElementById("searchInputField").value;
    if(searchKeyword) {
        document.getElementById("foodsCard").innerHTML = '';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchKeyword}`;
        getFoodsByDynamicURL(url);
        document.getElementById("searchInputField").value = '';
    }
});

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
getFoodsByDynamicURL(url);



