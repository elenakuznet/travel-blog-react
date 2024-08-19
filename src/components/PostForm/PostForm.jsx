import Button from '../Button/Button';
import styles from './PostForm.module.css';
import { useEffect, useReducer, useRef } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './PostForm.state';
import Input from '../Input/Input';



function PostForm({onSubmit}) {
  
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);

  const titleRef = useRef();
  const dateRef = useRef();
  const postRef = useRef();


  const focusError = (isValid) => {
    switch(true) {
      case !isValid.title :
        titleRef.current.focus();
        break;
      case !isValid.date : 
        dateRef.current.focus();
        break;
      case !isValid.post :
        postRef.current.focus();
        break;
    }

  }

  const { isValid, isFormReadyToSubmit, values } = formState;

  useEffect(() => {

    let timerId;

    if (!isValid.title || !isValid.date || !isValid.post) {
      timerId = setTimeout(() => {
        focusError(isValid);
        dispatchForm({type: 'RESET_VALIDITY'});
        // setFormValidState(INITIAL_STATE)
      }, 2000)
    }
    return () => {
      clearTimeout(timerId);

    }

  }, [isValid])


useEffect(() => {
  if(isFormReadyToSubmit) { 
    onSubmit(values);
    dispatchForm({ type: 'CLEAR' });
  }

}, [isFormReadyToSubmit, values, onSubmit])



const onChange = (event) => {
  dispatchForm({ type: 'SET_VALUE', payload: { [event.target.name]: event.target.value }})

}


const addPostItem = (event) => {
  event.preventDefault();


  dispatchForm({type: 'SUBMIT'});


  // onSubmit(formProps);
}



  return (
    
      <form className={styles['post-form']} onSubmit={addPostItem}>
        <div>
            <Input type='text' ref={titleRef} isValid={isValid.title} onChange={onChange} value={values.title} name='title' appearance="title"/>
        </div>

        <div className={styles['form-row']}>
          <label htmlFor="date" className={styles['form-label']}><i class="ri-calendar-line"></i> <span>Дата</span></label>
          <Input type="date" ref={dateRef} isValid={isValid.date} onChange={onChange}  name='date' value={values.date} id='date' className={cn(styles['input'], {
            [styles['invalid']] : !isValid.date
          })}/>
        </div>

        <div className={styles['form-row']}>
          <label htmlFor="tag" className={styles['form-label']}><i class="ri-calendar-line"></i> <span>Метки</span></label>
          <input type="text" onChange={onChange}  name='tag' id='tag' value={values.tag} className={cn(styles['input'], {
            [styles['invalid']] : !isValid.title
          })}/>
        </div>
        
        
        <textarea name='post' ref={postRef} value={values.post}  onChange={onChange}  className={cn(styles['input'], {
            [styles['invalid']] : !isValid.post
          })}/>
        <Button text='save' onClick={() => console.log("КЛИК")}/>
        
      </form>
  )
}

export default PostForm