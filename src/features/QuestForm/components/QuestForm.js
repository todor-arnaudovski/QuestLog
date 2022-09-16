import { useState } from 'react';

import { Form } from 'components/Form';
import { InputGroup } from 'components/Form/InputGroup';
import { Label } from 'components/Form/Label';
import { Input } from 'components/Form/Input';
import { Button } from 'components/Button';

// import styles from './QuestForm.module.scss';

export const QuestForm = ({ className }) => {
  const [inputs, setInputs] = useState({});

  const onChangeHandler = (e) => {
    setInputs((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(inputs);
    setInputs({});
  };

  const classNames = [className].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <h3 className='h3 mb-2 text-center'>Create New Quest</h3>
      <Form onSubmit={onSubmitHandler}>
        <InputGroup className='mb-1 mb-lg-2'>
          <Label htmlFor='name' label='Quest Name:' />
          <Input
            id='name'
            type='text'
            placeholder='Enter quest name...'
            name='name'
            value={inputs.name || ''}
            onChange={onChangeHandler}
          />
        </InputGroup>
        <InputGroup className='mb-1 mb-lg-2'>
          <Label htmlFor='description' label='Quest Description:' />
          <Input
            as='textarea'
            id='description'
            placeholder='Enter quest description...'
            name='description'
            value={inputs.description || ''}
            onChange={onChangeHandler}
          />
        </InputGroup>
        <InputGroup className='mb-1 mb-lg-2'>
          <Label htmlFor='level' label='Quest Level:' />
          <Input
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
