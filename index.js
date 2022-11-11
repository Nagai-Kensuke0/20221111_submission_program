// ====================
// n個の品物があり、i番目の品物のそれぞれ重さと価値が weight[i],value[i]となっている (i=0,1,...,n−1)。
// これらの品物から重さの総和がWを超えないように選んだときの、価値の総和の最大値を求めよ。
// ※実装言語はお任せします。
// ※テストコードも実装してください。
// ※開発にかかった所要時間も提出してください。

// [制約]
// ・1 < n <= 100
// ・weight[i],value[i]は整数
// ・1 <= weight[i],value[i] <= 1000
// ・1 <= W <= 10000
// ====================

const weightList = [9, 8, 5, 2, 3]  // 重さを配列で指定
const valueList = [8, 7, 1, 9, 10]  // 価値を配列で指定
const w = 15                        // 重さの総和を指定

// 1品目を選ぶか選ばないか
const firstItemChoice = (dpTable, weightList, valueList, limit) => {
  const firstRow = dpTable
  firstRow.push([])
  // 重さの総和が0からWまでの整数だった場合それぞれで、1品目は選ぶかどうか調べる
  for(j=0; j<=limit; j++) {
    if(weightList[0] <= j) {
      firstRow[0].push(valueList[0])
    } else {
      firstRow[0].push(0)
    }
  }

  return firstRow
}

// 2品目以降を選ぶか選ばないか
const fromSecondItemChoice = (dpTable, weightList, valueList, limit) => {
  const weightListLen = weightList.length
  const fromSecondRow = dpTable

  // 品物ごとの繰り返し
  for(i=1; i<weightListLen; i++) {
    fromSecondRow.push([])
    // 重さの総和が0からWまでの整数だった場合それぞれで、直前までの計算を踏まえて品物を選ぶかどうか調べる
    for(j=0; j<=limit; j++) {
      const tmpNotChoice = fromSecondRow[i-1][j]
      if(weightList[i] > j) {
        fromSecondRow[i].push(tmpNotChoice)
      } else {
        const tmpChoice = fromSecondRow[i-1][j-weightList[i]] + valueList[i]
        tmpChoice >= tmpNotChoice ? fromSecondRow[i].push(tmpChoice) : fromSecondRow[i].push(tmpNotChoice)
      }
    }
  }

  return fromSecondRow
}

const main = (weightList, valueList, limit) => {
  
  const weightListLen = weightList.length
  let dpTable = []

  // 動的計画法を用いて算出
  dpTable = firstItemChoice(dpTable, weightList, valueList, limit)
  dpTable = fromSecondItemChoice(dpTable, weightList, valueList, limit)

  return dpTable[weightListLen - 1][limit]
}

// 実行
console.log(`
価値の総和の最大値は ${main(weightList, valueList, w)} です。
(weightList = [${weightList}], valueList = [${valueList}], W = ${w})
`);

module.exports = {
  firstItemChoice,
  fromSecondItemChoice,
  main,
}
