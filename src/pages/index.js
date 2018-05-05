import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import config from "../../data/SiteConfig"


export default class IndexPage extends React.Component {

  
  render() {


    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    

    return (
      

      <div>
      <Helmet>
      <title> Ardea | Kanceleria Prawna Nieruchomości </title>
      <meta property="og:url"                content="Ardea, Kancelaria Prawna Nieruchomości" />
      <meta property="og:type"               content="website" />
      <meta property="og:title"              content="Ardea, Kancelaria Prawna Nieruchomości" />
      <meta property="og:description"        content="Ardea, Kancelaria Prawna Nieruchomości" />
      <meta property="og:image"              content={config.siteLogo} />

      <meta name="twitter:title" content="Ardea, Kancelaria Prawna Nieruchomości" />
      <meta name="twitter:description" content="Ardea, Kancelaria Prawna Nieruchomości" />
      <meta property="og:description"  content="Ardea, Kancelaria Prawna Nieruchomości" />
      <meta name="twitter:image" content={config.siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />

      </Helmet>
      

      <section className="hero is-fullheight myhero">
       <div className="hero-body">
        <div className="container has-text-centered">
          <div className="biglogo">
            <div className="abovelogo" >Kancelaria Prawna Nieruchomości</div>
            <div className="idea">ardea</div>
            <div className="catchphrase">Obsługa prawna oraz wycena</div>
            <div className="fund">chronimy wartość i własność nieruchomości</div>
          </div>
        </div>
       </div> 
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
             <div className="column">
                <div className="content">
                  <h1 className="has-text-weight-bold is-size-1 underline">Wycena</h1>
                </div>
             </div>
          </div>
          <div className="columns">
            {posts
              .filter(post => post.node.frontmatter.templateKey === 'wyceny-post')
              .map(({ node: post }) => (
                <div className="column" key={post.id}>
                  <div className="content mycontent" >
                    <p>
                      <Link className="has-text-primary" to={post.fields.slug}>
                       {post.frontmatter.title}
                      </Link>
                    </p>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button is-small" to={post.fields.slug}>
                        Czytaj Więcej
                      </Link>
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          
          <div className="columns">
             <div className="column">
                <div className="content">
                  <h1 className="has-text-weight-bold is-size-1 underline">Specjalistyczne</h1>
                </div>
             </div>
          </div>

          <div className="columns">     
            {posts
              .filter(post => post.node.frontmatter.templateKey === 'specjalistyczne-post')
              .map(({ node: post }) => (
                <div className="column" key={post.id}>
                  <div className="content mycontent">
                    <p>
                      <Link className="has-text-primary" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
     
                    </p>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button is-small" to={post.fields.slug}>
                        Czytaj Więcej 
                      </Link>
                    </p>
                  </div>
                </div>
            ))}

          </div>
        </div>
     </section>

     <section className="section">
        <div className="container">
          
          <div className="columns">
             <div className="column">
                <div className="content">
                  <h1 className="has-text-weight-bold is-size-1 underline">Obsługa</h1>
                </div>
             </div>
          </div>

          <div className="columns">     
            {posts
              .filter(post => post.node.frontmatter.templateKey === 'obsluga-post')
              .map(({ node: post }) => (
                <div className="column" key={post.id}>
                  <div className="content mycontent" >
                    <p>
                      <Link className="has-text-primary" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
     
                    </p>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button is-small" to={post.fields.slug}>
                        Czytaj Więcej
                      </Link>
                    </p>
                  </div>
                </div>
            ))}

          </div>
        </div>
     </section>

    <section className="section"> 
      <div className="container">

        <div className="columns">
             <div className="column">
                <div className="content">
                  <h1 className="has-text-weight-bold is-size-1 underline">O Nas</h1>
                </div>
             </div>
          </div>

        <div className="columns">
          <div className="column">
            {posts
              .filter(post => post.node.frontmatter.templateKey === 'onas-page')
              .map(({ node: post}) => (
                <div className="content mycontent" key={post.id} >
                  
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Czytaj Więcej 
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>

      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
query IndexQuery {
    allMarkdownRemark{
      edges {
      
        
        node {
          
          excerpt(pruneLength: 300)
          id
          children {
            id
            parent {
              id
            }
            
            
          }
          fields {
            slug
          }
          frontmatter {
            
            title
            thumbnail
            description
            templateKey
            
            
          }
        }
      }
    }
   
  
    imageSharp (id: {regex: "/background.jpg/"}) {
    id
    children {
      id
    }
    sizes(maxWidth: 1920, quality: 90, traceSVG: { color: "#3ba3d4" })  {
    	...GatsbyImageSharpSizes_tracedSVG
    }
    
          
          
        
  }
}
`
