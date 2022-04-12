import Thumbnail from "./Thumbnail"

export default function Results({ results }) {
  return (
    <main>
        {results.map(result => (
            <Thumbnail key={result.id} result={result}/>
        ))}
    </main>
  )
}
