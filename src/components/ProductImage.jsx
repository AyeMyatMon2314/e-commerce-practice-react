import React from "react";

function ProductImage({ products, sneaker, setSneaker }) {
  const sneakerInfo = products[sneaker - 1];
  return (
    <>
      <div className="flex justify-center w-full ">
        <div className="w-[80%] bg-amber-50">
          <img src={sneakerInfo.productImage} className="w-full rounded-md" />
          <div className="grid grid-cols-4 gap-5 mt-6">
            {products.map((item, index) => {
              const thumbnail = item.thumbnails;
              const isSelected = item.id === sneaker;
              return (
                <React.Fragment key={index}>
                  <img
                    src={thumbnail}
                    className={` rounded-md object-cover ${isSelected ? "border-2 border-primary-orange optacity-100" : "cursor-pointer"}`}
                    onClick={() => {
                      console.log(item.id);
                      setSneaker(item.id);
                    }}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductImage;
