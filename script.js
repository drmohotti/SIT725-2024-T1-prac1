function changeTxt(){
    var textArray = ["Monday 12-2pm ","Tuesday 2-4pm","Friday 3-5pm"]
    var number = getRandomNoBetween( 0,textArray.length - 1)
    console.log("Ïndex: ",number)

    document.getElementById("heading").innerHTML = textArray[number];

}

function getRandomNoBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}