const baseUrl = 'https://api.github.com/users';
const fetchUserData = userName =>
  fetch(`${baseUrl}/${userName}`)
    .then(res => {
      if (!res.ok) throw new Error('Something went wrong...');
      return res.json();
    })
    .catch(err => alert(err));

export default fetchUserData;
