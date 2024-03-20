export interface RegisterResponse {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  location: string | null;
  description: string | null;
  token: string;
}

export interface IUserState {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  title?: string;
  location?: string;
  description?: string;
}