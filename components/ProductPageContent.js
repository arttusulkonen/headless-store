import Image from 'next/image';
import ProductForm from './ProductForm';

export default function ProductPageContent({ product }) {
  console.log(product);
  return (
    <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
      <div className="w-fill max-w-md border bg-white rounded-2xl overflow-hidden shadow-lg md:w-1/2">
        <div className="relative h-96 w-fill">
          <Image
            src={product.image.sourceUrl}
            alt={product.image.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <ProductForm />
    </div>
  );
}
