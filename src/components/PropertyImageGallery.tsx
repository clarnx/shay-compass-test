interface PropertyImageGalleryProps {
  images: string[];
  propertyName: string;
}

export default function PropertyImageGallery({ images, propertyName }: PropertyImageGalleryProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Property Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="group bg-white/90 backdrop-blur-sm border border-gray-300 hover:border-gray-500 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative">
              {/* Placeholder for actual images */}
              <div className="absolute inset-0 flex items-center justify-center text-base-content/40 font-medium">
                <div className="text-center">
                  <div className="text-sm">Property Image {index + 1}</div>
                  <div className="text-xs mt-1 opacity-60">{image}</div>
                </div>
              </div>
              {/* When real images are added, use Next.js Image component:
              <Image
                src={image}
                alt={`${propertyName} - Image ${index + 1}`}
                fill
                className="object-cover"
              />
              */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
