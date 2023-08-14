import * as React from "react"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import "../index.scss"

// Images
import SupportImg from '../images/support.png'

// Components
import Nav from '../components/nav'
import Footer from '../components/footer'

// styles
const primaryColor = "#3A41E8";

const pageStyles = {
    color: "#000",
    padding: 0,
    fontFamily: "Poppins, sans-serif",
}

// markup
const SupportPage = () => {
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
                <title>Home Page</title>
                <Nav />

                <div className="container support-title">
                    <h3 className="h-center">Still have questions?</h3>
                </div>
                <section className="support-section">
                    <div className="container inverse">
                        <div className="column column-content column-start">
                            <form action="https://formspree.io/f/xvodoewq" method="post">
                                <div className="input-container">
                                    <label>First name</label>
                                    <input type="text" name="fname" placeholder="First name" />
                                </div>
                                <div className="input-container">
                                    <label>Last name</label>
                                    <input type="text" name="lname" placeholder="Last name" />
                                </div>
                                <div className="input-container">
                                    <label>Email</label>
                                    <input type="text" name="email" placeholder="Email" />
                                </div>
                                <div className="input-container">
                                    <label>Questions or comments*</label>
                                    <textarea name="name" placeholder="Questions or comments*"></textarea>
                                </div>
                                <input type="submit" name=""
                                    value="Submit" />
                            </form>
                        </div>
                        <div className="column column-img">
                            <img src={SupportImg} alt="Man with computer" />
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default SupportPage
