import React from 'react'

const LatestElements = () => {
    return (
        <div className='flex flex-col items-start gap-4'>
            <img className='w-90 h-80' src="./src/assets/image copy.png" alt="" />
            <div className='flex flex-col'>
                <h4 className='font-semibold'>Project Title</h4>
                <p className='font-regular text-[17px]'>UI, Art drection</p>
            </div>
        </div>
    )
}

const LatestWork = () => {
    return (
        <div className='flex flex-col items-center gap-8 py-11.5'>
            <h3 className='font-semibold text-[20px]'>Latest Work</h3>
            <div className='grid grid-cols-3 gap-8'>
                <LatestElements />
                <LatestElements />
                <LatestElements />
                <LatestElements />
                <LatestElements />
                <LatestElements />
            </div>
        </div>
    )
}

export default LatestWork
