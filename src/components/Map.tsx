import React from 'react';
import { Card } from '@/components/ui/card';

const Map = () => {

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

            <div className="h-96 rounded-lg overflow-hidden border border-memorial-light">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1478.4566291279696!2d30.1941092696834!3d-23.145573998692974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA4JzQ0LjEiUyAzMMKwMTEnNDEuMSJF!5e1!3m2!1sen!2sza!4v1754139849792!5m2!1sen!2sza"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Location - Stand No. 367, Mashau Thondoni"
              />
            </div>

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