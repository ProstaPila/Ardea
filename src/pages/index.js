import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Slider from "react-alice-carousel"
import config from "../../data/SiteConfig"
import Slide from '../components/Slide/Slide'

export default class IndexPage extends React.Component {
  state = {
    currentIndex:0,
    items: [1,2,3,4,5]
  };

  slideTo = (i) => this.setState({ currentIndex: i });
  
      onSlideChanged = (e) => this.setState({ currentIndex: e.item });
  
      slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });
  
      slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });
  
  render() {


    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { currentIndex } = this.state;
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      }
    };    
    const Slides = posts.filter(post => post.node.frontmatter.templateKey === 'projekt-post')
    .map(({ node: post, i }) => (
      <div key={i + 1} ><Slide
        key={i}
        myKey={post.fields.slug}
        thumbnail={post.frontmatter.thumbnail}
        title={post.frontmatter.title} 
        date={post.frontmatter.date}
        excerpt= {post.excerpt}
        slug={post.fields.slug}
        description={post.frontmatter.description}   
      /></div>
      )  
      )

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
              <div className="catchphrase">Obsługa prawna oraz wycena
              </div>
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
                     <h1 className="has-text-weight-bold is-size-2">Nasze Projekty</h1>
          </div>
          </div>
          </div>
          
          
          <div className="columns">
           
          <Slider
          
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={false}
        responsive={responsive}
        dotsDisabled={true}
        infinite={true}
        onSlideChange={this.onSlideChange} >

          {Slides}
            </Slider>
       </div></div>
        </section>

      
      <section className="section">
      <div className="container">
      <div className="columns">
           <div className="column">

             {posts
            .filter(post => post.node.frontmatter.templateKey === 'cele-page')
            .map(({ node: post}) => (
              <div
                className="content mycontent"
                key={post.id}
              >
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
                    Czytaj Więcej →
                  </Link>
                </p>
              </div>
            ))}

            </div>

            <div className="column">

{posts
.filter(post => post.node.frontmatter.templateKey === 'ofundacji-page')
.map(({ node: post }) => (
 <div
   className="content mycontent"
   key={post.id}
 >
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
       Czytaj Więcej →
     </Link>
   </p>
 </div>
))}

</div>
            </div>


      <div className="columns">
           <div className="column">

             </div></div>
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
      
        
        node {
          
          excerpt(pruneLength: 400)
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
            date(formatString: "MMMM DD, YYYY", locale: "pl")
            
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
