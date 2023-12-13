import  { useState } from 'react';

const BestPlaceToVisit = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleOverlayClick = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <h2 className="text-5xl font-bold p-6 text-center mt-20">BEST PLACE TO VISIT</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          'https://i.ibb.co/sPTPsFc/saint-martin.jpg',
          'https://i.ibb.co/LJw7kwM/Sundarbans.jpg',
          'https://i.ibb.co/dp6zWZz/bandorbon-pmg.jpg',
          'https://i.ibb.co/XsH1RsQ/rangamati.jpg',
          'https://i.ibb.co/gTQMwrJ/sylet.jpg',
          'https://i.ibb.co/YXc68Yv/dhaka.jpg',
          'https://i.ibb.co/YQszxYm/sam-0281-1620616271.webp',
          'https://i.ibb.co/8rg1q96/lal-bagh.jpg',
        ].map((imageUrl, index) => (
          <div key={index} className="relative overflow-hidden group" onClick={() => handleImageClick(imageUrl)}>
            <img
              src={imageUrl}
              alt=""
              className="transition-transform duration-300 transform scale-100 group-hover:scale-110 cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Modal for larger image */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
          onClick={handleOverlayClick}
        >
          <img
            src={selectedImage}
            alt=""
            className="max-w-3/4 max-h-3/4 object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default BestPlaceToVisit;