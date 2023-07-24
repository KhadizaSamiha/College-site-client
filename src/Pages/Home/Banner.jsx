import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/dMf9gn9/group-diverse-grads-throwing-caps-up-sky.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content font-serif">
                <div className="max-w-md text-white">
                    <h1 className="mb-5 text-5xl font-bold">Find Your College of choice</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <input type="text" placeholder="Type here" className="input input-bordered border-lime-500 bg-opacity-10 w-full max-w-xs" />
                    <label htmlFor="" className='text-lime-500 btn btn-outline'>Search</label>
                </div>
            </div>
        </div>
    );
};

export default Banner;