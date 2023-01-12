import "./Dashboard.css";

import { Link } from "react-router-dom";

import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

export const Dashboard = () => {
    const { user } = useAuthValue();
    const uid = user.uid;

    const { documents: posts } = useFetchDocuments("posts", null, uid);

    const { deleteDocument } = useDeleteDocument("posts");

    console.log(uid);
    console.log(posts);

    return (
        <div className='dashboard'>
            <h2>Dashboard</h2>
            <p>Gerencie os seus posts</p>
            {posts && posts.length === 0 ? (
                <div className='noposts'>
                    <p>Não foram encontrados posts</p>
                    <Link to="/posts/create" className="btn">
                        Criar primeiro post
                    </Link>
                </div>
            ) : (
                <div className='post_header'>
                    <span>Título</span>
                    <span>Ações</span>
                </div>
            )}

            {posts &&
                posts.map((post) => (
                    <div className='post_row' key={post.id}>
                        <p>{post.title}</p>
                        <div className='actions'>
                            <Link to={`/posts/${post.id}`} className="btn btn-outline">
                                Ver
                            </Link>
                            <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">
                                Editar
                            </Link>
                            <button
                                onClick={() => deleteDocument(post.id)}
                                className="btn btn-outline btn-danger"
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                ))}
        </div>
    );
};