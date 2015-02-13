describe('triangle', function() {
  it("returns equilateral if triangle object is equilateral", function() {
    expect(triangle([2,2,2])).to.eql(["equilateral"]);
  });
});
