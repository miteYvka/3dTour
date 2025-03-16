import Image from 'next/image'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-block"></div>
        <div className="footer-top-block">
          <p className="footer-top-p">Связь с нами</p>
          <h1 className="footer-top-h1">+7 (800) 600-49-34</h1>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-p">
          Все предложения, указанные на сайте, не являются публичной офертой
        </p>
        <Image
          className='footer-bottom-img'
          src={"/img/inst.svg"}
          width={24}
          height={24}
          alt="inst"
        />
        <Image
          className='footer-bottom-img'
          src={"/img/ws.svg"}
          width={24}
          height={24}
          alt="ws"
        />
        <Image
          className='footer-bottom-img'
          src={"/img/vk.svg"}
          width={24}
          height={24}
          alt="vk"
        />
      </div>
    </div>
  )
}