import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { commentUpdate, commentDelete } from '../../../redux/actions';
import './comments.style.scss'

function SingleComment({ data }) {
  const [commentText, setCommentText] = useState('');
  const { text, id } = data;
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id))
  }

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  }

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  }

  return (
      <form onSubmit={handleUpdate} className='comments__item'>
        <div className='comments__itemBox'>
        <div onClick={handleDelete} className='comments__itemDelete'>&times;</div>
        <input type='text' value={commentText} onChange={handleInput} className='comments__input'/>
        </div>
        <input className='comments__input' type='submit' hidden />
      </form>
  )
}

export default SingleComment;