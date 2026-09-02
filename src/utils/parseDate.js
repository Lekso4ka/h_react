const MONTHS = {
    ru: [
        "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
    ],
    en: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ],
};

const SHORT_MONTHS = {
    ru: ["ЯНВ", "ФЕВ", "МАР", "АПР", "МАЙ", "ИЮН", "ИЮЛ", "АВГ", "СЕН", "ОКТ", "НОЯ", "ДЕК"],
    en: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
};

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

const parseWithText = (date, lang = "ru") => {
    const day = new Date(date)
    const months = MONTHS[lang] || MONTHS.ru;
    return `${nToZero(day.getDate())} ${months[day.getMonth()]} ${nToZero(day.getFullYear())}`
}

const parseWithShortText = (date, lang = "ru") => {
    const day = new Date(date)
    const shortMonths = SHORT_MONTHS[lang] || SHORT_MONTHS.ru;
    return `${nToZero(day.getDate())} ${shortMonths[day.getMonth()]} ${nToZero(day.getFullYear())}`
}

const parseWithoutYear = (date) => {
    const day = new Date(date)
    return `${nToZero(day.getDate())}.${nToZero(day.getMonth() + 1)}`
}

export const parseDate = (date, variant, lang = "ru") => {
    switch(variant) {
        case "text":
            return parseWithText(date, lang)
        case "short-text":
            return parseWithShortText(date, lang)
        case "without-year":
            return parseWithoutYear(date)
        default:
            return parseSimple(date)
    }
}

export {nToZero}