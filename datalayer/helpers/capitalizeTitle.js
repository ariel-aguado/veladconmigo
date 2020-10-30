export default (title) => {
  if (typeof title !== 'string') return '';
  return title.charAt(0).toUpperCase() + title.slice(1);
}
