import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import thumbnail from '../img/background.jpg'


export default class WycenyPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: wyceny } = data.allMarkdownRemark
    
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
            Wyceny
              </div>
          </div>
  </div>
  </div>
  </div>
</section>
      <section className="section">
        <div className="container">
          
          {wyceny
            .filter(wyceny => wyceny.node.frontmatter.templateKey === 'wyceny-post')
            .map(({ node: wyceny}) => (
              <div
                className="content"
                style={{ border: '1px solid #b8d8e7', padding: '2em 4em' }}
                key={wyceny.id}
              >
                <p>
                  <Link className="has-text-primary" to={wyceny.fields.slug}>
                    {wyceny.frontmatter.title}
                  </Link>
                  
                  
                </p>
                <p>
                  {wyceny.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={wyceny.fields.slug}>
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

WycenyPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query WycenyQuery {
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
