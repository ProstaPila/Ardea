import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import config from "../../data/SiteConfig";
import SEO from '../components/SEO/seo';

export const ObslugaPostTemplate = ({
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
    backgroundImage: "url(" + thumbnail + ")",
    
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

ObslugaPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const ObslugaPost = ({ data }) => {
  const { markdownRemark: obsluga } = data

  return (
    <ObslugaPostTemplate
      content={obsluga.html}
      contentComponent={HTMLContent}
      description={obsluga.frontmatter.description}
      helmet={<Helmet title={`${obsluga.frontmatter.title} | ${config.siteTitle}`}/>}
      title={obsluga.frontmatter.title}
      slug={obsluga.fields.slug}
      thumbnail={obsluga.frontmatter.thumbnail}
      postNode={obsluga}
      postPath={obsluga.fields.slug}
    />
  )
}

ObslugaPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ObslugaPost

export const pageQuery = graphql`
  query ObslugaPostByID($id: String!) {
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
