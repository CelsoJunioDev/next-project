import Link from "next/link";

export default function Sobre() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Sobre</h1>
      <Link href="/">
        <a>Ir para Home</a>
      </Link>
    </div>
  );
}
