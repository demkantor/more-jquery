$(document).ready(onReady);

// song app
let song = [];


function onReady(){
    console.log("high planes drifter");
    $("#addSongButton").on("click", addSong);
    $("#songsOut").on("click", ".digButton", digSong);
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

function digSong(){
    console.log("cool like lemonade");
    let el = $(this);


    // if dig set to hate, other wise set to dig
    if(el.text() === "I dig it!"){
            el.text("Hate it!");
    }
    else{
        el.text("I dig it!");
    }

    //change style of parent
    let parent = $(this).parent();
    console.log("hey yo");
    parent.toggleClass("hate");
    
}

function displaySongs(){
    console.log("rolled down my window tand i watched columbo");
    let el = $("#songsOut");
    el.empty();
    for(let i=0; i<song.length; i++){
        el.append("<li class='dig'>" + song[i].artist + "; " + song[i].title + "; " + song[i].album + "( " + song[i].year + ")" + "  <button class='digButton'>I dig it!</button>" + "</li>");
    }
}




///~ test song
// song.push( {
//     artist: "Red Hot Chili Pepers",
//     title: "Under the Bridge",
//     album: "Blood Surgar Sex Magik",
//     year: 1991,
// });