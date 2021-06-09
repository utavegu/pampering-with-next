import Link from 'next/link'
import { MainLayout } from '../../layouts/MainLayout'
import { useState, useEffect } from 'react'
import Bobbin from './Bobbin';

export default function Gallery({photos}) {

  // const [uploadedPhotos, setUploadedPhotos] = useState([]);
  // Так как проект не боевой, часть скрипта для прелоадера и ошибки опускаю
  // Но вообще в идеале сделай, как основные задачи решишь. Недолго же.

  // Так... при подгрузке (для простоты сделай пока кнопкой) нужно все уже подгруженые фото не затирать, а пушить в массив (и неплохо бы уточнить момент с кэшированием).
  // И скорее всего это должен быть глобальный стейт, чтобы при переходе между страницами уже подгруженные фото не просерались.

  console.log(photos);

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

Gallery.getInitialProps = async () => {
  let photos = [];
    for (let i = 1; i < 11; i++) {
      // Трай-кэтч прикрути сюда. А прелоадер можешь отрисовывать на пустой массив пхотоз
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${i}`)
      const json = await response.json()
      photos.push(json);
    }

  return {photos}
}
