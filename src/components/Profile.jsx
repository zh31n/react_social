

let Profile = () => {
    return (
        <div className="content">
            <div className="prof_img">
                <img src="http://www.artmaxtour.ru/upload/iblock/2e3/2e36ad82eed3fd250652815ab9530445.jpg" alt="" />
            </div>
            <div className="prof_info"></div>
            <div className="prof_posts">
                My posts
                <div className="new_posts"></div>
                <div className="posts">
                    <div className="post"></div>
                    <div className="post"></div>
                    <div className="post"></div>
                </div>
            </div>
        </div>
    );
}

export default Profile;