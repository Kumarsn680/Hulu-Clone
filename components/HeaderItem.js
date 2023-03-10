import React from 'react'

const HeaderItem = ({name,Icon}) => {
  return (
    <div className="group flex flex-col w-12 sm:w-20 items-center justify-evenly cursor-pointer hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {name}
      </p>
    </div>
  );
}

export default HeaderItem