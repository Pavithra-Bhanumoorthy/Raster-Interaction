

import './App.css';
import Maincomp from './components/MainComp';
import ErrorBoundary from './common/Errorboundaries/ErrorBoundary';

function App() {
  

  return (
    <>
    <ErrorBoundary>
        <Maincomp/>
      
    </ErrorBoundary>
 
      
    </>
  )
}

export default App
