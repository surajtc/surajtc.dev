import { Link } from "@remix-run/react";

export default function BlogIndex() {
  return (
    <div>
      <h1>Child Blogs</h1>
      <ul>
        <li>
          <Link to="test-1">Test-1</Link>
        </li>
        <li>
          <Link to="test-2">Test-2</Link>
        </li>
      </ul>
    </div>
  );
}
