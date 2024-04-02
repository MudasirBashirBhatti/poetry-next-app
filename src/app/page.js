import Poetry from "./components/Poetry";
import shakir from "./shakir";

export default function Home() {
  return (
    <div>
      {shakir.map((e) => (
        <Poetry
          count={e.id + 1}
          content={e.poetry.map((val) => (
            <div>{val}</div>
          ))}
        />
      ))}
    </div>
  );
}
