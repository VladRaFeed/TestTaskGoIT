import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from 'components/SearchForm/SearchForm';
import css from './Catalog.module.css';
import CarsList from 'components/CarsList/CarsList';
import ModalWindow from 'components/ModalWindow/ModalWindow';

const Catalog = () => {
  const [carsData, setCarsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = e => {
    console.log(e);
    setIsModalOpen(true);
  };

  const closeModal = e => {
    setIsModalOpen(false);
  };

  const fetchCars = async () => {
    try {
      const { data } = await axios.get(
        `https://6574e9dfb2fbb8f6509cc7ce.mockapi.io/api/advert/adverts/`
      );

      setCarsData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <section className={css.car_cards_section}>
      {isModalOpen && <ModalWindow data={carsData} onClick={closeModal} />}
      <SearchForm />
      <CarsList carsData={carsData} onClick={openModal} />
      <div className={css.load_more_btn_wrapper}>
        <button className={css.load_more_btn}>Load more</button>
      </div>
    </section>
  );
};

export default Catalog;
