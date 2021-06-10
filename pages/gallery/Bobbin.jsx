import PropTypes from 'prop-types'
import Link from 'next/link'

function Bobbin({photo}) {
  return (
    <>
      <li>
        <Link href={`/gallery/photo/[id]`} as={`/gallery/photo/${photo.id}`}>
          <a className="img-wrapper">
            <img src={photo.thumbnailUrl} />
          </a>
        </Link>
      </li>

      <style jsx>{`
        .img-wrapper {
          width: 150px;
          height: 150px;
          margin: 0;
        }
        
        .img-wrapper img {
          width: 150px;
          height: 150px;
          object-fit: contain; 
          display: block;
        }
      `}</style>
    </>
  )
}

Bobbin.propTypes = {
  photo: PropTypes.object.isRequired
}

export default Bobbin

