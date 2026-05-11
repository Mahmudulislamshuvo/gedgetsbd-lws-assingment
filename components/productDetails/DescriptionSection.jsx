const DescriptionSection = ({ product }) => {
  const productData = product?.data;

  const productSpecifications = Object.values(productData?.specifications);

  return (
    <div id="description-tab" className="tab-content">
      <h2 className="text-xl font-bold mb-4">Product Description</h2>
      <div className="prose max-w-none text-sm">
        <p className="mb-4">{productData?.description}</p>
        {/* <p className="mb-4">
          The stunning 16-inch Liquid Retina XDR display features Extreme
          Dynamic Range, over 1000 nits of brightness for HDR content, and pro
          reference modes. The advanced thermal system sustains pro-level
          performance, and the six-speaker sound system with force-cancelling
          woofers creates an immersive audio experience.
        </p> */}
        <h3 className="font-bold mt-6 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside space-y-1">
          {productSpecifications.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
          <li>Warranty Period : {productData?.warrantyPeriod}</li>
        </ul>
      </div>
    </div>
  );
};

export default DescriptionSection;
