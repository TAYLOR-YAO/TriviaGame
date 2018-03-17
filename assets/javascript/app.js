var times;
var timeCount;
var wins=0;
var loses=0;
var unanswered=0;
var questions1 = ["Wich team won more UFA C1 trophy?", "Where is the 2018 soccer world cup taking place this year?", "Where did the 2014 soccer world cup take place?", " Which Country is not in Africa?", "Which city is the most populated?", " Who sang the song titled 'Healthe World' ?", "Which year the United Nations was formed?", "Which Country Own the car brand Bugatti ?", "Who wrote the book: Not From My Travels ?", "Who wrote the movie: TITANIC ?"];
var answers1 = ["real Madrid", "Manchester United", " Barcelona", "Bayern Munich"];
var answers2 = ["South Africa", "France", "Russia", "United States"];
var answers3 = ["China", "Brazil", "United Kingdom", "Germany"];
var answers4 = ["Wakanda", "Ouganda","Rwanda", "Gambia"];
var answers5 = [ "New York", "Aboudja", "Pekin", "Tokyo"];
var answers6 = [ " Micheal Jackson", " Celine Dion ", " Black Shelton", "Lucky Dumbe"];
var answers7 = ["1967","1945", "1896", "1989"];
var answers8 = ["Germany", "United States", "France", "Japan"];
var answers9 = ["Anne Rice", "Angelina Jolie", "Eminem", "Allen Ginsberg" ];
var answers10 = ["James Cameron", "Steven Rogers", "Zak Bagans", "James Ivory"];

