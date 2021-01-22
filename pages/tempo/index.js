export function Tempo(props) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <div>
      <div>{dynamicDateString}(Dinâmico)</div>
      <div>{props.staticDateString}(Estático)</div>
    </div>
  );
}
export function getStaticProps() {
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString,
    },
    revalidate: 1, //revalida os dados a cada 1s
  };
}

export default Tempo;
