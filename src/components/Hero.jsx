import React from 'react'

const Hero = () => {
  return (
    <div className="container mx-auto px-4 mt-5">
      <div className="flex flex-col space-y-8">
        <div className="text-center" id="home">
          <h2 className="bg-blue-300 shadow-xl shadow-blue-400 py-5 text-3xl font-bold rounded-xl">Home</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-cyan-200 to-blue-200 p-8 rounded-xl">
            <h1 className="font-bold text-2xl mb-4">lorem ipsum jsdbva ajbn</h1>
            <p className="overflow-auto max-h-96">
              lorem ipsum qlnf x;oiainc na; uuhc kjhflkjb ciulkjc jhkjb lorem ipsum
              qlnf x;oiainc na; uuhc kjhflkjb ciulkjc jhkjb lorem ipsum qlnf
              x;oiainc na; uuhc kjhflkjb ciulkjc jhkjb lorem ipsum qlnf x;oiainc na;
              uuhc kjhflkjb ciulkjc jhkjb
              {/* ... (rest of the lorem ipsum text) ... */}
            </p>
          </div>
          
          <div className="flex justify-center items-center">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="max-w-full h-auto md:max-w-xs lg:max-w-sm"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero