import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const cardboardLinks = [
  { title: "Wallet", url: "/wallet" },
  { title: "GiftCard", url: "#" }, // '#' to prevent navigation
  { title: "Setting", url: "/setting" },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isGiftCardDropdownVisible, setGiftCardDropdownVisible] = useState(false);

  const handleLinkClick = (index, title) => {
    setActiveIndex(index);
    if (title === "GiftCard") {
      setGiftCardDropdownVisible(!isGiftCardDropdownVisible);
    } else {
      setGiftCardDropdownVisible(false);
    }
  };

  return (
    <div className="giftBox">
      <div className="left">
        {cardboardLinks.map(({ title, url }, index) => (
          <div className="cardCenter" key={index}>
            <Link to={url} onClick={(e) => {
              if (title === "GiftCard") {
                e.preventDefault(); // Prevent navigation
                handleLinkClick(index, title);
              } else {
                handleLinkClick(index, title);
              }
            }}>
              {title}
              {title === "GiftCard" && (
                <span className="dropdown-icon">&#9662;</span> // Downward arrow icon
              )}
            </Link>
            {title === "GiftCard" && isGiftCardDropdownVisible && (
              <div className="dropdown">
                <div className="dropdown-item"><Link to="/createCard">Create Giftcard</Link></div>
                <div className="dropdown-item"><Link to="/redeem">Redeem Giftcard</Link></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
