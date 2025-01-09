import { render, screen } from "@testing-library/react";
import FormUsuario from "../components/FormUsuario";
import userEvent from "@testing-library/user-event";

describe("FormUsuario componente", () => {
  let button;
  let campo;
  let cabecera2;
  beforeEach(() => {
    render(<FormUsuario />);
    button = screen.getByRole("button", { name: "Submit" });
    campo = screen.getByLabelText("Nombre");
    cabecera2 = screen.getByRole("heading", { level: 2 });
  });

  it("el boton se encuentra en el documento", () => {
    expect(button).toBeInTheDocument();
  });

  it("el campo se encuentra en el documento", () => {
    expect(campo).toBeInTheDocument();
  });

  it("la cabecera de nivel 2 se encuentra en el documento", () => {
    expect(cabecera2).toBeInTheDocument();
  });

  it("comprobar que se borra el nombre del usuario al picar en el boton", async () => {
    const user = userEvent.setup();
    await user.clear(campo);
    await user.type(campo, "Miguel");
    await user.click(button)
    expect(campo).toHaveValue("")
  });
});
