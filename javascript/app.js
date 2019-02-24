// Set Array with Objects: Questions, Options, and Answers
var sbxQuiz=[
    {q: "Which of these drinks is not on the starbucks menu?", a:"triple mocha frappuccino", b:"blossoming rose tea latte", c:"oreo frappuccino", d:"cold foam cascara cold brew", answer:"c"},
    {q: "For gold card members, how many stars do you need to redeem a free drink?", a:"250", b:"125", c:"500", d:"100", answer:"b"},
    {q: "What type of coffee is used in a flat white?", a: "ristretto", b: "espresso", c: "brewed coffee", d: "long", answer:"a"},
    {q: "How many fluid oz does a Venti cup contain?", a:"12oz", b:"16oz", c:"20oz", d:"26oz", answer:"c"},
    {q: "What is it called when caramel is drizzled all over the your cup?", a:"New York style", b:"Chicago style", c:"LA style", d:"Cali style", answer: "d"},
    {q: "What is starbuck's most popular fall drink?", a: "Pumpkin Spiced Latte", b:"Pumpkin Spiced Chai",c:"Pumpkin Patch Latte", d:"Salted Caramel Mocha", answer: "a"},
    {q: "Starbucks is named after a character in which novel?", a:"Wuthering Heights", b:"The Adventures of Tom Sawyer", c:"Moby Dick",d:"The Great Gatsby", answer: "c"},
    {q: "What is an Espresso Con Panna", a: "espresso with milk foam", b: "espresso with whipped cream", c: "espresso with milk", d:"espresso with white mocha", answer: "d"},
    {q: "What is it called when you have a latte made with 10%/Half & Half", a:"breve", b:"nuevo", c: "huevo", d:"affogato", answer:"a"},
    {q: "Which of these drinks does contain caffeine?", a:"vanilla bean frappuccino", b:"passion tea lemonade", c:"citrus defender", d:"mango dragonfruit refresher", answer: "d"}
];

// Set variables that can keep score of trivia game


//------THE FUNCTIONS--------
$("#startBtn").on("click", function(){
    var correct=0;
    var incorrect=0;
    var unanswered=0;
    var setTime=30;
    var gameTimer=setInterval(questionTimer,1000);

    //timer
function questionTimer(){
    setTime--;
    $("#timer").text("Time: "+setTime+"s");
    if(setTime===0){
        console.log("Time's Up");
        stopTimer();
        question.text("");
        optionA.text("");
        optionB.text("");
        optionC.text("");
        optionD.text("");
        unanswered++;
        $("#response").text("You're Out of Time");
        $("#responseImg").attr("src", "images/catbux.gif");
    }
}
function stopTimer(){
    clearInterval(gameTimer);
}
function quiz(i){
    var question = $("#question");
    question.text(sbxQuiz[i].q);
    //display option a
    var optionA=$("#a");
    optionA.text(sbxQuiz[i].a);
    //display option b
    var optionB=$("#b");
    optionB.text(sbxQuiz[i].b);
    //display option c
    var optionC=$("#c");
    optionC.text(sbxQuiz[i].c);
    //display option d
    var optionD=$("#d");
    optionD.text(sbxQuiz[i].d);

    $(".option").on("click", function(){
        var answer =this.id;
            question.text("");
            optionA.text("");
            optionB.text("");
            optionC.text("");
            optionD.text("");
            console.log(sbxQuiz[i].answer);
            console.log(answer);
            if (answer===sbxQuiz[i].answer){
                console.log("you're right");
                correct++;
                $("#response").text("You're Right");
                $("#responseImg").attr("src", "images/tenor.gif");
                
        
            }
            else{
                console.log("wrong");
                incorrect++;
                $("#response").text("Wrong!");
                $("#responseImg").attr("src", "images/kardashian.gif");
            }
    });
}
});



