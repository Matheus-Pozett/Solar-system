type PlanetCardProps = {
  planetName: string;
  planetImage: string;
};

function PlanetCard({ planetImage, planetName }: PlanetCardProps) {
  return (
    <div data-testid="planet-card">
      <p data-testid="planet-name">{planetName}</p>
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
    </div>
  );
}

export default PlanetCard;
