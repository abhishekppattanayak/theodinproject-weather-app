import MainTemplate from "../templates/main.template";
import computerPng from '../assets/computer.png'

export default function ErrorPage() {
  const main = MainTemplate();
  main.classList.add('flex', 'justify-center', 'items-center', 'lg:gap-8', 'flex-wrap', 'flex-col', 'lg:flex-row', 'gap-2')
  
  const img = new Image()
  img.src = computerPng
  img.classList.add('aspect-square', 'h-16', 'sm:h-20', 'md:h-24', 'lg:h-28', 'xl:h-32')
  main.appendChild(img)

  const h1 = document.createElement('h1')
  h1.innerText = "We've ran into an error. Please refresh the tab."
  h1.classList.add('font-bold', 'text-white', 'text-lg', 'sm:text-xl', 'md:text-2xl', 'lg:text-3xl', 'xl:text-4xl')
  main.appendChild(h1)

  return main
}