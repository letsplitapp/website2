import * as React from "react"
import { Helmet } from "react-helmet"
import "../index.scss"

// Images
import HeroImg from '../images/hero.png'
import SelectImg from '../images/phone_1.png'
import ChoosePeopleImg from '../images/choose_people.png'
import SplitImg from '../images/split.png'
import GetPaidImg from '../images/get_paid.png'
import Easier from '../images/easier.jpg'
import Anything from '../images/anything.jpg'

// Components
import Nav from '../components/nav'
import Footer from '../components/footer'
import Mailchimp from '../components/mailchimp'

// styles
const primaryColor = "#3A41E8";

const pageStyles = {
  color: "#000",
  padding: 0,
  fontFamily: "Poppins, sans-serif",
}
const headingStyles = {
  color: primaryColor,
}

// markup
const IndexPage = () => {
  return (
   <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Let’s Split - Share expenses</title>
        <meta name="description" content="Let’s Split app makes it easier to come to terms with friends and family. Select past expenses, send split requests and receive your money quickly, all in one app." />
        <meta name="keywords" content="Let’s Split, Expense, Social expense, Mobile Payments, Mobile Payment App, Friends, Pay Your Friends, Startup, Share expense, Free, Simple, Split Bill, Split Check, Split Dinner, iPhone App, Android App, easy, Credit Card"></meta>
      </Helmet>
      <main style={pageStyles}>
        <Nav />
        <section className="bg-blue">
          <div className="container hero">
            <div className="column column-content">
              <div>
                <h1 style={headingStyles}>A simple way to split expenses with&nbsp;anyone</h1>
                <Mailchimp />
              </div>
            </div>
            <div className="column column-img">
              <img src={HeroImg} alt="iphone" />
            </div>
          </div>
        </section>
        <section>
          <div className="container inverse easier-section">
            <div className="column column-content">
              <p>Let’s Split app makes it easier to track and come to terms with shared expenses.</p>
              <p>Send and receive money with your roommates, loved ones or friends all in one app.</p>
            </div>
            <div className="column column-img">
              <div>
                <img src={Easier} alt="iphone" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container anything-section">
            <div className="column column-content">
              <div>
                <h3 className="color-black">Split anything</h3>
                <p>Split <span className="color-blue">any</span> and <span className="color-blue">all</span> expenses</p>
                <ul className="checkmark">
                  <li>Groceries</li>
                  <li>Utilities</li>
                  <li>Vacation rentals</li>
                </ul>
              </div>
            </div>
            <div className="column column-img">
              <div>
                <img src={Anything} alt="iphone" />
              </div>
            </div>
          </div>
        </section>
        <div className="container how-title">
          <h2 id="how" >How it works</h2>
        </div>
        <section>
          <div className="container inverse select-section">
            <div className="column column-content">
              <h3>Select an expense</h3>
              <p>Choose any past transaction from your credit card you wish to&nbsp;split.</p>
            </div>
            <div className="column column-img">
              <div className="select-img">
                <img src={SelectImg} alt="iphone" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue ">
          <div className="container choose-section">
            <div className="column column-content">
              <h3>Choose people</h3>
              <p>Select who you want to split the transaction&nbsp;with.</p>
            </div>
            <div className="column column-img">
              <div className="choose-img">
                <img src={ChoosePeopleImg} alt="iphone" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container inverse split-section">
            <div className="column">
              <h3>Split the expense</h3>
              <p>Send split request directly from the&nbsp;app.</p>
            </div>
            <div className="column column-img split-img">
              <img src={SplitImg} alt="iphone" />
            </div>
          </div>
        </section>
        <section className="bg-blue get-paid-custom-mb">
          <div className="container get-paid-section">
            <div className="column column-content">
              <h3>Get paid</h3>
              <p>Receive the money directly in your account.</p>
            </div>
            <div className="column column-img">
              <div className="get-paid-img">
                <img src={GetPaidImg} alt="iphone" />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </> 
  )
}

export default IndexPage