const getFoodsByDynamicURL = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => displayFoods(data))
}

const getFoodDetailedInformation = async(mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const response = await fetch(url);
    const data = await response.json();
    displayFoodDetailedInformation(data);
}