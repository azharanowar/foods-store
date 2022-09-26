window.onload = function () {
    const urlWithSearch = window.location.search;
    const urlParams = new URLSearchParams(urlWithSearch);
    const mealId = urlParams.get('mealId');
    getFoodDetailedInformation(mealId);
}

const displayFoodDetailedInformation = data => {
    const meal = data.meals[0];
    const mealName = meal.strMeal;
    const mealShortDescription = meal.strInstructions.slice(0, 100);
    const mealFullDescription = meal.strInstructions;
    const mealImage = meal.strMealThumb;
    const mealCategory = meal.strCategory;
    const mealAvailableArea = meal.strArea;
    const mealTags = meal.strTags;
    const mealIngredients = `${meal?.strIngredient1}, ${meal?.strIngredient2}, ${meal?.strIngredient3}, ${meal?.strIngredient4}, ${meal?.strIngredient5}`;
    const mealYouTubeVideoLink = meal.strYoutube.replace('watch?v=', 'embed/');


    document.getElementById("foodDetailedDisplayImg").src = mealImage;
    document.getElementById("foodDetailedDisplayName").innerText = mealName;
    document.getElementById("foodDetailedDisplayShortDescription").innerText = mealShortDescription;
    document.getElementById("foodDetailedDisplayCategory").innerText = mealCategory;
    document.getElementById("foodDetailedDisplayArea").innerText = mealAvailableArea;
    document.getElementById("foodDetailedDisplayIngredients").innerText = mealIngredients;
    document.getElementById("foodDetailedDisplayTags").innerText = mealTags;
    document.getElementById("foodDetailedDisplayDescription").innerText = mealFullDescription;
    document.getElementById("foodDetailedDisplayDescription").innerText = mealFullDescription;
    document.getElementById("foodDetailedDisplayYouTubeVideo").src = mealYouTubeVideoLink;
}