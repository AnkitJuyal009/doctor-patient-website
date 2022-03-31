import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='App'>
      <div className='relative flex min-h-screen'>
        {/* sidebar */}
        <Sidebar />
        {/* nav */}
        <Navbar />
      </div>
      {/* patient-details */}
      {/* appoinment-details */}
      {/* notes */}
      {/* files */}
      <h1 className='text-3xl font-light'>Danie</h1>
    </div>
  );
}

export default App;
