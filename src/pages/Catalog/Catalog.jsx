import axios from 'axios';
import { useEffect, useState } from 'react';
import css from './Catalog.module.css';

const brands = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];

const testCar = [
  {
    id: 9582,
    year: 2008,
    make: 'Buick',
    model: 'Enclave',
    type: 'SUV',
    img: 'https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg',
    description:
      'The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.',
    fuelConsumption: '10.5',
    engineSize: '3.6L V6',
    accessories: ['Leather seats', 'Panoramic sunroof', 'Premium audio system'],
    functionalities: [
      'Power liftgate',
      'Remote start',
      'Blind-spot monitoring',
    ],
    rentalPrice: '$40',
    rentalCompany: 'Luxury Car Rentals',
    address: '123 Example Street, Kiev, Ukraine',
    rentalConditions:
      "Minimum age: 25\nValid driver's license\nSecurity deposit required",
    mileage: 5858,
  },
];

const Catalog = () => {
  const [carsData, setCarsData] = useState([]);

  const fetchCars = async () => {
    try {
      const { data } = await axios.get(
        `https://6574e9dfb2fbb8f6509cc7ce.mockapi.io/api/advert/adverts`
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
    <section>
      <div>
        <form>
          <label>Car Brand</label>
          <select>
            {brands.map(brand => (
              <option>{brand}</option>
            ))}
          </select>
          <label>Price/ 1 hour</label>
          <select>
            <option>30</option>
            <option>40</option>
            <option>50</option>
            <option>60</option>
            <option>70</option>
            <option>80</option>
            <option>90</option>
            <option>100</option>
          </select>
          <label>Car mileage / km</label>
          <input type="text" />
          <input type="text" />
          <button type="submit">Search</button>
        </form>

        <ul>
          {carsData.map(car => (
            <li key={car.id}>
              <div className={css.car_card_wrapper}>
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg"
                  alt="car_image"
                  className={css.car_image}
                />
                <div>
                  <div>
                    <div className={css.car_card_top_wrapper}>
                      <h2 className={css.car_card_title}>
                        {car.make}{' '}
                        <span className={css.car_card_title_wrapper}>
                          {car.model}
                        </span>
                        , {car.year}
                      </h2>
                      <p className={css.car_card_price}>{car.rentalPrice}</p>
                    </div>
                    <p className={css.car_card_info}>
                      {car.address.split(' ')[3].replace(',', '')} |{' '}
                      {car.address.split(' ')[4].replace(',', '')} |{' '}
                      {car.rentalCompany} | {car.accessories[2]} | {car.type} |{' '}
                      {car.model} | {car.id} | {car.functionalities[0]}
                    </p>
                  </div>
                </div>
                <button className={css.car_crad_btn}>Learn more</button>
              </div>
            </li>
          ))}
        </ul>
        <button>Load More</button>
      </div>
    </section>
  );
};

export default Catalog;
