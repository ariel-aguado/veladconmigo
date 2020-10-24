const options = { year: "numeric", month: "short", day: "numeric" };

export default (date) => new Date(date).toLocaleDateString('es-ES', options);
