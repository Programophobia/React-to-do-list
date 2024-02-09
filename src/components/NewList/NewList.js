import styles from '../ColumnForm/ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const NewList= props => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description}));
        setTitle('');
        setDescription('');
     };

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
           <span>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)} /> 
           <span>description:</span><TextInput value={description} onChange={e => setDescription(e.target.value)} />
           <Button>Add column</Button>
        </form>
	);
};

export default NewList;