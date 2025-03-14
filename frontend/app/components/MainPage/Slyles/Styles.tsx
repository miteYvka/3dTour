import { StylesElement } from "./StylesElement"

export const Styles = () => {
  return (
    <div className="styles">
      <h1 className="styles-h1">Стили</h1>
      <div className="styles-line">
        <StylesElement
          title="Минимализм"
          src="/img/minimalism.png">
        </StylesElement>
        <StylesElement
          title="Эко-стиль"
          src="/img/eco.png">
        </StylesElement>
        <StylesElement
          title="Функциональный"
          src="/img/function.png">
        </StylesElement>
        <StylesElement
          title="Неоклассика"
          src="/img/neoclassic.png">
        </StylesElement>
      </div>
      <div className="styles-line">
        <StylesElement
          title="Скандинавский"
          src="/img/scandinav.png">
        </StylesElement>
        <StylesElement
          title="Классический"
          src="/img/classic.png">
        </StylesElement>
        <StylesElement
          title="Современный"
          src="/img/new.png">
        </StylesElement>
        <StylesElement
          title="Свой стиль"
          src="/img/mystyle.png">
        </StylesElement>
      </div>
    </div>
  )
} 