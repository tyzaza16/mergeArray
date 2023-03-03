import { merge } from '../merge';


describe('testing merge function', () => {
  let collection_1 = [12, 24, 34, 54, 100];
  let collection_2 = [15, 30, 54, 85, 123];

  let expect_collection = [12, 15, 24, 30, 34, 54, 85, 100, 123];
  test('two collection should be sorted ', () => {
    expect(merge(collection_1,collection_2)).toEqual(expect_collection);
  });
});