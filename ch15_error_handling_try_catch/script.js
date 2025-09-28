let noInternetError = Error("No internet please enable it")
try {
    console.log("The dog chased a red ball across the yard");
    console.log("A bird landed on my window this morning");
    console.log("The rain made the streets shine like glass");
    console.log("I saw a cloud shaped like a giant fish");
    console.log("The park was empty except for one runner");
    let firstName
    // throw noInternetError
    console.log("My phone buzzed with a random alert");
    console.log("The sun set quickly behind the tall trees");
    console.log("A bike rolled past with a squeaky wheel");
    console.log("The lake water looked calm and clear");
    console.log("I found a coin shining in the grass");
} catch (error) {
    console.log(error.message);
} finally {
    console.log("I am the last message");
}