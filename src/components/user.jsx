import styles from "./styles/user.module.css"
import {profilepic} from "../images"

{/*
    This file is for user details card it uses the state method to pass the state of vlaue to app.jsx component
    Here, the argument passed to User component is get by the app component and in that it uses usestate hookes
    to set default
*/}


export default function User( {set, setval}){
    
    const setter = (a) => {
        setval(a)
    }
    
    return(
        <div id={styles.userMain}>
            <div id={styles.userDetails}>
                    <img id={styles.userimg}src={profilepic} alt="UserImage" />
                    <div>
                        <p id={styles.report}>Report for</p>
                        <p id={styles.Uname}>Jeremy Robson</p>
                    </div>
            </div>

            <div id={styles.coloum}>
                <p id={styles.cols} tabIndex="0" onClick={() => setter(1)}>Daily</p>
                <p id={styles.cols} tabIndex="0" onClick={() => setter(2)}>Weekly</p>
                <p id={styles.cols} tabIndex="0" onClick={() => setter(3)}>Monthly</p>
            </div>
        </div>
    )
}



