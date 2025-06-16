// app/products/[productId]/page.js

const DynamicProductPage = async ({ params }) => {
console.log(params);
    const { productId } = await params; 
    
    console.log("Product ID:", productId);

  return (
    <div>
      <h2>Dynamic Product Page for {productId}</h2>
    </div>
  );
};

export default DynamicProductPage;
