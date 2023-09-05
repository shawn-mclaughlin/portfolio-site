import Card from "../common/card.tsx";

export default function Qualifications() {
  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      <Card>
        <div className="p-4">
          <p className="text-2xl">Bachelor of Science, Computer Science</p>
          <p className="opacity-60">Temple University, Philadelphia, PA</p>
          <p className="opacity-60">January 2012</p>
        </div>
      </Card>
      <Card>
        <div className="p-4">
          <p className="text-2xl">Japanese Language Proficiency Test</p>
          <p className="opacity-60">Level N3 Certified</p>
          <p className="opacity-60">January 2020</p>
        </div>
      </Card>
    </div>
  );
}
