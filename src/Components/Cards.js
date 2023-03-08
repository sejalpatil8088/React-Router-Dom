import React from 'react'

const Cards = ({  imgSrc }) => {
    return (
      <div className="card w-96 bg-gray shadow-2xl">
        <figure className="px-10 pt-10">
          <img
            src={imgSrc}
            alt="Potrait of the Person"
            className="rounded-xl w-[300px] h-[300px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-[30px] font-bold">Tops</h2>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    );
  };

export default Cards;