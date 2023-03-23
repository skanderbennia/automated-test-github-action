const data = [
  { id: "1", name: "Product 1", price: 100 },
  { id: "2", name: "Product 2", price: 200 },
  { id: "3", name: "Product 3", price: 300 }
];
test("Expect to return data from the moched database", () => {
  const expectedAttributes = ["id", "name", "price"];

  data.forEach((item) => {
    expect(Object.keys(item)).toEqual(expect.arrayContaining(expectedAttributes));
  });
});
