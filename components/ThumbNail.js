import React from 'react'
import Image from 'next/image'
import { HandThumbUpIcon } from '@heroicons/react/24/outline'

const ThumbNail = ({res}) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original"
  return (
    <div className="group cursor-pointer p-2 transition duration-200 ease-in tranform sm:hover:scale-105 hover:z-50">
      <Image
      width={1080}
      height={1920}
      className= 'w-auto h-auto'
      alt='Image Not Present'
        src={`${BASE_URL}${res.backdrop_path || res.poster_path}`}
        priority
      />
      <div className='p-2'>
        <p className="truncate">{res.overview}</p>
        <h2 className="text-2xl transition-all duration-100 ease-in-out group-hover:text-white group-hover:font-bold  ">
          {res.title || res.original_title}
        </h2>
        <p className="flex  items-center opacity-0 group-hover:opacity-100">
          {res.release_date || res.first_air_date}
          <HandThumbUpIcon className="h-4 mx-2" />
          {res.vote_count}
        </p>
      </div>
    </div>
  );
}

export default ThumbNail