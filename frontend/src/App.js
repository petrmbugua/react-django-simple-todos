// import { Component } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    axios
      .get('http://127.0.0.1:8000/api/')
      .then((res) => {
        const todos = res.data;
        setTodos(todos);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTodos();
  }, [todos]);

  return (
    <>
      {todos.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <span>{item.body}</span>
        </div>
      ))}
    </>
  );
};

// class App extends Component {
//   state = {
//     todos: [],
//   };

//   componentDidMount() {
//     this.getTodos();
//   }

//   getTodos() {
//     axios
//       .get('http://127.0.0.1:8000/api/')
//       .then((res) => {
//         this.setState({ todos: res.data });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   render() {
//     return (
//       <div>
//         {this.state.todos.map((item) => (
//           <div key={item.id}>
//             <h1>{item.title}</h1>
//             <span>{item.body}</span>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

export default App;
