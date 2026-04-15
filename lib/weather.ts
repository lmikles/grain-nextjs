export interface WeatherData {
  temp?: number
  condition?: string
  isNiceOut?: boolean
  feelsLike?: number
  humidity?: number
}

export function isGoodPatioWeather(weather: WeatherData | null): boolean {
  if (!weather || weather.temp === undefined) return false
  return weather.temp >= 65 && weather.temp <= 90 && weather.isNiceOut === true
}

export function formatTemp(temp: number): string {
  return `${Math.round(temp)}°F`
}
