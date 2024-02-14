import bcrypt from 'bcrypt';
import {emailSchema, passwordSchema, usernameSchema} from "./schema.js";

const hashPassword = (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds)
}

const validateSignUpData = (email, password, username) => {
  const validateResult = {
    email: emailSchema.safeParse(email),
    password: passwordSchema.safeParse(password),
    username: usernameSchema.safeParse(username)
  }

  return validateResult.email.success && validateResult.password.success && validateResult.username.success;
}

export { validateSignUpData, hashPassword }