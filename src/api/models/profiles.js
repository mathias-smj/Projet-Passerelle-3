import { USER_PROFILE_TABLE } from '../../enums/tableNames.js';
import { supabaseClient } from '../utils/supabaseClient.js';

export const findProfileById = async (userId) => {
  const { data, error } = await supabaseClient.from(USER_PROFILE_TABLE).select('*').eq('id', userId);

  if (error) {
    throw error;
  }
  if (!data || !data.length) {
    throw new Error(`No user with id ${userId}`);
  }

  return data[0];
};

export const findProfileByUsername = async (username) => {
  const { data, error } = await supabaseClient.from(USER_PROFILE_TABLE).select('*').eq('username', username);

  if (error) {
    throw error;
  }
  if (!data || !data.length) {
    throw new Error(`No user with username ${username}`);
  }

  return data[0];
};
