import React from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './base-page.module.css'

export const BasePage = ({title, description = 'default description', className,  children}) => {
  return (
    <div className={className}>
        <Helmet >
            <meta name="description" content={description} />
            <title>React Case Study - {title}</title>
        </Helmet>
        <h1 className={styles['title']}>
            <span>{title}</span>
        </h1>
        {children}
    </div>
  )
}
