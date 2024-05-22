import styles from "./AddTask.module.scss"
import Image from "next/image";
const AddTask = () => {
    return (
        <div className={styles.container}>
            <input className={styles.input}/>
            <button className={styles.button}>
                დამატება  <Image src={'/New Task.svg'} alt='plus' width={16} height={16} />
            </button>


        </div>
    )
}


export default AddTask;