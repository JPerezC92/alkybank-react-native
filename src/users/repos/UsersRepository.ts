import { Repository } from "../../shared/repos/Repository";
import { envVariables } from "../../shared/utils/envVariables";
import { UserCreate, UserEndpoint } from "../schemas";

export interface UsersRepository {
  register: (userCreate: UserCreate) => Promise<any>;
}

export const UserNodeRepository: Repository<UsersRepository> = () => {
  const baseUrl = envVariables.API_URL + "/users";
  return {
    register: async (userCreate) => {
      const res = await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(UserCreate.parse(userCreate)),
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const result = await res.json();

      return UserEndpoint.parse(result);
    },
  };
};
