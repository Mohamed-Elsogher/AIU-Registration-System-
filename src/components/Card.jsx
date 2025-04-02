import React from "react";

const UniversityCard = ({ image, name, description }) => {
  return (
    <div className="bg-[#181818] p-4 rounded-xl shadow-lg shadow-[#c9a95a3d] w-80">
      <img src={image} alt={name} className="w-[200px] h-[100px] object-cover rounded-lg" />
      <h2 className="text-xl text-[#c9a95a] font-bold mt-4">{name}</h2>
      <p className="text-gray-300 text-sm mt-2">{description}</p>
    </div>
  );
};

export default UniversityCard;
