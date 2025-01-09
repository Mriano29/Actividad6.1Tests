import divide from "../helper/divide";

describe("divide", () => {

  it("debe retornar un número", () => {
    const result = divide(10, 5);
    expect(typeof result).toBe('number');
  });

  it("si entra una String retorna nulo", () => {
    const result = divide("hola", 5);
    expect(result).toBe(null);
  });

  it("resultado de division entre 10 y 2", () => {
    const result = divide(10, 2);
    expect(result).toBe(5);
  });

  it("resultado de division entre 10 y 4", () => {
    const result = divide(10, 4);
    expect(result).toBe(2.5);
  });

  it("resultado de division entre un número y 0", () => {
    const result = divide(10, 0);
    expect(result).toBe(null);
  });
  
});
