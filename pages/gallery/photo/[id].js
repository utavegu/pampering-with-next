import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import Preloader from '../../../components/Preloader'

// Так как это не боевой проект, обработку ошибок загрузки осознанно опускаю
export default function Photo({photo: serverPhoto}) {
  const router = useRouter()
  const [photo, setPhoto] = useState(serverPhoto)
  
  useEffect(() => {
    async function load() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${router.query.id}`)
      const data = await response.json()
      setPhoto(data)
    }

    if (!serverPhoto) {
      load()
    }
  }, [])

  if (!photo) {
    return <Preloader />
  }

  console.log("RERENDER PHOTO PAGE") // Это я так проверяю, нет ли лишних перерисовок компонента

  return (
    <>
      <h1>{photo.title}</h1>
      <div className="img-wrapper">
        <img src={photo.url} alt={photo.title} />
      </div>
      <Link href={'/gallery'}><a>Обратно в галерею</a></Link>
      <style jsx>{`
        .img-wrapper {
          width: 600px;
          height: 600px;
          margin: 0;
        }
        
        .img-wrapper img {
          width: 600px;
          height: 600px;
          object-fit: contain; 
        }
      `}</style>
    </>
  )
}

Photo.getInitialProps = async ({query, req}) => {
  if (!req) {
    return {photo: null}
  }
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${query.id}`)
  const photo = await response.json()

  return {photo}
}
