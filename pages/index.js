import { useState } from "react";

export default function Home() {
  const [contar, setContar] = useState(5);
  function somar() {
    setContar(contar + 1);
  }
  return (
    <div>
      homeeeee
      {contar}
      <button onClick={somar}>teste</button>
    </div>
  );
}
