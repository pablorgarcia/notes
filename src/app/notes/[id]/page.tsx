export default function Notes({ params }) {
  const { id } = params
  return (
    <div>
      <h1>Este es el post { id }</h1>
    </div>
  )
}