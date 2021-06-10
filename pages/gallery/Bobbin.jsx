import PropTypes from 'prop-types'
import Link from 'next/link'

function Bobbin({photo}) {
  return (
    <>
      <li>
        <Link href={`/gallery/photo/[id]`} as={`/gallery/photo/${photo.id}`}>
          <a>
            <img src={photo.thumbnailUrl} />
          </a>
        </Link>
      </li>

      <style jsx>{`
        img {
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

