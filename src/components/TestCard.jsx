import React from 'react'

const TestCard = ({head ,img ,body}) => {
  return (
    <div className="bg-zinc-50 text-center text-surface/75 dark:bg-gradient-to-r from-cyan-400 to-blue-400 dark:text-black/75 lg:text-left rounded-lg shadow-md overflow-hidden  hover:shadow-xl hover:shadow-slate-500">
        <div className="p-6">
          <img src={img} alt="Course 3" className="h-40 mb-3"/>
          <h3 className="text-xl font-bold mb-2">{head}</h3>
          <p className="text-white mb-4">
            {body}
          </p>
        </div>
    </div>
  )
}

export default TestCard