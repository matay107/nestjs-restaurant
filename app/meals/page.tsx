import classes from './page.module.css';
import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';
import {getMeals} from '@/lib/meals';
import { Suspense } from 'react';

async function Meals(){
  const meals = await getMeals();
  return <MealsGrid meals={meals}></MealsGrid>
}

export default async function MealsPage() {



    return <>
    <header className={classes.header}>
      <h1>
        Delicious meals, created{' '}
        <span className={classes.highlight}>by you</span>
      </h1>
      <p>
        Choose your fovorite recipe and cook it yourself. It is easy and fun!
      </p>
      <p className={classes.cta}>
        <Link href="/meals/share">
          Share Your Favorite Recipe
        </Link>
      </p>
    </header>
    <main className={classes.main}>
      <Suspense fallback={<p className={classes.loading}>Fetching data...</p>}><Meals/></Suspense>
    </main>
    </>
  }
  