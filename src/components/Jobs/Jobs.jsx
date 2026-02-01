import styles from "./Jobs.module.css"
import JobWidget from "./JobWidget"
import { TiArrowSortedDown } from "react-icons/ti";
import JobHandler from "./JobHandler"
import { IoMdAdd } from "react-icons/io";
import {useState} from "react"



export default function Jobs(){

    const [activeJobHandler, setActiveJobHandler] = useState(false);

    return(
        <div className={styles.jobsPage}>
            

           <div className={styles.jobsWidgetsContainer}>
            <div  className={styles.jobsWidgetsContainerHeader}>
                <p className={styles.jobsWidgetsContainerHeaderTitle}>Current Oppenings</p>
                <button className={styles.sortBtn}>Sort By: Latest <TiArrowSortedDown /> </button>
            </div>
            <div  className={styles.jobsWidgetsContainerBody}>
              <JobWidget/>
              <JobWidget/>
              <JobWidget/>
              <JobWidget/>
              <JobWidget/>
            </div>

            <div className={styles.jobsHistory}>
                <div className={styles.jobsWidgetsContainerHeader}>
                <p className={styles.jobsWidgetsContainerHeaderTitle}>Vacancy History</p>
                <button className={styles.sortBtn}>September 2025 <TiArrowSortedDown /> </button>
                </div>
                <div className={styles.jobHistoryWidget}>
                <div className={styles.jobHistoryWidgetHeader}>
                    <div className={styles.jobHistoryBtns}>
                    <button className={styles.jobHistoryWidgetHeaderBtn}>All</button>
                    <button className={styles.jobHistoryWidgetHeaderBtn}>Open</button>
                    <button className={styles.jobHistoryWidgetHeaderBtn}>Closed</button>
                    </div>
                    <button className={styles.addJobBtn} onClick={() => setActiveJobHandler(prev => !prev)}><IoMdAdd/> Add New Job</button>
                  
                </div>
                <div className={styles.jobHistoryWidgetbody}>
                    <div className={styles.jobHistoryWidgetbodyTablesNames}>
                        <p className={styles.jobHistoryWidgetbodyTableName}>Job Title</p>
                        <p className={styles.jobHistoryWidgetbodyTableName}>Department</p>
                        <p className={styles.jobHistoryWidgetbodyTableName}>Location / Work Type</p> 
                        {/* (Remote / Hybrid / Office) */}
                        <p className={styles.jobHistoryWidgetbodyTableName}>Date Created</p>
                        <p className={styles.jobHistoryWidgetbodyTableName}>Status</p>
                        {/* (Open / On Hold / Closed) */}
                        <p className={styles.jobHistoryWidgetbodyTableName}>Candidates</p>
                    </div>
                    <div className={styles.jobRow}>
                        <p className={styles.jobHistoryWidgetbodyTableData}>Frontend Developer</p>
                        <p className={styles.jobHistoryWidgetbodyTableData}>Engineering</p>
                        <p className={styles.jobHistoryWidgetbodyTableData}>Remote</p>
                        <p className={styles.jobHistoryWidgetbodyTableData}>Mar 12, 2025</p>
                        <p className={styles.jobHistoryWidgetbodyTableData}>Open</p>
                        <p className={styles.jobHistoryWidgetbodyTableData}>18</p>
                    </div>
                </div>

                </div>
             
            </div>


            
           </div>

           {activeJobHandler? <JobHandler setActiveJobHandler={setActiveJobHandler}/> : ""}
        </div>
    )
}


