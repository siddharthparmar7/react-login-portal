export const userService = {
  login,
  logout,
  register,
};

function login(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  // call `/users/authenticate` with requestOptions to authenticate the login process
  return fetch("/users/authenticate", requestOptions)
    .then(handleResponse)
    .then(() => {
        localStorage.setItem('user', JSON.stringify(user))
    })
    .catch((e) => {
      console.log("fetch prob", e);
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
  return;
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetch("/users/register", requestOptions)
    .then(handleResponse)
    .catch((e) => {
      console.log("fetch prob", e);
    });
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return response.json();
}
