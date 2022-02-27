import { sanityClient } from "../../sanity"
import Image from "../../components/Image"
import Link from "next/link"

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
    <div className="container">
        {caption}
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