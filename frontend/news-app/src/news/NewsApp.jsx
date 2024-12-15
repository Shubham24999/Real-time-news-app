import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsApp = () => {
    const [news, setNews] = useState([]);
    const [country, setCountry] = useState('us'); // Default country

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(`/api/news/${country}`);
            setNews(response.data.articles);
        };
        fetchNews();
    }, [country]);

    return (
        <div>
            <h1>Top Headlines</h1>
            <select onChange={(e) => setCountry(e.target.value)} value={country}>
                <option value="us">United States</option>
                <option value="in">India</option>
                <option value="uk">United Kingdom</option>
                {/* Add more countries */}
            </select>
            <ul>
                {news.map((article, index) => (
                    <li key={index}>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsApp;
