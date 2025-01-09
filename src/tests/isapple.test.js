import isapple from "../helper/isapple";

describe("isapple", () => {

  it("debe retornar un booleano", () => {
    const result = isapple("manzana");
    expect(typeof result).toBe('boolean');
  });

  it("si se introduce 'manzana' retorna verdadero", () => {
    const result = isapple("manzana");
    expect(result).toBe(true);
  });

  it("si se introduce una fruta distinta a manzana retorna falso", () => {
    const result = isapple("pera");
    expect(result).toBe(false);
  });
  
});
