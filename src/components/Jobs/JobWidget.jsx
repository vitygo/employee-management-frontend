
import styles from "./JobWidget.module.css"
import { GrLocation } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";
import { MdOpenInFull } from "react-icons/md";

export default function JobWidget(){
    return(
        <div className={styles.jobWidget}>
            <div className={styles.jobWidgetHeader}>
                <div className={styles.jobWidgetImg}><img src="./Rectangle.svg" alt=""></img></div>
                <div className={styles.jobWidgetJobData}>
                    <p className={styles.jobTitle}>React Developer</p>
                    <p className={styles.jobPostDate}>Posted 2 days ago</p>
                </div>      
                <button className={styles.openBtn}><MdOpenInFull /></button>
                
            </div>     
            <div className={styles.additionalInfo}>
                <div className={styles.additionalInfoBadge}><GrLocation /> Remote</div>
                <div className={styles.additionalInfoBadge}><PiStudentBold/> 3 years exp</div>
            </div>       
            <div className={styles.jobWidgetFooter}>
                <p className={styles.footerInfo}><span>45</span>applications</p>
                <p className={styles.footerInfo2}>25 in last week</p>
            </div>
        </div>
    )
}