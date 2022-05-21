import StarIcon from '@mui/icons-material/Star';
const Main =()=>{
    return(
        <main className="main">
        <img className="main-image"
            src="https://images.unsplash.com/photo-1576644461179-ddd318c669e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="chewgum"/>
        <div className="para">
            <h3 className="title">
                new bubble gums
            </h3>
            <p>
                the first plant based organic chewgums.
            </p>
            <div className="rating">
                <button className="btn btn-explore">
                    explore now
                </button>
                <div className='main-rating-collection'>
                    <div className='main-rating'>4.9|
                        <div>
                            <StarIcon style={{fontSize: 15}}/>
                            <StarIcon 
                            style={{fontSize: 15}}
                            />
                            <StarIcon style={{fontSize: 15}}/>
                            <StarIcon style={{fontSize: 15}}/>
                            <StarIcon style={{fontSize: 15}}/>
                        </div>
                    </div>
                    <p className="small">120K Total Review</p>
                </div>
                <div className="rating-discount">
                    <p className='dis'>
                        Get up to 30 off now!!
                    </p>
                    <p className="small-dis">
                        30% discount in first purchase.
                    </p>
                </div>
            </div>
        </div>
    </main>
    )
}

export default Main