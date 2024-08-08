import React from 'react'

export default function About(props) {
  return (
   <>
   <div className="container">
   <div style={{color: props.mode === "dark"? "white":"black"}} >
      <h1>About TextUtils</h1>
      <p>
        Welcome to TextUtils! We are dedicated to providing you with the best tools for text manipulation and analysis. Our app is designed to help you handle various text-related tasks effortlessly.
      </p>
      <h2>Our Mission</h2>
      <p>
        At TextUtils, our mission is to make text processing and analysis as simple and efficient as possible. Whether you're looking to clean up text, analyze its content, or perform complex text transformations, we aim to provide powerful and user-friendly tools to meet your needs.
      </p>
      <h2>Features</h2>
      <ul>
        <li><strong>Text Transformation:</strong> Easily convert text to uppercase, lowercase, or capitalize each word.</li>
        <li><strong>Text Analysis:</strong> Analyze your text to get word and character counts, and more.</li>
        <li><strong>Text Cleaning:</strong> Remove extra spaces, unwanted characters, and more to clean up your text.</li>
        <li><strong>Real-time Preview:</strong> See the results of your text manipulations in real-time.</li>
      </ul>
      <h2>Get in Touch</h2>
      <p>
        We value your feedback and suggestions. If you have any questions, comments, or need assistance, feel free to reach out to us at <a href="mailto:areebahmed1018@gmail.com">areebahmed1018@gmail.com</a>.
      </p>
      <p>
        Thank you for choosing TextUtils. We hope our tools make your text processing tasks easier and more efficient!
      </p>
    </div>
   </div>
   </>
  )
}
