import React, {Component, useState} from 'react';
import './App.css';

function App() {
  const [count, updateCount] = useState(0);

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
