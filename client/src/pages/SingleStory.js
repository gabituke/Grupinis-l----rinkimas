import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'





// import './SinglePost.css'


const SingleStory = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [story, setStory] = useState({})
    const [donation, setDonation] = useState('')

    const [alert, setAlert] = useState({
        message: '',
        status: ''
    })
    
 
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get('/api/stories/' + id)
        .then(resp => {
            if(!resp.data) {
               
                navigate('/')
                return 
            }

            setStory(resp.data)
        })
        .catch((error) => {
            console.log(error)
            navigate('/')
        })
    }, [id, navigate, refresh])

    const handleForm = (e) => {
        e.preventDefault()
        
        axios.post('/api/donations/', { donation, postId: id })
        .then(resp => {
            setAlert({
                message: resp.data,
                status: 'success'
            })
            setDonation('')

            setRefresh(!refresh)

            setTimeout(() => setAlert({
                message: '',
                status: ''
            }), 2000)
        })
        .catch(error => {
            console.log(error)
            setAlert({
                message: error.response.data,
                status: 'danger'
            })
      
          
        })
    }

    return (
        <>
 
        <div className="container-single">
        
        <div className="single-post">
                <h1>{story.title}</h1>
                <img src={story.photo} alt='' />
                <div className="content">
                    {story.story}
                </div>
                <div >
                    {story.amount}
                </div>
                {story.donation &&
                    <div className="mt-3 comments">
                        <h3 className="mb-4">Paaukoti pinigai</h3>
                        {story.donation.map(entry => 
                            <div key={entry.id} className="pb-3 mb-3 border-bottom comment" style={{ borderColor: 'grey' }}>
                                <div className="user mb-2">
                                    <strong className="date d-block">{entry.donation.donator_name + ' ' + entry.donation.last_name}</strong>
                                 
                                </div>
                                <div style={{whiteSpace: "pre-line"}}>
                                    {entry.donation}
                                </div>
                            </div>    
                        )}
                    </div>
                }
            </div>
                
                        <div className="form-comment">
                    <form onSubmit={(e) => handleForm(e)}>
                            <input type="number" className="form-control" placeholder="Įveskite sumą" value={donation} onChange={(e) => setDonation(e.target.value)} />
                            <button className="btn-single">Paaukoti</button>
                     
                    
                    </form>
                    </div>
               
            </div>
     
    
    </>
    ) 
}

export default SingleStory