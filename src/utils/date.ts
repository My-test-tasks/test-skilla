const getDate = () => {
  const date = new Date(Date.now());
  const stringDate = date.toLocaleString('ru-RU', { month: 'short', day: 'numeric', weekday: 'long' });
  const result = stringDate[0].toUpperCase() + stringDate.slice(1);

  return result;
};

export default getDate;
