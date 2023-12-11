import { nanoid } from 'nanoid';
import css from './SearchForm.module.css';

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

const SearchForm = () => {
  return (
    <form className={css.car_search_form}>
      <div className={css.car_search_form_wrapper}>
        <label className={css.car_search_form_label}>Car Brand</label>
        <select className={css.car_search_form_dropdown}>
          <option value="default" disabled>
            Enter the text
          </option>
          {brands.map(brand => (
            <option
              className={css.car_search_form_select_list_item}
              key={nanoid()}
            >
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className={css.car_search_form_wrapper}>
        <label className={css.car_search_form_label}>Price/ 1 hour</label>
        <select className={css.car_search_form_dropdown2}>
          <option value="default" disabled>
            To $
          </option>
          <option>30</option>
          <option>40</option>
          <option>50</option>
          <option>60</option>
          <option>70</option>
          <option>80</option>
          <option>90</option>
          <option>100</option>
        </select>
      </div>
      <div className={css.car_search_form_wrapper}>
        <label className={css.car_search_form_label}>Car mileage / km</label>
        <div>
          <input
            type="text"
            placeholder="From"
            className={css.car_form_search_input}
          />
          <input
            type="text"
            placeholder="To"
            className={css.car_form_search_input_right}
          />
        </div>
      </div>
      <button type="submit" className={css.car_form_search_btn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
