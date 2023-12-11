import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/adverts/slice';
import css from './CarCard.module.css';

const CarCard = ({ data, onClick }) => {
  const dispatch = useDispatch();

  const modalOpen = () => {
    dispatch(openModal(data));
  };

  return data.map(car => (
    <li key={nanoid()}>
      <div className={css.car_card_wrapper}>
        <img src={car.img} alt="car_image" className={css.car_image} />
        <div>
          <div>
            <div className={css.car_card_top_wrapper}>
              <h2 className={css.car_card_title}>
                {car.make}{' '}
                <span className={css.car_card_title_wrapper}>{car.model}</span>,{' '}
                {car.year}
              </h2>
              <p className={css.car_card_price}>{car.rentalPrice}</p>
            </div>
            <p className={css.car_card_info}>
              {car.address.split(' ')[3].replace(',', '')} |{' '}
              {car.address.split(' ')[4].replace(',', '')} | {car.rentalCompany}{' '}
              | {car.accessories[2]} | {car.type} | {car.model} | {car.id} |{' '}
              {car.functionalities[0]}
            </p>
          </div>
        </div>
        <button className={css.car_crad_btn} onClick={modalOpen}>
          Learn more
        </button>
      </div>
    </li>
  ));
};

export default CarCard;
