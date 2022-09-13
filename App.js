import { useState } from 'react';
import './HOOK_USESTATE/style.css';
import JSONDATA from './MOCK_DATA.json'

function App() {
  const[searchTerm, setSearch] = useState('')
  return (
    <>
      <div>
        <input type="text" placeholder='Search Here...' onChange={event=>{setSearch(event.target.value)}}/>
        {JSONDATA.filter((val) => {
          if (searchTerm === "") {
            return val
          } else if(val.first_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return val
          }
        }).map((val, key)=> {
          return (
            <div>
              <p>{val.first_name}</p>
            </div>
          );
        })}
     </div>
    </>
  );
}

export default App;
