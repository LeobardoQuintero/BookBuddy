const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function fetchBooks() {
  const response = await fetch(`${API_URL}/books`);
  const data = await response.json();
  return data;
}

export async function register(fName, lName, email, password) {
  console.log(fName, lName, email, password);
  const firstname = fName;
  const lastname = lName;
  try {
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSingleBook(id) {
  try {
    const response = await fetch(`${API_URL}/books/${id}`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function login(email, password) {
  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  console.log(data);

  return data;
}







