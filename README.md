# geo-distance

[![NPM version](https://img.shields.io/npm/v/@simoko/geo-distance?color=a1b858&label=)](https://www.npmjs.com/package/@simoko/geo-distance)

Installation
------------
    npm install @simoko/geo-distance


Usage
-----

```js
import Distance from '@simoko/geo-distance'

// 初始
const distance = new Distance()

// 設定座標
const a = { name: '台北', lat: 25.0853151, lng: 121.3966888 }
const b = { name: '台中', lat: 24.1849619, lng: 120.5523295 }
const c = { name: '台南', lat: 23.1505381, lng: 120.1772088 }
const d = { name: '墾丁', lat: 21.9578574, lng: 120.7790883 }

// 兩座標直線距離，預設單位 km
console.log(distance.between(a, d))
// 輸出：353.8059

// 變更單位，長度取 2
distance.unit = 'ft'
console.log(distance.between(a, d, 2))
// 輸出：1159481.69

// 以 [台南] 為中心，從近到遠排序座標
const nearSort = distance.nearSort(c, [a, b, d])
console.log(between)
// 輸出：
// [
//   { name: '台中', lat: 24.1849619, lng: 120.5523295 },
//   { name: '墾丁', lat: 21.9578574, lng: 120.7790883 },
//   { name: '台北', lat: 25.0853151, lng: 121.3966888 }
// ]
```


## License

[MIT](./LICENSE) License © 2023 [Supra](https://github.com/supra126)
