import PropTypes from 'prop-types'
import { useState } from 'react'
import { resultInitial } from './Constants'
import AnswerTimer from './AnswerTimer';

const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIdx, setAnswerIdx] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [result, setResult] = useState(resultInitial);
    const [showResult, setShowResult] = useState(false);
    const [showAnswerTimer, setShowAnswerTimer] = useState(true);
    const { question, choices, correctAnswer } = questions[currentQuestion];
    const [startQuiz, setStartQuiz] = useState(false);

    const onAnswerclick = (answer, index) => {
        setAnswerIdx(index);
        if (answer === correctAnswer) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    }

    const onClickNext = (finalAnswer) => {
        setAnswerIdx(null);
        setShowAnswerTimer(false);
        setResult((prev) =>
            finalAnswer ? {
                ...prev,
                score: prev.score + 10,
                correctAnswers: prev.correctAnswers + 1,
            } : {
                ...prev,
                wrongAnswers: prev.wrongAnswers + 1,
            }
        );
        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setCurrentQuestion(0);
            setShowResult(true);
        }

        setTimeout(() => {
            setShowAnswerTimer(true);
        })
    }

    const onTryAgain = () => {
        setResult(resultInitial);
        setShowResult(false);
        setStartQuiz(false);
    }

    const handleTimeUp = () => {
        setAnswer(false);
        onClickNext(false);
    }

    return (
        <div className="quiz-container">
            {!showResult ? (
                !startQuiz
                    ?
                    (<div className='start'>
                        <h3>Quiz App</h3>
                        <button onClick={() => setStartQuiz(true)}>Start</button>
                    </div>)
                    :
                    (<>
                        {showAnswerTimer && (<AnswerTimer duration={10} onTimeUp={handleTimeUp} />)}
                        <span className='active-question'>{currentQuestion + 1}</span>
                        <span className='total-question'>/{questions.length}</span>
                        <h2>{question}</h2>
                        <ul>
                            {choices.map((answer, index) => (
                                <li
                                    key={answer}
                                    onClick={() => onAnswerclick(answer, index)}
                                    className={answerIdx === index ? "selected-answer" : null}
                                >
                                    {answer}
                                </li>
                            ))}
                        </ul>
                        <div className='footer'>
                            <button onClick={() => onClickNext(answer)}
                                disabled={answerIdx === null}>
                                {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                            </button>
                        </div>
                    </>)
            ) : (<div className='result'>
                <h3>Your Result:</h3>
                <p>
                    Total Questions: <span>{questions.length}</span>
                </p>
                <p>
                    Total Score: <span>{result.score}</span>
                </p>
                <p>
                    Correct Answers: <span>{result.correctAnswers}</span>
                </p>
                <p>
                    Wrong Answers: <span>{result.wrongAnswers}</span>
                </p>
                <button onClick={onTryAgain}>Try again</button>

            </div>)}

        </div>
    );
};

Quiz.propTypes = {
    questions: PropTypes.obj,
}
export default Quiz;