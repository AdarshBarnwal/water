
import "./WhyChoose.css";

function WhyChoose() {
  const items = [
    {
      title: "Our Mission",
      text: "Our Mission is to make India a healthy and prosperous country. We and our team are working hard to deliver the best products in the field of healthcare and home appliances."
    },
    {
      title: "Our Plan",
      text: "Our plan is to make a system where each person can get a healthy environment to live and grow. With the help of technology, we are trying to make sustainable and economical healthcare products."
    },
    {
      title: "Our Vision",
      text: "Our vision is to provide a healthy life for every human. We are visualizing a world free of problems like pollution and disease. We at Revamp make healthcare home appliances."
    },
    {
      title: "Installation & Uninstallation",
      text: "Buy the installation service at nearly NO cost from here and get satisfactory service at your doorstep. Contact us immediately and be part of our happy customers."
    }
  ];

  return (
    <div className="whychoose">
      <h1>WHY CHOOSE WATERJET ?</h1>
      <p>
        We provide best RO services and quality installation with the use of professional equipment.
      </p>
      <div className="whychoose-grid">
        {items.map((item, i) => (
          <div key={i} className="whychoose-card">
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default WhyChoose;
