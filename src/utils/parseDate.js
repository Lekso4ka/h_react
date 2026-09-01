const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря"
]

const shortMonths = [
    "ЯНВ",
    "ФЕВ",
    "МАР",
    "АПР",
    "МАЙ",
    "ИЮН",
    "ИЮЛ",
    "АВГ",
    "СЕН",
    "ОКТ",
    "НОЯ",
    "ДЕК"
]

const nToZero = (n, len = 2) => {
    let str = n.toString()
    while(len > str.length) {
        str = "0" + str;
    }
    return str;
}

const parseSimple = (date) => {
    const day = new Date(date)
    return `${nToZero(day.getDate())}.${nToZero(day.getMonth() + 1)}.${nToZero(day.getFullYear())}`
}

const parseWithText = (date) => {
    const day = new Date(date)
    return `${nToZero(day.getDate())} ${months[day.getMonth()]} ${nToZero(day.getFullYear())}`
}

const parseWithShortText = (date) => {
    const day = new Date(date)
    return `${nToZero(day.getDate())} ${shortMonths[day.getMonth()]} ${nToZero(day.getFullYear())}`
}

const parseWithoutYear = (date) => {
    const day = new Date(date)
    return `${nToZero(day.getDate())}.${nToZero(day.getMonth() + 1)}`
}

export const parseDate = (date, variant) => {
    switch(variant) {
        case "text":
            return parseWithText(date)
        case "short-text":
            return parseWithShortText(date)
        case "without-year":
            return parseWithoutYear(date)
        default:
            return parseSimple(date)
    }
}

export {nToZero}