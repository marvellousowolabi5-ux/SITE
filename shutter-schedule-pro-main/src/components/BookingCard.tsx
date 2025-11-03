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
    <div className="group">
      <div className="aspect-square overflow-hidden mb-6 rounded-sm bg-accent">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{duration}</p>
      <p className="text-sm mb-6 leading-relaxed">{description}</p>
      <Button
        onClick={onBook}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-sm font-medium tracking-wide"
      >
        BOOK
      </Button>
    </div>
  );
};

export default BookingCard;
