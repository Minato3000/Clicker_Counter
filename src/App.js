import React, {Component, useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, updateCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked me ${count} times`;
  }) 


  const increament = () => {
    updateCount(count + 1);
  };

  return (
    <div className='clickerbox'>
      <h1>Clicker Counter</h1>
      <div className='buttondiv'>
        <button onClick={increament}> Click me </button>
      </div>
      <p>You have clicked me {count} times</p>
    </div>
  );
}

// class App extends Component {
//   state = {
//     count: 0
//   };

//   increament = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   };
  
//   componentDidMount() {
//     document.title = `Clicked me ${this.state.count} times`;
//   }

//   componentDidUpdate() {
//     document.title = `Clicked me ${this.state.count} times`;
//   }

//   render() {
//     return (
//       <div className='clickerbox'>
//         <h1>Clicker Counter</h1>
//         <div className='buttondiv'>
//           <button onClick={this.increament}> Click me </button>
//         </div>
//         <p>You have clicked me {this.state.count} times</p>
//       </div>
//     );
//   }
// }

export default App;
