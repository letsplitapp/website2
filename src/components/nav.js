import React, { useState, useEffect }from "react"
import Logo from '../images/icon.png'

// Nav
const Nav = () => {
    const [toggle, setToggle] = useState(false);

    return (
            <>
                <header>
                    <div className={`burger${toggle ? ' open' : ''}`} onClick={() => setToggle(!toggle)} >
                        <div className="bars"></div>
                    </div>
                    <div className="container">
                        <div className="left">
                            <div className="logo">
                                <a href="../">
                                    <img src={Logo} alt="Let's split" />
                                    Let’s Split
                                </a>
                            </div>
                        </div>
                        <div className={`right${toggle ? ' open' : ''}`}>
                            <a href="https://www.letsplit.com/#how">How it works</a>
                            <a href="./support">Support</a>
                        </div>
                    </div>
                </header>
            </>
    )
}

export default Nav
