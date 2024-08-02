// How to use fetch method to fetch data from APIs
async function getAnimalData() {
    const response = await fetch("some API call here for data");
    const finalData = await response.json()
    console.log(finalData);
}
getAnimalData();