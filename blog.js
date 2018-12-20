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
        const shortDescription = data.acf.short_description;
        const date = data.acf.date;
        clone.querySelector(".blogTitle").innerHTML =title;
        clone.querySelector(".shortDescription").innerHTML =shortDescription;
        clone.querySelector(".blogDate").innerHTML =date;
        clone.querySelector(".blogImg").src = data._embedded["wp:featuredmedia"][0].source_url;
        clone.querySelector(".detailLink").href = "blogdetail.html" + "?blogid=" + data.id;
        console.log(data.id);
        document.querySelector("main").appendChild(clone);
        
    });
}



getBlog();
