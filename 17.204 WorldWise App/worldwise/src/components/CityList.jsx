/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
// import PropTypes from 'prop-types';
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities || cities.length === 0) {
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    )
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

// CityList.propTypes = {
//   cities: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       country: PropTypes.string.isRequired,
//       population: PropTypes.number.isRequired,
//     })
//   ).isRequired,
//   isLoading: PropTypes.bool.isRequired,
// };

export default CityList;
