function createPlayer(datas) {
    const div = document.getElementById("player");
    const audioPath = datas.data[0].preview;
    // console.log("este es el link" + datas.data[0].preview)
    div.innerHTML = 
    `<audio src="${audioPath}" controls></audio>`;
}

function searchMusic() {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=arcade%20fire", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "bb2294e876msh6e6489d7845d18dp1db413jsnc41eab9d4034",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        createPlayer(data);
    })

    .catch(err => {
        console.error(err);
    });
}

