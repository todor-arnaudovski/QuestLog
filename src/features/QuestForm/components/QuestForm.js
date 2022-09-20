import { useContext, useReducer, useState, useEffect, useRef } from 'react';
import { AvailableQuestsContext } from 'context/AvailableQuestsContext';
import { initialFormState, formReducer } from '../reducer';

import Select from 'react-select';
import 'assets/styles/vendor/Select.scss';

import { Form } from 'components/Form';
import { InputGroup } from 'components/Form/InputGroup';
import { Label } from 'components/Form/Label';
import { Input } from 'components/Form/Input';
import { Button } from 'components/Button';
import { ValidationText } from 'components/Form/ValidationText';

export const QuestForm = ({ className }) => {
  const [formState, dispatchForm] = useReducer(formReducer, initialFormState);
  const [formIsValid, setFormIsValid] = useState(false);
  const [preqOptions, setPreqOptions] = useState([]);

  const { questList: availableQuestsList, createQuest } = useContext(AvailableQuestsContext);

  useEffect(() => {
    setPreqOptions(() => {
      const optionsList = [];

      for (const quest of availableQuestsList) {
        optionsList.push({
          value: quest.id,
          label: quest.title,
        });
      }

      return optionsList;
    });
  }, [availableQuestsList]);

  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const levelInputRef = useRef();

  const { value: titleValue, isValid: titleIsValid } = formState.title;
  const { value: descriptionValue, isValid: descriptionIsValid } = formState.description;
  const { value: levelValue, isValid: levelIsValid } = formState.level;
  const { isShareable: isShareableValue } = formState;
  const { prerequisites: prerequisitesValue } = formState;

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

  const prereqChangeHandler = (selectedOptions) => {
    const fieldName = 'prerequisites';
    const selectedValues = selectedOptions.map((x) => x.value);

    dispatchForm({
      type: 'USER_SELECT_PREREQ',
      field: fieldName,
      payload: selectedValues,
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
        prerequisites: prerequisitesValue,
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
          <Label htmlFor='title' ariaLabel='Enter Title'>
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
          <Label htmlFor='description' ariaLabel='Enter Description'>
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
          <Label htmlFor='level' ariaLabel='Enter Required Level'>
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
          <Label
            htmlFor='isShareable'
            ariaLabel='Select if this quest is shareable'
            className='mb-0'
          >
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
        <InputGroup className='mb-1 mb-lg-2'>
          <Label ariaLabel='Select quest prerequisites to add'>Add Prerequisites:</Label>
          <Select
            // delimiter=' '
            options={preqOptions}
            isMulti
            onChange={prereqChangeHandler}
            className='react-select-container'
            classNamePrefix='react-select'
          />
        </InputGroup>
        <Button type='submit' disabled={!formIsValid}>
          Create Quest
        </Button>
      </Form>
    </div>
  );
};
