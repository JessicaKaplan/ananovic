const baseLink = "http://jesskaplan.dk/AnaNovic/wp-json/wp/v2";
const main = document.querySelector("main");
const contactTemplate = document.querySelector(".contactpage-template").content;

const params = new URLSearchParams(window.location.search);
//fetching the left hand side posts
function getContact() {
    fetch(baseLink + "/contact")
        .then(res => res.json())
        .then(showContact)
}

function showContact(data) {
    /*onsole.log(data);*/
    data.forEach(data => {

        const clone = contactTemplate.cloneNode(true);
        const facebookLink = data.acf.facebook;
        const instagramLink = data.acf.instagram;
        const cellphoneNumber = data.acf.cellnumber;
       clone.querySelector(".facebookLogo").href = facebookLink;
        clone.querySelector(".instagramLogo").href = instagramLink;
        clone.querySelector(".phoneNumber").textContent= cellphoneNumber;
        document.querySelector("main").appendChild(clone);
    });
                 }



    getContact();
