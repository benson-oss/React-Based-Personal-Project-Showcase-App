import ProductsList from "../components/ProductsList";
import { getProducts } from "../API/Products";
import heroArtwork from "../assets/hero.png";
import "../styles/site-sections.css";

export default function Landing() {
  return (
    <div className="landing-page">
      <section className="landing-hero" aria-labelledby="landing-title">
        <div className="landing-hero__content">
          <p className="landing-hero__eyebrow">Product Admin Portal</p>
          <h1 id="landing-title">Coffee R Us</h1>
          <p className="landing-hero__description">
            The go-to store for your coffee needs. Keep the catalogue organised,
            up to date, and ready for every customer.
          </p>

          <div className="landing-hero__actions">
            <a className="button button--primary" href="#products">
              View products
            </a>
            <a className="button button--secondary" href="/add">
              Add a product
            </a>
          </div>
        </div>

        <div className="landing-hero__visual" aria-hidden="true">
          <span className="landing-hero__glow" />
          <img src={heroArtwork} alt="" />
          <div className="landing-hero__status">
            <span className="landing-hero__status-dot" />
            Catalogue ready
          </div>
        </div>
      </section>

      <section
        className="landing-products"
        id="products"
        aria-labelledby="products-heading"
      >
        <div className="landing-products__heading">
          <div>
            <p className="section-eyebrow">Store catalogue</p>
            <h2 id="products-heading">Explore our products</h2>
          </div>
          <p>Browse the latest coffee products available in the store.</p>
        </div>

        <ProductsList getProducts={getProducts} />
      </section>
    </div>
  );
}
