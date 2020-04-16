function isResourceAvailable(currentTime, resource) {
  const reservations = resource.reservations || false;

  // No reservations => free
  if (
    !reservations ||
    !Array.isArray(reservations) ||
    reservations.length === 0
  ) {
    return true;
  }

  // Overlapping reservations => occupied
  const currentReservations = reservations.filter(
    reservation =>
      new Date(reservation.begin).getTime() < currentTime.getTime() &&
      new Date(reservation.end).getTime() > currentTime.getTime(),
  );

  return currentReservations.length === 0;
}

export default isResourceAvailable;
