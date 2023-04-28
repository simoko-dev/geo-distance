import { describe, expect, it } from 'vitest'
import Distance from '../src/index'

describe('should', () => {
  it('exported', () => {
    const distance = new Distance()
    const a = { name: '台北', lat: 25.0853151, lng: 121.3966888 }
    const b = { name: '台中', lat: 24.1849619, lng: 120.5523295 }
    const c = { name: '台南', lat: 23.1505381, lng: 120.1772088 }
    const d = { name: '墾丁', lat: 21.9578574, lng: 120.7790883 }

    const between_km = distance.between(a, d)
    expect(between_km).toMatch(/\d+\.\d+/)

    distance.unit = 'ft'
    const between_ft = distance.between(a, d, 2)
    expect(between_ft).toMatch(/\d+\.\d+/)

    const nearSort = distance.nearSort(c, [a, b, d])
    expect(nearSort[0].name).toBe('台中')
    expect(nearSort[1].name).toBe('墾丁')
    expect(nearSort[2].name).toBe('台北')
  })
})
