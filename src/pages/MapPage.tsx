import Map from "@/components/Map";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MapPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="absolute top-4 left-4 z-10">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="bg-card/90 backdrop-blur-sm border-memorial-light"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Invitation
        </Button>
      </div>
      <Map />
    </div>
  );
};

export default MapPage;