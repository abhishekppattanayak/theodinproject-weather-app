import MainTemplate from "../templates/main.template"
import magnifyingGlass from "../assets/magnifying-glass.png"

export default function Invalid (res) {
  const main = MainTemplate()
  main.classList.add('flex', 'justify-center', 'items-center', 'text-5xl', 'font-bold', 'text-white', 'gap-4')

  const img = new Image()
  img.src = magnifyingGlass
  img.classList.add('h-20' , 'aspect-square', 'rotate-45')
  main.appendChild(img)
  
  const msg = document.createElement('div')
  msg.innerText = res.error.message
  main.appendChild(msg)

  return main
}