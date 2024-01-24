
// import Demo from'./demo'

// function App() {
//   return (
//       <div>
//         {/* <Demo className="ram"/> */}

//       </div>
//   );
// }

// export default App;

import Clock from './component/class';
import Onepiece from'./component/onepiece'
function App(){

  const profile = {
        firstName: 'gita',
        lastName: 'dahal',
        gmail: 'sanjeev@gmail.com',
        
  }
  return(
    <div>
    <Onepiece user={profile}/>
    <Clock/>
    </div>
    
  )
}

export default App;