export const users = [
  {
    username: "user",
    password: "user",
    role: "User",
    token: "3210fedc-ba98-4d654-3210-fedcba9876543",
  },
  {
    username: "admin",
    password: "admin",
    role: "Admin",
    token: "aaadwas-ba98-4d654-3210-fedcba9876543",
  },
];

export function findUser(username, password) {
  return users.find(
    (user) => user.username === username && user.password === password
  );
}

export function findUserByToken(token) {
  return users.find((user) => user.token === token);
}
