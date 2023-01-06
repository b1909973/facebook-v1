import {Fragment} from 'react'
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";

import router from "./router";
function App() {
  return (
    

    
       
          <Router >
              <Routes>
              {router.map((r,i)=>{
                let Layout = Fragment
                if(r.layout){
                  Layout=r.layout
                }
                const Page = r.component
            return <Route element={<Layout><Page /></Layout>} path={r.path} key={i}></Route>

              })}
         
            </Routes>
          </Router> 
    

    
  );
}

export default App;
