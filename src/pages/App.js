import { useEffect, useState } from 'react';



export default function App(props) {
  return (
    <div className="app-container">
      <header>
        <CreateTweet/>
      </header>
      <main>
          <aside>
              <nav>
                  <ul>
                    {/* Map over the links to different pages */}
                  </ul>
              </nav>
          </aside>   
          <div id="main">
            {/* <Card/> */}
          </div>  
      </main>
    </div>
  );
}

