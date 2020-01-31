$(document).ready(onReady);

// song app
let song = [];


function onReady(){
    console.log("high planes drifter");
    $("#addSongButton").on("click", addSong);
}

function addSong(){
    console.log("mellelow like jellelow");
    let newSong = {
        artist: $("#artistIn").val(),
        title: $("#titleIn").val(),
        album: $("#albumIn").val(),
        year: $("#yearIn").val(),
    }
    song.push(newSong);

    displaySongs();

}



function displaySongs(){
    console.log("rolled down my window to watch columbo");
    let el = $("#songsOut");
    el.empty();
    for(let i=0; i<song.length; i++){
        el.append("<li>" + song[i].artist + "; " + song[i].title + "; " + song[i].album + "; " + song[i].year + "</li>");

    }
}




///~ test song
// song.push( {
//     artist: "Red Hot Chili Pepers",
//     title: "Under the Bridge",
//     album: "Blood Surgar Sex Magik",
//     year: 1991,
// });