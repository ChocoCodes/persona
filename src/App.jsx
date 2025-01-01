import { questions, keywords, mapToElements, format } from './utils/utils';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import UserProvider from './components/UserContext';
import Header from './components/Header';
import UserForm from './components/UserForm';
import Question from './components/Question';
import Results from './components/Results';
import Footer from './components/Footer';
import './styles/styles.css';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userName, setUserName] = useState("");
  const [element, setElement] = useState("");
  const [dog, setDogInfo] = useState(null);

  const navigate = useNavigate();
  const elements = mapToElements(questions, keywords);

  const handleAnswer = answer => {
    setAnswers([...answers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  
  const handleUserFormSubmit = name  => {
    setUserName(name);
  };
  
  const determineElement = answers => {
    const counts = {};
    answers.forEach((answer) => {
      const element = elements[answer];
      counts[element] = (counts[element] || 0) + 1;
    });

    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
  };

  const fetchDog = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      data.name = format(data.message);
      setDogInfo(data);
    } catch(err) {
      console.error(`Error fetching data: ${err.message}`);
    }
  }

  const resetQuiz = () => {
      setCurrentQuestionIndex(0);
      setAnswers([]);
      setElement("");
      setDogInfo(null);
      navigate("/");
  };

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      const selectedElement = determineElement(answers);
      setElement(selectedElement);
      fetchDog();
    }
  }, [currentQuestionIndex]);

  return (
    <>
      <UserProvider value={{ user: userName, setName: setUserName }}>
        <Header/>
        <Routes>
            <Route path="/" element={ <UserForm onSubmit={ handleUserFormSubmit }/> }/>
            <Route path="/quiz" element={
              currentQuestionIndex < questions.length ? (
                <Question question={ questions[currentQuestionIndex].question } options={ questions[currentQuestionIndex].options } onAnswer={ handleAnswer }/>
              ) : (
                <Results element={ element } dog={ dog } onRetake={ resetQuiz }/>
              )
            }/>
          </Routes>
        <Footer/>
      </UserProvider>
    </>
  );
}

export default App;
