export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
      {/*  Gives us access to a concrete value when the route is loaded */}
    </main>
  );
}
