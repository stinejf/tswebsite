async function getFeaturing() {
    const data = await fetch("../ts.json"); 
    const json = await data.json(); 

    const songs = [];

    let j = 1; 
     
    for (let i = 0; i < json.length; i++) {
        let feat = "";
        if (json[i].album_name == "NA" && json[i].featuring == "Taylor Swift") {
            songs.push(j + "." + json[i].track_name);
            var minutes = Math.floor(json[i].duration_ms / 60000);
            var seconds = ((json[i].duration_ms % 60000) / 1000).toFixed(0);
            var total = minutes + ":" + (seconds < 10 ? '0' : '') + seconds; 
            if (json[i].featuring != "NA") {
                feat = " (feat. " + json[i].featuring + ")"; 
            }
            document.getElementById("tracklist_feat").innerHTML += "<div><p class='artist'>" + json[i].artist + "</p><p class='songtitle'>" + json[i].track_name + feat + "<span class='duration'>" + " (" + total + ") " +"</span></p></div";
            j++;
        }
        if (json[i].album_name == "NA" && json[i].artist == "Taylor Swift") {
            songs.push(j + "." + json[i].track_name);
            var minutes = Math.floor(json[i].duration_ms / 60000);
            var seconds = ((json[i].duration_ms % 60000) / 1000).toFixed(0);
            var total = minutes + ":" + (seconds < 10 ? '0' : '') + seconds; 
            if (json[i].featuring != "NA") {
                feat = " (feat. " + json[i].featuring + ")"; 
            }
            document.getElementById("tracklist_other").innerHTML += "<div><p class='artist'>" + json[i].artist + "</p><p class='songtitle'>" + json[i].track_name + feat + "<span class='duration'>" + " (" + total + ") " +"</span></p></div";
            j++;
        }

    }
}

getFeaturing();