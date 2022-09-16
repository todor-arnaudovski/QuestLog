import { useContext, useReducer } from 'react';
import { QuestsContext } from 'context/QuestsContext';
import { initialFormState, formReducer, initializer } from '../reducer';

import { Form } from 'components/Form';
import { InputGroup } from 'components/Form/InputGroup';
import { Label } from 'components/Form/Label';
import { Input } from 'components/Form/Input';
import { Button } from 'components/Button';

export const QuestForm = ({ className }) => {
  const [formState, dispatchForm] = useReducer(
    formReducer,
    initialFormState,
    initializer
  );
  const questsContext = useContext(QuestsContext);

  const onTextChangeHandler = (e) => {
    dispatchForm({
      type: 'USER_INPUT_TEXT',
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const toggleIsShareableHandler = (e) => {
    dispatchForm({
      type: 'USER_INPUT_CHECKBOX',
      field: e.target.name,
      payload: e.target.checked,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    questsContext.addNewQuest(formState);

    dispatchForm({
      type: 'RESET',
      payload: initialFormState,
    });
  };

  const classNames = [className].filter(Boolean).join(' ');

  return (
    <div className={classNames || null}>
      <h3 className='h3 mb-2 text-center'>Create New Quest</h3>
      <Form onSubmit={onSubmitHandler}>
        <InputGroup className='mb-1 mb-lg-2'>
          <Label htmlFor='title' aria-label='Enter Title'>
            Title:
          </Label>
          <Input
            required
            id='title'
            type='text'
            placeholder='Enter quest title...'
            name='title'
            value={formState.title}
            onChange={onTextChangeHandler}
          />
        </InputGroup>
        <InputGroup className='mb-1 mb-lg-2'>
          <Label htmlFor='description' aria-label='Enter Description'>
            Description:
          </Label>
          <Input
            required
            as='textarea'
            id='description'
            placeholder='Enter quest description...'
            name='description'
            value={formState.description || ''}
            onChange={onTextChangeHandler}
          />
        </InputGroup>
        <InputGroup className='mb-1 mb-lg-2'>
          <Label htmlFor='level' aria-label='Enter Required Level'>
            Required Level:
          </Label>
          <Input
            required
            id='level'
            type='number'
            placeholder='55'
            name='level'
            value={formState.level || ''}
            onChange={onTextChangeHandler}
          />
        </InputGroup>
        <InputGroup className='mb-1 mb-lg-2'>
          <Label
            htmlFor='isShareable'
            label='Select if this quest is shareable'
            className='mb-0'
          >
            This Quest is Shareable:
          </Label>
          <Input
            id='isShareable'
            type='checkbox'
            name='isShareable'
            checked={formState.isShareable}
            onChange={toggleIsShareableHandler}
            className='ms-1'
          />
        </InputGroup>
        <Button type='submit'>Create Quest</Button>
      </Form>
    </div>
  );
};
