import Image from "next/image"

export const Working = () => {
  return (
    <div className="working">
      <h1 className="working-h1">Как это работает?</h1>
      <div className="working-container">
        <div className="working-container-element">
          <Image
            src={"/img/lupa.svg"}
            width={24}
            height={24}
            alt="-"
          />
          <h2 className="working-container-element-h2">
            Выберите стиль
          </h2>
          <p className="working-container-element-p">
            Стилистика - это залог успешного дизайна.
          </p>
        </div>
        <div className="working-container-element">
          <Image
            src={"/img/yes.svg"}
            width={24}
            height={24}
            alt="-"
          />
          <h2 className="working-container-element-h2">
            Обсудите детали с менеджером
          </h2>
          <p className="working-container-element-p">
            Напишите нам и мы начнем сотрудничество!
          </p>
        </div>
        <div className="working-container-element">
          <Image
            src={"/img/bank.svg"}
            width={24}
            height={24}
            alt="-"
          />
          <h2 className="working-container-element-h2">
            Узнайте стоимость
          </h2>
          <p className="working-container-element-p">
            Цена не меняется в процессе ремонта.
          </p>
        </div>
        <div className="working-container-element">
          <Image
            src={"/img/tree.svg"}
            width={24}
            height={24}
            alt="-"
          />
          <h2 className="working-container-element-h2">
            Получите результат
          </h2>
          <p className="working-container-element-p">
            Мы даём гарантию 1 год на ремонт.
          </p>
        </div>
      </div>
    </div>
  )
}