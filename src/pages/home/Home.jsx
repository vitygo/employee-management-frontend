import styles from "./home.module.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import Header from "../../components/Header/Header"
import { Routes, Route, Link } from 'react-router-dom';
import Candidates from "../../components/Candidates/Candidates"
import Jobs from "../../components/Jobs/Jobs"

export default function Home(){
    return(
        <div className={styles.homePage}>
            <Header/>
            <Sidebar/>
            <main>
                <Routes>
                <Route path="/candidates" element={<Candidates/>} />
                <Route path="/jobs" element={<Jobs />} />
                </Routes>
            </main>



        </div>
    )

}