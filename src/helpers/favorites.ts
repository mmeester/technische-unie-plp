export function getFavorites() {
  const favoritesStorage = localStorage.getItem('favorites');
  return favoritesStorage ? JSON.parse(favoritesStorage) : [];
}

export function setFavorites(ids: number[]) {
  localStorage.setItem('favorites', JSON.stringify(ids));
}

export function isFavorite(id: number) {
  return getFavorites().includes(id);
}

export function addToFavorites(id: number) {
  const favorites = getFavorites();

  if (favorites.includes(id)) {
    return;
  }

  favorites.unshift(id);

  setFavorites(favorites);
}

export function removeFromFavorites(id: number) {
  const favorites = getFavorites();

  favorites.splice(favorites.indexOf(id), 1)

  setFavorites(favorites);
}