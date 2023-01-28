
/**
 * Do not change this its just read user input
 * @returns {Promise<unknown>}
 */

const userInput= async () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        readline.question("", input =>{
            resolve(input)
            readline.close()
        })
    })
}

/**
 * Use all that you have been learning so far and create a pizza menu
 * with your favourite pizza, it can be granular as you like it,
 * for example you can the user to pick a base they lke
 *
 *
 * 1. Tomatoe sus 2. BBQ sus 3. Nothing sus
 *
 * and them pick toppings etc...
 *
 * or you can just give a selection of pizzas and force everyone
 * to have what is available.
 *
 * either which way you have to print out the selections
 * a user has made
 *
 * e.g
 *
 * Pizza 1:
 *   - Thin Tomatoes base
 *   - Toppings:
 *      - ham
 *      - chicken
 *      - spicy beef
 *
 * Tips: you can going to need a while loop to keep the program running
 * you will need if statements to check for which item was selected in your menu
 * you will need to think about how to store the users data
 *
 *
 *
 */

function checkOptions (selectedUserOption, options) {
    return (selectedUserOption in options);


}
function saveUserOption(selectedOption, userPizza) {
    userPizza.push(selectedOption)
}

(async () => {
     const usersPizza = []
     let menu = {
        1: { bread : { thin : "thin", thick : "thick"}},
        2: {crust : { garlic : "garlic sprinkled crust", stuffed : "stuffed crust"}},
        3: {sauce : { tomato : "tomato", bbq : "bbq", none : "no sauce"}},
        4: {cheese : { mozzarella : "mozzarella", cheddar : "cheddar", vegan : "vegan cheese", "no cheese" : "no cheese"}},
        5: {toppings : { pepperoni : "pepperoni", veggie : "vegetables", meat : "spicy beef", "ham and pineapple" : "ham and pineapple"}},
     }
     console.log("Welcome to Chloe's Pizzeria, please select what pizza you would like from the options below.")
     for (let i=1; i<6; ) {
         let breadOptions = menu[i]
         console.log(`Please choose your base : ${breadOptions.bread.thin} or ${breadOptions.bread.thick}`)
         let userSelectedBread = await userInput();
         const base = breadOptions.bread[userSelectedBread]
         const valid = checkOptions(userSelectedBread, breadOptions.bread)
         console.log(valid)
         if (valid) {
             saveUserOption(base, usersPizza)
             i++
         } else {
             console.log(`no valid option pick from ${JSON.stringify(breadOptions.bread)}`)
             continue
         }


         let crustOptions = menu[i]
         console.log(`Please choose your crust : ${crustOptions.crust.garlic} or ${crustOptions.crust.stuffed}`)
         let userSelectedCrust = await userInput();
         const roll = crustOptions.crust[userSelectedCrust]
         const validCrust = checkOptions(userSelectedCrust, crustOptions.crust)
         if (validCrust) {
             saveUserOption(roll, usersPizza)
             i++
         } else {
             console.log(`no valid option pick from ${JSON.stringify(breadOptions.crust)}`)
             continue
         }


         let sauceOptions = menu[i]
         console.log(`Which sauce would you like on your pizza? : ${sauceOptions.sauce.tomato} or ${sauceOptions.sauce.bbq} or ${sauceOptions.sauce.none}`)
         let userSelectedSauce = await userInput();
         const sauce = sauceOptions.sauce[userSelectedSauce]
         const validSauce = checkOptions(userSelectedCrust, sauceOptions.sauce)
         if (validSauce) {
             saveUserOption(sauce, usersPizza)
             i++
         } else {
             console.log(`no valid option pick from ${JSON.stringify(sauceOptions.sauce)}`)
             continue
         }


         let cheeseOptions = menu[i]
         console.log(`Which cheese would you like on your pizza? : ${cheeseOptions.cheese.mozzarella} ,
     ${cheeseOptions.cheese.cheddar} , 
     ${cheeseOptions.cheese.vegan} ,
      ${cheeseOptions.cheese["no cheese"]}`)
         let userSelectedCheese = await userInput();
         const cheeses = cheeseOptions.cheese[userSelectedCheese]
         const validCheese = checkOptions(userSelectedCheese, cheeseOptions.cheese)
         if (validCheese) {
             saveUserOption(cheeses, usersPizza)
             i++
         } else {
             console.log(`no valid option pick from ${JSON.stringify(cheeseOptions.cheese)}`)
             continue
         }

         let toppingOptions = menu[i]
         console.log(`Please choose your toppings : ${toppingOptions.toppings.pep} ,
    ${toppingOptions.toppings.meat} ,
    ${toppingOptions.toppings.veggie} ,
    ${toppingOptions.toppings["ham and pineapple"]}`)
         let userSelectedToppings = await userInput();
         const toppings = toppingOptions.toppings[userSelectedToppings]
         const validToppings = checkOptions(toppings, toppingOptions.toppings)
         if (validToppings) {
             saveUserOption(toppings, usersPizza)
             i++
         } else {
             console.log(`no valid option pick from ${JSON.stringify(toppingOptions.toppings)}`)
         }
     }

    console.log(usersPizza.length)
    console.log(`user selected pizza : ${usersPizza.join(" ")} pizza`)




})()

