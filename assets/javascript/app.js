var times = 9;
var timeCount;
var wins=0;
var loses=0;
var unanswered=0;
var questions1 = ["Wich team won more UFA C1 trophy?", "Where is the 2018 soccer world cup taking place this year?", "Where did the 2014 soccer world cup take place?", " Which Country is not in Africa?" ];
var answers1 = ["real Madrid", "Manchester United", " Barcelona", "Bayern Munich"];
var answers2 = ["South Africa", "France", "Russia", "United States"];
var answers3 = ["China", "Brazil", "United Kingdom", "Germany"];
var answers4 = ["Wakanda", "Ouganda","Rwanda", "Gambia"];
$(document).ready(function(){
    $("h6").hide();
    $("#startOver").hide();
    $("#questions").hide();
    $(".winGrid").hide();
    $("#times").hide(); 

    $("body").on("click", "#button", function(){
        $(".winGrid").show();
        $("#times").show(); 
        $("#questions").show();
        $(".wrong1").show();
        $("#answer1-1").show();
        $("#button").hide();
function startingGame (){       
        if (questions1) {
                // ......set timing...........................
                function timing(){
                    $("div").addClass("important");
                    timeCount = setInterval (function timer(){
                        times--;
                        if (times === 0){
                        unanswered++;
                        console.log( "You do not answer:" + "" + unanswered);
                        clearInterval(timeCount);
                        $("#answerTitle").html("Time is Out!");         
                        $("#answerImages").html( "<img src='./assets/images/real12.jpg'>");
                        $("#question1").html("   " );
                        $("#answer1-1").html("   " );
                        $("#answer1-2").html("   " );
                        $("#answer1-3").html("   " );
                        $("#answer1-4").html("   " );
                        console.log("Time Is Out!"+ " " + answers1[0]);
                        gamequestion2();    
                        }
                        $("#times").html("<span>Time remating:<span>" + "   " + "   "  + times  +  "   " + "   "+ "Seconds");
                    }, 1000);    
                }
                timing();    
            // ...........Correct answer.........
            $("body").on("click", "#answer1-1", function(){
//---------------------hide....................
                $(".wrong2").hide();
                $("#answer2-3").hide();
                $(".wrong3").hide();
                $("#answer3-2").hide();
                $(".wrong1").hide();
                $("#answer1-1").hide();
//-----------------------------------------------------
                wins++;
                $("#wins").html("Wins:"+ " " + " " + wins);
                $("#loses").html("Wins:"+ " " + " " + loses);   
                console.log( "This is a wins point:" + "" + wins);
                clearInterval(timeCount);
                $("#answerTitle").html("Correct!");         
                $("#answerImages").html("<img src='./assets/images/real12.JPG'>");
                $("#question1").html("   " );
                $("#answer1-1").html("   " );
                $("#answer1-2").html("   " );
                $("#answer1-3").html("   " );
                $("#answer1-4").html("   " );
                console.log("Correct answeris"+ " " + answers1[0]);
                gamequestion2();    
            });
            // --------Wrong answers------for question1-----
            $("body").on("click", ".wrong1 ", function(){
                $("#wins").html("Wins:"+ " " + " " + wins);
                $("#loses").html("Wins:"+ " " + " " + loses);
                $(".wrong2").hide();
                $("#answrr2-3").hide();
                $(".wrong3").hide();
                $("#answer3-2").hide();
                $(".wrong1").hide();
                $("#answer1-1").hide();

                loses++;
                console.log( "This is a lost point:" + "" + loses);
                clearInterval(timeCount);
                $("#answerTitle").html("Wrong answer!");            
                $("#answerImages").html( "<img src='./assets/images/real12.jpg'>");
                $("#question1").html("   " );
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
                $("#question1").html( "<br>"+ questions1[0] + " <br>");
                $("#answer1-1").html( answers1[0]);
                $("#answer1-2").html( answers1[1]);
                $("#answer1-3").html( answers1[2]);
                $("#answer1-4").html( answers1[3]);
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
//------------------------hide---Show-------------------
                    $(".wrong2").show();
                    $("#answer2-3").show();
                    $(".wrong1").hide();
                    $(".wrong1").hide();
                    $("#answr1-1").hide();
                    $(".wrong3").hide();
                    $("#answer3-2").hide();
//-----------------------------------------------------
                    times--;
                    if (times === 0){
                    unanswered++;
                    console.log( "You do not answer:" + "" + unanswered);
                    clearInterval(timeCount);
                    $("#answerTitle").html("Time is Out!");         
                    $("#answerImages").html( "<img src='./assets/images/russia2018.jpg'>");
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
                $("#wins").html("Wins:"+ " " + " " + wins);
                $("#loses").html("Loses:"+ " " + " " + loses);
                $(".wrong2").hide();
                $("#answer2-3").hide();
                $(".wrong3").hide();
                $("#answer3-2").hide();
                $(".wrong1").hide();
                $("#answer1-1").hide();
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
                $("#wins").html("Wins:"+ " " + " " + wins);
                $("#loses").html("Loses:"+ " " + " " + loses);
                $(".wrong2").hide();
                $("#answer2-3").hide();
                $(".wrong3").hide();
                $("#answer3-2").hide();
                $(".wrong1").hide();
                $("#answer1-1").hide();
                console.log( "This is a lost point:" + "" + loses);
                clearInterval(timeCount);
                $("#answerTitle").html("Wrong answer!");            
                $("#answerImages").html( "<img src='./assets/images/russia2018.jpg'>");
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
            $("#question1").html( questions1[1] );
            $("#answer2-1").html( answers2[0]);
            $("#answer2-2").html( answers2[1]);
            $("#answer2-3").html( answers2[2]);
            $("#answer2-4").html( answers2[3]);

        }, 5000);
    }
    //----------------PART3---------------------
    function gamequestion3(){
            var part3= setTimeout(function secondQuestion(){
            times =9;
                function timing3(){
                    timeCount = setInterval (function timer(){
//----------------------hide------------show--------------------------------------
                        $(".wrong3").show();
                        $("#answer3-2").show();
                        $(".wrong1").hide();
                        $(".wrong2").hide();
                        $("#answr1-1").hide();
                        $("#answer2-3").hide();
                        
//-------------------------------------------------------------------------------
                        times--;
                        if (times === 0){
                        clearInterval(timeCount);
                        unanswered++;
                        console.log( "You do not answer:" + "" + unanswered);
                        $("#answerTitle").html("Time is Out!");         
                        $("#answerImages").html("<img src='vbrazil2014.jpg'>");
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
            $("#wins").html("Wins:"+ " " + " " + wins);
            $("#loses").html("Wins:"+ " " + " " + loses);
            $(".wrong2").hide();
            $("#answer2-3").hide();
            $(".wrong3").hide();
            $("#answer3-2").hide();
            $(".wrong1").hide();
            $("#answer1-1").hide();
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
            loses++;
            $("#wins").html("Wins:"+ " " + " " + wins);
            $("#loses").html("Loses:"+ " " + " " + loses);
            $(".wrong2").hide();
            $("#answer2-3").hide();
            $(".wrong3").hide();
            $("#answer3-2").hide();
            $(".wrong1").hide();
            $("#answer1-1").hide();

            clearInterval(timeCount);
            console.log( "This is a lost point:" + "" + loses);
            clearInterval(timeCount);
            $("#answerTitle").html("Wrong answer!");            
            $("#answerImages").html("<img src='./assets/images/brazil2014.jpg'>");
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
                $("#question1").html("<br>"+ questions1[2] );
                $("#answer3-1").html( answers3[0]);
                $("#answer3-2").html( answers3[1]);
                $("#answer3-3").html( answers3[2]);
                $("#answer3-4").html( answers3[3]);
        
            }, 5000);
    }
    function scores(){
            $(".wrong2").hide();
            $("#answer2-3").hide();
            $(".wrong3").hide();
            $("#answer3-2").hide();
            $(".wrong1").hide();
            $("#answer1-1").hide();
        var part3= setTimeout(function secondQuestion(){
            $("#wins").html("Wins:"+ " " + " " + wins);
            $("#loses").html("loses:"+ " " + " " + loses);
            $("#startOver").show();
            $("#results").html("all done, this is Your results");
            $("#answerImages").html(" " );
            $("#endWins").html("<span> Correrct Answers: </span>" + " " + " "+" "  + wins);
            $("#endLoses").html("<span> Wrong Answers: </span>" + " " + " "+" "  + loses);
            $("#unanswered").html("<span> Unanswered: </span>" + " " + " "+" "  + unanswered);
            $("#startOver").html(" Start Over?")

        }, 5000);  
//------------------------Starting Over------------------------------------------------------------
        $("body").on("click"," #startOver", function(){
            $("#results").hide();
            $("#endWins").hide();
            $("#endLoses").hide();
            $("#unanswered").hide();
            $(".wrong1").show();
            $("#answer1-1").show();
            $("#startOver").hide();
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
                                        $("#answerImages").html("<img src='./assets/images/real12.jpg'>");
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
                                $("#wins").html("Wins:"+ " " + " " + wins);
                                $("#loses").html("loses:"+ " " + " " + loses);
                                console.log( "This is a wins point:" + "" + wins);
                                clearInterval(timeCount);
                                $("#answerTitle").html("Correct!");         
                                $("#answerImages").html("<img src='./assets/images/real12.jpg'>");
                                $("#question1").html(" ");
                                $("#answer1-1").html("   " );
                                $("#answer1-2").html("   " );
                                $("#answer1-3").html("   " );
                                $("#answer1-4").html("   " );
                                console.log("Correct answers"+ " " + answers1[0]);
                                gamequestion2();    
                            });
                            // --------Wrong answers------for question1-----
                            $("body").on("click", ".wrong1 ", function(){
                                loses++;
                                $("#wins").html("Wins:"+ " " + " " + wins);
                                $("#loses").html("loses:"+ " " + " " + loses);
                                console.log( "This is a lost point:" + "" + loses);
                                clearInterval(timeCount);
                                $("#answerTitle").html("Wrong answer!");            
                                $("#answerImages").html( "<img src='.../assets/images/real12.jpg'>");
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
                                $("#question1").html("<br>"+ questions1[0]);
                                $("#answer1-1").html( answers1[0]);
                                $("#answer1-2").html( answers1[1]);
                                $("#answer1-3").html( answers1[2]);
                                $("#answer1-4").html( answers1[3]); 
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
    
