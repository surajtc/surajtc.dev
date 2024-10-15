import { Link, Outlet } from "@remix-run/react";

export default function BlogLayout() {
  return (
    <div>
      <h1>Parent Blogs</h1>
      <Outlet />
      <Link to="/">Home</Link> <br />
      <Link to="/blog">Blog</Link>
    </div>
  );
}
