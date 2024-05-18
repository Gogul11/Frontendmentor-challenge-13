import { useState } from "react"
import Activity from "./components/board"
import User from "./components/user"

import {img1, img2, img3, img4, img5, img6, profilepic} from "./images"

function App() {
  
  const [set, setval] = useState(0)
  
  var detail = "daily"
  if(set === 1){
      detail = "daily"
  }
  if(set === 2){
    detail = "weekly"
  }
  if(set === 3)
  {
      detail = "monthly"
  }
  
  return (
    
    <div id="dash-board">
    
      <div>
        <User set={set} setval={setval} pic={profilepic} />
      </div>

      <div id="inner">

        <div>
          <Activity back= {img1}
          color="hsl(15, 100%, 70%)"
          name="Work" id="0" time = {detail}/>

          <Activity back= {img2}
          color="hsl(195, 74%, 62%)"
          name="Play"id="1" time = {detail}/>
        </div>
          <div>
            <Activity back= {img3}
            color="hsl(348, 100%, 68%)"
            name="Study"id="2" time = {detail}/>

            <Activity back= {img4}
            color="hsl(145, 58%, 55%)"
            name="Exercise"id="3" time = {detail}/>
          </div>
        <div>
          <Activity back= {img5}
          color="hsl(264, 64%, 52%)"
          name="Social"id="4" time = {detail}/>

          <Activity back= {img6}
          color="hsl(43, 84%, 65%)"
          name="Self-care"id="5" time = {detail}/>
        </div>

      </div>

    </div>
  )
}

export default App