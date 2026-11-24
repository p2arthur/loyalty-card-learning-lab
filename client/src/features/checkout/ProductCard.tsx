export default function ProductCard({
  cardTitle,
  cardDescription,
}: {
  cardTitle: string;
  cardDescription: string;
}) {
  return (
    <>
      <div>
        <div>
          <h1>{cardTitle}ssss</h1>
        </div>
        <div>
          <h3>{cardDescription}</h3>
        </div>
      </div>
    </>
  );
}
