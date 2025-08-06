import React from "react";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  onClick: () => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ image, title, category, onClick }) => {
  return (
    <div 
      className="rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </div>
  );
};
