import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SearchButton from '../../common/SearchButton';
import fetchBeersByFoodApi from '../../../api/fetchBeersByFoodApi';
import DataTable from '../../common/DataTable';
import TextField from '../../common/TextField';
import ErrorMessageToast from '../../common/ErrorMessageToast';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
}));

const columns = [
  {
    id: 'name',
    label: 'Name',
    format: value => value.toLocaleString(),
  },
  {
    id: 'description',
    label: 'Description',
    format: value => value.toLocaleString(),
  },
  {
    id: 'firstBrewed',
    label: 'First Brewed',
    format: value => value.toLocaleString(),
  },
];

const BeerSearchWithFoodPage = () => {
  const classes = useStyles();
  const [food, setFood] = useState('');
  const [beers, setBeers] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [tableTitle, setTableTitle] = useState('');

  const handleSearchButtonClick = e => {
    e.preventDefault();
    setErrorMessage(undefined);
    const fetchedBeers = fetchBeersByFoodApi(food);

    fetchedBeers.then(response => {
      if (response.success) {
        setFetched(true);
        setBeers(response.data);
        setTableTitle(`Beers match with ${food}`);
      } else {
        setErrorMessage(response.message);
      }
    });
  };

  const createRows = toDisplayBeers => {
    return toDisplayBeers.map(beer => {
      return {
        name: beer.name,
        description: beer.description,
        firstBrewed: beer.first_brewed,
        code: beer.id,
      };
    });
  };

  return (
    <Container className={classes.container}>
      <Container maxWidth="sm">
        <form className={classes.form} onSubmit={handleSearchButtonClick}>
          <TextField
            name="food"
            label="Food"
            valueRequired
            onChange={e => setFood(e.target.value)}
          />

          <SearchButton name="search" />
        </form>
      </Container>

      <Container>
        {fetched === false && <h3>Hi Jacek, Enjoy your meal.</h3>}

        {(!beers || beers.length === 0) && fetched === true && (
          <h3>
            Sorry Jacek, we couldn`t find any beer matches with your food.
          </h3>
        )}

        {beers.length > 0 && (
          <DataTable
            tableTitle={tableTitle}
            columns={columns}
            rows={createRows(beers)}
          />
        )}
      </Container>
      {errorMessage && <ErrorMessageToast show message={errorMessage} />}
    </Container>
  );
};

export default BeerSearchWithFoodPage;