$(document).ready(function(){
    $("h6").hide();
    $("#startOver").hide();
    $("#questions").hide();
    $(".winGrid").hide();
    $("#times").hide();

    if(times===0){
        times=0;
    }

    $("body").on("click", "#button", function(){
        $("#wins").html("Wins:"+ " " + " " + wins);
        $("#loses").html("Lose:"+ " " + " " + loses);
        $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
        $(".wrong4").hide();
        $("#answer4-3").hide();
        times =9;
        $(".winGrid").show();
        $("#times").show(); 
        $("#questions").show();
        $(".wrong1").show();
        $("#answer1-1").show();
        $("#button").hide();
        $("#about").hide();
function startingGame (){       
        if (questions1) {
            clearInterval(timeCount);   
                function timing(){
                    $("div").addClass("important");
                    timeCount = setInterval (function timer(){
                        times--;
                        if (times === 0){
                        $(".wrong1").hide();
                        $("#answer1-1").hide();
                        clearInterval(timeCount);
                        unanswered++;
                        console.log( "You do not answer:" + "" + unanswered);
                        $("#answerTitle").html("Time is Out!");         
                        $("#answerImages").html( "<img src='./assets/images/real.GIF'>");
                        $("#wins").html("Wins:"+ " " + " " + wins);
                        $("#loses").html("Lose:"+ " " + " " + loses);
                        $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered); 
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
                $(".wrong2").hide();
                $("#answer2-3").hide();
                $(".wrong3").hide();
                $("#answer3-2").hide();
                $(".wrong1").hide();
                $("#answer1-1").hide();
                wins++;
                $("#wins").html("Wins:"+ " " + " " + wins);
                $("#loses").html("Loses:"+ " " + " " + loses);
                $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);   
                console.log( "This is a wins point:" + "" + wins);
                clearInterval(timeCount);
                $("#answerTitle").html("Correct!");         
                $("#answerImages").html("<img src='./assets/images/real.GIF'>");
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
                clearInterval(timeCount);
                loses++;
                $("#wins").html("Wins:"+ " " + " " + wins);
                $("#loses").html("Loses:"+ " " + " " + loses);
                $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
                $(".wrong2").hide();
                $("#answrr2-3").hide();
                $(".wrong3").hide();
                $("#answer3-2").hide();
                $(".wrong1").hide();
                $("#answer1-1").hide();
                console.log( "This is a lost point:" + "" + loses);
                $("#answerTitle").html("Wrong answer!");            
                $("#answerImages").html( "<img src='./assets/images/real.GIF'>");
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
                $("#question1").html( questions1[0]);
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
        clearInterval(timeCount);   
        var part2 = setTimeout (function secondQuestion(){    
        times =9;
            function timing2(){
                timeCount = setInterval (function timer(){
                    $(".wrong2").show();
                    $("#answer2-3").show();
                    $(".wrong1").hide();
                    $(".wrong1").hide();
                    $("#answr1-1").hide();
                    $(".wrong3").hide();
                    $("#answer3-2").hide();
                    times--;
                    if (times === 0){
                    unanswered++;
                    console.log( "You do not answer:" + "" + unanswered);
                    clearInterval(timeCount);
                    $("#answerTitle").html("Time is Out!");         
                    $("#answerImages").html( "<img src='./assets/images/russia.GIF'>");
                    $("#wins").html("Wins:"+ " " + " " + wins);
                    $("#loses").html("Lose:"+ " " + " " + loses);
                    $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered); 
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
                clearInterval(timeCount);
                wins++;
                $("#wins").html("Wins:"+ " " + " " + wins);
                $("#loses").html("Loses:"+ " " + " " + loses);
                $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
                $(".wrong2").hide();
                $("#answer2-3").hide();
                $(".wrong3").hide();
                $("#answer3-2").hide();
                $(".wrong1").hide();
                $("#answer1-1").hide();
                console.log( "This is a win point:" + "" + wins);
                $("#answerTitle").html("Correct!");         
                $("#answerImages").html("<img src='./assets/images/russia.GIF'>");
                $("#question1").html("   " );
                $("#answer2-1").html("   " );
                $("#answer2-2").html("   " );
                $("#answer2-3").html("   " );
                $("#answer2-4").html("   " );
                console.log("Correct answer is :"+ " " + answers2[2]);
                gamequestion3(); 
            });
            $("body").on("click", ".wrong2 ", function(){
                clearInterval(timeCount);
                loses++;
                $("#wins").html("Wins:"+ " " + " " + wins);
                $("#loses").html("Loses:"+ " " + " " + loses);
                $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
                $(".wrong2").hide();
                $("#answer2-3").hide();
                $(".wrong3").hide();
                $("#answer3-2").hide();
                $(".wrong1").hide();
                $("#answer1-1").hide();
                console.log( "This is a lost point:" + "" + loses);
                $("#answerTitle").html("Wrong answer!");            
                $("#answerImages").html( "<img src='./assets/images/russia.GIF'>");
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
        clearInterval(timeCount);   
            var part3= setTimeout(function thirdQuestion(){
            times =9;
            function timing3(){
                timeCount = setInterval (function timer(){
                    $(".wrong3").show();
                    $("#answer3-2").show();
                    $(".wrong1").hide();
                    $(".wrong2").hide();
                    $("#answr1-1").hide();
                    $("#answer2-3").hide();                    
                    times--;
                    if (times === 0){
                    clearInterval(timeCount);
                    unanswered++;
                    console.log( "You do not answer:" + "" + unanswered);
                    $("#answerTitle").html("Time is Out!");         
                    $("#answerImages").html("<img src='./assets/images/brezil.GIF'>");
                    $("#wins").html("Wins:"+ " " + " " + wins);
                    $("#loses").html("Lose:"+ " " + " " + loses);
                    $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered); 
                    $("#question1").html(" ");
                    $("#answer3-1").html("   " );
                    $("#answer3-2").html("   " );
                    $("#answer3-3").html("   " );
                    $("#answer3-4").html("   " );
                    console.log("Time Is Out!"+ " " + answers3[1]);
                    gamequestion4();                       
                    }
                    $("#times").html("<span>Time remating:<span>" + "   " + "   " + "   "  + times + "   " + "   " + "   "+ "Seconds");
                }, 1000);      
            }
            timing3(); 

        $("body").on("click", "#answer3-2", function(){
            clearInterval(timeCount);
            wins++;
            $("#wins").html("Wins:"+ " " + " " + wins);
            $("#loses").html("Loses:"+ " " + " " + loses);
            $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
            $(".wrong2").hide();
            $("#answer2-3").hide();
            $(".wrong3").hide();
            $("#answer3-2").hide();
            $(".wrong1").hide();
            $("#answer1-1").hide();
            console.log( "This is a win point:" + "" + wins);
            $("#answerTitle").html("Correct!");         
            $("#answerImages").html("<img src='./assets/images/brezil.GIF'>");
            $("#question1").html("   " );
            $("#answer3-1").html("   " );
            $("#answer3-2").html("   " );
            $("#answer3-3").html("   " );
            $("#answer3-4").html("   " );
            console.log("Correct answer is :"+ " " + answers3[1]);
            gamequestion4();
        });

        $("body").on("click", ".wrong3 ", function(){
            clearInterval(timeCount);
            loses++;
            $("#wins").html("Wins:"+ " " + " " + wins);
            $("#loses").html("Loses:"+ " " + " " + loses);
            $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
            $(".wrong2").hide();
            $("#answer2-3").hide();
            $(".wrong3").hide();
            $("#answer3-2").hide();
            $(".wrong1").hide();
            $("#answer1-1").hide();
            console.log( "This is a lost point:" + "" + loses);
            $("#answerTitle").html("Wrong answer!");            
            $("#answerImages").html("<img src='./assets/images/brezil.GIF'>");
            $("#question1").html("   " );
            $("#answer3-1").html("   " );
            $("#answer3-2").html("   " );
            $("#answer3-3").html("   " );
            $("#answer3-4").html("   " ); 
            console.log("Wrong answer!" + " " + answers3[1]);
            gamequestion4();
        });        
                $("#answerImages").html(" ");
                $("#answerTitle").html("  ");
                $("#question1").html( questions1[2] );
                $("#answer3-1").html( answers3[0]);
                $("#answer3-2").html( answers3[1]);
                $("#answer3-3").html( answers3[2]);
                $("#answer3-4").html( answers3[3]);
        
            }, 5000);
    }

//-------------------part 4-----------------

    function gamequestion4(){
        clearInterval(timeCount);   
        $(".wrong4").show();
        $("#answer4-1").show();
        var part4 = setTimeout (function fourthQuestion(){  
        times =9;
        function timing4(){
            timeCount = setInterval (function timer(){
                times--;
                if (times === 0){
                    $(".wrong4").hide();
                    $("#answer4-1").hide();
                clearInterval(timeCount);
                unanswered++;
                console.log( "You do not answer:" + "" + unanswered);
                $("#answerTitle").html("Time is Out!");         
                $("#answerImages").html( "<img src='./assets/images/wakanda.GIF'>");
                $("#wins").html("Wins:"+ " " + " " + wins);
                $("#loses").html("Lose:"+ " " + " " + loses);
                $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered); 
                $("#question1").html("   " );
                $("#answer4-1").html("   " );
                $("#answer4-2").html("   " );
                $("#answer4-3").html("   " );
                $("#answer4-4").html("   " );
                console.log("Time Is Out!"+ " " + answers4[0]);
                gamequestion5();
                }
                $("#times").html("<span>Time remating:<span>" + "   " + "   " + "   "  + times + "   " + "   " + "   "+ "Seconds");
            }, 1000);   
        }
        timing4();
        $("body").on("click", "#answer4-1", function(){
            clearInterval(timeCount);
            wins++;
            $("#wins").html("Wins:"+ " " + " " + wins);
            $("#loses").html("Loses:"+ " " + " " + loses);
            console.log( "This is a win point:" + "" + wins);
            $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
            $("#answerTitle").html("Correct!");         
            $("#answerImages").html("<img src='./assets/images/wakanda.GIF'>");
            $("#question1").html("   " );
            $("#answer4-1").html("   " );
            $("#answer4-2").html("   " );
            $("#answer4-3").html("   " );
            $("#answer4-4").html("   " );
            console.log("Correct answer is :"+ " " + answers4[0]);
            gamequestion5(); 
        });
        $("body").on("click", ".wrong4 ", function(){
            clearInterval(timeCount);
            loses++;
            $("#wins").html("Wins:"+ " " + " " + wins);
            $("#loses").html("Loses:"+ " " + " " + loses);
            console.log( "This is a lost point:" + "" + loses);
            $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
            $("#answerTitle").html("Wrong answer!");            
            $("#answerImages").html(  "<img src='./assets/images/wakanda.GIF'>");
            $("#question1").html("   " );
            $("#answer4-1").html("   " );
            $("#answer4-2").html("   " );
            $("#answer4-3").html("   " );
            $("#answer4-4").html("   " ); 
            console.log("Wrong answer!"+ " " + answers4[0]);
            gamequestion5();
        }); 

        $("#answerImages").html(" ");
        $("#answerTitle").html("  ");
        $("#question1").html( questions1[3] );
        $("#answer4-1").html( answers4[0]);
        $("#answer4-2").html( answers4[1]);
        $("#answer4-3").html( answers4[2]);
        $("#answer4-4").html( answers4[3]);

    }, 5000);
}
//------------------part5----------------------------------
function gamequestion5(){
    clearInterval(timeCount);   
        $(".wrong5").show();
        $("#answer5-4").show();
        var part5 = setTimeout (function fiveQuestion(){  
        times =9;
        function timing5(){
            timeCount = setInterval (function timer(){
                times--;
                if (times === 0){
                clearInterval(timeCount);
                unanswered++;
                console.log( "You do not answer:" + "" + unanswered);
                $("#answerTitle").html("Time is Out!");         
                $("#answerImages").html( "<img src='./assets/images/tokyo.GIF'>");
                $("#wins").html("Wins:"+ " " + " " + wins);
                $("#loses").html("Lose:"+ " " + " " + loses);
                $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered); 
                $("#question1").html("   " );
                $("#answer5-1").html("   " );
                $("#answer5-2").html("   " );
                $("#answer5-3").html("   " );
                $("#answer5-4").html("   " );
                console.log("Time Is Out!"+ " " + answers5[3]);
                gamequestion6();
                }
                $("#times").html("<span>Time remating:<span>" + "   " + "   " + "   "  + times + "   " + "   " + "   "+ "Seconds");
            }, 1000);   
        }
        timing5();
        $("body").on("click", "#answer5-4", function(){
            clearInterval(timeCount);
            wins++;
            $("#wins").html("Wins:"+ " " + " " + wins);
            $("#loses").html("Loses:"+ " " + " " + loses);
            $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
            console.log( "This is a win point:" + "" + wins);
            $("#answerTitle").html("Correct!");         
            $("#answerImages").html("<img src='./assets/images/tokyo.GIF'>");
            $("#question1").html("   " );
            $("#answer5-1").html("   " );
            $("#answer5-2").html("   " );
            $("#answer5-3").html("   " );
            $("#answer5-4").html("   " );
            console.log("Correct answer is :"+ " " + answers5[3]);
            gamequestion6(); 
        });
        $("body").on("click", ".wrong5 ", function(){
            clearInterval(timeCount);
            loses++;
            $("#wins").html("Wins:"+ " " + " " + wins);
            $("#loses").html("Loses:"+ " " + " " + loses);
            $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
            console.log( "This is a lost point:" + "" + loses);
            $("#answerTitle").html("Wrong answer!");            
            $("#answerImages").html( "<img src='./assets/images/tokyo.GIF'>");
            $("#question1").html("   " );
            $("#answer5-1").html("   " );
            $("#answer5-2").html("   " );
            $("#answer5-3").html("   " );
            $("#answer5-4").html("   " ); 
            console.log("Wrong answer!"+ " " + answers5[3]);
            gamequestion6();
        }); 
        $("#answerImages").html(" ");
        $("#answerTitle").html("  ");
        $("#question1").html( questions1[4] );
        $("#answer5-1").html( answers5[0]);
        $("#answer5-2").html( answers5[1]);
        $("#answer5-3").html( answers5[2]);
        $("#answer5-4").html( answers5[3]);

    }, 5000);
}
//----------------part6---------------------------------
function gamequestion6(){
    $(".wrong6").show();
    $("#answer6-1").show();
        var part6 = setTimeout (function sixQuestion(){  
        times =9;
        function timing6(){
            timeCount = setInterval (function timer(){
                times--;
                if (times === 0){
                clearInterval(timeCount);
                unanswered++;
                console.log( "You do not answer:" + "" + unanswered);
                $("#answerTitle").html("Time is Out!");         
                $("#answerImages").html( "<img src='./assets/images/michael-jackson.GIF'>");
                $("#wins").html("Wins:"+ " " + " " + wins);
                $("#loses").html("Lose:"+ " " + " " + loses);
                $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered); 
                $("#question1").html("   " );
                $("#answer6-1").html("   " );
                $("#answer6-2").html("   " );
                $("#answer6-3").html("   " );
                $("#answer6-4").html("   " );
                console.log("Time Is Out!"+ " " + answers6[0]);
                gamequestion7();
                }
                $("#times").html("<span>Time remating:<span>" + "   " + "   " + "   "  + times + "   " + "   " + "   "+ "Seconds");
            }, 1000);   
        }
        timing6();

        $("body").on("click", "#answer6-1", function(){
            clearInterval(timeCount);
            wins++;
            $("#wins").html("Wins:"+ " " + " " + wins);
            $("#loses").html("Loses:"+ " " + " " + loses);
            $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
            console.log( "This is a win point:" + "" + wins);
            $("#answerTitle").html("Correct!");         
            $("#answerImages").html("<img src='./assets/images/michael-jackson.GIF'>");
            $("#question1").html("   " );
            $("#answer6-1").html("   " );
            $("#answer6-2").html("   " );
            $("#answer6-3").html("   " );
            $("#answer6-4").html("   " );
            console.log("Correct answer is :"+ " " + answers6[0]);
            gamequestion7(); 
        });
        $("body").on("click", ".wrong6 ", function(){
            clearInterval(timeCount);
            loses++;
            $("#wins").html("Wins:"+ " " + " " + wins);
            $("#loses").html("Loses:"+ " " + " " + loses);
            $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
            console.log( "This is a lost point:" + "" + loses);
            $("#answerTitle").html("Wrong answer!");            
            $("#answerImages").html( "<img src='./assets/images/michael-jackson.GIF'>");
            $("#question1").html("   " );
            $("#answer6-1").html("   " );
            $("#answer6-2").html("   " );
            $("#answer6-3").html("   " );
            $("#answer6-4").html("   " ); 
            console.log("Wrong answer!"+ " " + answers6[0]);
            gamequestion7();
        }); 
        $("#answerImages").html(" ");
        $("#answerTitle").html("  ");
        $("#question1").html( questions1[5] );
        $("#answer6-1").html( answers6[0]);
        $("#answer6-2").html( answers6[1]);
        $("#answer6-3").html( answers6[2]);
        $("#answer6-4").html( answers6[3]);

    }, 5000);
}
//-----------part7-----------------------------
function gamequestion7(){
    $(".wrong7").show();
    $("#answer7-2").show();
    var part6 = setTimeout (function sevenQuestion(){  
    times =9;
    function timing7(){
        timeCount = setInterval (function timer(){
            times--;
            if (times === 0){
            clearInterval(timeCount);
            unanswered++;
            console.log( "You do not answer:" + "" + unanswered);
            $("#answerTitle").html("Time is Out!");         
            $("#answerImages").html( "<img src='./assets/images/united-nation.GIF'>");
            $("#wins").html("Wins:"+ " " + " " + wins);
            $("#loses").html("Lose:"+ " " + " " + loses);
            $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered); 
            $("#question1").html("   " );
            $("#answer7-1").html("   " );
            $("#answer7-2").html("   " );
            $("#answer7-3").html("   " );
            $("#answer7-4").html("   " );
            console.log("Time Is Out!"+ " " + answers7[1]);
            gamequestion8();
            }
            $("#times").html("<span>Time remating:<span>" + "   " + "   " + "   "  + times + "   " + "   " + "   "+ "Seconds");
        }, 1000);   
    }
    timing7();
    $("body").on("click", "#answer7-2", function(){
        clearInterval(timeCount);
        wins++;
        $("#wins").html("Wins:"+ " " + " " + wins);
        $("#loses").html("Loses:"+ " " + " " + loses);
        $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
        console.log( "This is a win point:" + "" + wins);
        $("#answerTitle").html("Correct!");         
        $("#answerImages").html("<img src='./assets/images/united-nation.GIF'>");
        $("#question1").html("   " );
        $("#answer7-1").html("   " );
        $("#answer7-2").html("   " );
        $("#answer7-3").html("   " );
        $("#answer7-4").html("   " );
        console.log("Correct answer is :"+ " " + answers7[1]);
        gamequestion8(); 
    });

    $("body").on("click", ".wrong7 ", function(){
        clearInterval(timeCount);
        loses++;
        $("#wins").html("Wins:"+ " " + " " + wins);
        $("#loses").html("Loses:"+ " " + " " + loses);
        $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
        console.log( "This is a lost point:" + "" + loses);
        $("#answerTitle").html("Wrong answer!");            
        $("#answerImages").html( "<img src='./assets/images/united-nation.GIF'>");
        $("#question1").html("   " );
        $("#answer7-1").html("   " );
        $("#answer7-2").html("   " );
        $("#answer7-3").html("   " );
        $("#answer7-4").html("   " ); 
        console.log("Wrong answer!"+ " " + answers7[1]);
        gamequestion8();
    }); 
    $("#answerImages").html(" ");
    $("#answerTitle").html("  ");
    $("#question1").html( questions1[6] );
    $("#answer7-1").html( answers7[0]);
    $("#answer7-2").html( answers7[1]);
    $("#answer7-3").html( answers7[2]);
    $("#answer7-4").html( answers7[3]);

}, 5000);
}
//--------------------part8----------------------
function gamequestion8(){
    $(".wrong8").show();
    $("#answer8-3").show();
    var part6 = setTimeout (function eightQuestion(){  
    times =9;
    function timing8(){
        timeCount = setInterval (function timer(){
            times--;
            if (times === 0){
            unanswered++;
            console.log( "You do not answer:" + "" + unanswered);
            clearInterval(timeCount);
            $("#answerTitle").html("Time is Out!");         
            $("#answerImages").html( "<img src='./assets/images/bugatti.GIF'>");
            $("#wins").html("Wins:"+ " " + " " + wins);
            $("#loses").html("Lose:"+ " " + " " + loses);
            $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered); 
            $("#question1").html("   " );
            $("#answer8-1").html("   " );
            $("#answer8-2").html("   " );
            $("#answer8-3").html("   " );
            $("#answer8-4").html("   " );
            console.log("Time Is Out!"+ " " + answers8[2]);
            gamequestion9();
            }
            $("#times").html("<span>Time remating:<span>" + "   " + "   " + "   "  + times + "   " + "   " + "   "+ "Seconds");
        }, 1000);   
    }
    timing8();
    $("body").on("click", "#answer8-2", function(){
        clearInterval(timeCount);
        wins++;
        $("#wins").html("Wins:"+ " " + " " + wins);
        $("#loses").html("Loses:"+ " " + " " + loses);
        $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
        console.log( "This is a win point:" + "" + wins);
        $("#answerTitle").html("Correct!");         
        $("#answerImages").html("<img src='./assets/images/bugatti.GIF'>");
        $("#question1").html("   " );
        $("#answer8-1").html("   " );
        $("#answer8-2").html("   " );
        $("#answer8-3").html("   " );
        $("#answer8-4").html("   " );
        console.log("Correct answer is :"+ " " + answers8[2]);
        gamequestion9(); 
    });

    $("body").on("click", ".wrong8 ", function(){
        clearInterval(timeCount);
        loses++;
        $("#wins").html("Wins:"+ " " + " " + wins);
        $("#loses").html("Loses:"+ " " + " " + loses);
        $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
        console.log( "This is a lost point:" + "" + loses);
        $("#answerTitle").html("Wrong answer!");            
        $("#answerImages").html( "<img src='./assets/images/bugatti.GIF'>");
        $("#question1").html("   " );
        $("#answer8-1").html("   " );
        $("#answer8-2").html("   " );
        $("#answer8-3").html("   " );
        $("#answer8-4").html("   " ); 
        console.log("Wrong answer!"+ " " + answers8[2]);
        gamequestion9();
    }); 
    $("#answerImages").html(" ");
    $("#answerTitle").html("  ");
    $("#question1").html( questions1[7] );
    $("#answer8-1").html( answers8[0]);
    $("#answer8-2").html( answers8[1]);
    $("#answer8-3").html( answers8[2]);
    $("#answer8-4").html( answers8[3]);

}, 5000);
}
//----------part9----------------------
function gamequestion9(){
    $(".wrong9").show();
    $("#answer9-2").show();
    var part6 = setTimeout (function ninthtQuestion(){  
    times =9;
    function timing9(){
        timeCount = setInterval (function timer(){
            times--;
            if (times === 0){
            $(".wrong9").hide();
             $("#answer9-2").hide();
            clearInterval(timeCount);
            unanswered++;
            console.log( "You do not answer:" + "" + unanswered);
            $("#answerTitle").html("Time is Out!");         
            $("#answerImages").html( "<img src='./assets/images/angelina.GIF'>");
            $("#wins").html("Wins:"+ " " + " " + wins);
            $("#loses").html("Lose:"+ " " + " " + loses);
            $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered); 
            $("#question1").html("   " );
            $("#answer9-1").html("   " );
            $("#answer9-2").html("   " );
            $("#answer9-3").html("   " );
            $("#answer9-4").html("   " );
            console.log("Time Is Out!"+ " " + answers9[1]);
            gamequestion10();
            }
            $("#times").html("<span>Time remating:<span>" + "   " + "   " + "   "  + times + "   " + "   " + "   "+ "Seconds");
        }, 1000);   
    }
    timing9();

    $("body").on("click", "#answer9-2", function(){
        clearInterval(timeCount);
        wins++;
        $("#wins").html("Wins:"+ " " + " " + wins);
        $("#loses").html("Loses:"+ " " + " " + loses);
        $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
        console.log( "This is a win point:" + "" + wins);
        $("#answerTitle").html("Correct!");         
        $("#answerImages").html("<img src='./assets/images/angelina.GIF'>");
        $("#question1").html("   " );
        $("#answer9-1").html("   " );
        $("#answer9-2").html("   " );
        $("#answer9-3").html("   " );
        $("#answer9-4").html("   " );
        console.log("Correct answer is :"+ " " + answers9[1]);
        gamequestion10(); 
    });

    $("body").on("click", ".wrong9", function(){
        clearInterval(timeCount);
        loses++;
        $("#wins").html("Wins:"+ " " + " " + wins);
        $("#loses").html("Loses:"+ " " + " " + loses);
        $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
        console.log( "This is a lost point:" + "" + loses);
        $("#answerTitle").html("Wrong answer!");            
        $("#answerImages").html( "<img src='./assets/images/angelina.GIF'>");
        $("#question1").html("   " );
        $("#answer9-1").html("   " );
        $("#answer9-2").html("   " );
        $("#answer9-3").html("   " );
        $("#answer9-4").html("   " ); 
        console.log("Wrong answer!"+ " " + answers9[1]);
        gamequestion10();
    }); 
    $("#answerImages").html(" ");
    $("#answerTitle").html("  ");
    $("#question1").html( questions1[8] );
    $("#answer9-1").html( answers9[0]);
    $("#answer9-2").html( answers9[1]);
    $("#answer9-3").html( answers9[2]);
    $("#answer9-4").html( answers9[3]);

}, 5000);
}
//-------------part10----------------------------

function gamequestion10(){
    $(".wrong10").show();
    $("#answer10-1").show();
    var part6 = setTimeout (function tenthQuestion(){  
    times =9;
    function timing10(){
        timeCount = setInterval (function timer(){
            times--;
            if (times === 0){
            clearInterval(timeCount);
            unanswered++;
            console.log( "You do not answer:" + "" + unanswered);
            $("#answerTitle").html("Time is Out!");         
            $("#answerImages").html( "<img src='./assets/images/titanic.GIF'>");
            $("#wins").html("Wins:"+ " " + " " + wins);
            $("#loses").html("Lose:"+ " " + " " + loses);
            $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered); 
            $("#question1").html("   " );
            $("#answer10-1").html("   " );
            $("#answer10-2").html("   " );
            $("#answer10-3").html("   " );
            $("#answer10-4").html("   " );
            console.log("Time Is Out!"+ " " + answers10[0]);
            scores();
            }
            $("#times").html("<span>Time remating:<span>" + "   " + "   " + "   "  + times + "   " + "   " + "   "+ "Seconds");
        }, 1000);   
    }
    timing10();
    $("body").on("click", "#answer10-1", function(){
        clearInterval(timeCount);
        wins++;
        $("#wins").html("Wins:"+ " " + " " + wins);
        $("#loses").html("Loses:"+ " " + " " + loses);
        $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
        console.log( "This is a win point:" + "" + wins);
        $("#answerTitle").html("Correct!");         
        $("#answerImages").html("<img src='./assets/images/titanic.GIF'>");
        $("#question1").html("   " );
        $("#answer10-1").html("   " );
        $("#answer10-2").html("   " );
        $("#answer10-3").html("   " );
        $("#answer10-4").html("   " );
        console.log("Correct answer is :"+ " " + answers10[0]);
        scores(); 
    });
    $("body").on("click", ".wrong10 ", function(){
        clearInterval(timeCount);
        loses++;
        $("#wins").html("Wins:"+ " " + " " + wins);
        $("#loses").html("Loses:"+ " " + " " + loses);
        $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
        console.log( "This is a lost point:" + "" + loses);
        $("#answerTitle").html("Wrong answer!");            
        $("#answerImages").html( "<img src='./assets/images/titanic.GIF'>");
        $("#question1").html("   " );
        $("#answer10-1").html("   " );
        $("#answer10-2").html("   " );
        $("#answer10-3").html("   " );
        $("#answer10-4").html("   " ); 
        console.log("Wrong answer!"+ " " + answers10[0]);
        scores();
    }); 

    $("#answerImages").html(" ");
    $("#answerTitle").html("  ");
    $("#question1").html( questions1[9] );
    $("#answer10-1").html( answers10[0]);
    $("#answer10-2").html( answers10[1]);
    $("#answer10-3").html( answers10[2]);
    $("#answer10-4").html( answers10[3]);

}, 5000);
}

    function scores(){
        times =0;
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

    }

    $("body").on("click"," #startOver", function(){
        $("h6").hide();
        wins=0;
        loses=0;
        unanswered=0;
        $("#results").hide();
        $("#endWins").hide();
        $("#endLoses").hide();
        $("#unanswered").hide();
        $(".wrong1").show();
        $("#answer1-1").show();
        $("#startOver").hide();

        function startingAgain(){
            clearInterval(timeCount);
            var playAgain= setTimeout(function secondQuestion(){
                $("#question1").html("");
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
                    $("#wins").html("Wins:"+ " " + " " + wins);
                    $("#loses").html("Lose:"+ " " + " " + loses);
                    $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);     
                    if (questions1) {
                        times=9;
                        // ......set timing...........................
                        function timing(){
                            $("div").addClass("important");
                            timeCount = setInterval (function timer(){
                                times--;
                                if (times === 0){
                                clearInterval(timeCount);
                                unanswered++;
                                console.log( "You do not answer:" + "" + unanswered);
                                $("#answerTitle").html("Time is Out!");         
                                $("#answerImages").html( "<img src='./assets/images/real.GIF'>");
                                $("#wins").html("Wins:"+ " " + " " + wins);
                                $("#loses").html("Lose:"+ " " + " " + loses);
                                $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered); 
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
                            $("#loses").html("Lose:"+ " " + " " + loses);
                            $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);   
                            console.log( "This is a wins point:" + "" + wins);
                            clearInterval(timeCount);
                            $("#answerTitle").html("Correct!");         
                            $("#answerImages").html("<img src='./assets/images/real.GIF'>");
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
                            clearInterval(timeCount);
                            loses++;
                            $("#wins").html("Wins:"+ " " + " " + wins);
                            $("#loses").html("Loses:"+ " " + " " + loses);
                            $("#notAnswer").html("Unanswered:"+ " " + " " + unanswered);
                            $(".wrong2").hide();
                            $("#answrr2-3").hide();
                            $(".wrong3").hide();
                            $("#answer3-2").hide();
                            $(".wrong1").hide();
                            $("#answer1-1").hide();
                            console.log( "This is a lost point:" + "" + loses); 
                            $("#answerTitle").html("Wrong answer!");            
                            $("#answerImages").html( "<img src='./assets/images/real.GIF'>");
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
                        $("#question1").html( questions1[0]);
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
      
});


                               
});
    






