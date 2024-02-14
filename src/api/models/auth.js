import  supabaseClient from '../utils/supabaseClient.js'
import { USER_PROFILE_TABLE } from '../../enums/tableNames.js'
import {hashPassword, validateSignUpData} from '../utils/verification.js'

const update = async (user_id, value) => {
  try {
    const { data, error } = await supabaseClient
      .from(USER_PROFILE_TABLE)
      .update(value)
      .eq('id', user_id);
  } catch (error) {
    throw error
  }
}

export const signUpWithPassword = async (email, password, username) => {
  try {

    if (!validateSignUpData(email, password, username)) {
      throw new Error('Invalid input data')
    }

    const hashedPassword = hashPassword(password)

    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password: hashedPassword,
    });

    if (error) {
      return Promise.reject(error.message);
    }
    await update(data.user.id, {username: username})
    return Promise.resolve(data.user);

  } catch (error) {
    throw error
  }
};

export const signInWithPassword = async (email, password) => {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    return Promise.reject(error);
  }
  return Promise.resolve(data.user);
};

export const signOut = async () => {
  const { error } = await supabaseClient.auth.signOut();
  if (error) {
    return Promise.reject(error);
  }
}