let musicVideos = []; 

async function getAlbums(album) {
    const data = await fetch("../ts.json"); 
    const json = await data.json(); 

    const songs = [];

    let j = 1; 
     
    for (let i = 0; i < json.length; i++) {
        let feat = "";
        if (json[i].album_name == album) {
            
            songs.push(j + "." + json[i].track_name);
            var minutes = Math.floor(json[i].duration_ms / 60000);
            var seconds = ((json[i].duration_ms % 60000) / 1000).toFixed(0);
            var total = minutes + ":" + (seconds < 10 ? '0' : '') + seconds; 
            if (json[i].featuring != "NA") {
                feat = " (feat. " + json[i].featuring + ")"; 
            }
            if (json[i].music_video != "") {
                document.getElementById("tracklist").innerHTML += "<a href='" + json[i].music_video + "' target='_blank' id='mv'><div><p class='songtitle'>" + j + ". " + json[i].track_name + feat + "<span class='duration'>" + " (" + total + ") " +"</span></p></div</a>";

            }
            else {
                document.getElementById("tracklist").innerHTML += "<div><p class='songtitle'>" + j + ". " + json[i].track_name + feat + "<span class='duration'>" + " (" + total + ") " +"</span></p></div";
            }
            j++;
        }
    }
    document.getElementById("albumName").innerText = album;
}


function setColors(album) {
    if (album == "Taylor Swift") {
        document.getElementById("body1").style.backgroundColor = "#A9CBAA";
        document.getElementById("body1").style.color = "#0C1A0C";
        document.getElementsByTagName("a").style.color = "#0C1A0C";
       // document.getElementById("navbar").style.backgroundColor = "#A9CBAA";
    }

    if (album == "Fearless") {
        document.getElementById("body1").style.backgroundColor = "#FDDAA6";
        document.getElementById("body1").style.color = "#1E151A";

       // document.getElementById("navbar").style.backgroundColor = "#FDDAA6";

    }
    if (album == "Speak Now") {
        document.getElementById("body1").style.backgroundColor = "#D6BADC";
        document.getElementById("body1").style.color = "#000000";

       // document.getElementById("navbar").style.backgroundColor = "#D6BADC";

    }
    if (album == "Red") {
        document.getElementById("body1").style.backgroundColor = "#72333C";
        document.getElementById("body1").style.color = "#C7B2A2";

       // document.getElementById("navbar").style.backgroundColor = "#72333C";

    }
    if (album == "1989") {
        document.getElementById("body1").style.backgroundColor = "#034A62";
        document.getElementById("body1").style.color = "#D1F3FF";
       // document.getElementById("navbar").style.backgroundColor = "#034A62";
    }

    if (album == "reputation") {
        document.getElementById("body1").style.backgroundColor = "#2A2628";
        document.getElementById("body1").style.color = "#CACACA";

       // document.getElementById("navbar").style.backgroundColor = "#2A2628";

    }
    if (album == "Lover") {
        document.getElementById("body1").style.backgroundColor = "#FBB3D1";
        document.getElementById("body1").style.color = "#3D2D34";

      //  document.getElementById("navbar").style.backgroundColor = "#FBB3D1";

    }
    if (album == "folklore") {
        document.getElementById("body1").style.backgroundColor = "#D5D5D5";
        document.getElementById("body1").style.color = "#000000";

       // document.getElementById("navbar").style.backgroundColor = "#D5D5D5";

    }
    if (album == "evermore") {
        document.getElementById("body1").style.backgroundColor = "#E0C9AF";
        document.getElementById("body1").style.color = "#2E2327";

       // document.getElementById("navbar").style.backgroundColor = "#E0C9AF";
    }

    if (album == "Fearless (Taylor's Version)") {
        document.getElementById("body1").style.backgroundColor = "#FDDAA6";
        document.getElementById("body1").style.color = "#1E151A";

       // document.getElementById("navbar").style.backgroundColor = "#FDDAA6";

    }
    if (album == "Red (Taylor's Version)") {
        document.getElementById("body1").style.backgroundColor = "#72333C";
        document.getElementById("body1").style.color = "#C7B2A2";
        //document.getElementById("navbar").style.backgroundColor = "#72333C";

    }
    if (album == "Midnights") {
        document.getElementById("body1").style.backgroundColor = "#E0EDFD";
        document.getElementById("body1").style.color = "#1F2E43";

        //document.getElementById("navbar").style.backgroundColor = "#E0EDFD";

    }
}

    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    let albumName; 
    let albumNr; 
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == "album") 
        {
            albumName = decodeURI(sParameterName[1]);
        }
        if (sParameterName[0] == "number") {
            albumNr = sParameterName[1]; 
        }   
    }

    getAlbums(albumName);
    setColors(albumName);
    setImage(albumNr); 

    function setImage(albumNr) {
        document.getElementById("albumImg").src = "../images/" + albumNr + ".jfif";
    }