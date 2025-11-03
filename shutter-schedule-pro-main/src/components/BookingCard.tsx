import { Button } from "@/components/ui/button";

interface BookingCardProps {
  title: string;
  duration: string;
  description: string;
  image: string;
  imageAlt: string;
  price?: string;
  onBook: () => void;
}

const BookingCard = ({
  title,
  duration,
  description,
  image,
  imageAlt,
  price,
  onBook,
}: BookingCardProps) => {
  return (
    <div className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-sm overflow-hidden mb-10">
      <div className="flex flex-col md:flex-row">
        {/* Left: Image */}
        <div className="md:w-[250px] w-full h-[260px] md:h-[250px] overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right: Content */}
        <div className="relative flex-1 p-6 flex flex-col justify-between">
          {/* BOOK button */}
          <Button
            onClick={onBook}
            className="absolute top-4 right-4 bg-black text-white text-xs px-4 py-2 rounded-none hover:bg-gray-800"
          >
            BOOK
          </Button>

          {/* Title, duration, price */}
          <div>
            <h3 className="text-base font-bold mb-1 capitalize tracking-tight">
              {title}
            </h3>
            <p className="text-sm text-gray-700 mb-2">{duration}</p>
            {price && (
              <p className="text-sm font-semibold text-primary mb-3">
                {price}
              </p>
            )}
            <p className="text-sm text-gray-900 leading-relaxed line-clamp-4 md:line-clamp-3">
              {description}
            </p>
          </div>

          {/* Show all */}
          <div className="mt-4">
            <button className="text-xs font-semibold uppercase hover:underline tracking-wide">
              Show All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;


