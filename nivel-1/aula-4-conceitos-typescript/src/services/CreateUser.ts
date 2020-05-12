/**
 * To create User
 * @param name
 * @param email
 * @param password
 */

interface TechObject {
  title: string;
  experience: number;
}
/**
 * name?: significa valores opcionais
 */
interface CreateUserData {
  name?: string;
  email?: string;
  password?: string;
  techs: Array<string | TechObject>;
}

export default function createUser({
  name = "",
  email,
  password,
}: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };
  return user;
}
