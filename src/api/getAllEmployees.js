const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZThmMGRhZDhiYzYwMDAxY2U3MzllZCIsImlhdCI6MTcwNTgzMTA0NSwiZXhwIjoxNzEzNjA3MDQ1fQ.RMEjmCxI6yFEy-XC8uTtO7VV3jTZCDwYV4V5W8Wuqoc';

export default async function fetchData(setEmployeesData, setIsLoaded) {
  const headers = {
    'Authorization': `Bearer ${token}`,
  };
  const response = await fetch(import.meta.env.VITE_API + '/employees', {
    headers,
  });

  const res = await response.json();
  const data = res.data;
  setEmployeesData(data?.employees);
  setIsLoaded(true);
}
