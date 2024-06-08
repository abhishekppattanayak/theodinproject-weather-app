export default function ImageContainer (png,  text) {
  const div = document.createElement('div')
  div.classList.add('p-1', 'sm:p-2','md:p-4','lg:p-6','rounded-lg', 'h-24', 'sm:h-28', 'md:h-32',  'lg:h-36', 'aspect-square', 'flex', 'flex-col', 'justify-center', 'items-center', 'lg:gap-4', 'border-white', 'border-2')

  const img = new Image()
  img.classList.add('h-full', 'aspect-square')
  img.src = png
  div.appendChild(img)

  const emp = document.createElement('h1')

  emp.innerText = text
  div.appendChild(emp)

  return div
}