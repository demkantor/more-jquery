$(document).ready(onReady);

// song app
let song = [];


function onReady(){
    console.log("high planes drifter");
    $("#addSongButton").on("click", addSong);
}

function addSong(){
    //using .val as a getter
    let newSong = {
        artist: $("#artistIn").val(),
        title: $("#titleIn").val(),
        album: $("#albumIn").val(),
        year: $("#yearIn").val()
    }
    //using .val as a setter
    $("#artistIn").val("");
    $("#titleIn").val("");
    $("#albumIn").val("");
    $("#yearIn").val("");

    //push added song
    song.push(newSong);

    //display songs
    displaySongs();

}



function displaySongs(){
    console.log("rolled down my window tand i watched columbo");
    let el = $("#songsOut");
    el.empty();
    for(let i=0; i<song.length; i++){
        el.append("<li>" + song[i].artist + "; " + song[i].title + "; " + song[i].album + "; " + song[i].year + "  <button class='digButton'>I dig it!</button>" + "</li>");
    }
}




///~ test song
// song.push( {
//     artist: "Red Hot Chili Pepers",
//     title: "Under the Bridge",
//     album: "Blood Surgar Sex Magik",
//     year: 1991,
// });