import moment from "moment"

const formatDateDefaultForPtBr = (date) => {
  const dateFormated = moment(date, "YYYY-MM-DD").format("DD/MM/YYYY")
  
  return dateFormated
}

const formatDatePtBrForDefault = (date) => {
  const dateFormated = moment(date, "DD/MM/YYYY").format("YYYY-MM-DD")
  
  return dateFormated
}

export {formatDateDefaultForPtBr, formatDatePtBrForDefault}