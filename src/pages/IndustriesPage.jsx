import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  Container,
  Accordion,
  SectionHeader,
  TechPartners,
  IndustryCard,
} from "../components";
import { INDUSTRIES_DATA } from "../constants";
import animate from "../utils/animations";
import { useGSAP } from "@gsap/react";

const IndustriesPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const industries = INDUSTRIES_DATA.find(
    industries => industries.id === params.id
  );

  useGSAP(() => {
    animate([".anim-industry-title", ".anim-industry-accordion-title"]);
  }, [params.id]);

  useEffect(() => {
    if (!industries) {
      navigate("/notFound");
    }
  }, [industries, navigate]);

  if (!industries) return null;

  const { pageTitle, pageSubtitle, cardsData, accordionData } = industries;

  return (
    <Container>
      <div className="space-y-16 mt-20">
        {/* section header */}
        <div className="anim-industry-title">
          <SectionHeader
            title={pageTitle}
            subtitle={pageSubtitle}
          />
        </div>

        {/* industry cards */}
        <div className="flex flex-wrap items-stretch justify-center gap-5">
          {cardsData.map((card, index) => (
            <IndustryCard
              key={index}
              {...card}
            />
          ))}
        </div>

        {/* accordion */}
        <div className="space-y-6">
          <h2 className="anim-industry-accordion-title text-2xl lg:text-3xl text-primary-blue font-semibold">
            {`Our ${pageTitle} Solutions`}
          </h2>

          <Accordion data={accordionData} />
        </div>

        {/* tech partners */}
        <TechPartners />
      </div>
    </Container>
  );
};

export default IndustriesPage;
