import Post from '../../components/post'

function Home() {
    return (<div className='row justify-content-center'>
            <div className='c-3'>a</div>
            <div className='c-6'>
            <Post />
            <Post />
            <Post />

            </div>
        <div className='c-3'>
            b
        </div>
        
    </div>  );
}

export default Home