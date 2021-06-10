import Link from 'next/link'
import { MainLayout } from '../../layouts/MainLayout'
import { useState, useEffect } from 'react'
import Bobbin from './Bobbin'

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
    return <MainLayout><p>Загрузка...</p></MainLayout>
  }

  console.log("RERENDER GALLERY")

  return (
    <MainLayout title="Галерея">
      <h1>ГАЛЕРЕЯ</h1>
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
