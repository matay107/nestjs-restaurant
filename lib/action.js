"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateText(value) {
  return !value || value.trim().length === 0;
}

export async function shareMeal(prevState,formData) {
  const meal = {
    title: formData.get("title"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  if (
    validateText(meal.title) ||
    validateText(meal.creator) ||
    validateText(meal.creator_email) ||
    validateText(meal.summary) || validateText(meal.instructions)
  ) {
    return { message: "Please fill out all fields" };
  }
  // console.log(meal)
  await saveMeal(meal);
  redirect("/meals");
}
