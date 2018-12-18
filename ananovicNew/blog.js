const baseLink = "http://jesskaplan.dk/AnaNovic/wp-json/wp/v2";
const main = document.querySelector("main");
const blogTemplate = document.querySelector(".blogPage-template").content;

const params = new URLSearchParams(window.location.search);
//fetching the left hand side posts
function getBlog() {
    fetch(baseLink + "/blog?_embed")
        .then(res => res.json())
        .then(showBlogPosts)
};

function showBlogPosts(data) {
    /*console.log(data);*/
    data.forEach(data => {

        const clone = blogTemplate.cloneNode(true);
        const title = data.title.rendered;
        const content = data.content.rendered;
        const date = data.acf.date;
        clone.querySelector(".blogTitle").innerHTML =title;
        clone.querySelector(".blogContent").innerHTML =content;
        clone.querySelector(".blogDate").innerHTML =date;
        clone.querySelector(".blogImg").src = data._embedded["wp:featuredmedia"][0].source_url;
        document.querySelector("main").appendChild(clone);
    });
}



getBlog();
