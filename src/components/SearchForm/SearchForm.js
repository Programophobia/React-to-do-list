import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateSearchstring, getSearchString } from '../../redux/store';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const searchReset  = useSelector(getSearchString)

    
    const handle = e => {
        e.preventDefault();
        //dispatch(updateSearchstring( {title}));
        dispatch(updateSearchstring( title ));
        setTitle('');
        
    }   

    return (
        <form className={styles.searchForm} onSubmit={ e=> handle(e) }>
            <TextInput placeholder="Search..." value={title}  onChange={e => setTitle(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;