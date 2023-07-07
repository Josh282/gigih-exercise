function songPromise(songPromises) {
    songPromises
        .then((songs) => {
            console.log("Songs list:");
            songs.forEach((song) => {
                console.log(`Title: ${song.title}`);
                console.log(`Artist: ${song.artist[0].name}`);
                console.log(`Duration: ${song.duration}`);
                console.log("-----------------------");
            });
        })
        .catch((error) => {
            console.error("Error:", error)
        });
}

async function asyncSongPromise(songPromises) {
    try{
        const songs = await songPromises;
        console.log("Songs list:");
        songs.forEach((song) => {
            console.log(`Title: ${song.title}`);
            console.log(`Artist: ${song.artist[0].name}`);
            console.log(`Duration: ${song.duration}`);
            console.log("-----------------------");
        });
    } catch (error) {
        console.error("Error", error);
    }
}

const fulfilledPromise = Promise.resolve([
    {
        title: "Song 1",
        artist: [{ name: "Artist 1"}],
        duration: 200
    },
    {
        title: "Song 2",
        artist: [{name : "Artist 2"}],
        duration: 200
    }
]);

const rejectedPromise = Promise.reject("Failed to fetch songs.");

/* songPromise(fulfilledPromise);
songPromise(rejectedPromise); */
asyncSongPromise(fulfilledPromise);
asyncSongPromise(rejectedPromise);