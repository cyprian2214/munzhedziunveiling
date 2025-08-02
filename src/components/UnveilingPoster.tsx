import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import memorialBackground from "@/assets/memorial-background.jpg";
import dovesBackground from "@/assets/doves-background.png";

const UnveilingPoster = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-memorial-light flex items-center justify-center p-2 sm:p-4">
      <Card 
        className="w-full max-w-4xl bg-card/95 backdrop-blur-sm border-memorial-light shadow-2xl relative overflow-hidden"
        style={{
          backgroundImage: `url(${memorialBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'soft-light'
        }}
      >
        <div className="absolute inset-0 bg-card/90 backdrop-blur-[1px]" />
        
        {/* Blurred doves background */}
        <div 
          className="absolute inset-0 opacity-20 blur-sm"
          style={{
            backgroundImage: `url(${dovesBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="relative z-10 flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8">
          {/* Top/Left side - Photo */}
          <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center">
            <div className="relative">
              <div className="w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-memorial border-4 border-memorial-light bg-card">
                <img 
                  src="/lovable-uploads/ac446c47-ef65-45a7-8e9d-721a0b875820.png"
                  alt="Mrs. Munzhedzi Mufamadi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-memorial text-memorial-foreground px-4 sm:px-6 py-2 rounded-full shadow-lg">
                <span className="text-sm sm:text-base md:text-lg font-semibold">In Loving Memory</span>
              </div>
            </div>
          </div>

          {/* Bottom/Right side - Content */}
          <div className="p-4 sm:p-6 md:p-8 space-y-3 md:space-y-4">
            {/* Header */}
            <div className="space-y-2 md:space-y-3 text-center">
              <div className="text-2xl md:text-3xl">🕊️</div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-memorial tracking-wide leading-tight">
                INVITATION TO<br />UNVEILING CEREMONY
              </h1>
              <div className="text-2xl md:text-3xl">🕊️</div>
            </div>

            <Separator className="bg-memorial-light" />

            {/* Introduction */}
            <div className="space-y-2 text-center">
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                With deep respect and love,<br />
                we humbly invite you and your family<br />
                to the Unveiling Ceremony of our beloved mother,
              </p>
              <h2 className="text-lg md:text-xl font-semibold text-memorial">
                Mrs. Munzhedzi Mufamadi
              </h2>
            </div>

            <Separator className="bg-memorial-light" />

            {/* Event Details */}
            <div className="space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base">
              <div className="flex items-start space-x-2">
                <span className="text-base md:text-lg mt-0.5">📅</span>
                <div className="flex-1">
                  <span className="font-semibold text-memorial">Date:</span>
                  <span className="ml-1 md:ml-2 text-foreground">Saturday, 13 December 2025</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <span className="text-base md:text-lg mt-0.5">🕘</span>
                <div className="flex-1">
                  <span className="font-semibold text-memorial">Time:</span>
                  <span className="ml-1 md:ml-2 text-foreground">From 09h00</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <span className="text-base md:text-lg mt-0.5">📍</span>
                <div className="flex-1">
                  <span className="font-semibold text-memorial">Venue:</span>
                  <span className="ml-1 md:ml-2 text-foreground">Stand No. 367, Mashau Thondoni</span>
                </div>
              </div>
              
              <div className="mt-3">
                <Button
                  onClick={() => navigate("/map")}
                  variant="outline"
                  size="sm"
                  className="w-full bg-memorial/10 border-memorial text-memorial hover:bg-memorial hover:text-memorial-foreground"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  View Location on Map
                </Button>
              </div>
            </div>

            <Separator className="bg-memorial-light" />

            {/* Message */}
            <p className="text-sm md:text-base text-foreground italic leading-relaxed text-center">
              Your presence will truly mean a lot to us<br />
              as we celebrate and honour her life.
            </p>

            <Separator className="bg-memorial-light" />

            {/* RSVP */}
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-base md:text-lg">🔔</span>
                <h3 className="text-base md:text-lg font-semibold text-memorial">RSVP</h3>
              </div>
              <div className="text-xs sm:text-sm text-foreground text-center">
                <p><span className="font-semibold">From:</span> 08 December 2025</p>
                <p><span className="font-semibold">To:</span> 12 December 2025</p>
              </div>
            </div>

            <Separator className="bg-memorial-light" />

            {/* Contact Details */}
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-base md:text-lg">📞</span>
                <h3 className="text-base md:text-lg font-semibold text-memorial">Contact Details</h3>
              </div>
              <div className="space-y-1 text-xs sm:text-sm text-foreground">
                <p>Mr. T.T. Mashau – <span className="font-mono">072 358 1101</span></p>
                <p>Mr. J.V. Mashau – <span className="font-mono">078 944 2463</span></p>
                <p>Mr. R.A. Mufamadi – <span className="font-mono">079 175 6133</span></p>
              </div>
            </div>

            <Separator className="bg-memorial-light" />

            {/* Quote */}
            <div className="text-center">
              <div className="text-memorial-gold text-xs sm:text-sm md:text-base font-medium italic">
                "Gone from our sight, but never from our hearts."
              </div>
            </div>
          </div>
        </div>
        
        {/* Credit note */}
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-xs text-muted-foreground opacity-60 hidden sm:block">
          Made by Ndivhuwo Mashau
        </div>
        
        {/* Mobile credit note */}
        <div className="relative mt-4 text-center text-xs text-muted-foreground opacity-60 sm:hidden">
          Made by Ndivhuwo Mashau
        </div>
      </Card>
    </div>
  );
};

export default UnveilingPoster;