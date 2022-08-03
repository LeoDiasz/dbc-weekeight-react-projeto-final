import moment from "moment"
import "moment/locale/pt-br"
import { maskOnlyNumbers } from "./masks"

const formatDateDefaultForPtBr = (date) => {
  const dateFormated = moment(date, "YYYY-MM-DD").format("DD/MM/YYYY")
  
  return dateFormated
}

const formatDatePtBrForDefault = (date) => {
  const dateFormated = moment(date, "DD/MM/YYYY").format("YYYY-MM-DD")
  
  return dateFormated
}

const formatDataForOnlyNumbers = (data) => {
  if (!data) {
    return
  }
  
  const newData = data.replace(maskOnlyNumbers, "")

  return newData
}

const formatDateExtended = (date) => {
  moment.locale("pt-br")
  const newDate = moment(date).format("LL")

  return newDate
}

const formatCpfWithCaracteres = (data) => {
  return data.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}

const formatCepWithCaracteres = (data) => {
  return data.replace(/(\d{5})(\d{3})/, "$1-$2")
}


export {formatDateDefaultForPtBr, formatDatePtBrForDefault, formatDateExtended, formatDataForOnlyNumbers, formatCepWithCaracteres, formatCpfWithCaracteres}

