import React from 'react'
import Restaurants from '../../containers/Restaurants/Restaurants'
import Form from '../../containers/Form/Form'
import './RestaurantsPage.css'
import Analytics from "@segment/analytics.js-core/build/analytics";
import SegmentIntegration from "@segment/analytics.js-integration-segmentio";
const analytics = new Analytics();
analytics.use(SegmentIntegration);

const integrationSettings = {
  "Segment.io": {
    apiKey: "NJcDKOk8pTkpXtp1IKdtPkyeDd9oXfkl",
    retryQueue: true,
    addBundledMetadata: true,

  }
};


// Initialize the library
analytics.initialize(integrationSettings);

const RestaurantsPage = () => {
  analytics.track('🚀');
  return (
    <section className='restaurants-page-container'>
      <Form />
      <Restaurants />
    </section>
  )
}

export default RestaurantsPage
