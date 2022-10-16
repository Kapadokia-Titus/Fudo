import fetch from 'unfetch';

export const getAllMeals =()=>fetch('/meal');
export const getAllUsers=()=>fetch('/users')