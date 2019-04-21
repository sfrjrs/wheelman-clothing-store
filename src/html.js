    
import React from 'react'

export default class HTML extends React.Component {
  render () {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
          <script src='https://identity.netlify.com/v1/netlify-identity-widget.js' />
          <script src='/admin/netlify_redirect.js' />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id='___gatsby'
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key="MWU3MzIwMGItYjRhZC00ODExLWIxNDAtYTFiMzQwMDBhODZiNjM2OTE0MTY4MTQzOTc1MjE0"></script>
      </html>
    )
  }
}