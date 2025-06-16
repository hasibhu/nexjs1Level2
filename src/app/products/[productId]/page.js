

const DynamicProductPage = async ({ params }) => {
    
    const products = await params;

    console.log(products);

    return (
        <div>
            <h2>Dynamic Product page</h2>
        </div>
    );
};

export default DynamicProductPage;