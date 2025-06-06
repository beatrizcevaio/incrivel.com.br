/* eslint-disable no-undef */
export const gtmTracking = (trackingData) => {
  if (trackingData && dataLayer) {
    dataLayer.push({
      ...trackingData,
    })
  }
}
