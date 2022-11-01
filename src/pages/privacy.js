import * as React from "react"
import { Helmet } from "react-helmet"
import "../index.scss"

// Images


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
const PrivacyPage = () => {
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

                <div className="container privacy-title">
                    <h3 className="h-center">Privacy Policy</h3>
                </div>
                <section className="privacy-section">
                        <div className="text-box">
                           <p>Last update: February 17 2022</p>
                           
                                
                           <p>9426-9081 Quebec Inc. f.a.s. Let’s Split (“<strong>Let’s Split</strong>”, “<strong>our</strong>”, “<strong>us</strong>”, “<strong>we</strong>”), a company offering a simple way to split expenses with anyone, takes your privacy and the protection of your personal information seriously. This Privacy Policy (the “<strong>Policy</strong>”) describes our data protection practises, the types of Personal Information we may receive or collect from you and of how we use, disclose, store and secure it. By doing so, you will be able to make wise and informed choices.</p>
                            <p>This Policy applies to our application available through the various applications markets (our “<strong>Application</strong>”). However, we wish to draw your attention to the fact that the rights and obligations described in this Policy do not cover third-party websites that may be linked to or  mentioned on our Application as well as any third-party services that may be used within our Application. These third-party websites and services have their own privacy policies and we encourage you to read them carefully before accessing them, using them or otherwise providing Personal Information to them.</p>

                                
                                    <h4>1.   PERSONAL INFORMATION</h4>
                                

                                <p>For the purpose of this Policy, “<strong>Personal Information</strong>” means any information about an identifiable individual, which includes information that 
                                    can be used on its own or with other information to identify, contact, or locate a single person. In general, Personal Information does not include business contact information, such as your name, title, or business contact information.</p>

                                <h4>2.   WHAT PERSONAL INFORMATION DO WE COLLECT?</h4>

                                <p>The Personal Information that we collect may include, but is not limited to:</p>
                                    
                                    <p><ul>    
                                        <li>Your contact information, such as a name and last name, birthdate, email address, telephone number, postal address, country of residence in order to identify and correspond with you;</li>
                                        <li>Financial information such as banking information or credit card information to provide you the services through the Application</li>
                                        <li>Your login information such as your username, email address and password;</li>
                                        <li>Marketing information and communication preferences such as comments or survey responses;</li>
                                        <li>The way you use the Application including the features you use, the actions you take, the time, frequency and duration of your activities;</li>
                                        <li>Device and geolocation information to allow us to provide location-based services and to ensure that the Application remains compatible with all possible devices;</li>
                                        <li>Any other Personal Information that you have provided to us, for example, expenses descriptions and amounts, group names, payments, reminders, receipt images, notes, memos or any other information that you share while using our Application.</li>
                                    </ul>
                                </p>
                                <h4>3.   HOW DO WE COLLECT YOUR PERSONAL INFORMATION?</h4>
                                    <p>Directly from you</p>
                                    <p>Generally, we will collect the Personal Information that we need directly from you, for example when you use the Application, when you create an account or when you communicate with us. We may also collect information relating to your use of the Application including technical information about your visits, the average length of a visit, the action carried out on the Application.
                                    We might also collect technical information through the use of Cookies. For more information in this regard, we invite you to read the Section, “<a href="#how_do_we_use_cookies">How do we use Cookies?</a>”.</p>
                                    <p>With a legal basis such as your consent</p>
                                    <p>The legal basis to process your Personal Information is typically because you have consented to it, unless applicable laws permit another applicable legal basis (e.g., for the purpose of complying with our legal obligations, where necessary for establishing, exercising, or defending a legal claim, a prospective legal claim, legal proceedings or prospective legal proceedings.). If you are a child over the age of fourteen (14) years and have not yet reached the age of majority in your country of residence, your legal guardian may have to consent to the collection of your Personal Information on your behalf.</p>
                                    <p>From third party services</p>
                                    <p>We may receive information about you from third parties and affiliates that help us provide, support, and secure our Application. In general, data shared with Let’s Split in this manner will be treated under the same privacy restrictions as any other data shared with Let’s Split.</p>
                                    <p>Refusal of collection and withdrawal of your consent</p>
                                    <p>You have the right, if you so choose, to refuse the processing of your Personal Information. You may also, at any time, and subject to reasonable notice and applicable legal or contractual restrictions, withdraw your consent (if any) to the processing of your Personal Information in our possession by contacting us. You should be aware, however, that if you choose not to provide us with your Personal Information, this may prevent you, for example, from using the Application or certain features, as this information is essential for such use. You may contact us as set forth in the Section “<a href="#how_to_contact_us">How to contact us?</a>” to address any issue thereof.
                                    </p>
                                <h4>4.   WHY DO WE COLLECT YOUR PERSONAL INFORMATION?</h4>
                                <p>For specific and limited Purposes</p>
                                    <p>Let’s Split generally collects your Personal Information to:<br></br>
                                    <ul>
                                    <li>Establish and manage our relationship with you;</li>
                                    <li>Provide and maintain the services requested, namely the access to the Application, the management of expenses, payments, groups or records;</li>
                                    <li>Resolve disputes and troubleshoot problems;</li>
                                    <li>To allow other users to find you;</li>
                                    <li>Perform research and development projects, including for statistical purposes;</li>
                                    <li>Fulfill your requests for certain products and services;</li>
                                    <li>Detect and protect against errors, fraud, or other criminal activities;</li>
                                    <li>Verify your information for internal security purposes;</li>
                                    <li>To verify your identity in the event you contact us for assistance;</li>
                                    <li>Compare information for accuracy and verify it with third parties;</li>
                                    <li>Improve the Application and your customer experience;</li>
                                    <li>Respond to your requests for information;</li>
                                    <li>Respond to your support requests;</li>
                                    <li> Enable business development and marketing, including informing our current and future customers about our new offerings, with the prior</li>
                                    <li>consent of the individual concerned;</li>
                                    <li>Enforce our Terms of Use or any other terms of service; and</li>
                                    <li>Perform other duties as required by law.</li>
                                    </ul></p>
                                    <p>(collectively, the “<strong>Purposes</strong>”).</p>
                                    <p>For secondary purposes</p>
                                    <p>Depending on the circumstances, Let’s Split may also aggregate and anonymize Personal Information that you have provided to create statistical data which Let’s Split may use  for market research, to improve the Application, examine trends and interests or train machine learning algorithms. Such statistical data does not include any Personal Information.
                                </p>
                                <h4>5.   HOW DO WE SHARE AND DISCLOSE YOUR PERSONAL INFORMATION?</h4>
                                <p>Let’s Split does not rent nor sell any of your Personal Information to third parties and will not share it with third parties without your consent unless it is necessary to do so by law or for the Purposes as set forth below.</p>
                                    <p>With employees</p>
                                    <p>In the course of their work, employees may need to access your Personal Information, for example, when you contact us or request support. Their access is limited to what is necessary to perform their duties.</p>
                                    <p>With strategic partners</p>
                                    <p>Let’s Split may share your Personal Information with its partners to facilitate its business, such as developers, payment processors and hosting service providers. In connection with these business operations, our service providers may have access to your Personal Information for a limited time in connection with these business activities. Where Let’s Split utilizes third parties for the processing of any Personal Information, Let’s Split strives to implement reasonable contractual and technical protections in order for such third parties to keep all Personal Information they process strictly confidential. Please note that these third parties may be located elsewhere than your location in which case, commercially reasonable measures are taken by Let’s Split as set forth below in the Section “<a href="#where_info_stored">Where is your Personal Information stored and transferred?</a>”.</p>
                                    <p>When required by applicable laws</p>
                                    <p>We may also share your Personal Information if required to do so by law or in the good faith belief that such action is necessary to: (i) conform with the law; (ii) comply with the order of a competent judicial authority in any jurisdiction; (iii) comply with the legal process served on Let’s Split; (iv) protect and defend the rights or property of Let’s Split; (v) enforce or verify your compliance with any part of the agreements that you have entered into with Let’s Split, if any; (vi) prevent fraud or other illegal activity perpetrated through the Service; or (vii) act in urgent circumstances to protect the personal safety of users of the Application or the public at large.</p>
                                    <p>During business transfer</p>
                                    <p>We may share your Personal Information without your permission when our operations require it (in the event of a merger, acquisition, bankruptcy, or sale of assets, for example). As part of this kind of event, we may also share some or all of your Personal Information to the relevant third party (or its advisors) as part of a due diligence process.</p>
                                    <p>For other purposes with your consent</p>
                                    <p>Where you have expressly consented, your Personal Information may be shared with other third parties. For example, there may be specific instances where additional terms apply and, through these, we make clear that specific third parties process your Personal Information.</p>
                                    <h4 id="where_info_stored">6.   WHERE IS YOUR PERSONAL INFORMATION STORED AND TRANSFERRED?</h4>
                                <p>
                                    Your Personal Information may be held by Let’s Split in locations other than your province, territory, state, or country of residence, including in Canada and the province of Quebec. Let’s Split may also subcontract processing to or share your Personal Information with third parties located elsewhere, including locations other than your province, territory, state, or country of residence. In such case, Let’s Split will ensure that your Personal Information is transferred to countries that have received an adequacy decision from the competent authority, or that your Personal Information is adequately protected by appropriate technical, organizational, contractual, or other lawful means. If you would like to obtain more information on these security measures, please contact us as set forth in the Section “<a href="#how_to_contact_us">How to contact us?</a>”.
                                </p>
                                <h4>7.   HOW LONG DO WE RETAIN YOUR PERSONAL INFORMATION?</h4>

                                <p>
                                    Personal Information will be retained only as long as necessary for the fulfillment of the Purposes or as required by law. At the end of such period, we strive to destroy or anonymize this information. To determine the appropriate retention period for your Personal Information, we consider the amount, nature and sensitivity of the Personal Information, the potential risk of harm from unauthorized use or disclosure of your Personal Information, the Purposes for which we process your Personal Information and whether we can achieve those Purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements. If you would like more information on this subject, we invite you to <a href="#how_to_contact_us">contact us</a>.
                                </p>

                                <h4>8.   HOW DO WE PROTECT YOUR PERSONAL INFORMATION?</h4>

                                <p>With necessary and appropriate security measures</p>
                                    <p>Let’s Split has security measures in place to protect your Personal Information. The standard security measures we use will depend on the type of information collected. However, Let’s Split uses physical, electronic, and procedural safeguards that comply with applicable regulations to protect your Personal Information. We encourage you to be cautious when using the Internet. This includes not sharing your passwords. If you think an unauthorized account has been created using your name, please contact us as set forth in the Section “<a href="#how_to_contact_us">How to contact us?</a>”.</p>
                                    <p>Children’s privacy</p>
                                    <p>The Application is only available and designed for individuals of legal age. Let’s Split does not knowingly process any Personal Information from minors. If you believe that Personal Information has been collected from a minor, or if you are a parent or legal guardian and think that your child has provided us with Personal Information, you may contact us as set forth in the Section “<a href="#how_to_contact_us">How to contact us?</a>”.</p>
                                    
                                <h4 id="how_do_we_use_cookies">9.   HOW DO WE USE COOKIES?</h4>

                                <p>A cookie is a small text file that is stored in a dedicated location on your computer, mobile device, tablet or other device when you use or visit an online service or a website. Other tracking technologies, such as web beacons and tracking pixels may be used for similar purposes. In this Policy, all of these tracking technologies are collectively referred to as “Cookie(s)”. Any Personal Information collected with Cookies by Let’s Split or on its behalf are treated with the same level of confidentiality as any other Personal Information held by us.</p>
                                <p>Strictly necessary Cookies</p>
                                <p>These Cookies are necessary for the Service to function and cannot be switched off in our systems. Strictly necessary Cookies must be present for the Application to provide basic functions and could include signing in or ensuring access to updated information. For example, they allow for a user to navigate back and forth between pages without losing their previous actions from the same session.</p>
                                <p>Non-essential Cookies</p>
                                <p>If you have consented to their use, Let’s Split and/or its third-party partners may also use non-essential Cookies in connection with the the following:</p>
                                    <p>
                                        <ul>
                                            <li>
                                                <u>Functionality Cookies (also known as “preference Cookies”)</u>: These Cookies are not essential to the provision of our services. They help personalize and enhance the user experience. For example, if you have consented to their use, such Cookies will store your communication and language preferences.
                                            </li>
                                            <li>
                                                <u>Performance Cookies (also known as “statistical Cookies” or “analytical Cookies”)</u>: These Cookies are not essential to the provision of our services. If you have consented to their use, we use performance Cookies to understand how you interact with our Application. Our partners may also use this type of Cookie to analyze your use of our Application and provide us with information about it. These Cookies are for statistical purposes only. For more information on our use of Cookies, see the “<a href="#use_of_analytics_tools">Use of Analytics Tools</a>” section.
                                            </li>
                                        </ul>
                                    </p>
                                    <p id="use_of_analytics_tools">Deactivation of Cookies to Which You Have Consented</p>
                                    <p>Except for strictly necessary Cookies, we will only place Cookies on your device if you consent to it, and such Cookies will be kept for a maximum period of thirteen months from when they are placed on your device. At the end of this period, your consent will be required again. You can also manage your Cookie settings by changing the settings on your browser or device. For details on how to set up your browser, please see the Help Centre for <a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank">Chrome</a>, <a href="https://support.apple.com/en-us/HT201265" target="_blank">Safari</a>, <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank">Firefox</a>, <a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank">Internet Explorer</a>, <a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank">Edge</a> or <a href="https://help.opera.com/en/latest/web-preferences/" target="_blank">Opera</a>. However, if you choose to decline Cookies, some pages or sections of our Application may not display properly or some features may not be available.</p>

                                <h4 id="rights">10.   WHAT ARE YOUR RIGHTS?</h4>

                                <p>Depending on applicable laws, you might have different rights such as the right to be forgotten, the right to obtain access to, or rectification of your Personal Information, the right to withdraw your consent (if any), the right not to be discriminated against, the right to restrict and to object to the use and processing of your Personal Information by us, or the right to data portability by, namely, receiving a copy of all Personal Information that Let’s Split has about you in a structured, commonly used and machine-readable format. To exercise any of these rights (to the extent available), please contact us as set forth in the Section “<a href="#how_to_contact_us">How to contact us?</a>”.</p>

                                <h4 id="how_to_contact_us">11.   HOW TO CONTACT US?</h4>

                                <p>If you have any questions about any aspect of this Policy, wish to send a comment, make a complaint or exercise any of the <a href="#rights">rights</a> made available to you according to applicable laws, please do so through the “Contact us” link on the Application, when available, or please contact our Data Protection Officer as follows:</p>
                                    <p>
                                        Data Protection Officer<br></br>
                                        <a href="support@letsplit.com">support@letsplit.com</a>
                                    </p>
                                    <p>Your request may be accepted or denied by Let’s Split based on the applicable laws. Let’s Split will take prompt corrective action when it learns of any failure to comply with this Policy. Let’s Split shall not be liable for any indirect, incidental, consequential or punitive damages relating to this Policy. You may file a complaint with the competent authority at any time if you believe that Let’s Split is not processing your Personal Information in a manner that is compliant
                                    with this Policy or with the applicable laws.</p>

                                <h4>12.   CHANGES AND UPDATES TO THE POLICY</h4>

                                <p>Let’s Split may, at its discretion, update, revise, modify or supplement this Policy from time to time. If material changes are made to the Policy, you will be notified when you log in and/or we will send you a link to the new version of the Policy. The Policy and any related agreements, if any, will be posted on our Application. Let’s Split requests that its users review and accept the revised Policy before continuing to use its Application.</p>
                        
                        
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default PrivacyPage
