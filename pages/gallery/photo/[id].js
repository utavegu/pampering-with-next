import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import Link from 'next/link'

/*
function fetchPhoto(url) {
  const [photo, setPhoto] = useState({})
	useEffect(
		() => {
			const fetchData = async () => {
					const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
					  setPhoto(data);
          } else {
            console.dir(response);
            console.log("Ошибка HTTP: " + response.status);
          }
			};
			fetchData();
		},
		[url]
	);
	return photo;
} 
*/

// Обработчик ошибки и прелоадер! В первом случае на место имг должна показываться заглушка

export default function Photo({photo}) {
  // const router = useRouter();
  // const photo = fetchPhoto(`https://jsonplaceholder.typicode.com/photos/${router.query.id}`)

  console.log("RERENDER")

  return (
    <>
      <h1>{photo.title}</h1>
      <img src={photo.url} alt={photo.title} />
      <Link href={'/gallery'}><a>Обратно в галерею</a></Link>
    </>
  )
}

Photo.getInitialProps = async ({query}) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${query.id}`)
  const photo = await response.json()

  return {photo}
}
