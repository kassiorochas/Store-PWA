import React from "react";

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
  description: string;
  link?: string;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({ isOpen, onClose, title, images, description, link }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full p-5 relative">
        <button 
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <div className="grid grid-cols-2 gap-3 mb-3">
          {images.map((img, index) => (
            <img key={index} src={img} alt={title} className="rounded-lg object-cover w-full h-40" />
          ))}
        </div>
        <p className="text-gray-700">{description}</p>

        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Ver Projeto
          </a>
        )}
      </div>
    </div>
  );
};
