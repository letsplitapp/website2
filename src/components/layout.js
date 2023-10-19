import React from "react";
import CookieConsent from "react-cookie-consent";

export default function Layout({ children }) {
  return (
    <>
      <CookieConsent
        enableDeclineButton
        declineButtonText="Necessary Cookies"
        buttonText="Accept All Cookies"
        cookieName="gatsby-gdpr-google-analytics"
        style={{
          alignItems: "right",
          width: "27rem",
          margin: "2rem",
          borderRadius: "0.35rem",
          fontFamily: "Poppins",
          fontSize: "18px",
        }}
        declineButtonStyle={{
          borderRadius: "0.35rem",
          height: "3rem",
          width: "10rem",
          fontSize: "14px",
          background: "#3A41E8",
          color: "white",
          padding: 0,
        }}
        buttonStyle={{
          borderRadius: "0.35rem",
          height: "3rem",
          width: "10rem",
          fontSize: "14px",
          background: "#3A41E8",
          color: "white",
          padding: 0,
        }}
      >
        <div>Cookie Consent</div>
        <div style={{ fontSize: "14px", marginTop: "1rem" }}>
          We use cookies to enhance your browsing experience and to analyze
          website traffic.
        </div>
      </CookieConsent>
      {children}
    </>
  );
}
