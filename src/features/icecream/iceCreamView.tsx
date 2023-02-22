import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIceCreams = useAppSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useAppDispatch();
  return (
    <div className="mt-10 flex flex-col items-center gap-4">
      <h2 className="font-bold text-lg">Number of Ice Creams - {numOfIceCreams}</h2>
      <button
        className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        onClick={() => dispatch(ordered())}
      >
        Order Ice Cream
      </button>
      <div>
        <input
          className="p-2 m-3 border-black rounded border-2"
          type="number"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
        <button
          className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          onClick={() => dispatch(restocked(value))}
        >
          Restock Ice Creams
        </button>
      </div>
    </div>
  );
};
