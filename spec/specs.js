describe('triangle', function() {
  it("returns equilateral if triangle object is equilateral", function() {
    expect(triangle([2,2,2])).to.eql("equilateral");
  });

  it("returns isosceles if triangle object is isosceles", function() {
    expect(triangle([2,3,2])).to.eql("isosceles");
  });

  it("returns scalene if triangle object is scalene", function() {
    expect(triangle([1,3,2])).to.eql("scalene");
  });
});
