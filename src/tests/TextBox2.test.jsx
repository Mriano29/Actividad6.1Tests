import { render, screen } from "@testing-library/react";
import TextBox2 from "../components/TextBox2";
import userEvent from "@testing-library/user-event";

describe("TextBox2 componente", () => {
    
  let box2;
  let button;
  beforeEach(() => {
    render(<TextBox2 />);
    box2 = screen.getByRole("caja", { name: "es una caja" });
    button = screen.getByRole("button", { name: "Pulsa para modificar el color del texto"});
  });

  it("la segunda caja de texto se encuentra en el documento", () => {
    expect(box2).toBeInTheDocument();
  });

  it("el boton se encuentra en el documento", () => {
    expect(button).toBeInTheDocument();
  });

  it("comprobar si al pulsar el botón cambia el botón del texto", async () => {
    const user = userEvent.setup();
    await user.click(button);
    expect(box2).toHaveStyle({
      color: "rgb(0,0,0)",
    });
  });

});
