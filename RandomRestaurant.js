/*list = ["Apple", "Orange", "Banana", "Kiwi"]
console.log(list[Math.floor(Math.random() * list.length)])*/

const prompt = require("prompt-sync")({sigint:true});

console.log("█───█─▄▀▀─█───▄▀▀─▄▀▀▄─█▄─▄█─▄▀▀");
console.log("█───█─█───█───█───█──█─█▀▄▀█─█──");
console.log("█───█─█▀▀─█───█───█──█─█─▀─█─█▀▀");
console.log("█▄█▄█─█───█───█───█──█─█───█─█──");
console.log("─▀─▀───▀▀──▀▀──▀▀──▀▀──▀───▀──▀▀");

options = []
let user;

do {
    console.log("")
    console.log("(1) Add restaurant to list.");
    console.log("(2) Delete restaurant from list.");
    console.log("(3) Show list.");
    console.log("(4) Make random choice on restaurant list.");
    console.log("(5) Exit Program.");
    let user = prompt("Enter Option: ");

    switch(user) {
        case '1':
            let restaurantName = prompt("Enter restaurant name: ");
            options.push(restaurantName);
            console.log("Restaurant Added!")
            break;
        case '2':
            let deleteRestaurant = prompt("Enter restaurant name: ");
            if (options.includes(deleteRestaurant)) {
                options = options.filter(x => x !== deleteRestaurant);
                console.log("Restaurant Deleted!");
            } else {
                console.log("Restaurant is not in list. Deletion not activated.");
            }
            break;
        case '3':
            console.log(options)
            break;
        case '4':
            chosen = options[Math.floor(Math.random() * options.length)];
            console.log("Chosen Restaurant: " + chosen);
            break;
        case '5':
            console.log("Program Terminated...");
            return;
    }
    

} while(user !== '5');




