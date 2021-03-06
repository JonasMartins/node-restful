import { Repository, EntityRepository } from "typeorm";
import { User } from "./../database/entity/User.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {}
