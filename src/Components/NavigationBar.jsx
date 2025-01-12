import React from "react";

function NavigationBar() {
  return (
    <>
      <nav className=" font-sans flex items-center justify-between p-7 border-b-2 ">
        <div className=" flex gap-3 items-center ">
          <img
            width={63}
            height={63}
            src="https://apphousekitchen.com/wp-content/uploads/2024/09/cropped-AHK-Bildlogo-schwarz-1000px-square-300x300.png"
            alt="logo"
          />
          <div>
            <h2>AppHouseKitchen</h2>
            <p>Mac Software for the Gourmet</p>
          </div>
        </div>

        <div>
          <ul className=" flex items-center gap-7">
            <li>AlDente</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Support</li>
            <li>Blog</li>
            <li>About</li>
            <li className=" border bg-black text-white px-4">
              <button className=" px-4 py-3 ">Get AlDente Pro</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
