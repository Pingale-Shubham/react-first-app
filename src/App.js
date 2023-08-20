// import logo from './logo.svg';
import './App.css';
// import Greet from './components/greet';
// import Wellcome from './components/Wellcome';
// import Counter from './components/counter';
// import Message from './components/Message';
import './appStyle.css'
import Details from './components/Details';
import UserCondition from './components/UserCondition';
// import Parentcomponent from './components/Methodasprops/Parentcomponent';
// import EventBinding from './components/Event_component/EventBinding';
// import EventClass from './components/Event_component/EventClass';
// import EventClick from './components/Event_component/EventClick';


function App() {
  return (
    <div className="App">
    <h1>--------------------This is React 1st Project--------------------</h1>
      
    {/* <Wellcome /> */}
    {/* <Greet name = "Shubham" city ="Dhule"></Greet> */}

    {/* <Greet name="Shubham" courseName="MERN" /> */}

    {/* <Wellcome name="Shubham" courseName="MERN" /> */}

    {/* <Wellcome /> */}
    {/* <Counter /> */}
    {/* <Message /> */}
    {/* <EventClick /> */}
    {/* <EventClass /> */}
    {/* <EventBinding /> */}
    {/* <Parentcomponent /> */}
    <Details />
    <UserCondition />
    </div>
  );
}

export default App;
