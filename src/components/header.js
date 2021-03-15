import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AppBar } from '@material-ui/core';
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }} class={"MuiPaper-root MuiAppBar-root MuiAppBar-positionFixed MuiAppBar-colorPrimary jss91 mui-fixed MuiPaper-elevation4"}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
