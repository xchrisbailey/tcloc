type Location = {
  city: string
  state: string
  cover: string
  slug: { _type: string; current: string }
  summary: string
  housingCosts: { _key: string; cost: number; source: string; type: string }[]
  weather: {
    _key: string
    averageTemperature: number
    startMonth: string
    type: string
  }[]
  trails: { _key: string; name: string; url: string; notes?: string[] }[]
  camping: { _key: string; notes?: string[]; name: string; url: string }[]
  tennisLeagues: { _key: string; name: string; url: string }[]
  tennisClubs: { _key: string; notes?: string[]; name: string; url: string }[]
  residencyPrograms: { _key: string; name: string; url: string }[]
  hospitals: { _key: string; notes?: string[]; name: string; url: string }[]
  delta: string[]
  computerScience: {
    _key: string
    notes?: string[]
    name: string
    url: string
  }[]
}

export default Location
