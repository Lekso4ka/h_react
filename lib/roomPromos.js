const MAX_ROOM_PROMOS = 2;

const HOTEL_LABELS = {
  "golden-tulip": "Голден Тюлип",
  "tulip-inn": "Тюлипп Инн",
};

function roomPromoLimitMessage(stocks) {
  const counts = new Map();

  for (const stock of Array.isArray(stocks) ? stocks : []) {
    if (!stock || stock.show_in_rooms !== true) continue;
    const hotels = Array.isArray(stock.hotels) ? stock.hotels : [];
    for (const hotel of hotels) {
      if (!hotel) continue;
      counts.set(hotel, (counts.get(hotel) || 0) + 1);
    }
  }

  const over = [...counts.entries()].filter(([, count]) => count > MAX_ROOM_PROMOS);
  if (!over.length) return null;

  const names = over.map(([id]) => HOTEL_LABELS[id] || id).join(", ");
  return `В номерах одного отеля можно показать не больше двух акций. Сейчас больше двух для: ${names}`;
}

module.exports = {
  MAX_ROOM_PROMOS,
  roomPromoLimitMessage,
};
