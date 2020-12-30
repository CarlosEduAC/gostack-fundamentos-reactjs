const formatDate = (value: Date): string =>
  Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(value);

export default formatDate;
