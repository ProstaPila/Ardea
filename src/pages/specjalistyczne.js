import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import thumbnail from '../img/background.jpg'


export default class SpecjalistycznePage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: specjalistyczne } = data.allMarkdownRemark
    
    return (
      <div>
      <section 
        className="hero is-info is-small " style={{
        backgroundImage: "url(" + thumbnail + ")",
        
      }}>
  <div className="hero-body">
    <div className="container">
      <div className="columns">
           <div className="column"> 
            <div className="mytitle">
            Specjalistyczne
              </div>
          </div>
  </div>
  </div>
  </div>
</section>
      <section className="section">
        <div className="container">
          
          {specjalistyczne
            .filter(specjalistyczne => specjalistyczne.node.frontmatter.templateKey === 'specjalistyczne-post')
            .map(({ node: specjalistyczne}) => (
              <div
                className="content"
                style={{ border: '1px solid #b8d8e7', padding: '2em 4em' }}
                key={specjalistyczne.id}
              >
                <p>
                  <Link className="has-text-primary" to={specjalistyczne.fields.slug}>
                    {specjalistyczne.frontmatter.title}
                  </Link>
                  
                  
                </p>
                <p>
                  {specjalistyczne.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={specjalistyczne.fields.slug}>
                    Czytaj Więcej
                  </Link>
                </p>
              </div>
            ))}
        </div>
      </section>
      </div>
    )
  }
}

SpecjalistycznePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query SpecjalistyczneQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            
          }
        }
      }
    }
  }
`
