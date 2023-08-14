import * as React from "react"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import TagManager from 'react-gtm-module'

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  const tagManagerArgs = {
    gtmId: 'GTM-N2XT8HB'
  }

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Let’s Split - Share expenses</title>
        <meta name="description" content="Let’s Split app makes it easier to come to terms with friends and family. Select past expenses and send split requests to the people you want to share with, all in one app." />
        <meta name="keywords" content="Let’s Split, Expense, Social expense, Mobile Payments, Mobile Payment App, Friends, Pay Your Friends, Startup, Share expense, Free, Simple, Split Bill, Split Check, Split Dinner, iPhone App, Android App, easy, Credit Card"></meta>
      </Helmet>
      <main style={pageStyles}>
        <title>Not found</title>
        <h1 style={headingStyles}>Page not found</h1>
        <p style={paragraphStyles}>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </main>
    </>
  )
}

export default NotFoundPage
