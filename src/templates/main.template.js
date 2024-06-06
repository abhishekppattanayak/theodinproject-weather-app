export default function MainTemplate () {
  const main = document.createElement('main')
  main.classList.add('grow-[5]', 'border', 'border-white', 'border-2', 'xl:mx-8', 'lg:mx-4', 'md:mx-2', 'my-2', 'sm:mx-1', 'bg-white/10', 'backdrop-blur-xl', 'rounded-lg')
  return main
}