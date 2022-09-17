import { useContext, useReducer, useState, useEffect, useRef } from 'react';
import { QuestsContext } from 'context/QuestsContext';
import { initialFormState, formReducer } from '../reducer';

import { Form } from 'components/Form';
import { InputGroup } from 'components/Form/InputGroup';
import { Label } from 'components/Form/Label';
import { Input } from 'components/Form/Input';
import { Button } from 'components/Button';
import { ValidationText } from 'components/Form/ValidationText';

export const QuestForm = ({ className }) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [formState, dispatchForm] = useReducer(formReducer, initialFormState);

  const { createQuest } = useContext(QuestsContext);

  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const levelInputRef = useRef();

  const { value: titleValue, isValid: titleIsValid } = formState.title;
  const { value: descriptionValue, isValid: descriptionIsValid } = formState.description;
  const { value: levelValue, isValid: levelIsValid } = formState.level;
  const { isShareable: isShareableValue } = formState;

  useEffect(() => {
    setFormIsValid(titleIsValid && descriptionIsValid && levelIsValid);
  }, [titleIsValid, descriptionIsValid, levelIsValid]);

  const textInputChangeHandler = (e) => {
    dispatchForm({
      type: 'USER_TEXT_INPUT',
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const validateTextInputHander = (e) => {
    dispatchForm({
      type: 'TEXT_INPUT_BLUR',
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const checkboxInputChangeHandler = (e) => {
    dispatchForm({
      type: 'USER_CHECKBOX_INPUT',
      field: e.target.name,
      payload: e.target.checked,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (formIsValid) {
      const newQuest = {
        title: titleValue,
        description: descriptionValue,
        level: levelValue,
        isShareable: isShareableValue,
      };

      createQuest(newQuest);

      dispatchForm({
        type: 'RESET',
        payload: initialFormState,
      });
    } else if (!titleIsValid) {
      titleInputRef.current.focus();
    } else if (!descriptionIsValid) {
      descriptionInputRef.current.focus();
    } else if (!levelIsValid) {
      levelInputRef.current.focus();
    }
  };

  const classNames = [className].filter(Boolean).join(' ');

  return (
    <div className={classNames || null}>
      <h3 className='h3 mb-2 text-center'>Create New Quest</h3>
      <Form onSubmit={onSubmitHandler}>
        <InputGroup className='mb-1 mb-lg-2' controlId='title'>
          <Label htmlFor='title' aria-label='Enter Title'>
            Title: *
          </Label>
          <Input
            id='title'
            placeholder='Enter quest title...'
            name='title'
            ref={titleInputRef}
            onChange={textInputChangeHandler}
            onBlur={validateTextInputHander}
            value={titleValue}
          />
          <ValidationText isShown={titleIsValid !== null && !titleIsValid}>
            You must enter a quest title
          </ValidationText>
        </InputGroup>
        <InputGroup className='mb-1 mb-lg-2'>
          <Label htmlFor='description' aria-label='Enter Description'>
            Description: *
          </Label>
          <Input
            as='textarea'
            id='description'
            placeholder='Enter quest description...'
            name='description'
            ref={descriptionInputRef}
            onChange={textInputChangeHandler}
            onBlur={validateTextInputHander}
            value={descriptionValue}
          />
          <ValidationText isShown={descriptionIsValid !== null && !descriptionIsValid}>
            You must enter a quest description
          </ValidationText>
        </InputGroup>

        <InputGroup className='mb-1 mb-lg-2'>
          <Label htmlFor='level' aria-label='Enter Required Level'>
            Required Level: *
          </Label>
          <Input
            id='level'
            type='number'
            placeholder='55'
            name='level'
            ref={levelInputRef}
            onChange={textInputChangeHandler}
            onBlur={validateTextInputHander}
            value={levelValue}
          />
          <ValidationText isShown={levelIsValid !== null && !levelIsValid}>
            You must enter a required level
          </ValidationText>
        </InputGroup>
        <InputGroup className='mb-1 mb-lg-2'>
          <Label htmlFor='isShareable' label='Select if this quest is shareable' className='mb-0'>
            This Quest is Shareable:
          </Label>
          <Input
            id='isShareable'
            type='checkbox'
            name='isShareable'
            checked={isShareableValue}
            onChange={checkboxInputChangeHandler}
            className='ms-1'
          />
        </InputGroup>
        <Button type='submit' disabled={!formIsValid}>
          Create Quest
        </Button>
      </Form>
    </div>
  );
};
