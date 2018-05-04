import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import config from "../../data/SiteConfig";
import SEO from '../components/SEO/seo';

export const SpecjalistycznePostTemplate = ({
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

SpecjalistycznePostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const SpecjalistycznePost = ({ data }) => {
  const { markdownRemark: specjalistyczne } = data

  return (
    <SpecjalistycznePostTemplate
      content={specjalistyczne.html}
      contentComponent={HTMLContent}
      description={specjalistyczne.frontmatter.description}
      helmet={<Helmet title={`${specjalistyczne.frontmatter.title} | ${config.siteTitle}`}/>}
      title={specjalistyczne.frontmatter.title}
      slug={specjalistyczne.fields.slug}
      thumbnail={specjalistyczne.frontmatter.thumbnail}
      postNode={specjalistyczne}
      postPath={specjalistyczne.fields.slug}
    />
  )
}

SpecjalistycznePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default SpecjalistycznePost

export const pageQuery = graphql`
  query SpecjalistycznePostByID($id: String!) {
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
