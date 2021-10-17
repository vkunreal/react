import { render } from "@testing-library/react";
import { Message } from "../index.js";

describe("Message component", () => {
  it("Matches snapshot", () => {
    const component = render(<Message />);

    expect(component).toMatchSnapshot();
  });

  it("Render with props", () => {
    const author = "Bot";
    const text = "Hey!";

    const component = render(<Message author={author} text={text} />);

    component.getByText(`${author}:`);
    component.getByText(text);
  });
});
