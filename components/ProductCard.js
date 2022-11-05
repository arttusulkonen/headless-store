import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  const { name, slug, regularPrice, price } = product.node;
  const { sourceUrl, altText } = product.node.image;

  return (
    <Link href={`/product/${slug}`}>
      <div className="w-full bg-gray-200 rounded-3xl overflow-hidden">
        <div className="relative group-hover:opacity-75 h-72">
          <Image
            src={sourceUrl}
            alt={altText}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>
      <p className="mt-1 text-sm text-gray-700">
        {price ? price : regularPrice}
      </p>
    </Link>
  );
};

export default ProductCard;
