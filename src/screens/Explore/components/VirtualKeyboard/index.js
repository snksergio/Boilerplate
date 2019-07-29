import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';
import { KeyboardContainer } from './style';
import 'react-simple-keyboard/build/css/index.css';

class VirtualKeyboard extends Component {
  render() {
    const {
      layout,
      layoutName,
      display,
      mergeDisplay,
      theme,
      buttonTheme,
      debug,
      useMouseEvents,
      useTouchEvents,
      autoUseTouchEvents,
      preventMouseDownDefault,
      stopMouseDownPropagation,
      disableCaretPositioning,
      useButtonTag,
      newLineOnEnter,
      tabCharOnTab,
      inputName,
      maxLength,
      inputPattern,
      baseClass,
      disableRowButtonContainers,
      disableButtonHold,
      syncInstanceInputs,
      physicalKeyboardHighlight,
      physicalKeyboardHighlightTextColor,
      physicalKeyboardHighlightBgColor,
      onKeyPress,
      onChange,
      onRender,
      beforeFirstRender,
      beforeRender,
      onInit,
      onChangeAll,
      clearInput,
      getInput,
      setInput,
      dispatch,
      destroy,
      getButtonElement,
      addButtonTheme,
      removeButtonTheme,
    } = this.props;
    return (
      <KeyboardContainer>
        <Keyboard
          {...this.props}
          layout={layout}
          layoutName={layoutName}
          display={display}
          mergeDisplay={mergeDisplay}
          theme={`Keytheme , ${theme || ''}`}
          buttonTheme={buttonTheme}
          debug={debug}
          useMouseEvents={useMouseEvents}
          useTouchEvents={useTouchEvents}
          autoUseTouchEvents={autoUseTouchEvents}
          preventMouseDownDefault={preventMouseDownDefault}
          stopMouseDownPropagation={stopMouseDownPropagation}
          disableCaretPositioning={disableCaretPositioning}
          useButtonTag={useButtonTag}
          newLineOnEnter={newLineOnEnter}
          tabCharOnTab={tabCharOnTab}
          inputName={inputName}
          maxLength={maxLength}
          inputPattern={inputPattern}
          baseClass={baseClass}
          disableRowButtonContainers={disableRowButtonContainers}
          disableButtonHold={disableButtonHold}
          syncInstanceInputs={syncInstanceInputs}
          physicalKeyboardHighlight={physicalKeyboardHighlight}
          physicalKeyboardHighlightTextColor={
            physicalKeyboardHighlightTextColor
          }
          physicalKeyboardHighlightBgColor={physicalKeyboardHighlightBgColor}
          onKeyPress={onKeyPress}
          onChange={onChange}
          onRender={onRender}
          beforeFirstRender={beforeFirstRender}
          beforeRender={beforeRender}
          onInit={onInit}
          onChangeAll={onChangeAll}
          clearInput={clearInput}
          getInput={getInput}
          setInput={setInput}
          dispatch={dispatch}
          destroy={destroy}
          getButtonElement={getButtonElement}
          addButtonTheme={addButtonTheme}
          removeButtonTheme={removeButtonTheme}
        />
      </KeyboardContainer>
    );
  }
}

export default VirtualKeyboard;
