export function generateDurations(length) {
  const isEven = length % 2 === 0;
  const middleValue = Math.floor(length / 2);
  const step = 0.5;
  const minimumValue = 1;
  const valueDuration = [];

  for (let i = 0; i < length; i++) {
    if (i <= middleValue) {
      valueDuration.push(minimumValue + i * step);
    } else if (isEven && i === middleValue) {
      valueDuration.push(minimumValue + (middleValue - 1) * step);
    } else {
      valueDuration.push(minimumValue + (length - 1 - i) * step);
    }
  }

  return valueDuration;
}

