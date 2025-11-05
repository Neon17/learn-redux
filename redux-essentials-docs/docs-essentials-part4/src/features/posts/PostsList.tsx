import { useAppSelector } from "@/app/hooks";

export const PostsList = () => {
  const posts = useAppSelector(state => state.posts);

  const renderedPosts = posts.map(post => (
    <article className="post-excerpt m-1" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section className="post-list flex flex-col gap-3">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )

}
