 // Trivia Quiz
 function submitQuiz() {
    const form = document.getElementById('trivia-form');
    let correctAnswers = 0;
    const totalQuestions = 5;
  
    // Check answers for question 1
    const q1 = form.q1.value;
    if (q1 === 'correct') {
      correctAnswers++;
    }
  
    // Check answers for question 2
    const q2 = form.q2.value;
    if (q2 === 'correct') {
      correctAnswers++;
    }

    // Check answers for question 3
    const q3 = form.q3.value;
    if (q3 === 'correct') {
       correctAnswers++;
    }

    // Check answers for question 4
    const q4 = form.q4.value;
    if (q4 === 'correct') {
        correctAnswers++;
    }

    // Check answers for question 5
    const q5 = form.q5.value;
    if (q5 === 'correct') {
       correctAnswers++;
    }
 

    // Calculate the score
    const score = (correctAnswers / totalQuestions) * 100;
  
    // Display an alert with the results
    alert(`You got ${correctAnswers} out of ${totalQuestions} correct! Your score: ${score}%`);
  }


// Quote of the Day
const quotes = [
    "In the heart of tradition lies the strength of our identity.",
    "Nature speaks in whispers; we must learn to listen.",
    "Every land has a story; ours is etched in the soil.",
    "To protect our heritage is to safeguard our future.",
    "True power lies not in control, but in connection.",
    "Rituals are the threads that weave our culture together.",
    "When we honor our ancestors, we honor ourselves.",
    "Conflict arises when the heart of the land is ignored.",
    "Unity in tradition is our strongest defense.",
    "The spirit of a community lives in the stories we share.",
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('random-quote').textContent = quotes[randomIndex];
  }

   // Load a random quote when the page loads
   window.onload = generateQuote;
  