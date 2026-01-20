import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "./skeleton/ProductCardSkeleton";

const NewArrivals = () => {
  const {
    data: products,
    isPending,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("https://api.escuelajs.co/api/v1/products", {
        params: {
          limit: 4,
          offset: 0,
        },
      });
      return res.data;
    },
  });

  console.log(products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {isPending ? (
        [...Array(4)].map((_, index) => <ProductCardSkeleton key={index} />)
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};
export default NewArrivals;
