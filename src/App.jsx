import React from 'react';

const App = () => {
  return (
    <>
      <div className='flex justify-center items-center h-screen'>

        <div className='m-4'>
          <button className='bg-[#e5e4e2] text-white px-4 py-2 mb-4 mx-6 rounded-full w-28 h-28' />
          <p className='text-center'>Platinum White</p>
        </div>
        <div className='m-4'>
          <button className='bg-[#006552] text-white px-4 py-2 mb-4 mx-6 rounded-full w-28 h-28' />
          <p className='text-center'>Nordic Forest</p>
        </div>
        <div className='m-4'>
          <button className='bg-[#9a2a2a] text-white px-4 py-2 mb-4 mx-6 rounded-full w-28 h-28' />
          <p className='text-center'>Premium Crystal Garnet</p>
        </div>
        <div className='m-4'>
          <button className='bg-[#68a0b0] text-white px-4 py-2 mb-4 mx-6 rounded-full w-28 h-28' />
          <p className='text-center'>Premium Crystal Blue</p>
        </div>
        <div className='m-4'>
          <button className='bg-[#191970] text-white px-4 py-2 mb-4 mx-6 rounded-full w-28 h-28' />
          <p className='text-center'>Midnight Blue Beam</p>
        </div>
        <div className='m-4'>
          <button className='bg-[#000000] text-white px-4 py-2 mb-4 mx-6 rounded-full w-28 h-28' />
          <p className='text-center'>
            Crystal Black <b class='fw-bold'>"Lights off"</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
