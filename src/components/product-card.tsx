import { featuredTreatments } from "../data/featured";

type Props = {
  limit?: number;
};

function ProductCard({ limit }: Props) {
  const productsToShow = limit
    ? featuredTreatments.slice(0, limit)
    : featuredTreatments;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {productsToShow.map((product) => (
        <div
          key={product.id}
          className="flex h-full w-full flex-col overflow-hidden rounded-xl bg-white"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-56 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-[1.2]"
          />
          <div className="flex flex-1 flex-col p-4 sm:p-5">
            <h2 className="text-xl font-bold text-[#1F1F1F]">
              {product.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
              {product.description}
            </p>
            <div className="flex justify-between items-center mt-4 text-xl font-bold">
              <span>{product.time}</span>
              <span>{product.price}</span>
            </div>

            <div className="mt-auto pt-6">
              <button className="w-full bg-[#7B4F2E] cursor-pointer text-white font-bold text-sm sm:text-base py-3 rounded-md hover:bg-[#974e1a]">
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
