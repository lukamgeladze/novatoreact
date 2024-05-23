import styles from './Task.module.scss'
type Props= {
  done:bolean
}
const Task = (props:Props) => {
  const classNames={styles.container};

   if(props.done){
    classNames.push(styles.done)
   }
      
    
  
  return (
    <div className={classNames.join('').trim()}>
      <div className={styles.checkboxWrapper}>
        <input type="checkbox" />
        <h3>დავალება 1</h3>
      </div>
    </div>
  )

};
export default Task;