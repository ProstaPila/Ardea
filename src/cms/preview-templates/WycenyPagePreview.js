import React from 'react'
import PropTypes from 'prop-types'
import { WycenyPageTemplate } from '../../templates/wyceny-post'
import '../../layouts/all.sass'

const WycenyPagePreview = ({ entry, widgetFor }) => (
  <WycenyPageTemplate
  title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    thumbnail={entry.getIn(['data', 'thumbnail' ])}
    postPath={entry.getIn(['data', 'slug'])}
    slug={entry.getIn(['fields', 'slug'])}
    description={entry.getIn(['data', 'description'])}
    helmet={entry.getIn(['data', 'title'])}
    postNode={{
      frontmatter: {
        description: entry.getIn(['data', 'description']),
        title: entry.getIn(['data', 'title']),
        thumbnail: entry.getIn(['data', 'thumbnail' ])  
      }
      

      }}
  />
)


WycenyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WycenyPagePreview
