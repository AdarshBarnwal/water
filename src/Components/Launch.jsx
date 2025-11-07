import "./Launch.css";

function Launch() {
  const products = [
    {
      id: 1,
      name: "Waterjet",
      item: "Geyser (10 LTR)",
      img: "https://waterjetpurifier.com/photo/ro6.jpg",
    },
    {
      id: 2,
      name: "Waterjet",
      item: "Geyser (15 LTR)",
      img: "https://waterjetpurifier.com/photo/ro6.jpg",
    },
    {
      id: 3,
      name: "Waterjet",
      item: "Geyser (25 LTR)",
      img: "https://waterjetpurifier.com/photo/ro6.jpg",
    },
  ];

  return (
    <div className="launch-section">
      <h1 className="launch-title">OUR NEW LAUNCH</h1>
      <p className="launch-desc">
        We are a Complete Water Consulting and Solution Enterprise. We provide
        complete water treatment solutions which are Cost Effective,
        Eco-Friendly, and Client Specific.
      </p>

      <div className="card-container">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img className="card-img" src={item.img} alt={item.name} />
            <h2 className="card-title">{item.name}</h2>
            <h3 className="card-desc">{item.item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Launch;
