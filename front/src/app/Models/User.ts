export class User {
  id: number;
  email: string;
  is_confirmed: boolean;
  password: string;
  image: string;
  first_name: string;
  second_name: string;
  surname: string;
  birthday: Date;
  city: string;
  hand: string;
  role: string;

  constructor(email: string, password: string, image: string, first_name: string, second_name: string, surname: string, birthday: Date, city: string, hand: string) {
    this.email = email;
    this.password = password;
    this.image = image;
    this.first_name = first_name;
    this.second_name = second_name;
    this.surname = surname;
    this.birthday = birthday;
    this.city = city;
    this.hand = hand;
  }
}
