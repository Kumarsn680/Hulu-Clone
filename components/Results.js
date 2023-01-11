import React from 'react'
import ThumbNail from './ThumbNail'
const Results = ({result}) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
      {result.map((res) => (
        <ThumbNail key={res.id} res={res} />
      ))}
    </div>
  );
}

export default Results