import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get('http://localhost:4000/api/news');
            setNews(response.data);
        };

        fetchNews();
    }, []);

    return (
        <div className="container mt-5">
            <h1>News Dashboard</h1>
            <div className="row">
                {news.map((article, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card">
                            <img src={article.urlToImage} className="card-img-top" alt={article.title} />
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">{article.description}</p>
                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read more</a> // cSpell:ignore noreferrer

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
