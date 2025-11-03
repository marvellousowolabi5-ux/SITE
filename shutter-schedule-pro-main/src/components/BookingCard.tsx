import { Button } from "@/components/ui/button";

interface BookingCardProps {
  title: string;
  duration: string;
  description: string;
  image: string;
  imageAlt: string;
  onBook: () => void;
}

const BookingCard = ({
  title,
  duration,
  description,
  image,
  imageAlt,
  onBook,
}: BookingCardProps) => {
  return (
    <div className="bg-background shadow-sm hover:shadow-md transition-all rounded-sm overflow-hidden">
      {/* Container: image left, content right */}
      <div className="flex flex-col md:flex-row h-full md:h-[400px]">
        
        {/* Image Section */}
        <div className="md:w-[45%] w-full h-[280px] md:h-full bg-accent overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 relative flex flex-col justify-between">
          {/* Book Button */}
          <Button
            onClick={onBook}
            className="absolute top-4 right-4 bg-black text-white text-xs px-4 py-2 rounded-none hover:bg-gray-800"
          >
            BOOK
          </Button>

          {/* Text Content */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-1 uppercase tracking-tight">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">{duration}</p>
            <p className="text-sm leading-relaxed md:line-clamp-5 line-clamp-4">
              {description}
            </p>
          </div>

          {/* Show All Link */}
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

