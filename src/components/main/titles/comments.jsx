import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { commentCreate, commentsLoad } from '../../../redux/actions';
import SingleComment from './SingleComment';
import './comments.style.scss'




function Comments(props) {
  const [textComment, setTextComment] = useState('');
  const comments = useSelector(state => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setTextComment(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  }

 
  return (
    <div className='card__comments'>
      <form onSubmit={handleSubmit} className='comments__itemCreate'>
        <input type='text' value={textComment} onChange={handleInput} className='comments__add'/>
        <input type='submit' hidden />
      </form>
      {!!comments.length && comments.map(res => {
        return <SingleComment key={res.id} data={res}/>
      })}
    </div>
  )
}

export default Comments;