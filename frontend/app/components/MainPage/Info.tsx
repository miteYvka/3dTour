import Image from 'next/image'

export const Info = () => {
  return (
    <div className="info">
      <div className="info-left">
        <h1 className="info-left-h1">
          Что такое 3D-тур интерьера?
        </h1>
        <p className="info-left-p">
          Это интерактивная 360° визуализация, позволяющая «прогуляться» по<br></br>будущему интерьеру до ремонта. Вы увидите пространство в реальном<br></br>масштабе, оцените освещение, расстановку мебели и избежите<br></br>ошибок.<br></br><br></br>
          Мы создаем фотореалистичные 3D-визуализации, чтобы ваш интерьер<br></br>был продуман до мелочей. Убедитесь в своем выборе еще до начала<br></br>работ!
        </p>
      </div>
      <Image
        src={"/img/info.png"}
        width={720}
        height={603}
        alt="-"
      />
    </div>
  )
}