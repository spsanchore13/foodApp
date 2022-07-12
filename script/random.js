import { getData, append } from "../components/fetch.js";
const url = `https://www.themealdb.com/api/json/v1/1/random.php`

let container = document.getElementById('random')

getData(url).then((res) => {
    append(res.meals, container)
})
