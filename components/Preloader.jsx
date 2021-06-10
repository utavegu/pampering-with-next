import React from 'react'
import style from './Preloader.module.css'

export default function Preloader() {
  return (
    <div className={style.preloader}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
