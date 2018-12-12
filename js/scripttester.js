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
    console.log(data.categories);
    /*console.log(data._embedded["wp:featuredmedia"][0].media_details.sizes.full.source.source_url);*/
    data.forEach(data => {
        const clone = myTemplate.cloneNode(true);
        const postTitle = data.title.rendered;
        const postContent = data.content.rendered;
        clone.querySelector(".postTitle").textContent = postTitle;
        clone.querySelector(".postContent").innerHTML = postContent;
        clone.querySelector(".img").src = data._embedded["wp:featuredmedia"][0].source_url;
        document.querySelector("main").appendChild(clone);
        /*console.log(data.categories);*/

        if (data.categories === 2) {
            document.querySelector(".postLeft").innerHTML = data._embedded["wp:featuredmedia"]
            [0].source_url;
            document.querySelector(".postLeft").innerHTML = postTitle;
            document.querySelector(".postLeft").innerHTML = postContent;
        }
        else (data.categories === 3){
            document.querySelector(".postRight").innerHTML = data._embedded["wp:featuredmedia"]
            [0].source_url;
            document.querySelector(".postRight").innerHTML = postTitle;
            document.querySelector(".postRight").innerHTML = postContent;
        }

    });
}




getPosts1();
