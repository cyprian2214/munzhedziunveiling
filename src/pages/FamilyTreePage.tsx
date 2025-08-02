import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const FamilyTreePage = () => {
  const familyData = {
    generation1: [
      { name: "Munzhedzi Mufamadi", type: "patriarch" },
      { name: "Shadrack Mufamadi", type: "patriarch" }
    ],
    generation2: [
      { name: "Thomas Mashau", type: "parent" },
      { name: "Maria Mafuna", type: "parent" },
      { name: "Vhanazwo Mashau", type: "parent" },
      { name: "Lawrence Mashau", type: "parent" },
      { name: "Azwihangwisi Mufamadi", type: "parent" },
      { name: "Thinawanga Mufamadi", type: "parent" }
    ],
    generation3: [
      { name: "Bryton Mashau", parent: "Thomas Mashau" },
      { name: "Mukanela Mashau", parent: "Thomas Mashau" },
      { name: "Greg Mashau", parent: "Thomas Mashau" },
      { name: "Martin Mafuna", parent: "Maria Mafuna" },
      { name: "Masha Mafuna", parent: "Maria Mafuna" },
      { name: "Nosi Mafuna", parent: "Maria Mafuna" },
      { name: "Thamba Mafuna", parent: "Maria Mafuna" },
      { name: "Denga Mafuna", parent: "Maria Mafuna" },
      { name: "Mbuelo Mashau", parent: "Vhanazwo Mashau" },
      { name: "Ndivhuwo Mashau", parent: "Vhanazwo Mashau" },
      { name: "Khuliso Mashau", parent: "Vhanazwo Mashau" },
      { name: "Rofhiwa Mufamadi", parent: "Azwihangwisi Mufamadi" },
      { name: "Rolivhuwa Mufamadi", parent: "Azwihangwisi Mufamadi"},
      { name: "Sello Mufamadi", parent: "Thinawanga Mufamadi" },
      { name: "Zwothe Musisidwa", parent: "Thinawanga Mufamadi" }
    ]
  };

  const PersonCard = ({ person, generation }: { person: any, generation: number }) => (
    <Card className={`p-3 text-center transition-all duration-200 hover:shadow-md ${
      generation === 1 ? 'bg-primary/10 border-primary/30' :
      generation === 2 ? 'bg-secondary/10 border-secondary/30' :
      'bg-accent/10 border-accent/30'
    }`}>
      <div className={`text-sm font-medium ${
        generation === 1 ? 'text-primary' :
        generation === 2 ? 'text-secondary-foreground' :
        'text-accent-foreground'
      }`}>
        {person.name}
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Memorial
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Family Tree</h1>
            <p className="text-muted-foreground mt-1">The Mufamadi & Mashau Family Legacy</p>
          </div>
        </div>

        {/* Family Tree */}
        <div className="space-y-8">
          {/* Generation 1 - Patriarchs */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-primary mb-4">First Generation</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {familyData.generation1.map((person, index) => (
                <div key={index} className="flex-1 min-w-[200px]">
                  <PersonCard person={person} generation={1} />
                </div>
              ))}
            </div>
          </div>

          {/* Connection Lines */}
          <div className="flex justify-center">
            <div className="w-px h-8 bg-border"></div>
          </div>

          {/* Generation 2 - Parents */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-secondary-foreground mb-4">Second Generation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
              {familyData.generation2.map((person, index) => (
                <PersonCard key={index} person={person} generation={2} />
              ))}
            </div>
          </div>

          {/* Connection Lines */}
          <div className="flex justify-center">
            <div className="w-px h-8 bg-border"></div>
          </div>

          {/* Generation 3 - Children */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-accent-foreground mb-4">Third Generation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-7xl mx-auto">
              {familyData.generation3.map((person, index) => (
                <PersonCard key={index} person={person} generation={3} />
              ))}
            </div>
          </div>
        </div>

        {/* Family Note */}
        <div className="mt-12 text-center">
          <Card className="p-6 max-w-2xl mx-auto bg-muted/30">
            <p className="text-muted-foreground italic">
              "Family is not an important thing, it's everything. This tree represents the beautiful 
              legacy that continues to grow and flourish through each generation."
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FamilyTreePage;