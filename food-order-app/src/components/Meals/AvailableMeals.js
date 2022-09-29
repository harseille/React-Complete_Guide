import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import MealItem from './MealItem';
import classes from './AvailableMeals.module.css';
import useHttp from '../../hooks/use-http';

const AvailableMeal = () => {
  const [mealList, setMealList] = useState([]);
  const { isLoading, error: httpError, sendRequest: fetchMealList } = useHttp();

  useEffect(() => {
    const transformMealList = (responseMealList) => {
      setMealList(responseMealList);
    };

    fetchMealList(
      {
        url: 'https://react-http-playground-default-rtdb.asia-southeast1.firebasedatabase.app/mealList.json',
      },
      transformMealList
    );
  }, [fetchMealList]);

  console.log(isLoading);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealListComponents = mealList.map((meal) => (
    <MealItem key={meal.id} meal={meal} />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealListComponents}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeal;
