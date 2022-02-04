// Instructions to every other class
// It shows on how they can be an argument to "addMarker"
export interface MapBy {
    location: {
        lat: number,
        lng: number,
    };

    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    };

    addMarker(mapBy: MapBy): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mapBy.location.lat,
                lng: mapBy.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mapBy.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        });
    };
}
