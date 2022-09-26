window.onload = function () {
    const urlWithSearch = window.location.search;
    const urlParams = new URLSearchParams(urlWithSearch);
    const mealId = urlParams.get('mealId');
    getFoodDetailedInformation(mealId);
}

const displayFoodDetailedInformation = data => {
    console.log(data);
}