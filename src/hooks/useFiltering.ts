import { User } from "../types/user";

type UseFilteringProps = {
  query: string;
  users: User[];
};

const useFiltering = (query: string, users: User[]) => {
  if (
    query && users &&
    query.trim() === '' ||
    query.trim().length < 3 ||
    users.length === 0
  ) {
    return;
  }

  const filteredUsers: User[] = users.filter((user) => 
    user.name.first.toLowerCase().includes(query.toLowerCase()) || 
    user.name.last.toLowerCase().includes(query.toLowerCase()) ||
    user.email.toLowerCase().includes(query.toLowerCase())
  );

  return filteredUsers;
};

export default useFiltering;
