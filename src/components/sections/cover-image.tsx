import { Button } from "../ui/button";
import Image from "next/image";

interface CoverImageProps {
  imageUrl: string;
  description: string;
  imageWidth: number;
  imageHeight: number;
}

const CoverImage: React.FC<CoverImageProps> = ({
  imageUrl,
  description,
  imageWidth,
  imageHeight,
}) => {
  return (
    <div className="flex flex-col items-center gap-2 pt-0 pb-0 w-full">
      <Image
        alt="Manuel Yemoh"
        className="rounded-full object-center object-cover border-2 border-white"
        src={imageUrl}
        style={{
          aspectRatio: "400/400",
          objectFit: "cover",
        }}
        width={imageWidth}
        height={imageHeight}
      />
      <p className="text-center max-w-lg text-sm tracking-wide/relaxed sm:text-base dark:text-gray-400 py-6">
        {description}
      </p>
    </div>
  );
};

export default CoverImage;
