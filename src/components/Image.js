export default function ImageContainer (png, title, data) {
  const div = document.createElement('div')
  div.classList.add('p-1', 'sm:p-2','md:p-4','lg:p-6','rounded-lg', 'h-32', 'sm:h-36', 'md:h-40',  'lg:h-48', 'aspect-square', 'flex', 'flex-col', 'justify-center', 'items-center', 'border-white', 'border-2')

  const img = new Image()
  img.classList.add('h-full', 'aspect-square')
  img.src = png
  div.appendChild(img)

  const h1 = document.createElement('h1')
  h1.innerText = title
  div.appendChild(h1)

  const h2 = document.createElement('h1')
  h2.innerText = data
  div.appendChild(h2)

  return div
}