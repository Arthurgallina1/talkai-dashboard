export const formatDate = (date) => {
  if (!date) return null
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'numeric', //short
    year: 'numeric'
  }).format(new Date(date))
}
