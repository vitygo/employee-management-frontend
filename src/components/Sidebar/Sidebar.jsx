import styles from "./sidebar.module.css"
import {Link} from "react-router-dom"
import {useState} from "react"
import {
    HiHome,
    HiChatAlt2,
    HiCalendar,
    HiBriefcase,
    HiUsers,
    HiUserGroup,
    HiOutlineDotsCircleHorizontal,
  } from "react-icons/hi";
  import { TiThMenu } from "react-icons/ti";
  import { RiArrowDownDoubleFill } from "react-icons/ri";
  import { RiArrowUpDoubleFill } from "react-icons/ri";

  

  export default function Sidebar() {
    const [iconsSize, setIconsSize] = useState("1.1rem")
    const [sidebarOpen, setSidebarOpen] = useState(true)

    return (
<nav className={styles.sidebar}>   
       <div className={` ${styles.sidebarBody} ${!sidebarOpen ? styles.sidebarBodyDisabled : ''}`}>
       <ul className={styles.menuSection}>
          <p className={styles.menuTitle}>MAIN</p>
          <li>
            <HiHome size={iconsSize}/> Dashboard
          </li>
          <li>
            <HiChatAlt2 size={iconsSize}/> Messages
          </li>
          <li>
            <HiCalendar size={iconsSize}/> Calendar
          </li>
        </ul>
  
        <ul className={styles.menuSection}>
          <p className={styles.menuTitle}>RECRUITMENT</p>
          <li>
            <HiBriefcase size={iconsSize}/> <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <HiUsers size={iconsSize}/><Link to="/candidates">Candidates</Link>
          </li>
          <li>
            <HiOutlineDotsCircleHorizontal size={iconsSize}/> Empty?
          </li>
          <li>
            <HiOutlineDotsCircleHorizontal size={iconsSize}/> Empty?
          </li>
        </ul>
  
        <ul className={styles.menuSection}>
          <p className={styles.menuTitle}>ORGANIZATION</p>
          <li>
            <HiUserGroup size={iconsSize}/> Employees
          </li>
          <li>
            <HiOutlineDotsCircleHorizontal size={iconsSize}/> Empty?
          </li>
          <li>
            <HiOutlineDotsCircleHorizontal size={iconsSize}/> Empty?
          </li>
        </ul>
        
       </div>
       
        <button className={styles.sidebarBtn} onClick={()=> setSidebarOpen(prev => !prev)}>{sidebarOpen ?  <RiArrowUpDoubleFill /> : <RiArrowDownDoubleFill/> }</button>
      </nav>
    );
  }