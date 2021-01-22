import { useState } from "react";

export default function Home() {
  const [contar, setContar] = useState(5);
  function somar() {
    setContar(contar + 1);
  }
  return (
    <div style={{flex: 1,display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <h1>Home</h1>
      <a href="/sobre">Ir para sobre</a>
    </div>
  );
}
