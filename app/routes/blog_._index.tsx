import { Link } from "@remix-run/react";

export default function BlogIndex() {
  return (
    <div>
      <h1>Child Blogs</h1>
      <ul>
        <li>
          <Link to="/blog/test-1" reloadDocument>
            Test-1
          </Link>
        </li>
        <li>
          <Link to="/blog/test-2" reloadDocument>
            Test-2
          </Link>
        </li>
      </ul>
    </div>
  );
}
