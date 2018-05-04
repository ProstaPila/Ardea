import React from 'react'
import PropTypes from 'prop-types'
import { WycenyPostTemplate } from '../../templates/wyceny-post'
import '../../layouts/all.sass'

const WycenyPostPreview = ({ entry, widgetFor }) => (
  <WycenyPostTemplate
  title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    thumbnail={entry.getIn(['data', 'thumbnail' ])}
    postPath={entry.getIn(['data', 'slug'])}
    slug={entry.getIn(['data', 'slug'])}
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


WycenyPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WycenyPostPreview
