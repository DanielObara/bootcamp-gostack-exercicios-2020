import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "ASFDADAF",
    password: "asdadsadads",
    techs: [
      "ReactJS",
      "NodeJS",
      "React Native",
      { title: "Javascript", experience: 100 },
    ],
  });

  return response.json({ msg: "Created!", user });
}
