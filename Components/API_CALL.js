// Function to make an API call
let username = 'coalition';
let password = 'skills-test';
let auth = btoa(`${username}:${password}`);

export const fetchData = async(url) => {
  try {
    const response = await fetch(url, {headers: {
      'Authorization': `Basic ${auth}`
    }});
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return null;
  }
}

