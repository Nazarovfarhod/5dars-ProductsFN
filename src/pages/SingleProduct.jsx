import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";

function SingleProduct() {
  const { id } = useParams();
  const url = "https://dummyjson.com/products/" + id;
  console.log(url);
  const { data, isPanding, error } = useFetch(url);
  console.log(data);

  return (
    <div>
      {data && (
        <div className="card lg:card-side bg-base-100 shadow-2xl">
          <figure>
            <img
              className="h-[550px] w-[1000px] bg-cover"
              src={data.thumbnail}
              alt="Album"
            />
          </figure>
          <div className="card-body w-full text-center">
            <h2 className="text-6xl font-bold font-serif text-center mb-5">
              {data.title}
            </h2>
            <p className="text-xl italic">{data.description}</p>
            <div className="flex items-center justify-around mb-5">
              <span className="font-semibold line-through opacity-50">
                <span className="font-bold text-xl font-serif ">
                  Old Price:{" "}
                </span>
                {data.price}${" "}
              </span>
              <span className="px-6 py-4 rounded-[200px] bg-red-400 font-bold">
                <span className="font-serif">Sale:</span>
                {data.discountPercentage}%{" "}
              </span>
            </div>
            <div className="flex items-center px-24 gap-52 mb-5">
              <span className="font-semibold">
                <span className="font-bold text-xl font-serif ">
                  New Price:{" "}
                </span>
                {(
                  data.price -
                  (data.price * data.discountPercentage) / 100
                ).toFixed(2)}
                ${" "}
              </span>
              <span className=" font-bold">
                <span className="font-serif">
                  <i class="fa-solid fa-star text-yellow-300 mr-2"></i>
                </span>
                {data.rating}{" "}
              </span>
            </div>
            <div className="card-actions justify-center">
              <Link
                to="/products"
                className="btn btn-outline px-10 text-xl btn-info"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>

      )}
    </div>
  );
}

export default SingleProduct;
