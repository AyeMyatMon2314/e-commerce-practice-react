import React from "react";

function ProductImage({ products, sneaker, setSneaker }) {
  const sneakerInfo = products[sneaker-1];
  return (
    <>
      <div className="flex flex-col gap-10 w-full">
        <img src={sneakerInfo.productImage} className="size-70 rounded-md" />
        <div className="flex flex-row gap-5">
          {products.map((item, index) => {
            const thumbnail = item.thumbnails;
            const isSelected = item.id === sneaker;
            return (
              <React.Fragment key={index}>
                <img
                  src={thumbnail}
                  className={`size-14 rounded-md object-cover ${isSelected ? "border-2 border-primary-orange optacity-100" : "cursor-pointer"}`}
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
    </>
  );
}

export default ProductImage;
