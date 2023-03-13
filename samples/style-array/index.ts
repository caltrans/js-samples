/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// [START maps_style_array]
function initMap(): void {
  // Styles a map in night mode.
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      center: { lat: 34.6229538, lng: -119.3095251 },
      zoom: 12,
      styles: [
          { featureType: "poi",elementType: "labels", stylers: [ { visibility: "off" } ] },
          { featureType: "road.highway",elementType: "geometry.fill",stylers: [ { color: "#ffebaf" } ] },
          { featureType: "road.highway",elementType: "geometry.stroke",stylers: [ { color: "#ffebaf" } ] }
      ],
    }
  );

  const trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
// [END maps_style_array]
export {};