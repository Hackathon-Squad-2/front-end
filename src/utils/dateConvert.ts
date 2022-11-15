export const dateConvert = {
  toHours: (minutesAmount: number): string => {
    const hours = Math.floor(minutesAmount / 60);
    const minutes = minutesAmount % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  },

  toMinutes: (hourString: string): number => {
    const [hours, minutes] = hourString.split(':').map(Number);

    return (hours * 60) + minutes;
  }
}
