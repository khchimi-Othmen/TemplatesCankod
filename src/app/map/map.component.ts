import { AfterViewInit, Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as L from 'leaflet';
import 'leaflet-control-geocoder';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit{
 
  map!: L.Map;
coords: any| undefined;

 abc ={
  lat: 33.886917,
  lng: 9.537499,
};


 
  

constructor(){}
ngAfterViewInit(): void {
  this.loadMap();
  
  
}



private getCurrentPosition(): any {
  return new Observable((observer: Subscriber<any>) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        observer.next({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        observer.complete();
      });
    } else {
      observer.error();
    }
  });
}

private loadMap(): void {
  this.map = L.map('map').setView([0, 0], 1);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "sk.eyJ1IjoibmF3cmVzYXNrcmkiLCJhIjoiY2xoMGZhMXRwMHRmaDNkcnowNHhyamNiayJ9.9oMH3RoyzJMvr6cvrtW8xg"
  }).addTo(this.map);

  this.getCurrentPosition()
  .subscribe((position: any) => {
    this.map.flyTo([position.latitude, position.longitude], 13);

  
    

    const icon = L.icon({
     iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
       iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    
       iconSize:    [40, 100],
       iconAnchor:  [12, 41],
       popupAnchor: [1, -34],
       shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
       shadowSize:  [41, 41]
     });



    const abc ={
      lat: 33.886917,
      lng: 9.537499,
    };
    const marker = L.marker([position.latitude, position.longitude], { icon}).bindPopup('position actuelle');
    marker.addTo(this.map);




    

  
    /*const icon1 = L.icon({
      // iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
      // iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
      iconUrl: 'https://thumbs.dreamstime.com/z/ic%C3%B4ne-de-livreur-100592262.jpg',
      iconRetinaUrl: 'https://thumbs.dreamstime.com/z/ic%C3%B4ne-de-livreur-100592262.jpg',
       iconSize:    [40, 100],
       iconAnchor:  [12, 41],
       popupAnchor: [1, -34],
       shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
       shadowSize:  [41, 41]
     });*/
    const marker2 = L.marker([abc.lat, abc.lng], { icon }).bindPopup('livreur 1');
    marker2.addTo(this.map);



  this.map.on('click', (event: L.LeafletMouseEvent) => {




    const icon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
     
        iconSize:    [40, 100],
        iconAnchor:  [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        shadowSize:  [41, 41]
      });



    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    const marker2 = L.marker([lat, lng], { icon }).bindPopup('position');
    marker2.addTo(this.map);

    console.log('Latitude :', lat);
    console.log('Longitude :', lng);



    const R = 6371e3; // Rayon de la Terre en mètres
    const lat1 = event.latlng.lat;
    const lon1 = event.latlng.lng;
    const lat2 = 48.8584; // Exemple: latitude de la Tour Eiffel
    const lon2 = 2.2945; // Exemple: longitude de la Tour Eiffel
  
    // Calculer la distance entre les deux points avec la formule de Haversine
    const φ1 = lat1 * Math.PI / 180; // Convertir en radians
    const φ2 = position.latitude * Math.PI / 180;
    const Δφ = (position.latitude - lat1) * Math.PI / 180;
    const Δλ = (position.longitude - lon1) * Math.PI / 180;
  
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  
    const distanceInMeters = R * c;
    
    console.log(`Distance from click to the fixed point: ${distanceInMeters} meters`);
alert (`la distaace calculéé est '${distanceInMeters}`);


  });

/////////////////////////////////////////////////
/*// Créer une fonction pour gérer l'événement de clic sur la carte
  onclick('click',(event: L.LeafletMouseEvent)) {
  const clickedLatLng = event.latlng;
  
  // Calculer la distance entre le clic et un point fixe
  const fixedLatLng = L.latLng(48.8584, 2.2945); // Exemple: la Tour Eiffel
  const distanceInMeters = clickedLatLng.distanceTo(fixedLatLng);

  console.log(`Distance from click to the fixed point: ${distanceInMeters} meters`);
}

*/



});


}}

  






