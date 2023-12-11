import CarCard from 'components/CarCard/CarCard';
import css from './CarsList.module.css';

const CarsList = ({ carsData, onClick }) => {
  return (
    <ul className={css.car_cards_section_list}>
      <CarCard data={carsData} onClick={onClick} />
    </ul>
  );
};

export default CarsList;
