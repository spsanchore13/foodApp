// when i use there .then insted of aysnc await it is not return data on random page

let getData = async (url) => {
    let res = await fetch(url);
    let data = await res.json();
    return data;
};
// export default getData;

let append = ((data, container) => {
    console.log('data:', data)
    data.forEach((el) => {
        let { strCategory: category, strMealThumb: image, strInstructions: vidhi, strMeal: food } = el;
        let div1 = document.createElement('div');
        let img = document.createElement('img')
        img.src = image;
        div1.append(img)

        let div2 = document.createElement('div');
        let title = document.createElement('h3')
        title.innerText = `Name : ${food}`;
        let p = document.createElement('p')
        p.innerText = `Type : ${category}`;
        let recepie = document.createElement('p')
        recepie.innerText = `Receipe : ${vidhi}`;
        div2.append(title, p, recepie)
        container.append(div1, div2);
    })

})

export { getData, append };