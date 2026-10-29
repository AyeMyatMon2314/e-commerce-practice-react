function ProdcutDes({ sneaker }) {
  const companyName = sneaker.company.toUpperCase();
  const price = sneaker.price.toFixed(2);
  const promotion = sneaker.promotion;
  return (
    <div className="w-full flex flex-col justify-start gap-3">
      <p className="text-xs text-dark-grayish-blue">{companyName}</p>
      <p className="text-4xl font-semibold">{sneaker.title}</p>
      <p className="text-xs text-dark-grayish-blue leading-loose">
        {sneaker.description}
      </p>

      {/* price */}
      <div className="flex flex-row items-center justify-start gap-5">
        <p className="text-lg font-medium">${price}</p>
        <div className="px-5 py-2 rounded-sm flex items-center justify-center bg-black w-10 h-5 text-xs text-white">
          {promotion.discountPercent}%
        </div>
      </div>

      <p className="text-xs text-dark-grayish-blue line-through">
        ${promotion.originalPrice}
      </p>
      {/* button */}
      <div className="flex flex-row items-center justify-start gap-5 pt-3">
        {/* item count */}
        <div className="px-5 py-2 rounded-md flex items-center justify-between bg-light-grayish-blue w-auto h-9">
          <img src="./images/icon-minus.svg" className="w-2 h-[0.5]" />
          <p className="text-xs font-semibold mx-5">0</p>
          <img src="./images/icon-plus.svg" className="w-2 h-2" />
        </div>

        {/* cart */}
        <div className="px-5 py-2 rounded-md flex items-center justify-between bg-primary-orange w-auto h-9">
          <img src="./images/icon-cart.svg" className="w-5 stroke-black" />
          <p className="text-xs font-semibold mx-5">Add To Cart</p>
        </div>
      </div>
    </div>
  );
}

export default ProdcutDes;
