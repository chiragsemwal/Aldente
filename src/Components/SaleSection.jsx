import React from "react";

function SaleSection() {
  return (
    <>
      <div className=" font-sans text-center bg-black text-white p-16 flex flex-col gap-11 ">
        <div>
          <h2 className=" text-6xl uppercase mb-5">-20% Black Friday sale!</h2>
          <h2 className=" text-3xl font-light">
            Get -20% Forever on AlDente Pro Subscription and Lifetime License.
            Only Today.
          </h2>
        </div>

        <div>
          <button className="text-3xl bg-yellow-500 text-black font-bold p-2 rounded-3xl">
            Get Aldente Pro Now!
          </button>
        </div>
      </div>
    </>
  );
}

export default SaleSection;
