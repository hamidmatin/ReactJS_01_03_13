import React from 'react'
import styles from './screen.module.css'

const Screen = ({ value }) => {
  return (
    <div className={styles['screen']}> 
        {value}
    </div>
  )
}

export default Screen