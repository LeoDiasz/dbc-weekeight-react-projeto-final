import moment from "moment"
import "moment/locale/pt-br"

const formatDateDefaultForPtBr = (date) => {
  const dateFormated = moment(date, "YYYY-MM-DD").format("DD/MM/YYYY")
  
  return dateFormated
}

const formatDatePtBrForDefault = (date) => {
  const dateFormated = moment(date, "DD/MM/YYYY").format("YYYY-MM-DD")
  
  return dateFormated
}

const formatDateExtended = (date) => {
  moment.locale("pt-br")
  const newDate = moment(date).format("LL")

  return newDate
}


export {formatDateDefaultForPtBr, formatDatePtBrForDefault, formatDateExtended}

