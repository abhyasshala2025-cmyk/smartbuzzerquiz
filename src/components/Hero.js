export default function Hero(props) {
  const { image, overline, title, description, cta } = props;

  return (
    <section className="hero bleed">
      <img src={imgage.url} width="100%" alt={imgage.title} />
      <div className="body">
        <div className="overline">{overline}</div>
        <h1 className="h2">{title}</h1>
        <p>{description}</p>
        <a className="button" href={cta.url}>
          {cta.url}
        </a>
      </div>
    </section>
  );
}
