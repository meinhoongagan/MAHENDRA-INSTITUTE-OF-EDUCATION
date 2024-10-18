import React from 'react'

const Payment = () => {
  return (

   <div className="mt-40 mb-20 bg-gradient-to-r from-cyan-200 to-blue-200 py-10 px-20 rounded-xl" id="payment">
   <h2 className="text-3xl font-bold mb-8 flex justify-center">Payment Options</h2>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     {/* QR Code */}
     <div className="bg-white rounded-lg shadow-md overflow-hidden  p-6">
       <img src="/images/qr-code.png" alt="QR Code" className="h-40 mx-auto" />
       <h3 className="text-xl font-bold mb-2">Scan QR Code</h3>
       <p className="text-gray-600 mb-4">
         Scan the QR code to make a payment.
       </p>
     </div>
     {/* UPI ID */}
     <div className="bg-white rounded-lg shadow-md overflow-hidden  p-6">
       <img src="/images/upi-logo.png" alt="UPI Logo" className="h-40 mx-auto" />
       <h3 className="text-xl font-bold mb-2">UPI ID</h3>
       <p className="text-gray-600 mb-4">
         You can also make a payment using your UPI ID.
       </p>
       <p className="text-gray-600 mb-4">UPI ID: yourname@upi</p>
     </div>
     {/* Banking Details */}
     <div className="bg-white rounded-lg shadow-md overflow-hidden  p-6">
       <img src="/images/banking.png" alt="Banking" className="h-40 mx-auto" />
       <h3 className="text-xl font-bold mb-2">Banking Details</h3>
       <p className="text-gray-600 mb-4">
         You can also make a payment through bank transfer.
       </p>
       <p className="text-gray-600 mb-4">
         Account Number: 12345678
         <br />
         IFSC Code: ABCD1234
       </p>
     </div>
   </div>
 </div>

  )
}

export default Payment