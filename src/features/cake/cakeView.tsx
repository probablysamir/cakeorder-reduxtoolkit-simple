import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const [value, setValue] = useState(1);
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();
  return (
    <div className="mt-1 flex flex-col items-center gap-4">
      <h1 className="text-red-500 font-bold text-xl">
        Offer!! Buy a cake and get an ice-cream for free
      </h1>
      <h2 className="font-bold text-lg">Number of Cakes - {numOfCakes}</h2>
      <button
        className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        onClick={() => dispatch(ordered())}
      >
        Order Cake
      </button>
      <div>
        <input
          type="number"
          className="p-2 m-3 border-black rounded border-2"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
        <button
          className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          onClick={() => dispatch(restocked(value))}
        >
          Restock Cake
        </button>
      </div>
    </div>
  );
};
