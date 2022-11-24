import { change_bg } from "../color_scheme.js";

test.each([
  "Snow", "Clouds", "Rain", "Thunderstorm", "Drizzle", "Atmosphere", "Clear"
])('renders the correct background GIF for %s', condition => {
  change_bg(condition)
  expect(document.body.style.backgroundImage).toBe(
    `url(assets/${condition.toLowerCase()}.gif)`,
  );
});