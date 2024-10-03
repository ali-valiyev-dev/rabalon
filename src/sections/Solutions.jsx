import { Container, SectionHeader, SolutionCard } from "../components";
import { SOLUTIONS } from "../constants";

const Solutions = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-12 md:gap-16">
        <SectionHeader
          title="IT Solutions"
          subtitle="Excellence Redefined: Unleashing Tailored Solutions for Your Success Journey."
        />

        <div className="flex flex-wrap items-stretch justify-center gap-4 lg:gap-6 xl:gap-8">
          {SOLUTIONS.map((solution, index) => (
            <SolutionCard
              key={index}
              {...solution}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Solutions;
