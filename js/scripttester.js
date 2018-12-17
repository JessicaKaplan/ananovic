const baseLink = "http://jesskaplan.dk/AnaNovic/wp-json/wp/v2";
const main = document.querySelector("main");
const myTemplate = document.querySelector(".mystory-template").content;
const params = new URLSearchParams(window.location.search);
//fetching the left hand side posts
function getPosts1() {
    fetch(baseLink + "/mystorypage?_embed")
        .then(res => res.json())
        .then(showPosts1)
}

function showPosts1(data) {
    console.log(data);
    /*console.log(data._embedded["wp:featuredmedia"][0].media_details.sizes.full.source.source_url);*/
    data.forEach(data => {
        console.log(data);
        const clone = myTemplate.cloneNode(true);
        const postTitle = data.title.rendered;
        const postContent = data.content.rendered;
        /*clone.querySelector(".postTitle").textContent = postTitle;
        clone.querySelector(".postContent").innerHTML = postContent;
        clone.querySelector(".img").src = data._embedded["wp:featuredmedia"][0].source_url;*/
        document.querySelector("main").appendChild(clone);
        console.log(data.categories[0])

        if (data.categories[0] === 2) {
            document.querySelector(".postLeft").src = data._embedded["wp:featuredmedia"]
              [0].source_url;
            document.querySelector(".postLeft").innerHTML = postTitle;
            document.querySelector(".postLeft").innerHTML = postContent;
        } else if (data.categories[0] === 3) {
            document.querySelector(".postRight").src = data._embedded["wp:featuredmedia"]
              [0].source_url;
            document.querySelector(".postRight").innerHTML = postTitle;
            document.querySelector(".postRight").innerHTML = postContent;
        }
    });
}

/*const catID = params.get("catid");*/



//categories
/*if(catID === 2){
	;
}else{
	;
}*/

/*function loadCategories() {
    fetch(baseLink + "/categories").then(e => e.json()).then(makeCatStyling);
}

function makeCatStyling(cats) {
    cats.forEach(cat => {
            console.log(cat.id);
            if (cat.id === 2) {
            clone.querySelector(".leftSide") = data.content.rendered
            } else{
             main.classList.add(".postRight")
            }
        }

    );
}*/


// loadCategories();


getPosts1();
