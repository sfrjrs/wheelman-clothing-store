import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'

// main site style
import './index.scss'

import logo from '../../../static/files/img/wheelman_logo.png'

const TemplateWrapper = ({ children, data }) => {
  let user
  if (typeof window !== 'undefined') {
    user = window.netlifyIdentity && window.netlifyIdentity.currentUser()
  }
  return (
    <StaticQuery query={pageQuery} render={data => (
      <div className='App'>
        <Helmet title={data.site.siteMetadata.title} />
        <div className='navbar navbar-expand-lg navbar-dark bg-primary'>
          <Container>
            <Link to='/' className='navbar-brand'>
              <img class="img-fluid" src={logo} alt={data.site.siteMetadata.title} />
            </Link>
            <ul className='nav navbar-nav'>
              <li className='nav-item'>
                <Link to='/about' className='nav-link'>About</Link>
              </li>
              <li className='nav-item'>
                <Link to='/tshirts' className='nav-link'>T-Shirts</Link>
              </li>
              <li className='nav-item'>
                <Link to='#' className='nav-link snipcart-checkout'>View Cart</Link>
              </li>
              {user && (
                <li className='nav-item'>
                  <a href='/admin' className='nav-link'>Admin</a>
                </li>
              )}
            </ul>
          </Container>
        </div>
        <div className='pageContent'>{children}</div>
      </div>
    )} />
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
