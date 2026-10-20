import { Link } from "react-router";
import { featuredTreatments } from "../data/featured";
import { MediaImage } from "./MediaLoader";

type Props = {
  limit?: number;
  className?: string;
};

function ProductCard({ limit, className = "w-full" }: Props) {
  const productsToShow = limit
    ? featuredTreatments.slice(0, limit)
    : featuredTreatments;

  return (
    <>
      {productsToShow.map((product) => (
        <div
          key={product.id}
          className={[
            "flex flex-col overflow-hidden rounded-xl bg-white shadow-sm",
            className,
          ].join(" ")}
        >
          <MediaImage
            src={product.image}
            alt={product.title}
            wrapperClassName="h-56"
            className="h-56 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-[1.1]"
          />
          <div className="flex flex-1 flex-col p-4 sm:p-5">
            <h2 className="text-xl font-bold text-[#1F1F1F] lg:text-[1.35rem]">
              {product.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 lg:text-[0.95rem]">
              {product.description}
            </p>
            <div className="mt-4 flex items-center justify-between text-xl font-bold lg:text-[1.2rem]">
              <span>{product.time}</span>
              <span>{product.price}</span>
            </div>

            <div className="mt-auto pt-6">
              <Link
                to="/book"
                className="block w-full text-center cursor-pointer rounded-md bg-[#7B4F2E] py-3 text-sm font-bold text-white transition-colors hover:bg-[#974e1a] sm:text-base lg:text-[0.98rem]"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductCard;
