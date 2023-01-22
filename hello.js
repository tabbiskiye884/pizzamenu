
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
function saveUserOption(selectedOption, userPizza) {
    userPizza.push(selectedOption)
}

(async () => {
     const usersPizza = []
     let menu = {
        1: { bread : { thin : "thin", thick : "thick"}},
        2: {crust : { garlic : "garlic sprinkled crust", stuffed : "stuffed crust"}},
        3: {sauce : { tomato : "tomato", bbq : "bbq", none : "no sauce"}},
        4: {cheese : { moz : "mozzarella", cheddar : "cheddar", vegan : "vegan cheese", noCheese : "no cheese"}},
        5: {toppings : { pep : "pepperoni", veggie : "vegetables", meat : "spicy beef", tropical : "ham and pineapple"}},
     }
     console.log("Welcome to Chloe's Pizzeria, please select what pizza you would like from the options below.")

     let breadOptions = menu["1"]
     console.log(`Please choose your base : ${breadOptions.bread.thin} or ${breadOptions.bread.thick}`)
     let userSelectedBread = await userInput();
     const base = breadOptions.bread[userSelectedBread]
     saveUserOption(base, usersPizza)

    let crustOptions = menu["2"]
    console.log(`Please choose your crust : ${crustOptions.crust.garlic} or ${crustOptions.crust.stuffed}`)
    let userSelectedCrust = await userInput();
   const roll = crustOptions.crust[userSelectedCrust]
    saveUserOption(roll, usersPizza)

    let sauceOptions = menu["3"]
    console.log(`Which sauce would you like on your pizza? : ${sauceOptions.sauce.tomato} or ${sauceOptions.sauce.bbq} or ${sauceOptions.sauce.none}`)
    let userSelectedSauce = await userInput();
     const sauce = sauceOptions.sauce[userSelectedSauce]
    saveUserOption(sauce, usersPizza)

    let cheeseOptions = menu["4"]
    console.log(`Which cheese would you like on your pizza? : ${cheeseOptions.cheese.moz} ,
     ${cheeseOptions.cheese.cheddar} , 
     ${cheeseOptions.cheese.vegan} ,
      ${cheeseOptions.cheese.noCheese}`)
    let userSelectedCheese = await userInput();
     const cheeses = cheeseOptions.cheese[userSelectedCheese]
    saveUserOption(cheeses, usersPizza)

    let toppingOptions = menu["5"]
    console.log(`Please choose your toppings : ${toppingOptions.toppings.pep} ,
    ${toppingOptions.toppings.meat} ,
    ${toppingOptions.toppings.veggie} ,
    ${toppingOptions.toppings.tropical}`)
    let userSelectedToppings = await userInput();
     const toppings = toppingOptions.toppings[userSelectedToppings]
    saveUserOption(toppings, usersPizza)

    console.log(usersPizza.length)
    console.log(`user selected pizza : ${usersPizza.join(" ")} pizza`)




})()

