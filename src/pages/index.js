import React, { useState } from "react"
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
import AppStore from '../images/app_store.png'
import AppStoreQR from '../images/qrcode-apple.png'
import GooglePlay from '../images/google_play.png'
import GooglePlayQR from '../images/google-qr.png'
import QR from '../images/qr.png'

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
const headingStyles = {
  color: primaryColor,
}

// markup
const IndexPage = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

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
          <div className="container hero" id="signup">
            <div className="column column-content">
              <div>
                <h1 style={headingStyles}>A simple way to split expenses with&nbsp;anyone</h1>
                <div className="app-button desktop">
                  <span onClick={() => setisModalOpen(true)}><img src={AppStore} /></span>
                  <span href="" onClick={() => setisModalOpen(true)}><img src={GooglePlay} /></span>
                </div>
                <div className="app-button mobile">
                  <a href="https://apps.apple.com/ca/app/lets-split/id1625176396?itsct=apps_box_badge&amp;itscg=30200" target="_blank"><img src={AppStore} /></a>
                  <a href="https://play.google.com/store/apps/details?id=com.letsplit.app&referrer=utm_source%3Dwebsite%26utm_medium%3Dheader%26utm_content%3Dmobile" target="_blank"><img src={GooglePlay} /></a>
                </div>
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
              <p>Choose any past transaction from your credit card you wish to split. No more manual entries, all your group expenses are displayed, ready to be split.</p>
              <div className="button">
                <a className="button-blue" href="#signup">Download</a>
              </div>
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
              <p>Select who you want to split the transaction with. You can even create groups if you have multiples expenses to split with them.</p>
              <div className="button">
                <a className="button-blue" href="#signup">Download</a>
              </div>
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
              <p>Send split requests in 3 clicks. Your friends will be notified and able to repay you through the app.</p>
              <div className="button">
                <a className="button-blue" href="#signup">Download</a>
              </div>
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
              <p>Receive their payments directly in your bank account. Let’s Split makes sharing expenses and getting paid back - easy.</p>
              <div className="button">
                <a className="button-blue" href="#signup">Download</a>
              </div>
            </div>
            <div className="column column-img">
              <div className="get-paid-img">
                <img src={GetPaidImg} alt="iphone" />
              </div>
            </div>
          </div>
        </section>
        {isModalOpen && <div className="popup-overlay" onClick={() => setisModalOpen(false)}>
          <div className="popup">
            <h3>Scan the QR Code</h3>
            <p>You’ll be sent to the app store.</p>
            <div className="app-qr">

              <div className="app-qr__single apple-qr">
                <img src={AppStoreQR} />
                <div className="app-button">
                  <span><img src={AppStore} /></span>
                </div>
              </div>

              <div className="app-qr__single google-qr">
                <img src={GooglePlayQR} />
                <div className="app-button">
                  <span><img src={GooglePlay} /></span>
                </div>
              </div>
            </div>
          </div>
        </div>}

        <Footer />
      </main>
    </> 
  )
}

export default IndexPage
