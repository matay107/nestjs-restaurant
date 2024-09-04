'use client'
import classes from './meal-form-submit.module.css';
import { useFormStatus } from 'react-dom';

export default function MealFormSubmit() {

    let statusForm = useFormStatus();
 
    return (

        <button disabled={statusForm.pending}> {statusForm.pending ? 'Submiting...' : 'Share Meal'}</button>

    );
}