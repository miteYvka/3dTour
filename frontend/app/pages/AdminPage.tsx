'use client'
import Image from 'next/image'
import { ListStyle } from '../components/Admin/ListStyle';
import { useState } from 'react';
import ModalRoomCreate from '../components/Admin/ModalRoomCreate';

const styleRoom: string[] = [
  "Функциональный",
  "Минимализм",
  "Эко-стиль",
  "Современный",
  "Классический",
  "Скандинавский",
  "Неоклассика",
  "Свой стиль"
]

const rooms: string[] = [
  "Студия",
  "1 комнатная",
  "2 комнатная",
  "3+ комнатная"
]

const builder: string[] = [
  "Брусника",
  "Страна",
  "ДСК",
  "Корней"
]

const AdminPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <div className="adminPage-header">
        <h1 className="adminPage-header-h">
          3D TOUR.ADMIN
        </h1>
      </div>
      <div className="adminPage-main">
        <div className="adminPage-aside">
          <div className="adminPage-aside-search">
            <Image
              src={"/img/lupa.svg"}
              width={20}
              height={20}
              alt='0'
            />
            <input
              className="adminPage-aside-search-inp"
              type='text'
              placeholder='Адрес объекта'
            />
          </div>
          <div className="adminPage-aside-filterBlock">
            <h2 className="adminPage-aside-filterBlock-h">
              Стиль интерьера
            </h2>
            <ListStyle options={styleRoom}/>
          </div>
          <div className="adminPage-aside-filterBlock">
            <h2 className="adminPage-aside-filterBlock-h">
              Комнаты
            </h2>
            <ListStyle options={rooms}/>
          </div>
          <div className="adminPage-aside-filterBlock">
            <h2 className="adminPage-aside-filterBlock-h">
              Застройщик
            </h2>
            <ListStyle options={builder}/>
          </div>
        </div>
        <div className="adminPage-hero">
          <div className="adminPage-hero-create">
            <div className="adminPage-hero-create-block" onClick={openModal}>
              <div className="adminPage-hero-create-block-plus">+</div>
            </div>
            <h2 className="adminPage-hero-create-h">
              Добавить проект
            </h2>
          </div>
          <ModalRoomCreate isOpen={isModalOpen} onClose={closeModal}/>
        </div>
      </div>
    </>
  )
}

export default AdminPage