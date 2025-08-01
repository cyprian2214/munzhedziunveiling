import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import memorialBackground from "@/assets/memorial-background.jpg";

const UnveilingPoster = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-memorial-light flex items-center justify-center p-4">
      <Card 
        className="w-full max-w-2xl bg-card/95 backdrop-blur-sm border-memorial-light shadow-2xl relative overflow-hidden"
        style={{
          backgroundImage: `url(${memorialBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'soft-light'
        }}
      >
        <div className="absolute inset-0 bg-card/90 backdrop-blur-[1px]" />
        
        <div className="relative z-10 p-8 md:p-12 text-center space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <div className="text-4xl">🕊️</div>
            <h1 className="text-2xl md:text-3xl font-bold text-memorial tracking-wide">
              INVITATION TO UNVEILING CEREMONY
            </h1>
            <div className="text-4xl">🕊️</div>
          </div>

          <Separator className="bg-memorial-light" />

          {/* Introduction */}
          <div className="space-y-3">
            <p className="text-lg text-foreground leading-relaxed">
              With deep respect and love,<br />
              we humbly invite you and your family<br />
              to the Unveiling Ceremony of our beloved mother,
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-memorial">
              Mrs. Munzhedzi Mufamadi
            </h2>
          </div>

          <Separator className="bg-memorial-light" />

          {/* Event Details */}
          <div className="space-y-4 text-left md:text-center">
            <div className="flex items-center justify-start md:justify-center space-x-3">
              <span className="text-2xl">📅</span>
              <div>
                <span className="font-semibold text-memorial">Date:</span>
                <span className="ml-2 text-foreground">Saturday, 13 December 2025</span>
              </div>
            </div>
            
            <div className="flex items-center justify-start md:justify-center space-x-3">
              <span className="text-2xl">🕘</span>
              <div>
                <span className="font-semibold text-memorial">Time:</span>
                <span className="ml-2 text-foreground">From 09h00</span>
              </div>
            </div>
            
            <div className="flex items-center justify-start md:justify-center space-x-3">
              <span className="text-2xl">📍</span>
              <div>
                <span className="font-semibold text-memorial">Venue:</span>
                <span className="ml-2 text-foreground">Stand No. 367, Mashau Thondoni</span>
              </div>
            </div>
          </div>

          <Separator className="bg-memorial-light" />

          {/* Message */}
          <p className="text-lg text-foreground italic leading-relaxed">
            Your presence will truly mean a lot to us<br />
            as we celebrate and honour her life.
          </p>

          <Separator className="bg-memorial-light" />

          {/* RSVP */}
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">🔔</span>
              <h3 className="text-xl font-semibold text-memorial">RSVP</h3>
            </div>
            <div className="text-foreground">
              <p><span className="font-semibold">From:</span> 08 December 2025</p>
              <p><span className="font-semibold">To:</span> 12 December 2025</p>
            </div>
          </div>

          <Separator className="bg-memorial-light" />

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">📞</span>
              <h3 className="text-xl font-semibold text-memorial">Contact Details</h3>
            </div>
            <div className="space-y-2 text-foreground">
              <p>Mr. T.T. Mashau – <span className="font-mono">072 358 1101</span></p>
              <p>Mr. J.V. Mashau – <span className="font-mono">078 944 2463</span></p>
              <p>Mr. R.A. Mufamadi – <span className="font-mono">079 175 6133</span></p>
            </div>
          </div>

          <Separator className="bg-memorial-light" />

          {/* Quote */}
          <div className="space-y-3">
            <div className="text-memorial-gold text-lg font-medium italic">
              "Gone from our sight, but never from our hearts."
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UnveilingPoster;