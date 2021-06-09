import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'

// MEMO ещё

// Будет время, так прикрути ДжейсонФетч и сделай всё красиво - с обработкой ошибки и прелоадером
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

export default function Photo() {
  const router = useRouter();
  
  // router.query.id // Прикольно, конечно, но, пожалуй, буду прокидывать айдишник через пропс.
  // &&
  const photo = fetchPhoto(`https://jsonplaceholder.typicode.com/photos/${router.query.id}`)
  console.log("RERENDER")


  return (
    <>
      <img src={photo.url} alt={photo.title} />
    </>
  )
}
