import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import thumbnail from '../img/background.jpg'


export default class ObslugaPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: obsluga } = data.allMarkdownRemark
    
    return (
      <div>
      <section 
        className="hero is-info is-small " style={{
        background: "url(" + thumbnail + ")",
        backgroundSize: "cover",
        backgroundPosition: "bottom"
      }}>
  <div className="hero-body">
    <div className="container">
      <div className="columns">
           <div className="column"> 
            <div className="mytitle">
            Nasze Obsluga
              </div>
          </div>
  </div>
  </div>
  </div>
</section>
      <section className="section">
        <div className="container">
          
          {obsluga
            .filter(obsluga => obsluga.node.frontmatter.templateKey === 'obsluga-post')
            .map(({ node: obsluga}) => (
              <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={obsluga.id}
              >
                <p>
                  <Link className="has-text-primary" to={obsluga.fields.slug}>
                    {obsluga.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  
                </p>
                <p>
                  {obsluga.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={obsluga.fields.slug}>
                    Czytaj Więcej →
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

ObslugaPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query ObslugaQuery {
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
