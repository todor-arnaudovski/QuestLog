import { useState, useContext } from 'react';
import { QuestsContext } from 'context/QuestsContext';

import { Form } from 'components/Form';
import { InputGroup } from 'components/Form/InputGroup';
import { Label } from 'components/Form/Label';
import { Input } from 'components/Form/Input';
import { Button } from 'components/Button';

// import styles from './QuestForm.module.scss';

export const QuestForm = ({ className }) => {
  const [inputs, setInputs] = useState({});
  const questsContext = useContext(QuestsContext);

  const onChangeHandler = (e) => {
    setInputs((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    questsContext.addNewQuest(inputs);

    setInputs({});
  };

  const classNames = [className].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <h3 className='h3 mb-2 text-center'>Create New Quest</h3>
      <Form onSubmit={onSubmitHandler}>
        <InputGroup className='mb-1 mb-lg-2'>
          <Label htmlFor='title' label='Title:' />
          <Input
            required
            id='title'
            type='text'
            placeholder='Enter quest title...'
            name='title'
            value={inputs.title || ''}
            onChange={onChangeHandler}
          />
        </InputGroup>
        <InputGroup className='mb-1 mb-lg-2'>
          <Label htmlFor='description' label='Description:' />
          <Input
            required
            as='textarea'
            id='description'
            placeholder='Enter quest description...'
            name='description'
            value={inputs.description || ''}
            onChange={onChangeHandler}
          />
        </InputGroup>
        <InputGroup className='mb-1 mb-lg-2'>
          <Label htmlFor='level' label='Required Level:' />
          <Input
            required
            id='level'
            type='number'
            placeholder='55'
            name='level'
            value={inputs.level || ''}
            onChange={onChangeHandler}
          />
        </InputGroup>
        <Button type='submit'>Create Quest</Button>
      </Form>
    </div>
  );
};
