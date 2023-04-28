/**
 * 主要單位列舉，值為地球半徑
 */
enum EUnit {
  km = 6378.137,
  m = 6378137,
  ft = 20902231.52,
}

/**
 * 座標介面
 * @property name 座標名稱
 * @property lat 緯度
 * @property lng 經度
 */
interface ICoord {
  name?: string
  lat: number
  lng: number
}

class Distanct {
  private _unit: EUnit

  constructor(unit: EUnit = EUnit.km) {
    this._unit = unit
  }

  get unit(): keyof typeof EUnit { return EUnit[this._unit] as keyof typeof EUnit }
  /**
   * @param value 單位
   * @example distance.unit = 'km'
   * @type {keyof typeof EUnit}
   */
  set unit(value: keyof typeof EUnit) { this._unit = EUnit[value] }

  /**
   * 度轉弧
   * @param deg 度
   * @returns {number} 弧
   */
  deg2rad = (deg: number): number => (deg * (Math.PI / 180))

  /**
   * 兩個座標的距離
   * @param a 座標A
   * @param b 座標B
   * @param digits 小數點位數
   * @returns {number} 距離
   * @example distance.between({ lat: 25.0853151, lng: 121.3966888 }, { lat: 21.9578574, lng: 120.7790883 })
   */
  between(a: ICoord, b: ICoord, digits = 4): number {
    const dLat = this.deg2rad(b.lat - a.lat)
    const dLon = this.deg2rad(b.lng - a.lng)
    const x = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(a.lat)) * Math.cos(this.deg2rad(b.lat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const y = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x))
    return Number.parseFloat((y * this._unit).toFixed(digits))
  }

  /**
   * 回傳排序座標集：根據指定座標直接距離由近到遠排序
   * @param target 指定座標
   * @param coords 座標集
   * @returns {ICoord[]} 排序座標集
   * @example distance.nearSort({ lat: 25.0853151, lng: 121.3966888 }, [{ lat: 21.9578574, lng: 120.7790883 }, { lat: 25.0853151, lng: 121.3966888 }])
   */
  nearSort(target: ICoord, coords: ICoord[]): ICoord[] {
    return coords.sort((a, b) => {
      const distanceA = this.between(target, a)
      const distanceB = this.between(target, b)
      return distanceA - distanceB
    })
  }
}

export default Distanct
