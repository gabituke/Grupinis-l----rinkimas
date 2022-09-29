import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



// import './Explore.css'

const AllStories = () => {
	const [ stories, setStories ] = useState([]);
	const [ alert, setAlert ] = useState({
		message: '',
		status: ''
	});

	const [ refresh, setRefresh ] = useState(false);

	useEffect(
		() => {
			axios
				.get('/api/stories/')
				.then((resp) => {
					setStories(resp.data);
					console.log(resp.data);
				})
				.catch((error) => {
					setAlert({
						message: error.response.data,
						status: 'danger'
					});
				});
		},
		[ refresh ]
	);

	return (
		<>

			
		<div className="post-list">
			{alert.message && <div className={'alert alert-' + alert.status}>{alert.message}</div>}

            {stories && stories.map(story =>
                <div key={story.id} style={{ marginBottom: 30, borderBottom: '3px solid black' }}>
                    <div><strong>{story.title}</strong></div>
                    <div>{story.story}</div>
                    <div>Reikalingos lesos:{story.amount}</div>
                </div>
            )}
		</div>
		</>
	);
};

export default AllStories;