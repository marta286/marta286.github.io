const questions = [
    {
        question: "La storia di Vitra con Willi Fehlbaum, quando è iniziata?",
        optionA: "1953",
        optionB: "1955",
        correctOption: "optionA"
    },

    {
        question: "Dove fu fondata vitra?",
        optionA: "Svizzera",
        optionB: "America",
        correctOption: "optionA"
    },

    {
        question: "La filosofia di Vitra si basa su?",
        optionA: "Sostenibilità",
        optionB: "Estetica",
        correctOption: "optionA"
    },

    {
        question: "Da chi fu realizzata la Lounge Chair?",
        optionA: "Charles e Ray Eames",
        optionB: "Frank Gehry",
        correctOption: "optionA"
    },

    {
        question: "Il rapporto con i clienti è?",
        optionA: "Duraturo nel tempo",
        optionB: "Professionale",
        correctOption: "optionA"
    },

    {
        question: "A che animale si ispira la Elephant Chair?",
        optionA: "Elefante",
        optionB: "Ippopotamo",
        correctOption: "optionA"
    },

    {
        question: "Qual' era l'obiettivo della Sedia Vitra DSW?",
        optionA: "Adattibilità ad ogni ambiente",
        optionB: "Uso di materiali ecosostenibili",
        correctOption: "optionA"
    },

    {
        question: "Con quali materiali è stata realizzata la Panton Chair?",
        optionA: "Plastica",
        optionB: "Legno",
        correctOption: "optionA"
    },

    {
        question: "Il colore giallo nella Elephant Chair richiama?",
        optionA: "La gioia e la giocosità",
        optionB: "La Natura e animali",
        correctOption: "optionA"
    },

    {
        question: "La seduta della Landi Chair è caratterizzata da",
        optionA: "91 buchi",
        optionB: "105 buchi",
        correctOption: "optionA"
    },

    {
        question: "L'Organic Chair è stata creata per quali ambienti?",
        optionA: "Sala da conferenza",
        optionB: "Ambienti esterni",
        correctOption: "optionA"
    },

    {
        question: "La tecnica di saldatura utilizzata per la Wire Chair è la stessa...",
        optionA: "Della Tour Eiffel",
        optionB: "Dei gioielli",
        correctOption: "optionA"
    },


    {
        question: "Qual è il significato del nome della Chaise Tout Bois?",
        optionA: "Tutto legno",
        optionB: "Tutto metallo",
        correctOption: "optionA"
    },

    {
        question: "Qual è un elemento caratteristico di Vitra?",
        optionA: "L'uso dei colori",
        optionB: "L'uso dei materiali",
        correctOption: "optionA"
    },

    {
        question: "Willi Fehlbaum, fondatore dell'azienda, scopre i prodotti di?",
        optionA: "Charkes e Ray Eames",
        optionB: "Verner Panton",
        correctOption: "optionA"
    },

    {
        question: "Il colore marrone richiama?",
        optionA: "Sedia Landi",
        optionB: "Lounge Chair",
        correctOption: "optionB"
    },

    {
        question: "La Cone Chair da un senso di?",
        optionA: "Giocosità e armonia",
        optionB: "Vitalità e movimento",
        correctOption: "optionA"
    },

    {
        question: "Verner Panton da importanza a cosa?",
        optionA: "Forme e colori",
        optionB: "Materiali",
        correctOption: "optionA"
    },

    {
        question: "Resting bear a quale animale è ispirato?",
        optionA: "Orso",
        optionB: "Panda",
        correctOption: "optionA"
    },

    {
        question: "Il designer della Coconut Chair paragona la seduta ad un segmento di cocco diviso in quante parti?",
        optionA: "8",
        optionB: "6",
        correctOption: "optionA"
    },

    {
        question: "Amoebe fu realizzata nel 1970 da chi?",
        optionA: "Verner Panton",
        optionB: "Frank Gehry",
        correctOption: "optionA"
    },

    {
        question: "Cos è Eames House Bird ?",
        optionA: "Elemento decorativo",
        optionB: "Sedia",
        correctOption: "optionA"
    },

    {
        question: "Panton Chair richiama la natura ergo si ispira a?",
        optionA: "Art Nouveau",
        optionB: "Cubismo",
        correctOption: "optionA"
    },

    {
        question: "Amoebe da un senso di?",
        optionA: "Protezione",
        optionB: "Movimento",
        correctOption: "optionA"
    },

    {
        question: "Vitra considera la sostenibilità importante infatti ha come obiettivo prodotti",
        optionA: "Materiali sostenibili",
        optionB: "Duraturi nel tempo",
        correctOption: "optionB"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 8 questions to shuffledQuestions array
//app would be dealing with 8questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })


    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

  
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
           
          
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
