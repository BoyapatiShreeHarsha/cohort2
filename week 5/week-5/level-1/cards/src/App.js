import Cards from './Components/Cards';
import "./styles.css/main.css"

function App() {
  return (
    <div className='parent'>
      <Cards name="Lokeshwar" des="A TA in the 100xDevs Cohort 2.0" interest={["inoic","music","App Dev"]}  linkedIn="https://www.linkedin.com/" twitter="https://twitter.com/home?lang=en" />
      
    </div>
  );
}

export default App;
