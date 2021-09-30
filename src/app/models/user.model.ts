export interface User {
  id: string;
  email: string;
}

export interface UserLogin extends User {
  password: string;
}

export interface UserRegister extends UserLogin {
  password_repeat: string;
}
