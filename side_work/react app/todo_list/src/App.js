import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Todo from './Components/Todo';
import Footer from './Components/Footer';

function App() {

  let todos=[
    {
      sno:1,
      title:"task 1",
      description:"Do your task 1"
    },
    {
      sno:2,
      title:"task 2",
      description:"Do your task 2"
    },
    {
      sno:3,
      title:"task 3",
      description:"Do your task 3"
    }
  ];

  return (
    <>
      <Header title="Todo's List"/>
      <Todo todos={todos}/>
      <Footer />
    </>
  );
}

export default App;
