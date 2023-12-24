let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let bgEl=document.getElementById("root");

let containerEl=document.createElement('div');
containerEl.classList.add('container')
bgEl.appendChild(containerEl);
let rowEl=document.createElement('div');
rowEl.classList.add('row')
containerEl.appendChild(rowEl);
let colEl=document.createElement('div');
colEl.classList.add('col-12');
rowEl.appendChild(colEl)

let headingEl=document.createElement('h1');
headingEl.textContent=recipeObj.title
headingEl.classList.add('recipe-title')
colEl.appendChild(headingEl)

let imageContainerEl=document.createElement('div');
imageContainerEl.classList.add("col-12","col-md-6",'d-flex','flex-column','justify-content-center')
rowEl.appendChild(imageContainerEl);

let imageTagEl=document.createElement('img');
imageTagEl.setAttribute('src',recipeObj.imgSrc)
imageContainerEl.appendChild(imageTagEl);

let ingredientsContainerEl=document.createElement('div');
ingredientsContainerEl.classList.add("col-12","col-md-5","mt-3")
rowEl.appendChild(ingredientsContainerEl);

let imageContainerEl2=document.createElement('div');
imageContainerEl2.classList.add("ingredients-container");
ingredientsContainerEl.appendChild(imageContainerEl2);

let ingredientHeadingEl=document.createElement('h1');
ingredientHeadingEl.textContent="Ingredients";
ingredientHeadingEl.classList.add("ingredients-title");
imageContainerEl2.appendChild(ingredientHeadingEl);

let unorderedEl=document.createElement('ul');
imageContainerEl2.appendChild(unorderedEl);

for (let ingredient of recipeObj.ingredients){
    let listEl=document.createElement('li');
    listEl.textContent=ingredient
    listEl.classList.add("ingredient");
    unorderedEl.appendChild(listEl)
}