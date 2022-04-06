/* eslint no-console:0 no-alert:0 */
import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class IndexPage extends React.Component {
    state = {
        name: null,
        email: null,
        isModalOpen: false
    }

    _handleChange = e => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        })
        this.setState({
            [`${e.target.name}`]: e.target.value,
        })
    }

    _handleSubmit = e => {
        e.preventDefault()

        // console.log('submit', this.state)

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`)

                if (result !== 'success') {
                    throw msg
                }
                // alert(msg)
                this.setState({ isModalOpen: true })
            })
            .catch(err => {
                console.log('err', err)
                // alert(err)
            })
    }

    _onClickButton = () => {
        this.setState({ isModalOpen: false })
    }

    render() {

        const Popup = () => {
            return (
                <div className='popup-overlay'>
                    <div className='popup'>
                        <h3>Well done!</h3>
                        <p>We have added your email address to the signup queue. We will update you soon with your invite.</p>
                        <button className='button-blue' onClick={this._onClickButton}>OK</button>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div>
                    <form id='form1' className='mailchimp-form' onSubmit={this._handleSubmit}>
                        <input
                            className='mailchimp-email'
                            type="email"
                            onChange={this._handleChange}
                            placeholder="Your email"
                            name="email"
                        />
                        <button className="mailchimp-submit button-blue" type="submit" form="form1" value="Submit">Get early access</button>
                    </form>
                </div>
                {/* <Popup /> */}
                {this.state.isModalOpen && <div className='popup-overlay'>
                    <div className='popup'>
                        <h3>Well done!</h3>
                        <p>We have added your email address to the signup queue. We will update you soon with your invite.</p>
                        <button className='button-blue' onClick={this._onClickButton}>OK</button>
                    </div>
                </div>}
            </div>
        )
    }
}