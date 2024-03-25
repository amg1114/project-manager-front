export interface LoginRequestI {
    email: string;
    password: string;
}

export interface LoginResponseI {
    access_token: string;
}
