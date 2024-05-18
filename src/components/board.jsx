import data from "/dashboard files/data.json"
import styles from "./styles/board.module.css"
{/*
    component creating the cards for the dashboard
    used to props to get the information that what data needs to be display the data from the json file
    used board.module.css file to apply styles
*/}

function Activity(props){

    return(
        <div id={styles.activity} style={{backgroundColor : props.color}}>
                <div id={styles.bg}>
                    <img id={styles.svg} src={props.back} alt="svg" />
                </div>

                <div id={styles.data}>
                    <p className={styles.name}>{
                    data[props.id].title} 
                    <span className={styles.Menu}>...</span>
                    </p>

                    <p className={styles.time}>
                        {data[props.id].timeframes[props.time].current}hrs
                        <span className={styles.info}>Last week- {data[props.id].timeframes[props.time].previous}hrs</span>
                    </p>
                </div>
                
        </div>
    )
}

export default Activity;
