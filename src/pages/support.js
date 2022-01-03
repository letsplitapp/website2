import * as React from "react"
import "../index.scss"

// Images
import HeroImg from '../images/hero.png'
import SelectImg from '../images/phone_1.png'
import ChoosePeopleImg from '../images/choose_people.png'
import SplitImg from '../images/split.png'
import GetPaidImg from '../images/get_paid.png'
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
const headingStyles = {
    color: primaryColor,
}

// markup
const SupportPage = () => {
    return (
        <main style={pageStyles}>
            <title>Home Page</title>
            <Nav />

            <div className="container support-title">
                <h3 className="h-center">Still have questions?</h3>
            </div>
            <section>
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
    )
}

export default SupportPage
