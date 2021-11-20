/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import "./style.css";

let map: google.maps.Map;
let marker: google.maps.Marker;

function initMap() {
  const cairo = { lat: 30.064742, lng: 31.249509 };

  const map = new google.maps.Map(document.getElementById("map") as HTMLElement , {
     scaleControl: true,
      center: cairo,
      zoom: 10,
  });
  const infowindow = new google.maps.InfoWindow();
  infowindow.setContent("<b>القاهرة</b>");
  
  const drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.MARKER,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
      
        google.maps.drawing.OverlayType.POLYGON,
       
      ],
    },
    markerOptions: {
      icon: "",
    },
    circleOptions: {
      fillColor: "#ffff00",
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: false,
      editable: true,
      zIndex: 1,
    },
  });

  drawingManager.setMap(map);
}
export { initMap };

