      

        // Variabile globale per tenere traccia delle domande randomizzate
        let randomizedQuestions = [];

        // Funzione per mescolare un array (Fisher-Yates shuffle)
        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        // Funzione per preparare le domande randomizzate
        function prepareRandomizedQuestions() {
            randomizedQuestions = originalQuestions.map(q => ({
                ...q,
                options: shuffleArray(q.options)
            }));
            randomizedQuestions = shuffleArray(randomizedQuestions);
        }

        // Funzione per generare il test
        function generateQuiz() {
            const quizForm = document.getElementById('quizForm');
            quizForm.innerHTML = ''; // Pulisce il form prima di rigenerarlo
            
            randomizedQuestions.forEach((q, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'question-container';
                
                const questionText = document.createElement('div');
                questionText.className = 'question-number';
                questionText.textContent = `${index + 1}. ${q.question}`;
                questionDiv.appendChild(questionText);
                
                const optionsDiv = document.createElement('div');
                optionsDiv.className = 'options';
                
                q.options.forEach((option, i) => {
                    const optionDiv = document.createElement('div');
                    optionDiv.className = 'option';
                    
                    const input = document.createElement('input');
                    input.type = 'radio';
                    input.name = `q${index}`;
                    input.value = option;
                    input.id = `q${index}opt${i}`;
                    
                    const label = document.createElement('label');
                    label.htmlFor = `q${index}opt${i}`;
                    label.textContent = option;
                    
                    optionDiv.appendChild(input);
                    optionDiv.appendChild(label);
                    optionsDiv.appendChild(optionDiv);
                });
                
                questionDiv.appendChild(optionsDiv);
                quizForm.appendChild(questionDiv);
            });
        }

        // Funzione per correggere il test
        function gradeQuiz() {
            let score = 0;
            const incorrectAnswers = [];
            
            randomizedQuestions.forEach((q, index) => {
                const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
                const userAnswer = selectedOption ? selectedOption.value : null;
                
                if (userAnswer === q.correctAnswer) {
                    score++;
                } else {
                    incorrectAnswers.push({
                        question: `${index + 1}. ${q.question}`,
                        userAnswer: userAnswer || "Nessuna risposta",
                        correctAnswer: q.correctAnswer
                    });
                }
            });
            
            // Mostra i risultati
            const resultsDiv = document.getElementById('results');
            const finalScore = document.getElementById('finalScore');
            const scoreMessage = document.getElementById('scoreMessage');
            const incorrectAnswersDiv = document.getElementById('incorrectAnswers');
            
            finalScore.textContent = score;
            scoreMessage.textContent = getScoreMessage(score);
            
            // Genera il report delle risposte errate
            incorrectAnswersDiv.innerHTML = '<h3>Risposte errate:</h3>';
            
            if (incorrectAnswers.length === 0) {
                incorrectAnswersDiv.innerHTML += '<p>Complimenti! Non hai commesso nessun errore.</p>';
            } else {
                incorrectAnswers.forEach(item => {
                    const incorrectItem = document.createElement('div');
                    incorrectItem.className = 'incorrect-item';
                    
                    incorrectItem.innerHTML = `
                        <p><strong>Domanda:</strong> ${item.question}</p>
                        <p><strong>La tua risposta:</strong> <span class="user-answer">${item.userAnswer}</span></p>
                        <p><strong>Risposta corretta:</strong> <span class="correct-answer">${item.correctAnswer}</span></p>
                    `;
                    
                    incorrectAnswersDiv.appendChild(incorrectItem);
                });
            }
            
            resultsDiv.style.display = 'block';
            
            // Scorri fino ai risultati
            resultsDiv.scrollIntoView({ behavior: 'smooth' });
        }

        // Messaggio in base al punteggio ottenuto
        function getScoreMessage(score) {
            const percentage = (score / randomizedQuestions.length) * 100;
            
            if (percentage === 100) {
                return "Perfetto! Hai risposto correttamente a tutte le domande!";
            } else if (percentage >= 80) {
                return "Ottimo risultato! Conosci molto bene la materia.";
            } else if (percentage >= 60) {
                return "Buon risultato! Hai una buona conoscenza della materia.";
            } else if (percentage >= 40) {
                return "Risultato sufficiente. Potresti approfondire alcuni argomenti.";
            } else {
                return "Dovresti studiare di più questa materia.";
            }
        }

        // Funzione per resettare il test
        function resetQuiz() {
            // Prepara nuove domande randomizzate
            prepareRandomizedQuestions();
            
            // Rigenera il quiz
            generateQuiz();
            
            // Nascondi i risultati
            document.getElementById('results').style.display = 'none';
            
            // Scorri all'inizio del test
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Event listeners
        document.addEventListener('DOMContentLoaded', () => {
            prepareRandomizedQuestions();
            generateQuiz();
            
            document.getElementById('submitBtn').addEventListener('click', gradeQuiz);
            document.getElementById('resetBtn').addEventListener('click', resetQuiz);
        });