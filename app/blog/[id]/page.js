export default function BlogPost({ params }) {
    return (
      <div>
        <h1>Blog Post {params.id}</h1>
        <p>This is a dynamic blog post with ID: {params.id}</p>
      </div>
    );
  }
  