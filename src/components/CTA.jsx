import { Link } from "react-router-dom";

// The CTA component is a container for the CTA text and the Contact button
const CTA = () => {
  return (
    <section className="cta">
      {/* The CTA text */}
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let's build something together!
      </p>
      {/* The Contact button */}
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
