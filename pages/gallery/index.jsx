/*
Актуальные задачи для этого компонента:
  1) Реализовать дозагрузку фотографий
  2) Не грузить фотографию, если она уже загружена
  3) Возможно, имеет смысл их отрисовывать по одной, по мере загрузки, а не ждать весь массив
  4) Поразбираться с местным компонентом Image. Вроде крутая штука для оптимизации
*/

import Link from 'next/link'
import { MainLayout } from '../../layouts/MainLayout'
import { useState, useEffect } from 'react'
import Bobbin from './Bobbin'
import Preloader from '../../components/Preloader'

// Так как это не боевой проект, обработку ошибок загрузки осознанно опускаю
export default function Gallery({photos: serverPhotos}) {
  const [photos, setPhotos] = useState(serverPhotos)
  
  useEffect(() => {
    async function load() {
      let photos = []
      for (let i = 1; i < 11; i++) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${i}`)
        const data = await response.json()
        photos.push(data)
      }
      setPhotos(photos)
    }

    if (!serverPhotos) {
      load()
    }
  }, [])

  if (!photos) {
    return (
    <MainLayout>
      <Preloader />
    </MainLayout>
    )
  }

  console.log("RERENDER GALLERY")

  return (
    <MainLayout title="Галерея">
      <h1>Галерея</h1>
      <Link href={'/'}><a>На главную</a></Link>
      <ul style={{display: "flex", flexWrap: "wrap", listStyle: "none"}}> 
       {photos.map(photo =>  <Bobbin photo={photo} key={photo.id} />)}
      </ul>
    </MainLayout>
  )
}

Gallery.getInitialProps = async ({req}) => {
  if (!req) {
    return {photos: null}
  }
  let photos = []
    // Данный сервер не поддерживает offset и limit, потому так
    for (let i = 1; i < 11; i++) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${i}`)
      const json = await response.json()
      photos.push(json)
    }

  return {photos}
}
