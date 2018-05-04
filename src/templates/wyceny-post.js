import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import config from "../../data/SiteConfig";
import SEO from '../components/SEO/seo';

export const WycenyPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  thumbnail,
  slug,
  postNode,
  postPath
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
    {helmet}
    <SEO postPath={slug} postNode={postNode} postSEO />
    <section 
  className="hero is-info is-medium " style={{
    background: "url(" + thumbnail + ")",
    backgroundSize: "cover",
    backgroundPosition: "bottom"
      }}>
  <div className="hero-body">
    <div className="container">
      <div className="columns">
           <div className="column"> 
            <div className="mytitle">
              {title}
              
              </div>
              <p>{description}</p>
          </div>
  </div>
  </div>
  </div>
</section>
    <section className="section">
      
    
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
          
            
            <PostContent content={content} />
           
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

WycenyPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const WycenyPost = ({ data }) => {
  const { markdownRemark: wyceny } = data

  return (
    <WycenyPostTemplate
      content={wyceny.html}
      contentComponent={HTMLContent}
      description={wyceny.frontmatter.description}
      helmet={<Helmet title={`${wyceny.frontmatter.title} | ${config.siteTitle}`}/>}
      title={wyceny.frontmatter.title}
      slug={wyceny.fields.slug}
      thumbnail={wyceny.frontmatter.thumbnail}
      postNode={wyceny}
      postPath={wyceny.fields.slug}
    />
  )
}

WycenyPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default WycenyPost

export const pageQuery = graphql`
  query WycenyPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
            slug
          }
      frontmatter {
        title
        thumbnail
        description
        
      }
    }
  }
`
