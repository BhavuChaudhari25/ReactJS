import { useState } from "react";
import { Bookmark, MapPin, Clock, ArrowUpRight } from "lucide-react";
import "./Card.css";

function Card(props) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="card">
      <div className="card-glow" />

      <div className="card-top">
        <div className="brand-logo-wrap">
          <img src={props.brandLogo} alt={props.companyName} />
        </div>
        <button
          className={`save-btn ${saved ? "saved" : ""}`}
          onClick={() => setSaved(!saved)}
        >
          <Bookmark size={11} />
          {saved ? "Saved" : "Save"}
        </button>
      </div>

      <div className="card-center">
        <div className="company-row">
          <span className="company-name">{props.companyName}</span>
          <span className="date-posted">
            <Clock size={10} />
            {props.datePosted}
          </span>
        </div>
        <h2 className="post-title">{props.post}</h2>
        <div className="tags">
          <span className="tag tag-primary">{props.tag1}</span>
          <span className="tag tag-secondary">{props.tag2}</span>
        </div>
      </div>

      <div className="divider" />

      <div className="card-bottom">
        <div className="pay-location">
          <span className="pay">{props.pay}</span>
          <span className="location">
            <MapPin size={11} />
            {props.location}
          </span>
        </div>
        <button className="apply-btn">
          Apply Now <ArrowUpRight size={13} />
        </button>
      </div>
    </div>
  );
}

export default Card;