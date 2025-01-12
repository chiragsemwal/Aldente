import React from 'react'

function DescriptionPage() {
  return (
    <>
    
    <div className=' font-sans bg-oneBg text-center ' >



    <div className=' pt-11 ' >
        <h2 className=' mb-6 font-bold text-6xl tracking-wide ' >
        AlDente - Charge Limiter
        </h2>
        <h2 className=' font-semibold text-2xl ' >
        The ALL-IN-ONE charge Limiter App for MacBooks.
        </h2>
    </div>


    <div className='flex mt-10 justify-center'>
    <img height={300} width={300} className='' src="https://apphousekitchen.com/wp-content/uploads/2024/09/512pt_Mac_1x.png" alt="aldente logo" />
    </div>

    <div className='flex items-center mt-5 justify-center gap-9'>
        <button className=' text-2xl tracking-wider bg-gray-500 text-black font-bold px-4 py-2 rounded-3xl' >Download Free</button>
        <button className=' text-2xl tracking-wider bg-yellow-500 text-black font-bold px-4 py-2 rounded-3xl' >Get AlDente Pro</button>
    </div>

    <div className=' pt-7' >
        <p className=' font-extralight ' >
        AlDente gives you the tools you need to extend the life of your MacBook battery.
        </p>
    </div>

    <div className=' p-14'>
        <h2 className=' text-4xl font-bold mb-5 ' >Why do I need this?
        </h2>
        <p  className=' text-left px-8 font-extralight ' >Li-ion batteries (like the one in your MacBook) last the longest when operated between 20% and 80%. Keeping your battery at 100% most of the time will significantly shorten the lifespan of your MacBook battery and Replacing an old battery is not only harmful to the environment but also costs around $ 200. With AlDente installed, you can set a charging limit in a more healthy charging range, and with more features like Heat Protection, Sailing Mode, and Calibration Mode you can keep your battery healthy even longer. If you want to learn more about keeping your battery healthy, check out this article at Battery University.
 
</p>
    </div>



    </div>
    </>
  )
}

export default DescriptionPage