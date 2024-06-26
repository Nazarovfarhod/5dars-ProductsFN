import { data } from "autoprefixer";
import { useFetch } from "../hook/useFetch";
import { Link, NavLink } from "react-router-dom";

function Products() {
  const url = "https://dummyjson.com/products";
  const { data: products, isPending, error } = useFetch(url);
  console.log(data);

  return (
    <div className="w-full text-center">
      {isPending && (
        <div className="w-full h-lvh flex justify-center pt-12">
          <h3 className="text-3xl font-semibold">Loading...</h3>
        </div>
      )}

      {error && <h3>{error}</h3>}

      <h1 className="font-bold font-serif mb-10 text-5xl">Products List</h1>

      {products && (
        <div className="flex flex-wrap gap-5 justify-center ">
          {products.products.map((product) => {
            // console.log(product);
            return (
              <div className="card container ml-auto mr-auto bg-base-100 image-full w-96 shadow-2xl  mb-5">
                <figure>
                  <img
                    className="blur-[2px]"
                    src={product.thumbnail}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body px-1 pb-5 ">
                  <h2 className="text-4xl font-bold font-serif h-44">
                    {product.title}
                  </h2>
                  <p className="line-clamp-1 font-thin">
                    {product.description}
                  </p>
                  <div className="card-actions justify-center ">
                    <Link
                      to={`/singleProduct/${product.id}`}
                      className="btn btn-wide font-bold font-serif"
                    >
                      Read More...
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
