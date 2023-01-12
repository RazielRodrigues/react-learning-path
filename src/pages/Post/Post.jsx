// CSS
import "./Post.css";

// hooks
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useParams } from "react-router-dom";

export const Post = () => {
    const { id } = useParams();
    const { document: post } = useFetchDocument("posts", id);

    return (
        <div className='post_container'>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <img src={post.image} alt={post.title} />
                    <p>{post.body}</p>
                    <h3>Este post trata sobre:</h3>
                    <div className='tags'>
                        {post.tags.map((tag) => (
                            <p key={tag}>
                                <span>#</span>
                                {tag}
                            </p>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};