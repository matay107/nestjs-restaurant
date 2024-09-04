import classes from './page.module.css';
import Link from 'next/link';
import {getMealDetail} from '@/lib/meals';
import Image from 'next/image';
import { notFound } from 'next/navigation';


export default async function MealDetailPage ({params}: {params: any}) {

  const meal = await getMealDetail(params.slug);
  if(! meal){
    notFound();
  }
  meal.instructions  = meal.instructions.replace(/\n/g,'<br>')
// console.log(meal.title)
    return <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href="">{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{__html:meal.instructions}}></p>
      </main>
    </>
  }
  