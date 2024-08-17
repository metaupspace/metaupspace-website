import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { reviews } from "@/lib/data";
import Image from "next/image";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 h-32 cursor-pointer overflow-hidden rounded-xl border p-4",
        // Custom styles based on the provided image
        "bg-[#19191A] border-none flex items-center justify-center"
      )}
    >
      <div className="flex flex-row justify-center items-center gap-4">
        <Image className="h-12 mb-2" alt="review" src={img} />
        {/* <figcaption className="text-sm font-medium text-white">
          {name}
        </figcaption> */}
        <p className="text-md font-medium text-gray-400">{name}</p>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="bg-black pt-20 text-white">
      <h2 className="text-center text-lg font-semibold mb-20">
        Trusted By Leading Brands, Startups & Associated Partner’s Brands
      </h2>
      <div className="relative bg-black flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg py-30">
        <div className="flex space-x-4 mt-4">
          <Marquee
            pauseOnHover
            // reverse={reverse}
            className="[--duration:20s] flex space-x-4"
          >
            {firstRow.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>
        </div>
        <div className="flex space-x-4 mt-4">
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:20s] flex space-x-4"
          >
            {secondRow.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#19191A]"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#19191A]"></div>
      </div>
    </div>
  );
}

export { ReviewCard };
