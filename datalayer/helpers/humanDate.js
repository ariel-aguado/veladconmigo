// const options = { year: "numeric", month: "short", day: "numeric" };

const asDay = (date) => {
  const day = new Date(date).getDate().toString();
  return day.padStart(2, '0');
};

const asMonth = (date) => {
  return new Date(date).toLocaleString('en-us', { month: 'short' }).toString().toLowerCase();
}

const asYear = (date) => {
  return new Date(date).getFullYear().toString();
}

export default (date) => `${asDay(date)} ${asMonth(date)}. ${asYear(date)}`;
// export default (date) => new Date(date).toLocaleDateString('es-ES', options);
