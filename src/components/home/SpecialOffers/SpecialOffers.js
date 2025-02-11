import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
      <Product
            _id="100002"
            img="https://www.innhanhsieure.com/thumb/500x500/1/data/upload/webp/VOUCHER.webp"
            productName="Thẻ voucher"
            price="1,000d/1 tờ"
            color="Black"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          /><Product
          _id="100002"
          img="https://www.innhanhsieure.com/thumb/500x500/1/data/upload/webp/VOUCHER.webp"
          productName="Thẻ voucher"
          price="1,000d/1 tờ"
          color="Black"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        /><Product
        _id="100002"
        img="https://www.innhanhsieure.com/thumb/500x500/1/data/upload/webp/VOUCHER.webp"
        productName="Thẻ voucher"
        price="1,000d/1 tờ"
        color="Black"
        badge={true}
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
      /><Product
      _id="100002"
      img="https://www.innhanhsieure.com/thumb/500x500/1/data/upload/webp/VOUCHER.webp"
      productName="Thẻ voucher"
      price="1,000d/1 tờ"
      color="Black"
      badge={true}
      des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
    />
      </div>
    </div>
  );
};

export default SpecialOffers;
