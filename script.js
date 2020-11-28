$(document).ready(function () {
    $(".icon").hover(function () {
        $(this).css("width", "75px");
    }, function () {
        $(this).css("width", "50px");
    });
});

function repo() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myRepo = JSON.parse(this.responseText);
            let ul = document.getElementById("myRepos");
            for (let i = 0; i < myRepo.length; i++) {
                let thatRepo = myRepo[i].name;
                let li = document.createElement('li');
                li.appendChild(document.createTextNode(thatRepo));
                ul.appendChild(li);
            }

        }

    };
    xhttp.open("GET", "https://api.github.com/users/Zanmore/repos", true);
    xhttp.send();
}