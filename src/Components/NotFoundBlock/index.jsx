import React from 'react'
import styles from "./NotFoundBlock.module.scss"
const NotFoundBlock = () => {
  return (
  
        <div className={styles.root}>
              <h1 > 
            Ничего не найдено
            <br />
            <span>😕</span>
        </h1>
        <p className={styles.description}>К сожалению данная страница не доступна на нашем сайте!</p>
        </div>
      
        
    
  )
}

export default NotFoundBlock;
