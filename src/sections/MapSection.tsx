import React from 'react'

const MapSection: React.FC  = () => {
  return (
    <section className="map">
        <iframe className="google-map" title="googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42828.674857312326!2d12.6169750956907!3d57.49030168190536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46501a6e64316693%3A0x91717e0c699389fd!2sVarbergsv%C3%A4gen%2053%2C%20511%2062%20Skene!5e0!3m2!1ssv!2sse!4v1665605518033!5m2!1ssv!2sse" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}

export default MapSection