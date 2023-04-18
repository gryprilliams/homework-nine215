import { changePageContent } from "../model/model.js";

function initListeners() {
    $("nav a").on("click", function (e) {

        let btnID = e.currentTarget.id;
        changePageContent(btnID);
        console.log("hello");
    })
}

$(document).ready(function() {
    initListeners();
    changePageContent("home");
});