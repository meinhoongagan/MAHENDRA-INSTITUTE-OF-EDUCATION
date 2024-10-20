import React from 'react'

const TestCard = ({head ,img ,body}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden  hover:shadow-xl hover:shadow-slate-500">
        <div className="p-6">
          <img src={img} alt="Course 3" className="h-40 mb-3"/>
          <h3 className="text-xl font-bold mb-2">{head}</h3>
          <p className="text-gray-600 mb-4">
            {body}
          </p>
        </div>
    </div>
  )
}

export default TestCard
