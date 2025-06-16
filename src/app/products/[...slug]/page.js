const CatchAllRoutePage = ({ params }) => {
  const path = params.slug?.join("/") || "";

  return (
    <div>
      <h2>Catch All Route Page</h2>
      <p>Your search for <strong>{path}</strong> is not available.</p>
    </div>
  );
};

export default CatchAllRoutePage;
