'use client'
import Image from "next/image";
import React, { useState } from "react";
import TourModal from "../Temp/TourModal";

export const Banner: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleStartTour = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <div className="banner">
      <Image
        className="banner-img"
        src={"/img/main.png"}
        alt="-"
        layout="fill"
        objectFit="cover"
      />
      <div className="banner-block">
        <h1 className="banner-block-h">Погрузитесь в будущее - захватывающий 3D Тур!</h1>
        <p className="banner-block-p">
          3D тур – идеальное решение для тех, кто хочет принять{" "}
          <br />
          обоснованное решение при выборе дизайна или{" "}
          <br />
          планировании ремонта.{" "}
          <br />
          Ощутите свободу выбора, экспериментируйте с расстановкой{" "}
          <br />
          и декором.
        </p>
        <button className="banner-block-btn" onClick={handleStartTour}>
          начать 3D тур
        </button>
      </div>

      {/* Модальное окно */}
      {isModalOpen && <TourModal onClose={handleCloseModal} />}
    </div>
  );
};