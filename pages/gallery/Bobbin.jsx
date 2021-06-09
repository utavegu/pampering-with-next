import PropTypes from 'prop-types'
import Link from 'next/link'

function Bobbin({photo}) {
  return (
    <>
      <li>
        <Link href={`/gallery/[id]`} as={`/gallery/${photo.id}`}>
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

}

export default Bobbin

