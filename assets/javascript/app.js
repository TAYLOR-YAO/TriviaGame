var times = 9;
var timeCount;
var wins=0;
var loses=0;
var unanswered=0;
var questions1 = ["Wich team won more UFA C1 trophy?", "Where is the 2018 soccer world cup taking place this year?", "Where did the 2014 soccer world cup take place?" ];
var answers1 = ["real Madrid", "Manchester United", " Barcelona", "Bayern Munich"];
var answers2 = ["South Africa", "France", "Russia", "United States"];
var answers3 = ["China", "Brazil", "United Kingdom", "Germany"];
$(document).ready(function(){

	$("body").on("click", "#button", function(){
        $("#button").hide();
function startingGame (){		
		if (questions1) {
                // ......set timing...........................
                function timing(){
                    $("h1, h4, #question1").addClass("blue");
                    $("div").addClass("important");
                    timeCount = setInterval (function timer(){
                        times--;
                        if (times === 0){
                        unanswered++;
                        console.log( "You do not answer:" + "" + unanswered);
                        clearInterval(timeCount);
                        $("#answerTitle").html("Time is Out!");			
                        $("#answerImages").html( "<img src='./assets/images/real12.jpg'>");
                        $("#question1").html(" ");
                        $("#answer1-1").html("   " );
                        $("#answer1-2").html("   " );
                        $("#answer1-3").html("   " );
                        $("#answer1-4").html("   " );
                        console.log("Time Is Out!"+ " " + answers1[0]);
                        gamequestion2();    
                        }
                        $("#times").html("<span>Time remating:<span>" + "   " + "   " + "   "  + times  + "   " + "   " + "   "+ "Seconds");
                    }, 1000);    
                }
                timing();    
			// ...........Correct answer.........
			$("body").on("click", "#answer1-1", function(){
                wins++;
                console.log( "This is a wins point:" + "" + wins);
                clearInterval(timeCount);
                $("#answerTitle").html("Correct!");			
                $("#answerImages").html("<img src='./assets/images/real12.JPG'>");
                $("#question1").html(" ");
                $("#answer1-1").html("   " );
                $("#answer1-2").html("   " );
                $("#answer1-3").html("   " );
                $("#answer1-4").html("   " );
                console.log("Correct answeris"+ " " + answers1[0]);
                gamequestion2();    
            });
            // --------Wrong answers------for question1-----
			$("body").on("click", ".wrong1 ", function(){
                loses++;
                console.log( "This is a lost point:" + "" + loses);
                clearInterval(timeCount);
                $("#answerTitle").html("Wrong answer!");			
                $("#answerImages").html( "<h3> The Correct Answer is: </h3> " + "<br> "  + "<img src='./assets/images/real12.jpg'>");
                $("#question1").html(" ");
                $("#answer1-1").html("   " );
                $("#answer1-2").html("   " );
                $("#answer1-3").html("   " );
                $("#answer1-4").html("   " ); 
                console.log("Wrong answer!"+ " " + answers1[0]);
                gamequestion2();
			});    
        }
			function askquestion1(){
// dom questions1 ..........and ..............answer1
				$("#question1").html(questions1[0]);
				$("#answer1-1").html(" <br> " + " <br>  "   + answers1[0]);
				$("#answer1-2").html(" <br> " + " <br>  "   + answers1[1]);
				$("#answer1-3").html(" <br> " + " <br>  "   + answers1[2]);
				$("#answer1-4").html(" <br> " + " <br>  "   + answers1[3]);	
			}
            askquestion1();
        }
        startingGame();
    });   
    // -----------------PART2-------------------------
    function gamequestion2(){

        var part2 = setTimeout (function secondQuestion(){
        times =9;
            function timing2(){
                timeCount = setInterval (function timer(){
                    times--;
                    if (times === 0){
                    unanswered++;
                    console.log( "You do not answer:" + "" + unanswered);
                    clearInterval(timeCount);
                    $("#answerTitle").html("Time is Out!");			
                    $("#answerImages").html( "<h3> The Correct Answer is: </h3> " + "<br> "  + "<img src='./assets/images/russia2018.jpg'>");
                    $("#question1").html("   " );
                    $("#answer2-1").html("   " );
                    $("#answer2-2").html("   " );
                    $("#answer2-3").html("   " );
                    $("#answer2-4").html("   " );
                    console.log("Time Is Out!"+ " " + answers2[2]);
                    gamequestion3();	
                
                    }
                    $("#times").html("<span>Time remating:<span>" + "   " + "   " + "   "  + times + "   " + "   " + "   "+ "Seconds");
                }, 1000);   
            }
            timing2();
            $("body").on("click", "#answer2-3", function(){
                wins++;
                console.log( "This is a win point:" + "" + wins);
                clearInterval(timeCount);
                $("#answerTitle").html("Correct!");			
                $("#answerImages").html("<img src='./assets/images/russia2018.jpg'>");
                $("#question1").html("   " );
                $("#answer2-1").html("   " );
                $("#answer2-2").html("   " );
                $("#answer2-3").html("   " );
                $("#answer2-4").html("   " );
                console.log("Correct answer is :"+ " " + answers2[2]);
                gamequestion3(); 
            });
            $("body").on("click", ".wrong2 ", function(){
                loses++;
                console.log( "This is a lost point:" + "" + loses);
                clearInterval(timeCount);
                $("#answerTitle").html("Wrong answer!");			
                $("#answerImages").html( "<h3> The Correct Answer is: </h3> " + "<br> "  + "<img src='./assets/images/russia2018.jpg'>");
                $("#question1").html("   " );
                $("#answer2-1").html("   " );
                $("#answer2-2").html("   " );
                $("#answer2-3").html("   " );
                $("#answer2-4").html("   " ); 
                console.log("Wrong answer!"+ " " + answers2[2]);
                gamequestion3();
            });	


            $("#answerImages").html(" ");
            $("#answerTitle").html("  ");
            $("#question1").html(questions1[1]);
            $("#answer2-1").html(" <br>  " + " <br>  " + answers2[0]);
            $("#answer2-2").html(" <br>  " + " <br>  " + answers2[1]);
            $("#answer2-3").html(" <br>  " + " <br>  " + answers2[2]);
            $("#answer2-4").html(" <br>  " + " <br>  " + answers2[3]);

        }, 5000);
    }
    //----------------PART3---------------------
    function gamequestion3(){
            var part3= setTimeout(function secondQuestion(){
            times =9;
                function timing3(){
                    timeCount = setInterval (function timer(){
                        times--;
                        if (times === 0){
                        clearInterval(timeCount);
                        unanswered++;
                        console.log( "You do not answer:" + "" + unanswered);
                        $("#answerTitle").html("Time is Out!");			
                        $("#answerImages").html( "<h3> The Correct Answer is: </h3> " + "<br> "  + "<img src='vbrazil2014.jpg'>");
                        $("#question1").html(" ");
                        $("#answer3-1").html("   " );
                        $("#answer3-2").html("   " );
                        $("#answer3-3").html("   " );
                        $("#answer3-4").html("   " );
                        console.log("Time Is Out!"+ " " + answers3[1]);
                        scores();	                    
                        }
                        $("#times").html("<span>Time remating:<span>" + "   " + "   " + "   "  + times + "   " + "   " + "   "+ "Seconds");
                    }, 1000);  
                      
                }
                timing3();                
        $("body").on("click", "#answer3-2", function(){
            wins++;
            console.log( "This is a win point:" + "" + wins);
            clearInterval(timeCount);
            $("#answerTitle").html("Correct!");			
            $("#answerImages").html("<img src='./assets/images/brazil2014.jpg'>");
            $("#question1").html("   " );
            $("#answer3-1").html("   " );
            $("#answer3-2").html("   " );
            $("#answer3-3").html("   " );
            $("#answer3-4").html("   " );
            console.log("Correct answer is :"+ " " + answers3[1]);
            scores();
        });
        $("body").on("click", ".wrong3 ", function(){
            clearInterval(timeCount);
            loses++;
            console.log( "This is a lost point:" + "" + loses);
            clearInterval(timeCount);
            $("#answerTitle").html("Wrong answer!");			
            $("#answerImages").html( "<h3> The Correct Answer is: </h3> " + "<br> "  + "<img src='./assets/images/brazil2014.jpg'>");
            $("#question1").html("   " );
            $("#answer3-1").html("   " );
            $("#answer3-2").html("   " );
            $("#answer3-3").html("   " );
            $("#answer3-4").html("   " ); 
            console.log("Wrong answer!" + " " + answers3[1]);
            scores();
        });        
                $("#answerImages").html(" ");
                $("#answerTitle").html("  ");
                $("#question1").html(questions1[2]);
                $("#answer3-1").html(" <br>  " + " <br>  "   + answers3[0]);
                $("#answer3-2").html(" <br>  " + " <br>  "   + answers3[1]);
                $("#answer3-3").html(" <br>  " + " <br>  "   + answers3[2]);
                $("#answer3-4").html(" <br>  " + " <br>  "   + answers3[3]);
        
            }, 5000);
        
    }
    function scores(){
        var part3= setTimeout(function secondQuestion(){
            $("#answerTitle").html("all done, this is Your results");
            $("#answerImages").html(" " );
            $("#wins").html("<span> Correrct Answers: </span>" + " " + " "+" "  + wins);
            $("#loses").html("<span> Wrong Answers: </span>" + " " + " "+" "  + loses);
            $("#unanswered").html("<span> Unanswered: </span>" + " " + " "+" "  + unanswered);
            $("#startOver").html(" Start Over?")

        }, 5000);  
//------------------------Starting Over------------------------------------------------------------
        $("body").on("click"," #startOver", function(){
            times=9;
            $("#startOver").html(" ");
            function startingAgain(){
                var part3= setTimeout(function secondQuestion(){
                    $("#question1").html(questions1[2]);
                    $("#answer3-1").html(" ");
                    $("#answer3-2").html(" ");
                    $("#answer3-3").html(" ");
                    $("#answer3-4").html(" ");
                    $("#answerTitle").html(" ");
                    $("#answerImages").html(" " );
                    $("#wins").html(" ");
                    $("#loses").html(" ");
                    $("#unanswered").html(" ");
                    function startingGame (){		
                        if (questions1) {
                                // ......set timing...........................
                                function timing(){
                                    times=9;
                                    timeCount = setInterval (function timer(){
                                        times--;
                                        if (times === 0){
                                        unanswered++;
                                        console.log( "You do not answer:" + "" + unanswered);
                                        clearInterval(timeCount);
                                        $("#answerTitle").html("Time is Out!");			
                                        $("#answerImages").html( "<h3> The Correct Answer is: </h3> " + "<br> "  + "<img src='./assets/images/real12.jpg'>");
                                        $("#question1").html(" ");
                                        $("#answer1-1").html("   " );
                                        $("#answer1-2").html("   " );
                                        $("#answer1-3").html("   " );
                                        $("#answer1-4").html("   " );
                                        console.log("Time Is Out!"+ " " + answers1[0]);
                                        gamequestion2();    
                                        }
                                        $("#times").html("<span>Time remating:<span>" + "   " + "   " + "   "  + times  + "   " + "   " + "   "+ "Seconds");
                                    }, 1000);    
                                }
                                timing();    
                            // ...........Correct answer.........
                            $("body").on("click", "#answer1-1", function(){
                                wins++;
                                console.log( "This is a wins point:" + "" + wins);
                                clearInterval(timeCount);
                                $("#answerTitle").html("Correct!");			
                                $("#answerImages").html("<img src='./assets/images/real12.jpg'>");
                                $("#question1").html(" ");
                                $("#answer1-1").html("   " );
                                $("#answer1-2").html("   " );
                                $("#answer1-3").html("   " );
                                $("#answer1-4").html("   " );
                                console.log("Correct answeris"+ " " + answers1[0]);
                                gamequestion2();    
                            });
                            // --------Wrong answers------for question1-----
                            $("body").on("click", ".wrong1 ", function(){
                                loses++;
                                console.log( "This is a lost point:" + "" + loses);
                                clearInterval(timeCount);
                                $("#answerTitle").html("Wrong answer!");			
                                $("#answerImages").html( "<h3> The Correct Answer is: </h3> " + "<br> "  + "<img src='.../assets/images/real12.jpg'>");
                                $("#question1").html(" ");
                                $("#answer1-1").html("   " );
                                $("#answer1-2").html("   " );
                                $("#answer1-3").html("   " );
                                $("#answer1-4").html("   " ); 
                                console.log("Wrong answer!"+ " " + answers1[0]);
                                gamequestion2();
                            });    
                        }
                            function askquestion1(){
                // dom questions1 ..........and ..............answer1
                                $("#question1").html(questions1[0]);
                                $("#answer1-1").html(" <br> " + " <br>  "   + answers1[0]);
                                $("#answer1-2").html(" <br> " + " <br>  "   + answers1[1]);
                                $("#answer1-3").html(" <br> " + " <br>  "   + answers1[2]);
                                $("#answer1-4").html(" <br> " + " <br>  "   + answers1[3]);	
                            }
                            askquestion1();
                        }
                        startingGame();
        
                }, 1000); 
            } 
            startingAgain();
//----------------End Of Starting Over------------------------------------------------------------       
        });
    
        

    }
    
   
                                
});
	