import './App.css'
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import TabNavBar from './components/TabNavBar';

function App() {
  

  return (
    <>
      <div className="App">
      <NavBar />
      <SearchBar />
      <TabNavBar />
      {/* Other components go here */}
    </div>
    </>
  )
}

export default App
