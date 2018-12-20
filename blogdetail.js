const baseLink = "http://jesskaplan.dk/AnaNovic/wp-json/wp/v2";
const main = document.querySelector("main");
const blogDetailTemplate = document.querySelector(".blogDetailPage-template").content;


const params = new URLSearchParams(window.location.search);

const blogID = params.get("blogid");



function loadOne(blogID){
	fetch(baseLink+"/blog/"+blogID+"?_embed").then(e=>e.json()).then(showOne);
}


function showOne(data){
	console.log(data)
       const clone = blogDetailTemplate.cloneNode(true);
        const title =data.title.rendered;
        const date =data.acf.date;
        const content =data.content.rendered;
        
        clone.querySelector(".blogDetailTitle").innerHTML=title;
        clone.querySelector(".blogDetailContent").innerHTML=content;
        clone.querySelector(".blogDetailDate").innerHTML=date;
        clone.querySelector(".blogDetailImg").src= data._embedded["wp:featuredmedia"][0].source_url;
        document.querySelector("main").appendChild(clone);
    

}


loadOne(blogID);
   
