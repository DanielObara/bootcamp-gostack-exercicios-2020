// Serve para alterar a declaração de tipos de uma lib

declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
