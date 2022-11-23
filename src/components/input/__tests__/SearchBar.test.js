import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import SearchBar from "../SearchBar";

afterEach(() => {
    cleanup();
    }
);

test("renders SearchBar component", () => {
    render(<SearchBar />);
    const searchBarElement = screen.getByTestId("search-bar");
    expect(searchBarElement).toHaveAttribute("placeholder");
    expect(searchBarElement).toHaveAttribute("type", "text");
    expect(searchBarElement).toBeInTheDocument();
})

test("match snapshot", () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
})