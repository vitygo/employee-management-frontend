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
    const [iconsSize, setIconsSize] = useState("1.1rem");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeMenuSection,setActiveMenuSection] = useState("jobs");

    return (
<nav className={styles.sidebar}>
  <div className={`${styles.sidebarBody} ${!sidebarOpen ? styles.sidebarBodyDisabled : ''}`}>

    <ul className={styles.menuSection}>
      <p className={styles.menuTitle}>MAIN</p>
      <li 
        className={activeMenuSection === "dashboard" ? styles.active : ""} 
        onClick={() => setActiveMenuSection("dashboard")}
      >
        <HiHome size={iconsSize}/> Dashboard
      </li>
      <li 
        className={activeMenuSection === "messages" ? styles.active : ""} 
        onClick={() => setActiveMenuSection("messages")}
      >
        <HiChatAlt2 size={iconsSize}/> Messages
      </li>
      <li 
        className={activeMenuSection === "calendar" ? styles.active : ""} 
        onClick={() => setActiveMenuSection("calendar")}
      >
        <HiCalendar size={iconsSize}/> Calendar
      </li>
    </ul>

  
    <ul className={styles.menuSection}>
      <p className={styles.menuTitle}>RECRUITMENT</p>
      <li 
        className={activeMenuSection === "jobs" ? styles.active : ""} 
        onClick={() => setActiveMenuSection("jobs")}
      >
        <HiBriefcase size={iconsSize}/> <Link to="/jobs">Jobs</Link>
      </li>
      <li 
        className={activeMenuSection === "candidates" ? styles.active : ""} 
        onClick={() => setActiveMenuSection("candidates")}
      >
        <HiUsers size={iconsSize}/><Link to="/candidates">Candidates</Link>
      </li>
      <li 
        className={activeMenuSection === "empty1" ? styles.active : ""} 
        onClick={() => setActiveMenuSection("empty1")}
      >
        <HiOutlineDotsCircleHorizontal size={iconsSize}/> Empty?
      </li>
      <li 
        className={activeMenuSection === "empty2" ? styles.active : ""} 
        onClick={() => setActiveMenuSection("empty2")}
      >
        <HiOutlineDotsCircleHorizontal size={iconsSize}/> Empty?
      </li>
    </ul>

   
    <ul className={styles.menuSection}>
      <p className={styles.menuTitle}>ORGANIZATION</p>
      <li 
        className={activeMenuSection === "employees" ? styles.active : ""} 
        onClick={() => setActiveMenuSection("employees")}
      >
        <HiUserGroup size={iconsSize}/> Employees
      </li>
      <li 
        className={activeMenuSection === "empty3" ? styles.active : ""} 
        onClick={() => setActiveMenuSection("empty3")}
      >
        <HiOutlineDotsCircleHorizontal size={iconsSize}/> Empty?
      </li>
      <li 
        className={activeMenuSection === "empty4" ? styles.active : ""} 
        onClick={() => setActiveMenuSection("empty4")}
      >
        <HiOutlineDotsCircleHorizontal size={iconsSize}/> Empty?
      </li>
    </ul>
    
  </div>
  
  <button className={styles.sidebarBtn} onClick={() => setSidebarOpen(prev => !prev)}>
    {sidebarOpen ? <RiArrowUpDoubleFill /> : <RiArrowDownDoubleFill/>}
  </button>
</nav>
    );
  }