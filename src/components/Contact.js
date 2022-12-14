import React from 'react';
import ReactPlayer from "react-player"

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h1 className="contact-page-header">I'd love to chat!</h1>
      <p className="contact-page-text">
        Feel free to email me at teisjayaswal at gmail dot com.
      </p>
      <p className="contact-page-text">
        Also find me on Twitter <a href="https://twitter.com/teis_tj">(@teis_tj)</a>
      </p>
      <p className="contact-page-text">
        Lastly, please go listen to my electronic/piano music on SoundCloud. Hint: it's great to loop for a deep work session 😉
      </p>
      <ReactPlayer
        url="https://soundcloud.com/broken-pipes/39th-sonata"
      />
    </div>
  );
}
