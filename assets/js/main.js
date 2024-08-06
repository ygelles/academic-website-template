jQuery(document).ready(function($){
    window.owner_name = "Firstname M. Surename";

    var path = window.location.pathname;
    var page = path.split("/").pop();

//    Navbar
    if (page == 'index.html'){
        $.get("/elements/nav.html", function(data){
            $("#nav-placeholder").replaceWith(data);
            document.getElementById('navbar-brand').innerHTML = window.owner_name;
        });
    } else {
        $.get("/elements/nav-smaller.html", function(data){
            $("#nav-placeholder").replaceWith(data);
            document.getElementById('navbar-brand').innerHTML = window.owner_name;
        });
    }

//  Footer
    $.get("/elements/footer.html", function(data){
        $("#footer-placeholder").replaceWith(data);
        document.getElementById('footer-owner').innerHTML = window.owner_name;
        var year = new Date().getFullYear();
        document.getElementById('footer-copyright').innerHTML = "Copyright @ "+year;

    });
});