import './App.css';
import Footer from './components/Footer';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='p-6 max-w-md mx-auto'>
      <h1 className="text-center text-red-500 text-3xl font-bold mb-4">
        Todos
      </h1>
      <TodoList />
      
    </div>
  );
}

export default App;
