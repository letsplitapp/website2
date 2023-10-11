import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import "../index.scss"
import TagManager from 'react-gtm-module'


// Images
import HeroImg from '../images/hero_new.png'
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
import Og from '../images/OG.png'
import QR from '../images/qr.png'
import CreateGroup from '../images/create_group.png'
import AddExpense from '../images/add_expenses.png'
import SettleUp from '../images/settle_up.png'
import Track from '../images/track_balances.png'

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
        <meta name="description" content="Manage. Share. Pay. Get Paid. Let's Split makes it easy to split bills and settle up, so you can effortlessly manage expenses with friends and family. Spend more time having fun and less time managing expenses - try Let's Split today!" />
        <meta name="keywords" content="Let’s Split, Expense, Social expense, Mobile Payments, Mobile Payment App, Friends, Pay Your Friends, Startup, Share expense, Free, Simple, Split Bill, Split Check, Split Dinner, iPhone App, Android App, easy, Credit Card"></meta>
        <meta property="og:title" content="Let’s Split - Share expenses" />
        <meta property="og:description" content="Effortlessly manage group expenses and payments with Let's Split. Easily manage expenses, assign to members, and settle up. Try it today!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={Og}/>
        <meta property="og:url" content="https://letsplit.com/" />
        <meta property="og:site_name" content="Let’s Split - Share expenses"/>


      </Helmet>
      <main style={pageStyles}>
        <Nav />
        <section className="bg-blue">
          <div className="container hero" id="signup">
            <div className="column column-content">
              <div>
                <h1 style={headingStyles}>Expense Sharing Made Simple</h1>
                <div className="header-description">
                  <p> <span className="color-blue">Share. Track. Split. Pay. Join the Let's Split community today.</span></p>
                </div>
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
              <p>Track, send and receive money with your roommates, loved ones or friends all in one app.</p>
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
              <h3>Create a Group</h3>
              <p>Get started by creating a group with your friends, roommates, or travel companions. Groups serve as the central hub for managing all shared expenses, whether it's for trips, parties, or everyday bills.</p>
              <div className="button">
                <a className="button-blue" href="#signup">Download</a>
              </div>
            </div>
            <div className="column column-img">
              <div className="select-img">
                <img src={CreateGroup} alt="Create a group" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue ">
          <div className="container choose-section">
            <div className="column column-content">
              <h3>Add Expenses</h3>
              <p>Whenever someone in your group incurs an expense, simply enter the date, amount, and a brief description in the app. No more lost receipts or manual calculations.</p>
              <div className="button">
                <a className="button-blue" href="#signup">Download</a>
              </div>
            </div>
            <div className="column column-img">
              <div className="choose-img">
                <img src={AddExpense} alt="Add expenses to a group" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container inverse split-section">
            <div className="column column-content">
              <h3>Track Balances</h3>
              <p>Our app tracks each member's share of the expenses and calculates who owes what to whom. Say goodbye to confusion and hello to clarity.</p>
              <div className="button">
                <a className="button-blue" href="#signup">Download</a>
              </div>
            </div>
            <div className="column column-img split-img">
              <img src={Track} alt="Track balances within a group" />
            </div>
          </div>
        </section>
        <section className="bg-blue get-paid-custom-mb">
          <div className="container get-paid-section">
            <div className="column column-content">
              <h3>Settle Up Securely</h3>
              <p>When it's time to settle up, Let's Split offers an integrated payment system for secure, direct transactions through the app. This ensures that everyone gets reimbursed quickly and conveniently.</p>
              <div className="button">
                <a className="button-blue" href="#signup">Download</a>
              </div>
            </div>
            <div className="column column-img">
              <div className="get-paid-img">
                <img src={SettleUp} alt="Integrated payment system" />
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
