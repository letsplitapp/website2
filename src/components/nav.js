import React, { useState, useEffect }from "react"

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
                                <a href="https://jpbelley.github.io/qa/">Let’s Split</a>
                            </div>
                        </div>
                        <div className={`right${toggle ? ' open' : ''}`}>
                            <a href="https://jpbelley.github.io/qa/#how">How it works</a>
                            <a href="https://jpbelley.github.io/qa//support">Support</a>
                        </div>
                    </div>
                </header>
            </>
    )
}

export default Nav
