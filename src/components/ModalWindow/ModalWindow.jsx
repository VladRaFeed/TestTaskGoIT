import css from './ModalWindow.module.css';
import { ReactComponent as Close } from '../images/close.svg';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/adverts/slice';
import { Link } from 'react-router-dom';

const ModalWindow = ({ data }) => {
  const dispatch = useDispatch();

  const onClose = e => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [dispatch]);

  const RentalConditions = data => {
    console.log(data);
    const array = data.rentalConditions.split('\n');
    return (
      <div>
        <h5 className={css.car_modal_info_title}>Rental conditions:</h5>
        <ul className={css.car_modal_info_sub_list}>
          {array.map((characteristic, index) => {
            const [firstHalf, secondHalf] = characteristic.split(':');
            return (
              <li key={index} className={css.modal_window_subtitle_info_box}>
                {firstHalf}
                {secondHalf ? (
                  <>
                    :{' '}
                    <span className={css.modal_window_subtitle_wrapper}>
                      {secondHalf}
                    </span>
                  </>
                ) : null}
              </li>
            );
          })}
          <li className={css.modal_window_subtitle_info_box}>
            Mileage:{' '}
            <span className={css.modal_window_subtitle_wrapper}>
              {data.mileage.toLocaleString('en-US', { useGrouping: true })}
            </span>
          </li>
          <li className={css.modal_window_subtitle_info_box}>
            Price:{' '}
            <span className={css.modal_window_subtitle_wrapper}>
              {data.rentalPrice}
            </span>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div onClick={e => onClose(e)} className={css.modal_overlay}>
      <div className={css.modal}>
        <div className={css.modal_wrapper}>
          <button
            onClick={e => onClose(e)}
            className={css.modal_window_close_btn}
          >
            <Close />
          </button>
          <img
            src={data[0].img}
            alt="car_image"
            className={css.car_modal_img}
          />
          <h3 className={css.car_modal_title}>
            {data[0].make}{' '}
            <span className={css.car_modal_title_wrapper}>{data[0].model}</span>
            , {data[0].year}
          </h3>
          <ul className={css.car_modal_info_list}>
            <li>
              <p className={css.car_modal_info}>
                {data[0].address.split(' ')[3].replace(',', '')} |{' '}
                {data[0].address.split(' ')[4].replace(',', '')} | id:{' '}
                {data[0].id} | Year: {data[0].year} | Type: {data[0].type}{' '}
                FuelConsumption: {data[0].fuelConsumption} | EngineSize:{' '}
                {data[0].engineSize}
              </p>
            </li>
            <li>
              <p>{data[0].description}</p>
            </li>
          </ul>
          <h4 className={css.car_modal_info_title}>
            Accessories and functionalities:
          </h4>
          <p className={css.car_modal_info}>
            {data[0].accessories.map(word => `${word} | `)}{' '}
            {data[0].functionalities.map(word => `${word} | `)}
          </p>
          {RentalConditions(data[0])}
          <Link to={'tel:+380730000000'} className={css.car_modal_btn}>
            Rental Car
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
