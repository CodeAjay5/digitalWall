import React, { useState } from "react";
import './../home/home.js'
import { useLocation, useNavigate } from 'react-router-dom'
import {HiViewBoards} from 'react-icons/hi'
import {TiSocialInstagram} from 'react-icons/ti'
import {BsFillBookmarksFill} from 'react-icons/bs'
import wall from './../../assets/wall.png'
import './post.css'

const Post = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className='container'>
        <div className='navbar'>
            <span className='username'>Welcome <span style={{fontWeight:"bold"}}>{location.state.id}</span>!</span>
            <div><HiViewBoards className='searchicon icons'/><button className='navibtn' onClick={(e) => {
                          e.preventDefault()
                            navigate('/home',{state:{id:location.state.id}})
                        }}><span>Board</span></button></div>
            <div><TiSocialInstagram className='searchicon icons'/><button className="navibtn">Posts</button></div>
            <div><BsFillBookmarksFill className='searchicon icons'/><button className='navibtn' onClick={(e) => {
                          e.preventDefault()
                            navigate('/bookmark',{state:{id:location.state.id}})
                        }}><span>Bookmarks</span></button></div>
            <div className='brand' onClick={(e) => {
              e.preventDefault()
              navigate('/')
            }}><img className='icon' src={wall} alt=""/>digitalWall</div>
        </div>
        <section>
            <label>
                + Add Posts
                <br />
                <span>up to 10 posts</span>
                <input
                className='input'
                type="file"
                name="images"
                onChange={onSelectFile}
                multiple
                accept="image/png , image/jpeg, image/webp"
                />
            </label>
            <br />

            <input className='input' type="file" multiple />

            {selectedImages.length > 0 &&
                (selectedImages.length > 10 ? (
                <p className="error">
                    You can't upload more than 10 posts! <br />
                    <span>
                    please delete <b> {selectedImages.length - 10} </b> of them{" "}
                    </span>
                </p>
                ) : (
                <button
                    className="upload-btn"
                    onClick={() => {
                    console.log(selectedImages);
                    }}
                >
                    UPLOADED {selectedImages.length} POST
                    {selectedImages.length === 1 ? "" : "S"}
                </button>
                ))}

            <div className="images">
                {selectedImages &&
                selectedImages.map((image, index) => {
                    return (
                    <div key={image} className="image">
                        <img src={image} height="200" alt="upload" />
                        <button onClick={() => deleteHandler(image)}>
                        delete image
                        </button>
                        <p>{index + 1}</p>
                    </div>
                    );
                })}
            </div>
        </section>
    </div>
    
  );
};

export default Post;