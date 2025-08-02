import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenSet, setTokenSet] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [30.8833, -22.9667], // Approximate coordinates for Limpopo, South Africa
      zoom: 10,
    });

    // Add marker for the venue
    new mapboxgl.Marker({ color: '#8B5CF6' })
      .setLngLat([30.8833, -22.9667])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML('<div class="p-2"><h3 class="font-semibold">Venue Location</h3><p>Stand No. 367, Mashau Thondoni</p></div>')
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setTokenSet(true);
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-memorial-light p-4">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-card/95 backdrop-blur-sm border-memorial-light shadow-2xl overflow-hidden">
          <div className="p-6 space-y-6">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-memorial mb-2">
                Venue Location
              </h1>
              <p className="text-foreground">
                Stand No. 367, Mashau Thondoni
              </p>
            </div>

            {!tokenSet ? (
              <div className="max-w-md mx-auto space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
                  <Input
                    id="mapbox-token"
                    type="text"
                    placeholder="Enter your Mapbox public token"
                    value={mapboxToken}
                    onChange={(e) => setMapboxToken(e.target.value)}
                  />
                  <p className="text-sm text-muted-foreground">
                    Get your token from{' '}
                    <a 
                      href="https://mapbox.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-memorial underline"
                    >
                      mapbox.com
                    </a>
                  </p>
                </div>
                <Button onClick={handleTokenSubmit} className="w-full">
                  Load Map
                </Button>
              </div>
            ) : (
              <div className="h-96 rounded-lg overflow-hidden border border-memorial-light">
                <div ref={mapContainer} className="w-full h-full" />
              </div>
            )}

            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold text-memorial">Directions</h3>
              <p className="text-sm text-foreground">
                Navigate to Stand No. 367, Mashau Thondoni for the unveiling ceremony
              </p>
              <p className="text-xs text-muted-foreground">
                For assistance with directions, contact the numbers provided in the invitation
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Map;