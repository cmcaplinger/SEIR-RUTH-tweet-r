import { useEffect, useState } from 'react';
import CreateTweet from '../components/CreateTweet'
import NavBar from '../components/NavBar'

export default function App(props) {
  return (
    <div className="app-container">
      <header>
        <CreateTweet/>
      </header>
      <main>
          <aside>
              <NavBar/>
          </aside>   
      </main>
      <div id="main">
            {/* <Card/> */}
      </div>  
    </div>
  );
}

