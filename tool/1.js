var arr=
  [
              {
                  "id": "building",
                  "name": "建筑",
                  "value": 18
              },
              {
                  "id": "call",
                  "name": "紧急呼叫",
                  "value": 1
              },
              {
                  "id": "camera",
                  "name": "摄像头",
                  "value": 264
              },
              {
                  "id": "city",
                  "name": "园区",
                  "value": 1
              },
              {
                  "id": "collector",
                  "name": "传感器",
                  "value": 74
              },
              {
                  "id": "daozha",
                  "name": "道闸",
                  "value": 3
              },
              {
                  "id": "elevator",
                  "name": "电梯",
                  "value": 6
              },
              {
                  "id": "floor",
                  "name": null,
                  "value": 1
              },
              {
                  "id": "hongwai",
                  "name": "红外线",
                  "value": 68
              },
              {
                  "id": "huanjingjiance",
                  "name": "环境监控",
                  "value": 14
              },
              {
                  "id": "jiantou",
                  "name": null,
                  "value": 21
              },
              {
                  "id": "jizhan",
                  "name": "基站",
                  "value": 2
              },
              {
                  "id": "ludeng",
                  "name": "路灯",
                  "value": 14
              },
              {
                  "id": "menjin",
                  "name": "门禁",
                  "value": 75
              },
              {
                  "id": "pdc",
                  "name": "配电柜",
                  "value": 143
              },
              {
                  "id": "room",
                  "name": "房间",
                  "value": 26
              },
              {
                  "id": "tingchewei",
                  "name": "",
                  "value": 594
              }
          ]


arr = arr.filter(e => {
  return !['building', 'city', 'floor', 'room', 'jiantou'].includes(e.id)
})
console.log(arr)