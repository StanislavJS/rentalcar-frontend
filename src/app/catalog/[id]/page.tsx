type CarPageProps = {
  params: { id: string };
};

export default function CarPage({ params }: CarPageProps) {
  return (
    <section className="container" style={{ padding: '48px 0' }}>
      <h1>Car Details</h1>
      <p>ID: {params.id}</p>
    </section>
  );
}
