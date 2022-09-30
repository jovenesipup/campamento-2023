import React from "react";
import camp1 from '../assets/img/1.jpg'
import camp2 from '../assets/img/2.jpg'
import camp3 from '../assets/img/3.jpg'
import camp4 from '../assets/img/4.jpg'
import camp5 from '../assets/img/5.jpg'
import camp6 from '../assets/img/6.jpg'
import camp7 from '../assets/img/7.jpg'
import camp8 from '../assets/img/8.jpg'

export default function galeria() {
  return (
    <div className="container py-28 lg:px-28">
      <div className="">
        <h1 className="text-slate-50 text-5xl">Galeria</h1>
      </div>
      <div>
        <div>
          <h2>Campamento CAMEN</h2>
        </div>
        <div>
          <img className="lg:max-w-lg" src={camp1} alt="" />
          <img className="lg:max-w-lg" src={camp2} alt="" />
          <img className="lg:max-w-lg" src={camp3} alt="" />
          <img className="lg:max-w-lg" src={camp4} alt="" />
          <img className="lg:max-w-lg" src={camp5} alt="" />
          <img className="lg:max-w-lg" src={camp6} alt="" />
          <img className="lg:max-w-lg" src={camp7} alt="" />
          <img className="lg:max-w-lg" src={camp8} alt="" />
        </div>
      </div>
    </div>
  );
}
