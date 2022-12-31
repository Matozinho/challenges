import { User } from '../DTO/User';

export class UserService {
  find(username: Pick<User, 'username'>) {
    return find();
  }
}
