import NavigationAside from "@component/app/components/navigation-aside/navigation-aside"

export default function Writing({ params }) {
  const { id } = params
  return (
    <div>
      <h1>Este es el post { id }</h1>
      <NavigationAside />
    </div>
  )
}