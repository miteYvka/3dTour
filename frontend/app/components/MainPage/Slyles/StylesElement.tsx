import Image from "next/image"

interface IStylesElement {
  title: string
  src: string
}

export const StylesElement = ({title, src} : IStylesElement) => {
  return (
    <div className="styles-element">
      <Image
        src={src}
        width={305}
        height={375}
        alt="error"
      />
      <p className="styles-element-p">{title}</p>
    </div>
  )
}