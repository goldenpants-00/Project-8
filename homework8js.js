window.onload = function(){
    document.getElementById("filterContent").style.display = "none";

}

function showFilter(){
    let menu = document.getElementById("filterContent");
    if(menu.style.display == "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
        
    }
    
}

function showAddNew(){
    let articleForm = document.getElementById("newContent");
    if(articleForm.style.display == "block"){
        articleForm.style.display = "none";
    }else{
        articleForm.style.display = "block";
    }
}



function filterArticles(){
    let opinionArticle = document.getElementById("opinionCheckbox");
    let recipeArticle = document.getElementById("recipeCheckbox");
    let updateArticle = document.getElementById("updateCheckbox");


    let allArticles = document.querySelectorAll("#articleList article");


    for(let  i = 0; i < allArticles.length; i++){
        if(allArticles[i].classList.contains("opinion")){
            if(opinionArticle.checked){
                allArticles[i].style.display = "block";
            }else{//if you dont add the else statement and just allArticles[i].style.display = "none"; it will disappear when unchecked but not reappear when checked
                allArticles[i].style.display = "none";
            }
        }

        if(allArticles[i].classList.contains("recipe")){
            if(recipeArticle.checked){
                allArticles[i].style.display = "block";
            }else{
                allArticles[i].style.display = "none";
            }
        }

        if(allArticles[i].classList.contains("update")){
            if(updateArticle.checked){
                allArticles[i].style.display = "block";
            }else{
                allArticles[i].style.display = "none";
            }
        }

    }

} 


function addNewArticle(){
    let articleTitle = document.getElementById("inputHeader").value;
    let articleText = document.getElementById("inputArticle").value;

    let articleType = "";

    let opinionArticleChoice = document.getElementById("opinionRadio");
    let recipeArticleChoice = document.getElementById("recipeRadio");
    let updateArticleChoice = document.getElementById("lifeRadio");

    if(opinionArticleChoice.checked){
        articleType = "opinion";
    }
    
    if(recipeArticleChoice.checked){
        articleType = "recipe";
    }
    if(updateArticleChoice.checked){
        articleType = "update";
    }



    let createArticle = document.createElement("article");
    createArticle.classList.add(articleType);

    let articleTitleHeader = document.createElement("h2");
    articleTitleHeader.textContent = articleTitle;

    let articleTextPara = document.createElement("p");
    articleTextPara.textContent = articleText;

    createArticle.appendChild(articleTitleHeader);
    createArticle.appendChild(articleTextPara);

    document.getElementById("articleList").appendChild(createArticle);
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";


}