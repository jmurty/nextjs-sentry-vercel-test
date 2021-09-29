import { customWithSentry } from "../../customWithSentry";

function work() {
  throw new Error("API Test 2");
}

work();

async function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

export default customWithSentry(handler);
