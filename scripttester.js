const baseLink = "http://jesskaplan.dk/AnaNovic/wp-json/wp/v2";
const main = document.querySelector("main");
const myTemplate = document.querySelector(".mystory-template").content;
const myTemplate2 = document.querySelector(".mystory-template2").content;
const params = new URLSearchParams(window.location.search);
//fetching the left hand side posts
function getPosts1() {
    fetch(baseLink + "/mystory1?_embed")
        .then(res => res.json())
        .then(showPosts1)
}

function showPosts1(data) {
    console.log(data);
    /*console.log(data._embedded["wp:featuredmedia"][0].media_details.sizes.full.source.source_url);*/
    data.forEach(data => {
        const clone = myTemplate.cloneNode(true);
        const postTitle1 = data.title.rendered;
        const postContent1 = data.content.rendered;

        /*const postTitle2 = data.title.rendered;
           const postContent2 = data.content.rendered;*/
        clone.querySelector(".postTitle1").textContent = postTitle1;
        clone.querySelector(".postContent1").innerHTML = postContent1;
        clone.querySelector(".img1").src = data._embedded["wp:featuredmedia"][0].source_url;
        document.querySelector("main").appendChild(clone);
    });
}




//fetching the right hand side posts (for styling purposes)
function getPosts2() {
    fetch(baseLink + "/mystory2?_embed")
        .then(res => res.json())
        .then(showPosts2)
}

function showPosts2(data) {
    console.log(data);
    data.forEach(data => {
        const clone = myTemplate2.cloneNode(true);
        const postTitle2 = data.title.rendered;
        const postContent2 = data.content.rendered;

        clone.querySelector(".postTitle2").textContent = postTitle2;
        clone.querySelector(".postContent2").innerHTML = postContent2;

        clone.querySelector(".img2").src = data._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;

         document.querySelector("main").appendChild(clone);



    });
}



getPosts1();
getPosts2();
