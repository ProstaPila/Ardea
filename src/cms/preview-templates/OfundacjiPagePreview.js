import React from 'react'
import PropTypes from 'prop-types'
import { OfundacjiPageTemplate } from '../../templates/ofundacji-page'

const OfundacjiPagePreview = ({ entry, widgetFor }) => (
  <OfundacjiPageTemplate
  title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    thumbnail={entry.getIn(['data', 'thumbnail' ])}
    postPath={entry.getIn(['data', 'slug'])}
    cover={entry.getIn(['data', 'cover' ])}
    postNode={{
      frontmatter: {
        description: entry.getIn(['data', 'description']),
        tags: entry.getIn(['data', 'tags']),
        title: entry.getIn(['data', 'title'])    

      }
      

      }}
  />
)

OfundacjiPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default OfundacjiPagePreview
