
const TriviaData = [
    {
        question: 'כמה מדליות אולימפיות יש לישראל',
        answers: [ 4 , 9 , 10 , 12],
        corrent: 1
    },
    {
        
        question: 'באיזו שנה התרחש פיגוע מגדלי התאומים?',
        answers: [  2001 , 2000 , 1999 , 2005],
        corrent: 2	
    
    },{
        
        question: 'N סוד כימי מהטבלה המחזורית מסמלת האות בתמונה?',
        answers: [  'חנקן' , 'מימן' , 'נתרן' , 'פחמן'],
        corrent: 3	
    
    },
    {
        
        question: 'מי מבין האנשים הבאין לא היה נשיא מדינת ישראל?',
        answers: [  'עזר ויצמן' , 'אפרים קציר' , 'לוי אשכול' , 'יצחק בן צבי' ],
        corrent: 1	
    },
    {
        
        question: 'באיזו שנה הסתיימה מלחמת העולם השנייה?',
        answers: [  1943  , 1941 , 1945 , 1946 ],
        corrent: 2	
    },
    {
        
        question: 'מהו שיא העולם בריצת 100 מטר בשניות?',
        answers: [  9.25  , 9.58 , 9.84 , 9.11 ],
        corrent: 1	
    },
    {
        
        question: 'מהו האי הגדול ביותר בעולם?',
        answers: [ 'גרינלנד'  , 'גינאה החדשה' , 'מדגסקר' , 'הונשו' ],
        corrent: 3	
    },
    {
        
        question: 'מהי המדינה הקטנה בעולם אחרי הוותיקן?',
        answers: [ 'מונוקו' , 'סן מרינו' , 'ישראל'  , 'טובלו' ],
        corrent: 3	
    },
    {
        
        question: 'כמה אנשים נכנסו לתיבת נוח?',
        answers: [ 8 , 2 , 4 , 6 ],
        corrent: 0	
    },
    {
        
        question: 'כמה שנים בני ישראל הלכו במדבר?',
        answers: [ 10 , 20 , 40 , 50 ],
        corrent: 2	
    },
    {
        
        question: 'איזו מדינה בעלת השטח הגדול ביותר',
        answers: [ 'רוסיה' , 'ארצות הברית'  , 'קנדה' , 'ברזיל' ],
        corrent: 3	
    }
];



// This is the block of questions
const triviaStartPage = document.querySelector(".trivia_question_page");
const olLest = document.getElementById("ul-list-answers").children;
const textOfQuestion = document.querySelector(".questionInput");
const textOfTime = document.querySelector(".timeInput");
const numerQuestion = document.querySelector(".questionP");

// It's the block of results
const triviaRezoltPage = document.querySelector(".trivia_rezolt_page");
const resoltImgChenge = document.querySelector(".resoltImg");
const resultsOfPoints = document.querySelector(".results-of-points");

// It's the settings
let counter = 0;
let countingQuestions = 1;
var counterTime = 0;
let finalScore = 0;
let clickAnswer = true;

const lenLo = olLest.length;
const lenTriviaData = TriviaData.length;


if (counter == 0) {
  mixTheArr()
}



document.querySelector(".trivia_question_page").addEventListener("click", function (event) {
  if (event.target.classList.contains('next-question-button')) {
      moveToTheNextQuestion();
  } else if (event.target.classList.contains('li-answer')) {
      if (clickAnswer) {
          let myTarget = event.target.textContent;
          if (TriviaData[counter - 1].answers[TriviaData[counter - 1].corrent] == myTarget) {
              finalScore += 100 / lenTriviaData;
              event.target.classList.add("big-font-true");
          } else {
              event.target.classList.add("big-font-false");
          }
          clickAnswer = false;
      }
  }
}, false)


function moveToTheNextQuestion() {
    
  if (counter < lenTriviaData) {
      for (let i = 0; i < lenLo; i++) {
          numerQuestion.textContent = "שאלה מספר " + countingQuestions;
          olLest[i].textContent = TriviaData[counter].answers[i];
          textOfQuestion.textContent = TriviaData[counter].question;
          olLest[i].classList.remove("big-font-true");
          olLest[i].classList.remove("big-font-false");
          counterTime = 0;
      }
      counter++;
      countingQuestions++;
      clickAnswer = true;
  } else {
      triviaStartPage.style.display = "none";
      triviaRezoltPage.style.display = "block";
      finalScore = Math.round(finalScore);
      resultsOfPoints.textContent = "הנקודות שלך: " + finalScore + " נקודות.";
      if (finalScore < 100) {
          resoltImgChenge.src = "/images/5_trivia_questions/sad.png";
      } else {
          resoltImgChenge.src = "/images/5_trivia_questions/smile.png";
      }
  }
}

function tryAgain() {
  counter = 0;
  counterTime = 0;
  finalScore = 0;
  countingQuestions = 1;
  clickAnswer = true;
  triviaStartPage.style.display = "block";
  triviaRezoltPage.style.display = "none";
  moveToTheNextQuestion();

}


setInterval(function () {
  if (counterTime == 10) {
      moveToTheNextQuestion();
  }
  counterTime++;
  textOfTime.textContent = counterTime;
}, 1000);

function mixTheArr() {
  let len = TriviaData.length;
  for (let i = 0; i < len; i++) {
      TriviaData[i].numberFoArr = i;
  }
  for (let i = 0; i < len + 50; i++) {
      let randomNum = Math.floor(Math.random() * len);
      if (randomNum == 10) { randomNum-- };
      let temporary;
      temporary = TriviaData[randomNum];
      TriviaData[randomNum] = TriviaData[randomNum + 1];
      TriviaData[randomNum + 1] = temporary;
  }
  console.log("after the random --> " + TriviaData.length);
  for (let i = 0; i < len; i++) {
      console.log(TriviaData[i].numberFoArr + " --> " + TriviaData[i].question + " --> : " + TriviaData[i].corrent );
  }
  moveToTheNextQuestion();

}

window.addEventListener("keydown", keyboardManager, false);

function keyboardManager(event) {
  let myKey = event.key
  if (myKey > 0 && myKey < 5) {
      if (clickAnswer) {
          let myTarget = document.querySelector(".key" + myKey);
          if (TriviaData[counter - 1].answers[TriviaData[counter - 1].corrent] == myTarget.textContent) {
              finalScore += 100 / lenTriviaData;
              myTarget.classList.add("big-font-true");
          } else {
              myTarget.classList.add("big-font-false");
          }
          clickAnswer = false;
      }
  }
  if(myKey == "Enter"){
      moveToTheNextQuestion();
  }
}



