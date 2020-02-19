'use strict';


const options = {
    headers: new Headers ({"Accept": 'https://api.github.com/application/vnd.github.v3+json', "justypugh": 'a59e1f238acd95e31754ae40d73370872130bf8b'})
};

function getRepos() {
    let searchTerm = $("#userSearch").val()
    fetch('https://api.github.com/users/' + searchTerm +'/repos')
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => console.log(`Something went wrong: ${error.message}`));
}

function displayResults(responseJson) {
    console.log(responseJson);
    $(".repoContainer").empty();
    for(let i = 0; i < responseJson.length; i++) {
        $(".repoContainer").append(`
        <h3><a target="_blank" href="${responseJson[i].html_url}">${responseJson[i].name}</h3>
           
        `);
    }
    $(".results").removeClass("hidden");
}




function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getRepos();
    });
}

$(function() {
    console.log("App loaded!");
    watchForm();
});