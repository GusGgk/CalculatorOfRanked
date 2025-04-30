playerName = "GusGgk"


function balence(victories, defeats){
    return victories - defeats
}

let result = balence(10, 20); 


if (result >= 0 && result <= 10){
    classification = "Iron"
    console.log("You are Iron!")
}
else if (result >= 11 && result <= 20){
    classification = "Bronze"
    console.log("You are Bronze")
}
else if (result >= 21 && result <= 50){
    classification = "Silver"
    console.log("You are Silver")
}
else if (result >= 51 && result <= 80){
    classification = "Gold"
    console.log("You are Gold")
}
else if (result >= 81 && result <= 90){
    classification = "Diamond"
    console.log("You are Diamond")
}
else if (result >= 91 && result <= 100){
    classification = "Legendary"
    console.log("You are Legendary")
}
else if (result >= 101){
    classification = "Imortal"
    console.log("You are Imortal")
}
else{
    classification = "Trash!"
    console.log("You are Trash!!!!!!!")
}

//saida
console.log ("O Player " + playerName + " tem de saldo de " + result + " vitórias, então ele está na classificação de " + classification)
console.log ("The Player " + playerName + " has balance of " + result + " victories, so he's in the classification of " + classification)

