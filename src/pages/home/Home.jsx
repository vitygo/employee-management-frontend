import styles from "./home.module.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import Header from "../../components/Header/Header"

export default function Home(){
    return(
        <div className={styles.homePage}>
            <Header/>
            <Sidebar/>



        </div>
    )

}