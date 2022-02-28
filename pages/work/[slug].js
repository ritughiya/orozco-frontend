import { sanityClient, urlFor} from "../../sanity"
import Image from "../../components/Image"
import Link from "next/link"
import Quickticker from '../../components/Quickticker'
import Quicklogo from '../../components/Quicklogo'
import Quickinventory from '../../components/Quickinventory.js'
import Quicklabel2 from '../../components/Quicklabel2.js'


const Work = ({
    mainImage,
  caption,
  year,
  medium,
  dimensions,
  editionDetails,
  alt,
  slug
}) => {

  return (
    <div className="container WorkContainer">
      <Quicklogo />
       <Quickinventory />
       <Quickticker />
       {/* <Quicklabel2 /> */}
       <div className="imageContainer">
       <img src={urlFor(mainImage).url()} alt={alt}/>
       </div>
       <div className="textContainer">
        <div>{caption}, {year}</div>
        <div>{medium}</div>
        <div>{dimensions}</div>
        <div>{editionDetails}</div>

      </div>
    </div>
  )
}

export const getServerSideProps = async (pageContext) => {
    const pageSlug = pageContext.query.slug
  
    const query = `*[ _type == "work" && slug.current == $pageSlug][0]{
      mainImage,
      caption,
      year,
      medium,
      dimensions,
      editionDetails,
      alt
    }`
  
    const work = await sanityClient.fetch(query, { pageSlug })
  
    if (!work) {
      return {
        props: null,
        notFound: true,
      }
    } else {
      return {
        props: {
          mainImage: work.mainImage,
          caption: work.caption,
          year: work.year,
          medium: work.medium,
          dimensions: work.dimensions,
          editionDetails: work.editionDetails,
          alt: work.alt,
        },
      }
    }
  }

export default Work