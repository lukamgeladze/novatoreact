import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import AddTask from "./components/AddTask/AddTask";
import Summary from "./components/Summary/Summary";
import Empty from "./components/Empty/Empty";
import Task from "./components/Task/Task";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <AddTask />
        <Summary />
        <Empty/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
      </div>
    </div>

  )
}