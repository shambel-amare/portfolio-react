import "./ListingCard.css";
import { AiFillSafetyCertificate } from "react-icons/ai";

const ListingCard = ({ title, children }) => {
  return (
    <>
      <div className="skill-box">
        <div className="skill-title">
          <div className="content-icon">
            <AiFillSafetyCertificate />
          </div>
          <h1>{title}</h1>
        </div>
        <div className="skill-list">{children}</div>
      </div>
    </>
  );
};

export default ListingCard;
