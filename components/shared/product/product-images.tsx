'use client';
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        className="min-h-[300px]"
        src={images[current]}
        alt={images[0]}
        width={1000}
        height={1000}
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              'border mr-2 cursor-pointer hover:border-orange-600',
              current === index && ''
            )}
          >
            <Image src={image} alt={image} height={100} width={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
