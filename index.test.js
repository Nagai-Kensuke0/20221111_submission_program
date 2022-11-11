const itemChoice =  require('./index');

test('Test of firstItemChoice function', () => {
  const weightList = [9, 8, 5, 2, 3]
  const valueList = [8, 7, 1, 9, 10]
  const W = 15
  const result = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8]]
  const dpTable = []

  expect(itemChoice.firstItemChoice(dpTable, weightList, valueList, W)).toStrictEqual(result);
});

test('Test of fromSecondItemChoice function', () => {
  const weightList = [9, 8, 5, 2, 3]
  const valueList = [8, 7, 1, 9, 10]
  const W = 15
  const result = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8],
                  [0, 0, 0,	0, 0,	0, 0,	0, 7,	8, 8,	8, 8,	8, 8,	8],
                  [0,	0, 0, 0, 0, 1, 1, 1, 7, 8, 8, 8, 8, 8, 9, 9],
                  [0,	0, 9, 9, 9, 9, 9, 10,	10,	10,	16,	17,	17,	17,	17,	17],
                  [0,	0, 9, 10,	10,	19,	19,	19,	19,	19,	20,	20,	20,	26,	27,	27]]
  const dpTable = itemChoice.firstItemChoice([], weightList, valueList, W)

  expect(itemChoice.fromSecondItemChoice(dpTable, weightList, valueList, W)).toStrictEqual(result);
});

test('Number of items is minimum and weight and value are minimum', () => {
  const weightList = [1]
  const valueList = [1]
  const W = 10
  const result = 1

  expect(itemChoice.main(weightList, valueList, W)).toBe(result);
});

test('Result is 0', () => {
  const weightList = [9, 8, 5, 2, 3]
  const valueList = [8, 7, 1, 9, 10]
  const W = 1
  const result = 0

  expect(itemChoice.main(weightList, valueList, W)).toBe(result);
});

test('Test of main function', () => {
  const weightList = [9, 8, 5, 2, 3]
  const valueList = [8, 7, 1, 9, 10]
  const W = 15
  const result = 27

  expect(itemChoice.main(weightList, valueList, W)).toBe(result);
})